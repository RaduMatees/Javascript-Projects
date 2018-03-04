const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// forEach

// for (let i=0; i<companies.length; i++){
//   console.log(companies[i]);
// }
//
//
// companies.forEach((company) => console.log(company.name));

// filter

// let over = []
// for(let i=0; i<ages.length; i++){
//   if (ages[i] >= 21) {
//     over.push(ages[i]);
//   }
// }
// console.log(over);
//
// let over = ages.filter(age => age>=21);
// console.log(over);
//
// let retails = companies.filter(company => company.category === "Retail");
// console.log(retails);
//
// let eighties = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eighties);

// let tenAndMore = companies.filter(company => company.end - company.start >= 10);
// console.log(tenAndMore);

// map

// let companiesNames = companies.map(company => company.name);
// console.log(companiesNames);

// let agesSquareTimesTwo = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age*2);
// console.log(agesSquareTimesTwo);

// sort

// const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1);
// console.log(sortedCompanies);
//
// const sortedAges = ages.sort((a, b) => a > b ? 1 : -1);
// console.log(sortedAges);

// reduce

// let totalAges = ages.reduce((total, age) => total + age);
// console.log(totalAges);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

const combined = ages
  .map(age => age*2)
  .filter(age => age>=40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total+age, 0);

console.log(combined);
