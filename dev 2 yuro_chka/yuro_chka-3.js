function groupAnagrams(ARR)
{
    let groups={};
    for (let i=0; i<ARR.length; i++)
    {
        let sorted = ARR[i].split("");
        sorted = sorted.sort();
        sorted = sorted.join("");
        if(groups[sorted]) groups[sorted].push(ARR[i]);
        else groups[sorted]=[ARR[i]];
    }
    return Object.values(groups);
}
console.log (groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));