import "./editPostPage.scss";
import { singlePostData } from "../../lib/dummydata";

function EditPostPage() {
  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Edit Post</h1>
        <div className="wrapper">
          <form>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" value={singlePostData.id}/>
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" value={singlePostData.price}/>
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" value={singlePostData.address}/>
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <textarea id="desc" name="desc" rows="20" cols="50" value={singlePostData.description}/>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" value={singlePostData.city}/>
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" value={singlePostData.bedRooms}/>
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" value={singlePostData.bathroom}/>
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" value={singlePostData.latitude}/>
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" value={singlePostData.longitude}/>
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                  id="income"
                  name="income"
                  type="text"
                  placeholder="Income Policy"
                  value={'na'}
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" value={1234}/>
            </div>
            <div className="item">
              <label htmlFor="school">Distance to school(m)</label>
              <input min={0} id="school" name="school" type="number" value={250}/>
            </div>
            <div className="item">
              <label htmlFor="bus">Distance to bus(m)</label>
              <input min={0} id="bus" name="bus" type="number" value={100}/>
            </div>
            <div className="item">
              <label htmlFor="restaurant">Distant to restaurant(m)</label>
              <input min={0} id="restaurant" name="restaurant" type="number" value={50}/>
            </div>
            <button className="sendButton">Edit</button>
          </form>
        </div>
      </div>
      <div className="sideContainer">
        <img
            src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="" className="avatar"/>
      </div>
    </div>
  );
}

export default EditPostPage;
