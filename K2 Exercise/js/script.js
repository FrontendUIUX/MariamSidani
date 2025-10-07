$(document).ready(function () {
  var text = `
  Product or Service steps<br>
  1- Assessment & Planning - Review the current portal setup and plan the update process.<br>
  2- Backup & Safety Check - Create a complete backup of the portal to prevent data loss.<br>
  3- Update Implementation - Apply software, plugin, and security updates according to the plan.<br>
  4- Testing & Validation - Verify that all features are working correctly.<br>
  5- Optimization & Fine-Tuning - Enhance speed, usability, and security based on testing results.
  `;
  $('[name*="ServiceStepsBox"]').html(text);
});
