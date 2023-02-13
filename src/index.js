
// You should implement your task here.

module.exports = function towelSort(matrix) {
let newArr = [];

if (matrix === undefined) { return newArr };

matrix.forEach(element => {

  if (matrix.indexOf(element) % 2 === 0){
    element.forEach(subElement => {
    newArr.push(subElement)
    })
  } else {
   element.reverse();
   element.forEach(subElement => {
   newArr.push(subElement)
   })
}
})

return newArr;
}
