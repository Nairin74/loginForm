
let admins = [{
    name : "admin",
    email:"admin123@gmail.com",
    psw: 123

},{
    name : "admin1",
    email:"admin13@gmail.com",
    psw: 123

}
]
let users =[ ]

function display(){
    for(i=0;i<users.length;i++){
        console.log(users.length)

       createUserRow(users[i]);
    }
}
function insertuser(){

let name = document.getElementById("uName").value;
let email = document.getElementById("uEmail").value;
let contact = document.getElementById("uContact").value;

let temp = {
    id:"" + new Date().getTime(),
    // id: 4,
    name:name,
    email:email,
    contact: contact
}

users.push(temp)
createUserRow(temp)

     
}
function updatebtn(){

    let name = document.getElementById("uName").value;
    let email = document.getElementById("uEmail").value;
    let contact = document.getElementById("uContact").value;
    var i = document.getElementById('indexdata').value
    users[i] = {
        id:i,
        // id: 4,
        name:name,
        email:email,
        contact: contact
    }
    document.getElementById('data').innerHTML = ''
    display();
// users.push(temp)
// createUserRow(temp)

}

function createUserRow(user){
let data = document.getElementById("data");

let tr = document.createElement("tr");
let td = document.createElement("td");
let id = document.createTextNode(user.id);
td.appendChild(id);
tr.appendChild(td);

let td1 = document.createElement("td");
let name = document.createTextNode(user.name);
td1.appendChild(name);
tr.appendChild(td1)

let td2 = document.createElement("td");
let email = document.createTextNode(user.email);
td2.appendChild(email);
tr.appendChild(td2);

let td3 = document.createElement("td");
let contact = document.createTextNode(user.contact);
td3.appendChild(contact);
tr.appendChild(td3);

let td4 = document.createElement("td");
let deleteBtn = document.createElement('button');
deleteBtn.innerHTML = "Delete"
deleteBtn.classList.add('btn1');
deleteBtn.onclick = ()=>{
    var check =  confirm("sure u want to delete?") 
    if(check){
        let r = deleteBtn.closest("tr");
        r.remove()
    }
}
td4.appendChild(deleteBtn);
tr.appendChild(td4);

let td5 = document.createElement("td");
let updateBtn = document.createElement('button');
updateBtn.innerHTML ="Update";
updateBtn.classList.add('btn1');
updateBtn.onclick = ()=>{
    let tr = updateBtn.closest("tr");
    let index = tr.rowIndex -1;
    console.log(index)
    document.getElementById("uName").value =users[index].name;
    console.log(name)
    document.getElementById("uEmail").value =users[index].email;
    document.getElementById("uContact").value =users[index].contact;
    
    document.getElementById('indexdata').value =index;
}
td5.appendChild(updateBtn);
tr.appendChild(td5);
data.appendChild(tr)

}

function sub1(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let psw = document.getElementById("psw").value;

event.preventDefault();

let temp = {
    name: name,
    email:email,
    psw:psw
}

admins.push(temp);
Swal.fire('Registration Done.. ')  

document.getElementById("name").value = " ";
document.getElementById("email").value = " ";
document.getElementById("psw").value = " ";
}
function sub2(){
    let email = document.getElementById("email1").value;
    let psw = document.getElementById("psw1").value;
    event.preventDefault()
    let user = admins.filter((items)=> items.email == email && items.psw == psw)
    if(user.length >= 1){

        window.location.href = 'dashboard.html';
    }
        else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }

}