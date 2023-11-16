import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import GroupIcon from "@mui/icons-material/Group";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

import Header from "../../../components/Header";
import { mockMarketplacedata } from "../../../data/mockData";

function Marketplace() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="MARKETPLACE"
          subtitle="Welcome to our marketplace! Here you can find a variety of products and services offered by our vendors."
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* card */}
        {mockMarketplacedata.map((element, i) => (
          <Box
            key={`${element.id}-${i}`}
            gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4", lg: "span 3" }}
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            display="flex"
            flexDirection="column"
            justifyContent={"flex-end"}
            padding={"0.3rem"}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              margin="3px"
            >
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {element.name}
              </Typography>
              <Typography
                color={colors.grey[100]}
                textTransform="capitalize"
              >
                {element.assetType}
              </Typography>
            </Box>

            <Box>
              <Typography color={colors.grey[100]}>
                {element.descrption}
              </Typography>
            </Box>
  
    <Box display={{md:"flex",xl:"flex"}}
      justifyContent={{md:"space-between"}}
      alignItems={{md:"center"}}
      marginTop="5px"
    >
         <Box
              backgroundColor="gray"
              width={{ xs: "100%", md: "90px" }}
              borderRadius="4px"
              textAlign="center"
              height="30px"
              p="5px 10px"
               marginBottom={{xs:"5px"}}
            >
              {element.dateacquired}
            </Box>

            <Box
              backgroundColor={colors.greenAccent[500]}
              p="5px 10px"
              width={{ xs: "100%", md: "60px" }}
              borderRadius="4px"
              textAlign="center"
            >
              ₹ {element.price}
            </Box>
    
            </Box>
            </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Marketplace;
