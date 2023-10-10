import express from 'express'
import {getRows,getFilterRow}from './database.js'
import cors from 'cors'


var data;
const app = express()

app.use(cors())

app.get("/dashdb",async (req,res)=>{
   data = await getRows()
    res.send(data)
})

app.get("/dashdb/:name",async (req,res)=>{
  const name =req.params.name
  data = await getFilterRow(name)
   res.send(data)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(8080,()=>{
    console.log('Server is running on port 8080')
  })