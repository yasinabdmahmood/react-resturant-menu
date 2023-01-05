// import main catagories image
// import c0 from '../assets/images/hotMeals.jpg';
// import c1 from '../assets/images/saladjpg.jpg';
// import c2 from '../assets/images/desserts.jpg';
// import c3 from '../assets/images/breackfasts.jpg';
// import meals from first catagory
// import c1t1 from '../assets/images/dumplings.jpg';
// import c1t2 from '../assets/images/soup.jpg';
// import c1t3 from '../assets/images/burger.jpg';
// import c1t4 from '../assets/images/borscht.jpg';
// import c1t5 from '../assets/images/fishPancake.jpg';
// import c1t6 from '../assets/images/hotRolls.jpg';
// import meals from second catagory
// import c2t1 from '../assets/images/avogado.jpg';
// import c2t2 from '../assets/images/camembert.jpg';
// import c2t3 from '../assets/images/greekSalad.jpg';
// import c2t4 from '../assets/images/Guacamole.jpg';
// import meals from third catagory
import c3t1 from '../assets/images/RaspberryMousse.jpg';
import c3t2 from '../assets/images/VanillaIceCream.jpg';
import c3t3 from '../assets/images/BrownieWithRaspberries.jpg';
import c3t4 from '../assets/images/Cheesecake.jpg';
import c3t5 from '../assets/images/BerryIceCream.jpg';
// import meals from fourth catagory
import c4t1 from '../assets/images/FullEnglishBreakfast.jpg';
import c4t2 from '../assets/images/Oatmeal.jpg';
import c4t3 from '../assets/images/Cheesepancakeswithstrawberryjam.jpg';
import c4t4 from '../assets/images/AvocadoToast.jpg';
import c4t5 from '../assets/images/Catfishonpumpkinpuree.jpg';

const ar1 = [
  {
    id: 0,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/4935845107510187.jpg',
    name: '"Homemade" dumplings',
    discription: 'Vareniki with mashed potatoes and fried chanterelles',
    price: 4.5,
    order: 0,
  },
  {
    id: 1,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/362243826136565.jpg',
    name: 'Soup',
    discription: 'Potatoes, carrots, onions, green onions',
    price: 4.3,
    order: 0,
  },
  {
    id: 2,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/7782510771571853.jpg',
    name: 'Burger',
    discription: 'Beef, lettuce, pickle, tomato, soft bun',
    price: 5.9,
    order: 0,
  },
  {
    id: 3,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/126628348688563.jpg',
    name: 'Borscht',
    discription: 'Beetroot borsch with bacon and donuts',
    price: 4.6,
    order: 0,
  },
  {
    id: 4,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/538855891576605.jpg',
    name: 'Fish pancakes',
    discription: 'Beef, lettuce, pickle, tomato, soft bun',
    price: 6.5,
    order: 0,
  },
  {
    id: 5,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/338726249821619.jpg',
    name: 'Hot rolls',
    discription: 'Temporarily unavailable',
    price: 4.9,
    order: 0,
  },
];

const ar2 = [
  {
    id: 0,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/598818438392393.jpg',
    name: 'Avocado salad with feta',
    discription: 'Ripe avocado, feta cheese, olives and spinach salad',
    price: 4.9,
    order: 0,
  },
  {
    id: 1,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/1593325156801055.jpg',
    name: 'Camembert salad',
    discription: 'Baked Camembert cheese with fresh vegetables',
    price: 4.5,
    order: 0,
  },
  {
    id: 2,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/2208107208935774.jpg',
    name: 'Greek saladger',
    discription: 'Tomato, cucumber, olives, feta, olive oil',
    price: 5.5,
    order: 0,
  },
  {
    id: 3,
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/5768363319109880.jpg',
    name: 'Guacamole',
    discription: 'Mexican guacamole with nachos',
    price: 3.9,
    order: 0,
  },

];
const ar3 = [
  {
    id: 0,
    src: c3t1,
    name: 'Raspberry mousse',
    discription: 'Raspberry mousse with cream and raspberry syrup',
    price: 3.25,
    order: 0,
  },
  {
    id: 1,
    src: c3t2,
    name: 'SoVanilla ice creamup',
    discription: 'Vanilla ice cream with chocolate filling',
    price: 2.5,
    order: 0,
  },
  {
    id: 2,
    src: c3t3,
    name: 'Brownie with raspberries',
    discription: 'Chocolate brownie with fresh raspberries',
    price: 4.75,
    order: 0,
  },
  {
    id: 3,
    src: c3t4,
    name: 'Cheesecake',
    discription: 'Temporarily unavailable',
    price: 4.99,
    order: 0,
  },
  {
    id: 4,
    src: c3t5,
    name: 'Berry ice cream',
    discription: 'Natural ice cream made from berries',
    price: 2.25,
    order: 0,
  },

];
const ar4 = [
  {
    id: 0,
    src: c4t1,
    name: 'Full English breakfast',
    discription: 'Fried eggs, bacon, toast, cherry tomatoes',
    price: 6.99,
    order: 0,
  },
  {
    id: 1,
    src: c4t2,
    name: 'Oatmeal',
    discription: 'Oatmeal with seasonal berries and berry syrup',
    price: 3.25,
    order: 0,
  },
  {
    id: 2,
    src: c4t3,
    name: 'Cheese pancakes with strawberry jam',
    discription: 'Fresh cottage cheese pancakes with strawberry jam and sour cream',
    price: 4.6,
    order: 0,
  },
  {
    id: 3,
    src: c4t4,
    name: 'Avocado toast',
    discription: 'Rye toast with avocado and boiled egg',
    price: 2.15,
    order: 0,
  },
  {
    id: 4,
    src: c4t5,
    name: 'Catfish on pumpkin puree',
    discription: 'Catfish fillet baked with young potatoes. Served with salad and pumpkin puree',
    price: 6.5,
    order: 0,
  },

];

const catagories = [
  {
    id: 0,
    name: 'HOT MEALS',
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/217460674308904.jpg',
    list: ar1,
  },
  {
    id: 1,
    name: 'SALADS',
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/7108784455317878.jpg',
    list: ar2,
  },
  {
    id: 2,
    name: 'DESSERTS',
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/204313368551993.jpg',
    list: ar3,
  },
  {
    id: 3,
    name: 'BEAKFASTS',
    src: 'https://odm-fs.fra1.digitaloceanspaces.com/img/9610964997582898.jpg',
    list: ar4,
  },

];
export default catagories;
