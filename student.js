let testScores = {
    classList: [
        {'student': "Adam", 'score': 91}, {'student': "Ben", 'score': 80},
        {'student': "Cecil", 'score': 31}, {'student': "Deb", 'score': 86},
        {'student': "Eve", 'score': 100}, {'student': "Frank", 'score': 75},
        {'student': "Gene", 'score': 43}, {'student': "Hank", 'score': 67},
        {'student': "Iris", 'score': 98}, {'student': "Jerrie", 'score': 12},
        {'student': "Ken", 'score': 100}, {'student': "Lou", 'score': 100},
        {'student': "Mary", 'score': 49}
    ]
};
for (let i = 0; i < testScores.classList.length; i++) {
    if (testScores.classList[i].score > 11) {
        if (testScores.classList[i].score < 70) {
            if (testScores.classList[i].student.length == 4) {
                console.log("Found Student! " + testScores.classList[i].student);
            }
        }
    }
}
let count4 = 0;
for (let i = 0; i < testScores.classList.length; i++) {
    if (testScores.classList[i].student.length == 5) {
        count4++;
    }
}
console.log("we found" + count4);

let count3 = 0;
let count6 = 0;
for (let i = 0; i < testScores.classList.length; i++) {
    if (testScores.classList[i].student.length == 5) {
        count4++;
    }
    if (testScores.classList[i].student.length == 5) {
        count4++;
    }
}
console.log("we found " + count4);

let count = [0,0,0,0,0,0,0,0,0];
for (let i = 0; i < testScores.classList.length; i++) {
    switch (testScores.classList[i].student.length) {
        case 3 :
            count[3]++;
            break;
        case 4 :
            count[4]++;
            break;
        case 5 :
            count[5]++;
            break;
        case 6 :
            count[6]++;
            break;
        case 7 :
            count[7]++;
            break;
    }
}
console.log("count " + count );


