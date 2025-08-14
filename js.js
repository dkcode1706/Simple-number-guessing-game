// A simple game programme to guess a number between 1 to 10;
/*
ROUGH Planing

part 1 = user entry number;
part 2 = object and function;
part 3 = retry user entry;
part 4 = part 2;
part 5 = game over or correct guess;

FEATURES
1 = Show remaining tries.
2 = Give three turn.
3 = Show user gussing probability by compairing 100 average entries.
4 = Give hints to guess right one.
5 = Can be dynamic now or in future.(optional)



*/


const game_num = 1;
let user = 4;
// let user = prompt("enter number between 1 to 10");
let life = 3;
let guess = [
    "no, I am  greater.",
    "no, I'm one of it's family",
    "no, I'm slightly greater.",
    "congratulation!You found out me.",
    "no,I'm not in it's multiplier also.",
    "no,but we both are in common table of any.",
    "no, wrong guess.",
    "no,but it bring my 'HCF' to 2.",
    "no, I'm more smaller.",
    "no, I'm much more smaller."
]
function entries() {
    return guess[user - 1];

}


if (user > 10) {
    console.log("Please enter number between 1 to 10")
}
else {

    console.log(entries())




}



