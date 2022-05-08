import { useState, useEffect } from "react";


const EditUserForm = (props) => {
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });    
  };

  return (
    <form
      className="fomulario"
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Escriba el nombre"
        onChange={handleInputChange}
      />
      <label>Apellido</label>
      <input
        type="text"
        name="lastname"
        value={user.lastname}
        onChange={handleInputChange}
      />
      <label>Sexo</label>
      <input
        type="text"
        name="sex"
        value={user.sex}
        onChange={handleInputChange}
      />
      <label>Ocupación</label>
      <input
        type="text"
        name="job"
        value={user.job}
        onChange={handleInputChange}
      />
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  );
};

export default EditUserForm;
