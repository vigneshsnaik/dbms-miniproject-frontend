import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { Link } from "react-router-dom";
import { mockTransactions } from "../../../data/mockData";
import Apartment from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Header from "../../../components/Header";
import StatBox from "../../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/assets">
            <StatBox
              title="Assets"
              //   add href here
              subtitle="123 assets listed"
              icon={
                <Apartment
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Link>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/marketplace">
            <StatBox
              title="Marketplace"
              subtitle="Manage Marketplace Listing"
              icon={
                <LocalGroceryStoreIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Link>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/transactions">
            <StatBox
              title="Transactions"
              //   add href here
              subtitle="View transactions"
              icon={
                <LibraryAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Link>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/manageusers">
            <StatBox
              title="Users"
              //   add href here
              subtitle="Manage Users"
              icon={
                <GroupIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Link>
        </Box>

        {/* ROW 2 */}
      </Box>
    </Box>
  );
};

export default Dashboard;
