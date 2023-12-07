import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@mui/material";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

const Users = () => {
  const [owners, setOwners] = useState([]);

  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // Check if user data exists in cache
    const cachedUserData = localStorage.getItem("userId");
    if (cachedUserData) {
      setUserData(cachedUserData);
    }

    if (localStorage.getItem("type") === true) {
      setIsAdmin(true);
      getOwners();
    }
  }, []);

  async function getOwners() {
    const { data } = await supabase.from("login").select();
    setOwners(data);
    console.log(data);
  }

  async function deleteOwner(id) {
    await supabase.from("owner").delete().eq("id", id);
    getOwners();
  }

  const handleDelete = (params) => {
    const { id } = params.row;
    deleteOwner(id);
  };

  const handleEdit = (params) => {
    console.log("Edit clicked for ID:", params.row.id);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 2 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "userType",
      headerName: "User Type",
      flex: 1,
      renderCell: ({ row: { admin } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              admin ? colors.greenAccent[600] : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {admin ? (
              <AdminPanelSettingsOutlinedIcon />
            ) : (
              <LockOpenOutlinedIcon />
            )}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {admin ? "Admin" : "Owner"}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(params)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(params)}
            >
              Edit
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header title="Users" subtitle="Managing the Users" />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          {!isAdmin ? (
            <Typography variant="h3" color={colors.grey[100]}>
              You are not authorized to view this page
            </Typography>
          ) : (
            <DataGrid
              rows={owners}
              columns={columns}
              components={{
                Toolbar: GridToolbar,
              }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Users;
