const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'user route',
    });
});

module.exports = router;
