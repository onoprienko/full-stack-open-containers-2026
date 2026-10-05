const express = require('express')
const router = express.Router()
const redis = require('../redis')

router.get('/', async (req, res) => {
  const addedTodos = await redis.get('addedTodos')
  res.send({
    added_todos: Number(addedTodos),
  })
})

module.exports = router
