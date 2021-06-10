import styled from '@emotion/styled';
import { Table, BlockSearcher, Spinner } from '../../components';
import { useBlock } from '../../hooks';
import { BlockInfoProps } from '../../context/block/types';

const Wrapper = styled.div`
  width: 1165px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: inherit;
`;
const InfoWrapper = styled.div<{ isNumber?: boolean }>`
  display: inline-flex;
  gap: ${({ isNumber }) => (isNumber ? '1.9em;' : '3.5em;')} 
  margin: 1em 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const InfoBlock = ({ hash, number, transactions }: BlockInfoProps) => {
  return (
    <>
      {hash && (
        <InfoWrapper>
          <span>{'Hash'}</span>
          <span>{hash}</span>
        </InfoWrapper>
      )}
      {number && (
        <InfoWrapper isNumber={!!number}>
          <span>{'Number'}</span>
          <span>{number}</span>
        </InfoWrapper>
      )}
      {transactions?.length && <Table />}
    </>
  );
};

export const Info = () => {
  const { hash, number, transactions, isLoading } = useBlock();

  const renderInfo = () => {
    if (isLoading) return <Spinner />;
    return (
      <InfoBlock hash={hash} number={number} transactions={transactions} />
    );
  };

  return (
    <Wrapper>
      <BlockSearcher />
      {renderInfo()}
    </Wrapper>
  );
};
