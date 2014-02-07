var TEMPLATE_PATH = '//gist.github.com/Juuro/7e847145ae6e58ab4e4b/raw/checklist.md';
var $ISSUE_BODY = $('.compare-pr.open [name="pull_request[body]"]');
var $ISSUE_TITLE = $('.compare-pr.open [name="pull_request[title]"]');

var $PIVOTAL_URL = "http://www.pivotaltracker.com/story/show/"

$.get(TEMPLATE_PATH, function(contents, status) {
  if (status == 'success') {
    $ISSUE_BODY.prop('placeholder', "Wait for it ...");
    $ISSUE_TITLE.val("[#] " + $ISSUE_TITLE.val());
    $ISSUE_BODY.val($.trim(contents) + "\n\n" + $ISSUE_BODY.val() + "\n\n" + $PIVOTAL_URL);
  } else {
    $ISSUE_BODY.prop('placeholder', "Couldn't fetch workflow template. Sorry!");
  }
});
