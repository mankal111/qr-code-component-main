export type QRCardProps = {
  qrImage: string;
  title: string;
  description: string;
};

const QRCard = ({ qrImage, title, description }: QRCardProps) => {
  return (
    <>
        <img src={qrImage} alt="QR Code" />
        <h1>{title}</h1>
        <p>{description}</p>
    </>
  );
};

export default QRCard;