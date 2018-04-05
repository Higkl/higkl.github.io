

var img1 = document.createElement("img");
img1.src = "img/white_unpressed.png";
var img2 = document.createElement("img");
img2.src = "img/white_pressed.png";
var img3 = document.createElement("img");
img3.src = "img/black_unpressed.png";
var img4 = document.createElement("img");
img4.src = "img/black_pressed.png";


var pianoContent = document.querySelector(".piano-content");
var titleIndex;
var massivInstruments;
var saveInstrument;
var instrument;
var instrumentType;
var period = 0;
var instrumentCodes;
var audioM = [];
var timerM = [];
var audioSrcs = [];
var loadIndicator = document.querySelector("#load-indicator");
var loadBox = document.querySelector("#load-box");
var fadeBox = document.querySelector("#audio-fade");
var fadeInput = document.querySelector("#audio-fade input");


massivInstruments = ["Караталы", "Мриданга", "Эсарадж", "Вина", "Тампура", "Ситар", "Бансури", "Фисгармония", "Ханг", "Фортепиано"];


if(existStorage)
{
	saveInstrument = window.localStorage.instrument;							
	if(saveInstrument == "Караталы") titleIndex = 0;
	if(saveInstrument == "Мриданга") titleIndex = 1;
	if(saveInstrument == "Эсарадж") titleIndex = 2;
	if(saveInstrument == "Вина") titleIndex = 3;
	if(saveInstrument == "Тампура") titleIndex = 4;
	if(saveInstrument == "Ситар") titleIndex = 5;
	if(saveInstrument == "Бансури") titleIndex = 6;
	if(saveInstrument == "Фисгармония") titleIndex = 7;
	if(saveInstrument == "Ханг") titleIndex = 8;
	if(saveInstrument == "Фортепиано") titleIndex = 9;
}
else
{
	titleIndex = 0;
};


createSelect("230px", massivInstruments, titleIndex, "#select");
var selectElem = document.querySelector("#select-container");



fadeInput.onchange = function(e)
{

	if(  (fadeInput.value.search(/^0\d+/) != -1) || (fadeInput.value.search(/(^\d+$)|(^\d+\.\d+$)/) == -1)  )
	{
		if(existStorage)
		{
			if(instrument == "esaraj") fadeInput.value = window.localStorage.esaraj_fade;
			if(instrument == "veena") fadeInput.value = window.localStorage.veena_fade;
			if(instrument == "tampura") fadeInput.value = window.localStorage.tampura_fade;
			if(instrument == "sitar") fadeInput.value = window.localStorage.sitar_fade;
			if(instrument == "bansuri") fadeInput.value = window.localStorage.bansuri_fade;
			if(instrument == "harmonium") fadeInput.value = window.localStorage.harmonium_fade;
			if(instrument == "fortepiano") fadeInput.value = window.localStorage.fortepiano_fade;
		}
		else
		{
			fadeInput.value = period / 10;
		};
	}
	else
	{
		if(existStorage)
		{
			if(instrument == "esaraj") window.localStorage.esaraj_fade = fadeInput.value;
			if(instrument == "veena") window.localStorage.veena_fade = fadeInput.value;
			if(instrument == "tampura") window.localStorage.tampura_fade = fadeInput.value;
			if(instrument == "sitar") window.localStorage.sitar_fade = fadeInput.value;
			if(instrument == "bansuri") window.localStorage.bansuri_fade = fadeInput.value;
			if(instrument == "harmonium") window.localStorage.harmonium_fade = fadeInput.value;
			if(instrument == "fortepiano") window.localStorage.fortepiano_fade = fadeInput.value;
		};

		period = fadeInput.value * 10;
		loadBox.style.display = "inline-block";
		loadAudioSrcs();
	};
};


var pianoButtons = [];
for(var j = 0; j < 99; j++)
{
	pianoButtons[j] = pianoContent.querySelector("[data-index="+"'"+j+"'"+"]");
};


for(var k = 0; k < 99; k++)
{
	audioM[k] = [];
	timerM[k] = [];
};




selectElem.onchange = function(e)
{
	loadBox.style.display = "inline-block";
	if(existStorage){window.localStorage.instrument = e.value};
	identifyCodes(e.value);
};




