var data = require("./products.json");
var items = data['items'];
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

// for(var i = 0; i < data['items'].length; i++) {
// 	var images = data['items'][i].product.images;
// 	if(images.length > 1) {
// 		console.log(images);
// 	}
// }


// Question Four


// for(var i = 0; i < data['items'].length; i++) {
// 	var brand = items[i].product.brand;
// 	if(brand === "Canon"){
// 		console.log(brand);
// 	}
// }


// Question Five


// for(var i = 0; i < data['items'].length; i++) {
// 	var brand = items[i].product.brand; 
// 	if(brand === "Canon" && items[i].product.author.name[0].indexOf("ebay")) {
// 		console.log(items[i]);
// 	}
// }  


// Question Six

// var images = items[i].product.images;
// 	var brand = items[i].product.brand; 
// 	var price = items[i].product.inventories.price;
// }

for(var i = 0; i < items.length; i++) {
	console.log(items[i].product.brand );
	console.log(items[i].product.images);
	console.log(items[i].product.inventories[0].price);
	console.log('-----------')
}
	








