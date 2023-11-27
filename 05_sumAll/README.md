# Exercise 05 - sumAll
qq
Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

input1
input2
i=input1; input1 <= input2; i++
sum += input1+1;
return sum;

check which is smaller
input the smaller to input1
return sum = input1 + input1 + 1    input1 = 2, input2 = 6
input1++;   2 + 1 = 3
(1,4) 1 + 2 + 3 + 4 = 10
(1,3) 1 + 2 + 3 = 6
(1,2) 1 + 2 = 3
(n1+1)*n2
(1+1)*4 = 8
(1+1)*3 = 6
(1,2) = (1+1)*2 = 4


3               
6
10
input1 = 1
input2 = 4
LOOP 1
temp = input1 + 1;   2 = 1 + 1
sum = input1 + temp; 3 = 1 + 2
input1 = temp; input1 = 2
LOOP 2
2 + 1 = 3 temp
2 + 3 = 5 sum
input1 = 3;
LOOP 3
3 + 1 = 4
3 + 4 = 7





sum = return



sum=input1; input1 <= input2; sum++
return sum