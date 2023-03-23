const bodyParser = require("body-parser"); //extracts the entire body portion of an incoming request stream and exposes it on req.body
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator"); //validate user data
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //is a Nodejs and Express middleware to log HTTP requests and errors, and simplifies the process.

require("dotenv").config();

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
// const payment_getway = require("./routes/payment_getway");

//app
const app = express();
//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DATABASE CONNECTED"));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(
  cors({
    origin: "http://localhost:5500",
  })
);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

//routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 200000, name: "Learn CSS Today" }],
]);

app.use("/api/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("running");
});