if(existStorage)
{
	identifyCodes(window.localStorage.instrument);
}
else
{
	identifyCodes("Караталы");
};




function identifyCodes(selectInstrument)
{

	if(selectInstrument == "Караталы")
	{
		instrument = "karatalas";
		instrumentType = "percussion";
		instrumentCodes = karatalasCodes;
	};

	if(selectInstrument == "Мриданга")
	{
		instrument = "mridanga";
		instrumentType = "percussion";
		instrumentCodes = mridangaCodes;
	};

	if(selectInstrument == "Эсарадж")
	{
		instrument = "esaraj";
		instrumentType = "notpercussion";
		instrumentCodes = esarajCodes;
		if(existStorage){period = +window.localStorage.esaraj_fade * 10}
		else{period = esarajFade * 10};
	};

	if(selectInstrument == "Вина")
	{
		instrument = "veena";
		instrumentType = "notpercussion";
		instrumentCodes = veenaCodes;
		if(existStorage){period = +window.localStorage.veena_fade * 10}
		else{period = veenaFade * 10};
	};

	if(selectInstrument == "Тампура")
	{
		instrument = "tampura";
		instrumentType = "notpercussion";
		instrumentCodes = tampuraCodes;
		if(existStorage){period = +window.localStorage.tampura_fade * 10}
		else{period = tampuraFade * 10};
	};

	if(selectInstrument == "Ситар")
	{
		instrument = "sitar";
		instrumentType = "notpercussion";
		instrumentCodes = sitarCodes;
		if(existStorage){period = +window.localStorage.sitar_fade * 10}
		else{period = sitarFade * 10};
	};
	
	if(selectInstrument == "Бансури")
	{
		instrument = "bansuri";
		instrumentType = "notpercussion";
		instrumentCodes = bansuriCodes;
		if(existStorage){period = +window.localStorage.bansuri_fade * 10}
		else{period = bansuriFade * 10};
	};

	if(selectInstrument == "Фисгармония")
	{
		instrument = "harmonium";
		instrumentType = "notpercussion";
		instrumentCodes = harmoniumCodes;
		if(existStorage){period = +window.localStorage.harmonium_fade * 10}
		else{period = harmoniumFade * 10};
	};
	
	if(selectInstrument == "Ханг")
	{
		instrument = "hang";
		instrumentType = "percussion";
		instrumentCodes = hangCodes;
	};

	if(selectInstrument == "Фортепиано")
	{
		instrument = "fortepiano";
		instrumentType = "notpercussion";
		instrumentCodes = fortepianoCodes;
		if(existStorage){period = +window.localStorage.fortepiano_fade * 10}
		else{period = fortepianoFade * 10};
	};




	if(instrumentType == "notpercussion")
	{
		fadeBox.style.visibility = "visible";
		
		if(existStorage)
		{
			if(instrument == "esaraj") fadeInput.value = window.localStorage.esaraj_fade;
			if(instrument == "veena") fadeInput.value = window.localStorage.veena_fade;
			if(instrument == "tampura") fadeInput.value = window.localStorage.tampura_fade;
			if(instrument == "sitar") fadeInput.value = window.localStorage.sitar_fade;
			if(instrument == "bansuri") fadeInput.value = window.localStorage.bansuri_fade;
			if(instrument == "harmonium") fadeInput.value = window.localStorage.harmonium_fade;
			if(instrument == "fortepiano") fadeInput.value = window.localStorage.fortepiano_fade;
		}
		else
		{
			fadeInput.value = period / 10;
		};
	}
	else
	{
		fadeBox.style.visibility = "hidden";
		fadeInput.value = "";
	}

	audioSrcs = getSrcs(instrument);
	loadAudioSrcs();

};



function loadAudioSrcs()
{

	var qSrcs = 0;

	for(var i = 0; i < audioSrcs.length; i++)
	{
		if(audioSrcs[i] != undefined)
		{
			qSrcs++;
		};
	};

	loadIndicator.max = qSrcs;



	var lSrcs = 0;

	loadIndicator.value = lSrcs;

	for(var j = 0; j < audioSrcs.length; j++)
	{
		if(audioSrcs[j] != undefined)
		{
			var audio = document.createElement("audio");
			audio.oncanplay = function()
			{
				lSrcs++;
				loadIndicator.value = lSrcs;
				if(lSrcs == qSrcs)
				{
					loadBox.style.display = "none";
				};
			};
			audio.src = audioSrcs[j];
		};
	};

	addListeners();

};




