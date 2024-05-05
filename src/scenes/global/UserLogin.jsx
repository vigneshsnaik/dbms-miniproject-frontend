import { Box, Button, TextField,Checkbox } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { styled } from '@mui/system';

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);


const StyledLink = styled(RouterLink)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none', // Ensures no decoration on hover
  }
});


const UserLogin = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [user, setUser] = useState([]);

  async function getUser(values) {
    const { data } = await supabase
      .from("login")
      .select("password,admin,name")
      .eq("id", values.userID);
    setUser(data);
  }
  const handleFormSubmit = (values) => {
    getUser(values);
    if (values.password === user[0].password) {
      localStorage.setItem("userId", values.userID);
      localStorage.setItem("userName", user[0].name);
      localStorage.setItem("type", user[0].admin);
      console.log("admin", user[0]);
      console.log("user", values.userID);
      window.location.reload(true);
    } else {
      window.alert("Invalid username or password");
    }
  };



  return (
    <Box >
      <Header title="Log In" subtitle="User Login" />
      {/* <div  style={{paddingBottom:"10px" }}>
      <StyledLink to="/signup">Don't have an account? Signup</StyledLink>
      <Checkbox/>
      </div> */}

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="userID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userID}
                name="userID"
                error={!!touched.userID && !!errors.userID}
                helperText={touched.userID && errors.userID}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Log In
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  userID: yup.string().required("required"),
  password: yup.string().required("required"),
});
const initialValues = {
  userID: "",
  password: "",
};

export default UserLogin;
