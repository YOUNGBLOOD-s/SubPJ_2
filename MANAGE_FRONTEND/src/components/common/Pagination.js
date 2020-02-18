import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PageItem = styled.div`
  border-radius: 3px;
  padding: 0.5rem 0.8rem;
  margin-right: 1rem;
  :last-child {
    margin-right: 0;
  }
  :hover {
    background-color: ${palette.grey[300]};
    transition-duration: 0.5s;
  }
  background-color: ${props => (props.active ? `${palette.grey[300]}` : '')};
`;

const Pagination = ({ lastPage, setPage, currentPage }) => {
  const [components, setComponents] = useState([]);

  const createPaging = () => {
    let comps = [];

    // TODO: 10개 이상 넘어갈때 줄여서 보여주기

    for (let i = 1; i <= lastPage; i++) {
      comps.push(
        <PageItem active={i === currentPage} onClick={() => setPage(i)} key={i}>
          {i}
        </PageItem>,
      );
    }
    setComponents(comps);
  };

  useEffect(() => {
    createPaging();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PageWrapper>{components.map(component => component)}</PageWrapper>;
};

export default Pagination;
