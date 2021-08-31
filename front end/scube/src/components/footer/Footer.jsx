import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <div>
          <h4>S Cube Rentals</h4>
          <div className={styles.Footer__highlight}></div>
          <div className={styles.Footer__flex}>
            <div>
              <img
                src=""
                alt="mail"
              ></img>
            </div>
            <div>care@capsta.in</div>
          </div>
          <div className={styles.Footer__flex}>
            <div>
              <img
                src=""
                alt="mail"
              ></img>
            </div>
            <div>+919907956766</div>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>About us</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <h4>Policies</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>Tariff</p>
            <p>Offers</p>
            <p>Riding Gears</p>
            <p>Own a franchise</p>
            <p>Earn with us</p>
            <p>Indian bike routes</p>
          </div>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className={styles.Footer__highlight}></div>
          <div className={styles.Footer__flex}>
            <div>
              <img
                width="25px"
                src=""
                alt="social"
              ></img>
            </div>
            <div>
              <img
                width="25px"
                src=""
                alt="social"
              ></img>
            </div>
            <div>
              <img
                width="25px"
                src=""
                alt="social"
              ></img>
            </div>
            <div>
              <img
                width="25px"
                src=""
                alt="social"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Footer__desc}>
        <h2>Travel Safely with Bike Rentals in Chhattisgarh</h2>
        <p>
          S Cube Rentals is the first brand under Capsta Private Limited 
          to operate bike rentals in Chhattisgarh. We offer a wide variety of 
          vehicles starting from scooters such as Activa, Dio, Aprilia SR, TVS 
          Ntorq, Ather, Aviator to powerful bikes such as Royal Enfield Classic 350,
          KTM Duke 200, BMW, Yamaha Fazer etc. With the mission to “Mobility with 
          trust”, our single point of focus has been to provide a seamless customer 
          experience. S Cube Rentals is providing our customers a safer way to travel 
          and commute. We have made safety as our top priority. We are ensuring the 
          two wheelers are sanitized before every ride. We are also providing Zero 
          Contact Home Delivery so that our customers do not have to step out of the 
          house. All our team members use masks and gloves to ensure higher customer 
          safety. All these measures ensure that we provide safe bikes for rent.
        </p>
        <h2>Hire a Bike in Chhattisgarh for Easy Commute</h2>
        <p>
          Bike rentals is a shared mobility offering that allows users to own
          the vehicle for only the duration of their need and return after it.
          It is a much better option economically. Users do not have to invest a
          huge sum of money to buy vehicles and instead spend a small amount as
          and when they need a two wheeler. Users also need not take the burden
          of insurance and maintenance. We also provide 24/7 roadside assistance
          to customers who rent a bike in Bangalore. Two wheelers on rent is a much 
          safer alternative to public transport. Users can travel to places without
          being dependent on anyone else while also maintaining social distance. 
          Bike rentals is also a safer alternative to cabs because the user doesn’t 
          share the ride with anyone else.
        </p>
        <h2>Sanitized Bikes for Rent in Chhattisgarh</h2>
        <p>
          The use case for bikes on rent is many fold. Our customers rent vehicles 
          to run daily errands and commute within the city. We have offerings ranging 
          from a few hours to months (Monthly Bike Rental). A person who is new to 
          the city uses S cube bike rentals to navigate the city and also house hunting. 
          More powerful two wheeler alternatives such as Royal Enfield Himalayan, 
          Bajaj Avenger,  Dominar, etc is used to go on weekend long rides. Chhattisgarh
          has a lot of tourist attractions nearby which makes it a prime spot to start
          your weekend getaway through hiring a bike from S Cube Rentals. Our offering 
          also extends to electric bikes for rent to cater to the environmentally
          cautious users. Such as Yobykes Drift, Pure EV Epluto, etc. We have
          customers who also use bike rentals to test ride vehicles that they are 
          interested in buying. Booking a weekend trip allows the customers to explore 
          everything that a particular bike has to offer.
        </p>
        <h2>Bike Rental Near to You - Our Bike Stations in Chhattisgarh</h2>
        <p>
          We are present in multiple locations across the city so that our users
          do not have to travel farther to hire a bike in Bangalore. Our pick-up
          points are at: Sector 10, Sector 1, Risali, Secto 4, Rishabh Green City, 
          Malviya Nagar, and Nehru Nagar.
        </p>
      </div>
      <div className={styles.Footer__end}>
        <h3>
          Made with
          <img
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/like-b8b570f724101252e5c39d8bd66246607fb226e93e3ba17b0516209b20832345.png"
            alt="love"
          ></img>
          by Kshitij Soni
        </h3>
      </div>
    </>
  );
}

export default Footer;