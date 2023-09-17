

function fit(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    const normalizedValue = (value - fromLow) / (fromHigh - fromLow);
    const remappedValue = normalizedValue * (toHigh - toLow) + toLow;
    return Math.max(Math.min(remappedValue, Math.max(toLow, toHigh)), Math.min(toLow, toHigh));
  }
  
  function fit01(value: number, toLow: number, toHigh: number): number {
    const remappedValue = value * (toHigh - toLow) + toLow;
    return Math.max(Math.min(remappedValue, Math.max(toLow, toHigh)), Math.min(toLow, toHigh));
  }


  export {fit, fit01}