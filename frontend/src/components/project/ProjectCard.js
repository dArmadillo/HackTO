import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';




export default function ProjectCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
          This is a test title
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Posted: August 31, 2022
        </Typography>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          Firstname Lastname
        </Typography>
        <Typography sx={{ mb: 1.0 }} color="text.secondary">
          Job Title
        </Typography>
        <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}