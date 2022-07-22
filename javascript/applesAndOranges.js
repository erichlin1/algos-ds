function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // declare countApples
    let countApples = 0;
    // declare countOranges
    let countOranges = 0;
    // take the starting location of a & add the location of each fallen apple iteratively
    for (let apple of apples) {
        let locationOfFallenApple = (a + apple);
    // If each sum is within the range of s & t, then add 1 to the countApples
        if (locationOfFallenApple <= t && locationOfFallenApple >= s) {
                countApples++;
        };
    };
    for (let orange of oranges) {
        let locationOfFallenOrange = (b + orange);
    // If each sum is within the range of s & t, then add 1 to the countApples
        if (locationOfFallenOrange <= t && locationOfFallenOrange >= s) {
            countOranges++;
        };
    };
    console.log(`${countApples}\n${countOranges}`);
}
