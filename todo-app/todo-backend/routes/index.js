const express = require('express')
const router = express.Router()
const redis = require('../redis')
const configs = require('../util/config')

/* GET index data. */
router.get('/', async (req, res) => {
  const visits = Number(await redis.get('visits')) || 0
  await redis.set('visits', visits + 1)

  const updatedVisits = await redis.get('visits')

  res.send({
    ...configs,
    visits: updatedVisits,
  })
})

module.exports = router
