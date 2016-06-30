"use strict";

const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const dmd = require('dmd');
const util = require('util');
const path = require('path');
const collectJson = require('collect-json');

const PATHS = [
  path.resolve(__dirname, '../node_modules/kittik-animation-*/lib/**/*.js'),
  path.resolve(__dirname, '../doc/api/animations/%s.md'),
  path.resolve(__dirname, '../node_modules/kittik-shape-*/lib/**/*.js'),
  path.resolve(__dirname, '../doc/api/shapes/%s.md'),
  path.resolve(__dirname, '../node_modules/kittik-cursor/lib/**/*.js'),
  path.resolve(__dirname, '../doc/api/cursor/%s.md'),
  path.resolve(__dirname, '../lib/**/*.js'),
  path.resolve(__dirname, '../doc/api/%s.md')
];

function writeMarkdownFile(data, classes, index, output) {
  const className = classes[index];
  const template = util.format('{{#class name="%s"}}{{>docs}}{{/class}}', className);
  const dmdStream = dmd({template: template});

  console.log(util.format('rendering %s, template: %s', className, template));

  dmdStream
    .pipe(fs.createWriteStream(util.format(output, className)))
    .on('close', () => {
      const next = index + 1;

      if (classes[next]) {
        writeMarkdownFile(data, classes, next, output);
      }
    });

  dmdStream.end(JSON.stringify(data));
}

for (let i = 0; i < PATHS.length; i += 2) {
  jsdoc2md({src: PATHS[i], json: true}).pipe(collectJson(data => {
    const classes = data.reduce((prev, curr) => {
      if (curr.kind === 'class') prev.push(curr.name);
      return prev;
    }, []);

    writeMarkdownFile(data, classes, 0, PATHS[i + 1]);
  }));
}
