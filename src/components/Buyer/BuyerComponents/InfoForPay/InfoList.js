import BuyerInfo from "./BuyerInfo";
import DiscountInfo from "./DiscountInfo";
import RecieptInfo from "./RecieptInfo";
import TotalInfo from "./TotalInfo";

import classes from "./InfoList.module.css";

const InfoList = () => {
  return (
    <div className={classes.infoList}>
      <BuyerInfo />
      <RecieptInfo />
      <DiscountInfo />
      <TotalInfo />
    </div>
  );
};

export default InfoList;
