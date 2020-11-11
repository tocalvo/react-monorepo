import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AutoCompleteProps {}

const StyledAutoComplete = styled.div`
  color: pink;
`;

export const AutoComplete = (props: AutoCompleteProps) => {
  return (
    <StyledAutoComplete>
      <h1>Welcome to autoComplete!</h1>
    </StyledAutoComplete>
  );
};

export default AutoComplete;
