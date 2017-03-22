function changeHeader() {
  $('span').first().addClass("header-role");
}
$(changeHeader);

function changeButton() {
  $('button').first().addClass("btn");
}
$(changeButton);

function mailConnect() {
  $('div.dark-gray').children('h2.orange.center-text').prepend('<a href = "mailto:signup@gmawji.com?Subject=Lets%20Connect" target="_top"> Let\'s Connect </a>');
}
$(mailConnect);

function workLinks() {
  var initialize = $('div.work-entry').children('a');

  initialize.slice(0,1).attr('href', 'http://www.gmawji.com').attr('target', '_blank');

  initialize.slice(1,2).attr('href', 'http://www.simplynas.com').attr('target', '_blank');

  initialize.slice(2,3).attr('href', 'http://www.eaegis.com').attr('target', '_blank');
}
$(workLinks);
