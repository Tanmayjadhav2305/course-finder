import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Courses', 'Pricing', 'Features', 'Security'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Help Center', 'Community', 'Partners', 'Affiliate'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Tanmayjadhav2305/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tanmay-jadhav-795a96293', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tanmayjadhav2305@gmail.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'tanmayjadhav2305@gmail.com' },
    { icon: Linkedin, text: 'linkedin.com/in/tanmay-jadhav-795a96293' },
    { icon: Github, text: 'github.com/Tanmayjadhav2305' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer-logo">
              <span>📚</span>
              <span>CourseHub</span>
            </div>
            <p>Empowering learners worldwide with quality education and industry expertise.</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  title={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map((section, index) => (
            <motion.div
              key={index}
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4>{section[0]}</h4>
              <ul>
                {section[1].map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4>Contact Us</h4>
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <item.icon size={18} />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} CourseHub. All rights reserved.</p>
            <p className="footer-credit">Designed and Developed by <a href="https://www.linkedin.com/in/tanmay-jadhav-795a96293" target="_blank" rel="noopener noreferrer">Tanmay Jadhav</a></p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration"></div>
    </footer>
  );
}

export default Footer;
