import { useState } from "react";
import UserTable from "../componentes/UserTable";
import AddUserForm from "../componentes/AddUserForm";
import EditYo from "../componentes/EditYo";
import { v4 as uuidv4 } from "uuid";
import "../estilosCSS/Tabla.css";
import Modal from "./Modal";
import useModal from "./hooks/useModal";

export function Tabla() {
  const usersData = [
    {
      id: uuidv4(),
      name: "Tania",
      lastname: "López",
      sex: "Femenino",
      job: "Docente",
    },
    {
      id: uuidv4(),
      name: "Cristian",
      lastname: "Echeverri",
      sex: "Masculino",
      job: "Ingeniero",
    },
    {
      id: uuidv4(),
      name: "Guillermo",
      lastname: "Suárez",
      sex: "Masculino",
      job: "Médico",
    },
  ];

  const [users, setUsers] = useState(usersData);

  // console.log(users.name);

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  // Eliminar usuario
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Editar usuario
  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    name: "",
    lastname: "",
    sex: "",
    job: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      sex: user.sex,
      job: user.job,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div className="container">
      <div>
        <div className="flex-large">
          {/* <Modal isOpen={isOpen} closeModal={closeModal}> */}
          {editing ? (
            <div>
              <h2>Editar Registro</h2>
              <EditYo
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            //Aquí se agregan usuarios
            <div>
              {/* Muestra la ventana emergente para hacer el ingreso de un nuevo registro */}
              <Modal isOpen={isOpen} closeModal={closeModal}>
                <AddUserForm addUser={addUser} />
              </Modal>
            </div>
          )}
        </div>
        {/* Aquí se ven los usuarios */}
        <div className="flex-large">
          <h2>Ver Registros</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
        {/* </Modal> */}
        <button onClick={openModal}>Agregar Registro</button>
      </div>
    </div>
  );
}
export default Tabla;
