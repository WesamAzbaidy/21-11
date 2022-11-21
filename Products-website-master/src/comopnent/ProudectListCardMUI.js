import { useState, useEffect } from "react";
import ProductsMUI from "./ProductsMUI";
import axios from "axios";
import "./product.css";
import { Grid } from "@mui/material";
function ProudectListCardMUI() {
  const apiURL = "https://fakestoreapi.com/products";
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <div>
      <h2 className="text-center m-4 font">Products</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => {
          return (
            <div className="col-md-4 col-sm-6 col-lg-3" key={product.id}>
              <ProductsMUI product={product} />
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
export default ProudectListCardMUI;
