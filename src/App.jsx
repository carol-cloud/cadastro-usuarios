import { useState } from "react";
import { AppRouter } from "./routes";

import "./assets/global.css";

export const App = () => {
  const [userData, setUserData] = useState({
    token: localStorage.getItem("token") || undefined,
    user: undefined,
  });

  return (

    <AppRouter userData={userData} setUserData={setUserData} />

  );
};
