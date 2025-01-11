import React from 'react';
import '../assets/style/Disclaimers.css';

const Disclaimers = () => {
  return (
    <div className="bg-dark min-vh-100 py-5 text-white">
      <div className="container">
        <div className=" rounded-lg shadow p-4">
          <h1 className="text-danger text-center mb-4">Disclaimers</h1>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">Content Accuracy</h2>
              <p className="text-light">
                While we strive to provide accurate and up-to-date information about movies, TV shows, and related content, Movies App makes no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on the information provided is strictly at your own risk.
              </p>
            </section>
          </div>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">External Links</h2>
              <p className="text-light">
                Our website may contain links to external websites. Movies App has no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
              </p>
            </section>
          </div>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">Copyright Notice</h2>
              <p className="text-light">
                All movie posters, trailers, and related media content displayed on Movies App are property of their respective owners. We claim no ownership of copyrighted materials used on this platform.
              </p>
            </section>
          </div>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">Service Availability</h2>
              <p className="text-light">
                We make every effort to keep Movies App running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
              </p>
            </section>
          </div>

          <div className="bg-danger rounded p-4 mt-4 border border-danger">
            <h2 className="text-warning h6 mb-3 d-flex align-items-center">
              <svg className="bi bi-exclamation-circle-fill mr-2" width="24" height="24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
              </svg>
              Important Notice
            </h2>
            <p className="text-light">
              By using Movies App, you acknowledge and agree to these disclaimers. We reserve the right to modify these disclaimers at any time without prior notice. Continued use of the platform following any changes constitutes acceptance of those changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimers;