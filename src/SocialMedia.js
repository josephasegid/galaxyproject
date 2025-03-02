import React from 'react';
import { FaTiktok, FaTelegram, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
  const socialMediaLinks = [
    { name: 'TikTok', url: 'https://www.tiktok.com/@galaxyfurnitureet?_t=8oN60dmx3e2&_r=1', icon: <FaTiktok /> },
    { name: 'Telegram', url: 'https://t.me/galaxyfurnitureet', icon: <FaTelegram /> },
    { name: 'Instagram', url: 'https://www.instagram.com/galax.yfurniture?igsh=MWdwY2kxd3JuenY5YQ==', icon: <FaInstagram /> },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100090045654109&mibextid=ZbWKwL', icon: <FaFacebook /> },
  ];

  const branchLocations = [
    { name: 'Semit Branch', url: 'https://maps.app.goo.gl/RAoqRD9LgZZ6xapD7' },
    { name: 'Goro Branch', url: 'https://maps.app.goo.gl/rrWogFtc75kLFemQ9' },
    { name: 'Figa Branch', url: 'https://maps.app.goo.gl/LcqpuRb3yq9GGGfa9' },
  ];

  const phoneNumbers = [
    { number: '0965333435' },
    { number: '0966333435' },
    { number: '0967333435' },
    { number: '0964333435' },
  ];

  return (
    <div className="social-media-container">
      <h1>Galaxy Furniture</h1>
      <div className="social-media-buttons">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-button"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      {/* Branch Locations Section */}
      <div className="branch-section">
        <h2>Our Branches</h2>
        <div className="branch-buttons">
          {branchLocations.map((branch, index) => (
            <a
              key={index}
              href={branch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="branch-button"
            >
              <FaMapMarkerAlt />
              <span>{branch.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Phone Numbers Section */}
      <div className="phone-section">
        <h2>Contact Us</h2>
        <div className="phone-buttons">
          {phoneNumbers.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.number}`}
              className="phone-button"
            >
              <FaPhone />
              <span>{phone.number}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;