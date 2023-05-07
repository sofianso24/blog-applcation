import jwtPackage from "jsonwebtoken";
import bcrypt from "bcrypt";

import { User } from "../models/user.js"



// Register a new user

export const register = async (req, res) => {
    try {
      const { email, password, username } = req.body;
  
      // Check if the user already exists

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      // Hash the password

      const hashedPassword = await bcrypt.hash(password, 12);
  
      // Create a new user

      const user = new User({ email, password: hashedPassword, username });
      await user.save();
  
      // Generate a JWT token

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  
      res.status(201).json({ user: user._id, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };


// log in 

 export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Compare the password

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  
      res.status(200).json({ user: user._id, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  // log out

  export const logout = async (req, res) => {
    try {
        // Remove user's token from the database

        req.user.tokens = req.user.tokens.filter(
          (token) => token.token !== req.token
        );
        await req.user.save();
    
        res.send({ message: "Logged out successfully" });
      } catch (error) {
        res.status(500).send({ error: "Unable to logout" });
      }
    }