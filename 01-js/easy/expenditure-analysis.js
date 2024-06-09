/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result=[];
  let total=[];
  for(let i=0;i<transactions.length;i++){
    let curr=transactions[i];
    if(!total[curr.category]){
      total[curr.category]=curr.price;
    }
    else{
      total[curr.category]+=curr.price;
    }
  }
  for(category in total){
    result.push({category:category,totalSpent:total[category]})
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
