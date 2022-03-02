const second = 1000; /* milliseconds in a second */
const minute = second * 60; /* and in one minute */
const hour = minute * 60; /* and in one hour */
const day = hour * 24; /* and in one day */

/* Year of reference : year+1, January, 1 (00:00:00 by default) */
const countdownDate = new Date(new Date().getFullYear() + 1, 0, 1);
/* for this year, returns the number of milliseconds since January 1, 1970 00:00:00 */
const countdownTime = countdownDate.getTime();

/* Refresh the function each 1000ms = 1s */
setInterval(function() {
    /* Difference between the year of reference and this moment */
    const distance = countdownTime - new Date().getTime();

    document.getElementById('days').innerText = 5
    document.getElementById('hours').innerText = Math.floor((distance % day) / hour);
    document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute);
    document.getElementById('seconds').innerText = Math.floor((distance % minute) / second);
}, 1000)