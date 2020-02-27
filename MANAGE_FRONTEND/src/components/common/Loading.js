import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Text = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

const LoadingWrapper = styled.div`
  text-align: center;
`;

const Loading = ({ children }) => {
  return (
    <LoadingWrapper>
      <CircularProgress color="secondary" />
      {children && <Text>{children}</Text>}
    </LoadingWrapper>
  );
};

export default Loading;
