import classes from "./BuyerContainer.module.css";
import BuyerCategory from "./BuyerComponents/BuyerCategory";
import BuyerContent from "./BuyerComponents/BuyerContent";

const BuyerContainer = () => {
  return (
    <div className={classes.b_contents}>
      <BuyerCategory />
      <BuyerContent />
    </div>
  );
};

export default BuyerContainer;
