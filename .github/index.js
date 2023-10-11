// task-1

function compact(array) {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

// task-2

function createArray(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// task-3

function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i - a + 1; j++) {
            console.log(i);
        }
    }
}

// task-4

function randArray(k) {
    let result = [];
    for (let i = 0; i < k; i++) {
        let randomNumber = Math.floor(Math.random() * 500) + 1;
        result.push(randomNumber);
    }
    return result;
}

// task-5

function showByTypes(arr) {
    function isHomogeneousArray(array) {
        return array.every(item => typeof item === typeof array[0]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            if (isHomogeneousArray(arr[i])) {
                console.log(arr[i]);
            } else {
                showByTypes(arr[i]);
            }
        } else if (typeof arr[i] === "string" || typeof arr[i] === "number") {
            console.log([arr[i]]);
        }
    }
}

  // task-6

function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            if (b !== 0) {
                return a / b;
            } else {
                return "Ділення на нуль!";
            }
        default:
            return a + b;
    }
}

// task-7

function findUnique(arr) {
    let uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
}