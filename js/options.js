



var massivInstruments = ["Караталы", "Мриданга", "Эсарадж", "Вина", "Тампура", "Ситар", "Бансури", "Фисгармония", "Ханг", "Фортепиано"];
createSelect("230px", massivInstruments, 0, "#select"); 				
var selectElem = document.querySelector("#select-container");
var allInputs = document.querySelectorAll(".right-column input");
var errorValue;
var errorRepeat;
var beforeMassiv;


var codesAndSymbols =
[
	[192, "`"],
	[48, "0"],
	[49, "1"],
	[50, "2"],
	[51, "3"],
	[52, "4"],
	[53, "5"],
	[54, "6"],
	[55, "7"],
	[56, "8"],
	[57, "9"],
	[189, "-"],
	[187, "="],
	[65, "a"],
	[66, "b"],
	[67, "c"],
	[68, "d"],
	[69, "e"],
	[70, "f"],
	[71, "g"],
	[72, "h"],
	[73, "i"],
	[74, "j"],
	[75, "k"],
	[76, "l"],
	[77, "m"],
	[78, "n"],
	[79, "o"],
	[80, "p"],
	[81, "q"],
	[82, "r"],
	[83, "s"],
	[84, "t"],
	[85, "u"],
	[86, "v"],
	[87, "w"],
	[88, "x"],
	[89, "y"],
	[90, "z"],
	[219, "["],
	[221, "]"],
	[186, ";"],
	[222, "'"],
	[220, "\\"],
	[188, ","],
	[190, "."],
	[191, "/"],
	[96, "Num 0"],
	[97, "Num 1"],
	[98, "Num 2"],
	[99, "Num 3"],
	[100, "Num 4"],
	[101, "Num 5"],
	[102, "Num 6"],
	[103, "Num 7"],
	[104, "Num 8"],
	[105, "Num 9"],
	[110, "Num ."],
	[111, "Num /"],
	[106, "Num *"],
	[109, "Num -"],
	[107, "Num +"]
];



if(!existStorage)
{
	document.querySelector("#history").style.display = "block";
};



selectElem.onchange = function(e)
{
	beforeWriteInputs(e.value);
};



beforeWriteInputs("Караталы");



function beforeWriteInputs(selectInstrument)
{
	if(!existStorage)
	{
		for(var i = 0; i < 99; i++)
		{
			allInputs[i].disabled = "disabled";
		};
	};

	for(var i = 0; i < 99; i++)
	{
		allInputs[i].value = "";
	};


	if(selectInstrument == "Караталы")
	{
		writeInputs(karatalasCodes);
	};

	if(selectInstrument == "Мриданга")
	{
		writeInputs(mridangaCodes);
	};

	if(selectInstrument == "Эсарадж")
	{
		writeInputs(esarajCodes);
	};

	if(selectInstrument == "Вина")
	{
		writeInputs(veenaCodes);
	};

	if(selectInstrument == "Тампура")
	{
		writeInputs(tampuraCodes);
	};

	if(selectInstrument == "Ситар")
	{
		writeInputs(sitarCodes);
	};
	
	if(selectInstrument == "Бансури")
	{
		writeInputs(bansuriCodes);
	};

	if(selectInstrument == "Фисгармония")
	{
		writeInputs(harmoniumCodes);
	};
	
	if(selectInstrument == "Ханг")
	{
		writeInputs(hangCodes);
	};

	if(selectInstrument == "Фортепиано")
	{
		writeInputs(fortepianoCodes);
	};

};



function writeInputs(instrumentCodes)
{
	for(var i = 0; i < 99; i++)
	{
		for(var j = 0; j < codesAndSymbols.length; j++)
		{
			if(instrumentCodes[i] == codesAndSymbols[j][0])
			{
				allInputs[i].value = codesAndSymbols[j][1];
				break;
			};
		};
	};
};



