import "./myCV.css";
import React from "react";
import catImage from "../images/cat-3237903_1280.png";

function MyCV() {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = catImage; // ใช้ URL ของไฟล์ภาพที่นำเข้า
    link.download = "saterat-cv.png"; // ชื่อไฟล์ที่ต้องการให้ดาวน์โหลด
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="myCV">
        <div className="cvContainer">
          <img
            className="cvPic"
            src="/src/images/resume-2296951_1280.png"
            alt="cvPic"
          />
          <button id="downlodeButton" onClick={downloadImage}>
            Download CV
          </button>
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
