import React, { useEffect } from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import cardImg from "../../../assets/card.jpeg";
import Header from "../../../components/Header";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);
function Marketplace() {
  const [marketplaceData, setMarketplaceData] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    // Check if user data exists in cache
    getMarketplaceData();
  }, []);
  async function getMarketplaceData() {
    const { data } = await supabase.from("marketplace").select();
    setMarketplaceData(data);
  }

  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {console.log(marketplaceData)}
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
        {marketplaceData &&
          marketplaceData.map((element, i) => (
            <Box
              key={`${element.id}-${i}`}
              gridColumn={{
                xs: "span 12",
                sm: "span 6",
                md: "span 4",
                lg: "span 3",
              }}
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              display="flex"
              flexDirection="column"
              justifyContent={"flex-end"}
              padding={"0.3rem"}
            >
              <img
                alt=""
                style={{ maxHeight: "190px", width: "100%" }}
                src={cardImg}
                height={{ xs: "20px", sm: "25px", md: "30px", lg: "10px" }}
              />
              <Box display="flex" justifyContent="space-between" margin="3px">
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {element.id}
                </Typography>
                <Typography color={colors.grey[100]} textTransform="capitalize">
                  {element.asset_type}
                </Typography>
              </Box>

              <Box>
                <Typography color={colors.grey[100]}>
                  {element.description}
                </Typography>
              </Box>

              <Box
                display={{ md: "flex", xl: "flex" }}
                justifyContent={{ md: "space-between" }}
                alignItems={{ md: "center" }}
                marginTop="5px"
              >
                <Box
                  backgroundColor="gray"
                  width={{ xs: "50%", md: "90px" }}
                  borderRadius="4px"
                  textAlign="center"
                  height="30px"
                  p="5px 10px"
                  marginBottom={{ xs: "5px" }}
                >
                  {new Date(element.date_acquired).toLocaleDateString()}
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
