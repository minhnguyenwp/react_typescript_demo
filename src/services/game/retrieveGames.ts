import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';

import httpClient from 'utils/httpClient';
import { Game } from 'app/models/Game';

export const RETRIEVE_GAMES = '/front-end-test/games.php';

export type RetrieveGamesResponse = Game[];

export const retrieveGames = () =>
  httpClient.get<RetrieveGamesResponse>(RETRIEVE_GAMES);

export const useRetrieveGames = (
  params: {},
  opts?: UseQueryOptions<AxiosResponse<RetrieveGamesResponse>, AxiosError<any>>,
) =>
  useQuery<AxiosResponse<RetrieveGamesResponse>, AxiosError<any>>(
    [RETRIEVE_GAMES],
    () => retrieveGames(),
    opts,
  );
