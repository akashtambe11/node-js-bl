
/**
 * @class ArrayStack to Create empty stack.
 */
class ArrayStack {
    constructor() {
        this.stack = new Array();
        this.top = -1;
    }

    /**
    * @method push() - To push data in stack.
    */
    push(value){ 
        try{ 
            /**
             * @description To handle execeptions.
             */
            if(value == undefined || value == null || value.length == 0)  throw "input should not be undefined or null"
           
            this.top++;
            this.stack[this.top] = value;             
        }
        catch(e){
            return e;
        } 
    }

    /**
    * @method pop() - To push data in stack.
    */
    pop(){
     
        if(this.top == -1){
            console.log("Stack is Empty\n");
            return;
        }else{
            let temp = this.stack[this.top];
            this.stack[this.top] = null;
            this.top--;
        }  
    }

    /**
    * @method push() - To remove data in stack.
    */
    peek(){ 
        return this.stack[this.top];

    }

    /**
    * @method printStack() - To print data in stack.
    */
    printStack() {
       
        if(this.top == -1){
            console.log("Stack is Empty\n");
            return;
        }else{
            for(let i = this.top; i >= 0; i--) {
                console.log("Position stack["+i+"] = "+this.stack[i]);
            }
        }
    }
   
}

/**
 * @description Create object of ArrayStack.
 */
module.exports = new ArrayStack();