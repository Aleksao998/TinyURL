import { useState } from "react";
import DashboardBackGround from "./components/background/background";
import InputCard from "./components/inputCard/inputCard";
import Logo from "./components/logo/logo";
import ResponseCard from "./components/responseCard/reponseCard";

const Dashboard = (): JSX.Element => {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="container-fluid">
      <div className="row">
        <Logo />
      </div>
      <div className="row">
        {shortUrl==="" ? <InputCard setShortUrl={setShortUrl}/> : <ResponseCard setShortUrl={setShortUrl}/>}
        
      </div>

      <DashboardBackGround />
    </div>
  );
};

export default Dashboard;
