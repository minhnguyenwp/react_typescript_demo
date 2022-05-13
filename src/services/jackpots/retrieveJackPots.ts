import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';

import httpClient from 'utils/httpClient';
import { Jackpot } from 'app/models/Jackpot';

export const RETRIEVE_JACK_POTS = '/front-end-test/jackpots.php';

export type RetrieveJackPotsResponse = Jackpot[];

export const retrieveJackPots = () =>
  httpClient.get<RetrieveJackPotsResponse>(RETRIEVE_JACK_POTS);

export const useRetrieveJackPots = (
  params: {},
  opts?: UseQueryOptions<
    AxiosResponse<RetrieveJackPotsResponse>,
    AxiosError<any>
  >,
) =>
  useQuery<AxiosResponse<RetrieveJackPotsResponse>, AxiosError<any>>(
    [RETRIEVE_JACK_POTS],
    () => retrieveJackPots(),
    opts,
  );
