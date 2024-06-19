
function clockDate() {
    const clock = document.getElementById('clock');

    const CurrentDate = document.getElementById('date');
    
    const now = new Date();


    let hours = now.getHours();
    const mintues = String(now.getMinutes()).padStart(2, '0');
    const Seconds = String(now.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0');

    clock.textContent = `${hours}:${mintues}:${Seconds} ${amPm}`;
    
    const Options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dateString = now.toLocaleDateString(undefined, Options);
    CurrentDate.textContent = dateString;
}
document.addEventListener('DOMContentLoaded', () => {
    setInterval(clockDate, 1000);
    clockDate();
});