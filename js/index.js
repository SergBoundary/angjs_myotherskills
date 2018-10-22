function goLoad() {
	goLanguage("pl");
}

function goLanguage(lang) {
	
	document.getElementById("button-en").className  = "btn btn-default btn-xs";
	document.getElementById("button-pl").className  = "btn btn-default btn-xs";
	document.getElementById("button-ru").className  = "btn btn-default btn-xs";
	document.getElementById("button-ua").className  = "btn btn-default btn-xs";
	document.getElementById("button-" + lang).className  = "btn btn-primary btn-xs";
	
	/*document.getElementById("index-en").style.display = "none";
	document.getElementById("index-pl").style.display = "none";
	document.getElementById("index-ru").style.display = "none";
	document.getElementById("index-ua").style.display = "none";
	document.getElementById("index-" + lang).style.display = "block";
	
	document.getElementById("index-h-en").style.display = "none";
	document.getElementById("index-h-pl").style.display = "none";
	document.getElementById("index-h-ru").style.display = "none";
	document.getElementById("index-h-ua").style.display = "none";
	document.getElementById("index-h-" + lang).style.display = "block";*/
	
}