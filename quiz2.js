
var questionsArray=["1.Who was the highest wicket - taker for india team in the year","2.who hit the most fours for india on 2020","4.Who got the highest individual score for india in 2020 (199) ?"]
var opationArray=[["1.virat kholi","2.rohit sharma","3.jasprit bhumrah","4.ms dhoni"],["1.suresh raina","2.dinesh kartik","3.kl rahul","4.virat kholi"],["1.rohit sharma","2.dinesh kartik","3. shikhar dhwan","4.yujvendra chahal"]]
var answerArray=[3,4,1]
console.log("Welcome to my cricket quiz game ")
var playing = prompt("Do you want to play")
var score = 0;
if (playing == "yes"){
    console.log("Okay lets play ")
            for (let i=0; i<questionsArray.length; i++){
            console.log(questionsArray[i])
            for (let j=0; j<opationArray[i].length; j++){
                console.log(opationArray[i][j])
            }
        let answer = prompt("Enter your answer")
        if (answer == answerArray[i]){
            console.log("corrrect!")
            score+=1
        }
        else{
            console.log("Incorrect")
            }
    }
}
else{
    console.log("sorry you not play this game")
}
console.log("You got "+ score +"question correct")
