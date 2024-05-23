//Ques 1 - Palindrome Number
//An integer is apalindrome when it reads the same forward and backward.

//Input: x=121 ----->>>>> Output: true
//Input: x=10 ----->>>>> Output: false

const isPalindrome = (x)=>{
  return x===+x.toString().split().reverse().join();
};

const res = isPalindrome(121);

console.log(res);

//Steps:
/*1.Convert into String 121=>"121" using toString method
2.String has a lot of inbuilt functions such as split("") but if we mention split("2") then it will split string into two with symbol 2.  which is "121"=> ["1","1"]
But since we are not mentioning anything inside so split separate string as "121"=>["1","2","1"]*/
/*3. reverse will reverse the array from split which is ["1","2","1"]=> ["1","2","1"]*/
/*4.join() function will join array elements and make string ["1","2","1"] => "121"*/

