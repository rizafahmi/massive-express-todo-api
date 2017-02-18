const find = (req, res, next) => {
  req.app.get('db').findUserByCredentials([
    req.body.email,
    req.body.password
  ], (err, result) => {
    if (err) {
      return next(err)
    } else if (!result[0]) {
      return res.status(404).send('Not Found')
    }
    res.status(201).json(result[0])
  })
}

const create = (req, res, next) => {
  req.app.get('db').createUser([
    req.body.email,
    req.body.password
  ], (err, result) => {
    if (err) {
      return next(err)
    }
    res.status(201).json(result[0])
  })
}

module.exports = {
  find,
  create
}
