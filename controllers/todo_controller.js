const TodoController = (req, res, next) => {
  req.app.get('db').todo.find((err, result) => {
    if (err) return next(err)
    res.json(result)
  })
}

module.exports = TodoController
