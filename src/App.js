import { useState, useEffect } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import SignUp from "./scenes/global/Login";
import Login from "./scenes/global/UserLogin";
import { CssBaseline, ThemeProvider, Checkbox } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Paths from "./Paths";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // Check if user data exists in cache
    const cachedUserData = localStorage.getItem("userId");
    if (cachedUserData) {
      setUserData(cachedUserData);
    }

    if (localStorage.getItem("type")) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {userData ? (
            <>
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Paths />
              </main>
            </>
          ) : isLogin ? (
            <>
              <SignUp />
              {/* <Typography onclick={setIsLogin(true)}> */}
              Already have an account?
              {/* </Typography> */}
              <Checkbox
                checked={isLogin}
                onChange={() => setIsLogin(!isLogin)}
              />
            </>
          ) : (
            <>
              <Login />
              {/* <Typography onclick={setIsLogin(false)}> */}
              Create an account?
              {/* </Typography> */}
              <Checkbox
                checked={isLogin}
                onChange={() => setIsLogin(!isLogin)}
              />
            </>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