function addListeners()
{

	pianoContent.onmousedown = function(e)
	{
		if(e.target.dataset.state == "unpressed")
		{
			e.target.dataset.state = "pressed";
			e.target.dataset.control = "pressed_mouse";
			mouseControlAudio(e.target.dataset.index, "down");
		};
	};

	pianoContent.onmouseup = function(e)
	{
		if(e.target.dataset.control == "pressed_mouse")
		{
			e.target.dataset.state = "unpressed";
			e.target.dataset.control = "";
			mouseControlAudio(e.target.dataset.index, "up");
		};
	};

	pianoContent.onmouseout = function(e)
	{
		if(e.target.dataset.control == "pressed_mouse")
		{
			e.target.dataset.state = "unpressed";
			e.target.dataset.control = "";
			mouseControlAudio(e.target.dataset.index, "up");
		};
	};

	window.onkeydown = function(e)
	{
		for(var i = 0; i < instrumentCodes.length; i++)
		{
			if(instrumentCodes[i] == e.keyCode)
			{
				if(pianoButtons[i].dataset.state == "unpressed")
				{
					pianoButtons[i].dataset.state = "pressed";
					pianoButtons[i].dataset.control = "pressed_board";
					boardControlAudio(i, "down");
				};
			};
		};
	};

	window.onkeyup = function(e)
	{
		for(var i = 0; i < instrumentCodes.length; i++)
		{
			if(instrumentCodes[i] == e.keyCode)
			{
				if(pianoButtons[i].dataset.control == "pressed_board")
				{
					pianoButtons[i].dataset.state = "unpressed";
					pianoButtons[i].dataset.control = "";
					boardControlAudio(i, "up");
				};
			};
		};
	};

};




function mouseControlAudio(index, state)
{


	if(audioSrcs[+index] != undefined)
	{

		if(instrumentType == "percussion")
		{
			if(state == "down")
			{
				var audio = document.createElement("audio");
				audio.src = audioSrcs[+index];
				audio.onended = function()
				{
					audio = undefined;
				};
				audio.play();
			};
		}
		else
		{

			if(state == "down")
			{
				audioM[index][audioM[index].length] = document.createElement("audio");
				audioM[index][audioM[index].length - 1].src = audioSrcs[+index];
				audioM[index][audioM[index].length - 1].play();
			};

			if(state == "up")
			{

				(function(cnt)
				{

					timerM[index][cnt - 1] = setInterval(function()
					{
						audioM[index][cnt - 1].volume -= 0.01;

						if(audioM[index][cnt - 1].volume < 0.01)
						{
							audioM[index][cnt - 1].volume = 0;
							clearInterval(timerM[index][cnt - 1]);
						};

					}, period);

				})(audioM[index].length);

			};

		};

	};


};



function boardControlAudio(index, state)
{


	if(audioSrcs[+index] != undefined)
	{

		if(instrumentType == "percussion")
		{
			if(state == "down")
			{
				var audio = document.createElement("audio");
				audio.src = audioSrcs[+index];
				audio.onended = function()
				{
					audio = undefined;
				};
				audio.play();
			};
		}
		else
		{

			if(state == "down")
			{
				audioM[index][audioM[index].length] = document.createElement("audio");
				audioM[index][audioM[index].length - 1].src = audioSrcs[+index];
				audioM[index][audioM[index].length - 1].play();
			};

			if(state == "up")
			{

				(function(cnt)
				{

					timerM[index][cnt - 1] = setInterval(function()
					{
						audioM[index][cnt - 1].volume -= 0.01;

						if(audioM[index][cnt - 1].volume < 0.01)
						{
							audioM[index][cnt - 1].volume = 0;
							clearInterval(timerM[index][cnt - 1]);
						};

					}, period);

				})(audioM[index].length);

			};

		};

	};


};








