// 1
console.log("************* 1 ***********");
console.log(hello);                                   
var hello = 'world';   
// log undefinded
console.log("----------------------------");

// 2
console.log("************ 2 ************");
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// log magnet
console.log("---------------------------");

// 3
console.log("*********** 3 ************");
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// log 'super cool'
console.log("---------------------------");
// 4
console.log("************ 4 ************");
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// log 'chicken'
// log 'half-chicken'
console.log("---------------------------");
// 5
console.log("************ 5 ************");
//mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// log undefided funtion
console.log("-----------------------------");
// 6 
console.log("************ 6 *************");
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// log undefined
// log rock
// log r&b
// log disco
console.log("--------------------------------");
// 7
console.log("************** 7 **************");
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// log 'san jose' 
// log 'seattle'
// log 'burbank'
// log 'san jose'
console.log("-------------------------------");
// 8
console.log("************** 8 *************");
function makeDojo(name, students){
    //const dojo = {};
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// log {name:'chicago',students:65,hiring:true}
// log {'closed for now'}
console.log("--------------------------------");