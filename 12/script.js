let table = document.createElement("table");
let tr = document.createElement("tr");
let td1 = document.createElement("td");
td1.innerText = "№";
let td2 = document.createElement("td");
td2.innerText = "Команда";
let td3 = document.createElement("td");
document.body.appendChild(table);
td3.innerText = "Кількість очок";
table.appendChild(tr);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

function createStudent(i,name, number){
    return {
        i:i,
        name: name,
        number: number,
        info: function(){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerText = `${this.i}`;
            let td2 = document.createElement("td");
            td2.innerText = `${this.name}`;
            let td3 = document.createElement("td");
            td3.innerText = `${this.number}`;
            table.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
        }
    }
}

let count = prompt("Введіть кількість команд");
let masGroop = [];
for(let i = 0; i < count; i++){
    let names = prompt("Введіть назву команди:");
    let number = prompt("Введіть кількість очок:");
    masGroop[i] = createStudent(i + 1,names,number);
    masGroop[i].info();
}