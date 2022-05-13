interface ICourses {
  name: string;
  prices: (number | null)[];
  weight?: number;
}

let courses: ICourses[] = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

function requiredRange(range: (number | null)[]): ICourses[] {
  let result: ICourses[] = courses.filter((item: ICourses) => {
    if (range[1] === null) range[1] = 9000;
    if (item.prices[1] === null) item.prices[1] = 9000;
    if (range[0] === null) range[0] = 0;
    if (item.prices[0] === null) item.prices[0] = 0;
    item.weight = item.prices[1] - item.prices[0];
    if (item.prices[1] >= range[0] && item.prices[0] <= range[1]) return item;
  });

  return result.sort((a: ICourses, b: ICourses) => {
    if (a.prices[0] === b.prices[0]) return a.weight! > b.weight! ? 1 : -1;
    return a.prices[0]! > b.prices[0]! ? 1 : -1;
  });
}

//console.log(JSON.stringify(requiredRange([null, 200])));
//console.log(JSON.stringify(requiredRange([100, 350])));
//console.log(JSON.stringify(requiredRange([200, null])));
