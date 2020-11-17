import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "80%", value: "80" },
        {
          id: "JavaScript_skill",
          content: "JavaScript(ES5, ES6)",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "TypeScript_skill",
          content: "TypeScript",
          porcentage: "60%",
          value: "60"
        },
        
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "AngularJS_skill",
          content: "Angular",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Swagger_skill",
          content: "Swagger",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Overall experience 9.6 years"
        },
        {
          id: "second-p-about",
          content:
            "•	4+ years of experience in Web design and development using Reactjs/Angular/HTML5/CSS/ JAVASCRIPT at Onsite Sydney Australia"
        },
        {
          id: "third-p-about",
          content:
            "•	2+ years of experience in ANGULAR, GRUNT , NODE , BOOTSTRAP 3"
        },
        {
          id: "fourth-p-about",
          content:
            "•	3+ years of experience in Mobile technologies, iOS, Hybrid Onsite at Gandhinagar Gujarat"
        },
        {
          id: "fifth-p-about",
          content:
            "•	2 years of experience in team lead/ technical lead and mentoring role for ANGULAR projects."
        },
        {
          id: "sixth-p-about",
          content:
            "•	Vastly experience in working with multicultural and geographically apart teams in Sydney and India"
        },
        {
          id: "seventh-p-about",
          content:
            "•	Experience working in Banking and Services domain."
        },
        {
          id: "eighth-p-about",
          content:
            "•	Well versed with entire development lifecycle and experienced in working in Agile, TDD, Waterfall model"
        },
        {
          id: "nineth-p-about",
          content:
          "•	A very good team player, a quick learner"
        },
       
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
