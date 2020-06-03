var welcomeText = "We are trying to groom a society, which encourages Sadaqah, educates under-previliged kids, helping heal poor and nurtures the next generation of ummah imbibed with virtuous qualities."+"<br/>"+"<br/>";

    welcomeText =  welcomeText + "Currently, we are actively working in the area of eduction, skill development, healthcare and social awareness."+"<br/>"+"<br/>";
	
	    welcomeText =  welcomeText + "Scroll below to see our causes. "+"<br/>"+"<br/>";
	               
	

function fnWelcometoOurCharity(){
    document.getElementById("btnWelcomeToOurCharity").style.display="none";
	document.getElementById("welcomeToOurCharity").innerHTML+=welcomeText;
	return true;
}

function fnDisableList(){
	document.getElementById("mainMenu").style.display="none";
	return true;
}