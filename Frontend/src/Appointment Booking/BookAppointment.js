import { Grid } from '@material-ui/core';
import * as React from 'react';
import DoctorCard from './DoctorCard';
import { useStyles } from "./BookAppointmentStyles";

const BookAppointment = () => {

    const classes = useStyles();
    const [doctors, setDoctors] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/api/Physiotherapy/getDoctors", {
            method: "Get",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                setDoctors(data);
            });
    });

    return (

        <Grid
            container
            justifyContent="center"
            className={classes.cardContainer}
        >
            {doctors.map((doctor) => {
                return (
                    <Grid key={doctor._id} item xs={12} sm={6} md={4} className={classes.cardItem}>
                        <DoctorCard name={doctor.name} services={doctor.services} doctor_id={doctor._id}/>
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default BookAppointment;