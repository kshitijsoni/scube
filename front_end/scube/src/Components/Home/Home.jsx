import React from "react";
import styles from "./Home.module.css";
import { SelectionContext } from "../../Context/SelectionContextProvider";
import { useSelector } from "react-redux";
import FleetCard from "./FleetCard";
import HomeCarousel from "./HomeCarousel";
import { useHistory } from "react-router";
import moment from "moment";

function Home() {
  const allBikes = useSelector((state) => state.tarrifReducer.allBikes);

  const history = useHistory();

  const exploreHandler = () => {
    history.push("/search");
  };

  const { onSubmitHandler, onChangeHandler, info } = React.useContext(
    SelectionContext
  );
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  return (
    <div className={styles.Home}>
      <div className={styles.Home__header}>
        <div className={styles.Search}>
          <h1>Search your next ride</h1>
          <form onSubmit={onSubmitHandler}>
            <label>Pickup</label>
            <div className={styles.Search__element}>
              <div>
                <input
                  onChange={onChangeHandler}
                  value={pickupDate}
                  name="pickupDate"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                ></input>
              </div>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="pickupTime"
                  value={pickupTime}
                  type="time"
                ></input>
              </div>
            </div>
            <label>DropOff</label>
            <div className={styles.Search__element}>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="dropDate"
                  value={dropDate}
                  type="date"
                  min={pickupDate}
                ></input>
              </div>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="dropTime"
                  value={dropTime}
                  type="time"
                ></input>
              </div>
            </div>
            <div className={styles.Search__element}>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
        <div style={{ flexGrow: 1 }}></div>
      </div>
      <div className={styles.Home__services}>
        <div className={styles.Home__services__main}>
          <div>
            <img
              src=""
              alt="sanitizer"
            ></img>
          </div>
          <div>
            <img
              src=""
              alt="delivery"
            ></img>
          </div>
        </div>
        <div className={styles.Home__services__foot}>
          <div>
            <img
              src=""
              alt="insurance"
            ></img>
            <span>Vehicle Insurance</span>
          </div>
          <div>
            <img
              src=""
              alt="assistance"
            ></img>
            <span>24/7 Roadside Assistance</span>
          </div>
          <div>
            <img
              src=""
              alt="maintenance"
            ></img>
            <span>Bike Maintenance</span>
          </div>
        </div>
      </div>
      <div className={styles.Home__rentals}>
        <div className={styles.Home__rentals__sub}>Introducing</div>
        <div className={styles.Home__rentals__main}>
           S Cube Rentals <span>X</span>
        </div>
        <div className={styles.Home__rentals__desc}>
          <div></div>
          <div>
            <p>Now rent vehicles on monthly subscription (1-9 months)</p>
            <ul>
              <li>Pay per month</li>
              <li>Free home delivery</li>
              <li>Sanitized bikes</li>
              <li>Free maintenance</li>
            </ul>
            <button onClick={exploreHandler}>Explore</button>
          </div>
        </div>
        <div className={styles.Home__rentals__biker}>
          <img
            src=""
            alt="biker"
          ></img>
        </div>
      </div>
      <div className={styles.Home__fleet}>
        <div className={styles.Home__fleet__head}>
          <h1>Our Fleet</h1>
          <div className={styles.Home__bar}></div>
        </div>
        <div className={styles.Home_fleet_cards}>
          {allBikes
            ?.filter((_, index) => index < 4)
            .map((item) => (
              <FleetCard key={item._id} {...item}></FleetCard>
            ))}
        </div>
      </div>
      <div className={styles.Home__believe}>
        <div className={styles.Home__fleet__head}>
          <h1>We believe in quality</h1>
          <div className={styles.Home__bar}></div>
        </div>
        <HomeCarousel></HomeCarousel>
      </div>
    </div>
  );
}

export default Home;