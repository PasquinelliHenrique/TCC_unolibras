import imgUrso from "../assets/imgUrso.png";
import './MainPage.css';

function MainPage() {
  return (
    <div className="container">
      <img src={imgUrso} className="ursoImg" alt="urso" />
      <h1>unolibras</h1>
      <p>Aprenda libras de forma gratuita!</p>

      <div className="btns">
        <button type="button" className="btn1">Cadastre-se</button>
        <button type="button" className="btn2">Possuo conta</button>
      </div>
    </div>
  );
}

export default MainPage;
