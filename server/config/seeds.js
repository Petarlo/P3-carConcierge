const db = require('./connection');
const { User, Car } = require('../models');

db.once('open', async () => {

    const cars = await Car.insertMany([
        {
            make: 'Ford',
            model: 'Mustang',
            year: 2020,
            shape: 'Saloon'
        }, 
        {
            make: 'Toyota',
            model: 'Corolla',
            year: 2020,
            shape: 'Hatch'
        },
        {
            make: 'Honda',
            model: 'Accord',
            year: 2020,
            shape: 'Sedan'
        }
    ]);

    console.log('cars seeded successfully');

    await User.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'jondoe@example.com',
        password: 'password123',
        id: '123'
    });

    await User.create({
        firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    id: '456'
  });

  console.log('users seeded');

  process.exit();
});