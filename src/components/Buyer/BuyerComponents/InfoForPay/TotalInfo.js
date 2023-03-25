import classes from "./TotalInfo.module.css";

const TotalInfo = () => {
  return (
    <div className={classes.totalinfo}>
      <div className={classes.totalprice}>
        <h1>총 결제금액:</h1>
        <h1>30000원</h1>
      </div>
      <button className={classes.button}>결제하기</button>
    </div>
  );
};

export default TotalInfo;
