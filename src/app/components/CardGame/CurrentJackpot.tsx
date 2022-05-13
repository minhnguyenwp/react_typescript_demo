import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { useRetrieveJackPots } from 'services/jackpots';
import { COLORS } from 'styles/global-colors';
import { getAmountJackPot } from 'helpers';

interface CurrentJackpotProps {
  gameId: string;
}

export const CurrentJackpot: React.FC<CurrentJackpotProps> = React.memo(
  props => {
    const { gameId } = props;
    const [amount, setAmount] = useState<number>(0);
    const { data: response } = useRetrieveJackPots(
      {},
      {
        cacheTime: 0,
        refetchOnWindowFocus: false,
        refetchInterval: 3000,
      },
    );
    const { data } = response || {};

    useEffect(() => {
      const currentAmount = getAmountJackPot(gameId, data) || 0;
      setAmount(prev => prev + currentAmount);
    }, [data, gameId]);

    return (
      <>
        {amount > 0 && (
          <Wrapper>
            <span className="amount-jackpot">${amount}</span>
          </Wrapper>
        )}
      </>
    );
  },
  (prevProps, nextProps) => prevProps.gameId === nextProps.gameId,
);

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);

  .amount-jackpot {
    color: ${COLORS.grey20};
    font-size: 11px;
    padding: 5px 10px;
    line-height: 1;
  }
`;
