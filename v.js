
var V = function (x, y, config){
  
  this.x = x || 0;
  this.y = y || 0;

  if(config){
    for(key in config){
      this[key] = config[key];
    }
  }
}

V.prototype = {

  info: function(){
    console.log('x: ' + this.x, 'y: ' + this.y);
    return this
  },
  create: function (vectorname, x, y){
    this[vectorname] = new V(x, y)
    return this
    
  },
  clone: function (){
    return new V(this.x, this.y)
    return this
  },
  reset: function (){
    this.x = 0
    this.y = 0
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
  multi: function (vector){
    this.x *= vector.x 
    this.y *= vector.y
    return this
  },
  div: function (vector){
    this.x /= vector.x;
    this.y /= vector.y;
    return this
  },
  scale: function (n){
    this.x *= n;
    this.y *= n;
    return this
  },
  mag: function (){
    return ( (this.x * this.x) + (this.y * this.y) )
    return this
  },
  dir: function (target){
    var current = this.clone();
    return current.sub(target);
  },
  limit: function (n){
    var mag = Math.sqrt(this.mag())
    if(mag > n*n){
      this.div(mag)
      this.scale(n)
    }
    return this
  },
  normalise: function (){
    var m = Math.sqrt(this.mag());
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
  },
  heading: function (){
    var h = Math.atan2(this.y, this.x);
    return h;
  },
  rotate: function (a){
    var newHeading = this.heading() + a;
    var mag = this.mag();
    this.x += Math.cos(newHeading) * mag;
    this.y += Math.sin(newHeading) * mag;
    return this;
  }
}


V.add = function (a, b){
  return new V( a.x + b.x, a.y + b.y )
}
V.sub = function (a, b){
  return new V( a.x - b.x, a.y - b.y )
}
V.mult = function (a, b){
  return new V( a.x * b.x, a.y * b.y )
}
V.div = function (a, b){
 return new V( a.x / b.x, a.y / b.y ) 
}

V.constrain = function (vector, min, max){

  var vmin = new V(min, min),
      vmax = new V(max, max)

  var mag = Math.sqrt(vector.mag());
  if(mag < min){
    vector.feed(vmin)
  }
  if(mag > max){
    vector.feed(vmax)
  }

}
