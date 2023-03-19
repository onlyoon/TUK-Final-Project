import classes from "./BuyerItems.module.css";
import file_image from "../../../images/online_course_image_for_programming_language.png";

const BuyerItems = () => {
  return (
    <div>
      <img
        className={classes.file_image}
        src={file_image}
        alt="이미지를 올바르게 불러오지 못했습니다."
      />
      <img
        className={classes.file_image}
        src={file_image}
        alt="이미지를 올바르게 불러오지 못했습니다."
      />
    </div>
  );
};

export default BuyerItems;
