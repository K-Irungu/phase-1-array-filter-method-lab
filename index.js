// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const matchedDrivers = drivers.filter((drivers) => (drivers.toUpperCase() === string.toUpperCase()));
    console.log(matchedDrivers);
    return matchedDrivers;
};

findMatching(drivers, "Sammy");
findMatching(drivers, "Bobby");

function fuzzyMatch(drivers, string2) {
    const fuzzMatch = drivers.filter((drivers) => (drivers.charAt(0) === string2.charAt(0)));
    console.log(fuzzMatch);
    return fuzzMatch;
}

fuzzyMatch(drivers, "Sa");
fuzzyMatch(drivers, "y");
fuzzyMatch(drivers, "mm");

drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers, string3) {
        const findings = drivers.filter((drivers) => drivers.name === string3);
        console.log(findings);
        return findings;
    }

matchName(drivers, "Bobby");
matchName(drivers, "bobby");





