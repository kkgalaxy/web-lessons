let numbers = []; let c = 0; let s = 0; let n;
while(true){
    n = prompt() / 1;
    if(n / 1 != n){break;}
    numbers.push(n);
    c++;
    s += n / 1;
}
numbers.push(`Сума: ${s}`); alert(numbers.join(), " ")