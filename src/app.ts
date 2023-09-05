import express from 'express'

import { router } from './routes'

const app = express()

// Rules
app.use(express.json())
app.use('/api/v1', router)

export { app }
