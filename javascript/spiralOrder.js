/* Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.

input: 2-d array
ouput: 1-d array 
conditions: in 'spiral' order (refer to test cases

psy-code:

[ [[0][0],[[0][1],[[0][2]],
  [[[1][0],[[1][1],[[1][2]],
  [[[2][0],[[2][1],[[2][2]] ]

0 - 1 - 2 - 2 - 2 - 1 - 0 - 1- 1 

[ [[i][j],[[i][j + 1],[[i][j + 2]],
  [[[i + 1][j],[[i + 1][j + 1],[[i + 1][j + 2]],
  [[[i + 2][j],[[i + 2][j + 1],[[i + 2][j + 2]]
 ]



*/

function spiralOrder(matrix) {
  
}


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
