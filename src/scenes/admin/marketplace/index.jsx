import React, { useEffect } from "react";
import { Typography, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../../../theme";
import cardImg from "../../../assets/card.jpeg";
import Header from "../../../components/Header";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./Marketplace.css"; // Import your CSS file for styling

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
    console.log("MarketPlace Data", data);
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
              className="asset-card" // Add a class for styling
            >
              <div className="asset-img-wrap">
                <img
                  alt=""
                  className="asset-img"
                  src={element.imgUrl ? element.imgUrl : cardImg}
                />
                <div className="asset-img-overlay">
                  <Typography
                    color="inherit"
                    variant="body2"
                    textAlign="center"
                  >
                    <Button variant="contained" color="primary">
                      Buy Now
                    </Button>
                  </Typography>
                </div>
              </div>
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
                <Typography
                  color={colors.grey[100]}
                  style={{ textTransform: "capitalize" }}
                >
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
                  width="auto"
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
