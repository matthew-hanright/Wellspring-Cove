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
		
	}
	if(fifthQuest[0] != null){
		setLine(4);
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
		document.getElementById("parentParagraph").innerHTML += "<p>Ice Cold, inc. HQ is an empty, ramshackle warehouse without a sign.<br />The front door was unlocked, but the office door, <br />whose window has been spray painted black, <br />is secured with a large combination lock.<br />What will you do?<br />";
		needInvoice = true;
		document.removeEventListener("click", progressText, false);
	}
	else if(line == 1){
		document.getElementById("parentParagraph").innerHTML += "<br />You use the six digit phone number on the lock and it falls off.<br />Inside the office are racks of guns, armor, and maps with<br />small flags marking locations.<br />A small stack of printed emails sits on the middle table.<br />";
		document.addEventListener("click", progressText, false);
		line++;
	}
	else if(line == 2){
		document.getElementById("parentParagraph").innerHTML += "<br />The top email is from an anonymous sender,<br /> requesting your assassination and promising $50K payment.<br />The next is from the same sender, requesting<br />Elwin Karl's assassination, and promising $150K payment.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />You take the emails as evidence.<br />";
		addItem("email");
		document.getElementById("fourthQuest").innerHTML += "<li>Picked up the email</li>";
		fourthQuest[1] = "Picked up the email";
		line++;
	}
	else if(line == 3){
		document.getElementById("parentParagraph").innerHTML += "<br />You decide to leave before one of the assassins shows up.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />The only place left to investigate is the victim's house.<br />You may now visit the victim's house.<br />";
		document.getElementById("navList").innerHTML += "<li><a href='victimHouse.html'>Victim's House</a></li>"
		document.getElementById("fifthQuestTitle").style.visibility = "visible";
		document.getElementById("fifthQuest").innerHTML += "<li>Go to the Victim's House</li>";
		fifthQuest[0] = "Go to the Victim's House";
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
		localStorage.setItem("needPocketSquare", needPocketSquare);
		localStorage.setItem("needInvoice", needInvoice);
		localStorage.setItem("needEmail", needEmail);
		localStorage.setItem("needFlashDrive", needFlashDrive);
		localStorage.setItem("needKeyCode", needKeyCode);
	}
	else if(line == 4){
		document.getElementById("parentParagraph").innerHTML += "<p><br />Nothing has changed in the warehouse.<br /></p>";
		revealInvDo();
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
		localStorage.setItem("needPocketSquare", needPocketSquare);
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
		if(inventory[parseInt(slotDo)] == "invoice"){
			if(needInvoice){
				needInvoice = false;
				setLine(1);
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