import "./QRCard.css"

export type QRCardProps = {
  qrImage: string;
  title: string;
  description: string;
};

const QRCard = ({ qrImage, title, description }: QRCardProps) => {
  return (
    <div className="card">
        <img src={qrImage} alt="QR Code" />
        <div className="text">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    </div>
  );
};

export default QRCard;