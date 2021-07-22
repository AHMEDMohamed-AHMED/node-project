const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 3000 || process.env.port;
const path = require('path')
const request = require('request')

app.set('view engine', 'hbs');

const viewPath = path.join(__dirname, '../templetes/views')
app.set('views', viewPath)

const partialPath = path.join(__dirname, '../templetes/partial')
hbs.registerPartials(partialPath)





const url = "http://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=b7a3b6383b7643619113428a691b5837"

request({
    url,
    json: true
}, (error, response) => {
    app.get("", (req, res) => {
        res.render("index", {
            data: response.body.articles  //: object 
        })
    })
    if (error) {
        console.log('error occurred');
    }
})


app.listen(port, () => {
    console.log("listen on port 3000 .. server is up");
});