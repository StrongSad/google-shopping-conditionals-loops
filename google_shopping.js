var data = require("./products.json")

// Write your solutions below
// console.log(data["items"]);


/*Question one*/


// var count = 0;
// for(var i = 0; i < data['items'].length; i ++) {
// 	if(data['items'][i].kind === `shopping#product`) {
// 		count++;
// 	}
// }

// console.log(count);


/*Question Two*/



// for(var i = 0; i < data['items'].length; i++) {
// 	var inventories = data['items'][i].product.inventories;
// 	for(var j = 0; j < inventories.length; j++) {
// 		if(inventories[j].availability === 'backorder') {
// 			console.log(inventories[j]);
// 		}
// 	}
// }


/* Question Three*/

for(var i = 0; i < data['items'].length; i++) {
	var images = data['items'][i].product.images;
	if(images.length > 1) {
		console.log(images);
	}
}













