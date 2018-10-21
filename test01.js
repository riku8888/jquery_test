
var animals = ['パンダ', 'ライオン', 'キリン'];
var i = 0;


// var animalsWeight = [{'name':'パンダ', 'weight': 80},
//             {'name':'ライオン','weight':200},
            // {'name':'キリン', 'weight':300}];
var animalsWeight = {'パンダ': "80kg","ライオン":"200kg","キリン":"300kg"};
          // var x =
// if(answer == animalsWeight[x].name){
//   alert(animalsWeight[x].weight);
// }

// while (i < animals.length){
  var answer = prompt('パンダ or ライオン or キリン ?');
  // if(answer == animals[1]){
  //   alert(animals[1]);
  // }else {
  //   answer;
  // }
  // if(answer == "ライオン"){
    alert(animalsWeight[answer]);
    // console.log(animalsWeight[answer]);
    // break;
  // }

      // i++;
// }
var y;
var z = 3.14;
function square(y){
  var result = y*y*z
  alert(result);
};

square(5);
