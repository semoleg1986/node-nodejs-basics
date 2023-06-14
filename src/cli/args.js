const parseArgs = () => {
    const args = process.argv.slice(2);
    const parsedArgs = {};
  
    for (let i = 0; i < args.length; i += 2) {
      const propName = args[i].slice(2);
      const value = args[i + 1];
      parsedArgs[propName] = value;
    }
  
    for (const propName in parsedArgs) {
      const value = parsedArgs[propName];
      console.log(`${propName} is ${value}`);
    }
  };
  
  parseArgs();
  