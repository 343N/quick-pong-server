function SSNum(s, scl, x, y){

  this.digits = [];
  this.scl = scl;
  this.x = x;
  this.y = y;
  var lstring = s.toString();
  var letters = lstring.split('').map(function(e) {
    return parseInt(e, 10);
  });


  for (var i = 0; i < letters.length; i++){
    if (typeof letters[i] == "number"){
      var l = letters[i]
      this.digits.push(new Digit(letters[i], this.scl, this.x + (i * (80 * this.scl)), this.y));
    }
  }



  this.modify = function(s){
    var lstring = s.toString();
    var letters = lstring.split('').map(function(e) {
      return parseInt(e, 10);
    });
    this.digits = [];
    for (var i = 0; i < letters.length; i++){
      if (typeof letters[i] == "number"){
        var l = letters[i]
        this.digits.push(new Digit(letters[i], this.scl, this.x + (i * (80 * this.scl)), this.y));
      }
    }
  }

  this.changeScale = function(scl){

      this.scl = scl;
      for (var i = 0; i < this.digits.length; i++){
        this.digits[i].scale = scl;
        this.digits[i].x = this.x + (i * (80 * scl))
      }

  }

  this.show = function(){
    for (var i = 0; i < this.digits.length; i++){
      this.digits[i].show();
    }

  }




}
