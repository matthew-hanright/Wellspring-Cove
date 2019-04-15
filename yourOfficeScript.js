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
		}
		if(secondQuest[0] != null){
			document.getElementById("navList").innerHTML += "<li><a id='parkingGarageLink' href='parkingGarage.html'>Parking Garage</a></li>";
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
				document.getElementById("sixthQuestTitle").style.visibility = "visible";
			}
		}
	}
	if(sixthQuest[0] != null){
		document.getElementById("navList").innerHTML = "";
		document.getElementById("formSpanInvOne").innerHTML = "";
		document.getElementById("formSpanInvTwo").innerHTML = "";
		setLine(100);
		return;
	}
	if(fifthQuest[0] != null){
		document.getElementById("navList").innerHTML += "<li><a href='victimHouse.html'>Victim's House</a></li>"
	}
	if(fourthQuest[0] != null){
		document.getElementById("navList").innerHTML += "<li><a href='iceColdHQ.html'>Ice Cold, Inc</a></li>";
	}
	if(thirdQuest[0] != null){
		document.getElementById("navList").innerHTML += "<li><a id='obexHQLink' href='obexHQ.html'>Obex Headquarters</a></li>";
	}
	if(secondQuest[0] != null){
		setLine(8);
	}
	if(firstQuest[0] != null){
		
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
		document.getElementById("parentParagraph").innerHTML += "<p>Your office, on the first floor of the precint,<br />looks like a more cluttered version of the victim's own office.<br />Binders from old cases line two bookshelves with knick-knacks mixed in.<br />";
		line++;
	}
	else if(line == 1){
		document.getElementById("parentParagraph").innerHTML += "<br />A stack of papers waits on your desk to be filled out<br />but a large orange envelope peeks out from the bottom.<br />";
		line++;
	}
	else if(line == 2){
		document.getElementById("parentParagraph").innerHTML += "<br />The envelope is filled with pages covered in numbers<br />and one page covered in seemingly random words.<br />";
		line++;
	}
	else if(line == 3){
		document.getElementById("parentParagraph").innerHTML += "<br />Some of the words remind you of the suspicious bank ledger.<br />What would you like to do?<br />";
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
				if(i % 2 == 0 && i != 0){
					document.getElementById("formSpanInvTwo").innerHTML += "<br />";
				}
			}
		}
		document.getElementById("formSpanInvTwo").innerHTML += "<br /><button type='button' onclick='invDo(invInteract, invSlot)'))'>Enter</button>";
		needLedger = true;
		document.removeEventListener("click", progressText, false);
	}
	else if(line == 4){
		document.getElementById("parentParagraph").innerHTML += "<br />You manage to decode the note using the bank ledger.<br />It reads:<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />Dear " + name + ",<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />I have information that could be of use to you.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />If you are interested, meet me at the parking garage near the UberMarket at seven.<br />";
		document.getElementById("parentParagraph").innerHTML += "<br />Good luck.  You'll need it.<br />";
		document.addEventListener("click", progressText, false);
		line++;
	}
	else if(line == 5){
		document.getElementById("secondQuestTitle").style.visibility = "visible";
		document.getElementById("secondQuest").innerHTML += "<li>Picked up the Folder of Codes</li>";
		addItem("folderOfCodes");
		revealInvDo();
		secondQuest[1] = "Picked up the Folder of Codes";
		document.getElementById("secondQuest").innerHTML += "<li id='goToParking'>Go to the Parking Garage or</li><li id='goToBoss'>Take the Tip to Your Boss</li>";
		document.getElementById("parentParagraph").innerHTML += "<br />Will you go to the parking garage or show the tip to your boss?<br /></p>";
		document.getElementById("formSpanOne").innerHTML = "<button type='button' onclick='setLine(1)'>Go to the parking garage</button> <button type='button' onclick='setLine(2)'>Go to your boss</button><br />";
		document.removeEventListener("click", progressText, false);
	}
	else if(line == 6){
		document.getElementById("goToBoss").remove();
		secondQuest[0] = "Went to the Parking Garage";
		document.getElementById("formSpanOne").innerHTML = "";
		document.getElementById("goToParking").innerHTML = "Went to the Parking Garage";
		document.getElementById("parentParagraph").innerHTML += "<br /><p>Click the link to the left to go to the parking garage.</p><br />";
		if(document.getElementById("parkingGarageLink") == undefined){
			document.getElementById("navList").innerHTML += "<li><a id='parkingGarageLink' href='parkingGarage.html'>Parking Garage</a></li>";
		}
		localStorage.setItem("inventory", JSON.stringify(inventory));
		localStorage.setItem("name", name);
		localStorage.setItem("firstQuest", JSON.stringify(firstQuest));
		localStorage.setItem("secondQuest", JSON.stringify(secondQuest));
		localStorage.setItem("thirdQuest", JSON.stringify(thirdQuest));
		localStorage.setItem("fourthQuest", JSON.stringify(fourthQuest));
		localStorage.setItem("fifthQuest", JSON.stringify(fifthQuest));
		localStorage.setItem("sixthQuest", JSON.stringify(sixthQuest));
	}
	else if(line ==7){
		secondQuest[0] = "Went to Your Boss";
		document.getElementById("goToParking").remove();
		document.getElementById("formSpanOne").innerHTML = "";
		document.getElementById("parentParagraph").innerHTML += "<br /><p>You show the tip to your boss.<br />She is impressed, and says that they'll send a swat team to the parking garage.<br /><br />Later that night, as you leave work, a shot rings out.<br />It caught you in your heart, and as your vision fades you realize<br />that someone must have leaked information about the case.<br /><br />Game Over<br />Refresh the page to try again</p><br />";
		document.getElementById("formSpanInvOne").innerHTML = "";
		document.getElementById("formSpanInvTwo").innerHTML = "";
		document.getElementById("navList").innerHTML = "";
	}
	else if(line == 8){
		document.removeEventListener("click", progressText, false);
		document.getElementById("parentParagraph").innerHTML += "<br /><p>Nothing has changed at your office.</p><br />";
		localStorage.setItem("inventory", JSON.stringify(inventory));
		localStorage.setItem("name", name);
		localStorage.setItem("firstQuest", JSON.stringify(firstQuest));
		localStorage.setItem("secondQuest", JSON.stringify(secondQuest));
		localStorage.setItem("thirdQuest", JSON.stringify(thirdQuest));
		localStorage.setItem("fourthQuest", JSON.stringify(fourthQuest));
		localStorage.setItem("fifthQuest", JSON.stringify(fifthQuest));
		localStorage.setItem("sixthQuest", JSON.stringify(sixthQuest));
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
	else if(line == 100){
		document.getElementById("parentParagraph").innerHTML += "<p>You rush to your boss's office and throw open the door.<br />";
		document.addEventListener("click", progressText, false);
		line++;
	}
	else if(line == 101){
		document.getElementById("parentParagraph").innerHTML += "<br />You throw your evidenve down on her desk and explain about the flash drive.<br />";
		line++;
	}
	else if(line == 102){
		document.getElementById("parentParagraph").innerHTML += "<br />Her eyes progressively widen as you talk.<br />When you finally finish speaking, she clears her throat and responds.<br />";
		line++;
	}
	else if(line == 103){
		document.getElementById("parentParagraph").innerHTML += "<br />\"There's just one thing you missed, Detective " + name + ".<br />\"The Obex CEO didn't order the assassination.<br />\"Neither did Speaker Herman.<br />\"I did.<br />\"The FBI is just as invested in this deal as any other part of the federal government.<br />\"But thank you for recovering this last bit of evidence.\"<br />";
		line++;
	}
	else if(line == 104){
		document.getElementById("parentParagraph").innerHTML += "<br />Your mind is reeling from her words, but before you can react<br />she pulls out a pistol and aims it at your head.<br />";
		line++;
	}
	else if(line == 105){
		document.getElementById("parentParagraph").innerHTML += "<br />\"Thanks for your hard work.\"";
		document.getElementById("parentParagraph").innerHTML += "<br /><br /><br />Thanks for playing Wellspring Cove "  + name + "!<br />Credits:<br />Gameplay: Matthew Hanright<br />Victims Office Background: Denise Lukins: <a href='https://c1.staticflickr.com/3/2484/3644857655_4d179f0f60_b.jpg'>Link</a><br />Your Office Background: Georgetown Powerplant Museum: <a href='https://upload.wikimedia.org/wikipedia/commons/f/f7/Georgetown_PowerPlant_Museum_office.jpg'>Link</a><br />Parking Garage Background: Jan Tik: <a href='https://upload.wikimedia.org/wikipedia/commons/9/92/Free_Parking.jpg'>Link</a><br />Obex HQ Background: WiNG: <a href='https://upload.wikimedia.org/wikipedia/commons/3/34/International_Commerce_Centre_Lift_Lobby_Overview_2008.jpg'>Link</a><br />Ice Cold HQ Background: Raedon: <a href='https://cdn.pixabay.com/photo/2014/08/18/15/40/warehouse-420821_960_720.jpg'>Link</a><br />Victims House Background: home2home: <a href='https://upload.wikimedia.org/wikipedia/commons/c/c4/Ovolo_2AR_living_room.jpg'>Link</a><br />Song: Tony Ferrari: <a href='https://www.youtube.com/watch?v=emT4XhB73UA'>Link</a>";
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
		if(inventory[parseInt(slotDo)] == "bankLedger"){
			if(needLedger == true){
				setLine(1);
				needLedger = false;
			}
			else{
				document.getElementById("parentParagraph").innerHTML += "<br />Nothing happened.<br />";
			}
		}
		else if(inventory[parseInt(slotDo)] == "keyCode"){
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