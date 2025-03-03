// Log Number
console.log(100);

// Log String
console.log('Hello World')

// Log Multiple Values
console.log(20, 'Hello', true)

// Log a Variable
const x = 100;
console.log(x)

// Console Error and Warning
console.error('Alert')
console.warn('Warning')

// Log Object as Table
console.table({name:'Martin', age: 21});

// Group Console Commands
console.group('simple')
console.log(x)
console.error('Alert')
console.warn('Warning')
console.groupEnd();

// Add CSS to Logs
const styles = 'padding 10px; background-color: black; color: white;';
console.log('%cHello World', styles)