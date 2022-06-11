// mongoose setup
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017');
  console.log('Connected to MongoDB');
}

// export mongoose to be used in other files
module.exports = mongoose;