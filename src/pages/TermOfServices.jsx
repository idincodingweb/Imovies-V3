import React from 'react';
import '../assets/style/TermOfServices.css';
const TermsOfService = () => {
  return (
    <div className="min-vh-100 py-5 text-white">
      <div className="container">
        <div className=" rounded-lg shadow p-4">
          <h1 className="text-danger text-center mb-4">Terms of Service</h1>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">1. Acceptance of Terms</h2>
              <p className="text-light">
                By accessing and using Movies App, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our service immediately. We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.
              </p>
            </section>
          </div>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">2. User Accounts</h2>
              <p className="text-light">
                To access certain features of Movies App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
            </section>
          </div>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">3. User Content</h2>
              <p className="text-light">
                By posting content on Movies App, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, publicly perform, publicly display, reproduce, and distribute such content. You agree not to post content that is illegal, offensive, threatening, or that infringes on any third-party rights.
              </p>
            </section>
          </div>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">4. Intellectual Property</h2>
              <p className="text-light">
                All content provided on Movies App, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and data compilations, is the property of Movies App or its content suppliers and is protected by international copyright laws.
              </p>
            </section>
          </div>

          <div className="mb-4">
            <section className="bg-dark rounded p-4 hover:bg-light transition-all duration-300">
              <h2 className="text-danger h5 mb-3">5. Termination</h2>
              <p className="text-light">
                We reserve the right to terminate or suspend your account and access to Movies App at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>
          </div>

          <div className="bg-danger rounded p-4 mt-4 border border-danger">
            <h2 className="text-warning h6 mb-3 d-flex align-items-center">
              <svg className="bi bi-exclamation-circle-fill mr-2" width="24" height="24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
              </svg>
              Contact Information
            </h2>
            <p className="text-light">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              <a href="mailto:support@moviesapp.com" className="text-danger hover:text-warning">
                support@moviesapp.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;