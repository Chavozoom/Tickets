import React, {useState} from "react";
import "./styles/Login.css";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isValid, setIsValid] = useState(true);

  const onSubmit = (data) => {
    console.log(data.email);
    /*if(){
      setIsValid(false);
    }*/
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="mx-auto">
      <div class="sm-3">
        <label for="exampleInputEmail1" class="mt-4 form-label fs-4">
          Email
        </label>
        <input
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
        />
        {errors.email?.type === "required" && (
          <p role="alert">Email invalido</p>
        )}
      </div>

      <div class="sm-3">
        <label for="exampleInputPassword1" class="mt-2 form-label fs-4">
          Senha
        </label>
        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          class="form-control"
        />
      </div>

      <div class="sm-3 form-check mt-2">
        <input {...register("checkbox")} type="checkbox" class=" form-check-input check" />
        <label class="form-check-label fs-6" for="exampleCheck1">
          Mantenha me conectado
        </label>
      </div>

      <button type="submit" class="mt-1 btn btn-primary">
        Login
      </button>
      {!isValid && <h3 className="error">Email ou senha invalido</h3>} 
    </form>
  );
}

export default Login;
