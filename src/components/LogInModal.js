import { useState } from "react";
import Modal from "./Modal";
import "./modal.css";
import "./loginmodal.css";

const logedInUser = [];

const LogInModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [logInPassword, setLogInPassword] = useState();
  const [successfulllogedIn, setSuccessfullLogedIn] = useState(true);

  const handleClick = () => {
    setSuccessfullLogedIn(true);
    setIsModalOpen(true);
    setIsLogInModalOpen(true);
  };
  return (
    <>
      <button className="modal-login-button" onClick={handleClick}>
        LOG IN
      </button>
      {isModalOpen && isLogInModalOpen && successfulllogedIn && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <div>
            <form className="sign-up-form">
              <h3>Log In</h3>
              <label htmlFor="username">
                Username:
                <br />
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password:
                <br />
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setLogInPassword(e.target.value)}
                />
              </label>
              <div className="sign-up">
                <button
                  type="submit"
                  onClick={() => {
                    logedInUser.push({
                      username: username,
                      logInPassword: logInPassword,
                    });
                    localStorage.removeItem("logedInUser");
                    localStorage.setItem(
                      "logedInUser",
                      JSON.stringify(logedInUser)
                    );
                    setSuccessfullLogedIn(false);
                    setIsLogInModalOpen(false);
                  }}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {isModalOpen && !successfulllogedIn && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <p>“Congratulations! You have successfully loged in!”</p>
          <button
            type="submit"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            OK
          </button>
        </Modal>
      )}
    </>
  );
};

export default LogInModal;
