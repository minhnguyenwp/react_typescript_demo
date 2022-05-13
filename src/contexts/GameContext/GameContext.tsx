import * as React from 'react';
import { createContext, useContext, ReactNode } from 'react';
import { Game } from 'app/models/Game';
import { useRetrieveGames } from 'services/game';

interface GameContextProviderProps {
  children: ReactNode;
}
interface IGameContext {
  games: Game[];
  isFetching: boolean;
}

const GameContext = createContext<IGameContext>({
  games: [],
  isFetching: true,
});

export const GameProvider: React.FC<GameContextProviderProps> = ({
  children,
}: GameContextProviderProps) => {
  const { data, isFetching } = useRetrieveGames(
    {},
    {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <GameContext.Provider
      value={{
        games: data?.data || [],
        isFetching,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGames = () => useContext(GameContext);
