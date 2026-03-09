import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Sutara Mehi Mission School, Katihar</h5>
              </div>
              <h3>2020-21</h3>
            </div>
            <p>
              Completed matriculation with 84% marks, building a strong foundation 
              in science and mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Bright Carrier School, Purnia</h5>
              </div>
              <h3>2021-23</h3>
            </div>
            <p>
              Completed intermediate education with focus on Physics, Chemistry, 
              and Mathematics, scoring 62%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - ECE</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2023-27</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Electronics and Communication Engineering 
              with CGPA 7.04. Secured 1st Rank in Tech-Marathon Circuit Debugging Contest.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PLC Programming Intern</h4>
                <h5>PLC Tech.</h5>
              </div>
              <h3>Jun-Jul 2025</h3>
            </div>
            <p>
              Worked on industrial automation using Siemens and Allen-Bradley PLCs. 
              Designed ladder logic programs for process automation, integrated sensors 
              and actuators, and tested systems in simulation and hardware environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
