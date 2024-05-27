import "./sideProject.css";

function SideProjectSec() {
  return (
    <section className="ProjectSec">
      <h1 className="myProjects">My Projects</h1>
      <div className="projectContainer">
        <div className="getThatJobBox">
          <a href="https://github.com/CB00M/GET-THAT-JOB.git">
            <button id="interest">Get That Job</button>
          </a>
        </div>
        <a href="https://github.com/Ping1495/my-portfolio.git">
          <div className="portfolioBox">
            <button id="interest">Portfolio</button>
          </div>
        </a>

        <a href="https://github.com/Ping1495/to-do-list.git">
          <div className="todoListBox">
            <button id="interest">Todo list </button>
          </div>
        </a>
      </div>
    </section>
  );
}

export default SideProjectSec;
