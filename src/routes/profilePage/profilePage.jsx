import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../data/userContext.jsx";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, clearUser } = useContext(UserContext);

  const logOut = (event) => {
    event.preventDefault();
    clearUser();
    navigate('/');
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <a href="/profile/update">
              <button>Update Profile</button>
            </a>
            <button onClick={logOut}>Log Out</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              Username: <b>{user.username}</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          {user && user.isAgent && <div>
            <div className="title">
              <h1>My List</h1>
              <Link to="/post/new">
                <button>Create New Post</button>
              </Link>
            </div>
            <List/>
            <div className="title">
              <h1>Saved List</h1>
            </div>
            <List/>
          </div>}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
