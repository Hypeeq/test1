import React, { useState, useEffect } from "react";
import "../style/styles.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [username, setUsername] = useState("Free");


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    }
    else{
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername);
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".profile-dropdown-btn") &&
        !event.target.closest(".profile-dropdown-list")
      ) {
        setDropdownActive(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Small Business - Start Bootstrap Template</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <link href="css/styles.css" rel="stylesheet" />
        
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="#!">
            AutoLink
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Grades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Account
                </a>
              </li>
              <li className="nav-item">
                <div className="profile-dropdown">
                  <div
                    className="profile-dropdown-btn"
                    onClick={toggleDropdown}
                  >
                    <div className="profile-img">
                      <i className="fa-solid fa-circle"></i>
                    </div>
                    <span>
                      {username}
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                  <ul
                    className={`profile-dropdown-list ${
                      dropdownActive ? "active" : ""
                    }`}
                  >
                    <li className="profile-dropdown-list-item">
                      <a href="#">
                        <i className="fa-regular fa-user"></i>
                        Edit Profile
                      </a>
                    </li>
                    <hr />
                    <li className="profile-dropdown-list-item">
                      <a href="#" onClick={logout}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.educative.io/v2api/editorpage/6462443168989184/image/6429479353712640"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light"></h1>
            <p>
            Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it. 
            </p>
            {/* <a className="btn btn-primary" href="#!">
              Call to Action!
            </a> */}
          </div>
        </div>
        <div className="card text-white bg-secondary my-5 py-4 text-center">
          <div className="card-body">
            <p className="text-white m-0">Chapters</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Basics</h2>
                <p className="card-text">
                  You have decided to embark on learning how to program. That is
                  wonderful! Hopefully, it is not by compulsion, for programming
                  can be great!
                </p>
              </div>
              <div className="card-footer">
  <Link to="/card1" className="btn btn-primary btn-sm">
    Begin
  </Link>
</div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Decision Making Statements</h2>
                <p className="card-text">
                Imagine you are traveling on a major highway in the direction of the arrow, as depicted in Figure 3.1, and you reach a fork on the road. You would then have to choose which road to take next.
                </p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  Begin
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Recursion</h2>
                <p className="card-text">
                Recursion is an important tool in programming, and may be defined as a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem.
                </p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  Begin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </>
  );
};

export default Home;
