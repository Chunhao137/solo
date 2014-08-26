var fs = require('fs')
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
 
casper.start('http://en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_population', function() {
  this.echo(this.getTitle());
 
  // Get info on all elements matching this CSS selector 
  var town_info_text = this.evaluate(function() {
    var nodes = document.querySelectorAll('table.wikitable.sortable tbody tr');
    return [].map.call(nodes, function(node) { // Alternatively: return Array.prototype.map.call(...
      return node.textContent;
    });
  });
 
  // Split the array into an array of object literals
  var town_data = town_info_text.map(function(str) {
    var elements = str.split("\n");
    var data = {
      county     : elements[3],
      population : elements[4]
    };

    return data;
  });
  
   //fs.write('myFile', town_data.join(','), 'w');
  // Dump the town_names array to screen
  //console.log(dump(town_data))
  utils.dump(town_data);
});
 
casper.run();

// var utils = require('utils');
// var casper = require('casper').create({
//   verbose: true,
//   logLevel: 'error',
//   pageSettings: {
//     loadImages: false,
//     loadPlugins: false,
//     userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
//   }
// });
 
// casper.start('http://en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_population', function() {
//   this.echo(this.getTitle());
 
//   // Get info on all elements matching this CSS selector
//   //type refers to the column of the table 
//   var town_selector = 'table[class~="wikitable"] tbody tr td:nth-of-type(4)';
//   var town_names_info = this.getElementsInfo(town_selector); // an array of object literals
 
//   // Pull out the town name text and push into the town_names array
//   var town_names = [];
//   for (var i = 0; i < town_names_info.length; i++) {
//     town_names.push(town_names_info[i].text);
//   }
 
//   // Dump the town_names array to screen
//   utils.dump(town_names);
// });
 
// casper.run();