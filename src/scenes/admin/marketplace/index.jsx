import React from "react";
import { Typography, Button } from "@mui/material";

function Marketplace() {
  return (
    <div>
      <Typography variant="h4">Marketplace</Typography>
      <Typography variant="body1">
        Welcome to our marketplace! Here you can find a variety of products and
        services offered by our vendors.
      </Typography>
      <Button variant="contained" color="primary">
        Browse Marketplace
      </Button>
    </div>
  );
}

export default Marketplace;
