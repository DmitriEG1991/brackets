module.exports = function check(str, bracketsConfig){
    let mass = [];
    let a = ["(", "{", "["];
    let b = [")", "}", "]"];
    let c = ["|"];
    bracketsConfig.forEach(function(abc){
        if(abc[0] != abc[1]){
            a.push(abc[0]);
            b.push(abc[1]);
        }else{ c.push(abc[0]);
        }
    })
    let str2 = str.toString().split("");
    for (let i = 0; i < str2.length; i++) {
        if (a.includes(str2[i])) {
            mass.push(str2[i]);
        } else if (b.includes(str2[i])) {
            if (a.indexOf(mass[mass.length - 1]) == b.indexOf(str2[i])) {
                mass.pop();
            } else {
                return false;
            }
        } else if (c.includes(str2[i])) {
            if (mass[mass.length - 1] == str2[i]) {
                mass.pop();
            } else if (!mass.includes(str2[i])) {
                mass.push(str2[i]);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return mass.length == 0 ? true : false;
}  
