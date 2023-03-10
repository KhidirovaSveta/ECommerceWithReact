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
    unitPrice: 30.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07.jpg?v=1641206171",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-a.jpg?v=1641206171",
    //   img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-b.jpg?v=1641206171",
    //   img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-c.jpg?v=1641206171",
    // },
    sale: "52%",
    priceOff: "£50.00",
    // size: {
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    // },
  },

  {
    id: 2,
    name: "Wood Kitchen Stand",
    unitPrice: 21.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    //   img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07.jpg?v=1641206171",
    //   img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-a.jpg?v=1641206171",
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-c.jpg?v=1641206171",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-07-b.jpg?v=1641206171",
    // },
    // size: {
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    // },
  },
  {
    id: 3,
    name: "Wooden Stand",
    unitPrice: 30.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01.jpg?v=1641206116",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01-a.jpg?v=1641206116",
    img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01-b.jpg?v=1641206116",
    img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01-c.jpg?v=1641206116",
    // },
    sale: "40%",
    priceOff: "£50.00",
    // size: {
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    // },
  },

  {
    id: 4,
    name: "Wood Bowl",
    unitPrice: 30.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-03-c_81d7baef-8f88-4e77-baa0-53848131b22f.jpg?v=1641206188https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01.jpg?v=1641206116",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-03-a_35fd05e1-23aa-4301-a342-234556352ffd.jpg?v=1641206188",
    img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-03-b_a2a4a852-0de0-4838-aeef-edebdb17f974.jpg?v=1641206188",
    // },
    // size: {
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    // },
  },

  {
    id: 5,
    name: "Ceramic Kettle",
    unitPrice: 22.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-05.jpg?v=1641206148",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-05-a.jpg?v=1641206148",
    img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-05-b.jpg?v=1641206148",
    img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-05-c.jpg?v=1641206148",
    // },
    // size: {
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    // },
  },
  {
    id: 6,
    name: "Wooden Bowl Set",
    unitPrice: 18.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-03_7784cde9-2837-420e-8053-aad5810826da.jpg?v=1641206188",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-03-c_81d7baef-8f88-4e77-baa0-53848131b22f.jpg?v=1641206188https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-01.jpg?v=1641206116",
    img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-03-b_a2a4a852-0de0-4838-aeef-edebdb17f974.jpg?v=1641206188",
    // },
    sale: "52%",
    priceOff: 50.0,
    // size: {
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    // },
  },

  {
    id: 7,
    name: "Antique Kettle",
    unitPrice: 18.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-04.jpg?v=1641206144",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-04-c.jpg?v=1641206144",
    img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-04-a.jpg?v=1641206058",
    img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-04-b.jpg?v=1641206057",
    // },
    // size: {
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    // },
  },

  {
    id: 8,
    name: "Ceramic Stand",
    unitPrice: 18.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-06.jpg?v=1641206167",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-06-a.jpg?v=1641206167",
    img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-06-b.jpg?v=1641206167",
    img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-06-c.jpg?v=1641206167",
    //   },
    // size: {
    s: "S",
    m: "M",
    l: "L",
    xl: "XL",
    // },
  },
  {
    id: 9,
    name: "Antique Kettle",
    unitPrice: 11.0,
    Availability: "In Stock",
    description:
      "Lorem Ipsum is simply dummy the printing and typesetting industry been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    // color: {
    img1: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-02.jpg?v=1641206132",
    img2: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-02-a.jpg?v=1641206132",
    img3: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-02-b.jpg?v=1641206132",
    img4: "https://cdn.shopify.com/s/files/1/0552/1991/2785/products/art-store-product-02-c.jpg?v=1641206132",
    // },
    sale: "26%",
    priceOff: "£50.00",
    // size: {

    s: "24X16",
    m: "24X18",
    l: "24X20",
    xl: "28X22",
    // }
  },
];

const products2 = [
  {
    id: 1,
    descriptionItem: "Your passion is waiting for your courage to catch up.",
    img: "https://cdn.shopify.com/s/files/1/0552/1991/2785/articles/art-store-blog-01.jpg?v=1641193805",
  },
  {
    id: 2,
    descriptionItem: "The secret of getting ahead is getting started.",
    img: "https://cdn.shopify.com/s/files/1/0552/1991/2785/articles/art-store-blog-02.jpg?v=1641193805",
  },
  {
    id: 3,
    descriptionItem: "Without hustle, talent will only carry you so far.",
    img: "https://cdn.shopify.com/s/files/1/0552/1991/2785/articles/art-store-blog-03.jpg?v=1641193806",
  },
  {
    id: 4,
    descriptionItem: "It is more important to click with people.",
    img: "https://cdn.shopify.com/s/files/1/0552/1991/2785/articles/art-store-blog-04.jpg?v=1641193806",
  },
  {
    id: 5,
    descriptionItem: "Drawing is not what one sees, but what one .",
    img: "https://cdn.shopify.com/s/files/1/0552/1991/2785/articles/art-store-blog-05.jpg?v=1641193807",
  },
  {
    id: 6,
    descriptionItem: "The Achilles heel of an artist lies in the hope.",
    img: "https://cdn.shopify.com/s/files/1/0552/1991/2785/articles/art-store-blog-06.jpg?v=1641193807",
  },
];
app.get("/", (req, res) => {
  res.send(products);
});

app.get("/products2", (req, res) => {
  res.send(products2);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  const selectedUser = products.find((products) => products.id == id);
  if (selectedUser) {
    res.send(selectedUser);
    res.status(200);
  } else {
    console.log("there is no such user");
    res.status(404).json({ message: "there is no such user.." });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  console.log(`http://localhost:${port}/products2`);
});
