const solution = (myString, pat) => {
    for (let i = myString.length; i >= 0; i--) {
        let subStr = myString.slice(0, i);
        if (subStr.endsWith(pat)) {
            return subStr;
        }
    }
    return "";
}