import { Button, Card, CardContent, Typography, Box, Avatar, Grid } from '@material-ui/core';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyles } from "./BookAppointmentStyles";

export default function DoctorCard(props) {

    const classes = useStyles();
    const navigate = useNavigate();

    const selectDoctor = (doctor_id,service_id) => {
        navigate("/bookAppointment/" + doctor_id + "/" + service_id);
    }

    return (
        
        <Card sx={{ maxWidth: 345 }}>
            <Grid container justifyContent='center'>
                <Avatar
                    src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                    alt="green iguana"
                    className={classes.doctorImage}
                />
            </Grid>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Box>
                    {(props.services).map((service) => {
                        return (
                            <Button
                                color="primary"
                                variant="contained"
                                key={service.service_id._id}
                                onClick={() => selectDoctor(props.doctor_id, service.service_id._id)}
                                className={classes.serviceButton}
                            >
                                {service.service_id.name}
                            </Button>
                        )
                    })}
                </Box>
            </CardContent>
        </Card>
    )
}