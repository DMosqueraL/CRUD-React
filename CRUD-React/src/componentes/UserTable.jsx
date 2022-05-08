import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th className="flex-large">Nombre</th>
        <th className="flex-large">Apellido</th>
        <th className="flex-large">Sexo</th>
        <th className="flex-large">Ocupación</th>
        <th className="flex-large">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td className="flex-large">{user.name}</td>
            <td className="flex-large">{user.lastname}</td>
            <td className="flex-large">{user.sex}</td>
            <td className="flex-large">{user.job}</td>
            <td>
              <div
                className="flex-large"
                onClick={() => {
                  props.editRow(user);
                }}
              > 
                <FiEdit className="edit-icono" />
              </div>
              <div
                className="flex-large"
                onClick={() => props.deleteUser(user.id)}
              > 
                <RiDeleteBin6Line className="delete-icono" />
              </div>
              {/* <button
                  className="button muted-button"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Borrar
                </button> */}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay registros</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
