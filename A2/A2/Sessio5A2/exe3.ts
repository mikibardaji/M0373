interface Game {
    name: string;
    preu: number;
    plataformes: string[];
  }
  
  const jsonGame = '{"name":"Mario Party","preu":20.35,"plataformes":["WII","Switch","PS5"]}';


  const game: Game = JSON.parse(jsonGame);

  console.log(game);
  