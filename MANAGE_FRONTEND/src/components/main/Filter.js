import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import component from '../../lib/material/component';
import continentsArray from '../../lib/data/continentsArray';

const FilterWrapper = styled.div`
  border: 1px solid ${palette.grey[300]};
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 3px;
`;

const ContinentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterBtn = styled.div`
  border-radius: 1rem;
  color: white;
  background-color: ${props => props.color[600]};
  padding: 0.3rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  :last-child {
    margin-right: 0;
    ${palette.theme[300]}
  }
  :hover {
    background-color: ${props => props.color[800]};
    transition-duration: 0.5s;
  }

  @media (max-width: 905px) {
    margin-bottom: 0.5rem;
  }
`;

const Filter = ({ continents, setContinets, sort, setSort, setPage }) => {
  const onReset = () => {
    setPage(1);
    setSort('ASC');
    setContinets(null);
  };
  return (
    <FilterWrapper>
      <component.Grid container>
        <component.Grid item xs={12}>
          <ContinentsWrapper>
            <FilterBtn color={palette.grey} onClick={onReset}>
              전체보기
            </FilterBtn>
            <FilterBtn color={palette.teal} onClick={() => setSort('ASC')}>
              출발 빠른순
            </FilterBtn>
            <FilterBtn color={palette.teal} onClick={() => setSort('DESC')}>
              출발 늦는순
            </FilterBtn>
            {continentsArray.map((continent, idx) => (
              <FilterBtn
                color={palette.theme}
                onClick={() => setContinets(continent.value)}
                key={idx}
              >
                #{continent.label}
              </FilterBtn>
            ))}
          </ContinentsWrapper>
        </component.Grid>
      </component.Grid>
    </FilterWrapper>
  );
};

export default Filter;
