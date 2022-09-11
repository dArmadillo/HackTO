import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function ProfilePage(props) {
  return (
    <div class='main'>
      <div></div>
      <div class='profile-left' style={{
      background: 'lightgrey',
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
        <Typography align='center' sx={{ fontSize: 18, fontWeight: 900, marginTop: '1rem' }} color="text.primary" gutterBottom>
          {props.name}
        </Typography>
        <Typography align='center' sx={{ fontSize: 15, fontWeight: 200}} color="text.secondary" gutterBottom>
          {props.pronouns}
        </Typography><Typography align='center' sx={{ fontSize: 12, fontWeight: 200}} color="blue" gutterBottom>
          Upload an image
        </Typography>
      </div>

      <div class='profile-main' style={{
      background: 'lightgrey',
      width: '35vw',
      borderRadius: '35px',
      display: 'inline-block',
      padding: '2rem',
      margin: '2rem'
      }}>
    
      </div>

      <div class='profile-main' style={{
      background: 'lightgrey',
      width: '25vw',
      borderRadius: '35px',
      display: 'inline-block',
      padding: '2rem',
      margin: '2rem'
      }}>
        <Typography align='center' sx={{ fontSize: 18, fontWeight: 900, marginTop: '1rem' }} color="text.primary" gutterBottom>
          Notes for Manager:
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={props.managerNotes}
        />        <Typography align='center' sx={{ fontSize: 15, fontWeight: 200}} color="text.secondary" gutterBottom>
          {props.pronouns}
        </Typography><Typography align='center' sx={{ fontSize: 12, fontWeight: 200}} color="blue" gutterBottom>
          Upload an image
        </Typography>
    </div>

    </div>
    
  );
}