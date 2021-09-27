//1. Print 1 - 135
for (let i=1; i <=135; i++){
    console.log(i);
}



//2. Print Odd Numbers 1 - 135
for (let i=1; i <= 135; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}

//3. Sum of Printed Numbers
let sum = 0;
for (let i=1; i <= 135; i++){
    sum=sum+i;
    console.log(`Number is: ${i} Sum: ${sum}`);
}


//4. Print the elements of an array
let X= [1,4,2,12];
console.log(X);


//5. Find Max
let X= [1,0,2,-3,-1,5];
let max = X[0];
for (let i = 1; i < X.length; i++){
    if (X[i] > max){
        max = X[i];
    }
}
console.log(max);

//6. Get Average
let X= [1,2,3,4,5,6,7,8,9,10,11,12];
let sum=X[0];
for (let i=0; i < X.length; i++){
    sum=sum+X[i];
}
console.log(sum/X.length);

//7. Eliminate the Negatives
let X= [-1,4,-3,1,-15];
for (let i=0; i < X.length; i++){
    if(X[i] < 0){
        X[i]= 0;
    }
}
console.log(X);


//Number to String
let X= [-1,4,-3,1,-15];
let i=0;
while (i < X.length ){
    if (X[i] < 0){
        X[i]= 'Turing';
    }
    i++;
}
console.log(X);

