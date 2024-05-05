import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { createClient } from "@supabase/supabase-js";
import contract from "../../../contracts/NFTCollectible.json";
import Web3 from "web3";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

const contractAddress = "0x14b962a767d27eEB33f056af862ef62EA601194a";
const abi = contract.abi;

const ManageAssets = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = () => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setCurrentAccount(window.ethereum.selectedAddress);
    }
  };

  const connectWalletHandler = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        console.log("Connected:", accounts[0]);
      } else {
        console.log("No ethereum provider found");
      }
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  };
  const mintNftHandler = async () => {
    try {
      if (!window.ethereum) {
        console.log("Please install a web3 provider, like MetaMask");
        return;
      }

      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();

      if (!abi) {
        console.log("Please provide a valid ABI ");
        return;
      }
      if (!contractAddress) {
        console.log("Please provide a valid contract address");
        return;
      }

      const contractInstance = new web3.eth.Contract(abi, contractAddress);

      if (!contractInstance.methods.mint) {
        console.log("The mint method does not exist on this contract");
        return;
      }

      const result = await contractInstance.methods.mint().send({
        from: accounts[0],
      });

      console.log("NFT minted:", result);
    } catch (error) {
      console.log("Error minting NFT:", error);
    }
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className="cta-button mint-nft-button">
        Mint NFT
      </button>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    // Check if user data exists in cache
    getAssets();
  }, []);
  async function getAssets() {
    const { data } = await supabase.from("assets").select();
    if (data) {
      setAssets(data.filter((asset) => asset !== null));
    }
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
      {mintNftButton()}
      {connectWalletButton()}
    </Box>
  );
};

export default ManageAssets;
