import { useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Images from 'https://raw.githubusercontent.com/idincodingweb/Imovies-V3/refs/heads/main/src/assets/images/Picsart_25-04-02_07-18-49-024(1).jpg';
import '../assets/style/About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const profile = {
    name: "Idin Iskandar",
    role: "Full Stack Developer",
    bio: "Passionate developer with a keen interest in creating beautiful and functional web applications. Always learning and exploring new technologies.",
    skills: ["React", "Node.js", "JavaScript", "TypeScript", "Bootstrap", "MongoDB"],
    experience: [
      {
        year: "2022 - Present",
        position: "Senior Developer",
        company: "Tech Company"
      },
      {
        year: "2020 - 2022",
        position: "Web Developer",
        company: "StartUp Inc"
      }
    ],
    education: [
      {
        year: "2016 - 2020",
        degree: "Computer Science",
        school: "UNIKOM (UNIVERSITAS KOMEDI)"
      }
    ]
  };

const teamMembers = [
  {
    name: "Sulqime Shima",
    role: "Assistant Manager",
    image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_.sulqime._-20241230-0001.jpg",
  },
  {
    name: "Friska J.",
    role: "UI/UX Designer",
    image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_prissqnq.q-20241230-0001.jpg"
  },
  {
    name: "Aryu Yusmala",
    role: "DeployMent",
    image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_aryuuu_mn-20241230-0001.jpg"
  },
  {
    name: "Fika Iskandar",
    role: "Project Manager",
    image: "https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/fiqqbtt-20241230-0002.jpg"
  }
];

  return (
    <div className="about-min-vh-100 about-text-white">
      <div className="about-container-fluid about-py-5">
        {/* Hero Section */}
        <div className="about-row about-align-items-center about-mb-5">
          <div className="about-col-md-4 about-text-center">
            <div className="about-position-relative about-mb-5">
              <div className="about-rounded-circle about-overflow-hidden about-border about-border-4 about-border-danger about-mx-auto" 
                   style={{ width: '256px', height: '256px' }}>
                <img
                  src={Images}
                  alt="Profile"
                  className="about-w-100 about-h-100 about-object-fit-cover"
                />
              </div>
              <div className="about-position-absolute about-start-50 about-translate-middle-x"
                   style={{ bottom: '-25px', width: 'auto', whiteSpace: 'nowrap' }}>
                   <p className="about-mb-0 about-fw-bold">{profile.name}</p>               
                <div className="about-bg-danger about-px-4 about-py-2 about-rounded-pill">
                  <p className="about-mb-0 about-fw-bold">{profile.role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-col-md-8 about-text-center about-text-md-start about-mt-5 about-mt-md-0">
            <h1 className="about-display-4 about-fw-bold about-mb-4">
              <span className="about-text-danger">About</span> <span className="about-text-white">Me</span>
            </h1>
            <p className="about-lead about-mb-4">{profile.bio}</p>
            <div className="about-d-flex about-gap-3 about-justify-content-center about-justify-content-md-start">
              <button className="about-btn about-btn-dark about-rounded-circle about-p-2 about-d-flex about-align-items-center about-hover-danger">
                <Github size={24} />
              </button>
              <button className="about-btn about-btn-dark about-rounded-circle about-p-2 about-d-flex about-align-items-center about-hover-danger">
                <Linkedin size={24} />
              </button>
              <button className="about-btn about-btn-dark about-rounded-circle about-p-2 about-d-flex about-align-items-center about-hover-danger">
                <Twitter size={24} />
              </button>
              <button className="about-btn about-btn-dark about-rounded-circle about-p-2 about-d-flex about-align-items-center about-hover-danger">
                <Mail size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="about-bg-black about-rounded about-p-4 about-mb-5">
          <div className="about-d-flex about-gap-3 about-mb-4 about-overflow-auto">
            {['skills', 'experience', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`about-btn ${
                  activeTab === tab ? 'about-btn-danger' : 'about-btn-dark'
                } about-rounded-pill about-px-4 about-py-2 about-text-capitalize`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ minHeight: '300px' }}>
            {activeTab === 'skills' && (
              <div className="about-row about-g-4">
                {profile.skills.map((skill) => (
                  <div key={skill} className="about-col-md-4 about-col-sm-6">
                    <div className="about-bg-dark about-p-3 about-rounded about-text-center about-hover-danger-bg about-transition">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="about-d-flex about-flex-column about-gap-4">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="about-border-start about-border-4 about-border-danger about-ps-4">
                    <p className="about-text-danger about-fw-bold about-mb-1">{exp.year}</p>
                    <h3 className="about-h4 about-fw-bold about-mb-1">{exp.position}</h3>
                    <p className="about-text-secondary about-mb-0">{exp.company}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="about-d-flex about-flex-column about-gap-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="about-border-start about-border-4 about-border-danger about-ps-4">
                    <p className="about-text-danger about-fw-bold about-mb-1">{edu.year}</p>
                    <h3 className="about-h4 about-fw-bold about-mb-1">{edu.degree}</h3>
                    <p className="about-text-secondary about-mb-0">{edu.school}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
