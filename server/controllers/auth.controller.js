const jwt = require('jsonwebtoken')
const keys = require('../keys/index')
const User = require('../models/user.model')

module.exports.login = async (req, res) => {
  const candidate = User.findOne({login: req.body.login})
  if (candidate.login) {

    const isPasswordCorrect = req.body.password === candidate.password
    console.log(isPasswordCorrect)
    if (isPasswordCorrect) {

      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, keys.JWT, {expiresIn: 60 * 60})
      res.json({token})

    } else {
      res.status(401).json({message: 'Пароль неверен'})
    }

  } else {
    res.status(404).json({message: 'Пользователь не найден'})
  }
}

module.exports.createUser = (req, res) => {

}
