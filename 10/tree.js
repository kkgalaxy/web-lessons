let gmail = []; let text;
while(true){
    text = prompt("Введіть пошту"); gmail.push(text);
    if(text == null){break;}
}
alert(gmail.join(", "));