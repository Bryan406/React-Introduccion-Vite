import "./App.css";
import { CartaTwitter } from "./Carta-follow-twitter.jsx";

export function App() {
  //Estoy usando children para reflejar el name
  return (
    <section className="App">
      <CartaTwitter isFollowing={false} userName="Bryan406">
        Bryan Roberto Quispe
      </CartaTwitter>

      <CartaTwitter isFollowing userName="midudev">
        Miguel Angel Duran
      </CartaTwitter>
    </section>
  );
}
