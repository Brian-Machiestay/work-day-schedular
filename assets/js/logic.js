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
        hour13: 13,
        event: '',
    },
    {
        hour14: 14,
        event: '',
    },
    {
        hour15: 15,
        event: '',
    },
    {
        hour16: 16,
        event: '',
    },
    {
        hour17: 17,
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
let hr24 = 9;
for (let j = 0; j < eventsHour.length; j++) {
    const hourText =  $(`.hour${hr}`).siblings('.textarea');
    hourText.val(eventsHour[j].event);
    if (now.format('HH') == eventsHour[j][`hour${hr24}`]) {
        hourText.addClass('present');
        if (hourText.hasClass('past')) hourText.removeClass("past");
        if (hourText.hasClass('future')) hourText.removeClass("future");
    }
    else if (now.format('HH') > eventsHour[j][`hour${hr24}`]) {
        hourText.addClass('past');
        if (hourText.hasClass('future')) hourText.removeClass('future');
        if (hourText.hasClass('present')) hourText.removeClass('present');
    }
    else {
        hourText.addClass('future');
        if (hourText.hasClass('past')) hourText.removeClass('past');
        if (hourText.hasClass('present')) hourText.removeClass('present');
    }
    hr++;
    hr24++;
    if (hr > 12) hr = hr - 12;
}



// attach a listener to all save buttons
$('.saveBtn').on('click', save);