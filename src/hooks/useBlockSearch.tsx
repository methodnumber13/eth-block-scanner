import { useCallback, useContext, useState } from 'react';
import { CutomInputProps } from '../components';
import { BlockContext } from '../context/block';
import { isNumber } from '../utils';

export const useBlockSearch = () => {
  const ONLY_NUMBERS = 'only numbers are allowed';

  const {
    state: { getBlock },
  } = useContext(BlockContext);

  const [inputValue, setInputValue] = useState('');
  const [isErrorMsg, setErrorMsg] = useState<{
    isVisible: boolean;
    message?: string;
  }>({ isVisible: false, message: '' });

  const handleChange = useCallback<CutomInputProps['onChange']>(
    ({ target: { value } }) => {
      if (isNumber(+value)) {
        setInputValue(String(+value));
        setErrorMsg({ isVisible: false });
      } else {
        setErrorMsg({ isVisible: true, message: ONLY_NUMBERS });
      }
    },
    []
  );

  const onSearch = useCallback<CutomInputProps['onSearch']>(
    (value) => {
      if (value && isNumber(+value)) {
        setInputValue(value);
        getBlock(value);
      }
    },
    [setInputValue, getBlock]
  );

  return { onSearch, handleChange, isErrorMsg, inputValue };
};
