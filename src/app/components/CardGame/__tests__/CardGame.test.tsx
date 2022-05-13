import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { render } from '@testing-library/react';

import CardGame from '../CardGame';
import { Game } from 'app/models/Game';

const renderer = createRenderer();

const game: Game = {
  categories: ['top', 'slots', 'new'],
  id: 'Test',
  image: '//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg',
  name: 'Test Game',
};

describe('CardGame', () => {
  renderer.render(<CardGame game={game} />);
  const renderedOutput = renderer.getRenderOutput();

  it('Should render the correct snapshot', () => {
    expect(renderedOutput).toMatchSnapshot();
  });

  it('Should render game name', () => {
    const gameTag = render(<CardGame game={game} />);
    expect(gameTag.container.querySelector('p')?.innerHTML).toBe(game.name);
  });
});
