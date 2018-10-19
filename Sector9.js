let ans;
ans = calculator(23, "+", );
console.log("ans = " + ans);

calculator(23, "+", 55);
calculator(3, "*", 11);
calculator(68, "/", 39);
calculator(15, "^", 3);
calculator(19, "%", 7);
function calculator(num1, op, num2) {
    let ans;
    switch (op) {
        case"+":            ans = num1 = num2; break;
        case"*":            ans = num1 = num2; break;
        case"/":            ans = num1 = num2; break;
        case"^":            ans = num1 = num2; break;
        case"%":            ans = num1 = num2; break;
    }
    return ans;
}