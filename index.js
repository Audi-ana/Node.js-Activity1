//To initize everything --> get it started for your use!

// using express module
const express = require('express')

// creating an instance of express module
const app = express()


//Actually using what you imported

app.get('/genre/:genre/year/:year', function(req,res){

    console.log(req.params)

   let genre = req.params.genre
   let year = req.params.year

   res.send(`This book belongs to ${genre} and was released in ${year}.`)
})






app.listen(3000,function() {
    console.log("Server is running...")
  })

  