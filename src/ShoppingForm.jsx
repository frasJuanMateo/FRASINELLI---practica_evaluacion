import React, { useState } from 'react';

function ShoppingForm(props) {
  const [newElement, setNewElement] = useState({
    // modificar aquí para administrar la información del formulario
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(newElement);
    // Vaciar el estado "newElement"
  };

  // función que modifica el estado "newElement" al ingresar valores en el formulario

  return (
    <form onSubmit={handleSubmit}>
      {/* input para colocar el nombre del item */}
      {/* input para colocar la categoría del producto */}
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ShoppingForm;
