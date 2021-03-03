import React from "react";
import coverImage from '../css/images/photo.jpg';
function About() {
  return (


    <section class="content">
      <h2 class="title">About Me</h2>


      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div id="About Me" class="About-Me">
        <p>
          I am a U.S. Army vet, husband, and father of three.
          I have amazing friends and family.
          I'm honest, have integrety and great moral values.
          I enjoy adventures and the outdoors.
      </p>
      </div>
    </section>
  );
}

export default About;
