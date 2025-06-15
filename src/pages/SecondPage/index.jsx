import styles from "./SecondPage.module.css";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SecondPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handleNameChange(e) {
    const nameUser = e.target.value;
    setName(nameUser);

    if (nameUser === "") {
      setErrors((prev) => ({ ...prev, name: "" }));
    } else if (nameUser.length < 3) {
      setErrors((prev) => ({
        ...prev,
        name: "O nome deve ter pelo menos 3 letras.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  }

  function handleEmailChange(e) {
    const emailUser = e.target.value;
    setEmail(emailUser);

    if (emailUser === "") {
      setErrors((prev) => ({ ...prev, email: "" }));
    } else if (!isEmailValid(emailUser)) {
      setErrors((prev) => ({ ...prev, email: "Email inválido!" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  }

  function handlePasswordChange(e) {
    const userPassword = e.target.value;
    setPassword(userPassword);

    if (userPassword === "") {
      setErrors((prev) => ({ ...prev, password: "" }));
    } else if (userPassword.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Senha deve conter 8 caracteres!",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  }

  function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.loginForm}>
        <div className={styles.userData}>
          <div className={styles.form}>
            <div className={styles.username}>
              <label htmlFor="username">Nome de usuário:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Seu nome..."
              />
              {errors.name && (
                <p className={styles.error_message}>{errors.name}</p>
              )}
            </div>

            <div className={styles.username}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="seu@gmail.com"
              />
              {errors.email && (
                <p className={styles.error_message}>{errors.email}</p>
              )}
            </div>

            <div className={styles.passwordWrapper}>
              <label htmlFor="senha">Senha:</label>
              <div className={styles.inputDiv}>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.passwordInput}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Sua senha..."
                />

                <span onClick={toggleShowPassword} className={styles.eyeIcon}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <p className={styles.error_message}>{errors.password}</p>
            </div>

            <div className={styles.goButton}>
              <button className={styles.goBtn}>Criar Conta!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
