/* Problem Statement: Calculate the number of times the greatest and least record broken.

input: array of integers representing points scored with indices as the no. game.
output: integer array with 0th index as the # greatest scored record broken and 1st index with the least.
conditions: 1,000 games played, scores are between 1 and 10^8

Part #1 - counts the number of times the greatest score was broken at any given time

Part #2 - counts the number of times the least score was broken at any given time


FOR each score in the board, compare it to the previous
    Part #1
	IF the  score is greater than the previous, count countBestRecords by 1
		REASSIGN to the considered score
    Part #2
	ELSE IF the score is less than the previous, count countWorstRecords by 1
		REASSIGN to the considered score

return countBestRecords;

*/

let breakingRecords = function(scores) {
	let countBestRecords = 0;
	let countWorstRecords = 0;
    let currHighestScore = scores[0];
    let currLowestScore = scores[0];
	for (let i = 1; i < scores.length; i++) {
			let currScore = scores[i];
			if (currScore > currHighestScore) {
					countBestRecords++;
                    currHighestScore = currScore;
            } else if (currScore < currLowestScore) {
                countWorstRecords++;
                currLowestScore = currScore;
            };
	};
    let ans = [countBestRecords, countWorstRecords];
    console.log(ans);
    return ans;
};


// Test Cases
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]); // [4,0]

breakingRecords([3, 3, 3, 3, 3, 3, 3, 3]) == [0, 0]; // true
