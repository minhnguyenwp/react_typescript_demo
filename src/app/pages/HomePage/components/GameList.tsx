import * as React from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router';
import styled from 'styled-components/macro';

import { Game } from 'app/models/Game';
import { useGames } from 'contexts';
import { filterByCateName, filterByCateOther } from 'helpers';

// Components
import { CardGame, CardGamePlaceholder } from 'app/components/CardGame';

export const GameList: React.FC = React.memo(() => {
  const location = useLocation();
  const { games, isFetching } = useGames();
  const query = qs.parse(location.search);
  const { categories } = query || {};
  const currentCate = categories;

  let gameList: Game[] = [];

  if (currentCate !== 'other') {
    gameList = filterByCateName(games, categories);
  } else {
    gameList = filterByCateOther(games);
  }

  if (!Boolean(categories)) {
    gameList = games;
  }

  return (
    <Container className="container">
      {isFetching ? (
        <CardGamePlaceholder />
      ) : (
        <div className="row">
          {gameList?.map((game: Game, index: number) => (
            <CardGame key={index} game={game} />
          ))}
          {!gameList?.length && (
            <div className="pure-u-1-1">
              <h4>No game found</h4>
            </div>
          )}
        </div>
      )}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
