var messages = {
  alert: function(content){
    var response = alert(content);
    return response;
  },
  prompt: function(content){
     var response = prompt(content);
     return response;
  },
  welcome: "Welcome to Jouney to the (Kanye) West!",
  initialPrompt: "Congratulations! You have been chosen to spend the day with Kanye West. This is a rare honor Mr. West bestows only upon his most loyal subjects. Mr. West sets the itinerary, but he gives you the choice. What do you want to do? \n\n1. Go to the bike store. \n\n2. Go to the Grammys \n\n3. Go get some food.",
  bikeStore: "'I make awesome decisions in bike stores!' exclaims Kanye. You jump in his ride and cruise down to the bike store. Racks of bikes of all different shapes, colors, and sizes are yours for the taking. Kanye snaps his fingers to get you back on task. 'You are going to help me find the perfect bike for Kim.' Do you choose \n\n1. The stylish road bike \n\n2. The practical beach cruiser \n\n3. The Big Wheel Tricycle",
  kanyeFly:"'Nah, I like the other one better,' says Kanye, 'and I know style. I been fly so long I fell asleep on the plane!' He begins to bike around the store. What do you do? \n\n1. Agree with Kanye \n\n2. Stick a bicycle pump in the spokes \n\n3. Ride around with him",
  bikeJoke: "'You think this is a joke son?!' Kanye demands. How do you respond? \n\n1. Yes, just like your career \n\n2. No way, big wheels are awesome \n\n3. Run away",
  kanyeRace: "You ride around the store with Kanye and start an impromptu bike race. You let Kanye win. 'See, I told you I make awesome decisions in bike stores!' he says.",
  awesomeBigWheel: "'Big wheels ARE awesome. I am glad I thought of it.' says Kanye.",
  grammys: "'My greatest pain in life is that I will never be able to see myself perform live. But everyone else will. Let's bounce,' says Kanye. You take Kanye's chopper to the Grammys and land on the red carpet. As you make your way to your seats, Kanye sees that Drake has taken his seat. 'I'm about to throw some kazoo on this bitch! You got my back?' Do you \n\n1. Have his back \n\n2. Turn traitor and support Drake \n\n3. Find T-Swift and see if she's dating anyone right now",
  kanyeSupport: "'Oh hell yeah, let's cut 'em up!' exclaims Kanye. You and Kanye run up on Drake. Things get heated quickly as Kanye grabs Drake and tries to lift him out of his seat. Drake's crew sees the scuffle and run over to help. What do you do? \n\n1. Engage all of Drake's crew in hand to hand combat \n\n2. Run like hell \n\n3. Push Kanye into Drake ",
  drakeGroupFight: "You got your ass beat and wind up in the hospital. Kanye sends you no flowers. Kanye didn't need the help to begin with. You lose.",
  kanyePush: "'NOBODY PUSHES KANYE WEST!' Kanye snaps his fingers.",
  kanyeBetray: "Kanye does not take your betrayal well as you make your way over to Drake's side. Enraged, he attacks. Do you \n\n1. Engage Kanye in hand to hand combat \n\n2. Push Drake into Kanye \n\n3. Run away",
  drakePush: "Kanye stops and helps Drake up. 'That's some shady shit right there,' he says. Drake and Kanye team up and beat your ass. You lose.",
  findTSwift: "You manage to track T-Swift down and start flirting your hardest. She seems into you, but then Kanye approaches. 'Yo Taylor, I'mma let you finish, but first I gotta deal with this traitor.' Do you \n\n1. Apologize and appeal to Kanye's mercy \n\n2. Pretend he's not there \n\n3. Run!",
  kanyeApologize: "'Sometimes I get emotional over fonts. And betrayal. But I forgive you,' says Kanye.",
  kanyeIsThere: "'You may be talented, but you're not Kanye West!' Kanye screams, and snaps his fingers.",
  getFood: "'I am going to order the salmon medium instead of medium well. I don't want to ruin the magic,' says Kanye. You jump on the back of his crotch rocket and ride down to Fish and Shizz. You are seated in the VIP section and given a menu. What do you order? \n\n1. The salmon \n\n2. The filet mignon \n\n3. Doritos and dom perignon",
  orderSalmon: "'You can't copy Kanye!' says Kanye, and throws his drink in your face. 'You may be talented, but you're not Kanye West!' Do you \n\n1. Get up and walk out \n\n2. Dry your face and apologize \n\n3. Flip the table",
  restaurantApologize: "'That's ok son. It's not easy being me. Order something else and let's eat!'",
  orderBeef: "'You got beef with Kanye?' he asks. 'You wanna be startin' something with your food choice son?' Do you \n\n1. Apologize. You don't want beef with Kanye \n\n2. Say you just wanted some steak \n\n3. Flip the table",
  noKanyeBeef: "'Smart choice son. You didn't want to beef with me. Ask Taylor.'",
  vegetarianKanye: "Kanye's a vegetarian. You have offended him.",
  orderDoritos: "'You gonna order the Kanye in Kanye's favorite restaurant? That's bold son. I like you. You may ask me one question.' Do you ask \n\n1. What he thinks of planes \n\n2. What he thinks of fur pillows \n\n3. What he thinks of apples",
  kanyePlanes: "Kanye says, 'I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle.'",
  kanyePillows: "Fur pillows are actually hard to sleep on.",
  kanyeApples: "If you have an apple and I have an apple and we exchange these apples then you and I will still each have one apple.",
  kanyePout: "Your unwillingness to play by Kanye's rules has angered Kanye. He takes his ball and goes home. You lose.",
  kanyeGuard: "The elite team of the Kanye Guard emerges from the shadows and murders you with razor sharp copies of Kanye's platinum albums. You are dead.",
  kanyeWin: "You have survived the Journey to the Kanye West. Congratulations?",
  kanyeKim: "'Kim's going to love this. I'm done with you now. Leave me.'",
  kanyeThreat: "'Nothing in life is promised except death. Yours.' says Kanye",
  kanyeDiss: "You managed to get away. 3 months later, Kanye releases a brutal diss track about your cowardice and your friends make fun of you about it for years to come. You lose."
},
responses = {
  first: "1",
  second: "2",
  third: "3",
  bikeStore: "go to the bike store",
  roadBike: "the stylish road bike",
  beachBike: "the practical beach cruiser",
  bigWheel: "the big wheel tricycle",
  bikeStoreAgree: "agree with kanye",
  bikeSpokes: "stick a bicycle pump in the spokes",
  kanyeRace: "ride around with him",
  kanyeInsult: "yes, just like your career",
  awesomeBigWheel: "no way, big wheels are awesome",
  kanyeRun: "run away",
  grammys: "go to the grammys",
  kanyeSupport: "have his back",
  fightDrake: "engage all of drake's crew in hand to hand combat",
  hellRun: "run like hell",
  pushKanye: "push kanye into drake",
  kanyeBetray: "turn traitor and support drake",
  fightKanye: "engage kanye in hand to hand combat",
  pushDrake: "push drake into kanye",
  kanyeTSwift: "find T-Swift and see if she's dating anyone right now",
  kanyeMercy: "apologize and appeal to kanye's mercy",
  kanyeIsThere: "pretend he's not there",
  tSwiftRun: "run!",
  getFood: "go get some food",
  orderSalmon: "the salmon",
  restaurantLeave: "get up and walk out",
  restaurantApologize: "dry your face and apologize",
  tableFlip: "flip the table",
  orderBeef: "the filet mignon",
  kanyeBeef: "apologize, you don't want beef with kanye",
  justSteak: "say you just wanted some steak",
  orderDoritos: "doritos and dom perignon",
  kanyePlanes: "what he thinks of planes",
  kanyePillows: "what he thinks of fur pillows",
  kanyeApples: "what he thinks of apples"
},
treeLogic = {
  answer: "",
  getAnswer: function(response){
    var answer = response;
    if (typeof response === "string") {
      answer = answer.trim().toLowerCase();
    } else {
      answer = answer.toString();
      answer = answer.trim().toLowerCase();
    }
    return treeLogic.answer = answer;
  },
  goBikeStore: function() {
      score.addPoints(1);
      treeLogic.getAnswer(messages.prompt(messages.bikeStore));

      if (treeLogic.answer === responses.first || treeLogic.answer === responses.second || treeLogic.answer === responses.roadBike || treeLogic.answer === responses.beachBike) {
        score.addPoints(1);
        treeLogic.getAnswer(messages.prompt(messages.kanyeFly));

        if (treeLogic.answer === responses.first || treeLogic.answer === responses.bikeStoreAgree) {
          score.addPoints(5);
          messages.alert(messages.kanyeKim);
          messages.alert(messages.kanyeWin);
        } else if (treeLogic.answer === responses.second  || treeLogic.answer === resonses.bikeSpokes) {
          score.zeroScore();
          messages.alert(messages.kanyeGuard);
        } else if (treeLogic.answer === responses.third  || treeLogic.answer === responses.kanyeRace) {
          score.addPoints(5);
          messages.alert(messages.kanyeRace);
          messages.alert(messages.kanyeWin);
        } else {
          messages.alert(messages.kanyePout);
        }
      } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.bigWheel) {
          score.addPoints(1);
          treeLogic.getAnswer(messages.prompt(messages.bikeJoke));

          if (treeLogic.answer === responses.first || treeLogic.answer === responses.kanyeInsult) {
            score.zeroScore();
            messages.alert(messages.kanyeThreat);
            messages.alert(messages.kanyeGuard);
          } else if (treeLogic.answer === responses.second || treeLogic.answer === responses.awesomeBigWheel) {
            score.addPoints(5);
            messages.alert(messages.kanyeKim);
            messages.alert(messages.kanyeWin);
          } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.kanyeRun) {
            score.subPoints(1);
            messages.alert(messages.kanyeDiss);
          } else {
            messages.alert(messages.kanyePout);
          }
      } else {
        messages.alert(messages.kanyePout);
      }
  },
  goGrammys: function(){
        score.addPoints(1);
        treeLogic.getAnswer(messages.prompt(messages.grammys));

        if (treeLogic.answer === responses.first || treeLogic.answer === responses.kanyeSupport) {
          score.addPoints(1);
          treeLogic.getAnswer(messages.prompt(messages.kanyeSupport));

          if (treeLogic.answer === responses.first || treeLogic.answer === responses.fightDrake) {
            score.subPoints(1);
            messages.alert(messages.drakeGroupFight);
          } else if (treeLogic.answer === responses.second || treeLogic.answer === responses.hellRun) {
            score.subPoints(1);
            messages.alert(messages.kanyeDiss);
          } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.pushKanye){
            score.zeroScore();
            messages.alert(messages.kanyePush);
            messages.alert(messages.kanyeGuard);
          } else {
            messages.alert(messages.kanyePout);
          }

        } else if (treeLogic.answer === responses.second || treeLogic.answer === responses.kanyeBetray) {
          score.addPoints(1);
          treeLogic.getAnswer(messages.prompt(messages.kanyeBetray));

          if (treeLogic.answer === responses.first || treeLogic.answer === responses.fightKanye) {
            score.zeroScore();
            messages.alert(messages.kanyeThreat);
            messages.alert(messages.kanyeGuard);
          } else if (treeLogic.answer === responses.second || treeLogic.answer === responses.pushDrake) {
            score.subPoints(1);
            messages.alert(messages.drakePush);
          } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.kanyeRun) {
            score.subPoints(1);
            messages.alert(messages.kanyeDiss);
          } else {
            messages.alert(messages.kanyePout);
          }

        } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.kanyeTSwift) {
          score.addPoints(1);
          treeLogic.getAnswer(messages.prompt(messages.findTSwift));

          if (treeLogic.answer === responses.first || treeLogic.answer === responses.kanyeMercy) {
            score.addPoints(5);
            messages.alert(messages.kanyeWin);
          } else if (treeLogic.answer === responses.second || treeLogic.answer === responses.kanyeIsThere) {
            score.zeroScore();
            messages.alert(messages.kanyeIsThere);
            messages.alert(messages.kanyeGuard);
          } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.tSwiftRun) {
            score.subPoints(1);
            messages.alert(messages.kanyeDiss);
          } else {
            score.zeroScore();
            messages.alert(messages.kanyeGuard);
          }

        } else {
          messages.alert(messages.kanyePout);
        }
  },
  goEat: function() {
      score.addPoints(1);
      treeLogic.getAnswer(messages.prompt(messages.getFood));

      if (treeLogic.answer === responses.first || treeLogic.answer === responses.orderSalmon) {
        score.addPoints(1);
        treeLogic.getAnswer(messages.prompt(messages.orderSalmon));

        if (treeLogic.answer === responses.first || treeLogic.answer === responses.restaurantLeave) {
          score.subPoints(1);
          messages.alert(messages.kanyeDiss);
        } else if (treeLogic.answer === responses.second || treeLogic.answer === responses.restaurantApologize) {
          score.addPoints(5);
          messages.alert(messages.restaurantApologize);
          messages.alert(messages.kanyeWin);
        } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.tableFlip) {
          score.zeroScore();
          messages.alert(messages.kanyeThreat);
          messages.alert(messages.kanyeGuard);
        } else {
          messages.alert(messages.kanyePout);
        }

      } else if (treeLogic.answer === responses.second || treeLogic.answer === responses.orderBeef) {
        score.addPoints(1);
        treeLogic.getAnswer(messages.prompt(messages.orderBeef));

        if (treeLogic.answer === responses.first || treeLogic.answer === responses.kanyeBeef) {
          score.addPoints(5);
          messages.alert(messages.noKanyeBeef);
          messages.alert(messages.kanyeWin);
        } else if (treeLogic.answer === "2" || treeLogic.answer === responses.justSteak) {
          score.subPoints(1);
          messages.alert(messages.vegetarianKanye);
          messages.alert(messages.kanyePout);
        } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.tableFlip) {
          score.zeroScore();
          messages.alert(messages.kanyeThreat);
          messages.alert(messages.kanyeGuard);
        } else {
          messages.alert(messages.kanyePout);
        }

      } else if (treeLogic.answer === responses.third || treeLogic.answer === responses.orderDoritos) {
        score.addPoints(1);
        treeLogic.getAnswer(messages.prompt(messages.orderDoritos));

        if (treeLogic.answer === responses.first || treeLogic.answer === responses.kanyePlanes) {
          score.addPoints(5);
          messages.alert(messages.kanyePlanes);
          messages.alert(messages.kanyeWin);
        } else if (treeLogic.answer === "2" || treeLogic.answer === responses.kanyePillows) {
          score.addPoints(5);
          messages.alert(messages.kanyePillows);
          messages.alert(messages.kanyeWin);
        } else if (treeLogic.answer === "3" || treeLogic.answer === responses.kanyeApples) {
          score.addPoints(5);
          messages.alert(messages.kanyeApples);
          messages.alert(messages.kanyeWin);
        } else {
          messages.alert(messages.kanyePout);
        }

      } else {
        messages.alert(messages.kanyePout);
      }
    }
},
score = {
  points: 0,
  addPoints: function(amount) {
    score.points += amount;
  },
  subPoints: function(amount) {
    score.points -= amount;
  },
  zeroScore: function(){
    score.points = 0;
  }
};


messages.alert(messages.welcome);
treeLogic.getAnswer(messages.prompt(messages.initialPrompt));
if (treeLogic.answer === responses.first || treeLogic.answer === responses.bikeStore) {
  treeLogic.goBikeStore();
}
else if (treeLogic.answer === responses.second || treeLogic.answer === responses.grammys) {
  treeLogic.goGrammys();
}
else if (treeLogic.answer === responses.third || treeLogic.answer === responses.go) {
  treeLogic.goEat();
} else {
  messages.alert(messages.kanyePout);
}
messages.alert("Your score is: " + score.points);
