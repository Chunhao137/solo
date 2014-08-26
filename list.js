//to run this type: casperjs list.js into the terminal
var utils = require('utils');
var casper = require('casper').create({
  verbose: true,
  logLevel: 'error',
  pageSettings: {
    loadImages: false,
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
  }
});
 
casper.start('http://en.wikipedia.org/wiki/List_of_towns_in_Vermont', function() {
  this.echo(this.getTitle());
 
  // Get info on all elements matching this CSS selector 
  var town_info_text = this.evaluate(function() {
    var nodes = document.querySelectorAll('table.sortable.wikitable tbody tr');
    return [].map.call(nodes, function(node) { // Alternatively: return Array.prototype.map.call(...
      return node.textContent;
    });
  });
 
  // Split the array into an array of object literals
  var town_data = town_info_text.map(function(str) {
    var elements = str.split("\n");
    var data = {
      name       : elements[2],
      county     : elements[3],
      population : elements[4],
      area       : elements[5]
    };
    return data;
  });
 
  // Dump the town_names array to screen
  utils.dump(town_data);
});
 
casper.run();