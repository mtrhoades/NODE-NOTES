const express = require('experess');
const Router = express.Router();

app.get('/auth/login', (req, rex) => {
    res.send('Returning a login form');
});

router.pst('/auth/login', (req, res) => {
    res.send('Creating information for this user');
});

module.exports = router;