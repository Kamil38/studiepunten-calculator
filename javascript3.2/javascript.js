window.onload = function() {
	document.getElementById("sitereset").reset();
}
//declaratie Cluster 1
let studiepuntenHaalbaarCluster1 = document.getElementById("studiepuntenHaalbaarCluster1").innerHTML;
let studiepuntenBehaaldCluster1 = document.getElementById("studiepuntenBehaaldCluster1");
let PROJ = document.getElementById('PROJ');
let TPR = document.getElementById('TPR');
let gemiddeldeCluster1 = document.getElementById('gemiddeldeCluster1');
//function Cluster 1
PROJ.addEventListener('input', berekGemiddeldeCluster1);
TPR.addEventListener('input', berekGemiddeldeCluster1);
function berekGemiddeldeCluster1()
{
	let gemiddelde = (parseFloat(PROJ.value) + parseFloat(TPR.value))/2;
	// test hier of gemiddelde == "NaN"
	if (isNaN(gemiddelde)){ gemiddeldeCluster1.innerHTML = "";}
	else {gemiddeldeCluster1.innerHTML = gemiddelde;}

	//gemiddeldeCluster1.innerHTML = gemiddelde;
	if(gemiddelde >= 5.5){
		studiepuntenBehaaldCluster1.innerHTML = studiepuntenHaalbaarCluster1;
		studiepuntenBehaaldCluster1.style.background = 'green';
	}
	else {studiepuntenBehaaldCluster1.innerHTML = 0
		  studiepuntenBehaaldCluster1.style.background = 'red';	
         }
         berekenTotaalSP();
}

//declaraties Cluster 2
let studiepuntenHaalbaarCluster2 = document.getElementById("studiepuntenHaalbaarCluster2").innerHTML;
let studiepuntenBehaaldCluster2 = document.getElementById("studiepuntenBehaaldCluster2");
let PRO1 = document.getElementById('PRO1');
let PRO2 = document.getElementById('PRO2');
let gemiddeldeCluster2 = document.getElementById('gemiddeldeCluster2');

//function Cluster 2
PRO1.addEventListener('input', berekGemiddeldeCluster2);
PRO2.addEventListener('input', berekGemiddeldeCluster2);
function berekGemiddeldeCluster2()
{
		let gemiddelde = (parseFloat(PRO1.value) + parseFloat(PRO2.value))/2;

	if (isNaN(gemiddelde)){ gemiddeldeCluster2.innerHTML = "";}
	else {gemiddeldeCluster2.innerHTML = gemiddelde;}

	if(gemiddelde >= 5.5){
		studiepuntenBehaaldCluster2.innerHTML = studiepuntenHaalbaarCluster2;
		studiepuntenBehaaldCluster2.style.background = 'green';
	}
	else {studiepuntenBehaaldCluster2.innerHTML = 0
		  studiepuntenBehaaldCluster2.style.background = 'red';
         }
         berekenTotaalSP();
}

//declaraties Cluster 3
let studiepuntenHaalbaarCluster3 = document.getElementById("studiepuntenHaalbaarCluster3").innerHTML;
let studiepuntenBehaaldCluster3 = document.getElementById("studiepuntenBehaaldCluster3");
let SLB = document.getElementById('SLB');
let WVO = document.getElementById('WVO');
let gemiddeldeCluster3 = document.getElementById('gemiddeldeCluster3');
//function Cluster 3
SLB.addEventListener('input', berekGemiddeldeCluster3);
WVO.addEventListener('input', berekGemiddeldeCluster3);
function berekGemiddeldeCluster3()
{
		let gemiddelde = (parseFloat(SLB.value) + parseFloat(WVO.value))/2;

	if (isNaN(gemiddelde)){ gemiddeldeCluster3.innerHTML = "";}
	else {gemiddeldeCluster3.innerHTML = gemiddelde;}
	
	if(gemiddelde >= 5.5){
		studiepuntenBehaaldCluster3.innerHTML = studiepuntenHaalbaarCluster3;
		studiepuntenBehaaldCluster3.style.background = 'green';
	}
	else {studiepuntenBehaaldCluster3.innerHTML = 0
		  studiepuntenBehaaldCluster3.style.background = 'red';
         }
         berekenTotaalSP();
}

//declaraties Cluster 4
let studiepuntenHaalbaarCluster4 = document.getElementById("studiepuntenHaalbaarCluster4").innerHTML;
let studiepuntenBehaaldCluster4 = document.getElementById("studiepuntenBehaaldCluster4");
let ENG = document.getElementById('ENG');
let NED = document.getElementById('NED');
let REK = document.getElementById('REK');
let gemiddeldeCluster4 = document.getElementById('gemiddeldeCluster4');
//function Cluster 4
ENG.addEventListener('input', berekGemiddeldeCluster4);
NED.addEventListener('input', berekGemiddeldeCluster4);
REK.addEventListener('input', berekGemiddeldeCluster4);
function berekGemiddeldeCluster4()
{
	let gemiddelde = (parseFloat(ENG.value) + parseFloat(NED.value) + parseFloat(REK.value))/3;

	if (isNaN(gemiddelde)){ gemiddeldeCluster4.innerHTML = "";}
	else {gemiddeldeCluster4.innerHTML = gemiddelde;}

	if(gemiddelde >= 5.5){
		studiepuntenBehaaldCluster4.innerHTML = studiepuntenHaalbaarCluster4;
		studiepuntenBehaaldCluster4.style.background = 'green';
	}
	else {studiepuntenBehaaldCluster4.innerHTML = 0
		  studiepuntenBehaaldCluster4.style.background = 'red';
	     }
	     berekenTotaalSP();
}

//declaraties Cluster 5
let studiepuntenHaalbaarCluster5 = document.getElementById("studiepuntenHaalbaarCluster5").innerHTML;
let studiepuntenBehaaldCluster5 = document.getElementById("studiepuntenBehaaldCluster5");
let DIFF = document.getElementById('DIFF');
let gemiddeldeCluster5 = document.getElementById('gemiddeldeCluster5');
//function Cluster 5
DIFF.addEventListener('input', berekGemiddeldeCluster5);
function berekGemiddeldeCluster5()
{
		let gemiddelde = (parseFloat(DIFF.value));

	if (isNaN(gemiddelde)){ gemiddeldeCluster5.innerHTML = "";}
	else {gemiddeldeCluster5.innerHTML = gemiddelde;}
	
	if(gemiddelde >= 5.5){
		studiepuntenBehaaldCluster5.innerHTML = studiepuntenHaalbaarCluster5;
		studiepuntenBehaaldCluster5.style.background = 'green';
	}
	else {studiepuntenBehaaldCluster5.innerHTML = 0
		  studiepuntenBehaaldCluster5.style.background = 'red';
	     }
	      berekenTotaalSP();
}


//berekening totaal studiepunten
let totaalSP = document.getElementById('totaalSP');
function berekenTotaalSP() 
{
  let studiepuntenTotaal = parseFloat(studiepuntenBehaaldCluster1.innerHTML) + 
      parseFloat(studiepuntenBehaaldCluster2.innerHTML) +
      parseFloat(studiepuntenBehaaldCluster3.innerHTML) +
      parseFloat(studiepuntenBehaaldCluster4.innerHTML) +
      parseFloat(studiepuntenBehaaldCluster5.innerHTML);
  	totaalSP.innerHTML = studiepuntenTotaal;
}

