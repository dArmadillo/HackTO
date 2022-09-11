import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material';
import Switch from '@mui/material/Switch';
import { FormControl, OutlinedInput, InputLabel, FormControlLabel } from '@mui/material';

export default function ProfilePage(props) {
  return (
    <div class='main'>
      <div class='profile-left' style={{
      background: 'rgb(65,89,112)',
      height: '40vw',
      width: '25vw',
      borderRadius: '35px',
      display: 'inline-block',
      padding: '2rem',
      margin: '2rem'
      }}>
        <Avatar
          align='center'
          alt="Remy Sharp"
          src={props.profileImageUrl}
          sx={{ width: '20vw', height: '20vw' }}
        />
        <Typography align='center' sx={{ fontSize: 18, fontWeight: 900, marginTop: '1rem' }} color="white" gutterBottom>
          {props.name}
        </Typography>
        <Typography align='center' sx={{ fontSize: 15, fontWeight: 200}} color="white" gutterBottom>
          {props.pronouns}
        </Typography><Typography align='center' sx={{ fontSize: 12, fontWeight: 200}} color="rgb(169,184,235)" gutterBottom>
          Upload an image
        </Typography>
      </div>

      <div class='profile-main' style={{
      background: 'lightgrey',
      height: '43vw',
      width: '65vw',
      borderRadius: '35px',
      display: 'inline-block',
      padding: '2rem',
      margin: '2rem'
      }}>
    
        <Typography align='left' sx={{ fontSize: 26, fontWeight: 900, marginTop: '1rem' }} color="text.primary" gutterBottom>
          Personal Profile
        </Typography>


        <Typography>
          Full Name:
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Full Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={props.name}
            label="Full Name"
          />
        </FormControl>

  
        <Typography>
          Email:
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={props.email}
            label="Email"
          />
        </FormControl>

        <Typography>
          Pronouns:
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Pronouns</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={props.pronouns}
            label="Pronouns"
          />
        </FormControl>        
        <Typography>
          Notes For Manager:
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Notes for Manager</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={props.managerNotes}
            multiline
            rows={4}
            label="Notes for Manager"
          />
          <FormControlLabel control={<Switch defaultChecked />} label="Submit In Application" />
        </FormControl>  

    </div>

    </div>
    
  );
}