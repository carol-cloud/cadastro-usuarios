import { Link, useNavigate  } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import jpIMG from '../../assets/jp.svg'
import api from "../../services/api";


export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      nome_usuario: name,
      email: email,
      senha: password,
    };

    try {
      const response = await api.post("/user/cadastro", user); // Usando o service `api`

      if (response.status === 201) {
        // Redireciona para a página de login se o cadastro for bem-sucedido
        navigate("/login");
      } else {
        setErrorMessage(response.data.error || "Erro no cadastro.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Erro de rede. Tente novamente.");
    }
  };

  return (
    <LayoutComponents >
      <form className="login-form" onSubmit={handleSubmit}>
        <span className="login-form-title"> Criar Conta </span>

        <span className="login-form-title">
          <img src={jpIMG} alt="logo" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Criar conta</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}