import { RIBBON_NEW_VALUE, RIBBON_TOP_VALUE } from 'app/constants';
import { Game } from 'app/models/Game';

const isNewGame = (currentGame: Game): string | undefined =>
  currentGame.categories.find((category: string) => category === 'new');
const isTopGame = (currentGame: Game): string | undefined =>
  currentGame.categories.find((category: string) => category === 'top');

export const getRibbonByCate = (
  currentGame: Game,
  cateName: string | (string | null)[] | null,
): number | undefined => {
  const currentCate = currentGame.categories.find(
    (category: string) => category === cateName,
  );
  if (currentCate === 'new') return RIBBON_NEW_VALUE;
  if (currentCate === 'top') return RIBBON_TOP_VALUE;
  if (currentCate !== 'new' && currentCate !== 'top') {
    if (isNewGame(currentGame)) {
      return RIBBON_NEW_VALUE;
    }
    if (isTopGame(currentGame)) {
      return RIBBON_TOP_VALUE;
    }
    return undefined;
  }
};
