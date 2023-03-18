// Sets the class name on the html element
// This is what discord uses to set the theme sort of
document.querySelector("html").className = 'custom-theme-background full-motion theme-dark platform-web font-size-16';

// Set up the style element
// this is used to set the gradient and create and element
const style = document.createElement('style');
style.setAttribute('data-client-themes', 'true');
style.setAttribute('data-rh', 'true');
style.textContent = `
  .custom-theme-background {
    --custom-theme-background: linear-gradient(38.99deg, var(--bg-gradient-desert-khaki-1) 12.92%, var(--bg-gradient-desert-khaki-2) 32.92%, var(--bg-gradient-desert-khaki-3) 52.11%);
  }
`;
document.head.appendChild(style);

// Run the code every 1/2 of a second
setInterval(function() {
  // Set the class name on the html element
  document.querySelector("html").className = 'custom-theme-background full-motion theme-light platform-web font-size-16';

  // Set up the style element
  const style = document.createElement('style');
  style.setAttribute('data-client-themes', 'true');
  style.setAttribute('data-rh', 'true');
  style.textContent = `
    .custom-theme-background {
      --custom-theme-background: linear-gradient(38.99deg, var(--bg-gradient-desert-khaki-1) 12.92%, var(--bg-gradient-desert-khaki-2) 32.92%, var(--bg-gradient-desert-khaki-3) 52.11%);
    }
  `;
  document.head.appendChild(style);
}, 500);
