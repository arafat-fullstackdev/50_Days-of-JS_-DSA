//? Implementation  Stack in JS
class Stack{

    // Array is used to implement stack
    constructor(){
        this.items= [];
    }
   //** Function to be implement
    // push(item);
   
    // peek();
    // isEmpty();
    isEmpty(){
        return this.items.length ===0;
    }
// Push element
push(element){
    this.items.push(element);
}
     // pop();
     pop(){
        if(this.isEmpty()){
            return "Stack is Empty!";
        }
        return this.items.pop();
    }
    // stack();
    // printStack();
    printStack(){
        return this.items.join("");
    }
}
 //? Primary test 
 // Stack Implement
 let stack = new Stack();

//  console.log(stack.isEmpty())


console.log(stack.isEmpty()); 

stack.push(11);
 stack.push(11);
 stack.push(11);
//console.log(stack());
console.log(stack.isEmpty());
console.log(stack.pop());

//onsole.log(stack.pop());
console.log(stack.printStack());
