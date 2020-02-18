import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import component from '../../lib/material/component';

const AddProductLinkWrapper = styled.div``;

const AddProductLink = ({ children }) => {
  return (
    <AddProductLinkWrapper>
      <Link to="/add">
        <component.Button
          size="small"
          fullWidth
          color="secondary"
          variant="contained"
        >
          {children}
        </component.Button>
      </Link>
    </AddProductLinkWrapper>
  );
};

export default AddProductLink;
