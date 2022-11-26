// Function for calculating grades
var students = [['Dennis', 80], ['Ben', 77], ['Joy', 88], ['Tancy', 95], ['Tom', 68]];
var Avgmarks = 0;

for (var i=0; i < students.length; i++){
    Avgmarks += students[i][1];
    var avg =(Avgmarks/students.length);
}
console.log("Average grade: " + (Avgmarks)/students.length);

if (avg > 79) {
    console.log("Grade : A");
    
}else if (avg > 60) {
    console.log("Grade : B")
}else if (avg > 49) {
    console.log("Grade : C")
}else if (avg > 40){
    console.log("Grade : D")
}else if (avg > 40){
    console.log("Grade : E")
}



    

