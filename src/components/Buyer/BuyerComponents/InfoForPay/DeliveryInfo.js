import classes from "./DeliveryInfo.module.css";

const DeliveryInfo = () => {
  return (
    <div className={classes.deliveryinfo}>
      <div className={classes.title}>배송지 정보</div>
      <div>수령인</div>
      <div>배송지명</div>
      <div>연락처</div>
      <div>이메일</div>
      <div>배송지 주소</div>
    </div>
  );
};

export default DeliveryInfo;
