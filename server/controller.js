
//require our data json file
const users = require('../users.json');

module.exports = {
    getAllUsers: (req, res) => {
        // res.status(200).send(users)
        if(req.query.email){
            var filteredUsers = users.filter(e => {
               return e.email.includes(req.query.email)
            })
            return res.status(200).send(filteredUsers)
        }
        

    },

    getUserById: (req, res) => {
        const user = users.find(e => {
            return e.id === parseInt(req.params.id)
        })
        if(!user){
            res.status(500).send('user not in list')
        }
        res.status(200).send(user)
    }
}

