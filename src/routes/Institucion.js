const express = require('express'), 
router = express.Router(); 

router.get('/', (req, res)=>{
    res.json({
        success: true,
        Data: [] 
    });

});

module.exports = router;