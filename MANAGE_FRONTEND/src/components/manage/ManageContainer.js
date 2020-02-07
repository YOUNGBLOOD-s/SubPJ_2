import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chart from './Chart';
import Grade from './gradePurchase/Grade';
import ProductManage from './productManage/ProductManage';
import MyPage from './MyPage/MyPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tab: {
    fontSize: '0.9em',
    fontWeight: 'bolder',
  },
}));

const ManageContainer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.tab} label="메인" {...a11yProps(0)} />
          <Tab className={classes.tab} label="상품 구매" {...a11yProps(1)} />
          <Tab className={classes.tab} label="상품 관리" {...a11yProps(2)} />
          <Tab className={classes.tab} label="내 정보" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Chart />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grade />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ProductManage />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <MyPage />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default ManageContainer;
