import config from './config.json'
import express from 'express'
import getRequest from './getMeals/apiRequest'

const app = express()

app.use(getRequest)

app.listen(config.port, () => console.log(`Meal Helper backend listening on port ${config.port}`))