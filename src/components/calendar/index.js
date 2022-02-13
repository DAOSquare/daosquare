import React from 'react';
import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-glass.css';

class CalendarComponent extends React.Component {
  componentDidMount() {
    new Calendar({
      id: '#calendar',
      primaryColor: '#FF98D3',
      theme: 'glass',
      border: '30px solid #fff',
      weekdayType: 'long-upper',
      monthDisplayType: 'long',
      headerBackgroundColor: '#fff',
      headerColor: '#323232',

      eventsData: [
        {
          id: 1,
          name: '',
          start: '2022-02-04T06:00:00',
          end: '2022-02-04T20:30:00',
        },
        {
          id: 2,
          name: '',
          start: '2022-02-05T06:00:00',
          end: '2022-02-05T20:30:00',
        },
        {
          id: 3,
          name: '',
          start: '2022-02-11T06:00:00',
          end: '2022-02-11T20:30:00',
        },
        {
          id: 4,
          name: '',
          start: '2022-02-12T06:00:00',
          end: '2022-02-12T20:30:00',
        },
        {
          id: 5,
          name: '',
          start: '2022-02-18T06:00:00',
          end: '2022-02-18T20:30:00',
        },
        {
          id: 6,
          name: '',
          start: '2022-02-19T06:00:00',
          end: '2022-02-19T20:30:00',
        },
        {
          id: 6,
          name: '',
          start: '2022-02-25T06:00:00',
          end: '2022-02-25T20:30:00',
        },
        {
          id: 7,
          name: '',
          start: '2022-02-26T10:00:00',
          end: '2022-02-26T11:30:00',
        },
        {
          id: 7,
          name: '',
          start: '2022-03-04T06:00:00',
          end: '2022-03-04T20:30:00',
        },
        {
          id: 8,
          name: '',
          start: '2022-02-05T10:00:00',
          end: '2022-02-05T11:30:00',
        },
      ],
      dateChanged: (currentDate, events) => {
        // console.log('date change', currentDate, events);
      },
      monthChanged: (currentDate, events) => {
        // console.log('month change', currentDate, events);
      },
    });
  }

  render() {
    return <div id="calendar"></div>;
  }
}

export default CalendarComponent;
