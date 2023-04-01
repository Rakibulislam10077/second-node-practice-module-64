const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: 'Rakibul islam', age: 19, address: 'Chaprashir hat' },
    { id: 2, name: 'jaker hossain', age: 19, address: 'Chaprashir hat' },
    { id: 3, name: 'zayed hossain', age: 26, address: 'Chaprashir hat' },
    { id: 4, name: 'Rubel khan', age: 24, address: 'Chaprashir hat' },
    { id: 5, name: 'Mijan uddin', age: 24, address: 'Chaprashir hat' },
    { id: 6, name: 'sharif khan', age: 23, address: 'Chaprashir hat' },
    { id: 7, name: 'Nizam uddin', age: 27, address: 'Chaprashir hat' },
]

app.get('/', (req, res) => {
    res.send('practice practice practice practice practice practice is always good')
})

// app.get('/users', (req, res) => {
//     res.send({ id: 1, name: 'Rakibul islam', age: 19, address: 'Chaprashir hat' })
// })

app.get('/users', (req, res) => {
    // filter by search query parameter 
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port)
})


app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
}) 