import * as React from 'react';
import { Helmet } from 'react-helmet-async';

// Components
import { NavBar } from 'app/components/NavBar';
import { GameList } from './components/GameList';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Game list" />
      </Helmet>
      <NavBar />
      <div className="pt-60">
        <GameList />
      </div>
    </>
  );
}
