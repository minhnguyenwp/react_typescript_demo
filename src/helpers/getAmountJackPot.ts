import { Jackpot } from 'app/models/Jackpot';

export const getAmountJackPot = (
  gameId: string,
  jackpots: Array<Jackpot> | undefined,
): number => {
  const currentJackpot = jackpots?.find(jackpot => jackpot.game === gameId);

  return currentJackpot?.amount || 0;
};
