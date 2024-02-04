const db = require('../config/connection');
const { User, Car, Blog } = require('../models');
const userSeeds = require('./userSeeds.json');
const blogSeeds = require('./blogSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('Blog', 'blogs');
    
        await cleanDB('User', 'users');
    
        await User.create(userSeeds);
    
        for (let i = 0; i < blogSeeds.length; i++) {
          const { _id, author } = await Blog.create(blogSeeds[i]);
          const user = await User.findOneAndUpdate(
            { username: author },
            {
              $addToSet: {
                blogs: _id,
              },
            }
          );
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    
      console.log('all done!');
      process.exit(0);
    });
    