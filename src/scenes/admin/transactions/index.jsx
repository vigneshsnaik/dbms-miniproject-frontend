import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);
const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getTransactions();
  }, []);
  async function getTransactions() {
    const { data } = await supabase.from("transactions").select();
    setTransactions(data);
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 3 },
    { field: "asset_id", headerName: "Asset ID", flex: 0.5 },
    { field: "sender_id", headerName: "Sender ID", flex: 2 },
    { field: "receiver_id", headerName: "Receiver ID", flex: 2 },
    { field: "contract", headerName: "Contract", flex: 2 },
    { field: "time", headerName: "time", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Transactions" subtitle="List of Transactions" />
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
        <DataGrid rows={transactions} columns={columns} />
      </Box>
      {console.log(transactions)}
    </Box>
  );
};

export default Transactions;
