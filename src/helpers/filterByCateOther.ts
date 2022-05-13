import { Game } from 'app/models/Game';

export const filterByCateOther = (games: Array<Game>): Array<Game> => {
  const newGames = Array<Game>();
  const cateOther = Array<string>('ball', 'virtual', 'fun');
  games.forEach((game: Game) => {
    const filteredCate = game?.categories?.find((cate: string) =>
      cateOther.some((other: string) => other === cate),
    );
    if (filteredCate) {
      newGames.push(game);
    }
  });
  return newGames;
};
