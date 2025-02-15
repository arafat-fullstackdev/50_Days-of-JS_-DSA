//? Stacks
// function: push,pop,peek,length
var letters =[];
//var word= "racecar";
var word= "freeCodeCamp";
var rord="";

//put letter of word in to stack
for(var i =0; i<word.length; i++){
    letters.push(word[i]);
}

//pop of stack reverse wword
for(var i =0; i<word.length; i++){
    rord += letters.pop();
}

if(rord === word){
    console.log(word + "Is Palindrome");
} else{
    console.log(word + 'Is not Palindrome');
}
