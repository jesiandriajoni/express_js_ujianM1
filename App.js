const express = require('express');
const Barang = require('./models/Barang');
const app = express();
const Connector = require("./models/Connector");
const nodemailer = require("nodemailer");

//==== 25-05-2023===========
// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "./views");

// app.get("/", (req, res) => {
//   const imageUrl1 = "https://img.freepik.com/free-photo/psychedelic-paper-shapes-with-copy-space_23-2149378246.jpg?w=1060&t=st=1685019807~exp=1685020407~hmac=3675dbebd20331e451d6887a1ce15484a00232fe7059019da6e5b125ed6e9309";
//   const imageUrl2 = "https://img.freepik.com/free-vector/popular-social-media-logo-collection_1361-348.jpg?w=740&t=st=1685021242~exp=1685021842~hmac=ec3cac78463237cdbb61586ecfa6969b26b4b9cdd00aac1f420c36716570bc02";
//   const imageUrl3 = "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?w=740&t=st=1685023053~exp=1685023653~hmac=22a36fc3aecf7f42a18435e9b7081b2b24007ed6b89820ef94f50009661d5cd6";
//   const imageUrl4 = "https://img.freepik.com/free-photo/black-t-shirts-with-copy-space_53876-102012.jpg?w=740&t=st=1685023016~exp=1685023616~hmac=7fa6f521e59f4801c540760e7818285e1865fb35cfd4b27fa02522c385f5fd2f";
//   const images = [imageUrl1, imageUrl2, imageUrl3, imageUrl4];
//   res.render("index", { images });
// });

app.get("/", async (req, res) => {
  await Connector("barang").insert({
    namaBarang: "Huion Tablet",
    harga: 134000,
  });

  res.render("pages/index");
});


app.get("/about", (req, res) => {
  res.render("pages/about");
});

//====== 25-05-2023============

function getHandlerRequest(req, res) {
  res.send('Apa Kabar');
}


// ini artinya variabel adalah function dalam case ini
// let x = () => { };


/*
//anonymous function
app.get('/', (req, res) => {
  res.send("Hello Word");

});
app.listen(3000, () => {
  console.log("Example app listenig on port 3000");
});
*/

// console.log(x);

// URL dengan tambah url ex localhost:3000/name

app.get("/username/:id([0-9]+)", (req, res) => {
  let usernamex = req.params.id;
  res.send("Hello Apa Kabar? " + usernamex + "");
});

//URL langsung tanpa slice ke dua ex localhost:3000/nama url
// app.get("/:username", (req, res) => {
//   let usernamex = req.params.username;
//   res.send("Hai Apa Kabar " + usernamex + "!");
// });

// app.get("/", (req, res) => {
//   console.log(req.query);
//   res.send(`Hello Apa Kabar ${req.query.username} password Anda adalah ${req.query.password}`);
// });

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/contacts", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/submit-contacts", (req, res) => {
  console.log(req.body.name);
  res.status(200).send(`Yok bisa ${req.body.name} pasti dong`);
});

//
app.get("user/:username", (req, res) => {
  let username = req.params.username;
  res.send("Hello Apa kabar" + username + "");
});
//

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
})
