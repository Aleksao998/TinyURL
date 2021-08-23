import axios from 'axios';
import MaterialTable from 'material-table';
import { useEffect, useState } from 'react';
import DashboardBackGround from "../../components/background/background";
import Logo from "../../components/logo/logo";

const AdminPanel = (): JSX.Element => {
  const [urlTrafic, setUrlTrafic] = useState([])
  const [domainTrafic, setDomainTrafic] = useState([])
  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get("http://localhost:5000/visitedDomainsSorted");
      setUrlTrafic(response.data.urlTrafic)
      setDomainTrafic(response.data.domainTrafic)
    }
    fetchData();
  },[])
    return (
      <div className="container-fluid">
      <div className="row">
        <Logo />
      </div>
      <div className="row">
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'URL', field: '_id' },
            { title: 'Url Trafic', field: 'count' },
          ]}
          data={urlTrafic}
          options={{
            search: false
          }}
          title="Most Popular URL Last 24h"
        />
      </div>

      <div style={{ maxWidth: '100%', marginTop:"25px" }}>
        <MaterialTable
          columns={[
            { title: 'URL', field: '_id' },
            { title: 'Domain Trafic', field: 'count' },
          ]}
          data={domainTrafic}
          options={{
            search: false
          }}
          title="Most Popular Domains Last 24h"
        />
      </div>
        
      </div>

      <DashboardBackGround />
    </div>
    );
  };
  
  export default AdminPanel;
  