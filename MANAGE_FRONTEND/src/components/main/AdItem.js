import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '1rem',
  },
});

const AdItem = ({ ad }) => {
  // TODO: image 경로가 완료되면 교체합시다.
  const { name, speech, price, en_name, idx: id, image } = ad;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/detail/${id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://images.unsplash.com/photo-1506760610100-1af6025cf0c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
          />
          <CardContent>
            <div>
              {name} {en_name}
            </div>
            <div>{speech}</div>
            <div>{price}원</div>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default AdItem;

// <Link to={`/detail/${id}`}>
//     <AdCard>
//       <StyledImg
//         src="https://images.unsplash.com/photo-1506760610100-1af6025cf0c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
//         alt="ad-image"
//       />
//       <TextWrapper>
//         <h1>
//           {name}({en_name})
//         </h1>
//         <div>{price}원</div>
//         <h3>{speech}</h3>
//       </TextWrapper>
//     </AdCard>
// </Link>
