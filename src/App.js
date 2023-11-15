import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/admin/dashboard";
import Users from "./scenes/admin/manageusers";
import Transactions from "./scenes/admin/transactions";
import ManageAssets from "./scenes/admin/manageassets";
import Form from "./scenes/admin/form";
import FAQ from "./scenes/admin/faq";
import Marketplace from "./scenes/admin/marketplace";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/admin/" element={<Dashboard />} />
              <Route path="/admin/manageUsers" element={<Users />} />
              <Route path="/admin/assets" element={<ManageAssets />} />
              <Route path="/admin/transactions" element={<Transactions />} />
              <Route path="/admin/form" element={<Form />} />
              <Route path="/admin/faq" element={<FAQ />} />
              <Route path="/admin/marketplace" element={<Marketplace />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
