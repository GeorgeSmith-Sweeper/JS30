// array of all checkboxes
const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]')
console.log(checkboxes);

let lastChecked;
let inBetween = false;

function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    // loop over every check box checking for the current box
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        // flag
        inBetween = !inBetween;
        console.log('starting to check them inBetween')
      }
      // apply the check if the inBetween flag is true;
      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

// check to see which boxes have been selected
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
