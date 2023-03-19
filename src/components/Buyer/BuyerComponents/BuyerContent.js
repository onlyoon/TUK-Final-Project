import BuyerItems from "./BuyerItems";
import classes from "./BuyerContent.module.css";

const BuyerContent = () => {
  return (
    <div className={classes.b_buyer}>
      <BuyerItems />
      <div>Buyer 2</div>
    </div>
  );
};

export default BuyerContent;
