function getDayName() {
    let dateString = document.getElementById("date").value;
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        document.getElementById("dayName").innerHTML = 'Invalid input';
    } else {
        const dayIndex = date.getDay();
        document.getElementById("dayName").innerHTML = daysOfWeek[dayIndex];
    }
}
