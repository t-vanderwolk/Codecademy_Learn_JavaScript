const team = {
    _players:[
    {
    firstName: 'Taylor',
    lastName: 'Vanderwolk',
    age: 25},
    {
    firstName: 'Emily',
    lastName: 'Morganbesser',
    age: 24},
    {
    firstName: 'Madelyn',
    lastName: 'Walker',
    age: 29}
  
  ],
    _games: [
  {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Dolphins',
    teamPoints: 40,
    opponentPoints: 21
  },
  {
    opponent: 'Cardnals',
    teamPoints: 33,
    opponentPoints: 43}
    ],
    get games() {
    return this._games;
    },
  addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
  },
  get players() {
    return this._players;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
   
      this.players.push(player);
    },
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Panthers', 40 , 20);
  team.addGame('Eagles', 18 , 29);
  team.addGame('Patriots', 49 , 32);
  console.log(team.games);
  
  