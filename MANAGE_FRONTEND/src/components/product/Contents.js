import React from 'react';
import component from '../../lib/material/component';
import ContentItem from './ContentItem';

const Contents = ({ contents, user }) => {
  return (
    <component.Grid container spacing={1}>
      {contents.map(content => (
        <component.Grid item xs={12} key={content.idx}>
          <ContentItem content={content} user={user} />
        </component.Grid>
      ))}
    </component.Grid>
  );
};

export default Contents;