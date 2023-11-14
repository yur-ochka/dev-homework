function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let correctKey = "";
      while (correctKey.length < str.length) correctKey += key;
      correctKey = correctKey.slice(0, str.length);
      let encoded = "";
      for (let i = 0; i < correctKey.length; i++)
        {
          if (abc.includes(str[i]))
          {
          let ind = abc.indexOf(str[i])+abc.indexOf(correctKey[i]);
          if (ind >= abc.length) ind = ind - abc.length;
          encoded += abc[ind];
            }
          else encoded += str[i];
        }
      return encoded;
    };
    
    this.decode = function (str) {
      let correctKey = "";
      while (correctKey.length < str.length) correctKey += key;
      correctKey = correctKey.slice(0, str.length);
      let decoded = "";
      for (let i = 0; i < correctKey.length; i++)
        {
          if (abc.includes(str[i]))
          {
            let ind = abc.indexOf(str[i])-abc.indexOf(correctKey[i]);
          if (ind < 0) ind = ind + abc.length;
          decoded += abc[ind];
           }
          else decoded += str[i];
        }
      return decoded;
    };
  }