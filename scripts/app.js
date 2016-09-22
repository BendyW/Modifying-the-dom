window.onload = function(event){
	console.log('Yea');

	var checkmark = "(Checkmark here)";
	var style = "Wish I Could Has";

	//geta list of elements with a tag
	var list = document.getElementsByTagName('li');
	var n = list.length; //Length of our list
	var paragraph = document.getElementById('target-for-text');
	var name = document.getElementById('name');
	//name.innerHTML = "I am the king of all";
	var username = prompt("What is your name?")
	name.innerHTML = username;

	var content = buildParagraph("I love waffles AND maple syrup")
	paragraph.innerHTML = content;
	var style = list.innerHTML = addStyle(" Wish I could has");
	list.innerHTML = style;
	//console.log(checkmark);
	//console.log(list);

	console.log(paragraph);
	console.log(content);


	for (var i = 0; i < n; i++) {
		list[i].innerHTML = list[i].innerHTML + checkmark;	 
	}

	//loop through ordered list
	//at the end of the innerhtml of each li
	// add <strong> wish i could have</strong>


};

function addStlye(style){
	var openTag = "<strong>";
	var closingTag = "</strong>";
	return openTag + style + closingTag;
//fix this shit here
		for(var i = n; i>0 ; i--){
		list[i].innerHTML = list[i].innerHTML + style;
	}

}


function buildParagraph(content){
	var openTag = "<em><strong>";
	var closingTag = "</strong></em>";
	return openTag + content + closingTag;
}