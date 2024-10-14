import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import jpIMG from "../../assets/jp.svg";
import { LayoutComponents } from "../../components/LayoutComponents/index";
import api from "../../services/api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const response = await api.post("/user/login", { email, senha: password });
  
      const data = response.data;
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
  
        navigate("/dashboard");
      } else {
        setError(data.error || "Erro ao fazer login.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Erro no servidor. Tente novamente mais tarde.");
    }
  }

  return (
    <LayoutComponents>
      <form className="login-form" onSubmit={handleLogin}>
        <span className="login-form-title"> Bem vindo </span>

        <span className="login-form-title">
          <img src={jpIMG} alt="imagem logo" />
        </span>

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

        {error && <p style={{ color: "red" }}>{error}</p>} 
        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};