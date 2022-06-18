let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange = [null, 200];
// let requiredRange = [100, 350];
// let requiredRange = [200, null];

let isWithinRange = (minFilter, maxFilter) => {

    let result = [];

    for (let i = 0; i < courses.length; i++) {
        
        let minCost = courses[i].prices[0];
        let maxCost = courses[i].prices[1];
        if (((minFilter <= maxCost) || (maxCost == null)) && ((maxFilter >= minCost) || (maxFilter == null))) {
            result.push(courses[i]);
        };

    }
    return result;
}

let compareCoursesByPrice = (courseA, courseB) => {
    let dif = courseA.prices[0] - courseB.prices[0];
    if (dif == 0) {
        return courseA.prices[1] - courseB.prices[1];
    }
    return dif;    
}

let selectedCourses = isWithinRange(requiredRange[0], requiredRange[1]);
selectedCourses.sort(compareCoursesByPrice);

selectedCourses.forEach(element => {
    console.log(element.name);
});

// courses.forEach(isWIthinRange(minFilter, maxFilter)) 

// let isWithinRange = (a, b) => {
//    let lowerPrice = courses.filter(item => item.prices[0]);

//    for (let i = 0; i <= courses.length; i++) { 
    
//     if (lowerPrice >= a) {
//         console.log(lowerPrice);
//     }
    

//    }

//    let upperPrice =  courses.filter(item => item.prices[1]);

//    for (let i = 0; i <= courses.length; i++) { 
    
//    if (upperPrice <= b) {
//         console.log(upperPrice);
//     }
//     }
// }



// function isWithinRange(a, b) {
//     console.log(courses.filter(item => item.prices[0] < a));
// }

// isWithinRange(200, 600);

let someCourses = courses.filter(item => item.prices[0] < 400); // works fine

// console.log(someCourses[0].name);
// console.log(someCourses[0].prices);
// console.log(someCourses[0].prices[1]);
// console.log(someCourses);
