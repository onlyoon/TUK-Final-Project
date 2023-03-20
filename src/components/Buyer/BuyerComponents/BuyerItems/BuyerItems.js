import classes from "./BuyerItems.module.css";
import AvailableItem from "./AvailableItem";
import GroupItemSelect from "./GroupItemSelect";

const BuyerItems = () => {
  return (
    <div className={classes.container}>
      <GroupItemSelect />
      <AvailableItem />
    </div>
  );
};

export default BuyerItems;
