var welcomeText = "We are trying to groom a society, which encourages Sadaqah, educates under-previliged kids, helping heal poor and nurtures the next generation of ummah imbibed with virtuous qualities."+"<br/>"+"<br/>";

    welcomeText =  welcomeText + "Currently, we are actively working in the area of eduction, skill development, healthcare and social awareness."+"<br/>"+"<br/>";
	
	    welcomeText =  welcomeText + "Scroll below to see our causes. "+"<br/>"+"<br/>";
		
		
// When the user scrolls the page, execute fnStaticHeader
window.onscroll = function() {fnStaticHeader()};

// Get the header
var header = document.getElementById("headerContent");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fnStaticHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
	               
	

function fnWelcometoOurCharity(){
    document.getElementById("btnWelcomeToOurCharity").style.display="none";
	document.getElementById("welcomeToOurCharity").innerHTML+=welcomeText;
	return true;
}

function fnDisableList(){
	//document.getElementById("mainMenu").style.display="none";
	document.getElementById("mainMenu").click();
	return true;
}


function fnAboutUs(){
	jumpTo("btnAboutUs");
	//document.getElementById("mainMenu").style.display="none";
	return true;
}

function getPosition(element) {
        var e = document.getElementById(element);
        var left = 0;
        var top = 0;

        do {
            left += e.offsetLeft;
            top += e.offsetTop;
        } while (e = e.offsetParent);

        return [left, top];
    }

    function jumpTo(id) {
        window.scrollTo(getPosition(id));
    }