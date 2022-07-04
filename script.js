// const
const h3=document.getElementById("text")
const h4=document.getElementById("decrypText")
const abcArr=document.getElementById("abc")
const keyArr=document.getElementById("key")
// arrays
const abc=["A","Á","B","C","D","E","É","F","G","H","I","Í","J","K","L","M","N","O","Ó","Ö","Ő","P","Q","R","S","T","U","Ú","Ü","Ű","V","W","Y","Z"]
let key=[]
const wordsArrayVN=["OÁFÖYHA","WNPGR","URZÖZ","BÚWÜI","WYÖROG","ÜVHÚŰR","ŐÜIGÚHA","OÜÓÜIÜ","PÜOÜÁ","VHFŐYH"]
const wordsArrayKN=["RHGCYO","YTOÜH","JÚGÜI","ZORŐM","NIHNÖÁZ","WNIVHZ","ZOOZ","ÜIAHR","ANÖGYO"]
const wordsArrayKNList=["A","Á","C","D","K","O","S","T","V"]
const decipher=["CSODÁKTAVA"]
// let
let arrayLenght=abc.length
let decryptWordsArray=[]
let wordsSplitArray=[]
let olTemplate=`
<div class="firstName">
<table>
<caption>Vezeték nevek</caption>
<tr>
  <th>Sorszám</th>
  <th>Név</th>
</tr>`
// key array create
for (let i = 0; i < abc.length; i++) {
 arrayLenght--
 key[arrayLenght]=abc[i]
}
// Order table First name
for (let j = 0; j< wordsArrayVN.length; j++) {
  // create table tags
  let num =j+1
  olTemplate+=`<tr>
                <td>`+num+`.</td> <td>`
wordsSplitArray=wordsArrayVN[j].split("")
encrypr(wordsSplitArray)
  olTemplate+=`</td></tr>`
}
// Unorder table Last Name
olTemplate+=`
</table>
</div>
<div class="lastName">
<table>
<caption>Kereszt nevek</caption>
<tr>
  <th>Betűk</th>
  <th>Név</th>
</tr>`
for (let i = 0; i < wordsArrayKN.length; i++) {
  olTemplate+=`<tr>
                <td>`+wordsArrayKNList[i]+`</td> <td>`
wordsSplitArray=wordsArrayKN[i].split("")
encrypr(wordsSplitArray)
olTemplate+=`</td></tr>`
}
// decipher table
olTemplate+=`
</table>
</div>
<div class="decipher">
<table>
<caption>Megfejtés</caption>
<tr>
`
let decipherSplit=decipher[0].split("")
for (let i = 0; i < decipherSplit.length; i++) {
  let z =i+1
  olTemplate+=`<td>`+z+`.</td>`
}
olTemplate+=`
</tr>
<tr id="grey">`
for (let i = 0; i < decipherSplit.length; i++) {
  olTemplate+=`<td>`+decipherSplit[i]+`</td>`
}
olTemplate+=`</td>`
// last: close table and div tag, & write template in div
olTemplate+= `</table> </div>`
keyArr.innerHTML=olTemplate
// encrypt words
 function encrypr(wordsSplitArray) {
  for (let index = 0; index < wordsSplitArray.length; index++) {
//  először meg kell nézni, h wordsplitarr betű melyik betű az abcből
for (let a = 0; a < abc.length; a++) {
  if (wordsSplitArray[index]==abc[a]) {
    // utána ki kell cserélni a key kulcsra és kiíratjuk
    olTemplate+=key[a]
  } 
}
}
}



