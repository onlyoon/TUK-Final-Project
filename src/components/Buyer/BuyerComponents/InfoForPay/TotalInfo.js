import classes from "./TotalInfo.module.css";

const TotalInfo = () => {
  return (
    <div className={classes.totalinfo}>
      <h1>총 결제금액: 30000원</h1>
      <button>결제하기</button>
    </div>
  );
};

export default TotalInfo;
