class Warrior
  {
    constructor ()
    {
      this.charLevel = 1;
      this.charRank = "Pushover";
      this.charExp = 100;
      this.charAchiv = [];
      this.arrOfRanks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    }
    update ()
    {
      if (this.charExp > 10000) this.charExp = 10000;
      this.charLevel = Math.floor(this.charExp/100);
      this.charRank = this.arrOfRanks[Math.floor(this.charLevel/10)];
    }
    training (trainArr)
    {
      if (trainArr[2] > this.charLevel) return "Not strong enough";
      else
      {
      this.charAchiv.push(trainArr[0]);
      this.charExp = this.charExp + trainArr[1];
      this.charLevel = Math.floor(this.charExp/100);
      this.charRank = this.arrOfRanks[Math.floor(this.charLevel/10)];
        return trainArr[0];
      }
    }
    battle (levelOfEnemy)
    {
      if(levelOfEnemy <= 0 || levelOfEnemy > 100) return "Invalid level";
      else
        {
      if (levelOfEnemy <= this.charLevel - 2) {this.update(); return "Easy fight";}
      if (levelOfEnemy == this.charLevel - 1 || levelOfEnemy == this.charLevel) 
      { 
        this.charExp = this.charExp + ((levelOfEnemy - this.charLevel) * 5) + 10;
        this.update();
        return "A good fight";
      }
          if (levelOfEnemy >= this.charLevel + 5 && Math.floor(this.charLevel/10) < Math.floor(levelOfEnemy/10))  
      {
        return "You've been defeated";}
        }
      if (levelOfEnemy > this.charLevel)
      {
        this.charExp = this.charExp + (levelOfEnemy - this.charLevel) * (levelOfEnemy - this.charLevel) * 20;
        this.update();
        return "An intense fight";
      }
    }
    experience() 
    {
      this.update();
      return this.charExp;
    }
    level() 
    {
      this.update();
        return this.charLevel;
    }
    rank()
    {
      this.update();
      return this.charRank;
    }
    achievements()
    {
      this.update();
      return this.charAchiv;
    }
  }