//const express = require('express');
import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
  return res.json([
    {id: 1, anuncio: 'Anuncio 1'},
    {id: 2, anuncio: 'Anuncio 2'},
    {id: 3, anuncio: 'Anuncio 3'},
    {id: 4, anuncio: 'Anuncio 4'},
    {id: 5, anuncio: 'Anuncio 5'},
  ])
})

app.listen(3333);
//http://localhost:3333/ads