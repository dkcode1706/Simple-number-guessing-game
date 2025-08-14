// A simple game programme to guess a number between 1 to 100;

const game_num = 4;

// let user = prompt("guess me, i'm natural number but less than 10.");
let user = undefined;
// let user =7;

let life = 3
if (user != game_num) {
    do {

        // if (user < 10) {
        if (life > 0) {
            user = prompt(`${life}chance left,
                    Try again.`);
            // user= 5;
        }
        else {
            console.log("game over!")
        }


        // }

        while (user <= 10 && user > 0) {
            switch (user) {
                case 1: {
                    console.log("no, I'm  greater.")
                    break;
                }
                case 2: {
                    console.log("no, I'm one of it's family")
                    break;
                }
                case 3: {
                    console.log("no, I'm slightly greater.")
                    break;
                }
                case 4: {
                    console.log("congratulation!You found out me.")
                    break;
                }
                case 5: {
                    console.log("no,I'm not in it's multiplier also.")
                    break;
                }
                case 6: {
                    console.log("no,but we both are in common table of any.")
                    break;
                }
                case 7: {
                    console.log("no, wrong guess.")
                    break;
                }
                case 8: {
                    console.log("no,but it bring my 'HCF' to 2.")
                    break;
                }
                case 9: {
                    console.log("no, I'm more smaller.")
                    break;
                }
                case 10: {
                    console.log("no, I'm much more smaller.")
                    break;
                }
            }
            break;
        }
        --life;





        // console.log(life);


    }

    while (life > 0 && user != game_num);
}

else {
    console.log("No I'm less than 10")
}