import { useState } from 'react';
import './App.css';
import { CartaTwitter } from './Carta-follow-twitter.jsx';

const usuarios = [
  {
    name: 'Bryan Roberto Quispe',
    userName: 'Bryan406',
    isFollowing: true,
  },
  {
    name: 'Miguel Angel Duran',
    userName: 'midudev',
    isFollowing: false,
  },
  {
    name: 'Elian Mena',
    userName: 'elian18xdD',
    isFollowing: true,
  },
];

export function App() {
  //Estoy usando children para reflejar el name
  return (
    <section className="App">
      {usuarios.map(({ name, userName, isFollowing }) => {
        return (
          <CartaTwitter
            key={userName} //Se debe poner un identificador unico para saber que elemento se esta refiriendo
            userName={userName}
            initialIsFollowing={isFollowing}
            children={name}
          />
        );
      })}
    </section>
  );
}
