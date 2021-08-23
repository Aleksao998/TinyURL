import { useState } from "react";
import DashboardBackGround from "../../components/background/background";
import Logo from "../../components/logo/logo";
import InputCard from "./components/inputCard/inputCard";
import ResponseCard from "./components/responseCard/reponseCard";

const Dashboard = (): JSX.Element => {
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  return (
    <div className="container-fluid">
      <div className="row">
        <Logo />
      </div>
      <div className="row">
        {shortUrl==="" ? <InputCard setShortURL={setShortUrl}  setLongURL={setLongUrl} /> : <ResponseCard setShortUrl={setShortUrl} setLongUrl={setLongUrl} longUrl={longUrl} shortUrl={shortUrl}/>}
        
      </div>

      <DashboardBackGround />
    </div>
  );
};

export default Dashboard;
