import BuyerHeader from "./BuyerHeader";
import BuyerContainer from "./BuyerContainer";
import BuyerFooter from "./BuyerFooter";
import classes from "./BuyerWrap.module.css";

const BuyerWrap = () => {
  return (
    <div className={classes.b_wrap}>
      <BuyerHeader />
      <BuyerContainer />
      <BuyerFooter />
    </div>
  );
};

export default BuyerWrap;
