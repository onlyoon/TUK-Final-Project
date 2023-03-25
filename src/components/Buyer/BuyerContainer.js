import classes from "./BuyerContainer.module.css";
import BuyerCategory from "./BuyerComponents/BuyerCategory/BuyerCategory";
import BuyerContents from "./BuyerComponents/BuyerContents";

const BuyerContainer = () => {
  return (
    <div className={classes.b_container}>
      <BuyerCategory />
      <BuyerContents />
    </div>
  );
};

export default BuyerContainer;
