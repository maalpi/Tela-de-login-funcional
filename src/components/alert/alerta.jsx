import './alerta.css';

const Alerta = ({ type, message, onClose }) => {
  return (
    <>
    <div className="overlay" onClick={onClose}></div>
        <div className={`custom-alert ${type}`}>
            <p>{message}</p>
            <button className="close-btn" onClick={onClose}>
                Fechar
            </button>
    </div>
  </>

  );
};

export default Alerta;
