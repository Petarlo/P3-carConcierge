const { Car, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args) => {
            const user = await User.find();
            return user;
        },
        cars: async () => {
            const cars = await Car.find();
            return cars;
        },
        car: async (parent, { id }) => {
            const car = await Car.findById(id);
            return car;
        },
        searchCars: async (parent, { make, model, year, shape }) => {
            const cars = await Car.find({ make, model, year, shape });
            return cars;
        },
    },

  Mutation: {
    addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

    updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw AuthenticationError;
        },
    login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
        
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
              throw AuthenticationError;
            }
          
            const token = signToken(user);
          
            return { token, user };
              }
           }
};

module.exports = resolvers;