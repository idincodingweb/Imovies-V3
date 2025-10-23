import { useState } from 'react';
// Menambahkan ikon baru untuk bagian baru
import { Github, Linkedin, Mail, Twitter, Users, Code, Tv } from 'lucide-react';
import Images from '../assets/images/IMG_20251023_170628.jpg';
import '../assets/style/About.css';

const About = () => {
  // Mengganti 'experience' menjadi 'projects'
  const [activeTab, setActiveTab] = useState('skills');

  // --- DATA PROFIL ---
  // Developer : IDIN ISKANDAR
  // (27 tahun, developer, content creator, dan proyek UNPAS)
  const profile = {
    name: "Idin Iskandar, S.kom",
    role: "Web Development",
    bio: "Passionate 27-year-old developer from Indonesia. Loves building cool web apps with React and creating content for YouTube. This iMovies project is my latest creation!",
    skills: ["React", "JavaScript", "Firebase", "Node.js", "PHP", "TMDB API", "CSS", "Bootstrap"],
    projects: [ 
      {
        year: "2025",
        title: "iMovies Web App",
        stack: "React, Firebase Auth, TMDB API",
        description: "A functional movie database website with user authentication."
      },
      {
        year: "2025",
        title: "UNIVERSITAS PASUNDAN BANDUNG (UNPAS)",
        stack: "PHP, MySQL (Local Database)",
        description: "Fictional school website project for learning backend development."
      },
       {
        year: "2025 - Present",
        title: "YouTube Content Creator",
        stack: "Video Editing, Scripting",
        description: "Creating content about gaming and web development."
      }
    ],
    education: [
      {
        year: "2023 - Present",
        degree: "Student Developer",
        school: "UNIVERSITAS PASUNDAN BANDUNG (UNPAS) (Self-Taught Division)" 
      }
    ]
  };

// Data team (dari kode Anda, tidak diubah)
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

  // Social Media Link
  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/idincodingweb" }, // Ganti dengan link Anda
    { icon: <Linkedin size={24} />, href: "#" }, // Ganti dengan link Anda
    { icon: <Twitter size={24} />, href: "#" }, // Ganti dengan link Anda
    { icon: <Mail size={24} />, href: "mailto:emailanda@gmail.com" }, // Ganti dengan email Anda
  ];

  return (
    <div className="about-min-vh-100 about-text-white">
      <div className="about-container about-py-5 px-3"> {/* Mengganti container-fluid menjadi container biasa */}
        
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
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer" // Keamanan
                  className="about-btn about-btn-dark about-rounded-circle about-p-2 about-d-flex about-align-items-center about-hover-danger"
                  >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="about-bg-black about-rounded about-p-4 about-mb-5">
          <div className="about-d-flex about-gap-3 about-mb-4 about-overflow-auto">
            {['skills', 'projects', 'education'].map((tab) => ( // Diubah
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
              <div className="about-d-flex about-flex-wrap about-gap-3"> {/* Menggunakan flex-wrap dan gap */}
                {profile.skills.map((skill) => (
                  <div key={skill} className="about-bg-dark about-rounded-pill about-px-4 about-py-2 about-fw-medium about-hover-danger-bg about-transition">
                    {skill}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && ( 
              <div className="about-d-flex about-flex-column about-gap-4">
                {profile.projects.map((project, index) => (
                  <div key={index} className="about-border-start about-border-4 about-border-danger about-ps-4">
                    <p className="about-text-danger about-fw-bold about-mb-1">{project.year}</p>
                    <h3 className="about-h4 about-fw-bold about-mb-1">{project.title}</h3>
                    <p className="about-text-secondary about-mb-1 fst-italic">{project.stack}</p>
                    <p className="about-mb-0">{project.description}</p>
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

        {/* --- BAGIAN BARU: ABOUT THIS PROJECT --- */}
        <div className="about-bg-black about-rounded about-p-4 about-mb-5">
          <h2 className="about-fw-bold about-mb-4 about-d-flex about-align-items-center about-gap-2">
            <Code size={28} className="about-text-danger" />
            About This Project
          </h2>
          <p className="about-lead about-text-white-50">
            iMovies is a personal project built to showcase skills in front-end development and API integration.
            It's powered by modern technologies to deliver a fast, responsive, and engaging user experience.
          </p>
          <div className="about-d-flex about-flex-wrap about-gap-3">
            {['React', 'Firebase Authentication', 'TMDB API', 'Vercel (Deployment)'].map((tech) => (
              <div key={tech} className="about-bg-dark about-rounded-pill about-px-4 about-py-2 about-fw-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* --- BAGIAN BARU: MEET THE TEAM --- */}
        {/* Bagian ini me-render array 'teamMembers' */}
        <div className="about-mb-5">
          <h2 className="about-fw-bold about-mb-4 about-text-center">
            <span className="about-text-danger">Meet</span> the (Fictional) Team
          </h2>
          <div className="about-row about-g-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="about-col-lg-3 about-col-md-6">
                <div className="about-bg-black about-rounded about-p-3 about-text-center about-h-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="about-rounded-circle about-object-fit-cover about-mb-3"
                    style={{ width: '150px', height: '150px', border: '3px solid var(--bs-danger, #dc3545)' }} // Menggunakan variabel Bootstrap jika ada, atau fallback
                  />
                  <h5 className="about-fw-bold about-mb-1">{member.name}</h5>
                  <p className="about-text-danger about-mb-0">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
