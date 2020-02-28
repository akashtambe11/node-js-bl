class ArrayStack {
    constructor() {
        this.stack = new Array();
        this.top = -1;
    }
    push(value){ 
        try{ 
     
            if(value == undefined || value == null || value.length == 0)  throw "input should not be undefined or null"
            // if(isNaN(value))                                              throw "input should be number"
           
            this.top++;
            this.stack[this.top] = value;             
        }
        catch(e){
            return e;
        } 
    }

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
    peek(){
        return this.stack[this.top];
        
    }
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

module.exports = new ArrayStack();