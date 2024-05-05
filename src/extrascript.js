{userData ? (
    <>
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Paths />
      </main>
    </>
  ) : isLogin ?(
    <>
      <Login />
      <Checkbox
        checked={isLogin}
        onChange={() => setIsLogin(!isLogin)}
      />
    </>
  ) :(
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
  ) }