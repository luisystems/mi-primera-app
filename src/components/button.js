import React from "react";

/**
 * TIPO DE COMPONENTE
 * - Presentacion
 * - Statefull
 */

export function Button({ value, onClicked }) {
  const handleClick = () => {
    console.log( onClicked );
    if(onClicked === "Hello Luis Angello") console.log( "Hello" );
    if (typeof onClicked === "function") {
      onClicked(); // en JS es importante el orden de los eventos.
      console.log('if');
      // onClicked();
    }
    else{
      console.log('else');
    }
    console.log('normal');
  };

  return <button onClick={handleClick}>{value}</button>;
  // return <button onClick={onClicked}>{value}</button>;
  //   return <button>Mi primer button</button>;
}
