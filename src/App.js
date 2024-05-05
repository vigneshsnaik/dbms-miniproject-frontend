import { useState, useEffect } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import SignUp from "./scenes/global/Login";
import Login from "./scenes/global/UserLogin";
import { CssBaseline, ThemeProvider, Checkbox } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Paths from "./Paths";
import { styled } from "@mui/system";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLogin, setIsLogin] = useState(false); // Initially not logged in
  const [userData, setUserData] = useState(null);

  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: "white", // More distinct color
    '&.Mui-checked': {
      color: theme.palette.secondary.main, // Ensure visible contrast
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Hover effect for feedback
    },
    'svg': {
      fontSize: '1.5rem', // Larger size for visibility
    }
  }));

  useEffect(() => {
    // Check if user data exists in cache
    const cachedUserData = localStorage.getItem("userId");
    if (cachedUserData) {
      setUserData(cachedUserData);
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {userData ? (
            <>
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Paths />
              </main>
            </>
          ) : isLogin ? (
            <div  style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "auto",
              border: "1px solid grey",
              padding: "100px",
            }}> <Login />
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px"}}>
            <div> Don't have an account Signup </div> 
           
            <CustomCheckbox
            checked={isLogin}
            onChange={() => setIsLogin(!isLogin)}
          /> 
          </div>
            </div>
           
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "auto",
                border: "1px solid grey",
                padding: "100px",
              }}
            >
              <SignUp />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                <div style={{ marginRight: "10px" }}>Already have an account?</div>
                <CustomCheckbox
                  checked={isLogin}
                  onChange={() => setIsLogin(!isLogin)}
                />
              </div>
            </div>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
