import axios from "axios";

export const getProducts = async (setProducts) => {
  const res = await axios.get("http://localhost:3000/products");
  setProducts(res.data);
};

export const getCategories = async (setCategories) => {
  const res = await axios.get("http://localhost:3000/categories");
  setCategories(res.data);
};

export const getProductsBasedOnCategory = async (categoryName, setProducts) => {
  if (categoryName === "All") {
    getProducts(setProducts);
  } else {
    const res = await axios.get("http://localhost:3000/products");
    var data = res.data.filter((product) => {
      return product.category === categoryName.toLowerCase();
    });

    setProducts(data);
  }
};
