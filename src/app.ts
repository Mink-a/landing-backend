import express from 'express'
import { db } from './config/db.config'
import { router } from './routes/post.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/posts', router)

db.then(() => {
    app.listen(7070, () => console.log('Server is listening on port 7070'))
})