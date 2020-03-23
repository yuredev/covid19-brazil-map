function customSplit(string, ...separators) {
    let newString = string;
    for(let i = 0; i < separators.length; i++) {
        newString = newString.split(separators[i]).join(',');
    }
    return newString.split(',');
}

export default customSplit;