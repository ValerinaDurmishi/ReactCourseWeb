import { useState } from "react";
import "./hamburgermenu.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import hamburgermenu from "../images/hamburger-menu-logo.png";
import userAvatar from "../images/userAvatar.png";
import Modal from "./Modal";
import "./modal.css";
const users = [];
const logedInUser = [];
const HamburgerMenu = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successfullSignIn, setSuccessfullSignIn] = useState(true);
  const [signedUpModal, setSignedUpModal] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [username, setUsername] = useState("");
  const [logInPassword, setLogInPassword] = useState();
  const [successfulllogedIn, setSuccessfullLogedIn] = useState(true);

  const handleClick = () => {
    setIsModalOpen(true);
    setSuccessfullSignIn(true);
    setSignedUpModal(true);
  };

  const handleLogIn = () => {
    setIsModalOpen(true);
    setSignedUpModal(false);
    setSuccessfullLogedIn(true);
    setIsLogInModalOpen(true);
  };
  const updateMenu = () => {
    if (!isMenuOpened) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}>
            <img
              className="hamburger-icon"
              src={hamburgermenu}
              alt="hamburger menu logo"
            />
          </div>
        </div>
      </nav>
      <div className={menu_class}>
        <nav>
          <ul className="hamburger_menu_links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">
                <img
                  className="hmb_user"
                  src={userAvatar}
                  alt="user avatar"
                  onClick={handleClick}
                />
                {isModalOpen && signedUpModal && successfullSignIn && (
                  <Modal setIsModalOpen={setIsModalOpen}>
                    <h3>Sign Up</h3>
                    <form className="sign-up-form">
                      <label htmlFor="username">
                        Name:
                        <br />
                        <input
                          type="text"
                          id="username"
                          placeholder="Filan"
                          onChange={(evt) => setName(evt.target.value)}
                        />
                      </label>
                      <label htmlFor="username">
                        Surname:
                        <br />
                        <input
                          type="text"
                          id="username"
                          placeholder="Fisteku"
                          onChange={(evt) => setSurname(evt.target.value)}
                        />
                      </label>
                      <label htmlFor="dateofbirth">
                        Date of birth:
                        <br />
                        <input
                          type="date"
                          id="dateofbirth"
                          onChange={(evt) => setDateOfBirth(evt.target.value)}
                        />
                      </label>
                      <label htmlFor="email">
                        Email:
                        <br />
                        <input
                          type="text"
                          id="email"
                          placeholder="example@test.com"
                          onChange={(evt) => setEmail(evt.target.value)}
                        />
                      </label>
                      <label htmlFor="password">
                        Password:
                        <br />
                        <input
                          type="password"
                          id="password"
                          placeholder="********"
                          onChange={(evt) => setPassword(evt.target.value)}
                        />
                      </label>
                      <div className="sign-up">
                        <button
                          onClick={() => {
                            setSignedUpModal(true);
                            setSuccessfullSignIn(false);
                            users.push({
                              name: name,
                              surname: surname,
                              dateOfBirth: dateOfBirth,
                              email: email,
                              password: password,
                            });
                            localStorage.removeItem("users");
                            localStorage.setItem(
                              "users",
                              JSON.stringify(users)
                            );
                            setSignedUpModal(true);
                            setSuccessfullSignIn(false);
                          }}
                          className="hamburger-menu-buttons"
                        >
                          sign
                        </button>
                      </div>
                    </form>
                  </Modal>
                )}
                {isModalOpen && !successfullSignIn && (
                  <Modal setIsModalOpen={setIsModalOpen}>
                    <div>
                      <p className="succesfully-signup-text">
                        “Congratulations! You have successfully signed up!”
                      </p>
                      <button
                        onClick={() => {
                          setSuccessfullSignIn(false);
                          setIsLogInModalOpen(true);
                        }}
                        className="hamburger-menu-buttons"
                      >
                        OK
                      </button>
                    </div>
                  </Modal>
                )}
                {isModalOpen && !successfullSignIn && (
                  <Modal setIsModalOpen={setIsModalOpen}>
                    <div>
                      <p className="succesfully-signup-text">
                        “Congratulations! You have successfully signed up!”
                      </p>
                      <button
                        onClick={() => {
                          setSuccessfullSignIn(false);
                          setIsLogInModalOpen(true);
                        }}
                        className="hamburger-menu-buttons"
                      >
                        OK
                      </button>
                    </div>
                  </Modal>
                )}
              </Link>
            </li>
            <button className="modal-login-button" onClick={handleLogIn}>
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
                          setSuccessfullLogedIn(true);
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
                    setSuccessfullLogedIn(false);
                  }}
                >
                  OK
                </button>
              </Modal>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
