const parseArgs = () => {
    const args = process.argv.slice(2);
    const parsedArgs = {};
  
    let i = 0;
    while (i < args.length) {
      const arg = args[i];
      if (arg.startsWith('--')) {
        const propName = arg.slice(2);
        const value = args[i + 1];
        parsedArgs[propName] = value;
        i += 2;
      } else {
        console.error(`Invalid argument: ${arg}`);
        i += 1;
      }
    }
  
    for (const propName in parsedArgs) {
      const value = parsedArgs[propName];
      console.log(`${propName} is ${value}`);
    }
  };
  
  parseArgs();
  