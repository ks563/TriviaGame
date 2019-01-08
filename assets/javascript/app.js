//array of objects of questions, objects of answers, and correct answers
var questions = [
    {
        question: "What disease caused an epidemic in Philadephia in 1793 and nearly killed Alexander Hamilton (twice)?",
        answers: {
            a: 'Small Pox',
            b: 'Yellow Fever',
            c: 'Influenza',
            d: 'Mumps'
        },
        correctAnswer: 'b'
    },
    {
        question: "What was thought to be a cure for Malaria in Ancient Rome?",
        answers: {
            a: 'Sunbathing',
            b: 'Mulled Wine',
            c: 'The word Abracadabra',
            d: 'None of the above'
        },
        correctAnswer: 'c'
    },
    {
        question: "How many different strains of polio exist?",
        answers: {
            a: '3',
            b: '1',
            c: '5',
            d: '2'
        },
        correctAnswer: 'a'
    },
    {
        question: "Rabies cause a fear of",
        answers: {
            a: 'Dogs',
            b: 'Needles',
            c: 'The Sun',
            d: 'Water'
        },
        correctAnswer: 'd'
    },
    {
        question: "Between 1347 - 1350 the Black Death pandemic killed how many people?",
        answers: {
            a: '75 - 200 million people',
            b: '5-10 million people',
            c: '20 -50 million people',
            d: '1 million people'
        },
        correctAnswer: 'a'
    },
    {
        question: "Blankets were used to deliberately infected populations (such as Native Americans) with this disease.",
        answers: {
            a: 'Malaria',
            b: 'Dengue Fever',
            c: 'Smallpox',
            d: 'Tuberculosis'
        },
        correctAnswer: 'c'
    },
    {
        question: "Since the early 1900's how many cases of the Plague have been recorded in the United States?",
        answers: {
            a: '1000',
            b: '6432',
            c: '0',
            d: '43'
        },
        correctAnswer: 'a'
    },
    {
        question: "If you were diagnosed with disease you were often sent to live in a secluded area, separated from society.",
        answers: {
            a: 'Malaria',
            b: 'Leprosy',
            c: 'Rabies',
            d: 'Polio'
        },
        correctAnswer: 'b'
    },
    {
        question: "What disease predicated the first innoculations?",
        answers: {
            a: 'Polio',
            b: 'Measles',
            c: 'Influenza',
            d: 'Small Pox'
        },
        correctAnswer: 'd'
    },
    {
        question: "Plague is transmitted by:",
        answers: {
            a: 'Cats',
            b: 'Rats',
            c: 'Fleas on Rats',
            d: 'Blankets'
        },
        correctAnswer: 'c'
    },
    {
        question: "Around 1000 AD, a new cure for tuberculosis came about. This treatment included:",
        answers: {
            a: 'Drinking tea',
            b: 'A monarch would lay hands on an infected patient while a priest said a prayer',
            c: 'Laying in bed, surrounded with chanting and lots of incense',
            d: 'Drinking a potion of wormwood and monkshood'
        },
        correctAnswer: 'b'
    },
]

// var game = $("#game");
 var results = $("results");
// var submitButton = $("submit");
var correctGuess = 0;
var wrongGuess;

//make countdown - show
// setTimeout(triviaCount, 1000 * 120);

//this function needs to display questions
//show and create radio buttons for answers
function gameSet() {
    for (var i = 0; i < questions.length; i++) {
        var questionP = $("<p>").text(questions[i].question)
        var questionDiv = $("<div>").append(questionP)
        for (letter in questions[i].answers) {

            var inputChoice = $("<input type='radio'>")
            //write funcitons to set value 
            //set different attrs name, data  
            $(inputChoice).val(letter);
            $(inputChoice).attr("name", "question"+i)
            $(inputChoice).attr("data-target", i)
            $(inputChoice).addClass("radioButton")
            
            var label = $("<label>").append(inputChoice)
            questionDiv.append(label, letter + ": " + questions[i].answers[letter])
      }
        
        $("#game").append(questionDiv)
    }
}

gameSet()

$(".radioButton").on("change", function () {
    console.log($(this).val())
    console.log($(this).attr("data-target"))
    var questValue = $(this).val();
    var questData = $(this).attr("data-target");
    if (questValue === questions[questData].correctAnswer) {
        console.log("correct answer");
        correctGuess++
    }
})


 
//function that takes the correctGuess and writes it to the dom
//set timer when timer is done, calls function ^^ 
//function is also called when the submit button is pressed
//use jquery to write to results div