import PaymentMethod from './PaymentMethod';
import classes from './PaymentMethods.module.css';
import Blockchain from './Blockchain';
import Card from './Card';
import EasyPayment from './EasyPayment';

const PaymentMethods = () => {
    return (
        <div className={classes.p_methods}>
            <div className={classes.title}>결제수단</div>
            <Card />
            <EasyPayment />
            <Blockchain />
        </div>
    );
};

export default PaymentMethods;