document.querySelector(".right-column").onkeydown = function(e)
{
	if((e.keyCode == 46)||(e.keyCode == 8))
	{
		e.target.value = "";
		e.target.style.backgroundColor = "";
	};

	for(var i = 0; i < codesAndSymbols.length; i++)
	{
		if(codesAndSymbols[i][0] == e.keyCode)
		{
			e.preventDefault(e);
			e.target.value = codesAndSymbols[i][1];
			e.target.style.backgroundColor = "";
			break;
		};
	};
};



document.querySelector("#save").onclick = function(e)
{
	if(existStorage)
	{
		testCorrectValues();
	}
};


function testCorrectValues()
{

	errorValue = false;
	beforeMassiv = [];
	for(var n = 0; n < 99; n++)
	{
		beforeMassiv[n] = null;
	};

	for(var i = 0; i < 99; i++)
	{
		for(var j = 0; j < codesAndSymbols.length; j++)
		{
			if(allInputs[i].value == codesAndSymbols[j][1])
			{
				beforeMassiv[i] = codesAndSymbols[j][0];
				break;
			};
			if(j == codesAndSymbols.length - 1)
			{
				if(allInputs[i].value != "")
				{
					errorValue = true;
					allInputs[i].style.backgroundColor = "#ff8080";
				};
			};
		};
	};

	if(errorValue)
	{
		document.querySelector("#error1").style.display = "block";
	}
	else
	{
		document.querySelector("#error1").style.display = "none";
		testRepeatValues();
	};

};


function testRepeatValues()
{

	errorRepeat = false;

	Label: for(var i = 0; i < beforeMassiv.length; i++)
	{
		for(var j = 0; j < beforeMassiv.length; j++)
	    {
			if((beforeMassiv[i] == beforeMassiv[j]) && (i != j) && (beforeMassiv[i] != null))
	        {
				errorRepeat = true;
				break Label;
			};
	    };
	};

	if(errorRepeat)
	{
		document.querySelector("#error2").style.display = "block";
	}
	else
	{
		document.querySelector("#error2").style.display = "none";
		writeHistory();
	}
};



function writeHistory()
{

	var selectInstrument = document.querySelector("#select span").innerText;


	if(selectInstrument == "Караталы")
	{
		karatalasCodes = beforeMassiv;
		window.localStorage.karatalas_codes = JSON.stringify(beforeMassiv);
	};

	if(selectInstrument == "Мриданга")
	{
		mridangaCodes = beforeMassiv;
		window.localStorage.mridanga_codes = JSON.stringify(beforeMassiv);
	};

	if(selectInstrument == "Эсарадж")
	{
		esarajCodes = beforeMassiv;
		window.localStorage.esaraj_codes = JSON.stringify(beforeMassiv);
	};

	if(selectInstrument == "Вина")
	{
		veenaCodes = beforeMassiv;
		window.localStorage.veena_codes = JSON.stringify(beforeMassiv);
	};

	if(selectInstrument == "Тампура")
	{
		tampuraCodes = beforeMassiv;
		window.localStorage.tampura_codes = JSON.stringify(beforeMassiv);
	};

	if(selectInstrument == "Ситар")
	{
		sitarCodes = beforeMassiv;
		window.localStorage.sitar_codes = JSON.stringify(beforeMassiv);
	};
	
	if(selectInstrument == "Бансури")
	{
		bansuriCodes = beforeMassiv;
		window.localStorage.bansuri_codes = JSON.stringify(beforeMassiv);
	};

	if(selectInstrument == "Фисгармония")
	{
		harmoniumCodes = beforeMassiv;
		window.localStorage.harmonium_codes = JSON.stringify(beforeMassiv);
	};
	
	if(selectInstrument == "Ханг")
	{
		hangCodes = beforeMassiv;
		window.localStorage.hang_codes = JSON.stringify(beforeMassiv);
	};

	if(selectInstrument == "Фортепиано")
	{
		fortepianoCodes = beforeMassiv;
		window.localStorage.fortepiano_codes = JSON.stringify(beforeMassiv);
	};



};



