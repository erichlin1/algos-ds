/*
 * Example:
 * In a small town the population is p0 = 1000 at the beginning of a year.
 * The population regularly increases by 2 percent per year and moreover 
 * 50 new inhabitants per year come to live in the town. How many years does 
 * the town need to see its population greater or equal to p = 1200 inhabitants?
 * 
 * 
 * Objective:
 * Find the number of years it takes until the population is greater than or equal to p.
 * 
 * Parameters:
 * p0: the initial popluation. -- Data Type: Non-negative integers.
 * perc: percent of growth each year. --  Data Type: postive or undefined.
 * aug: inhabitants coming or leaving each year. -- Data Type: Integer
 * p: popluation to surpass. --  Data Type: Non-negative Integers. 
 * 
 * 
 * Pseudo Code:
 * 1. declare and instantiate variable (year) to 0;
 * 2. start a while loop, set index to initial population, stop condition if p0 >= p.
 *      2.1. increment by populuation growth for that year (p0 * perc) + aug
 *      2.2. increment year counter by 1 for every iteration until initial population is greater than popluation (p).
 * 3. loop finishes execution if and only if p0 >= p. 
 * 4. return year. 
 */

 /* Solution #1 */
 
 
 function nbYear(initialPopulation, percentage, aug, populationLimit) {
     let year = 0;
     let populationGrowth = initialPopulation;
     const fixedPercentage = Number((percentage / 100).toFixed(2))
     const perGrowth = percentage !== null ? fixedPercentage : 0;
     while (populationGrowth <= populationLimit) {
         populationGrowth += (populationGrowth * perGrowth + aug);
         year += 1;
        }
        return year;
    }
    
 /* Solution #2 */
    
    
