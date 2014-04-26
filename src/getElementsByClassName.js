// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // this code should use document.body, element.childNodes, and element.classList
  // x.hasChildNodes
  // note to self: document.body gave weird results when used in a different environment

  $('body').addClass('targetClassName');
  $('body').append('<p><p class="targetClassName"></p></p>')
  var nodeList = [];
  var children = document.body.childNodes

  console.log("document.body: " + document.body.childNodes)
  console.log("document.body.childNodes: " + document.body.childNodes);
  console.log("document.body.classList: " + document.body.classList);
  console.log("nodeList: " + nodeList)

  //console.log(children[3].classList)

  findElements(document.body)

  function hasTargetClass(data){
  	reggy = new RegExp(className);
  	return reggy.test(data)
  }

  function findElements(node){
  	console.log(node.classList)
  	_.each(node.classList, function(element){
  		console.log(2)
  		if (hasTargetClass(element))
  			nodeList.push(node)
 	})

  	if (node.childNodes){
  		console.log(1)
  		_.each(node.childNodes, function(element){
  			findElements(element)
  		});
  	}
  	 	
  }

  console.log(nodeList)
  return nodeList;

};
