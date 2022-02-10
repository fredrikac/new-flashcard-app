
Bas från denna tutorial: https://morioh.com/p/54ed6aa71e88

//Modifieringar 
- Bytt ut en del div:ar till semantiska element för läsbarhet
- Plockat bort styling från html och js och lagt den som klasser i css:en istället
- Plockat bort onclick-funktionen från knapparna i htmlen. Det verkar råda delade meningar om vad som är best practice. En fördel med att använda onclick och kalla en funktion är att det blir färre rader kod. Nackdel kan vara att koden blir svår att underhålla (inte ett problem i ett så här litet projekt, men ändå). Jag la till id på knapparna och hanterar dem inne i main.js istället, för övnings skull. 
- La till en validering på textarea och en alert om användaren försöker lägga till ett tomt kort. 
- La till en knapp på varje kort för att vända på dem
- Skapat en scss-fil och återskapat stylingen mobile first
- Ändrat styling efter eget tycke