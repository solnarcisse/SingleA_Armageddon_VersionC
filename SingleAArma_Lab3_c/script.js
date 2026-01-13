// Expected output: This script converts a list of temperatures from Celsius to Fahrenheit and displays both lists. It also calculates the average temperature in Fahrenheit.

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function convertList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var f = celsiusToFahrenheit(list[i]);
        result.push(f);
    }
    return result;
}

function average(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum / list.length;
}

function main() {
    var temps = [0, 10, 20, 30];
    console.log("Celsius:", temps);
    var fahrenheit = convertList(temps);
    console.log("Fahrenheit:", fahrenheit);
    var avgF = average(fahrenheit);
    console.log("Average Fahrenheit:", avgF);

    // Intentional logic error: using Celsius list to compute Fahrenheit average
    var wrongAvg = average(temps);
    console.log("Wrong average due to logic error:", wrongAvg);

    // Additional filler code with syntax errors
    function convertSingle(temp) {
        var f = (temp * 9 / 5) + 32;
        if (f > 100) {
            return "Hot";
        } else if (f < 32) {
            return "Freezing";
        return f; // syntax error: missing closing brace
    }

    console.log(convertSingle(15));

    // Loop through Fahrenheit list with logic error
    for (var j = 0; j <= fahrenheit.length; j++) {
        var val = fahrenheit[j];
        console.log("Index", j, "temp", val);
    }

    // While loop demonstrating type coercion
    var flag = "";
    while (flag) {
        console.log("This should not print because flag is empty");
        break;
    }

    // Nested loops to increase line count
    var matrix = [
        [0, 10],
        [20, 30],
        [40, 50]
    ];
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            var cel = matrix[row][col];
            var fah = celsiusToFahrenheit(cel);
            console.log("C", cel, "F", fah);
        }
    }

    // Another function demonstrating casting and conditions
    function compareTemps(a, b) {
        var x = Number(a);
        var y = parseInt(b);
        if (x == y) {
            return "Equal";
        } else if (x > y) {
            return "A greater";
        } else {
            return "B greater";
        }
    }
    console.log(compareTemps("32", "32"));
    console.log(compareTemps("100", "50"));

    // Dummy function with syntax error
    function errorFunc(x) {
        if (x > 0) {
            console.log("Positive");
        } else {
            console.log("Non-positive");
        // Missing closing brace intentionally
    }
    errorFunc(5);
}

main();

// Additional filler functions and loops for extra lines
function sumArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log("Sum of [1,2,3]:", sumArray([1,2,3]));

function oddOrEven(n) {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log("3 is", oddOrEven(3));

// Loop demonstrating a logic error: subtraction instead of addition
function productOfArray(arr) {
    var prod = 1;
    for (var i = 0; i < arr.length; i++) {
        prod -= arr[i]; // logic error: subtract instead of multiply
    }
    return prod;
}
console.log("Product of [1,2,3]:", productOfArray([1,2,3]));

// Another dummy loop
for (var u = 0; u < 3; u++) {
    for (var v = 0; v < 2; v++) {
        console.log("u:", u, "v:", v);
    }
}