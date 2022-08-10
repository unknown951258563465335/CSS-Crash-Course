console.clear();

// Get all the Meters
const meters = document.querySelectorAll('svg[data-value] .meter');

meters.forEach( (path) => {
  // Get the length of the path
  let length = path.getTotalLength();
  // console.log(length) once and hardcode the stroke-dashoffset and stroke-dasharray in the SVG if possible 
  // or uncomment to set it dynamically
  // path.style.strokeDashoffset = length;
  // path.style.strokeDasharray = length;

  // Get the value of the meter
  let value = parseInt(path.parentNode.getAttribute('data-value'));
  // Calculate the percentage of the total length
  let to = length * ((100 - value) / 100);
  // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
  path.getBoundingClientRect();
  // Set the Offset
  path.style.strokeDashoffset = Math.max(0, to);  
});