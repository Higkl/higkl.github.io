

var existStorage;
try
{
window.localStorage.key = 1;
existStorage = true;
}
catch(e)
{
existStorage = false;
};



var format;

var karatalasCodes;
var mridangaCodes;
var esarajCodes;
var veenaCodes;
var tampuraCodes;
var sitarCodes;
var bansuriCodes;
var harmoniumCodes;
var hangCodes;
var fortepianoCodes;

var karatalasCodesDefault;
var mridangaCodesDefault;
var esarajCodesDefault;
var veenaCodesDefault;
var tampuraCodesDefault;
var sitarCodesDefault;
var bansuriCodesDefault;
var harmoniumCodesDefault;
var hangCodesDefault;
var fortepianoCodesDefault;

var esarajFade;
var veenaFade;
var tampuraFade;
var sitarFade;
var bansuriFade;
var harmoniumFade;
var fortepianoFade;


if(existStorage)
{
	if(window.localStorage.format == undefined)
	{
		format = "mp3";
		window.localStorage.format = "mp3";
		window.localStorage.instrument = "Караталы";
		writeCodesDefault();
		karatalasCodes = karatalasCodesDefault;
		mridangaCodes = mridangaCodesDefault;
		esarajCodes = esarajCodesDefault;
		veenaCodes = veenaCodesDefault;
		tampuraCodes = tampuraCodesDefault;
		sitarCodes = sitarCodesDefault;
		bansuriCodes = bansuriCodesDefault;
		harmoniumCodes = harmoniumCodesDefault;
		hangCodes = hangCodesDefault;
		fortepianoCodes = fortepianoCodesDefault;
		window.localStorage.karatalas_codes = JSON.stringify(karatalasCodesDefault);
		window.localStorage.mridanga_codes = JSON.stringify(mridangaCodesDefault);
		window.localStorage.esaraj_codes = JSON.stringify(esarajCodesDefault);
		window.localStorage.veena_codes = JSON.stringify(veenaCodesDefault);
		window.localStorage.tampura_codes = JSON.stringify(tampuraCodesDefault);
		window.localStorage.sitar_codes = JSON.stringify(sitarCodesDefault);
		window.localStorage.bansuri_codes = JSON.stringify(bansuriCodesDefault);
		window.localStorage.harmonium_codes = JSON.stringify(harmoniumCodesDefault);
		window.localStorage.hang_codes = JSON.stringify(hangCodesDefault);
		window.localStorage.fortepiano_codes = JSON.stringify(fortepianoCodesDefault);
		esarajFade = 0.01;
		veenaFade = 1;
		tampuraFade = 1;
		sitarFade = 1;
		bansuriFade = 0.1;
		harmoniumFade = 0.1;
		fortepianoFade = 0.5;
		window.localStorage.esaraj_fade = esarajFade;
		window.localStorage.veena_fade = veenaFade;
		window.localStorage.tampura_fade = tampuraFade;
		window.localStorage.sitar_fade = sitarFade;
		window.localStorage.bansuri_fade = bansuriFade;
		window.localStorage.harmonium_fade = harmoniumFade;
		window.localStorage.fortepiano_fade = fortepianoFade;
	}
	else
	{
		format = window.localStorage.format;			

		karatalasCodes = JSON.parse(window.localStorage.karatalas_codes);
		mridangaCodes = JSON.parse(window.localStorage.mridanga_codes);
		esarajCodes = JSON.parse(window.localStorage.esaraj_codes);
		veenaCodes = JSON.parse(window.localStorage.veena_codes);
		tampuraCodes = JSON.parse(window.localStorage.tampura_codes);
		sitarCodes = JSON.parse(window.localStorage.sitar_codes);
		bansuriCodes = JSON.parse(window.localStorage.bansuri_codes);
		harmoniumCodes = JSON.parse(window.localStorage.harmonium_codes);
		hangCodes = JSON.parse(window.localStorage.hang_codes);
		fortepianoCodes = JSON.parse(window.localStorage.fortepiano_codes);

		esarajFade = +window.localStorage.esaraj_fade;
		veenaFade = +window.localStorage.veena_fade;
		tampuraFade = +window.localStorage.tampura_fade;
		sitarFade = +window.localStorage.sitar_fade;
		bansuriFade = +window.localStorage.bansuri_fade;
		harmoniumFade = +window.localStorage.harmonium_fade;
		fortepianoFade = +window.localStorage.fortepiano_fade;
	};
}
else
{
	format = "mp3";
	writeCodesDefault();

	karatalasCodes = karatalasCodesDefault;
	mridangaCodes = mridangaCodesDefault;
	esarajCodes = esarajCodesDefault;
	veenaCodes = veenaCodesDefault;
	tampuraCodes = tampuraCodesDefault;
	sitarCodes = sitarCodesDefault;
	bansuriCodes = bansuriCodesDefault;
	harmoniumCodes = harmoniumCodesDefault;
	hangCodes = hangCodesDefault;
	fortepianoCodes = fortepianoCodesDefault;
	
	esarajFade = 0.01;
	veenaFade = 1;
	tampuraFade = 1;
	sitarFade = 1;
	bansuriFade = 0.1;
	harmoniumFade = 0.1;
	fortepianoFade = 0.5;

};





function writeCodesDefault()
{


karatalasCodesDefault =
[
null,
null,
null,

81,			//keyCode
87,
69,
82,
84,
89,
85,
73,
79,
80,
219,
221,

65,
83,
68,
70,
71,
72,
74,
75,
76,
186,
222,
90,

88,
67,
86,
66,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];




mridangaCodesDefault =
[
null,
null,
null,

81,
87,
69,
82,
84,
89,
85,
73,
79,
80,
219,
221,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];




esarajCodesDefault =
[
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

90,
83,
88,
68,
67,
86,
71,
66,
72,
78,
74,
77,

81,
50,
87,
51,
69,
82,
53,
84,
54,
89,
55,
85,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];





veenaCodesDefault =
[
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

90,
83,
88,
68,
67,
86,
71,
66,
72,
78,
74,
77,

81,
50,
87,
51,
69,
82,
53,
84,
54,
89,
55,
85,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];





tampuraCodesDefault =
[
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

90,
83,
88,
68,
67,
86,
71,
66,
72,
78,
74,
77,

81,
50,
87,
51,
69,
82,
53,
84,
54,
89,
55,
85,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];





sitarCodesDefault =
[
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

90,
83,
88,
68,
67,
86,
71,
66,
72,
78,
74,
77,

81,
50,
87,
51,
69,
82,
53,
84,
54,
89,
55,
85,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];




hangCodesDefault =
[
null,
null,
null,

81,
87,
69,
82,
84,
89,
85,
73,
79,
80,
219,
221,

65,
83,
68,
70,
71,
72,
74,
75,
76,
186,
222,
90,

88,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];



bansuriCodesDefault =
[
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

90,
83,
88,
68,
67,
86,
71,
66,
72,
78,
74,
77,

81,
50,
87,
51,
69,
82,
53,
84,
54,
89,
55,
85,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];




harmoniumCodesDefault =
[
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

90,
83,
88,
68,
67,
86,
71,
66,
72,
78,
74,
77,

81,
50,
87,
51,
69,
82,
53,
84,
54,
89,
55,
85,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];




fortepianoCodesDefault =
[
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

90,
83,
88,
68,
67,
86,
71,
66,
72,
78,
74,
77,

81,
50,
87,
51,
69,
82,
53,
84,
54,
89,
55,
85,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,

null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null,
null
];





};




