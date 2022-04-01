// npm - global command, comes with node
// npm --version


//local dependency - use it only in this particular project
// npm i <packageName>


// global dependency - use it any project 
// npm install -g <packageName>
// sudo npm install -g <pcakageName> (mac)

// package.json - manifest file (stores important info about project/package)'
//manual approach (create package.json in the root, create properies etc)
//npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash')

const items  = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)