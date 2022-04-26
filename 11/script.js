let obj1 = new Object();
obj1.name = "лялька";
obj1.p = "100грн";
obj1.info = showInfo;

let obj2 = new Object();
obj2.name = "медведик";
obj2.p = "400грн";
obj2.info = showInfo;

function showInfo(){
    alert(`${this.name} коштує: ${this.p}`)
}

obj1.info();
obj2.info();