//const express = require('express');
import express, { response } from 'express'

const app = express()

//methods http / API RESTful
//GET, POST, PUT, PATCH, DELETE

app.get('/games', (req, res) => {
  return res.json([])
})

app.post('/ads', (req, res) => {
  return res.status(201).json([])
})

app.get('/games/:id/ads', (req, res) => {
  //const gameId = req.params.id;

  return res.json([
    {id: 1, anuncio: 'Anuncio 1'},
    {id: 2, anuncio: 'Anuncio 2'},
    {id: 3, anuncio: 'Anuncio 3'},
    {id: 4, anuncio: 'Anuncio 4'},
    {id: 5, anuncio: 'Anuncio 5'},
  ])
})

app.get('/ads/:id/discord', (req, res) => {
  //const adId = req.params.id;

  return res.json([
    
  ])
})

app.listen(3333);
//http://localhost:3333/ads