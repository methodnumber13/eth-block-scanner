import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useModal } from '../../hooks';
import {
  ModalProps,
  ModalPropsStateChangeProps,
} from '../../context/modal/types';
import { Transaction } from '../../context/block/types';
import { BasicComponentProps } from '../types';

const BodyCell = ({ children }: BasicComponentProps) => <td>{children}</td>;

const AdditionalInfoWrapper = styled.div`
  flex-direction: row;
  display: flex;
  gap: 10em;
  align-items: flex-start;
`;

const AdditionalWrapperInside = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const InternalText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 28rem;
  -webkit-line-clamp: 4;ModalPropsStateChangeProps
  -webkit-box-orient: horizontal;
`;

interface TableRowProps extends Omit<ModalProps, 'title' | 'body'> {
  setModal: (payload: ModalPropsStateChangeProps | ModalProps) => void;
  index: number;
  data: Transaction;
}
type RestAdditionalProps = Omit<Transaction, 'from' | 'hash' | 'to'>;

type PartRestAdditionalProps = Omit<
  RestAdditionalProps,
  'blockNumber' | 'blockHash' | 'r' | 's'
>;

const Tr = ({ data, index, show, setModal }: TableRowProps) => {
  const { from, to, hash, ...rest } = data;

  return (
    <tr
      style={{ cursor: 'pointer' }}
      onClick={() =>
        setModal({ show: !show, body: () => AdditionalInfo(rest) })
      }
    >
      {[from, to, hash].map((value, i) => (
        <BodyCell key={`table-td${index + i}`}>{value}</BodyCell>
      ))}
    </tr>
  );
};
const KeyComponent = ({
  i,
  rest,
}: {
  i: number;
  rest: PartRestAdditionalProps;
}) => <InternalText>{Object.keys(rest)[i]}</InternalText>;

const ValueComponent = ({ value }: { value: string }) => (
  <InternalText>{value}</InternalText>
);

const AdditionalInfoCallback = (props: PartRestAdditionalProps) => {
  return (
    <AdditionalInfoWrapper>
      {[KeyComponent, ValueComponent].map((Component, index) => (
        <AdditionalWrapperInside key={`callback${index}`}>
          {Object.values(props).map((value, i) => (
            <AdditionalWrapperInside key={`add-inside${i}`}>
              <Component i={i} value={value} rest={props} />
            </AdditionalWrapperInside>
          ))}
        </AdditionalWrapperInside>
      ))}
    </AdditionalInfoWrapper>
  );
};

const AdditionalInfo = (props: RestAdditionalProps) => {
  const { blockNumber, blockHash, r, s, ...rest } = props;
  return <AdditionalInfoCallback {...rest} />;
};

export const TBody = ({ transactions }: { transactions: Transaction[] }) => {
  const { show, setModalState } = useModal();

  useEffect(() => {
    setModalState({ title: 'Additional info' });
  }, [setModalState]);

  return (
    <tbody data-testid="tbody-test-id">
      {transactions.map((data, i) => (
        <Tr
          key={`table-tr${i}`}
          data={data}
          show={show}
          setModal={setModalState}
          index={i}
        />
      ))}
    </tbody>
  );
};
