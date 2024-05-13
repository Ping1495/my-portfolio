import "./heroSec.css";

function HeroSec() {
  return (
    <section class="heroSec">
      <div className="picHero">
        <img
          className="heroImg"
          src="/src/images/woman-4178302_1280.jpg"
          alt="art of woman"
        />
      </div>
      <div className="heroContent">
        <div className="welcomeMessage">
          <h2 className="helloMessage">Hello!</h2>
          <p className="myMessage">My name is Saterat Pattanachaikosol.</p>
          <p className="myMessage">Welcome to my portfolio.</p>
        </div>
        <a href="#sideProjectSec" class="btn">
          View my projects
        </a>
      </div>
    </section>
  );
}

export default HeroSec;
