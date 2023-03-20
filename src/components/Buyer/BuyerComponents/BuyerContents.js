import BuyerItems from "./BuyerItems/BuyerItems";
import classes from "./BuyerContents.module.css";

const BuyerContents = () => {
  return (
    <div className={classes.b_buyer}>
      <BuyerItems />
      <div>Buyer 2</div>
    </div>
  );
};

export default BuyerContents;
