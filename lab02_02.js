
// var myArray = [];

//// No Args Impl

// function add(){
//
//   var output = 0
//
//   // for(var i=0;i<arguments.length;i++){
//   //   output += arguments[i]
// 	// }
//
//   for(var item in arguments){
//     output += arguments[item]
//
//     // consol.log(item)
// 	}
//
//   console.log(output)
// }

// Rest operator Impl
function add(...args){

  var output = 0
  //
  // for(var i=0;i<args.length;i++){
  //   output += args[i]
	// }

  for(var item in args){
    output += args[item]
	}

  console.log('The sum is ' + output)
}

function greatest(...args){

    var greatestItem;

    if(args.length > 0)
    {
        greatestItem = args[0]

        for(var item in args)
        {
          if(args[item] > greatestItem)
          {
            greatestItem = args[item]
          }
        }
    }
    console.log('greatest item: ' + greatestItem)
}


add(1,2)
add(1,2,3)
add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);


greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);
