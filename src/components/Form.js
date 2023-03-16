import './Form.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../App';
import ReactSwitch from 'react-switch';

const Form = () => {
  const { service, setService } = useContext(ServiceContext);

  return (
    <div className="FirstPage">
      <div id={service}>
        <div className="main">
          <p className="sign" align="center">
            {service === 'seller' ? '판매자 관리 모드' : '구매자 테스트 모드 '}
          </p>
          <Link to={`/${service}`}>
            <button className="start">Enter</button>
          </Link>
          <div className="switch">
            <br />
            <ReactSwitch
              id="mode"
              onChange={() =>
                setService(service === 'seller' ? 'buyer' : 'seller')
              }
              checked={service === 'buyer'}
              offColor="#F7A701"
              onColor="#014557"
              uncheckedIcon
              checkedIcon
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
