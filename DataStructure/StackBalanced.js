var util = require('../Utility/DSStackBalancedUtility');

balancedParathesis = () => {

        util.push(20);
        util.push(30);
        util.push(40);
        util.push(50);
        util.push(60);

        //Printing
        while(!util.isEmpty) {
            let value = util.pop();
            console.log(value);
            
        }

}

balancedParathesis();