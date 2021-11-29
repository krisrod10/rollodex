import Card from './components/Card'
import { useState } from 'react';





const Dashboard = () => {
    const [isOnline, setisOnline ] = useState(false);
    return(
        <Card title = "Online mode" body="Is this application connected to the internet?" isOnline={isOnline} setIsOnline={setIsOnline} component={Component}></Card>,
        <Card title="MasterMode" body="Overrides all other sound settings in this application" component={Component}></Card>,
        <Card title ="Sound Quality" body="Manually control the music quality in event of poor connection" component={Component}/>
  
    )
}

export default Dashboard;

