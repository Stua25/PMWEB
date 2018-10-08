const express = require('express'), 
router = express.Router();

router.get('/:a/:n', (req, res)=>{
    console.log('You got Here!')
    var a =  parseInt(req.params.a);
    var n = parseInt(req.params.n);
    var result = calculate(a, n)
    var obj = {base:a, pow:n, result:result}
    var json = JSON.stringify(obj)
    res.json(obj);
});

function factorail(n) {
    if(n==0){
        return 1
    }
    return n * factorail(n-1)
    
}

function calculate(a, n) {
    
    var den  = 0;
    var num = (Math.pow(a,n)) / factorail(n);
    // console.log('Num: '+ num);
    
    

    for (let index = 0; index <= n; index++) {
        den +=parseFloat(
            (Math.pow(a,index)) / (factorail(index))
        ); 
        console.log("Den "+index+" : "+den)      
    };

    console.log(num/den)
    return num/den; 
}



module.exports = router;