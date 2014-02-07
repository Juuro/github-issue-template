var TEMPLATE_PATH = '//gist.github.com/Juuro/7e847145ae6e58ab4e4b/raw/checklist.md';
var $ISSUE_BODY = $('.compare-pr.open [name="pull_request[body]"]');


$(function() {
  $.get(TEMPLATE_PATH, function(contents, status) {
    if (status == 'success') {
      // This placeholder will be shown only when removing the entire contents
      // provided by the issue template
      $ISSUE_BODY.prop('placeholder', "Wait for it ...");
      $ISSUE_BODY.val($.trim(contents));
    } else {
      // Notify the user that the template couldn't be fetched and the they
      // should carry on w/ a blank issue body
      $ISSUE_BODY.prop('placeholder', "Couldn't fetch workflow template. Sorry!");
    }
  });
});
