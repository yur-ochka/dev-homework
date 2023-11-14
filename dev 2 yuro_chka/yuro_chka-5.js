function getRootProperty(obj, value) 
{
    for (let q in obj) {
        let ww = q;
      if (Array.isArray(obj[q]) && obj[q].includes(value)) 
      {
        return q;
      } else if (typeof obj[q] === 'object') {
        let rez = getRootProperty(obj[q], value);
        if (rez !== null) {
          return ww;
        }
      }
    }
    return null;
}
  
object = {
    "one": {
    "nest1": {
    "val1": [9, 34, 92, 100]
    }
    },
    "2f7": {
    "n1": [10, 92, 53, 71],
    "n2": [82, 34, 6, 19]
    }
    }
console.log(getRootProperty(object, 9));  