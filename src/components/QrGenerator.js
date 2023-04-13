import { QRCodeSVG } from "qrcode.react";

const QrGenerator = (props) => {
  var data2 = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, Anytown USA",
    phone: "555-123-4567",
  };
  
  const dataString = JSON.stringify(data2);
  
  return (
    <QRCodeSVG
      value={dataString}
      size={128}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={false}
      imageSettings={{
        src: "https://file.notion.so/f/s/52602742-9a54-4c75-a419-d3ee8bc34cba/Untitled.jpeg?id=43242caa-e763-4aa0-9789-78fa2560a966&table=block&spaceId=6b58b093-bf24-405c-9aa1-6846dfb81bad&expirationTimestamp=1680858445211&signature=wxnsDCR1q3Bylr-Iuv0F9m0lWHzMd6jdYnvtAF7xA4s&downloadName=Untitled.jpeg",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  );
};

export default QrGenerator;
