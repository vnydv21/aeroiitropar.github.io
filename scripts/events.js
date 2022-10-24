$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme: "Royal Navy",

        calendarEvents: [
            {
              id: 'ISMP_1',
              name: "ISMP Meet",
              date: "October/29/2022",
              type: "event",
              description: "Welcome to the ISMP meet!",              
              color: "#63d867"
            },
          ]
    })
})