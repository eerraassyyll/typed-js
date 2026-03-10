//1.
var str;
var num;
var isIs;
var arr;
//2.
function avg(arr) {
    var c = 0;
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        c++;
        total += arr[i];
    }
    return total / c;
}
//4.
var person = {
    id: 1,
    name: "Era",
    age: 21,
    grades: [90, 80, 70]
};
//5.
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.newStudent = function (student) {
        this.students.push(student);
        return student;
    };
    StudentManager.prototype.getAll = function () {
        this.students.forEach(function (student) {
            console.log("ID ", student.id, "\nName: ", student.name);
        });
    };
    return StudentManager;
}());
function unv(generic) {
    console.log("unviversal data:", generic);
}
var stm = new StudentManager();
stm.newStudent(person);
stm.getAll();
unv("123");
unv(false);



/*
PS C:\Users\VTK1\Documents\hk> tsc app.ts
PS C:\Users\VTK1\Documents\hk> node app.js
ID  1 
Name:  Era
unviversal data: 123
unviversal data: false
*/
