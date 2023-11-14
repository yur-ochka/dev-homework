class Vector {
  constructor(components) {
    this.components = components;
  }
  add(other) {
    if (this.components.length !== other.components.length) 
    {
      throw new Error("err");
    }
    let newArr = [];
        for (let i = 0; i < this.components.length; i++)
          {
            newArr.push(other.components[i] + this.components[i]);
          }
    return new Vector(newArr);
  }

  subtract(other) {
    if (this.components.length !== other.components.length) 
    {
      throw new Error("err");
    }
    let newArr = [];
        for (let i = 0; i < this.components.length; i++)
          {
            newArr.push(this.components[i] - other.components[i]);
          }
    return new Vector(newArr);
  }

  dot(other) {
    if (this.components.length !== other.components.length) 
    {
      throw new Error("err");
    }
    let numb = 0;
        for (let i = 0; i < this.components.length; i++)
          {
            numb += other.components[i] * this.components[i];
          }
    return numb;
  }

  norm() 
  {
    let numb = 0;
    for (let i = 0; i < this.components.length; i++)
          {
            numb += this.components[i] * this.components[i];
          }
    return Math.sqrt(numb);
  }

  toString() {
    return `(${this.components.join(',')})`;
  }

  equals(other) {
    if (this.components.length !== other.components.length) 
    {
      return false;
    }
    for (let i = 0; i < this.components.length; i++)
          {
            if (this.components[i] !== other.components[i])
            return false;
          }
    return true;
  }
}