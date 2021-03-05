console.log('connected')

const companies = [
{name:'company One', category:'Finance', start:1981, end: 2003},
{name:'company two', category:'Retail', start:1992, end: 2008},
{name:'company three', category:'Auto', start:1999, end: 2007},
{name:'company four', category:'Retail', start:1989, end: 2010},
{name:'company five', category:'Technology', start:2009, end: 2014},
{name:'company six', category:'Finance', start:1987, end: 2010},
{name:'company seven', category:'Auto', start:1986, end: 1996},
{name:'company eigth', category:'Technology', start:2011, end: 2016},
{name:'company nine', category:'Retail', start:1981, end: 1989},

];

const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15,45, 25, 64, 32];

// forloop

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
    
}

// forEach

companies.forEach(function(company){
    console.log(company.name)
});


// filter
// get 21 and older
const canDrink = age.filter(function(age){
if(age >= 21){
    return true;
}
});
console.log(canDrink);

// filter Retail companies
 const retailCompanies = companies.filter(function(company){
   if(companies.category === 'Retail'){
       return true;
   }
 });
 console.log(retailCompanies);

// map
 const companyNames = companies.map(function(company){
     return `${company.name},${company.start}, ${company.end}`;
 });

 console.log(companyNames);


 const ages = age.map(function(age){
     return age;
 })

 console.log(ages)
// sort
// reduce

const ageSum = age.reduce(function(total,age){
    return total + age;
}, 0 );

console.log(ageSum);