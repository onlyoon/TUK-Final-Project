import BuyerItems from "./BuyerItems/BuyerItems";
import classes from "./BuyerContents.module.css";
import InfoList from './InfoForPay/InfoList';

const BuyerContents = () => {
  return (
    <div className={classes.b_buyer}>
      <BuyerItems />
      <InfoList />
    </div>
  );
};

export default BuyerContents;
