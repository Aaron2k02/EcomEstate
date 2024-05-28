import "./profileUpdatePage.scss";

function ProfileUpdatePage() {
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
