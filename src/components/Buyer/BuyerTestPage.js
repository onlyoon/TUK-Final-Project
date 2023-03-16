import classes from './BuyerTestPage.module.css';
import BuyerHeader from './BuyerHeader';
import BuyerContainer from './BuyerContainer';
import BuyerFooter from './BuyerFooter';

const BuyerPage = () => {
  return (
    <div className={classes.b_wrap}>
      <BuyerHeader />
      <BuyerContainer />
      <BuyerFooter />
    </div>
  );
};

export default BuyerPage;
