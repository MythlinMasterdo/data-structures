var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if(list.tail !== null) {
      list.tail.next = node;
    }
    if(list.head === null) {
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    if(list.head !== null) {
      var oldHead = list.head.value;
      list.head = list.head.next;
      return oldHead;
    }
    return null;
  };

  list.contains = function(target) {
    var node = list.head;
    while(node != null) {
      if(node.value === target) return true;
      node = node.next;
    }
    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if(this.tail !== null) {
    this.tail.next = node;
  }
  if(this.head === null) {
    this.head = node;
  }
  this.tail = node;
}

LinkedList.prototype.removeHead = function() {
  if(this.head !== null) {
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  }
  return null;
}

LinkedList.prototype.contains = function(target) {
  var node = this.head;
  while(node !== null) {
    if(node.value === target) return true;
    node = node.next;
  }
  return false;
}

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
