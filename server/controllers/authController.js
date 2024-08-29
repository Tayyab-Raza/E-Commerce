const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require('jsonwebtoken');

const test = (req, res) => {
  res.json("test is working");
};

//SignUp
const signupUser = async (req, res) => {
  try {
    const { name, email, password, confpassword } = req.body;

    //check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }

    //check if password was entered
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required and should be 6 characters long",
      });
    }

    //check if confirm password was correct
    if (confpassword !== password) {
      return res.json({
        error: "password does not match",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "this email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);
    // Create user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//Login
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    // check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found!"
      });
    }

    // check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
     jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
        if(err) throw err;
        res.cookie("token", token, {
          maxAge: 90 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "none",
          secure: true,
      }).json({user});
      })
    }
    if(!match){
      res.json({
        error: "Passwords do not match"
      });
    }
  } catch (error) {
    console.log(error)
  }
}

const getProfile = (req, res) => {
const {token} = req.cookies;
if (token) {
  jwt.verify( token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) throw err;
    res.json(user)
  })
} else{
  res.status(401).json({ error: "Unauthorized" });
}
}

module.exports = {
  test,
  signupUser,
  loginUser,
  getProfile
};
