var numbers = [45, 56, 65, 12, 3, 54, 65];
function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 56, 65, 12, 35, 54, 65];
var result = getArraySum(numbers);
console.log("Total of the numbers: ", result);