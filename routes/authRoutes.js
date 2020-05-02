const { Router } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router()

// /api/sign_up
router.post('/sign_up', async (req, res) => {
  try {

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