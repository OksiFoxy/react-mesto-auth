// InfoTooltip (попап, который показывает сообщение об успешной регистрации или же возникшей
// ошибке. Управление им происходит через пропсы из стейта компонента App)

  export default function InfoTooltip({popupStatus, isOpen, onClose}) {
  return (
    <section
    className={`popup popup_type_infoTooltip ${isOpen && 'popup_opened'}`}>
      <figure className="popup__container">
        <button
        onClick={onClose}
        className="popup__close-button"
        type="button"></button>
        <img
        src={popupStatus.image}
        alt={`Информационное сообщение: ${popupStatus.message}`}
        className="popup__icon" />
        <figcaption className="popup__icon-caption">{popupStatus.message}</figcaption>
      </figure>
    </section>
  );
};
