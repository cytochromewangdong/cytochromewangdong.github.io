/*
Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
*/
String.prototype.filter = function(p)
{
    let words =  this.split(/\s+/);
    p = Array.isArray(p)?p:[p];
    return words.filter(e=>p.indexOf(e)<0).join(' ');
}
console.log("This house is not nice!".filter('not'));
//console.log("This house is not nice!".filter(['not', 'house']));

/*Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]*/
Array.prototype.bubbleSort  = function(){
    let endIdx = this.length - 1;
    for(let i=endIdx;i>0;i--)
    {
        for(let j=endIdx;j>endIdx - i;j--)
        {
            if(this[j]<this[j-1])
            {
                let temp = this[j];
                this[j] = this[j-1];
                this[j-1] =temp;
            }
        }
    }
    return this;
}
console.log([6,4,0, 3,-2,1].bubbleSort());

/**
 * Exercise 3:
Create an object called Teacher derived from a Person function constructor, and implement
a method called teach that receives a string called subject, and prints out: [teacher's name]
is now teaching [subject]. Create a Teacher object and call its teach method..
 */
{
    function Person(name)
    {
        this.name = name;
    }
    function Teacher(name)
    {
        Person.call(this, name);
    }
    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.teach = function(subject){
        console.log(this.name +" is now teaching "+ subject);
    }
    let teacher = new Teacher("DongWang");
    teacher.teach("math");
}


/*
Also do the same thing using Object.create. When using Object.create you will need a
factory function instead of a function constructor in order to pass parameters such as
‘name’ to be set in the prototype.
*/
{
    const Person = {name:"unknown"};
    const Teacher = Object.create(Person);
    Teacher.teach = function(subject){
        console.log(this.name +" is now teaching "+ subject);
    }
    const CreateTeacher =function(name){
        let teacher = Object.create(Teacher);
        teacher.name = name;
        return teacher;
    }
    let teacher = CreateTeacher("DongWang");
    teacher.teach("math");
}

/*Exercise 4:
Write code that will create person, student, and professor objects.
• Person objects have
o name and age fields
o a greeting method that prints out: “Greetings, my name is [name] and I am
[age] years old.”
o a salute method that prints out: “Good morning!, and in case I dont see you,
good afternoon, good evening and good night!”
• Student objects inherit name, age, and salute from person. They also have a field
‘major’ and have their own greeting method. Their greeting is “Hey, my name is
[name] and I am studying [major]. The greeting should be output to the console.
• Professor objects inherit name, age, and salute from person. They also have a field
‘department’ and have their own greeting method. Their salutation is “Good day,
my name is [name] and I am in the [department] department.” Output it to the
console.
• Create a professor object and a student object. Call both the greeting and salutation
methods on each.
• Do this exercise once using the object prototype approach for inheritance and then
using the function constructor approach.
*/
//=============== the object prototype approach
{
    const Person = {
        name:"unknown",
        age:"-1",
        greeting: function(){
            console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
        },
        salute: function(){
            console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
        }
    }
    const Student = Object.create(Person);
    Student.greeting = function(){
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    }
    Student.major = 'unknown';
    const Professor = Object.create(Person);
    Professor.greeting = function(){
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    }
    Professor.department='unknown';
    const CreateStudent = function(name, age, major){
        let student = Object.create(Student);
        student.name=name;
        student.age = age;
        student.major= major;
        return student;
    }
    const CreateProfessor = function(name, age, department){
        let professor = Object.create(Professor);
        professor.name=name;
        professor.age = age;
        professor.department= department;
        return professor;
    }
    let s = CreateStudent("DongWang",41,"Computer Science");
    s.greeting();
    s.salute();
    let p = CreateProfessor("Asad",30, "Computer");
    p.greeting();
    p.salute();
}
//=============== the function constructor approach
{
    function Person(name, age)
    {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greeting = function(){
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    }
    Person.prototype.salute = function(){
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
    function Student(name, age,major)
    {
        Person.call(this, name, age);
        this.major = major;
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.greeting = function(){
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    }
    
    function Professor(name, age,department)
    {
        Person.call(this, name, age);
        this.department = department;
    }
    Professor.prototype = Object.create(Person.prototype);
    
    Professor.prototype.greeting = function(){
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    }
    
    let s = new Student("DongWang",41,"Computer Science");
    s.greeting();
    s.salute();
    let p = new Professor("Asad",30, "Computer");
    p.greeting();
    p.salute();
}
