import { useForm } from "react-hook-form";



const AddUserForm = (props) => {
  const {
    register,
    handleSubmit,    
    reset,
  } = useForm();

  const onSubmit = (data, e) => {      
    props.addUser(data);
    localStorage.setItem("newUsuario", JSON.stringify(data));
    console.log("Será esto " +localStorage.getItem(data));    
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        placeholder="Escriba el nombre"
        /**sentencia en desuso en React18, a continuación se muestra la manera actualizada
         * del atributo ref= ({...register
         * ref=*/
        // {...register({ required: { value: true, message: "Valor requerido" } })}
        {...register("name")}
        required
      />
      
      <label>Apellido</label>
      <input
        type="text"
        name="lastname"
        placeholder="Escriba el apellido"
        /**sentencia en desuso en React18, a continuación se muestra la manera actualizada
         * del atributo ref= ({...register
         * ref=*/
        // {...register({ required: { value: true, message: "Valor requerido" } })}
        {...register("lastname")}
        required
      />
      {/* <div>{errors?.lastname?.message}</div> */}
     
      <label>Sexo</label>
      <input
        type="text"
        name="sex"
        placeholder="Escriba el sexo"
        /**sentencia en desuso en React18, a continuación se muestra la manera actualizada
         * del atributo ref= ({...register
         * ref=*/
        // {...register({ required: { value: true, message: "Valor requerido" } })}
        {...register("sex")}
        required
      />
      
      <label>Ocupación</label>
      <input
        type="text"
        name="job"
        placeholder="Escriba la ocupación"
        /**sentencia en desuso en React18, a continuación se muestra la manera actualizada
         * del atributo ref= ({...register
         * ref=*/
        // {...register({required: {value: true, message: 'Valor requerido'}})}
        {...register("job")}
        required
      />
      
      <button id="boton-nuevo-registro" className="btn btn-primary" type="submit">Nuevo Registro</button>
    </form>
  );
};

export default AddUserForm;
