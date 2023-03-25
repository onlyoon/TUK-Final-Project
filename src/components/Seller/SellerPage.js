import './SellerPage.css';
import SellerContainer from './SellerContainer';
import SellerFooter from './SellerFooter';
import SellerHeader from './SellerHeader';

const SellerPage = () => {
  return (
    <div className="s_wrap">
      <SellerHeader />
      <SellerContainer />
      <SellerFooter />
    </div>
  );
};

export default SellerPage;
