import classes from './Card.module.css';

const Card = () =>  {
    return (
        <div className={classes.card}>
        <div>신용카드</div>
                <input type="checkbox"/>

        <div></div>
        </div>
    );
};

export default Card;