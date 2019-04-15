var line = 0;
var name = "";
var inventory = ["-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1"];
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
function load(){//This first function enables the click to progress mechanic and sets the inventory to ensure it stays constant across pages
	inventory = JSON.parse(localStorage.getItem("inventory"));
	updateInventory();
	revealInvDo();
	name = localStorage.getItem("name");
	document.addEventListener("click", progressText, false);
	for(var i = 0; i < 10; i++){
		if(inventory[i] == null){
			inventory[i] = "-1";
		}
	}
	document.getElementById("secondQuestTitle").style.visibility = "hidden";
	document.getElementById("thirdQuestTitle").style.visibility = "hidden";
	document.getElementById("fourthQuestTitle").style.visibility = "hidden";
	document.getElementById("fifthQuestTitle").style.visibility = "hidden";
	document.getElementById("sixthQuestTitle").style.visibility = "hidden";
	if(JSON.parse(localStorage.getItem("firstQuest")) != undefined){
		firstQuest = JSON.parse(localStorage.getItem("firstQuest"));
		for(var i = 0; i < firstQuest.length; i++){
			document.getElementById("firstQuest").innerHTML += "<li>" + firstQuest[i] + "</li>";
			if(firstQuest[i] != null){
				
			}
		}
	}
	if(JSON.parse(localStorage.getItem("secondQuest")) != undefined){
		secondQuest = JSON.parse(localStorage.getItem("secondQuest"));
		for(var i = 0; i < secondQuest.length; i++){
			if(secondQuest[i] != null){
				document.getElementById("secondQuestTitle").style.visibility = "visible";
			}
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
				document.getElementById("sixthQuestTitle").style.visibility = "visible";
			}
		}
	}
	if(firstQuest[0] != null){
		
	}
	if(secondQuest[0] != null){
		
	}
	if(thirdQuest[0] != null){
		
	}
	if(fourthQuest[0] != null){
		document.getElementById("navList").innerHTML += "<li><a href='iceColdHQ.html'>Ice Cold, Inc</a></li>";
		setLine(24);
	}
	if(fifthQuest[0] != null){
		document.getElementById("navList").innerHTML += "<li><a href='victimHouse.html'>Victim's House</a></li>"
	}
	if(sixthQuest[0] != null){
		
	}
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
function progressText(){//This is the main function which prints text based on the variable 'line'
	if(line == 0){
		document.getElementById("parentParagraph").innerHTML += "<p>You stand in a finely decorated corporate lobby.<br />Two sets of escalators connect to the next floor,<br />and nestled between them is a large desk with a receptionist<br />behind it.<br />He wears an Obex uniform: a deep navy blue suit with a dark red pocket square.<br /><br />Behind the desk is a doorway labeled Mail Room<br />";
		line++;
		document.addEventListener("click", progressText, false);
	}
	else if(line == 1){
		document.getElementById("parentParagraph").innerHTML += "<br />You approach the receptionist.<br />";
		document.removeEventListener("click", progressText, false);
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(1)'>Be polite</button><button type='button' onclick='setLine(2)'>Be direct</button><button type='button' onclick='setLine(3)'>Ask to enter the mail room</button><br />";
		var hasPocketSquare = false;
		for(var i = 0; i < 10; i++){
			if(inventory[i] == "pocketSquare"){
				var hasPocketSquare = true;
			}
		}
		if(hasPocketSquare){
			document.getElementById("formSpanOne").innerHTML += "<button type='button' onclick='setLine(5)'>Ask, Do I know you?</button><br />";
		}
	}
	else if(line == 2){
		document.getElementById("parentParagraph").innerHTML += "<br />You ask the receptionist how they are doing.<br />\"I'm well, thank you.  How may I help you?\"<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(8)'>Say you are an investigator</button><button type='button' onclick='setLine(1)'>Be direct</button><button type='button' onclick='setLine(2)'>Ask to enter the mail room</button>";
	}
	else if(line == 3){
		document.getElementById("parentParagraph").innerHTML += "<br />You say you are investigating suspicious payments as part of an investigation.<br />";
		if(bankRecords){
			document.getElementById("parentParagraph").innerHTML += "<br /><br />The receptionist speaks quietly into a phone for a moment<br />and a security guard arrives to escort you out of the building.<br />Try coming back again later.<br /></p>";
		}
		else{
			document.getElementById("parentParagraph").innerHTML += "<br />The receptionist asks to see the evidence.  You have none.<br />They ask you to leave immediately.<br />Have you decoded the folder of codes?<br />Try coming back again later<br /></p>";
		}
		document.getElementById("formSpanOne").innerHTML = "";
	}
	else if(line == 4){
		document.getElementById("parentParagraph").innerHTML += "<br />\"Are you a resident here?\"<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(-3)'>No</button><button type='button' onclick='setLine(1)'>Lie</button>";
	}
	else if(line == 5){
		document.getElementById("parentParagraph").innerHTML += "<br />The receptionist asks to see your id.<br />You don't have one.<br />The receptionist asks you to leave.<br />Try coming back again later.<br />";
		document.getElementById("formSpanOne").innerHTML = "";
	}
	else if(line == 6){
		document.getElementById("parentParagraph").innerHTML += "<br />He immediately responds with a definite no.<br />";
		document.getElementById("formSpanOne").innerHTML = "";
		needPocketSquare = true;
		setTimeout(function(){
			if(needPocketSquare){
				setLine(-5);
			}
		}, 10000);
	}
	else if(line == 7){
		needPocketSquare = false;
		document.getElementById("parentParagraph").innerHTML += "<br />\"Fine, you caught me.  What do you want from me?\"<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(1)'>Ask about Elwin</button><button type='button' onclick='setLine(2)'>Ask for more information</button>";
	}
	else if(line == 8){
		document.getElementById("parentParagraph").innerHTML += "<br />\"The CEO might know, here's his mail key.<br />\"But before you check that the head of payroll might have information for you.<br />\"I'll take you to him.\"<br />";
		addItem("key")
		document.getElementById("formSpanOne").innerHTML = "";
		document.addEventListener("click", progressText, false);
		setLine(3);
	}
	else if(line == 9){
		document.getElementById("parentParagraph").innerHTML += "<br />\"I'm not willing to die for you.  You'll have to figure it out yourself.<br />";
		setLine(-2);
	}
	else if(line == 10){
		document.getElementById("parentParagraph").innerHTML += "<br />You say you are investigating an employee in connection with a murder.<br />The receptionist says he'll take you to the head of payroll.<br />";
		document.getElementById("formSpanOne").innerHTML = "";
		line++;
		document.addEventListener("click", progressText, false);
	}
	else if(line == 11){
		document.getElementById("parentParagraph").innerHTML += "<br />The receptionist leads you down a long corridor<br />and up an elevator, to a large corner office on the fifth floor.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />The receptionist introduces you as a detective and leaves.";
		document.getElementById("parentParagraph").innerHTML += "<br />The head of payroll is a small man who wears comically large glasses.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />\"Well detective, I'm willing to help you any way I can.\"";
		document.getElementById("parentParagraph").innerHTML += "<br />You explain that you are investigating unusual large payments to Elwin from Obex.<br />";
		if(bankRecords){
			document.getElementById("parentParagraph").innerHTML += "<br />\"Do you have any proof of these payments?\"<br />You show him the decoded bank records.<br />";
			document.getElementById("parentParagraph").innerHTML += "<br />\"Ah,\" he says, expression unchanged.<br />\"Those are refunds for a defunct computer Mr. Karl purchased from us.<br />\"You'll have to excuse me, but I'm rather busy at the moment.<br />\"Could you please come back later?\"<br />";
			line++;			
		}
		else{
			document.getElementById("parentParagraph").innerHTML += "<br />\"Do you have any proof of these payments?\"<br />You don't.<br />\"Then you're wasting my time!\"<br />A security guard escorts you out.<br />Have you decoded the folder of codes?<br />Try coming back again later.<br />";
			document.removeEventListener("click", progressText, false);
		}
	}
	else if(line == 12){
		document.getElementById("parentParagraph").innerHTML += "<br />A security guard escorts you out.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />As you leave the building a bit of wall explodes out at you.<br />Someone's shooting at you!<br />What will you do?<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(1)'>Go back inside</button><button type='button' onclick='setLine(2)'>Run to the nearby alley</button><button type='button' onclick='setLine(3)'>Duck behind a parked car</button>";
		document.removeEventListener("click", progressText, false);
	}
	else if(line == 13){
		document.getElementById("parentParagraph").innerHTML += "<br />A second bullet bites through your back as you turn around.<br />Game over<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(-1)'>Try again</button>";
	}
	else if(line == 14){
		document.getElementById("parentParagraph").innerHTML += "<br />You trip over debris as you run to the alley and the sniper kills you.<br />Game over<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(-2)'>Try again</button>";
	}
	else if(line == 15){
		document.getElementById("parentParagraph").innerHTML += "<br />You duck behind a car and no more shots ring out.<br />The sniper must be reloading.<br />What will you do?<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(1)'>Stay put</button><button type='button' onclick='setLine(2)'>Shoot back</button><button type='button' onclick='setLine(3)'>Move behind the next car</button>";
	}
	else if(line == 16){
		document.getElementById("parentParagraph").innerHTML += "<br />You think you are safe, until another shot rings out<br />catching you just in the top of your head.<br />Game over<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(-4)'>Try again</button>";
	}
	else if(line == 17){
		document.getElementById("parentParagraph").innerHTML += "<br />Peeking over the car you take aim at the nearest <br />open window, unable to see the sniper.<br />On the third shot the sniper fires back, hitting you in the head.<br />Game over<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(-5)'>Try again</button>";
	}
	else if(line == 18){
		document.getElementById("parentParagraph").innerHTML += "<br />You duck behind another car as a bullets explodes more of the wall behind you.<br />The sniper will have to move to shoot you now.<br />What will you do?<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(1)'>Run across the street</button><button type='button' onclick='setLine(3)'>Go back to the Obex building</button><button type='button' onclick='setLine(2)'>Stay put</button>";
	}
	else if(line == 19){
		document.getElementById("parentParagraph").innerHTML += "<br />Just as you step over the yellow lines a bullet rips through your chest.<br />Game over<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(-7)'>Try again</button>";
	}
	else if(line == 20){
		document.getElementById("parentParagraph").innerHTML += "<br />The road is eerily quiet until a shot rings out.<br />The sniper shot you through the car windows.<br />Game over<br />";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(-8)'>Try again</button>";
	}
	else if(line == 21){
		document.getElementById("formSpanOne").innerHTML = "";
		document.getElementById("parentParagraph").innerHTML += "<br />You hurriedly sprint back into the Obex building.<br />There is no sign of the receptionist.<br />You decide to investigate the mail room, both for the investigation and<br />to get farther away from the sniper.<br />";
		line++;
		thirdQuest[1] = "Avoided being assassinated";
		document.getElementById("thirdQuest").innerHTML += "<li>Avoided being assassinated</li>";
		document.addEventListener("click", progressText, false);
	}
	else if(line == 22){
		document.getElementById("parentParagraph").innerHTML += "<br />It isn't long until you find the CEO's mailbox.<br />";
		var hasKey = false;
		for(var i = 0; i < 10; i++){
			if(inventory[i] == "key"){
				hasKey = true;
			}
		}
		if(hasKey){
			document.getElementById("parentParagraph").innerHTML += "<br />You unlock it with the key the receptionist gave you.<br />";
		}
		else{
			document.getElementById("parentParagraph").innerHTML += "<br />You manage to pick the lock, but it is permanently damaged.<br />";
		}
		line++;
	}
	else if(line == 23){
		document.getElementById("parentParagraph").innerHTML += "Inside in an invoice from \"Ice Cold, inc.,\" an AC repair company.<br />It lists a payment of $150,000 for \"Leaky unit removal.\"<br />There is also an address in the warehouse disctrict,<br />and a phone number with only six digits.<br />";
		document.getElementById("parentParagraph").innerHTML += "You take the invoice as evidence.<br />";
		addItem("invoice");
		document.getElementById("parentParagraph").innerHTML += "<br />You may now visit the Ice Cold, Inc. HQ.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />You also see a back exit at the end of the mail room to escape.<br /></p>";
		document.getElementById("fourthQuestTitle").style.visibility = "visible";
		document.getElementById("navList").innerHTML += "<li><a href='iceColdHQ.html'>Ice Cold, Inc</a></li>";
		fourthQuest[0] = "Picked up the invoice";
		revealInvDo();
		document.getElementById("fourthQuest").innerHTML += "<li>Picked up the invoice</li>";
		document.removeEventListener("click", progressText, false);
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
		localStorage.setItem("needPocketSquare", false);
		localStorage.setItem("needInvoice", needInvoice);
		localStorage.setItem("needEmail", needEmail);
		localStorage.setItem("needFlashDrive", needFlashDrive);
		localStorage.setItem("needKeyCode", needKeyCode);
	}
	else if(line == 24){
		document.getElementById("parentParagraph").innerHTML += "<p>The building is roped off for \"Renovations\".<br />There is also fresh cement filling the bullet holes in the wall.<br /></p>";
		localStorage.setItem("inventory", JSON.stringify(inventory));
		localStorage.setItem("name", name);
		localStorage.setItem("firstQuest", JSON.stringify(firstQuest));
		localStorage.setItem("secondQuest", JSON.stringify(secondQuest));
		localStorage.setItem("thirdQuest", JSON.stringify(thirdQuest));
		localStorage.setItem("fourthQuest", JSON.stringify(fourthQuest));
		localStorage.setItem("fifthQuest", JSON.stringify(fifthQuest));
		document.removeEventListener("click", progressText, false);
		localStorage.setItem("needLedger", needLedger);
		localStorage.setItem("needSafeCode", needSafeCode);
		localStorage.setItem("needHalfWrittenLetter", needHalfWrittenLetter);
		localStorage.setItem("needFolderOfCodes", needFolderOfCodes);
		localStorage.setItem("needPocketSquare", false);
		localStorage.setItem("needInvoice", needInvoice);
		localStorage.setItem("needEmail", needEmail);
		localStorage.setItem("needFlashDrive", needFlashDrive);
		localStorage.setItem("needKeyCode", needKeyCode);
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
		else if(inventory[parseInt(slotDo)] == "pocketSquare"){
			if(needPocketSquare){
				needPocketSquare = false;
				line = 7;
				progressText();
			}
			else{
				document.getElementById("parentParagraph").innerHTML += "<br />Nothing happened.<br />";
			}
		}
		else {
			document.getElementById("parentParagraph").innerHTML += "<br />Nothing happened.<br />";
		}
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
		if(inventory[i] == "-1"){//This finds an empty slot
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
function revealInvDo(){
	document.getElementById("formSpanInvOne").innerHTML = "";
	document.getElementById("formSpanInvOne").innerHTML = "<br /><label>Examine<input type='radio' name='invInteract' value='1' /></label>Use<label><input type='radio' name='invInteract' value='2' /></label><br />";
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