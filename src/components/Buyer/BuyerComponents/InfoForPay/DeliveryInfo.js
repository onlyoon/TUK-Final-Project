import classes from "./DeliveryInfo.module.css";

const DeliveryInfo = () => {
  return (
    <div className={classes.deliveryinfo}>
      <div className={classes.title}>배송지 정보</div>
      <form>
        <div>
          수령인 : <input className={classes.d_receiver} placeholder="50자 이내로 입력하시오"/>
        </div>
        <div>
          배송지명 : <input className={classes.d_place} placeholder="직접 입력"/>
        </div>
        <div>
          연락처 : <input className={classes.d_number} placeholder="010-XXXX-XXXX"/>
        </div>
        <div>
          이메일 : <input className={classes.d_email} />
        </div>
        <div>
          배송지 주소 : <input className={classes.d_address} />
          <button>우편번호</button>
        </div>
        <div>
          <input className={classes.d_address2} />
        </div>
      </form>
    </div>
  );
};

export default DeliveryInfo;
