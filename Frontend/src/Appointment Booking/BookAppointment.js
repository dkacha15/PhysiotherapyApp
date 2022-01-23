import { Box, Button, Typography } from '@material-ui/core';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {

    const [services, setServices] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch("http://localhost:5000/api/Physiotherapy/getServices", {
            method: "Get",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    });

    const selectDoctor = (doctor_id,service_id) => {
        navigate("/bookAppointment/" + doctor_id + "/" + service_id);
    }

    return (
        <Box>
            {services.map((service) => {
                return (
                    <Typography key={service._id} align='center' variant='h4'>
                        {service.name}
                        <br/>
                        {
                            service.doctors.map((doctor) => {
                                return (
                                    <Button key={doctor.doctor_id._id} onClick={()=>selectDoctor(doctor.doctor_id._id,service._id,)}>
                                        {doctor.doctor_id.name}
                                    </Button>
                                );
                            })
                        }
                    </Typography>
                );
            })}
        </Box>
    );
};

export default BookAppointment;