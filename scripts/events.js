$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme: "Royal Navy",

        calendarEvents: [
            {
              id: 'ISMP_1', // Event's ID (required)
              name: "ISMP Meet", // Event name (required)
              date: "October/29/2022", // Event date (required)
              type: "event", // Event type (required)
              description: "Welcome to the ISMP meet!",              
              color: "#63d867" // Event custom color (optional)
            },
          ]
    })
})