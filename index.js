const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const hbs = require('hbs');
const app = express();

const publicDirectoryPath = (path.join(__dirname,'public'));
const viewsPath = path.join(__dirname,'/templates/views');
const partialsPath = path.join(__dirname,'/templates/partials');

app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));

app.get('',(req, res)=>{
    res.render('index')
  })

const port = process.env.PORT || 3000