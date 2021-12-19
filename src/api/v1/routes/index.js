const { Router } = require('express');
const router = Router();



router.use('/user',require('./user'));

router.get('/', (req, res) => {
    res.json({
        message: 'Hello Agrivision!',
    });
});

module.exports = router;
