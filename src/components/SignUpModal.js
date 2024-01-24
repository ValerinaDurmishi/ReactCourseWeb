import { useState } from "react";
import Modal from "./Modal";
import userAvatar from "../images/userAvatar.png";
import "./modal.css";

const users = [];

const logedInUser = [];

const SignUpModal = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [username, setUsername] = useState("");
  const [logInPassword, setLogInPassword] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successfullSignIn, setSuccessfullSignIn] = useState(true);
  const [signedUpModal, setSignedUpModal] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    setSuccessfullSignIn(true);
    setSignedUpModal(true);
    setIsLogInModalOpen(false);
  };

  return (
    <>
      <button className="modal-button" onClick={handleClick}>
        <img className="user_avatar" src={userAvatar} alt="user avatar" />
      </button>
      {isModalOpen && signedUpModal && successfullSignIn && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <h3>Sign Up</h3>
          <form className="sign-up-form">
            <label htmlFor="username">
              Name:
              <br />
              <input
                type="text"
                itemID="username-sign-up"
                placeholder="Filan"
                name={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="username">
              Surname:
              <br />
              <input
                type="text"
                itemID="username-sign-up"
                placeholder="Fisteku"
                surname={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
            <label htmlFor="dateofbirth">
              Date of birth:
              <br />
              <input
                type="date"
                id="dateofbirth"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </label>
            <label htmlFor="email">
              Email:
              <br />
              <input
                type="text"
                id="email"
                placeholder="example@test.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password:
              <br />
              <input
                type="password"
                id="password"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="sign-up">
              <button
                type="submit"
                onClick={() => {
                  users.push({
                    name: name,
                    surname: surname,
                    dateOfBirth: dateOfBirth,
                    email: email,
                    password: password,
                  });
                  localStorage.removeItem("users");
                  localStorage.setItem("users", JSON.stringify(users));
                  setSignedUpModal(true);
                  setSuccessfullSignIn(false);
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </Modal>
      )}
      {isModalOpen && !successfullSignIn && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <div>
            <p>“Congratulations! You have successfully signed up!”</p>
            <button
              type="submit"
              onClick={() => {
                setSuccessfullSignIn(false);
                setIsLogInModalOpen(true);
              }}
            >
              OK
            </button>
          </div>
        </Modal>
      )}
      {isModalOpen && isLogInModalOpen && !successfullSignIn && (
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
                  placeholder="FilanFisteku"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password:
                <br />
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
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
                    localStorage.removeItem("logedInUsers");
                    localStorage.setItem(
                      "logedInUsers",
                      JSON.stringify(logedInUser)
                    );
                    setIsModalOpen(false);
                  }}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SignUpModal;
