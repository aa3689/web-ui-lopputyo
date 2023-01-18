/*
'matchMedia' on ns. Media Query JavaScriptille.
'addEventListener' tarkkailee koska ehto (min-width: 990px) toteutuu.
    Kun ehto toteutuu eli ikkunan leveys on yli 990px, asetetaan navin leveys 30 prosenttiin ikkunan leveydestä.
    Muussa tapauksessa eli kun ikkunan leveys on alle 990px navin leveys on 100 prosenttia ikkunasta.
'openNav' kutsuu funktiota
*/

const minWidth = window.matchMedia('(min-width: 990px)');
minWidth.addEventListener(openNav);
openNav(minWidth);

function openNav() {
  if (minWidth.matches) {
    document.getElementById('sideNav').style.width = '30%';
  } else {
    document.getElementById('sideNav').style.width = '100%';
  }
}

function closeNav() {
  document.getElementById('sideNav').style.width = '0%';
}

/*
Koodi kopioitu: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
Lisäapu haettu: https://www.w3schools.com/jsref/met_win_matchmedia.asp
*/
