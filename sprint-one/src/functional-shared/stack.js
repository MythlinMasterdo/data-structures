var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stockObj = {};
  stockObj["numOfKeys"] = 0;
  stockObj["storage"] = {};
  _.extend(stockObj, stackMethods);
  return stockObj;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.numOfKeys;
};


stackMethods.push = function(value) {
  this.storage[++this.numOfKeys] = value;
};

stackMethods.pop = function() {
  if(this.size() === 0) return;
  var value = this.storage[this.size()];
  delete this.storage[this.size()];
  this.numOfKeys --;
  return value;
};