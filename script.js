const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const ampmEl = document.querySelector('.ampm'); // New element for AM/PM
const dateEl = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const scale = (num, in_min, in_max, out_min, out_max) => {
     return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function setTime() {
     const time = new Date();
     const month = time.getMonth();
     const day = time.getDay();
     const date = time.getDate();
     let hours = time.getHours();
     const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
     hours = hours % 12 || 12; // Convert to 12-hour format
     const minutes = time.getMinutes();
     const seconds = time.getSeconds();

     hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`;
     minuteEl.style.transform = `translate(-50%, -100%)rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
     secondEl.style.transform = `translate(-50%, -100%)rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

     timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
     ampmEl.innerHTML = ampm; // Update the AM/PM div content
     dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);
