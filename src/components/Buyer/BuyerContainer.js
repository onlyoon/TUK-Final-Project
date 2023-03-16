import classes from './BuyerContainer.module.css';
import BuyerCategory from './BuyerComponents/BuyerCategory';

const BuyerContainer = () => {
  return (
    <div className={classes.b_contents}>
      <BuyerCategory/>
    </div>
  );
};

export default BuyerContainer;
