const app = require('./app')
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 5000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})