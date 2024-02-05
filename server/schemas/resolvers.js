const { Car, User, Blog } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
        blog: async (parent, { id }) => {
          const blog = await Blog.findById(id);
          return blog;
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
        },          
    addComment: async (parent, { blogId, commentText }, context) => {
      if (context.user) {
        return Blog.findOneAndUpdate(
          { _id: blogId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { blogid }, context) => {
      if (context.user) {
        return Blog.findOneAndUpdate(
          { _id: blogid },
          {
            $pull: {
              comments: { commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
      checkout: async (_, args, context) => {
        try {
          const url = new URL(context.headers.referer).origin;
  
          // ... perform any additional checks or validations
  
          const lineItems = args.products.map((product) => ({
            price_data: {
              currency: 'aud',
              product_data: {
                name: product.name,
                // Add more product information as needed
              },
              unit_amount: product.price * 100,
            },
            quantity: 1,
          }));
  
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`,
          });
  
          return { session: session.id };
        } catch (error) {
          // Handle errors
          console.error('Error during checkout:', error);
          throw new Error('Failed to create checkout session');
        }
      },
    },
  };
module.exports = resolvers;