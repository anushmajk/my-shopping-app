import express, { Request, Response } from 'express'
import cors from 'cors'
import products from './data/products'
const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products)
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})