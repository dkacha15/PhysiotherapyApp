import * as React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Typography, Dialog, DialogTitle, Button, Grid } from "@material-ui/core";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import moment from 'moment';
import { useStyles } from "./BookAppointmentStyles";

const DoctorAppointment = () => {

    const classes = useStyles();
    const calendarRef = React.createRef();
    let eventId = 0;
    const { doctor_id, service_id } = useParams();
    const [openDialog1, setOpenDialog1] = React.useState(false);
    const [openDialog2, setOpenDialog2] = React.useState(false);
    const [serviceName, setServiceName] = React.useState();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);
    const [minTime, setMinTime] = React.useState("00:00");
    const [maxTime, setMaxTime] = React.useState("24:00");
    const [events, setEvents] = React.useState([{}]);
    const [doctorName, setDoctorName] = React.useState();
    const [bookedAppointments, setbookedAppointments] = React.useState([]);
    const [firstDate, setFirstDate] = React.useState(new Date());
    const [eventInfo, setEventInfo] = React.useState();
    const [schedule, setSchedule] = React.useState([
        {
            day: "Sunday",
            timeRange: "",
        },
        {
            day: "Monday",
            timeRange: "",
        },
        {
            day: "Tuesday",
            timeRange: "",
        },
        {
            day: "Wednesday",
            timeRange: "",
        },
        {
            day: "Thursday",
            timeRange: "",
        },
        {
            day: "Friday",
            timeRange: "",
        },
        {
            day: "Saturday",
            timeRange: "",
        }
    ]);

    React.useEffect(() => {
        fetch("http://localhost:5000/api/Physiotherapy/getServiceById", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                service_id
            }),
        }).then((res) => res.json())
            .then((data) => {
                setServiceName(data.name);
            });
        
        fetch("http://localhost:5000/api/Physiotherapy/getDoctor", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                doctor_id
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                (data.appointment).forEach((item) => {
                    setbookedAppointments(oldArray => [...oldArray, moment(item.date)._d]);
                });
                setDoctorName(data.result.name);
                setSchedule(data.result.schedule);
            });
    }, []);

    React.useEffect(() => {
        setCalendarTimeRange();
        createAppointments();
    }, [firstDate, bookedAppointments, schedule]);

    const setCalendarTimeRange = () => {
        var min = 24;
        var max = 0;
        schedule.forEach(element => {
            if (element.timeRange) {
                const time = element.timeRange.split("-");
                if (min > parseInt(time[0])) {
                    min = parseInt(time[0]);
                    setMinTime(time[0] + ":00");
                }
                if (max < parseInt(time[1])) {
                    max = parseInt(time[1]);
                    setMaxTime(time[1] + ":00");
                }
            }
        })
    }

    const handleDateChange = (date) => {
        let calApi = calendarRef.current.getApi();
        calApi.gotoDate(date);
        setOpen(false);
        setSelectedDate(date);
    }

    const createEventId = () => {
        return String(eventId++);
    }

    const compareDates = (date_1, date_2) => {
        if (date_1) {
            if (date_1.getDate() === date_2.getDate()
                && date_1.getMonth() === date_2.getMonth()
                && date_1.getHours() === date_2.getHours()
                && date_1.getMinutes() === date_2.getMinutes()) {
                return true;
            } else {
                return false;
            }
        };
    };

    const findDateInArray = (date,array) => {
        var flag = 0;
        array.forEach(element => {
            if (compareDates(element, date)) {
                flag = 1;
            }
        });

        if (flag === 1) {
            return true
        } else {
            return false;
        }
    }

    const createAppointments = () => {
        events.splice(0, events.length);
        var lastDay = new Date(firstDate);
        lastDay.setDate(firstDate.getDate() + 7);

        const getTimeSlotsForDay = (date) => {
            var timeSlots = [];
            var dayStart = new Date(date);
            var dayEnd = new Date(date);
  
            switch (date.getDay()) {
                case 0: //Sunday
                    if (schedule[0].timeRange) {
                        const arr = schedule[0].timeRange.split("-");
                        dayStart.setHours(arr[0], 0, 0, 0);
                        dayEnd.setHours(arr[1], 0, 0, 0);
                        break;
                    } else {
                        return timeSlots;
                    }
    
                case 1: //Monday
                    if (schedule[1].timeRange) {
                        const arr = schedule[1].timeRange.split("-");
                        dayStart.setHours(arr[0], 0, 0, 0);
                        dayEnd.setHours(arr[1], 0, 0, 0);
                        break;
                    } else {
                        return timeSlots;
                    }

                case 2: //Tuesday
                    if (schedule[2].timeRange) {
                        const arr = schedule[2].timeRange.split("-");
                        dayStart.setHours(arr[0], 0, 0, 0);
                        dayEnd.setHours(arr[1], 0, 0, 0);
                        break;
                    } else {
                        return timeSlots;
                    }

                case 3: //Wednesday
                    if (schedule[3].timeRange) {
                        const arr = schedule[3].timeRange.split("-");
                        dayStart.setHours(arr[0], 0, 0, 0);
                        dayEnd.setHours(arr[1], 0, 0, 0);
                        break;
                    } else {
                        return timeSlots;
                    }

                case 4: //Thursday
                    if (schedule[4].timeRange) {
                        const arr = schedule[4].timeRange.split("-");
                        dayStart.setHours(arr[0], 0, 0, 0);
                        dayEnd.setHours(arr[1], 0, 0, 0);
                        break;
                    } else {
                        return timeSlots;
                    }

                case 5: //Friday
                    if (schedule[5].timeRange) {
                        const arr = schedule[5].timeRange.split("-");
                        dayStart.setHours(arr[0], 0, 0, 0);
                        dayEnd.setHours(arr[1], 0, 0, 0);
                        break;
                    } else {
                        return timeSlots;
                    }

                case 6: //Saturday
                    if (schedule[6].timeRange) {
                        const arr = schedule[6].timeRange.split("-");
                        dayStart.setHours(arr[0], 0, 0, 0);
                        dayEnd.setHours(arr[1], 0, 0, 0);
                        break;
                    } else {
                        return timeSlots;
                    }

            }
  
            do {
                if (!findDateInArray(dayStart,bookedAppointments)) {
                    timeSlots.push(new Date(dayStart));
                }
                dayStart.setHours(dayStart.getHours(), dayStart.getMinutes() + 30)
            } while (dayStart < dayEnd);
  
            return timeSlots;
        }

        for (var i = new Date(firstDate); i < lastDay; i.setDate(i.getDate() + 1)) {

            getTimeSlotsForDay(i).map((it) => {
                setEvents(oldArray => [...oldArray, {
                    id: createEventId(),
                    title: doctorName,
                    start: moment(it).format('YYYY-MM-DD') + 'T' + moment(it).format('HH:mm:ss'),
                    end: moment(it).format('YYYY-MM-DD') + 'T' + moment(it).add(30, "minutes").format('HH:mm:ss')
                }]);
            })
        }
    };

    const changeFirstDate = (args) => {
        var date = args.view.activeStart;
        if (firstDate.getDate() !== date.getDate()) {
            setFirstDate(date);
        }
    }

    const renderEventContent = (eventInfo) => {
        return (
            <>
                <p style={{
                    textAlign: "center",
                    cursor: "pointer",
                    fontWeight: 'bold',
                }}>{eventInfo.event.title}</p>
            </>
        )
    };

    const bookAppointment = (date) => {
        fetch("http://localhost:5000/api/Physiotherapy/addAppointment", {
            method: "Post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                doctor_id,
                date,
                service_id
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                // alert(data.message);
                setOpenDialog2(true);
            });
    }

    const handleEventClick = (eventInfo) => {
        setOpenDialog1(true);
        setEventInfo(eventInfo);
        // setbookedAppointments(oldArray => [...oldArray, eventInfo.event.start]);
        // bookAppointment(eventInfo.event.start);
    };

    const Dialog1 = (props) => {
        const { open } = props;
        const classes = useStyles();

        return (
            <Dialog open={open}>
                <DialogTitle>Do you want to confirm this appointment?</DialogTitle>
                <Grid className={classes.confirmDialog} container justifyContent="center">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            setbookedAppointments(oldArray => [...oldArray, eventInfo.event.start]);
                            bookAppointment(eventInfo.event.start);
                            setOpenDialog1(false);
                        }}
                    >
                        Yes
                    </Button>
                    <Button
                        style={{
                            marginLeft: "10px"
                        }}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            setOpenDialog1(false);
                        }}
                    >
                        No
                    </Button>
                </Grid>
            </Dialog>
        )
    };

    Dialog1.propTypes = {
        open: PropTypes.bool.isRequired,
    };

    const Dialog2 = (props) => {
        const { open } = props;
        const classes = useStyles();

        return (
            <Dialog open={open}>
                <DialogTitle>Appointment confirmed. Please check your email for more information.</DialogTitle>
                <Grid className={classes.confirmDialog} container justifyContent="center">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            setOpenDialog2(false);
                        }}
                    >
                        Okay
                    </Button>
                </Grid>
            </Dialog>
        );
    };

    Dialog2.propTypes = {
        open: PropTypes.bool.isRequired,
    };
    
    return (
        <Box className={classes.box1}>
            <Box className={classes.box2}>
                <Typography align='center' variant='h4'>
                    {serviceName}
                </Typography>
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev',
                        center: 'Calendar,Today',
                        right: 'next'
                    }}
                    height={'100%'}
                    contentHeight='auto'
                    slotDuration={'00:15'}
                    allDaySlot={false}
                    slotMinTime={minTime}
                    slotMaxTime={maxTime}
                    initialView='sevenDayCustom'
                    views={{
                        sevenDayCustom: {
                            type: 'timeGrid',
                            duration: { days: 7 },
                            validRange: {
                                start: new Date(),
                            }
                        }
                    }}
                    customButtons={{
                        Calendar: {
                            text: 'Calendar',
                            click: function () {
                                setOpen(true);
                            },
                        },
                        Today: {
                            text: 'Today',
                            click: function () {
                                let calApi = calendarRef.current.getApi();
                                calApi.gotoDate(new Date());
                                setSelectedDate(new Date());
                            }
                        },
                    }}
                    dayHeaderContent={(args) => {
                        return moment(args.date).format('ddd Do');
                    }}
                    dayHeaderClassNames={classes.date}
                    slotLabelClassNames={classes.time}
                    slotLabelContent ={(args) => {
                        return moment(args.date).format('hh:mm A');
                    }}
                    events={events}
                    datesSet={changeFirstDate}
                    eventContent={renderEventContent}
                    eventClick={handleEventClick}
                />
            </Box>
            <Box hidden>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker cancelLabel='' open={open} value={selectedDate} onChange={handleDateChange} disablePast/>
                </MuiPickersUtilsProvider>
            </Box>
            <Dialog1
                open={openDialog1}
            />
            <Dialog2
                open={openDialog2}
            />
        </Box>
    )
};

export default DoctorAppointment;