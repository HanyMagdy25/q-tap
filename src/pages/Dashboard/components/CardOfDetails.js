import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import imagePic from "../../../assets/addPic.png";


const CardOfDetails = () => {
  return (
    <div>
      <Card>
        <CardMedia sx={{ height: "14.5625rem" }} image={imagePic} />
        <Grid container>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    placeholder="Full Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    placeholder="carterleonard@gmail.com"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Phone No."
                    placeholder="+1-123-456-8790"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Website" placeholder="Website" />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="form-layouts-separator-select-label">
                      Langauge
                    </InputLabel>
                    <Select
                      label="Langauge"
                      defaultValue=""
                      id="form-layouts-separator-select"
                      labelId="form-layouts-separator-select-label"
                    >
                      <MenuItem value="UK">English</MenuItem>
                      <MenuItem value="USA">Arabic</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <div className="d-flex justify-content-between">
                    <Button type="submit" variant="contained" size="large">
                      Edit
                    </Button>
                    <Button type="submit" variant="contained" size="large">
                      View
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Grid>
      </Card>
    </div>
  );
};

export default CardOfDetails;
