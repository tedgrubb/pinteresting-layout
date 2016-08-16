var Pinteresting = (function($) {
  $board = null;
  $columns = null;
  pins = null;
  colWidth = 170;
  colMargin = 10;
  containerPadding = 10;

  function init() {
    $container = $('.container');
    $board = $('#board');
    pins = getData();
    $(window).resize(drawBoard).trigger('resize');

    $('#toggle').on('click', function() {
      $('.line').toggle();
    });
  }

  function drawBoard() {
    if(!pins.length) return;

    screenWidth = $(window).width();
    numColumns = Math.floor(screenWidth / (colWidth + colMargin));

    containerWidth = (numColumns * (colWidth + colMargin)) + containerPadding;
    $container.css({width: containerWidth});

    // Layout Columns
    $board.html('');

    for(i=0;i<numColumns;i++) {
      $board.append('<div class="column" id="column' + i + '"></div>');
    }

    $columns = $('.column');

    // Layout Pins

    $(pins).each(function(_, pin) {
      pin = pinTemplate(pin);
      column = shortestColumn()
      column.append(pin);

      // Draw a red line at the bottom of each pin
      $board.append('<div class="line" style="display: none;top:'+(column.height()-1)+'px"></div>');
    });
  }

  function shortestColumn() {
    $columns.sort(function(a, b) {
      return $(a).height() - $(b).height();
    });
    return $columns.first();
  }

  function pinTemplate(options) {
    result = '<div class="pin" id="pin' + options['id'] + '">' +
      '<h3>' + options['title'] + '</h3>' +
      '<img height="' + options['height'] + '" src="' + options['img_url'] + '">' +
      '<small>Vinyl chia cornhole raw denim, mustache umami gluten-free swag banjo ennui pug.<small>' +
      '</div>';
    return result;
  }

  function getData() {
    // Mock AJAX Call
    result = [
      {id: 1, title: "Pin 1", height: '300', img_url: 'http://placehold.it/150x300.jpg'},
      {id: 2, title: "Pin 2", height: '120', img_url: 'http://placehold.it/150x120.jpg'},
      {id: 3, title: "Pin 3", height: '600', img_url: 'http://placehold.it/150x600.jpg'},
      {id: 4, title: "Pin 4", height: '100', img_url: 'http://placehold.it/150x100.jpg'},
      {id: 5, title: "Pin 5", height: '360', img_url: 'http://placehold.it/150x360.jpg'},
      {id: 6, title: "Pin 6", height: '580', img_url: 'http://placehold.it/150x580.jpg'},
      {id: 7, title: "Pin 7", height: '140', img_url: 'http://placehold.it/150x140.jpg'},
      {id: 8, title: "Pin 8", height: '80', img_url: 'http://placehold.it/150x80.jpg'},
      {id: 9, title: "Pin 9", height: '240', img_url: 'http://placehold.it/150x240.jpg'},
      {id: 10, title: "Pin 10", height: '120', img_url: 'http://placehold.it/150x120.jpg'},
      {id: 11, title: "Pin 11", height: '600', img_url: 'http://placehold.it/150x600.jpg'},
      {id: 12, title: "Pin 12", height: '100', img_url: 'http://placehold.it/150x100.jpg'},
      {id: 13, title: "Pin 13", height: '360', img_url: 'http://placehold.it/150x360.jpg'},
      {id: 14, title: "Pin 14", height: '500', img_url: 'http://placehold.it/150x580.jpg'},
      {id: 15, title: "Pin 15", height: '140', img_url: 'http://placehold.it/150x140.jpg'},
      {id: 16, title: "Pin 16", height: '80', img_url: 'http://placehold.it/150x80.jpg'},
      {id: 17, title: "Pin 17", height: '240', img_url: 'http://placehold.it/150x240.jpg'},
      {id: 18, title: "Pin 18", height: '120', img_url: 'http://placehold.it/150x120.jpg'}
    ]
    return result;
  }
  init();
}(jQuery));
