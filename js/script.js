//First figure

let str = "";
for (let j = 0; j < 10; j++){
    for (let k = 0; k < j; k++ ){
        str += " *"
    }
    str += "\n";
}
console.log(str)


//Second figure

let rows = 10;
let string = "";
for (let i=1; i<=rows; i++){
    for (let k=1; k<=(rows-i); k++){
        string += "\u00A0"
    }
    for(let j=1; j<=i; j++){
        string += "*"        
    }
    string += "\n";    
}
 console.log(string)



 //Third figure

 let str1 = "";

for (let i = 0; i < 10; i++) {
    for (let j = i; j < 10; j++) { 
        str1 += " *"
    }
    str1 += "\n";
}
console.log(str1)


//Fourth figure
let str9 = "";
p=10;
for (q=p; q>=0; q--){
    for(j=p-1; j>=q; j--){
        str9+= " \u00A0";
    }
    for(k=0; k<=q; k++){
        str9 += " *"
    }
    str9 += "\n";
}
console.log(str9)



//Fifth figure

let n = 10;
let string1 = "";
for (let i = 1; i <= n; i++) {   
    for (let j = 1; j <= (n - i); j++) {
        string1+= "\u00A0";
    }    
    for (let k = 1; k <=i; k++) {
        string1 += " *";
    }
    string1 += "\n";
}
console.log(string1)


//Sixth figure

let m = 3;
let string2 = "";
let i = 1;

for (let p = 0; p < 3; p++) {
    for (i; i <= m; i++) {       
       
        for (let j = 1; j <= (m - i); j++) {
                string2+= " ";
            
        }         
        for (let k = 1; k <= i; k++) {
            string2 += " * ";
        }       
        string2 += "\n";
    }
    m++
    i = p+2
}
console.log(string2)



// Bonus

let str5 = "";

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {  
        str5 += " *"
    }
    str5 += "\n";
}
console.log(str5);


let str6 = "";

for (let i = 0; i <=10; i++) {
   for (let j =10-1; j>=i; j--) { 
       str6 += "* "
   }
   for(k=0; k<=i; k++){
       str6 += " *"
   }
   str6 += "\n";
}
console.log(str6);


let str7 = "";
n=10;
for (i=n; i>=0; i--){
    for(j=n-1; j>=i; j--){
        str7+= "\u00A0";
    }
    for(k=0; k<=i; k++){
        str7 += " *"
    }
    str7 += "\n";
}
console.log(str7)

