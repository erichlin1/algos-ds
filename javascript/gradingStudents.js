let gradingStudents = function(grades) { // grades is an integer array
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
            let grade = grades[i];
            let remainder = grade % 5;
            let nextMultiple = (grade - remainder) + 5;
            if (grade < 38) {
                    roundedGrades.push(grade);
            } else if ((nextMultiple - grade) < 3) {
                    roundedGrades.push(nextMultiple);
            } else {
                    roundedGrades.push(grade);
            };
    };
    return roundedGrades;
};
