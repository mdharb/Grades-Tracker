'use strict';


function randomGrade(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;

}

let headerContent= ['Student Name, Student Grade, Course, Status'];

function Student(name, course){

  this.name=name;
  this.course=course;

  this.grades=[];
//   console.log(this.grades);

  allStudents.push(this);
}

let allStudents= [];


Student.prototype.studentGrade = function(){

  this.grades.push(randomGrade(0,100));

};

// ======================== Table =================================//

let table= document.getElementById('dataTable');

let tBody= document.createElement('tbody');
table.appendChild(tBody);


Student.prototype.render= function(){

  for(let i= 0; i < allStudents.length; i++){

    let dataTr= document.createElement('tr');
    tBody.appendChild(dataTr);

    let studentTd= document.createElement('td');
    dataTr.appendChild(studentTd);

    dataSet();

  }
};
// ========================== Event ==========================//

let formSubmit= document.getElementById('dataForm');

formSubmit.addEventListener('submit', submitter);

function submitter(){

  event.preventDefault();

  let name= event.target.studentName.value;
  let course= event.target.course.value;
  //   let grades= event.target.grades.value;

  studentTd.appendChild(name);
  studentTd.appendChild(course);

  let addedStudent= new Student(name, course);

  studentTd.appendChild(addedStudent);

  //   this.render();

}

function callingFunctions(){

  for(let i=0; i < allStudents.length; i++){

    Student[i].studentGrade();
    Student[i].render();

  }
}
callingFunctions();

// =================== Local Storage ====================================//

function dataSet(){

  let string= JSON.stringify(allStudents);
  localStorage.setItem('student', string);
}

function dataGet(){

  let data= localStorage.getItem('student');
  let parsed= JSON.parse(data);

  if (parsed !== null){

    for(let i=0; i < parsed[i]; i++){

      let students= new Student(parsed[i].allStudents);
    }
  }
}

dataGet();
