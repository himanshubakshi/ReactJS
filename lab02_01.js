
var myArray = [];
myArray["name"] = 'Sam'
myArray['age'] = 12
myArray['country'] = 'India'
myArray['city'] = 'Pune'

function makeQueryString(){
  var output = '?'

  for(var item in myArray)
  {
    output += item + '=' + myArray[item] + '&'
  //  console.log(item + ' ' + myArray[item]);
  }

  output = output.substring(0, output.length -1)

  console.log(output);
}

makeQueryString()
