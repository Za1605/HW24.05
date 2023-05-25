// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function user(id, name, surname, email) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
}

let simpleusers = [
    new user(222, `petro`,`iv`, 345 ),
    new user(426, `sc`, `ty`, 265),
    new user(234, `tr`, `popo`, 098 ),
    new user(981, `yoyo`, `tyty`, 345),
    new user(100, `cece`, `gogo`, 678),
    new user(123, `cdcd`, `asas`, 398),
    new user(123, `ewew`, `dcdc`, 345),
    new user(123, `fgfdg`, `gfgf`, 367),
    new user(123, `fvdf`, `sasdsd`, 765),
    new user(765, `fgg`, `fdsfsd`, 456),
];
console.log(simpleusers);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
let simpleusers1 = [
    new user(2, `petro`,`iv`, 345 ),
    new user(6, `sc`, `ty`, 265),
    new user(4, `tr`, `popo`, 098 ),
    new user(9, `yoyo`, `tyty`, 345),
    new user(1, `cece`, `gogo`, 678),
    new user(3, `cdcd`, `asas`, 398),
    new user(3, `ewew`, `dcdc`, 345),
    new user(1, `fgfdg`, `gfgf`, 367),
    new user(3, `fvdf`, `sasdsd`, 765),
    new user(7, `fgg`, `fdsfsd`, 456),
];

let filter = simpleusers1.filter(value => {
    return value.id / 2 ===1|| value.id/2> 2});
console.log(filter);


// Взяти масив з  User[]
//з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let simpleusers2 = [
    new user(2, `petro`,`iv`, 345 ),
    new user(6, `sc`, `ty`, 265),
    new user(4, `tr`, `popo`, 098 ),
new user(9, `yoyo`, `tyty`, 345),
    new user(1, `cece`, `gogo`, 678),
    new user(3, `cdcd`, `asas`, 398),
    new user(3, `ewew`, `dcdc`, 345),
    new user(1, `fgfdg`, `gfgf`, 367),
    new user(3, `fvdf`, `sasdsd`, 765),
    new user(7, `fgg`, `fdsfsd`, 456),
];

let sort = simpleusers2.sort((a,b)=>{
    return a.id-b.id;
});
console.log(sort);

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

function client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order= order;
}

let simpleClients = [
    new client (8, `petro`,`iv`, 45, 093, [`fgfdgdf`,`fgg`,`fgfdfgfgdfg`,`gfg`, `gfg`,`fgfg`]),
    new client (5, `ivan`,`ivod`, 345, 098, [`fdsfffff`,`ghgh`,`ghghgjhgjh`,`fgf`,`sdf`]),
    new client (2, `petro`,`iv`, 345, 097, [`fdsfffgbg`,`th`,`fggg`]),
    new client (4, `stepan`,`iv`, 345, 096, [`fdsfgtfg`, `bn`,`bhuggfg`]),
    new client (2, `petro`,`iv`, 345, 099, [`fdsfjf`]),
    new client (2, `kim`,`iv`, 345, 095, [`fdsffjwf`,`dd`]),

    new client (2, `tim`,`iv`, 345, 094, [`fdsfweff`]),
    new client (2, `max`,`iv`, 345, 093, [`fdsfhgttff`,`ff`]),
    new client (2, `petro`,`iv`, 345, 098, [`fdsfff`]),
    new client (2, `ted`,`iv`, 345, 098, [`fdsfff`]),
];
console.log(simpleClients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort1 = simpleClients.sort((b,a) =>{
return b.order.length- a.order.length});
console.log(sort1);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function car (model, year, produser, maxspeed, volume) {
    this.model = model;
    this.year = year;
    this.produser = produser;
    this.volume = volume;
    this.maxspeed = maxspeed;
};
    this.drive = function (car) {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    };

let simpleCars = [
        new car(`mustang`, 2020, `germ`, 2, 300)]

console.log(simpleCars);

