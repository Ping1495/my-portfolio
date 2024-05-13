import "./myCV.css";

function MyCV() {
  return (
    <>
      <div className="myCV">
        <div className="cvContainer">
          <img
            className="cvPic"
            src="/src/images/resume-2296951_1280.png"
            alt="cvPic"
          />
          <button id="downlodeButton">download CV</button>
        </div>

        <img
          className="house"
          src="/src/images/neighborhood-6771319_1280.png"
          alt=""
        />
        <img className="sun" src="/src/images/sun-32228_1280.png" alt="" />
      </div>
    </>
  );
}

export default MyCV;
