



function createSelect(widthElem, valuesMassiv, titleIndex, appendSelector)
{



var selectContainer = document.createElement("div");
selectContainer.id = "select-container";
selectContainer.innerHTML = '<div id="select-face"> <div> <span> </span> <i> &#65088; </i> </div> </div> <div id="select-hidden"> </div>';


	var optionDiv;

	selectContainer.querySelector("#select-face div span").innerText = valuesMassiv[titleIndex];
	selectContainer.querySelector("#select-face div").style.width = widthElem;
		
	for(var i = 0; i < valuesMassiv.length; i++)
	{
		if(i != titleIndex)
		{
			optionDiv = document.createElement("div");
			optionDiv.style.width = widthElem;
			optionDiv.innerText = valuesMassiv[i];
			selectContainer.querySelector("#select-hidden").appendChild(optionDiv);
		};
	};



var styleElem = document.createElement('style');

styleElem.innerHTML = " \
#select-container * \
{ \
	box-sizing: border-box; \
	font-family: Verdana; \
	-webkit-user-select: none; \
	-moz-user-select: none; \
	-ms-user-select: none; \
	user-select: none; \
} \
 \
#select-container \
{ \
	display: inline-block; \
} \
 \
#select-face \
{ \
	display: inline-block; \
} \
 \
#select-hidden \
{ \
	display: none; \
	position: absolute; \
    z-index: 1500;\
    background-color: white; \
} \
 \
#select-face div, #select-hidden div \
{ \
	position: relative; \
	height: 27px; \
	padding: 2px 0px 0px 6px; \
	border: 2px solid #b0b0b0; \
	border-top: 0px; \
} \
 \
#select-face div \
{ \
	border-top: 2px solid #b0b0b0; \
	border-right: 25px solid #b0b0b0; \
} \
 \
i \
{ \
	font-style: normal; \
	font-weight: bold; \
	color: #777777; \
	position: absolute; \
	right: -20px; \
	top: 3px; \
}";

selectContainer.appendChild(styleElem);






var face = selectContainer.querySelector("#select-face");
var faceDiv = selectContainer.querySelector("#select-face div");
var hidden = selectContainer.querySelector("#select-hidden");



selectContainer.onmouseleave = function(e)
{
	hidden.style.display = "none";
};

face.onmousedown = function(e)
{
	if( (!hidden.style.display) || (hidden.style.display == "none") )
	{
		hidden.style.display = "block";
	}
	else
	{
		hidden.style.display = "none";
	};
};

hidden.onmousedown = function(e)
{
	var faceDivTextCopy = faceDiv.children[0].innerText;
	faceDiv.children[0].innerText = e.target.innerText;
	e.target.innerText = faceDivTextCopy;
	hidden.style.display = "none";

	var change = new Event("change");
	change.value = faceDiv.children[0].innerText;
	selectContainer.dispatchEvent(change);
};



document.querySelector(appendSelector).appendChild(selectContainer);



};

