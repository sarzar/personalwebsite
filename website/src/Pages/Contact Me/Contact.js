import './Contact.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function Contact () {

    return (
      <div className="container"> 
      <form className = "hi" >
       
          <TextField id="standard-basic" label="Name" />
        
          <TextField id="standard-basic" label="Email" />
        
          <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="Type here..."
        />
        
        <Button variant="outlined" color="primary">
  Submit
</Button>
      </form>

      </div> 
      
    );
}
export default Contact