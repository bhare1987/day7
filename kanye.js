console.log("Welcome to Jouney to the (Kanye) West!");
var answer1 = prompt("Congratulations! You have been chosen to spend the day with Kanye West. This is a rare honor Mr. West bestows only upon his most loyal subjects. Mr. West sets the itinerary, but he gives you the choice. What do you want to do? 1. Go to the bike store. 2. Go to the Grammys 3. Go get some food.");

if (answer1 === "1" || answer1 === "Go to the bike store"){
  var answer1_1 = prompt("'I make awesome decisions in bike stores!' exclaims Kanye. You jump in his ride and cruise down to the bike store. Racks of bikes of all different shapes, colors, and sizes are yours for the taking. Kanye snaps his fingers to get you back on task. 'You are going to help me find the perfect bike for Kim.' Do you choose 1. The stylish road bike 2. The practical beach cruiser 3. The Big Wheel Tricycle");

  if (answer1_1 === "1" || answer1_1 === "The stylish road bike") {
    var answer1_1_1 = prompt("'Nah, I like the other one better,' says Kanye, 'and I know style. I been fly so long I feel asleep on the plane!' He begins to bike around the store. What do you do? 1. Agree with Kanye 2. Stick a bicycle pump in the spokes");

    if (answer1_1_1 === "1" || answer1_1_1 === "Agree with Kanye") {
      console.log("'Kim's going to love this. I'm done with you now. Leave me.'");
      kanyeWin();
    } else {
      kanyeGuard();
    };
  } else if (answer1_1 === "2" || answer1_1 === "The practical beach cruiser") {
    var answer1_1_2 = prompt("'Nah, I like the other one better,' says Kanye, 'and I know style. I been fly so long I feel asleep on the plane!' He begins to bike around the store. What do you do? 1. Agree with Kanye 2. Stick a bicycle pump in the spokes");

    if (answer1_1_2 === "1" || answer1_1_2 === "Agree with Kanye") {
      console.log("'Kim's going to love this. I'm done with you now. Leave me.'");
      kanyeWin();
    } else {
      kanyeGuard();
    };
  } else if (answer1_1 === "3" || answer1_1 === "The Big Wheel Tricycle") {

  } else {
    kanyePout();
  };

} else if (answer1 === "2" || answer1 === "Go to the Grammys") {

} else if (answer1 === "3" || answer1 === "Go get some food") {

} else {
  kanyePout();
};

function kanyePout() {
  console.log("Your unwillingness to play by Kanye's rules has angered Kanye. He takes his ball and goes home. You lose.");
};

function kanyeGuard() {
  console.log("The elite team of the Kanye Guard emerges from the shadows and murders you with razor sharp copies of Kanye's platinum albums. You are dead.");
};

function kanyeWin() {
  console.log("You have survived the Journey to the Kanye West. Congratulations?");
};
