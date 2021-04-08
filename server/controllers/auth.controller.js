const jwt = require('jsonwebtoken')
const keys = require('../keys/index')
const User = require('../models/user.model')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({login: req.body.login})
  if (candidate) {

    const isPasswordCorrect = req.body.password === candidate.password
    if (isPasswordCorrect) {

      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, keys.JWT, {expiresIn: 60 * 60})
      console.log(token)
      res.json({token})

    } else {
      res.status(401).json({message: 'Пароль неверен'})
    }

  } else {
    res.status(404).json({message: 'Пользователь не найден'})
  }
}

module.exports.createUser = async (req, res) => {
  const candidate = await User.findOne({login: req.body.login})

  if (candidate) {
    res.status(409).json({message: 'Пользователь с таким login уже сущесвует'})
  } else {

    const user = new User({
      login: req.body.login,
      password: req.body.password
    })

    await user.save()
    res.status(201).json(user)
  }
}
