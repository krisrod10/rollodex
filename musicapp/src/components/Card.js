import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



import Switch from '@mui/material/Switch';

export default function BasicCard({isOnline, setIsOnline, title, body}) {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    
    const handleChange = () => {
        setIsOnline(!isOnline);
    }
    
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
            <Switch {...label} checked={isOnline} onChange={handleChange} />
            </CardActions>
        </Card>
    );
}