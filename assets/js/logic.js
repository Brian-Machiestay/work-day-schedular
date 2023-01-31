// Get the current date and time
let now = moment();
date = now.format('dddd, MMMM Do');

// populate the DOM with the current date
$("#currentDay").text(date);


// write a function to save user events
function save(event) {
    // save events entered by the user
    let events = [];
    // get the time of logged event
    const hour = event.currentTarget.parentNode.children[0].textContent;
    // get the user entered event
    const userEvent = event.currentTarget.parentNode.children[1].textContent;
    // get stored item
    let storedEvents = localStorage.getItem('events');
    ob = {
        hour: hour.split(' ')[0],
        userEvent: userEvent,
    };
    
    if (storedEvents) {
        storedEvents = JSON.parse(storedEvents);
        storedEvents.push(ob);
        events = storedEvents;
        localStorage.setItem('events', storedEvents);
    }
    else {
        events.push(ob);
        localStorage.setItem('events', JSON.stringify(events));
    }
}

if (localStorage.getItem('events')) {
    const allEvents = JSON.parse(localStorage.getItem('events'))
}

// attach a listener to all save buttons
$(".saveBtn").on("click", save);