let str = prompt('entre un mot');

function solution(str){
const str2 = str.split("");
const str3 = str2.reverse();
const str4 = str3.join("");
return str4;
};

console.log(solution(str))