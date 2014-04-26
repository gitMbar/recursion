// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // note to self: document.body gave weird results when used in a different environment
  var nodeList = [];

  function hasTargetClass(data){
  	return data === className
  }

  function findElements(node){
  	// Push nodes with className to nodeList
  	_.each(node.classList, function(element){
  		if (hasTargetClass(element))
  			nodeList.push(node)
 	})
  	// Pass all children to findElements
  	if (node.childNodes){
  		_.each(node.childNodes, function(element){
  			findElements(element)
  		});
  	}
  }

  findElements(document.body)

  return nodeList;

};
