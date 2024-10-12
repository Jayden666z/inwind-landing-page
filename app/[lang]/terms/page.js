import React from 'react';
import './Terms.css'; // Create a CSS file for styles.

export default function Terms() {
    return (
        <div className="terms-container">
            <h1 className="terms-title">Terms of Service</h1>

            <section className="terms-section">
                <h2>General</h2>
                <ul>
                    <li>
                        <b>a)</b> Our goal is to provide quality service to all customers. Please read these terms of service carefully before you access the site or the service.
                    </li>
                    <li>
                        <b>b)</b> These Terms of Service (“the Terms”) govern your use of XnetVPN and the associated website domains and related service (“the Services”), which are owned and operated by the XnetVPN Team. The Terms constitute a legally binding agreement between you and us.
                    </li>
                </ul>
            </section>

            <section className="terms-section">
                <h2>XnetVPN Service</h2>
                <ul>
                    <li>
                        <b>a)</b> You understand that we provide a virtual private network (VPN) service, including servers, transport, routers, and other equipment. You agree to abide by these Terms while using our Service.
                    </li>
                </ul>
            </section>

            <section className="terms-section">
                <h2>Usage Policy</h2>
                <ul>
                    <li>
                        <b>a)</b> BY USING THE XNETVPN SERVICE, YOU AGREE:
                        <ul>
                            <li><b>a)</b> NOT to use the system for sending spam, port scanning, or any type of unsolicited email.</li>
                            <li><b>b)</b> NOT to launch any pop-ups from our service.</li>
                            <li><b>c)</b> NOT to attack any computer or network while using our service.</li>
                            <li><b>d)</b> NOT to use the service for harmful activities.</li>
                        </ul>
                    </li>
                    <li>
                        <b>b)</b> Users must understand and comply with relevant laws. XnetVPN is not liable for user actions.
                    </li>
                    <li>
                        <b>c)</b> Violations may result in termination of your account without refund. You may be liable for damages incurred by XnetVPN.
                    </li>
                    <li>
                        <b>d)</b> XnetVPN grants a nonexclusive, limited license to use the Software for its intended purposes. Unauthorized use is prohibited.
                    </li>
                </ul>
            </section>

            <section className="terms-section">
                <h2>Disclaimers</h2>
                <ul>
                    <li>
                        <b>a)</b> We strive to prevent interruptions to the Site and the Service. However, these are provided on an “as is” and “as available” basis, and we do not warrant, either expressly or by implication, the accuracy of any materials or information provided through the Site or Service, or their suitability for any particular purpose..
                    </li>
                    <li>
                        <b>b)</b> Actual service coverage and quality may vary.
                    </li>
                    <li>
                        <b>c)</b> We do not guarantee uninterrupted or error-free services.
                    </li>
                    <li>
                        <b>d)</b> We are not responsible for service interruptions caused by external factors.
                    </li>
                    <li>
                        <b>e)</b> We do not log user activity. User privacy is important to us.
                    </li>
                </ul>
            </section>

            <section className="terms-section">
                <h2>Changes to the Terms</h2>
                <ul>
                    <li>
                        <b>a)</b> XnetVPN may update these Terms without notice. Changes become effective upon posting.
                    </li>
                </ul>
            </section>

            <section className="terms-section">
                <h2>Last but NOT Least</h2>
                <ul>
                    <li>
                        <b>a)</b> We value consumer privacy. For questions, contact us at xnetvpn@rbox.me.
                    </li>
                </ul>
            </section>
        </div>
    );
}
