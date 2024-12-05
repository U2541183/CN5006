const operation = prompt(
    "Choose an operation:\n1: Addition\n2: Subtraction\n3: Multiplication\n4: Division"
);
if (!["1", "2", "3", "4"].includes(operation)) {
    alert("Invalid operation. Please refresh and try again.");
} else {
    const count = parseInt(prompt("How many numbers do you want to use?"));

    if (isNaN(count) || count < 2) {
        alert("Please enter a valid number greater than or equal to 2.");
    } else {
        const numbers = [];
        for (let i = 0; i < count; i++) {
            const num = parseFloat(prompt(`Enter number ${i + 1}:`));
            if (isNaN(num)) {
                alert("Invalid number entered. Please refresh and try again.");
                break;
            }
            numbers.push(num);
        }

        let result;
        if (numbers.length === count) {
            switch (operation) {
                case "1": // Addition
                    result = numbers.reduce((acc, num) => acc + num, 0);
                    alert(`The result of addition is: ${result}`);
                    break;

                case "2": // Subtraction
                    result = numbers.reduce((acc, num) => acc - num);
                    alert(`The result of subtraction is: ${result}`);
                    break;

                case "3": // Multiplication
                    result = numbers.reduce((acc, num) => acc * num, 1);
                    alert(`The result of multiplication is: ${result}`);
                    break;

                case "4": // Division
                    if (numbers.slice(1).includes(0)) {
                        alert("Error: Division by zero is not allowed.");
                    } else {
                        result = numbers.reduce((acc, num) => acc / num);
                        alert(`The result of division is: ${result}`);
                    }
                    break;
            }
        }
    }
}
