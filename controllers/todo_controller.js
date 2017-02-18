const index = (req, res, next) => {
  req.app.get('db').todo.find((err, result) => {
    if (err) {
      return next(err)
    }
    res.json(result)
  })
}

const create = (req, res, next) => {
  req.app.get('db').todo.save({
    text: req.body.text,
    createdAt: new Date()
  }, (err, result) => {
    if (err) {
      return next(err)
    }
    res.json(result)
  })
}

const put = (req, res, next) => {
  req.app.get('db').todo.save({
    id: req.params.id,
    text: req.body.text
  }, (err, result) => {
    if (err) {
      return next(err)
    }
    res.json(result)
  })
}

const remove = (req, res, next) => {
  req.app.get('db').todo.destroy({
    id: req.params.id
  }, (err, result) => {
    debugger
    if (err) {
      return next(err)
    } else if (!result) {
      return res.status(404).send('not found')
    }
    res.json(result)
  })
}

module.exports = {
  index,
  create,
  put,
  remove
}
