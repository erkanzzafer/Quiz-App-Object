function Question(text,choices,answer){
	this.text=text;
	this.choices=choices;
	this.answer=answer;
this.correctAnswer=function(choice){
	return choice===this.answer;
};

}

