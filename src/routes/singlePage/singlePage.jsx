import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { useState } from 'react'
import RatingForm from "../../components/ratingForm/RatingForm";
import ReviewItem from "../../components/reviewItem/ReviewItem";
import { reviewData } from "../../data/reviewData";

/** ----------------- MUQRI CODE ------------------------- */
// import components
import PayButton from "../../components/payButton/PayButton"


// dummy data for the cartItems
const cartItems = [
  { id: 1, name: "Apartment 123 Jalan Ampang, Kuala Lumpur", price: 1000.00, cartQuantity: 1, image: "https://i.imgur.com/2xH1X44.png", desc: "A Great Apartment Next to the Park!" },
];

// Define the cart object
const cart = { cartItems };

/** ----------------- MUQRI CODE ------------------------- */

function SinglePage() {

  const [seen, setSeen] = useState(false)

  function togglePop() {
    setSeen(!seen);
  }

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
                {/* <button> Make Appointment </button> */}
                <PayButton className='payButton' cartItems={cart.cartItems} />
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
              <div className="reviewHeader">
                <h2>Reviews</h2>
                <button onClick={togglePop} >Add Review</button>
                  {seen ? <RatingForm toggle={togglePop} /> : null}
                </div>
              <div className="reviews">
                {reviewData.map(review => (
                  <ReviewItem key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/category.png" alt=""/>
              <div className="featureText">
                <span>Category</span>
                <p>Rent</p>
              </div>
            </div>
            <div className="feature">
              <img src="/utility.png" alt=""/>
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt=""/>
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt=""/>
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt=""/>
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
