import "./Home.css";

import Ads from "./ads/Ads";
import TrendingProducts from "./trending-products/TrendingProducts";
function Home() {
  return (
    <div className="home">
      <Ads />
      <TrendingProducts
        title={"Trending Products"}
        cards={[
          {
            image:
              "https://cdn.pixabay.com/photo/2020/04/02/05/19/beauty-4993469_1280.jpg",
            offer: "upto 30% off",
          },
          {
            image:
              "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg",
            offer: "off upto 50%",
          },
          {
            image:
              "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg",
            offer: "off upto 70%",
          },
          {
            image:
              "https://tse4.mm.bing.net/th/id/OIP.CdpyS8DahLq_HVynvT4OoAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
            offer: "off upto 20%",
          },
        ]}
      />

      <TrendingProducts
        title={"Winter Specials"}
        cards={[
          {
            image:
              "https://tse4.mm.bing.net/th/id/OIP.FEuG6VzJXd51dl5ZBN5UEQHaG-?rs=1&pid=ImgDetMain&o=7&rm=3",
            offer: "",
          },
          {
            image:
              "https://i.pinimg.com/originals/df/ba/bc/dfbabc34dc774714ddd71198b0805fcf.jpg",
            offer: "off upto 70%",
          },
          {
            image:
              "https://womanandlifestyle.com/wp-content/uploads/2023/12/Cute-Winter-Outfits.jpg",
            offer: "off upto 50%",
          },
          {
            image:
              "https://sincerelykaterina.com/wp-content/uploads/2018/03/WinterCoats.jpg",
            offer: "from 3000",
          },
        ]}
      />

      <TrendingProducts
        title={"Top Deal's"}
        cards={[
          {
            image:
              "https://rukminim2.flixcart.com/image/240/240/xif0q/tablet/r/k/q/-original-imahayyde8ugshtm.jpeg?q=60",
            offer: "From 3000",
          },
          {
            image:
              "https://rukminim2.flixcart.com/image/240/240/k01b8280/acoustic-guitar/t/f/a/rvl-38c-lgp-bk-revel-original-imafjx6hmdg9vczz.jpeg?q=60",
            offer: "From 10,000",
          },
          {
            image:
              "https://rukminim2.flixcart.com/image/240/240/xif0q/perfume/a/k/i/100-mystic-bloom-perfume-for-women-floral-musky-notes-long-original-imahbyjrakcvmgqh.jpeg?q=60",
            offer: "From 7000",
          },
          {
            image:
              "https://rukminim2.flixcart.com/image/240/240/kbzergw0/instant-camera/r/m/h/instax-instant-camera-mini-11-fujifilm-original-imaft7fpbhhne8qr.jpeg?q=60",
            offer: "From 3000",
          },
        ]}
      />

      <TrendingProducts
        title={"Make your Home Stylish"}
        cards={[
          {
            image:
              "https://rukminim2.flixcart.com/image/420/420/xif0q/blanket/v/s/m/blnkt-dbl-grey-blnkt-dbl-grey-anadhika-original-imahg8dywchgwxrd.jpeg?q=60",
            offer: "min 50% off",
          },
          {
            image:
              "https://rukminim2.flixcart.com/image/420/420/xif0q/mosquito-net/g/y/i/double-bed-flower-design-light-blue-color-double-bed-6-x7-ft-72-original-imahcf3apysmuzya.jpeg?q=60",
            offer: "min 30% off",
          },
          {
            image:
              "https://rukminim2.flixcart.com/image/420/420/xif0q/wall-clock/d/x/j/wooden-wall-clock-32-5-wc331-analog-kpenterprises-20-original-imahfyyvpngfyxzt.jpeg?q=60",
            offer: "min 20%",
          },
          {
            image:
              "https://rukminim2.flixcart.com/image/420/420/xif0q/mat/d/6/x/medium-cotton-oval-kachra-doormat-floor-mat-bathmat-for-bedroom-original-imahj9bghptgyhxe.jpeg?q=60",
            offer: "from 5000",
          },
        ]}
      />
    </div>
  );
}

export default Home;
