var line = 0;
var name = "";
var reply = false;
var ledger = false;
var safeCode = false;
var inventory = [];
var firstQuest = [];
var secondQuest = [];
var thirdQuest = [];
var fourthQuest = [];
var fifthQuest = [];
var sixthQuest = [];
var questCounter = 0;
var needLedger = false;
var needSafeCode = false;
var needHalfWrittenLetter = false;
var needFolderOfCodes = false;
var needKeyCode = false;
var needPocketSquare = false;
var needInvoice = false;
var needEmail = false;
var needFlashDrive = false;
var bankRecords = false;
function load(){//This function attempts to load saved game data, so if the player is returning to this page at a later time it is still up to date
	if(JSON.parse(localStorage.getItem("inventory")) != undefined){//This checks if the inventory has previously been used
		inventory = JSON.parse(localStorage.getItem("inventory"));
		for(var i = 0; i < 10; i++){
			if(inventory[i] != null){
				updateInventory();//This code is in here because the player can't be revisiting the page without having picked something up, so this serves as two checks in one
				revealInvDo();//As the player must have an inventory for this code to execute this function shows the commands used to interact with the inventory
				document.getElementById("parentParagraph").innerHTML = "<p>You find yourself standing in a small office.<br />A wooden desk rests near the far wall and its matching chair <br />is pressed against a bookshelf covering one of the other walls.<br />Papers are scattered everywhere after the hectic search by your colleagues.<br />You can't help but notice a few prominent blank spots, though.<br /><br />Detective Williams stands just outside the room filling out paperwork.<br />";
				reply = true;
				ledger = true;
				safeCode = true;
				setLine(6);//This and the next line skip to the end of the page progression so a returning player doesn't have to do everything again
				document.getElementById("navList").innerHTML += "<li><a id='yourOffice' href='yourOffice.html'>Your Office</a></li>";
				if(localStorage.getItem("name") != undefined){
					name = localStorage.getItem("name");
				}
				break;
			}
			else{
				inventory[i] = "-1";//This ensures the inventory has the proper number of elements, filled or empty
			}
		}
	}
	else{
		inventory = ["-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1"];
	}//This section sets the quest list to keep it up to date
	document.getElementById("secondQuestTitle").style.visibility = "hidden";//These lines set everything to hidden to start fresh, just in case
	document.getElementById("thirdQuestTitle").style.visibility = "hidden";
	document.getElementById("fourthQuestTitle").style.visibility = "hidden";
	document.getElementById("fifthQuestTitle").style.visibility = "hidden";
	document.getElementById("sixthQuestTitle").style.visibility = "hidden";
	if(JSON.parse(localStorage.getItem("firstQuest")) != undefined){//These ifs make sure the quest have all been defined in the local storage
		firstQuest = JSON.parse(localStorage.getItem("firstQuest"));//This sets the local variables to the stored data, whether there's anything stored or not
		for(var i = 0; i < firstQuest.length; i++){//These for loops add the quest data back to the div on the left
			document.getElementById("firstQuest").innerHTML += "<li>" + firstQuest[i] + "</li>";
		}
	}
	if(JSON.parse(localStorage.getItem("secondQuest")) != undefined){
		secondQuest = JSON.parse(localStorage.getItem("secondQuest"));
		for(var i = 0; i < secondQuest.length; i++){
			if(secondQuest[i] != null){
				document.getElementById("secondQuestTitle").style.visibility = "visible";
			}
		}
		for(var i = 0; i < secondQuest.length; i++){
			document.getElementById("secondQuest").innerHTML += "<li>" + secondQuest[i] + "</li>";
		}
	}
	if(JSON.parse(localStorage.getItem("thirdQuest")) != undefined){
		thirdQuest = JSON.parse(localStorage.getItem("thirdQuest"));
		for(var i = 0; i < thirdQuest.length; i++){
			document.getElementById("thirdQuest").innerHTML += "<li>" + thirdQuest[i] + "</li>";
			if(thirdQuest[i] != null){
				document.getElementById("thirdQuestTitle").style.visibility = "visible";
			}
		}
	}
	if(JSON.parse(localStorage.getItem("fourthQuest")) != undefined){
		fourthQuest = JSON.parse(localStorage.getItem("fourthQuest"));
		for(var i = 0; i < fourthQuest.length; i++){
			document.getElementById("fourthQuest").innerHTML += "<li>" + fourthQuest[i] + "</li>";
			if(fourthQuest[i] != null){
				document.getElementById("fourthQuestTitle").style.visibility = "visible";
			}
		}
	}
	if(JSON.parse(localStorage.getItem("fifthQuest")) != undefined){
		fifthQuest = JSON.parse(localStorage.getItem("fifthQuest"));
		for(var i = 0; i < fifthQuest.length; i++){
			document.getElementById("fifthQuest").innerHTML += "<li>" + fifthQuest[i] + "</li>";
			if(fifthQuest[i] != null){
				document.getElementById("fifthQuestTitle").style.visibility = "visible";
			}
		}
	}
	if(JSON.parse(localStorage.getItem("sixthQuest")) != undefined){
		sixthQuest = JSON.parse(localStorage.getItem("sixthQuest"));
		for(var i = 0; i < sixthQuest.length; i++){
			document.getElementById("sixthQuest").innerHTML += "<li>" + sixthQuest[i] + "</li>";
			if(sixthQuest[i] != null){
				document.getElementById("sicthQuestTitle").style.visibility = "visible";
			}
		}
	}
	if(firstQuest[0] != null){//This section of ifs also checks if there is anything in the quest variables, but without loops, to do things like adding links once and only once to the nav area
		
	}
	if(secondQuest[0] != null){
		document.getElementById("navList").innerHTML += "<li><a id='parkingGarageLink' href='parkingGarage.html'>Parking Garage</a></li>";
		needLedger = localStorage.getItem("needLedger");
		needSafeCode = localStorage.getItem("needSafeCode");
		needHalfWrittenLetter = localStorage.getItem("needHalfWrittenLetter");
		needFolderOfCodes = localStorage.getItem("needFolderOfCodes");
		needKeyCode = localStorage.getItem("needKeyCode");
		needPocketSquare = localStorage.getItem("needPocketSquare");
		needInvoice = localStorage.getItem("needInvoice");
		needEmail = localStorage.getItem("needEmail");
		needFlashDrive = localStorage.getItem("needFlashDrive");
		if(localStorage.getItem("bankRecords") != null){
			bankRecords = localStorage.getItem("bankRecords");
		}
	}
	if(thirdQuest[0] != null){
		
	}
	if(fourthQuest[0] != null){
		document.getElementById("navList").innerHTML += "<li><a href='iceColdHQ.html'>Ice Cold, Inc</a></li>";
	}
	if(fifthQuest[0] != null){
		document.getElementById("navList").innerHTML += "<li><a href='victimHouse.html'>Victim's House</a></li>"
	}
	if(sixthQuest[0] != null){
		
	}
}
function setUsername(enteredName){//This first function sets the player's username and starts the game
	if(enteredName.match(/^[a-zA-Z ]{1,15}$/)){//This ensures the player's username contains only letters and spaces and is between 1 and 15 characters long
		name = String(enteredName);
		document.getElementById("parentParagraph").innerHTML += "<p>Welcome to Wellspring Cove " + name + "!</p>";
		document.getElementById("parentParagraph").innerHTML += "<p>Click to progress through text</p>";//These two lines print the opening text
		document.getElementById("formSpanOne").innerHTML = "";//This removes the text input the player used to enter their name so they can't again
		document.getElementById("formSpanTwo").innerHTML = "";//This removes the enter button for the above text box
		setTimeout(function(){//This enables the 'Click to progress' feature of the game, delayed by 5 ticks so that when the player hits the enter button it doesn't take that as a progression click
			document.addEventListener("click", progressText, false);
		}, 5);
		//As this game uses html5 storage to pass variables between pages, this checks if the player's browser supports it
		if(typeof(Storage) != "undefined"){
			
		}
		else{
			alert("Your browser doesn't support HTML5 local storage so this game may not run for you.");
		}
	}
}
function progressText(){//This is the main function which prints text based on the variable 'line'
	if(line == 0){
		document.getElementById("parentParagraph").innerHTML += "<p>You find yourself standing in a small office.<br />A wooden desk rests near the far wall and its matching chair <br />sits between it and a bookshelf covering one of the other walls.<br />There is a monitor on the desk, though your colleagues took the computer.<br />";
		line++;
	}
	else if(line == 1){
		document.getElementById("parentParagraph").innerHTML += "Papers are scattered everywhere after the hectic search by your colleagues.<br />You can't help but notice a few prominent blank spots, though.<br />";
		line++;
	}
	else if(line == 2){//This is the first choice the player makes
		document.getElementById("parentParagraph").innerHTML += "<br />Detective Williams stands before you, a full head shorter than yourself <br />and with a bushy brown beard that bounces ridiculously when he speaks.<br />\"What do you think, " + name + "\"<br />";
		document.removeEventListener("click", progressText, false);//This disable the click so the player must decide to progress
		document.getElementById("formSpanOne").innerHTML = "<label>The others sure did a number on this place.<input type='radio' name='reply' value='1' /></label>    <label>Could you run the case by me again?<input type='radio' name='reply' value='2'/></label><br />    <label>I don't even know where to start.<input type='radio' name='reply' value='3' /></label>";//This creates three radio buttons with labels for the player to choose from
		document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";//This adds the enter button for the above radio buttons
	}
	else if(line == 3){//What follows the first response
		document.getElementById("formSpanOne").innerHTML = "";
		document.getElementById("formSpanTwo").innerHTML = "";
		document.getElementById("parentParagraph").innerHTML += "<br />\"They did indeed.  Take your time looking around. <br /><br />\"I'll be right outside if you're ready to go or have any questions.\"<br />";
		document.addEventListener("click", progressText, false);
		line += 3;
	}
	else if(line == 4){//What follows the second response
		document.getElementById("formSpanOne").innerHTML = "";
		document.getElementById("formSpanTwo").innerHTML = "";
		document.getElementById("parentParagraph").innerHTML += "<br />\"Sure.  The vic's name was Elwin Karl, secretary to Speaker of the House Herman.<br />\"He was found shot through the head outside the entrance to this very office building.<br /><br />\"Coworkers only knew him as a quiet guy with a sick father who passed away recently.<br />\"No known motive or suspects; right now we're thinking he might have had a political rival.<br /><br />\"I'll be right outside if you're ready to go or have any questions.\"<br />";
		document.addEventListener("click", progressText, false);
		line += 2;
	}
	else if(line == 5){//What follows the third response
		document.getElementById("formSpanOne").innerHTML = "";
		document.getElementById("formSpanTwo").innerHTML = "";
		document.getElementById("parentParagraph").innerHTML += "<br />\"I can't help you much there, pal.  Maybe start with his desk, or the bookshelf.<br /><br />\"I'll be right outside if you're ready to go or have any questions.\"<br />";
		document.addEventListener("click", progressText, false);
		line++;
	}
	else if(line == 6){//The player's first action, to investigate the office
		document.getElementById("parentParagraph").innerHTML += "<br />What would you like to investigate?<br />"
		document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='1' /></label><label>The wooden desk<input type='radio' name='reply' value='2' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='3' /></label><label>The office chair<input type='radio' name='reply' value='4' /></label>";
		document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";
		document.removeEventListener("click", progressText, false);
		if(reply && ledger && safeCode){//If the player returns to room after completing it this is what they see instead
			document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='1' /></label><label>The wooden desk<input type='radio' name='reply' value='2' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='3' /></label><label>The office chair<input type='radio' name='reply' value='4' /></label><br /><label>Leave the room and return to Detective Williams<input type='radio' name='reply' value='5' /></label>";
		}
	}
	else if(line == 7){//Investigating the paper scattered around the room
		document.getElementById("parentParagraph").innerHTML += "<br /><br />You find condolence letters from various acquaintances scattered about the room.<br />One stands out from Speaker Herman expecting Elwin back at work the day after his father's funeral.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />What would you like to investigate?";
		document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='0' /></label><label>The wooden desk<input type='radio' name='reply' value='1' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='2' /></label><label>The office chair<input type='radio' name='reply' value='3' /></label>";
		document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";
		if(reply && ledger && safeCode){
			document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='0' /></label><label>The wooden desk<input type='radio' name='reply' value='1' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='2' /></label><label>The office chair<input type='radio' name='reply' value='3' /></label><br /><label>Leave the room and return to Detective Williams<input type='radio' name='reply' value='4' /></label>";
		}
	}
	else if(line == 8){//Investigating the office desk
		if(!reply){//If this is the player's first time investigating the desk
			document.getElementById("parentParagraph").innerHTML += "<br /><br />You find a half written letter to a Wenzel on top of the office desk.<br />You take the letter as evidence.<br />";
			document.getElementById("parentParagraph").innerHTML += "<br />What would you like to investigate?";
			document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-1' /></label><label>The wooden desk<input type='radio' name='reply' value='0' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='1' /></label><label>The office chair<input type='radio' name='reply' value='2' /></label>";
			document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";
			reply = true;//This boolean ensures the player can only see this text and pick up the letter once
			addItem("halfWrittenLetter");
			firstQuest[questCounter] = "Picked up the half written letter";
			revealInvDo();
			questCounter++;
			document.getElementById("firstQuest").innerHTML += "<li>Picked up the half written letter</li>"
			if(reply && ledger && safeCode){//If this is the last of the items the player investigates it triggers the progression text
				document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-1' /></label><label>The wooden desk<input type='radio' name='reply' value='0' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='1' /></label><label>The office chair<input type='radio' name='reply' value='2' /></label><br /><label>Leave the room and return to Detective Williams<input type='radio' name='reply' value='3' /></label>";
			}
		}
		else{//If the player has previously investigated the desk
			document.getElementById("parentParagraph").innerHTML += "<br /><br />You find nothing unusual about the wooden desk.<br />";
			document.getElementById("parentParagraph").innerHTML += "<br />What would you like to investigate?";
			document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-1' /></label><label>The wooden desk<input type='radio' name='reply' value='0' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='1' /></label><label>The office chair<input type='radio' name='reply' value='2' /></label>";
			document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";
			if(reply && ledger && safeCode){
				document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-1' /></label><label>The wooden desk<input type='radio' name='reply' value='0' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='1' /></label><label>The office chair<input type='radio' name='reply' value='2' /></label><br /><label>Leave the room and return to Detective Williams<input type='radio' name='reply' value='3' /></label>";
			}
		}
	}
	else if(line == 9){//Investigating the bookshelf
		if(!ledger){//If this is the player's first time investigating the bookshelf
			document.getElementById("parentParagraph").innerHTML += "<br /><br />It appears that Elwin was a prolific reader.<br />Hidden among the many novels and encyclopedias is a bank ledger with suspicious entries.<br />You take the bank ledger as evidence.<br />";
			document.getElementById("parentParagraph").innerHTML += "<br />What would you like to investigate?";
			document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-2' /></label><label>The wooden desk<input type='radio' name='reply' value='-1' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='0' /></label><label>The office chair<input type='radio' name='reply' value='1' /></label>";
			document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";
			ledger = true;//This boolean ensures the player can only see this text and pick up the ledger once
			document.getElementById("firstQuest").innerHTML += "<li>Picked up the bank ledger</li>"
			addItem("bankLedger");
			revealInvDo();
			firstQuest[questCounter] = "Picked up the bank ledger";
			questCounter++;
			if(reply && ledger && safeCode){//If this is the last of the items the player investigates it triggers the progression text
				document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-2' /></label><label>The wooden desk<input type='radio' name='reply' value='-1' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='0' /></label><label>The office chair<input type='radio' name='reply' value='1' /></label><br /><label>Leave the room and return to Detective Williams<input type='radio' name='reply' value='2' /></label>";
			}
		}
		else{//If the player has previously investigated the bookshelf
			document.getElementById("parentParagraph").innerHTML += "<br /><br />It appears that Elwin was a prolific reader.<br />However, you find nothing unusual amongst the many novels and encyclopedias.<br />";
			document.getElementById("parentParagraph").innerHTML += "<br />What would you like to investigate?";
			document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-2' /></label><label>The wooden desk<input type='radio' name='reply' value='-1' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='0' /></label><label>The office chair<input type='radio' name='reply' value='1' /></label>";
			document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";
			if(reply && ledger && safeCode){
				document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-2' /></label><label>The wooden desk<input type='radio' name='reply' value='-1' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='0' /></label><label>The office chair<input type='radio' name='reply' value='1' /></label><br /><label>Leave the room and return to Detective Williams<input type='radio' name='reply' value='2' /></label>";
			}
		}
	}
	else if(line == 10){//Investigating the office chair
		if(!safeCode){//If this is the player's first time investigating the office chair
			document.getElementById("parentParagraph").innerHTML += "<br /><br />A scrap of paper with a safe code was hidden in one of the chair's wheels.<br />You look around, but there is no safe in the office.<br />You take the scrap of paper with a safe code as evidence.<br />";
			document.getElementById("parentParagraph").innerHTML += "<br />What would you like to investigate?";
			document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-3' /></label><label>The wooden desk<input type='radio' name='reply' value='-2' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='-1' /></label><label>The office chair<input type='radio' name='reply' value='0' /></label>";
			document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";
			safeCode = true;//This boolean ensures the player can only see this text and pick up the safe code once
			document.getElementById("firstQuest").innerHTML += "<li>Picked up the safe code</li>"
			addItem("safeCode");
			revealInvDo();
			firstQuest[questCounter] = "Picked up the safe code";
			questCounter++;
			if(reply && ledger && safeCode){//If this is the last of the items the player investigates it triggers the progression text
				document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-3' /></label><label>The wooden desk<input type='radio' name='reply' value='-2' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='-1' /></label><label>The office chair<input type='radio' name='reply' value='0' /></label><br /><label>Leave the room and return to Detective Williams<input type='radio' name='reply' value='1' /></label>";
			}
		}
		else{//If the player has previously investigated the office chair
			document.getElementById("parentParagraph").innerHTML += "<br /><br />You find nothing unusual about the office chair.<br />";
			document.getElementById("parentParagraph").innerHTML += "<br />What would you like to investigate?";
			document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-3' /></label><label>The wooden desk<input type='radio' name='reply' value='-2' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='-1' /></label><label>The office chair<input type='radio' name='reply' value='0' /></label>";
			document.getElementById("formSpanTwo").innerHTML = "<br /><button type='button' onclick='getChecked(reply)'))'>Enter</button>";
			if(reply && ledger && safeCode){
				document.getElementById("formSpanOne").innerHTML = "<label>The papers scattered all over the room<input type='radio' name='reply' value='-3' /></label><label>The wooden desk<input type='radio' name='reply' value='-2' /></label><br /><label>The bookshelf<input type='radio' name='reply' value='-1' /></label><label>The office chair<input type='radio' name='reply' value='0' /></label><br /><label>Leave the room and return to Detective Williams<input type='radio' name='reply' value='1' /></label>";
			}
		}
	}
	else if(line == 11){//If the player has entered that they are done investigating this is the double check
		document.getElementById("parentParagraph").innerHTML += "<br /><br />\"You done checking the place out? <br />\"Ready to head back to the office for some paperwork?\"<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(2)'))'>Yes</button>";
		document.getElementById("formSpanTwo").innerHTML = "<button type='button' onclick='setLine(1)'))'>No</button>";
	}
	else if(line == 12){//If the player decides to return to investigating the office
		document.getElementById("formSpanOne").innerHTML = "";
		document.getElementById("formSpanTwo").innerHTML = "";
		document.getElementById("parentParagraph").innerHTML += "<br />\"Alright.  I'll be waiting here when you are.\"<br />";
		setLine(-6);
	}
	else if(line == 13){//If the player is done with this area these are the instruction to move on
		document.getElementById("formSpanOne").innerHTML = "";
		document.getElementById("formSpanTwo").innerHTML = "";
		document.getElementById("parentParagraph").innerHTML += "<br />\"Alright.  I'll be here if you decide to come back.\"<br /><br />Click the link labeled 'Your office' in the navigation area to the left to progress.<br />You may return to this area at any time in the same manner.<br /></p>";
		if(document.getElementById("yourOffice") == undefined){
			document.getElementById("navList").innerHTML += "<li><a id='yourOffice' href='yourOffice.html'>Your Office</a></li>";
		}//This section saves the game data so it can be used in other pages
		localStorage.setItem("inventory", JSON.stringify(inventory));
		localStorage.setItem("name", name);
		localStorage.setItem("firstQuest", JSON.stringify(firstQuest));
		localStorage.setItem("secondQuest", JSON.stringify(secondQuest));
		localStorage.setItem("thirdQuest", JSON.stringify(thirdQuest));
		localStorage.setItem("fourthQuest", JSON.stringify(fourthQuest));
		localStorage.setItem("fifthQuest", JSON.stringify(fifthQuest));
		localStorage.setItem("needLedger", needLedger);
		localStorage.setItem("needSafeCode", needSafeCode);
		localStorage.setItem("needHalfWrittenLetter", needHalfWrittenLetter);
		localStorage.setItem("needFolderOfCodes", needFolderOfCodes);
		localStorage.setItem("needPocketSquare", needPocketSquare);
		localStorage.setItem("needInvoice", needInvoice);
		localStorage.setItem("needEmail", needEmail);
		localStorage.setItem("needFlashDrive", needFlashDrive);
		localStorage.setItem("needKeyCode", needKeyCode);
	}
}
function getChecked(radButtons){//This function is called after the player makes a radio button based decision.  It determines which is checked, and adds that button's value to line
	for(var i = 0; i < radButtons.length; i++){
		if(radButtons[i] != null){
			if(radButtons[i].checked){
				setLine(radButtons[i].value);
			}
		}
	}
}
function setLine(newLine){//This is the function called by other to actually set a new line value.  For instance, after the first choice the value of the selected radio button is sent here to be added to the line to tell the program which response to print
	line += parseInt(newLine);
	progressText();//After setting the new line, setLine calls the progressText function to print the newly selected line
}
function addItem(item){//This function adds items to the inventory
	for(var i = 0; i < 10; i++){
		if(inventory[i] == "-1"){//This finds an empty slot, -1 is the value of an empty slot
			inventory[i] = item;
			updateInventory();//This acts as a 'draw' function
			break;
		}
	}
}
function removeItem(item){//This function removes items from the inventory
	for(var i = 0; i < 10; i++){
		if(inventory[i] == item){
			inventory[i] = null;
			updateInventory();
			break;
		}
	}
}
function updateInventory(){//This acts as the draw function for the inventory
	for(var i = 0; i < 10; i++){
		if(inventory[i] != "-1"){
			var picString = String(inventory[i]) + ".png";//This saves the image name as a variable so this function can use a loop instead of more conditionals
			document.getElementById("inv" + parseInt(i)).innerHTML = "<img id='" + i + "' src='" + picString + "' />";
		}
	}
}
function invDo(options, slot){//This is the function that is called when the player interacts with their inventory
	var checkedDo = -1;
	var slotDo;
	for(var i = 0; i < options.length; i++){
		if(options[i] != null){
			if(options[i].checked){
				checkedDo = options[i].value;
			}
		}
	}
	for(var i = 0; i < slot.length; i++){
		if(slot[i] != null){
			if(slot[i].checked){
				slotDo = slot[i].value;
			}
		}
	}
	if(checkedDo == 1){//Examine
		if(inventory[parseInt(slotDo)] == "bankLedger"){
			document.getElementById("parentParagraph").innerHTML += "<br />A suspicious bank ledger from the victim's bookshelf in his office.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "safeCode"){
			document.getElementById("parentParagraph").innerHTML += "<br />A scrap of paper with a safe code you found in the victim's office.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "halfWrittenLetter"){
			document.getElementById("parentParagraph").innerHTML += "<br />A strangely worded half written letter to a Wenzel, from the victim's office desk.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "folderOfCodes"){
			document.getElementById("parentParagraph").innerHTML += "<br />A folder of coded papers left by an anonymous tipster.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "keyCode"){
			document.getElementById("parentParagraph").innerHTML += "<br />The decoding key for the folder of bank records.  You got it in the parking garage.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "pocketSquare"){
			document.getElementById("parentParagraph").innerHTML += "<br />A dark red pocket square forgotten by the anonymous tipster in the parking garage.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "invoice"){
			document.getElementById("parentParagraph").innerHTML += "<br />A strange invoice from Ice Cold, inc. to the CEO of the Obex Corp.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "email"){
			document.getElementById("parentParagraph").innerHTML += "<br />An email from the CEO of the Obex Corp to a hitman, requesting the assassination of the victim.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "flashDrive"){
			document.getElementById("parentParagraph").innerHTML += "<br />A flash drive from the victim's safe containing all of the information he found.<br />";
		}
		else if(inventory[parseInt(slotDo)] == "key"){
			document.getElementById("parentParagraph").innerHTML += "<br />The Obex Corp CEO's mail key.<br />";
		}
	}
	else if(checkedDo == 2){//Use
		if(inventory[parseInt(slotDo)] == "keyCode"){
			if(needKeyCode){
				document.getElementById("parentParagraph").innerHTML += "<p><br />You manage to decode the bank records.<br /></p>";
				needKeyCode = false;
				bankRecords = true;
				localStorage.setItem("bankRecords", true);
				localStorage.setItem("needKeyCode", false);
			}
			else{
				document.getElementById("parentParagraph").innerHTML += "<br />Nothing happened.<br />";
			}
		}
		else{
			document.getElementById("parentParagraph").innerHTML += "<br />Nothing happened.<br />";
		}
	}
}
function revealInvDo(){//This function simply reveals the inventory interact area if the player is returning to this page at a later time
	document.getElementById("formSpanInvOne").innerHTML = "";
	document.getElementById("formSpanInvOne").innerHTML = "<label>Examine<input type='radio' name='invInteract' value='1' /></label>Use<label><input type='radio' name='invInteract' value='2' /></label><br />";
	document.getElementById("formSpanInvTwo").innerHTML = "";
	for(var i = 0; i < 10; i++){
			if(inventory[i] != -1){
				if(inventory[i] == "bankLedger"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Suspicious Bank Ledger<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "safeCode"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Safe Code<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "halfWrittenLetter"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Half Written Letter<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "folderOfCodes"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Folder of Codes<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "keyCode"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Decoding Key<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "pocketSquare"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Pocket Square<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "email"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Email<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "invoice"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Invoice<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "flashDrive"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Flash Drive<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				else if(inventory[i] == "key"){
					document.getElementById("formSpanInvTwo").innerHTML += "<label>Mail Key<input type='radio' name='invSlot' value='" + i + "' /></label>";
				}
				if(i % 2 == 0 && i != 0){
					document.getElementById("formSpanInvTwo").innerHTML += "<br />";
				}
			}
		}
		document.getElementById("formSpanInvTwo").innerHTML += "<br /><button type='button' onclick='invDo(invInteract, invSlot)'))'>Enter</button>";
}