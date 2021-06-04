class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }
  static titleize(string) {
    const array = string.split(' ')    
    const capitalizedAll = []
    for (let i = 0; i<=array.length-1; i++) {
      if (i===0) {
        capitalizedAll.push(this.capitalize(array[i]))
      }
      else if (i>0 && (
        array[i] === 'the' ||
        array[i] === 'a' ||
        array[i] === 'an' ||
        array[i] === 'but' ||
        array[i] === 'of' ||
        array[i] === 'and' ||
        array[i] === 'for' ||
        array[i] === 'at' ||
        array[i] === 'by' ||
        array[i] === 'from')) {
          capitalizedAll.push(array[i])
        } else capitalizedAll.push(this.capitalize(array[i]))
    }
    this.capitalize(capitalizedAll[0])
    const titleized = capitalizedAll.reduce((init,acc)=>init+' '+acc)
    return titleized
  } 
}