import React, { useState } from "react";
import { useEffect } from "react";
import { getAllUsers, likeUser, dislikeUser } from "../api/services";
import { Toast } from "../helper/Toast";
import Footer from "./Footer";
import "../styles/home.scss";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (page, limit) => {
    const values = await getAllUsers(page, limit);
    setUsers(values.data.users.rows);
  };

  const actionDislike = async (id) => {
    await dislikeUser(id);
    getUsers();

    await Toast.fire({
      title: "Not feeling it?",
    });
  };

  const likUsersAndNext = async (id) => {
    likeUser(id)
      .then((res) => {
        getUsers();
      })
      .catch((er) => {
        getUsers();
      });
  };

  return (
    <div className="home">
      <div className="carousel">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {users && users.length ? (
              users.map((user, index) => (
                <div key={user.id} className={`carousel-item active`}>
                  <img
                    className="d-block w-100"
                    src={`${user.avatar}`}
                    alt="First slide"
                  />
                  <div className="info">
                    <p>
                      {user.name}, {user.age}
                    </p>
                  </div>
                  <div className="actions-users text-center">
                    <button
                      onClick={() => actionDislike(user.id)}
                      className="images-icon"
                    >
                      <img src="x.png" alt="x" />
                    </button>
                    <button
                      onClick={() => likUsersAndNext(user.id)}
                      className="images-icon"
                    >
                      <img src="heart.png" alt="heart" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <img
                  className="d-block w-100"
                  src="000-404.png"
                  alt="First slide"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {users && users.length && <div className="info"></div>}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
