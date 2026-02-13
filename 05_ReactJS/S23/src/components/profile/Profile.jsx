import React from "react";
import "./Profile.css";
function Profile() {
  return (
    <main>
      <div id="bgImage">
        <img
          id="user-image"
          src="https://techcloudltd.com/wp-content/uploads/2024/06/male-professional-headshots-1024x638.webp"
          width="200"
          height="200"
          alt=""
        />
      </div>
      <h1>Rohan Verma</h1>
      <h4>Fullstack Engineer</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt
        nulla quam sapiente! Repudiandae dolorum nulla tempora tempore explicabo
        sit, ut illum unde quod quibusdam doloribus! Sequi doloremque possimus
        quo non reiciendis fuga, illo necessitatibus optio eligendi aliquid
        ipsam eaque suscipit delectus illum? Error soluta culpa quisquam,
        dolorem enim assumenda exercitationem maxime dolor similique ex suscipit
        temporibus odit quas modi porro omnis natus iure itaque asperiores!
        Veritatis quam, cum tenetur magni corrupti asperiores, cupiditate
        incidunt sit exercitationem reiciendis vero facere illo temporibus
        deserunt unde? Deleniti, repudiandae nam libero sed consequatur
        dignissimos repellendus impedit architecto perferendis tempore suscipit
        debitis laboriosam incidunt.
      </p>
      <div id="logos">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/534/049/original/social-media-icon-instagram-logo-free-vector.jpg"
          alt=""
          width="50"
          height="50"
        />
        <img
          src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png"
          alt=""
          width="50"
          height="50"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
          alt=""
          width="50"
          height="50"
        />
      </div>
      <img
        id="icon"
        src="https://static.vecteezy.com/system/resources/previews/024/398/617/original/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png"
        alt=""
        width="70"
        height="70"
      />
    </main>
  );
}

export default Profile;
