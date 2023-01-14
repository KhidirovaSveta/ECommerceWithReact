const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

const products = [
  {
    id: 1,
    name: "Wood Stand",
    unitPrice: 30.00,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    color: {
      img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07.jpg?v=1641206171",
      img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-a.jpg?v=1641206171",
    //   img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-b.jpg?v=1641206171",
    //   img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-c.jpg?v=1641206171",
    },
  },

  {
    id: 2,
    name: "Wood Kitchen Stand",
    unitPrice: 21.00,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    color: {
    //   img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07.jpg?v=1641206171",
    //   img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-a.jpg?v=1641206171",
      img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-b.jpg?v=1641206171",
      img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-c.jpg?v=1641206171",
    },
  },
  {
    id: 3,
    name: "Wooden Stand",
    unitPrice: 30.00,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    color: {
    //   img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07.jpg?v=1641206171",
    img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01.jpg?v=1641206116",
      img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01-a.jpg?v=1641206116",
      img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01-b.jpg?v=1641206116",
    },
  },
];

app.get("/", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
