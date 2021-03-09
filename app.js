'use strict';

let div = document.getElementById('divEL');
let table = document.createElement('table');

function tabelHeader(){
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    
    th.textContent=("Id");
    tr.appendChild(th);
    tr.textContent=("Name");
    th.appendChild(tr);
    th.textContent=("Email");
    th.appendChild(tr);
    th.textContent=("Mobile");
    th.appendChild(tr);
    th.textContent=("Age");
    th.appendChild(tr);
    tr.appendChild(table);
    table.appendChild(div)    
}
tabelHeader();
console.log(tabelHeader);

function randomGenerator () {
    return Math.random() * (18 - 24) + 18;
  }
let allStd = [];
function Student(id,name,email,mobile,tuition){
    this.id = 0;
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.age = randomGenerator();
    this.tuition = tuition;
}
// Student.prototype.render(){

// }
function counter() {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
}
let stdinfo = document.addEventListener('submit',stdFun)

function stdFun(event){
    event.preventDefault();
    let stdEmail = event.target.fname.value;
    let stdNumber = event.target.lname.value;

}