import React from "react";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from"react-icons/ai"
import vg from "../assets/2.webp";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Technical Solution</h1>
          <p>Solution of all your problem releted to Tech Gadgets</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday.We are leading tech company whose aim is to increase the
            problem solving ability in children
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum. Sed
            tenetur veritatis cum sunt numquam et quidem cupiditate ut maxime
            officia in dolorem velit et distinctio velit qui eveniet distinctio!
            Ut perspiciatis nesciunt nam quasi laborum sed facere
            exercitationem. Sed aliquid aperiam eos mollitia autem est nihil
            enim. Est dicta neque aut consequuntur accusamus ea culpa fuga.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s"
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay: "0.5s"
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay: "0.7s"
                }}>
                    <AiFillYoutube />
                    <p>YouTube</p>
                </div>
                <div style={{
                    animationDelay: "1s"
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
