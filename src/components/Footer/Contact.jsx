import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';

export default function Contact() {
  const form = React.useRef();  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o5xbeiy', 'template_lkncz6k', form.current, 'U7Rt1dSDa30l4Vox0')
      .then((result) => {
    
          setInput(initialInput);
          setOpen(false)
          alert('Your message has been sent')
      }, (error) => {
          console.log(error.text);
          setOpen(false)
          toast.error('There was an error, please try again')
      });
  };

  const [open, setOpen] = React.useState(false);

  const initialInput =  {
    name: '',
    email: '',
    message:''
  }; 

  const[input,setInput] = React.useState(initialInput)

  function handleInputChange(e) {
    const newInput = {
        ...input,
        [e.target.name] : e.target.value
    }
    setInput(newInput)
 };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInput(initialInput)
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        GET IN CONTACT
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you interested? Send me an email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To send me an email please write your name, e-mail address and
            your message. I'll get back to you as soon as possible, don't be shy!
          </DialogContentText>
          <form  ref={form} onSubmit={sendEmail}>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            value = {input.name}
            onChange = {handleInputChange}
            label="Name"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            value = {input.email}
            onChange = {handleInputChange}
            label="Email adress"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            multiline
            margin="dense"
            name="message"
            value = {input.message}
            onChange = {handleInputChange}
            label="Message"
            type="string"
            fullWidth
            variant="standard"
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sendEmail}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}