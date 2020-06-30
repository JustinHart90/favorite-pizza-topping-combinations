export default function GetCombinations(ordersArray) {
    // Cache the count of each topping combination 
    const CountByToppingCombination = ordersArray.reduce((acc, curr) => {
        if (!curr.toppings) {
            return acc;
        }

        let toppingsArray = curr.toppings
        ,   toppingsArraySorted = toppingsArray.sort() // ensure toppings are always sorted consistently
        ,   toppingCombination = toppingsArraySorted.join(', '); // flatten toppings array into a comma-separated string

        // set or update the count of the topping combination
        if (!acc.hasOwnProperty(toppingCombination)) {
            acc[toppingCombination] = 1
        } else {
            acc[toppingCombination]++;
        }

        return acc;
    }, {});

    // sort counts of each combination and get the top 20
    const topCounts = Object.values(CountByToppingCombination).sort((a,b) => b-a).slice(0, 20);

    // get the top 20 topping combinations
    const topCombinations = Object.keys(CountByToppingCombination).filter((combo) => {
        // check if topping combination has a count that is in the "topCounts" array
        let comboCount = CountByToppingCombination[combo]
        ,   isComboTopCount = (topCounts.indexOf(comboCount) !== -1);

        return isComboTopCount;
    });

    // return the top 20 topping combinations with counts
    const resultUnsorted = topCombinations.map((combo) => {
        return {
            toppings: combo,
            count: CountByToppingCombination[combo]
        }
    });

    return resultUnsorted.sort((a,b) => {
        return (b.count - a.count);
    });
}
