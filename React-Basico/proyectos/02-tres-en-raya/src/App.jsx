import { useState } from "react";

const TURNOS = {
  X: "x",
  O: "o",
};

const Cuadrado = ({ childern, updatetablero, index }) => {
  return <div className="cuadrado">{childern}</div>;
};
function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  console.log(tablero);
  return (
    <main className="tablero">
      <h1>Tres en raya</h1>
      <section className="juego">
        {tablero.map((casilla, index) => {
          return (
            <Cuadrado key={index} index={index}>
              {index}
            </Cuadrado>
          );
        })}
      </section>
    </main>
  );
}

export default App;
