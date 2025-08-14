// A simple game programme to guess a number between 1 to 100;

const game_num = 4;

let user = prompt("guess me, i'm natural number but less than 10.");

let life = 4
if (user < 10) {
    do {

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

        if (user != game_num) {

            if (life > 0) {
                user = prompt(`${life}chance left,
                    Try again.`);
            }
            else {
                console.log("game over!")
            }


        }
    }

    while (life > 0 && user != game_num);
}

else {
    console.log("No I'm less than 10")
}