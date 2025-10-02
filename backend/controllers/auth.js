const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST, 
  user: process.env.DATABASE_USER,       
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD
});

exports.signup = (req, res) => {
    console.log(req.body);

    const {name, email, phone, password} = req.body;

    db.query(`SELECT email FROM user WHERE email = ?`, [email], async (err, results) => {
        if(err) {
            console.log(err);
        }   
        if(results.length > 0) {
            return res.render('signup', {
                message: 'That email is already in use'
            });
        }   else if(phone.length !== 10) {
            return res.render('signup', {
                message: 'Phone number is not valid. It must be exactly 10 digits.'
            });
        }

         let hashedPassword =  await bcrypt.hash(password, 8);
         console.log(hashedPassword);

         db.query(`INSERT INTO user SET ?`, {name: name, email: email, phone: phone, password: hashedPassword}, (err, results) => {
            if(err) {
                console.log(err);
            } else {
                console.log(results);
                return res.render('signup', {
                    message: 'User registered! You can login now.'
                });
            }

    });

    }
    );
}