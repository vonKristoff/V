var V = function (x, y){
  
  this.x = x || 0;
  this.y = y || 0;
}

V.prototype = {

  current: function(){
    console.log('x: ' + this.x, 'y: ' + this.y);
  },
  clone: function (){
    return new V(this.x, this.y)
  },
  add: function (vector){
    this.x + vector.x;
    this.y + vector.y;
  },
  sub: function (vector){
    this.x - vector.x;
    this.y - vector.y;
  },
  mult: function (n){
    this.x * n;
    this.y * n;
  },
  div: function (n){
    this.x / n;
    this.y / n;
  },
  mag: function (){
    return Math.sqrt( (this.x * this.x) + (this.y * this.y) )
  },
  dir: function (target){
    var current = this.clone();
    return current.sub(target);
  },
  limit: function (n){
    this.x = (this.x < n) ? this.x : n;
    this.y = (this.y < n) ? this.y : n;
  },
  normalise: function (){
    var m = this.mag();

    this.x = this.x / m;
    this.y = this.y / m;
  },
  dot: function (vector) {
    return (this.x * vector.x) + (this.y * vector.y) ;
  },
  reverse: function (){
    this.x = -this.x;
    this.y = -this.y;
  }
}

return V