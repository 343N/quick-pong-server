function Game(player1, player2){
  this.p1 = new Player(player1);
  this.p2 = new Player(player2);
  this.players = [this.p1, this.p2];
  this.ball = new Ball(0, 0);


  this.initiate = function(){

      io.to(this.p1.id).emit('newGame');
      io.to(this.p2.id).emit('newGame');


  }

}
