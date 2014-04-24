// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // return null for functions and undefined things
  // here are what seems to be the basics
 	 if (typeof(obj) === 'number' || obj === true || obj === false){
 	 	return obj.toString();
 	 }
 	 else if (typeof(obj) === 'string')
  		return "\"" + obj + "\"";
	 else if (Object.prototype.toString.call(obj) == '[object Function]')
 	 	return null;
 	 else if (obj === null)
  		return 'null'

  // Arrays
  else if (Object.prototype.toString.call(obj) == '[object Array]'){
  	var arr = []
  	for (var i = 0; i < obj.length; i++)
  		arr.push(stringifyJSON(obj[i]))
  	return "[" + arr.join(",") + "]";
  }
  // Objects
  else if (typeof(obj) === 'object')
  	return "{" + "}"

  return 'wut'
};
