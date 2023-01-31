let eventsHour = [
    {
        hour9: 9,
        event: '',
    },
    {
        hour10: 10,
        event: '',
    },
    {
        hour11: 11,
        event: '',
    },
    {
        hour12: 12,
        event: '',
    },
    {
        hour1: 1,
        event: '',
    },
    {
        hour2: 2,
        event: '',
    },
    {
        hour3: 3,
        event: '',
    },
    {
        hour4: 4,
        event: '',
    },
    {
        hour5: 5,
        event: '',
    }
]

// Get the current date and time
let now = moment();
date = now.format('dddd, MMMM Do');

// populate the DOM with the current date
$("#currentDay").text(date);


// write a function to save user events
function save(event) {
    // get the user entered event
    const userEvent = event.currentTarget.parentNode.children[1].value;
    // get stored item
    let hours = 9;
    let storedEvents = localStorage.getItem('events');
    if (storedEvents) {
        eventsHour = JSON.parse(storedEvents);
        localStorage.removeItem('events');
    }
    for (let i = 0; i < eventsHour.length; i++) {
        // get the time of logged event
        const hour = event.currentTarget.parentNode.children[0].textContent.split(' ')[0];
        if (hour == hours) {
            eventsHour[i].event = userEvent;
        }
        hours++;
        if (hours > 12) hours = hours - 12;
    }
    localStorage.setItem('events', JSON.stringify(eventsHour));
}

// onload events from storage
if (localStorage.getItem('events')) {
    eventsHour = JSON.parse(localStorage.getItem('events'));
}
let hr = 9;
for (let j = 0; j < eventsHour.length; j++) {
    console.log(eventsHour[j]);
    $(`.hour${hr}`).siblings(".textarea").val(eventsHour[j].event);
    hr++;
    if (hr > 12) hr = hr - 12;
}

// attach a listener to all save buttons
$(".saveBtn").on("click", save);