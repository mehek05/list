var Name_Of_The_Guest_Array = [];
function Submit() {
   var Guest_name = document.getElementById("enter_name").value;
   Name_Of_The_Guest_Array.push(Guest_name);
   document.getElementById("names").innerHTML = Name_Of_The_Guest_Array;
   console.log(Name_Of_The_Guest_Array);
   var length_of_the_array = Name_Of_The_Guest_Array.length;
    console.log(length_of_the_array);
}
function Show_the_list() {
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("Show_the_names").innerHTML = i.toString();
}
function sort() {
    Name_Of_The_Guest_Array.sort();
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("sorting").innerHTML = i.toString();
}
function Searching() {
    var s = document.getElementById("Search_list").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++) {
        if(s==Name_Of_The_Guest_Array[j]) {
            found = found+1;
        }
    }
    document.getElementById("Search").innerHTML = "Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");
}