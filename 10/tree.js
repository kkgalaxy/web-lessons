let gmail = []; let text;
while(true){
    text = prompt(); gmail.push(text);
    if(text == null){break;}
}
alert(gmail.join(", "));