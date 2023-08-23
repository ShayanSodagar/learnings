
var cities = ["karachi" , "islamabad" , "faslabad","lahore" ,"pishawar" ];
var user = prompt("enter your city");
user.toLowerCase();
var bol = false;
for(var i = 0;i <cities.length;i++){
    if(user == cities[i]){
        bol = true;
    }
    else{
        bol;
    }
}
if(bol){
    console.log(`your city is "${user}" correct`);
}else{
    console.log(`"${user}" this is not a city`);
}


var ff = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut explicabo exercitationem ipsam. Quos similique eveniet quo architecto pariatur animi."

console.log(ff.slice(0,12)+"....")

var o = prompt("enter changing word\nLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Lorem Lorem Lorem Lorem Atque ut explicabo  exercitationem ipsam. Quos similique eveniet quo architecto pariatur animi" )

var b = prompt("enter your word\nLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Lorem Lorem Lorem Lorem Atque ut explicabo exercitationem ipsam. Quos similique eveniet quo architecto pariatur animi" )

var chan = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Lorem Lorem Lorem Lorem Atque ut explicabo exercitationem ipsam. Quos similique eveniet quo architecto pariatur animi."

console.log(chan.replace(o,b))
console.log(chan.replaceAll(o,b))




    