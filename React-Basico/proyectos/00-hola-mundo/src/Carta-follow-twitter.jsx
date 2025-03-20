import { useState } from 'react';

// export function CartaTwitter({ userName = "desconocido", children }) {
export function CartaTwitter({
  userName = 'desconocido', //Si no se pasa un userName se asigna el valor de desconocido
  children,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  //La constante tieen el valor isFollowing y la funcion que lo modifica setIsFollowing
  //El valor inicial es false
  const texto = isFollowing ? 'Siguiendo' : 'Seguir';
  const bontonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const accion = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar de usuarios"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={bontonClassName} onClick={accion}>
          <span className="tw-followCard-text">{texto}</span>
          <span className="tw-followCard-stopFollow">Deja de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
