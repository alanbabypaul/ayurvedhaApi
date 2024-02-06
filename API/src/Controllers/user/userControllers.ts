import { Request, Response } from 'express';
const users = require('../../models/userModel')
export class userController {
  static getAllUsers = async (req:Request, res:Response)=>
  { 
    // Implement logic to get all users
    const Users = await users.findAll();
    res.json({ message: 'Get all users', data :Users } );
  }

  static getUserById(req:Request, res:Response) {
    // Implement logic to get a user by ID
    res.json({ message: 'Get user by ID' });
  }

  // Implement other CRUD operations as needed
}
  