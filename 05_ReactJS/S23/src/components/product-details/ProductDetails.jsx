import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const params = useParams(); // params = {id : 1}
  const [productdetails, setProductDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProductDetails(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div className="product-details">
      <section>
        <img src={productdetails && productdetails.image} alt="" />
      </section>
      <section className="details">
        <div>
          <h1 style={{ color: "tomato", marginBottom: "10px" }}>
            Product Details
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            omnis! Dolor, quas consequuntur? Nemo eligendi vel corrupti aliquid
            inventore, reprehenderit impedit possimus neque id. Adipisci
            perspiciatis cum facere possimus provident.
          </p>
          <br />
          <hr />
        </div>
        <div className="products-info">
          <dl>
            <table width={"80%"}>
              <tr>
                <td>
                  <dt>Name</dt>
                  <dd>{productdetails && productdetails.name}</dd>
                </td>
                <td>
                  {" "}
                  <dt>Price</dt>
                  <dd>{productdetails && productdetails.price}</dd>
                </td>
              </tr>
            </table>
            <table width={"80%"}>
              <tr>
                <td>
                  <dt>Category</dt>
                  <dd>{productdetails && productdetails.category}</dd>
                </td>
                <td>
                  <dt>Rating</dt>
                  <dd>{productdetails && productdetails.rating}</dd>
                </td>
              </tr>
            </table>
            <dt>Description</dt>
            <dd>{productdetails && productdetails.description}</dd>
          </dl>

          <div className="btns">
            <button>Back to Products</button>
            <button>Add to Cart</button>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default ProductDetails;
