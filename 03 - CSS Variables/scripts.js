const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // will add px from 'spacing' and 'blur' or nothing if there is no 'data-sizing'
  const suffix = this.dataset.sizing || '';

  // selects the name property, sets the value and appends the suffix 'px' || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
