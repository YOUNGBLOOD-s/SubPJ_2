import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';

const GradeImgWrapper = styled.div`
  text-align: center;
`;

const GradeTitle = styled.div`
  font-size: 2rem;
  margin-top: 2rem;
`;

const GradeContentWrapper = styled.div`
  margin-left: 5rem;
`;

const GradeContent = styled.div`
  font-size: 1rem;
`;

const GradePrice = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '1rem',
    textAlign: 'center',
  },
  hr: {
    borderColor: palette.teal[50],
    margin: '2rem',
  },
});
const GradeCard = ({ image, title, url, price, number }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <GradeImgWrapper>
            <img src={image} />
          </GradeImgWrapper>
          <GradeTitle>{title}</GradeTitle>
          <GradePrice>&#8361; {price}</GradePrice>
          <List>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
          </List>
          <GradeContentWrapper></GradeContentWrapper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GradeCard;
