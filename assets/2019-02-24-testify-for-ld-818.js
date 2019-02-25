
document.onreadystatechange = function () {
 if (document.readyState == "interactive") {
  document.getElementById("compose_button").onclick = function() {

   var ld = 'LD 818, "An Act To Reduce Greenhouse Gas Emissions"';
   var ld_radio = document.getElementsByName('ld-number');
   for(var i=0; i<3; i++){if (ld_radio[i].checked){
   if("797" == ld_radio[i].value){ld = 'LD 797, "An Act To Limit Greenhouse Gas Pollution and Effectively Use Maine\'s Natural Resources"';}
   else if ("893" == ld_radio[i].value){ld = 'LD 893, "An Act To Create an Updated Unified Maine Climate Action Plan"';}
   break;
   }}

   var d = new Date();
   var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   var today = "" + monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

   var first_sentance = document.getElementById("first-sentance").value;
   var second_paragraph = document.getElementById("second-paragraph").value;
   var third_paragraph = document.getElementById("third-paragraph").value;
   var closing = document.getElementById("closing").value;
   var signature = document.getElementById("signature").value;

   var p = document.getElementById('wizard_output');
   while( p.firstChild ) { p.removeChild( p.firstChild ); }
   p.appendChild( document.createTextNode('\n\
Senators and Representatives in the Joint Standing Committee On Environment and Natural Resources;\n\
C/O Clerk Caleb Roebuck;\n\
\n\
This is my public testimony regarding ' + ld + ', which I am submitting in writing today, ' + today + '.\n\
\n\
' + first_sentance + '\n\
\n\
The effects of climate change are already being seen in Maine. ' + second_paragraph + '\n\
\n\
These and other effects of our fossil-fuel-based economy will wreak havok throughout Maine in coming decades. ' + third_paragraph + '\n\
\n\
While some consequences of climate change, such as sea-level rise, may take a long time to play out, our actions now will mitigate them. In particular, every extra bit we can do to reduce greenhouse gas emissions in the next twelve years will substantially improve the quality of life for everyone in Maine.\n\
\n\
' + closing + '\n\
\n\
' + signature + '\n\
   ') );

  };
 }
}
