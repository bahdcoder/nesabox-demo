const Path = require('path')
const Express = require('express')

const app = Express()

app.get('*', (req, res) => {
    res.sendFile(Path.resolve(`${__dirname}/index.html`))
})

app.listen(process.env.PORT || 4000)
