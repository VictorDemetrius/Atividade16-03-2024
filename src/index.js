const express = require("express");
const fetchAPI = require("./services/request")
const handlebars = require("express-handlebars").engine

const app = express()

<<<<<<< HEAD
=======
// Fazendo alteração no codigo pra subir para nova branch


>>>>>>> a6a08be7307385656ab32b299e027de2e493f3d9

const portaRede = 8081; 
const pageExtensao = "hbs" 

app.use('/public', express.static(__dirname + '/public'))
app.use(express.json())

app.set("views", "./src/views")


app.engine(pageExtensao, handlebars({defaultLayout: "main"}))
app.set("view engine" , pageExtensao)

app.get("/", async (req, res) => {
    res.render("index.hbs")
})

app.get("/request", async (req, res) => {
    const {genero} = req.query
    fetchAPI(`Liste séries sobre o gênero: ${genero}`)
        .then(data => res.render("request.hbs", {data: data.choices[0].message.content}))
   
})


app.listen(portaRede, () => {
    console.log("[express] Working http://localhost:" + portaRede);
})
