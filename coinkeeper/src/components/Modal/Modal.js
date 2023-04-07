import { useNavigate } from "react-router-dom";
const Modal = ({ active, setActive }) => {
  let loginIn = JSON.parse(localStorage.getItem("loginIn"));
  let Navigate = useNavigate();
  const logout = () => {
    if (loginIn) {
      Navigate("/");
    }
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="table">
          <h4 className="text_modal">Email:</h4>
          <div className="inputs">
            <input type="text" value="ainur" className="email_input" />
          </div>
          <h4 className="text_modal">Password:</h4>
          <div className="inputs">
            <input
              type="password"
              value="qwerty"
              className={"password_input"}
            />
          </div>
          <button onClick={logout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
