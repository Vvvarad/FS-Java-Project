const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path: './password.env'});

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST, 
  user: process.env.DATABASE_USER,       
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');



db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  } 
    console.log('Connected to the MySQL database.');        
});


app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));



// app.get("/", (req, res) => {    
//     res.render("home");
// });

// app.get("/login", (req, res) => {    
//     res.render("login");
// });

// app.get("/signup", (req, res) => {    
//     res.render("signup");
// });

// app.get("/aboutus", (req, res) => {    
//     res.render("aboutus");
// });


app.listen(8080, () => {
  console.log('Server is running on port 8080');
}); 