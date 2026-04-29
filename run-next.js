process.chdir('/Users/miyusato/Desktop/miyu-portfolio');
process.argv[1] = require.resolve('./node_modules/.bin/next');
// use webpack instead of turbopack in dev, bind to all interfaces for LAN access
const devIdx = process.argv.indexOf('dev');
if (devIdx !== -1) process.argv.splice(devIdx + 1, 0, '--webpack', '--hostname', '0.0.0.0');
require('./node_modules/next/dist/bin/next');
