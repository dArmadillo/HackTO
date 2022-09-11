import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';





export default function ProjectCard({data}) {

  const tagbtn={
    fontSize:12, color:'white', backgroundColor:'#ED6C02', marginTop:'5%'
  }
  return (
<<<<<<< HEAD
    <>
      <div style={{
        display:'flex'
      }}>
      <Card sx={{
        minWidth: 300,
        borderRadius: 5
      }}
      variant="outlined"
      >
        
        <CardContent style={{padding: 0,
          "&:last-child": {
            paddingBottom: 0
          }}}>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            }}>
              <div style={{width:'60%', padding: '20px'}}>
            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
              {data.title}
            </Typography>
            <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
              Posted: {data.project_start_date}
            </Typography>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography sx={{ fontSize: 12, mb: 1 }} color="text.primary">
              {data.project_lead_name}
            </Typography>
  
            <Typography sx={{fontSize: 12}}variant="body2">
            {data.description}
            </Typography>
          </div>
          <div style={{
            backgroundColor:'#415970', 
            flexGrow: 1,
            padding:'5%', 
            color:'white',
            marginRight:"auto",
        }}>
           <div className="d-flex flex-row"  style={{ fontSize: 12}}>
            <div className="d-flex signup flex-column" style={{ marginRight: '5%'}} >
            <div><b>Commitment</b></div>
              <div> {data.commitment} </div>
            </div>
            <div className="d-flex signup flex-column" >
              <b>Signup Deadline</b>
              <div>{data.signup_deadline}</div>
            </div>
           </div>  
           <div className=" d-flex flex-column skillsCont" style={{ fontSize: 12, marginTop:12}}>
              <b>Skills you will gain</b>
              <div className="d-flex flex-column justify-content-around" style={{alignSelf:'start', marginTop:12}}>
                <Button style={tagbtn}>Data Analytics</Button>
                <Button style={tagbtn}>JavaScript</Button>         
               
              </div>
            </div>          
          </div>


          </div>
          
        </CardContent>
      </Card>

    </div>
    </>

  );
}