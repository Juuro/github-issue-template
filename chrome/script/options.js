var STORAGE_KEY = 'github-repos';

$(function() {
  var $textarea = $('#pull_request_body');
  var $submitButton = $('#save');

  // Default the list of repos to the uberVU/mozaic repo if nothing has been
  // submitted yet
  if (localStorage[STORAGE_KEY] === undefined) {
    localStorage[STORAGE_KEY] = 'infopark-customers/mpg-main';
  }
  // Start of form with previous repos from local storage
  $textarea.val(localStorage[STORAGE_KEY]);
  // Update list of repos into local storage when submitting form
  $submitButton.click(function() {
    localStorage[STORAGE_KEY] = $textarea.val();
  });
});
