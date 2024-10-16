function clock() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();

    // Displaying the full date
    document.getElementById('date').innerHTML = (dayNames[today.getDay()] + " " +
        today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear());

    // Get hours, minutes, and seconds
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var period = h >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    h = h % 12;
    h = h ? h : 12; // Adjust for 0 (midnight) to 12

    // Add leading zeros
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // Display time and period (AM/PM)
    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('period').innerHTML = period;
}

var inter = setInterval(clock, 1000);
