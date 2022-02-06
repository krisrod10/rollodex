import Card from './Card'
import { useState } from 'react';





const Dashboard = () => {
    const [isOnline, setIsOnline ] = useState(false);
    return(
        <div>       
        <Card title = "Online mode" body="Is this application connected to the internet?" isOnline={isOnline} setIsOnline={setIsOnline}></Card>
        <Card title="MasterMode" body="Overrides all other sound settings in this application" ></Card>
        <Card title ="Sound Quality" body="Manually control the music quality in event of poor connection" />
        </div>
    )
}

export default Dashboard;
