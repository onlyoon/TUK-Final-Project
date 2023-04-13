import BuyerHeader from "./BuyerHeader/BuyerHeader";
import BuyerFooter from "./BuyerFooter/BuyerFooter";
import BuyerContainer2 from "./BuyerContainer/BuyerContainer2.js";
import classes from "./BuyerWrap.module.css";
import Modal from '../Modal';


const BuyerWrap2 = () => {
  return (
    <div className={classes.b_wrap}>
      <BuyerHeader />
      <BuyerContainer2 />
      <BuyerFooter />
      <Modal></Modal>
    </div>
  );
};

export default BuyerWrap2;
