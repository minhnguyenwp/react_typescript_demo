import { Game } from 'app/models/Game';

export const filterByCateName = (
  games: Array<Game>,
  cateName: string | (string | null)[] | null,
): Array<Game> => {
  const newGames = Array<Game>();
  games?.forEach((game: Game) => {
    const foundCate = game?.categories?.find(
      (cate: string) => cate === cateName,
    );
    if (foundCate) {
      newGames.push(game);
    }
  });
  return newGames;
};
