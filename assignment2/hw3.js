//1
function reverse(num){
    return Number(String(num).split("").reverse().join(""));
}
// console.log(reverse(32243));

//2
function isPalindrome(str){
    return str === str.split("").reverse().join("");
}
// console.log(isPalindrome("madam"));

//3
function combinations(str){
    let res = [];
    for (let i =0;i<str.length;i++){
        for (let j = i+1;j<=str.length;j++){
            res.push(str.slice(i,j));
        }
    }
    return res;
}
// console.log(combinations("dog"));

//4
function orderStr(str){
    return str.split("").sort().join("");
}
// console.log(orderStr("webmaster"));

//5
function upperLetter(str){
	return str.split(" ").map(e=>e.at(0).toUpperCase()+e.slice(1)).join(" ")
}
// console.log(upperLetter("the quick brown fox"));

//6
function findLongest(str){
	return str.split(" ").reduce((a,b)=>b.length > a.length?b:a)
}
// console.log(findLongest("Web Development Tutorial"));

//7
function countVowel(str){
	return str.match(/[aeiou]/ig).length
}
// console.log(countVowel("The quick brown fox"));

//8
function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1
  }
// console.log(isPrime(3)); 

//9
function type(x){
    return typeof(x);
}
// console.log(type(function(x){return x+1}));

//10
function matrix(n){
	let res = []
	for (let i=0;i<n;i++){
		let row = new Array(n).fill(0)
		row[i]=1
		res.push(row)
	}
	return res
}
// console.log(matrix(5));

//11
function findSecond(arr){
    arr.sort((a,b)=>a-b);
	return [arr.at(1),arr.at(-2)]
}
// console.log(findSecond([1,2,3,4,5]));

//12
function is_perfect(num){
    let sum = 0;
    for (let i=1;i<=num/2;i++){
        if(num%i === 0){
            sum += i;
        }
    }
    return sum === num && sum !== 0  
} 
// console.log(is_perfect(8128)); 

//13
function factors(num){
    let res = [];
    for (let i=1;i<=num;i++){
        if (num%i === 0){
            res.push(i);
        }
    }
    return res;
}

//14
function coins(amount, arr) {
    if (amount === 0) {
        return [];
    }else{
        if (amount >= arr[0]) {
            return [arr[0]].concat(coins(amount-arr[0], arr));
        }else{
            arr = arr.slice(1)
            return coins(amount, arr);
        }   
    }
} 
// console.log(coins(46, [25, 10, 5, 2,1]));

//15
function exp(b,n){
    let ans = 1;
    for (var i =1;i<=n;i++){
        ans *= b;        
    }
    return ans;
}

//16
function uniqueChar(str){
    const res = []
    for (let i=0;i<str.length;i++){
        if (!res.includes(str.charAt(i))){
            res.push(str.charAt(i))
        }
    }
    return res.join("")
}
// console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

//17
function countOccur(str){
    return str.split("").reduce((a,b)=>{
        a[b] = (b in a)? a[b]+1:1
        return a;
    },{})
}

//18
function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;
    let res = 0;
    while (left <= right){
        res = Math.floor((left +right)/2);
        if (arr[res] === target) return res;
        else if (arr[res] < target){
             left = res + 1;
        }else{
            right = res - 1;
        }
    }
    return "Not found";
}
// console.log(binarySearch([1,4,6,9],9));

//19 
function findLarger(arr,target){
    return arr.filter(n=>n>=target)
}
// console.log(findLarger([32,53,11,2,5],10));

//20
function createId(n){
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let res = ""
    for (let i=0; i < n; i++){
        res += list.charAt(Math.floor(Math.random()*list.length));
    }
    return res
}
// console.log(createId(6));

//21
function findCombs(arr, n) {
    const res = [];
    function combs(comb, index) {
        if (comb.length === n) {
            res.push(comb);
            return;
        }
        for (let i = index; i < arr.length; i++) {
            combs(comb.concat(arr[i]), i + 1);
        }
    }
    combs([], 0);
    return res;
}
// console.log(findCombs([1,2,3], 2)); 

//22
function countChar(str,char){
    return str.split("").reduce((a,b)=>{
        if (b===char) a++;
        return a
    },0)
}
// console.log(countChar('microsoft.com','o'));

//23
function findFirst(str){
    return str.split("").filter(c=>str.indexOf(c)===str.lastIndexOf(c))[0]
}
// console.log(findFirst("abacddbec"));

//24
function bubbleSort(arr){
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<=arr.length-i-1;j++){
            if (arr[j]<arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//25
function Longest_Country_Name(arr){
    return arr.reduce((a,b)=>(b.length>a.length?b:a))
}
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

//26
function withoutRepeat(str){
    let set = new Set(str.split(""))
    return set.size === str.length
}
function longestSub(str){
    let max = 0;
    let res = '';
    for (let i=0; i < str.length; i++) {
        let sub = str.substr(i, str.length);
        for (let j=0; j<=sub.length; j++) {
            let subSub = sub.substr(0, j);
            if (subSub.length > max && withoutRepeat(subSub)){
                res = subSub;
                max = subSub.length;                
            }
        }
    }
    return res;
}
// console.log(longestSub("ababcc"));

//27
function longestPalindrome(str){
    let max = 0;
    let res = '';
    for (let i=0; i < str.length; i++) {
        let sub = str.substr(i, str.length);
        for (let j=0; j<=sub.length; j++) {
            let subSub = sub.substr(0, j);
            if (subSub.length > 1 && subSub === subSub.split("").reverse().join("")){
                if (subSub.length > max) {
                    res = subSub;
                    max = subSub.length;
                }
            }
        }
    }
    return res;
}
    
//28
function foo() { return 1;}
function foo1(f) {return f();}
// console.log(foo1(foo));

//29
function getName(){
    return arguments.callee.name;
}
// console.log(getName());
