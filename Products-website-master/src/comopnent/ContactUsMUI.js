import "./product.css";
import Swal from "sweetalert2";
import { Grid, TextField, Button } from "@mui/material";

function ContactUsMUI() {
  const sendSuccesful = () => {
    Swal.fire({
      title: "Send Succesful",
    });
  };
  return (
    <div className="contactUs">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>
      <Grid container spacing={1}>
        <Grid xsm={12} sm={5} item>
          <TextField
            placeholder="Enter Your Full Name"
            label="First Name"
            variant="outlined"
            fullWidth
          ></TextField>
        </Grid>
        <Grid xsm={12} sm={5} item>
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
          ></TextField>
        </Grid>
        <Grid xsm={12} sm={10} item>
          <TextField
            placeholder="Enter Your Subject"
            label="Subject"
            variant="outlined"
            fullWidth
          ></TextField>
        </Grid>
        <Grid xsm={12} sm={10} item>
          <TextField
            placeholder="Enter Your Message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          ></TextField>
        </Grid>
        <Grid
          xsm={12}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            className="mt-3"
            size="small"
            color="primary"
            type="submit"
            variant="contained"
            onClick={() => {
              sendSuccesful();
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default ContactUsMUI;
