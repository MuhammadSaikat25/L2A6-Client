import cloudImg from "../../assets/cloud.png";
import banner from "../../assets/banner.jpg";
const Home = () => {
  return (
    <div className="">
      <header>
        <div className=" relative">
          <img src={banner} alt="" />
          <div
            className="cloud absolute bottom-0"
            style={{ backgroundImage: `url(${cloudImg})` }}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default Home;
