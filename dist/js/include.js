function insertCodeBlock() {
 var z, i, elmnt, file, xhr;
 // Loop through a collection of all HTML elements:
 z = document.getElementsByTagName("*");
 for (i = 0; i < z.length; i++) {
  elmnt = z[i];
  /*search for elements with a specified attribute:*/
  file = elmnt.getAttribute("code_block");
  if (file) {
   // Make an HTTP request w/ attribute value as file name:
   xhr = new XMLHttpRequest();
   xhr.onload = function() {
    if (this.status == 200 && this.readyState == 4) {
     elmnt.innerHTML = this.responseText;
    }
    // Remove the attribute, and call this function once more:
    elmnt.removeAttribute("code_block");
    insertCodeBlock();
   };
   xhr.open("GET", `../include/${file}`, true);
   xhr.send();
   /* Exit the function: */
   return;
  }
 }
}
//  the above script was taken from w3 schools insertHTML() method. I replaced their .onreadystatechange with a newer .onload().
// The original was --------------------
//  xhr.onreadystatechange = function() {
//   if (this.readyState == 4) {
//    if (this.status == 200) {
// ---------------------------------------------
// (ABOVE 2 LINES SHOULD BE SHORTENED TO: if (this.status == 200 && this.readyState == 4)
// ---------------------------------------------
//     elmnt.innerHTML = this.responseText;
//    }
//    if (this.status == 404) {
//     elmnt.innerHTML = "Page not found.";
//    }
