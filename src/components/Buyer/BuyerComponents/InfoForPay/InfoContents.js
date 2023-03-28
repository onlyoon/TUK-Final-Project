import classes from "./InfoContents.module.css";
import InfoList from "./InfoList";
import DeliveryInfo from "./DeliveryInfo";
const InfoContents = () => {
  return (
    <div className={classes.info_contents}>
      <div>
        <DeliveryInfo />
      </div>
      <InfoList />
    </div>
  );
};

export default InfoContents;
