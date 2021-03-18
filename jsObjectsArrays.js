// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:

// Функція яка виведе всю інформацію про тварину. 

// Функція яка виведе за скільки тварина зможе подолати 1000 км (врахуйте що тварина може рухатись не більше 12 годин у день). 

// Функція яка зможе змінити назву тварини на більш детальну. 



const animal = {
    name: 'Hippo',
    weight: 800,
    age: 20,
    speed: 60,

    showAnimal() {
        console.log(
            `The animal name: ${this.name}, weight: ${this.weight} kg, age: ${this.age} years, speed: ${this.speed} km/h`
        );
    },
    getTripsTime() {
        // max time for one day
        const MAX = 12;
        // The distance (km) that animal run
        const TRIP = 1000;
        let roughTime = Math.floor(TRIP / this.speed);
        let days = Math.floor(roughTime / MAX);
        hours = Math.floor(roughTime % MAX);
        console.log(`The animal ${this.name} will run ${days} day(s) and ${hours} hours for cover 1000 km (can run 12 hours per day).`);
    },
    changeName(name) {
        this.name = name;
        console.log(this.name);
    }

};

console.log(animal, 'animal before');

animal.showAnimal();
animal.getTripsTime();
animal.changeName('Elephant');

console.log(animal, 'animal after');




// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. 

// Додайте методи які будуть робити наступне - рахувати площу фігури, 
// периметр фігури, 
// зроблять фігуру 3-д, 
// зададуть назву фігури, 
// переведуть значення з сантиметрів у метри.

let area;
let perimeter;

const FIGURE = {
    x: 50,
    y: 50,
    getArea() {
        area = this.x * this.y;
        console.log(area, 'area cm^2')
    },
    getPerimeter() {
        perimeter = (this.x + this.y) * 2;
        console.log(perimeter, 'perimeter cm')
    },
    get3d(z) {
        this.z = z;
        console.log(`Figure has three dimentions: x ${this.x}cm, y ${this.y}cm, z ${this.z}cm`)
    },
    figureName(name) {
        this.name = name;
        console.log(this.name, " - figure's name")
    },
    // convert parameters from cm to m (meters)
    convertParameters() {
        console.log(`x : ${this.x / 100}m, y : ${this.y / 100}m, z: ${this.z * 0.01}m, perimeter: ${perimeter / 100}m, area: ${area * 0.0001}m^2`);
    }
};

FIGURE.getArea();
FIGURE.getPerimeter();
FIGURE.get3d(50);
FIGURE.figureName("cube");
FIGURE.convertParameters();




// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

// {

//     tomato: {

//         count: 5,
//         price: 50,
//         buy: false,
//         outOfstore: true

//     },
//     ...

// }

// Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 

// Виводимо список покупок які ми купили.

// Додаємо функцію яка дозволить купити продукт.

// Додаємо функцію яка просумує всі зроблені покупки і виведе результат (не забуваємо що є значення кількості та ціни за одиницю товару)

// Додаємо можливість збільшувати кількість товару.

// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).



const GOODS = {
    tomato: {
        count: 5,
        price: 50,
        buy: false,
        outOfstore: true
    },
    bread: {
        count: 2,
        price: 20,
        buy: false,
        outOfstore: false
    },
    fish: {
        count: 3,
        price: 900,
        buy: true,
        outOfstore: false
    },
    meat: {
        count: 1,
        price: 400,
        buy: true,
        outOfstore: true
    },
    bananas: {
        count: 3,
        price: 50,
        buy: false,
        outOfstore: false
    },
    nowInStore() {
        const inStore = [];
        const notInStore = [];
        for (let key in this) {
            (typeof this[key] !== 'function') ?
            this[key].outOfstore ?
                notInStore.push(key) :
                inStore.push(key):
                ''
        }
        console.log('goods in Store', inStore);
        console.log('goods not In Store', notInStore);
    },
    showGoodsWeHave() {
        const OUR = [];
        for (let key in this) {
            if (typeof this[key] !== 'function' && this[key].buy) OUR.push(key)
        };
        console.log('Goods that we bought', OUR);
    },
    buyGoods(item) {
        this[item].buy = true;
    },
    showTotalCost() {
        let cost = 0;
        for (let key in this) {
            if (typeof this[key] !== 'function' && this[key].buy) cost += this[key].count * this[key].price;
        };
        console.log(`Total cost: $ ${cost}`);
    },
    getMoreGoods(item) {
        this[item].count++;
        this[item].buy = true;
        console.log(`${item}: ${this[item].count} kg`);
    },
    getLessGoods(item) {
        this[item].count ? this[item].count-- : this[item].buy = false;
        console.log(`${item}: ${this[item].count} kg`);
    }
};

GOODS.nowInStore();
GOODS.showGoodsWeHave();

GOODS.buyGoods('bread');
GOODS.showGoodsWeHave();

GOODS.showTotalCost();

GOODS.getMoreGoods('meat');

GOODS.getLessGoods('fish');
GOODS.getLessGoods('bread');

GOODS.showGoodsWeHave();
GOODS.showTotalCost();









// 4. Задана колекція[{ name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin" }, {}, {}, {}].

// Вивести всіх адмінів.

// Вивести середній вік усіх працівників.

// Вивести тільки унікальні хоббі працівників.




const USERS = [{
        name: "Yura",
        age: 55,
        hobby: ["films", "traveling", "hiking"],
        type: "Admin"
    },
    {
        name: "Jack",
        age: 12,
        hobby: ["films", "dances", "games"],
        type: "user"
    },
    {
        name: "Marina",
        age: 31,
        hobby: ["serials", "fitness", "yoga", "films", "books"],
        type: "Admin"
    },
    {
        name: "Ira",
        age: 75,
        hobby: ["games", "serials", "music", "yoga"],
        type: "user"
    }
];

const findAdmin = allUsers => {
    const admins = [];
    allUsers.map((user) => {
        user.type === "Admin" ? admins.push(user.name) : null;
    });
    console.log(`${admins.join(", ")} (admins)`);
};

const ageMedian = allUsers => {
    let avarageAge = 0;
    for (let i = 0; i < allUsers.length; i++) {
        avarageAge += allUsers[i].age;
    };
    console.log('Avarage age:', Math.floor(avarageAge / allUsers.length));
};

const findNotCommonHobbies = allUsers => {
    const presentHobbies = [];


    allUsers.map(({ hobby }) => {
        presentHobbies.push(...hobby);
    });

    console.log('List of hobbies (presentHobbies from USERS object): ', presentHobbies.join(', '));

    // let notCommonHobbies = [...new Set(presentHobbies)]; // make set (not repeated) of all hobbies;

    // create array just with unique hobbies
    let notCommonHobbies = presentHobbies.filter((item) => presentHobbies.indexOf(item) === presentHobbies.lastIndexOf(item));

    console.log('not common hobbies: ', notCommonHobbies.join(', '));
};

findAdmin(USERS);

ageMedian(USERS);

findNotCommonHobbies(USERS);