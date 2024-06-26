import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Apex</h1>
      <p>Welcome to Apex - Your Destination for Excellence!</p>
      <p>We are a team of passionate individuals dedicated to pushing the boundaries of creativity and innovation.</p>
      <p>Our mission is to deliver top-notch solutions that exceed expectations and inspire greatness.</p>
      <p>Join us in our journey towards excellence!</p>
      <div className="team-members">
        <h2>Meet Our Team</h2>
        <ul>
          <li>Mr.Ayush Ingrulkar - CEO & Founder</li>
          <li>Mr.Nishant Pawar - Chief Creative Officer</li>
          <li>Mr.Sarthak Kadam - Lead Developer</li>
          <li>Mr.Kavishwar Sonavne - Marketing Manager</li>
        </ul>
        <h3>"Thank you for joining us on this journey. </h3>
       <h3>Apex Productions extends its deepest gratitude to all those who contributed to the creation of this project.</h3>
       <h3>All rights reserved. No part of this production may be reproduced, distributed, or transmitted in any form or by any means, without the prior written permission of Apex Productions.</h3>
       <h3> © [2019] Apex Productions. All rights reserved."</h3>
      </div>
      
    </div>
  );
};

export default About;
