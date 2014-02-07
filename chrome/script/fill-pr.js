var TEMPLATE_PATH = '//gist.github.com/Juuro/7e847145ae6e58ab4e4b/raw/checklist.md';
var $ISSUE_BODY = $('.compare-pr.open [name="pull_request[body]"]');

$.get(TEMPLATE_PATH, function(contents, status) {
  if (status == 'success') {
    $ISSUE_BODY.prop('placeholder', "Wait for it ...");
    $ISSUE_BODY.val($.trim(contents) + "\n\n" + $ISSUE_BODY.val());
  } else {
    $ISSUE_BODY.prop('placeholder', "Couldn't fetch workflow template. Sorry!");
  }
});
