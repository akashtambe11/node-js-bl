class ArrayStack {
    constructor() {
        this.stack = new Array();
        this.top = -1;
    }
    push(value){
            this.top++;
            this.stack[this.top] = value;
        
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

    balencePara(str){
        for(let i = 0; i < str.length; i++){

            let letter = str.charAt(i);
                           
            if(letter == '(' || letter == '[' || letter == '{') {
                this.push(letter);
                                       
            }else{
                
                switch(letter){
                    case ')':
                        if(this.peek() == '(') {
                            this.pop();   
                        }
                        break;
                    
                    case ']':
                        if(this.peek() == '[') {
                            this.pop(); 
                        }
                        break;
                
                    case '}':
                        if(this.peek() == '{') {
                            this.pop(); 
                        }
                        break;
                }
            }   
        }
        
        if(this.top == -1)
            return true;
        else
            return false;
    }
    
}

module.exports = new ArrayStack();