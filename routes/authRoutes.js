const { Router } = require('express')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/users
router.post(
  '/',
  [
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password must be at least 6 chars long').isLength({ min: 6 })
  ],
  async (req, res) => {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), message: 'Invalid data' });
      }

      const { email, password } = req.body
      const person = await User.findOne({ email })
      if (person) {
        res.status(400).json({ message: 'User already exists' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      res.status(201).json({ message: 'User created successfully' })

    } catch (e) {
      res.status(500).json({ message: 'Something went wrong, try again' })
    }
  })

module.exports = router