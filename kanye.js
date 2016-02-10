console.log("Welcome to Jouney to the (Kanye) West!");
var answer1 = prompt("Congratulations! You have been chosen to spend the day with Kanye West. This is a rare honor Mr. West bestows only upon his most loyal subjects. Mr. West sets the itinerary, but he gives you the choice. What do you want to do? 1. Go to the bike store. 2. Go to the Grammys 3. Go get some food.");

if (answer1 === "1" || answer1 === "Go to the bike store"){
  var answer1_1 = prompt("'I make awesome decisions in bike stores!' exclaims Kanye. You jump in his ride and cruise down to the bike store. Racks of bikes of all different shapes, colors, and sizes are yours for the taking. Kanye snaps his fingers to get you back on task. 'You are going to help me find the perfect bike for Kim.' Do you choose 1. The stylish road bike 2. The practical beach cruiser 3. The Big Wheel Tricycle");

  if (answer1_1 === "1" || answer1_1 === "The stylish road bike") {
    var answer1_1_1 = prompt("'Nah, I like the other one better,' says Kanye, 'and I know style. I been fly so long I feel asleep on the plane!' He begins to bike around the store. What do you do? 1. Agree with Kanye 2. Stick a bicycle pump in the spokes ");

    if (answer1_1_1 === "1" || answer1_1_1 === "Agree with Kanye") {
      kanyeKim();
      kanyeWin();
    } else {
      kanyeGuard();
    };
  } else if (answer1_1 === "2" || answer1_1 === "The practical beach cruiser") {
    var answer1_1_2 = prompt("'Nah, I like the other one better,' says Kanye, 'and I know style. I been fly so long I feel asleep on the plane!' He begins to bike around the store. What do you do? 1. Agree with Kanye 2. Stick a bicycle pump in the spokes");

    if (answer1_1_2 === "1" || answer1_1_2 === "Agree with Kanye") {
      kanyeKim();
      kanyeWin();
    } else {
      kanyeGuard();
    };
  } else if (answer1_1 === "3" || answer1_1 === "The Big Wheel Tricycle") {
      kanyeThreat();
      kanyeGuard();
  } else {
    kanyePout();
  };

} else if (answer1 === "2" || answer1 === "Go to the Grammys") {
    var answer1_2 = prompt("'My greatest pain in life is that I will never be able to see myself perform live. But everyone else will. Let's bounce,' says Kanye. You take Kanye's chopper to the Grammys and land on the red carpet. As you make your way to your seats, Kane sees that Drake has taken his seat. 'I'm about to throw some kazoo on this bitch! You got my back?' Do you 1. Have his back 2. Turn traitor and support Drake 3. Find T-Swift and see if she's dating anyone right now");

    if (answer1_2 === "1" || answer1_2 === "Have his back") {
      var answer1_2_1 = prompt("'Oh hell yeah, let's cut 'em up!' exclaims Kanye. You and Kanye run up on Drake. Things get heated quickly as Kanye grabs Drake and tries to lift him out of his seat. Drake's crew sees the scuffle and run over to help. What do you do? 1. Engage all of Drake's crew in hand to hand combat 2. Run like hell ");

      if (answer1_2_1 === "1" || answer1_2_1 === "Engage all of Drake's crew in hand to hand combat") {
        console.log("You got your ass beat and wind up in the hospital. Kanye sends you no flowers. Kanye didn't need the help to begin with. You lose.")
      } else if (answer1_2_1 === "2" || answer1_2_1 === "Run like hell") {
        kanyeDiss();
      } else {
        kanyePout();
      }

    } else if (answer1_2 === "2" || answer1_2 === "Turn traitor and support Drake") {
      var answer1_2_2 = prompt("Kanye does not take your betrayal well as you make your way over to Drake's side. Enraged, he attacks. Do you 1. Engage Kanye in hand to hand combat 2. Push Drake into Kanye 3. Run away");

      if (answer1_2_2 === "1" || answer1_2_2 === "Engage Kanye in hand to hand combat") {
        kanyeThreat();
        kanyeGuard();
      } else if (answer1_2_2 === "2" || answer1_2_2 === "Push Drake into Kanye") {
        console.log("Kanye stops and helps Drake up. 'That's some shady shit right there,' he says. Drake and Kanye team up and beat your ass. You lose.");
      } else if (answer1_2_2 === "3" || answer1_2_2 === "Run away") {
        kanyeDiss();
      } else {
        kanyePout();
      }

    } else if (answer1_2 === "3" || answer1_2 === "Find T-Swift and see if she's dating anyone right now") {
      var answer1_2_3 = prompt("You manage to track T-Swift down and start flirting your hardest. She seems into you, but then Kanye approaches. 'Yo Taylor, I'mma let you finish, but first I gotta deal with this traitor.' Do you 1. Apologize and appeal to Kanye's mercy 2. Pretend he's not there 3. Run!");

      if (answer1_2_3 === "1" || answer1_2_3 === "Apologize and appeal to Kanye's mercy") {
        console.log("'Sometimes I get emotional over fonts. And betrayal. But I forgive you,' says Kanye.");
        kanyeWin();
      } else if (answer1_2_3 === "2" || answer1_2_3 === "Pretend he's not there") {
        console.log("'You may be talented, but you're not Kanye West!' Kanye screams, and snaps his fingers.");
        kanyeGuard();
      } else if (answer1_2_3 === "3" || answer1_2_3 === "Run!") {
        kanyeDiss();
      } else {
        kanyeGuard();
      }

    } else {
      kanyePout();
    };

} else if (answer1 === "3" || answer1 === "Go get some food") {
  var answer1_3 = prompt("'I am going to order the salmon medium instead of medium well. I don't want to ruin the magic,' says Kanye. You jump on the back of his crotch rocket and ride down to Fish and Shizz. You are seated in the VIP section and given a menu. What do you order? 1. The salmon 2. The filet mignon 3. Doritos and dom perignon");

  if (answer1_3 === "1" || "The salmon") {
    var answer1_3_1 = prompt("'You can't copy Kanye!' says Kanye, and throws his drink in your face. 'You may be talented, but you're not Kanye West!' Do you 1. Get up and walk out 2. Dry your face and apologize 3. Flip the table");

    if (answer1_3_1 === "1" || answer1_3_1 === "Get up and walk out") {
      kanyeDiss();
    } else if (answer1_3_1 === "2" || answer1_3_1 === "Dry your face and apologize") {
      console.log("'That's ok son. It's not easy being me. Order something else and let's eat!'");
      kanyeWin();
    } else if (answer1_3_1 === "3" || answer1_3_1 === "Flip the table") {
      kanyeThreat();
      kanyeGuard();
    } else {
      kanyePout();
    }

  } else if (answer1_3 === "2" || "The filet mignon") {
    var answer1_3_2 = prompt("'You got beef with Kanye?' he asks. 'You wanna be startin' something with your food choice son?' Do you 1. Apologize. You don't want beef with Kanye 2. Say you just wanted some steak 3. Flip the table");

    if (answer1_3_2 === "1" || "Apologize. You don't want beef with Kanye") {
      console.log("'Smart choice son. You didn't want to beef with me. Ask Taylor'");
      kanyeWin();
    } else if (answer1_3_2 === "2" || "Say you just wanted some steak") {
      console.log("Kanye's a vegetarian. You have offended him.");
      kanyePout();
    } else if (answer1_3_2 === "3" || "Flip the table") {
      kanyeThreat();
      kanyeGuard();
    } else {
      kanyePout();
    };

  } else if (answer1_3 === "3" || "Doritos and dom perignon") {
    var answer1_3_3 = prompt("'You gonna order the Kanye in Kanye's favorite restaurant? That's bold son. I like you. You may ask me one question.' Do you ask 1. What he thinks of planes 2. What he thinks of fur pillows 3. What he thinks of apples");

    if (answer1_3_3 === "1" || answer1_3_3 === "What he thinks of planes") {
      console.log("Kanye says, 'I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle.'");
      kanyeWin();
    } else if (answer1_3_3 === "2" || answer1_3_3 === "What he thinks of fur pillows") {
      console.log("Fur pillows are actually hard to sleep on");
      kanyeWin();
    } else if (answer1_3_3 === "3" || answer1_3_3 === "What he thinks of apples") {
      console.log("If you have an apple and I have an apple and we exchange these apples then you and I will still each have one apple");
      kanyeWin();
    } else {
      kanyePout();
    }

  } else {
    kanyePout();
  };

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

function kanyeKim() {
  console.log("'Kim's going to love this. I'm done with you now. Leave me.'");
}

function kanyeThreat() {
  console.log("'Nothing in life is promised except death. Yours.' says Kanye");
}

function kanyeDiss() {
  console.log("You managed to get away. 3 months later, Kanye releases a brutal diss track about your cowardice and your friends make fun of you about it for years to come. You lose.");
}
