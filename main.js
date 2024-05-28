//question  11
//array
//define an array of names
var names = ["izzah", "tayyaba"];
// loop
// for each
// for loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// for each
names.forEach(function (name) {
    console.log(name);
});
// for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendname = names_1[_i];
    console.log(friendname);
}
//question 12
for (var i = 0; i < names.length; i++) {
    console.log("hello, ".concat(names[i], "! how are you today?"));
}
// for each
names.forEach(function (friend) {
    console.log("Hi, ".concat(friend, "! how are you today?"));
});
// for of loop
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendname = names_2[_a];
    console.log("Dear, ".concat(friendname, "! how are you?"));
}
//question 13
var transportationmode = ["car", "motorcycle", "bus", "bicycle"];
for (var i = 0; i < transportationmode.length; i++) {
    console.log("I would like to own a ".concat(transportationmode[i]));
}
//for each
transportationmode.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode));
});
