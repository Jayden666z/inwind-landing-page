import React from 'react';
import './AboutUs.css'; // Include your CSS file for additional styling

export default function AboutUs() {
    return (
        <div className="about-us">
            <h1 className="about-title">About XnetVPN</h1>
            
            <section>
                <h2>Our Mission</h2>
                <p>
                    At XnetVPN, our mission is to protect user privacy online and provide secure, fast, and reliable internet services for users worldwide. We are dedicated to promoting the ideals of internet freedom and personal privacy, enabling everyone to browse the web safely.
                </p>
            </section>

            <section>
                <h2>Our Vision</h2>
                <p>
                    We aim to be the most trusted VPN service provider globally, offering a seamless and secure online browsing experience. No matter where you are, our goal is to protect your online activities at all times.
                </p>
            </section>

            <section>
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Security:</strong> We prioritize user security by utilizing the latest encryption technologies to protect your data.</li>
                    <li><strong>Transparency:</strong> We commit to providing clear service terms, ensuring users understand how we collect and use data.</li>
                    <li><strong>User-Centric:</strong> We strive to deliver outstanding support and experience, ensuring every user is satisfied.</li>
                </ul>
            </section>

            <section>
                <h2>Our Team</h2>
                <p>
                    The XnetVPN team consists of experienced cybersecurity experts and tech enthusiasts. They bring a wealth of industry experience and are passionate about safeguarding user online security and privacy.
                </p>
            </section>

            <section>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or suggestions regarding our services, feel free to reach out to us via email at: <a href="mailto:support@xnetvpn.com">support@xnetvpn.com</a>.
                </p>
            </section>
        </div>
    );
}
