import { Box, Typography } from '@material-ui/core';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {

    const [doctors, setDoctors] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch("http://localhost:5000/api/Physiotherapy/getDoctors", {
            method: "Get",
        })
            .then((res) => res.json())
            .then((data) => {
                setDoctors(data);
            });
    });

    const selectDoctor = (id) => {
        navigate("/bookAppointment/" + id);
    }

    return (
        <Box>
            {doctors.map((doctor) => {
                return (
                    <Typography key={doctor._id} align='center' variant='h4' style={{
                        cursor:'pointer'
                    }} onClick={()=>selectDoctor(doctor._id)}>
                        {doctor.name}
                    </Typography>
                );
            })}
        </Box>
    );
};

export default BookAppointment;