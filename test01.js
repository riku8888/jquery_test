

//3.でwhile文より前にpromptでキー入力し、その入力した内容が'ライオン'の場合に処理を中断するように変更してください。4.で中断したときの'ライオン'の添え字もalertするように変更してください。
var = prompt('好きな動物'+aniamals+'の中から順番に選び、入力してください');
var animals = ['パンダ', 'ライオン', 'キリン'];
var a = 0;
while(a < animals.length){
if(aniamals[a] =='ライオン'){
    break;}
  a++;
}

alert(animals[a]);
