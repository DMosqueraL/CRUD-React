import { useForm } from "react-hook-form";

const EditYo = (props) => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: props.currentUser
  });
  setValue("id", props.currentUser.id)
  setValue("name", props.currentUser.name);
  setValue("lastname", props.currentUser.lastname);
  setValue("sex", props.currentUser.sex);
  setValue("job", props.currentUser.job);

  const onSubmit = (data, e) => {    
    data.id = props.currentUser.id;
    console.log(data);
    props.updateUser(data.id, data);
    localStorage.setItem("editUsuario", JSON.stringify(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        // ref={register({
        //   required: { value: true, message: "Valor requerido" },
        // })}
        {...register("name")}
        required
      />
      
      <label>Apellido</label>
      <input
        type="text"
        name="lastname"
        // ref={register({
        //   required: { value: true, message: "Valor requerido" },
        // })}
        {...register("lastname")}
        required
      />
      
      <label>Sexo</label>
      <input
        type="text"
        name="sex"
        // ref={register({
        //   required: { value: true, message: "Valor requerido" },
        // })}
        {...register("sex")}
        required
      />
      
      <label>Ocupación</label>
      <input
        type="text"
        name="job"
        // ref={register({
        //   required: { value: true, message: "Valor requerido" },
        // })}
        {...register("job")}
        required
      />
      
      <button type="submit">Editar</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
      
    </form>
  );
};

export default EditYo;
