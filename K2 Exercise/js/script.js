$(document).ready(function () {
  var text = `
  Product or Service steps<br>
  1- Assessment & Planning - Review the current portal setup and plan the update process.<br>
  2- Backup & Safety Check - Create a complete backup of the portal to prevent data loss.<br>
  3- Update Implementation - Apply software, plugin, and security updates according to the plan.<br>
  4- Testing & Validation - Verify that all features are working correctly.<br>
  5- Optimization & Fine-Tuning - Enhance speed, usability, and security based on testing results.
  `;

  var $el = $('[name*="ServiceStepsBox"]');

  // Inject the text
  $el.html(text);

  // Apply the style directly
  $el.css({
    "background-color": "#f3e1de",
    "border": "1px solid #e0bebe",
    "border-radius": "10px",
    "padding": "15px 20px",
    "font-family": "'Segoe UI', sans-serif",
    "color": "#002134",
    "line-height": "1.6",
    "font-weight": "500",
    "display": "block",
    "white-space": "normal",
    "word-wrap": "break-word"
  });
});
