const input = require('./d7-input');

const solve1 = (str) => {
  let programs = str.split("\n").map(line => {
    let matched = line.match(/(\w+) \(\d+\)(?: -> ((?:\w+(?:$|, ))+))?/);
    let [, name, namesAbove] = matched;
    return {
      name,
      namesAbove: namesAbove ? namesAbove.split(", ") : [],
    };
  });

  let namesBelow = programs.map(({name}) => {
    return name
  });
  let namesAbove = programs.reduce((names, program) => {
    return [...names, ...program.namesAbove]
  }, []);

  var result = namesBelow.find(name => {
    return namesAbove.indexOf(name) < 0
  });
  return result;
};
  
  
  console.log('answer: ', solve(input));