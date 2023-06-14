const parseEnv = () => {
    const prefix = 'RSS_';
  
    const parsedVariables = Object.entries(process.env)
      .filter(([key]) => key.startsWith(prefix))
      .map(([key, value]) => `${key}=${value}`);
  
    const result = parsedVariables.join('; ');
    console.log(result);
  };
  
  parseEnv();
  