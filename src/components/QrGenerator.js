import { QRCodeSVG } from "qrcode.react";

const QrGenerator = (props) => {
  let time = new Date();
  const data = {
    Name: "kimchi",
    Price: "5000",
    Wallet: "metamask",
    Coin: "ETH",
    WalletKey: "******",
    PaymentTime: time.toLocaleString(),
  };

  var data2 = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, Anytown USA",
    phone: "555-123-4567",
  };

  const dataString = JSON.stringify(data);

  return (
    <QRCodeSVG
      value={dataString}
      size={128}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={false}
      // imageSettings={{
      //   src: "../images/Group 71.png",
      //   x: undefined,
      //   y: undefined,
      //   height: 34,
      //   width: 34,
      //   excavate: true,
      // }}
    />
  );
};

export default QrGenerator;
