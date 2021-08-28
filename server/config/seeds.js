const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();
/*Creating categories of the online market.*/
  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Cookies',
      description:
        'Llorum Ipsum',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Coffee',
      description:
        'Llorum Ipsum',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Llorum Ipsum',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Soap',
      category: categories[1]._id,
      description:
        'Llorum Ipsum',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Wooden Spoons',
      category: categories[1]._id,
      description:
        'Llorum Ipsum',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Picture Camera',
      category: categories[2]._id,
      description:
        'Llorum Ipsum',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'Llorum Ipsum',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Bedtime Book',
      category: categories[3]._id,
      description:
        'Llorum Ipsum',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Top',
      category: categories[4]._id,
      description: 'Llorum Ipsum',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Toy Horses',
      category: categories[4]._id,
      description:
        'Llorum Ipsum',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Bear',
      category: categories[4]._id,
      description:
        'Llorum Ipsum',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Kids Blocks',
      category: categories[4]._id,
      description:
        'Llorum Ipsum',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Nicholas',
    lastName: 'Veen',
    email: 'NV@testmail.com',
    password: 'Nick123',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Crystal',
    lastName: 'Veen',
    email: 'CV@testmail.com',
    password: 'Crystal123'
  });

  console.log('users seeded');

  process.exit();
});
