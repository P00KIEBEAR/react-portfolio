import React from "react";
import linkedin from '../css/images/linkedin.jpg';
import github from '../css/images/github.png';
import facebook from '../css/images/facebook.png';

function Footer() {
  return (
    <div id="footer" class="footer">

      <h3>


        <a href="https://p00kiebear.github.io/my-portfolio/"> Website: https://p00kiebear.github.io/my-portfolio/ </a>
      </h3>
      <section class="social-media">
        <div>
          <a
            href="https://www.linkedin.com/in/patrick-paggi-ii-34a10b16?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrVBWI9TbTRCyvbzOl7HFkQ%3D%3D">
            <img src={linkedin} style={{ height: "36px" }} alt="linked in" /></a>

          <a href="https://github.com/P00KIEBEAR">  <img src={github} style={{ height: "36px" }} alt="github" /></a>

          <a href="https://www.facebook.com/patrick.paggi.1"> <img src={facebook} style={{ height: "36px" }} alt="facebook" /></a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
