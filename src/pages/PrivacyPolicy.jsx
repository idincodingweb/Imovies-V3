import React from 'react';
import '../assets/style/PrivacyDisclaimers.css'; // Tambahkan file CSS jika diperlukan

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container bg-dark text-white py-5">
      <div className="container">
        <h1 className="title text-center text-danger mb-4">Privacy Policy</h1>
        <p className="text-center text-white-50">Last updated: January 09, 2025</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
          information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
          collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created
          with the help of the{' '}
          <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" className="text-danger">
            Privacy Policy Generator
          </a>.
        </p>

        <h2 className="text-danger mt-5">Interpretation and Definitions</h2>

        <h3 className="text-danger">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The
          following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-danger">Definitions</h3>
        <p>For the purposes of this Privacy Policy:</p>
        <ul>
          <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
          <li><strong>Company</strong> refers to In Movies.</li>
          <li><strong>Cookies</strong> are small files placed on Your device containing your browsing details.</li>
          <li><strong>Country</strong> refers to: Indonesia</li>
          <li><strong>Device</strong> means any device that can access the Service.</li>
          <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Service Provider</strong> refers to third-party companies or individuals who assist in providing the Service.</li>
          <li><strong>Third-party Social Media Service</strong> refers to any website or network through which a User can log in to use the Service.</li>
          <li><strong>Usage Data</strong> refers to data collected automatically from the Service.</li>
          <li><strong>Website</strong> refers to In Movies, accessible from <a href="https://Imoviescode.web" className="text-danger" target="_blank">https://Imoviescode.web</a></li>
          <li><strong>You</strong> refers to the individual accessing or using the Service.</li>
        </ul>

        <h2 className="text-danger mt-5">Collecting and Using Your Personal Data</h2>

        <h3 className="text-danger">Types of Data Collected</h3>

        <h4 className="text-danger">Personal Data</h4>
        <p>
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can
          be used to contact or identify You. Personally identifiable information may include:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Usage Data</li>
        </ul>

        <h4 className="text-danger">Usage Data</h4>
        <p>
          Usage Data is collected automatically when using the Service. This may include details like Device's IP address,
          browser type, browser version, pages visited, time spent, and more.
        </p>

        <h4 className="text-danger">Information from Third-Party Social Media Services</h4>
        <p>
          We allow You to create an account and log in through third-party services like Google, Facebook, Instagram,
          Twitter, and LinkedIn.
        </p>

        <h4 className="text-danger">Tracking Technologies and Cookies</h4>
        <p>
          We use Cookies to track activity on Our Service and to store certain information. Tracking technologies may
          include cookies, beacons, tags, and scripts.
        </p>

        <h3 className="text-danger">Use of Your Personal Data</h3>
        <ul>
          <li>To provide and maintain our Service.</li>
          <li>To manage Your Account.</li>
          <li>For the performance of a contract.</li>
          <li>To contact You about updates or security issues.</li>
          <li>To provide You with news and special offers.</li>
          <li>For business transfers, such as mergers or acquisitions.</li>
        </ul>

        <h3 className="text-danger">Sharing Your Personal Information</h3>
        <p>We may share Your personal information in the following situations:</p>
        <ul>
          <li><strong>With Service Providers:</strong> To monitor and analyze the use of our Service.</li>
          <li><strong>For business transfers:</strong> During mergers, sales, or acquisitions.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
