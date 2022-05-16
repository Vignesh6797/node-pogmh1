// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const arr = [{ id: 23, name: 'manoj' }, { id: 42, name: 'Vignesh' }, {}];
const it = arr.findIndex((obj) => {
  return obj.id == 42;
});

console.log('ID', arr[it].name);

const products = [
  { id: 1, product_name: 'Wine - Ice Wine', price: '$33.52' },
  { id: 2, product_name: 'Chickensplit Half', price: '$53.74' },
  { id: 3, product_name: 'Asparagus - Green, Fresh', price: '$60.65' },
  { id: 4, product_name: 'Salt And Pepper Mix - White', price: '$79.28' },
  { id: 5, product_name: 'Tomatoes - Orange', price: '$59.82' },
];

const post = products.find((post) => {
  console.log('products', post.id == 2);
});

const value1 = '2';
const value2 = 2;

console.log('CHeck', value1 == value2);

const foo = ['one', 2, 'three', 4, 'five'];

const [red, yellow, ...green] = foo;

console.log(red);
console.log(yellow);
console.log(green instanceof String);

const findCheck = products.find((element) => {
  return element.id == 1;
});

console.log('find_check', findCheck);

console.log('index value CHeck', foo.indexOf('five', 1));
