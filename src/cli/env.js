const parseEnv = () => {
    const PREFIX = 'RSS_';
  
    const parsedVariables = Object.entries(process.env)
      .filter(([key]) => key.startsWith(PREFIX))
      .map(([key, value]) => `${key}=${value}`).join('; ');
  
    console.log(parsedVariables);
  };
  
  parseEnv();
  