const parseArgs = () => {
  const args = process.argv.slice(2).reduce((acc, propName, i, value) => {
    if (propName.startsWith('--')) {
      const formatProp = `${propName.slice(2)} is ${value[i + 1]}`;
      return [...acc, formatProp]
    }
    return acc;
  },[]);

  const stringToConsole = args.join(', ')

console.log(stringToConsole)
};
parseArgs();