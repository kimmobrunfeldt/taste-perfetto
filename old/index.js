var Metalsmith = require('metalsmith');
var drafts = require('metalsmith-drafts');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var layouts = require('metalsmith-layouts');
var inPlace = require('metalsmith-in-place');
var collections = require('metalsmith-collections');
var Handlebars = require('handlebars');

Handlebars.registerHelper('debug', function(optionalValue) {
  console.log('Current Context');
  console.log('====================');
  console.log(this);

  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
});

function main() {
  Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .use(drafts())
    .use(permalinks({
      relative: false
    }))
    .use(collections({
      recipes: {
        pattern: 'recipes/**/*.md'
      }
    }))
    .use(markdown())
    .use(inPlace({
      engine: 'handlebars'
    }))
    .use(layouts({
      engine: 'handlebars',
      directory: 'templates',
      default: 'recipe.hbs'
    }))
    .use(function(data, metalsmith, done) {
      console.log(data);
      done();
    })
    .build(function(err) {
      if (err) throw err;
    });
}

main();
