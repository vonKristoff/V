var V = function (x, y){
  
  this.x = x || 0;
  this.y = y || 0;
}

V.prototype = {

  info: function(){
    console.log('x: ' + this.x, 'y: ' + this.y);
    return this
  },
  clone: function (){
    return new V(this.x, this.y)
    return this
  },
  feed: function (vector){
    this.x = vector.x;
    this.y = vector.y;
    return this
  },
  add: function (vector){
    this.x += vector.x;
    this.y += vector.y;
    return this
  },
  sub: function (vector){
    this.x -= vector.x 
    this.y -= vector.y
    return this
  },
  scale: function (n){
    this.x *= n;
    this.y *= n;
    return this
  },
  div: function (n){
    this.x /= n;
    this.y /= n;
    return this
  },
  create: {
    add: function (a, b){
      return new V( a.x + b.x, a.y + b.y )
    },
    sub: function (a, b){
      return new V( a.x - b.x, a.y - b.y )
    },
    mult: function (n){
      
    
    },
    div: function (n){
      
    }
  },
  mag: function (){
    return Math.sqrt( (this.x * this.x) + (this.y * this.y) )
    return this
  },
  dir: function (target){
    var current = this.clone();
    current.sub(target);
    return current
  },
  limit: function (n){
    this.x = (this.x < n) ? this.x : n;
    this.y = (this.y < n) ? this.y : n;
    return this
  },
  normalise: function (){
    var m = this.mag();

    this.x = this.x / m;
    this.y = this.y / m;
    return this
  },
  dot: function (vector) {
    return (this.x * vector.x) + (this.y * vector.y) ;
    return this
  },
  reverse: function (){
    this.x = -this.x;
    this.y = -this.y;
    return this
  }
}
