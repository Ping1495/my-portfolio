import "./sideProject.css";

function SideProjectSec() {
  return (
    <section className="ProjectSec">
      <h1 className="myProjects">My Projects</h1>
      <div className="projectContainer">
        <div className="getThatJobBox">
          <button id="interest">Get That Job</button>
        </div>
        <div className="portfolioBox">
          <button id="interest">Portfolio</button>
        </div>

        <div className="todoListBox">
          <button id="interest">Todo list </button>
        </div>
      </div>
    </section>
  );
}

export default SideProjectSec;
