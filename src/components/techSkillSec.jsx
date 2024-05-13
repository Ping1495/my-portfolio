import "./techSkillSec.css";

function TechSkillSec() {
  return (
    <section className="techSkillSec">
      <h1 className="technicalSkills">Technical Skills</h1>
      <div className="boxSkill">
        <div className="titleSkill">
          <h2 className="title">Front - end</h2>
          <h3 className="subTitle">Language</h3>
          <p id="data">HTML , CSS , JavaScript </p>
          <h3 className="subTitle">Dev tool</h3>
          <p id="data">React JS</p>
          <p id="data">Tailwind CSS</p>
          <p id="data">Chakra UI</p>
        </div>
        <div className="titleSkill">
          <h2 className="title">Back - end</h2>
          <h3 className="subTitle">Language</h3>
          <p id="data">JavaScript </p>
          <h3 className="subTitle">Dev tool</h3>
          <p id="data">Node.js</p>
          <p id="data">Next.js</p>
          <p id="data">Express.js</p>
          <p id="data">MySQL</p>
          <p id="data">MongoDB</p>
          <p id="data">Supabase</p>
        </div>
        <div className="titleSkill">
          <h2 className="title">Other</h2>
          <p id="data" className="git">
            Git
          </p>
          <p id="data">GitHub</p>
          <p id="data">VS code</p>
        </div>
      </div>
    </section>
  );
}

export default TechSkillSec;
