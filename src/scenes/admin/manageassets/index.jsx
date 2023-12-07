import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);
const ManageAssets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [assets, setAssets] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // Check if user data exists in cache
    getAssets();
  }, []);
  async function getAssets() {
    const { data } = await supabase.from("assets").select();
    setAssets(data);
  }
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "owner", headerName: "Owner", flex: 2 },
    { field: "asset_type", headerName: "Asset Type", flex: 1 },
    { field: "taxable", headerName: "Taxable", flex: 1 },
    { field: "marketplace_listed", headerName: "Marketplace Listed", flex: 1 },
    { field: "price", headerName: "Price", flex: 0.5 },
  ];

  return (
    <Box m="20px">
      <Header title="ASSETS" subtitle="Manage all assets" />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={assets}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ManageAssets;
