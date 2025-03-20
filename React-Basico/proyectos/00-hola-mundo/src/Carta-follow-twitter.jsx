import { useState } from "react";

// export function CartaTwitter({ userName = "desconocido", children }) {
export function CartaTwitter({ userName = "desconocido", children }) {
  const [isFollowing, setIsFollowing] = useState(false);
  //La constante tieen el valor isFollowing y la funcion que lo modifica setIsFollowing
  //El valor inicial es false
  const texto = isFollowing ? "Siguiendo" : "Seguir";
  const bontonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const accion = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar de bryan406"
          src={"https://unavatar.io/${userName}"}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={bontonClassName} onClick={accion}>
          {texto}
        </button>
      </aside>
    </article>
  );
}
