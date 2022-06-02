

const str1 = "JavAScRipT Is a GrEaT LanGuage"
function trim(){
    console.log("after trim", str1.trim());
}
function lower(){
    console.log("string in lower case-", str1.toLowerCase());
}

function upper(){
    console.log("string in upper case-", str1.toUpperCase());
}
module.exports.trim=trim
module.exports.lower=lower
module.exports.upper=upper