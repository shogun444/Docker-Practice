import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express()
const prisma = new PrismaClient()



app.get('/',async (req,res)=>{

const data =  await prisma.user.findMany({})

  res.json({msg : data})
})

app.post('/',async(req,res)=>{
  await prisma.user.create({
    data  : {
      username : Math.random().toString(),
      password : Math.random().toString()
    }
  })
  res.json({msg : "Hello Post Endpoint"})
})

app.listen(3000)