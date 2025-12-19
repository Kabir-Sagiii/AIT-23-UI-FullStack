function changeBgImageTitlePara() {
  console.log("working");
  var main = document.querySelector("main");
  var h1 = document.querySelector("#title");
  var p = document.querySelector("p");

  setInterval(() => {
    // console.log(h1.innerText);
    if (h1.textContent == "Spark Big Smiles with Every Playtime") {
      console.log("interval");
      main.style.backgroundImage =
        "url('https://img.freepik.com/premium-photo/furniture-living-room-set-isolated-white-background_117038-17843.jpg')";

      h1.textContent = "Style Meets Comfort for Every Room";
      h1.style.color = "pink";
      p.textContent = `Explore beautifully crafted furniture designed to elevate any space with comfort, style, and durability. From cozy sofas to functional storage solutions, each piece blends modern design with practicality. Perfect for creating inviting living areas, productive workspaces, and relaxing retreats that fit your lifestyle and enhance everyday living.`;
    } else if (h1.textContent === "Style Meets Comfort for Every Room") {
      main.style.backgroundImage =
        "url('https://static.vecteezy.com/system/resources/previews/027/215/100/non_2x/young-man-with-curly-hair-shopping-carrying-bags-on-neutral-background-new-collection-or-sales-mockup-free-photo.jpg')";
      h1.textContent = "Elevate Your Style, Every Day";
      h1.style.color = "coral";
      p.textContent = `Discover a versatile collection of men’s wear designed for confidence, comfort, and modern style. From sharp formal essentials to relaxed casual pieces, each item features quality materials and thoughtful craftsmanship. Perfect for work, weekends, and every moment in between, helping you look polished and feel your best.`;
    } else if (h1.textContent === "Elevate Your Style, Every Day") {
      main.style.backgroundImage =
        "url('https://img.freepik.com/premium-photo/children-s-toys-beige-background-with-copy-space-multicolored-wooden-plush-toys-toddler-baby-eco-friendly-toy-plastic-free-empty-space-your-text-advertising-3d-rendering_429124-3143.jpg?w=2000')";

      h1.style.color = "yellow";
      h1.textContent = "Spark Big Smiles with Every Playtime";
      p.textContent = `Discover a delightful range of kids products designed to nurture
          creativity, learning, and joyful play. From fun toys to educational
          essentials, each item is crafted with safety, durability, and
          imagination in mind, helping children explore, grow, and enjoy every
          moment of their daily adventures`;
    }
  }, 3000);
}
