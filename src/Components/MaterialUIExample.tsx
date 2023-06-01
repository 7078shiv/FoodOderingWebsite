// material ui is a css framwork similar to bootstrap .
// they will help you to do css

/*
testbox
button
label
fab
loading spinner
app bar
grid
card
*/
import { AppBar, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Fab, Grid, TextField, Typography, makeStyles } from "@material-ui/core"

const useStyle=makeStyles({
    image:{
        height:"200px",
        width:"200px"
    }
})
export default function MaterialUIExample(){
    const style=useStyle()
    return(
        <>
        <TextField placeholder="placeholder" variant="outlined"></TextField>
        {/* if i want to show error messages */}
        <TextField placeholder="placeholder" variant="outlined" error={true} helperText="there is some error"></TextField>
        {/* button */}
        <Button variant="contained">Primary</Button>
        
        <Button variant="outlined">Secondary</Button>

        {/* label here is called as---> Typography */}

       <Typography variant="h4">This is h4 </Typography>

       {/* Fab */}

       <Fab color="primary" variant="extended">this is fab</Fab>
       <Fab color="secondary" variant="extended">this is fab</Fab>

       {/* loading spinner */}
        <CircularProgress></CircularProgress>
        <CircularProgress color="secondary" />
        {/* <CircularProgress color="success" /> */}
        <CircularProgress color="inherit" />

        {/* App Bar  --> we can put title of the website*/}
        <AppBar position="static">
        <Typography variant="h4">Appbar title </Typography>
        </AppBar>

        {/* grid */}
        <Grid container spacing={3}>
        <Grid item xs={4}>one</Grid>
        <Grid item  xs={4}>two</Grid>
        </Grid>

        {/* card */}
        <Card>
            <CardActionArea>
                <CardMedia image="https://cdn.pixabay.com/photo/2023/03/05/23/46/girl-7832385_1280.jpg"
              className={style.image}
                ></CardMedia>
                <Typography variant="h5">card title</Typography>
                <CardContent/>
            </CardActionArea>
        </Card>
        </>
    )
}