import "./myCV.css";
import React from "react";
import cvImage from "/public/images/Ping-Saterat-CV.png";
import resumeImage from "/public/images/resume-2296951_1280.png";
import neighborhoodImage from "/public/images/neighborhood-6771319_1280.png";
import sunImage from "/public/images/sun-32228_1280.png";

function MyCV() {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = cvImage; // ใช้ URL ของไฟล์ภาพที่นำเข้า
    link.download = "Ping-Saterat-CV.png"; // ชื่อไฟล์ที่ต้องการให้ดาวน์โหลด
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
            src={resumeImage} // ใช้การ import เพื่อให้แน่ใจว่า path ถูกต้อง
            alt="cvPic"
          />
          <button id="downlodeButton" onClick={downloadImage}>
            Download CV
          </button>
        </div>
        <img
          className="house"
          src={neighborhoodImage} // ใช้การ import เพื่อให้แน่ใจว่า path ถูกต้อง
          alt="house"
        />
        <img
          className="sun"
          src={sunImage} // ใช้การ import เพื่อให้แน่ใจว่า path ถูกต้อง
          alt="sun"
        />
      </div>
    </>
  );
}

export default MyCV;
