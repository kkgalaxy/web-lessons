function one(){
    let wat = prompt("Ведіть кількість ват для конвертації");
    let a = wat *  0.001;   let b = wat * 0.0000010;    let c = wat * 0.00135962162;
    alert(`Потужність в кіловатах: ${a}. Потужність в мегават: ${b}. Потужність в кінські силах: ${c}`)
}
var a = true;
function two(){
    do{
        var c = 1 * prompt("Ведіть оцінку за перший іспит");
        if(c < 6){return;}
        else{alert("Помилка");}
    }while(a);
    do{
        var x = 1 * prompt("Ведіть оцінку за другий іспит");
        if(c < 6){return;}
        else{alert("Помилка");}
    }while(a);
    do{
        var w = 1 * prompt("Ведіть оцінку за третій іспит");
        if(c < 6){return;}
        else{alert("Помилка");}
    }while(a);

    let sum = (c + x + w) / 3;

    if(sum >= 4){alert("Стипендвя є")}
    else{alert("Стипендії немає")}
}