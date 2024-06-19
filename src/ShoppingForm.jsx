import React, { useState } from 'react';

function ShoppingForm(props) {
  const [newElement, setNewElement] = useState({
    name: "",
    category: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(newElement);
    // Vaciar el estado "newElement"
  };

  // función que modifica el estado "newElement" al ingresar valores en el formulario

  return (
    <form onSubmit={handleSubmit}>
      <input name="element-name" type="text" />
      <select name="element-category">
        <option value="lacteo">Lacteo</option>
        <option value="despensa">Despensa</option>
        <option value="higiene">Higiene</option>
        <option value="bebida">Bebida</option>
        <option value="limpieza">Limpieza</option>
        <option value="otro">Otro</option>
      </select>

      <button type="submit">Agregar</button>
    </form>
  );
}

export default ShoppingForm;
