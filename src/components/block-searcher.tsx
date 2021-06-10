import styled from '@emotion/styled';
import { ArrowButton } from './buttons';
import { CustomInput } from './input';
import { WithError } from './with-error';
import { useBlockSearch } from '../hooks';

export const SearcherWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-top: 1em;
`;

export const BlockSearcher = () => {
  const { isErrorMsg, inputValue, handleChange, onSearch } = useBlockSearch();

  return (
    <WithError {...isErrorMsg} type="error">
      <SearcherWrapper>
        <CustomInput
          key="custom-input"
          type="text"
          labelText="Block"
          name="blockNumber"
          placeholder="tap or paste number here"
          value={inputValue}
          onChange={handleChange}
          searchText="find"
          onSearch={onSearch}
        />
        <ArrowButton
          onClick={() => onSearch(String(+inputValue - 1))}
          iconSize={'m'}
          direction="left"
        />
        <ArrowButton
          onClick={() => onSearch(String(+inputValue + 1))}
          iconSize={'m'}
          direction="right"
        />
      </SearcherWrapper>
    </WithError>
  );
};
