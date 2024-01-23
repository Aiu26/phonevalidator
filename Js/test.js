import * as Guitars from './guitar.js';
import User from './user.js';

const me = new User('aiushi@gmail.com', 'Aiushi');
console.log(me);
console.log(me.greeting());
console.log(Guitars.default());
console.log(Guitars.plucking());
console.log(Guitars.singing());
