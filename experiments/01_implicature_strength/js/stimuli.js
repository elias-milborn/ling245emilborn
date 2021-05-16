// data for all stimuli in the form of a list of JavaScript objects

var sentences = [
  "The commission referred to the source of the donations that ____ .",
  "The tourist guide mentioned the bells of the church that ____ .",
  "The bus driver talked to the leader of the boy scouts who ____ .",
  "The superintendent checked the earnings of the company that ____ .",
  "The scientist criticised the method of the studies that ____ .",
  "We were amused at the articles of the newspaper that ____ .",
  "The social worker greeted the nurse of the senior-citizens who ____.",
  "The hacker attacked the web sites of the service provider that ____ .",
  "A stranger blackmailed the butler of the royals who ____ .",
  "The secret service confiscated all files of the organisation that ____ .",
  "The minister saw the bodyguard of the diplomats who ____ .",
  "The homeowner kept the letters of the office that ____ ."
]
sentences = _.shuffle(sentences)

var filler_sentences = [
  "The barman slid a whiskey and a beer over to ____.",
  "Thanks to stricter speed checks on national motorways ____.",
  "The priest looked after the asylum seekers because ____ .",
  "The conductor noticed that the strings of the soloist's violin were ____ .",
  "The police learnt that the handbag of the diplomat's wife had been ____ .",
  "The woman complained that the bicycles of the neighbour's kids were ____ .",
  "Because of last night's TV documentary, the old lady ____ .",
  "The patient had to wait for quite some time before ____ .",
  "The captain recalled that sails of the pirates' ship were ____ .",
  "The lieutenant ordered that the floors of the battalion's barracks were ____ .",
  "The racing driver showed the torn overall to ____ .",
  "After washing the salad with its firm green leaves, the scullion ____ .",
  "The overeager Crown Prosecutor alleged that the lawyer ____ .",
  "The management of the successful supermarket chain planned ____ .",
  "The postman delivered a small parcel to ____ .",
  "The teenagers barricaded the main entrance of the school so that ____ .",
  "The accomplice of the recently convicted fraudster alleged ____ .",
  "The prime minister held a press conference and shortly afterwards ____ .",
  "The speaker switched off the microphone before ____ .",
  "Because of unexpectedly harsh weather conditions in spring ____ .",
  "The ranger of the forest near the city borders forbid ____ .",
  "The famous entertainer was given a bunch of flowers after ____ .",
  "Because of a considerable delay of the 7:30am train ____ .",
  "Shortly before the fully occupied passenger plane has landed ____ ."
]

filler_sentences = _.shuffle(filler_sentences)

var answers = [
  [5, 8, 2],
  [17, 14, 16],
  [16, 2, 22],
  [11, 3, 26],
  [2, 20, 19],
  [15, 7, 19],
  [13, 19, 24],
  [12, 16, 26],
  [1, 18, 19],
  [13, 5, 15],
  [9, 1, 18],
  [12, 11, 21]
]

prime_order = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

var all_stims = []

var i

for (i = 0; i < 24; i++) {
  var to_string = "" + (i + 1)
  if (i < 9) {
    to_string = "0" + to_string
  }
  var equation = "filler" + to_string + ".png"
  var sentence = filler_sentences[i]
  all_stims.push({"prime" : equation, "target" : sentence, "answer" : "filler"})
}

for (i = 0; i < 12; i++) {
  var j = prime_order[i]
  var to_string = "" + (j + 1)
  if (j < 9) {
    to_string = "0" + to_string
  }
  var answer
  var equation = "prime" + to_string + ".png"
  if (i < 4) {
    equation = "HA" + equation
    answer = answers[j][0]
  }
  else if (i < 8) {
    equation = "LA" + equation
    answer = answers[j][1]
  }
  else {
    equation = "BL" + equation
    answer = answers[j][2]
  }
  var sentence = sentences[i]
  all_stims.push({"prime" : equation, "target" : sentence, "answer" : answer})
}

all_stims = _.shuffle(all_stims)
console.log("new stims\n")
console.log(all_stims)

// var all_stims =
//   [
//     {
//       "prime" : "HAprime01.png",
//       "target" : "The tourist guide mentioned the bells of the church that ____",
//     },
//     {
//       "prime" : "HAprime02.png",
//       "target" : "We visited the friends of a colleague who ____",
//     }
//   ]
