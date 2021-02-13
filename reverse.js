function reserveString(str){
    var reverse = "";
    for(var i=0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien bhai brother.";
var forAlien = reserveString(statement);
console.log(forAlien);
var foodVlog = reserveString("Ki khawa jai... Khida Lagse");
console.log(foodVlog);