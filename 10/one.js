let speech = "Я навчаюся в коледжі морського і річкового транспорту";
let count = 1;
let i = 0;
while(speech.length > i){
    if(speech[i] == " "){
        count++;
    }
    i++;
}

alert(`${speech}: ${count} слів`);