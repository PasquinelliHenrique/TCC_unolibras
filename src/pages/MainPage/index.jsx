import imgUrso from "../../assets/imgUrso.png";
import styles from  './MainPage.module.css';
import { useNavigate } from 'react-router-dom'

function MainPage() {


  const navigate = useNavigate()

  const irParaCadastroPage = () => {
    navigate('/cadastroPage')
  }

  return (
    <div className={styles.main_container}>
      <img src={imgUrso} className={styles.ursoImg} alt="urso" />
      <h1>unolibras</h1>
      <p>Aprenda libras de forma gratuita!</p>

      <div className={styles.btns}>
        <button type="button" className={styles.btn1} onClick={irParaCadastroPage}>Criar conta</button>
        <button type="button" className={styles.btn2}>Possuo conta</button>
      </div>
    </div>
  );
}

export default MainPage;
