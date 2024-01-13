quizzer={
populate:function (){
	if(quiz.isEnded()){
		quizzer.showScores();
	}else{
		//show question
		var element=document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;

		//show choices
		var choices= quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++){
			var element=document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			quizzer.guess("btn"+i,choices[i]);
		}
		quizzer.showProgress();
	}
},



 guess:function(id,guess){
	var button=document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		quizzer.populate();
	}
},

showProgress: function (){
	var currentQuestionNumber=quiz.questionIndex+1;
	var element=document.getElementById("progress");
	element.innerHTML="Question "+ currentQuestionNumber + " of "+quiz.questions.length;

},

showScores:function (){
	var gameOverHtml="<h1>Result</h1>";
		gameOverHtml+="<h2 id='score'>Your Scores: " + quiz.score+"</h2>";
		var element=document.getElementById("quiz");
		element.innerHTML=gameOverHtml;

},

questions:[

],





Question:function (text,choices,answer){
	this.text=text;
	this.choices=choices;
	this.answer=answer;
this.correctAnswer=function(choice){
	return choice===this.answer;
};

},


Quiz:function (questions){
	this.score=0;
	this.questions=questions;
	this.questionIndex=0;


this.getQuestionIndex=function(){
	return this.questions[this.questionIndex];
};

this.isEnded=function(){
	return this.questions.length===this.questionIndex;
};

this.guess=function(answer){
	if(this.getQuestionIndex().correctAnswer(answer)){
		this.score++;
	}
		this.questionIndex++
};

}

}



var quiz = new quizzer.Quiz([
new quizzer.Question("Which one is not an object oriented programming language?",["Java","C#","C++","C"],"C"),
new quizzer.Question("Which one is not an object oriented programming language1?",["Java1","C#1","C++1","C1"],"C1"),
new quizzer.Question("Which one is not an object oriented programming language2?",["Java2","C#2","C++2","C2"],"C2"),
new quizzer.Question("Which one is not an object oriented programming language3?",["Java3","C#3","C++3","C3"],"C3"),
new quizzer.Question("Which one is not an object oriented programming language4?",["Java4","C#4","C++4","C4"],"C4"),
]);
quizzer.populate();