
//creating var to be use...
 let color, width, height;
 // When size is submitted by the user, call makeGrid()
let sizePicker = document.getElementById("sizePicker");
	sizePicker.addEventListener("submit", function(event){
	event.preventDefault();
	//selecting size inputwidth and saving to var width
	width = document.getElementById("inputWeight").value
	//selecting size inputheight and saving to var height
	height = document.getElementById("inputHeight").value
	//calling make makeGrid() function...
	makeGrid(height, width);
});

 //$("#pixelCanvas").css("border-radius", "10px");
 //creating makeGrid()
function makeGrid(x, y) {
	//removing whatever tr that has been created...
	$('tr').remove();
	//using nexted for loop to create a new tr and td and loop over tr to create new td.
	for(let i = 1; i <= x; i++){
		$("#pixelCanvas").append('<tr id=table'+i+'> </tr>');
		for(let k = 1; k <= y; k++){
			$("#table" + i).append("<td></td>");
		}
	}
	//creating an eventlistener .click to set a color when ever we click inside the td..
	$("td").click(function addColor(){
	//selecting color value and saving it inside var color.
	color = document.getElementById("colorPicker").value;
	//using conditional sratement to add and remove color whenever we click inside td
	if($(this).attr("style")){
		$(this).removeAttr("style");	
	} else{
		$(this).css("background-color", color);
	}
});

};

