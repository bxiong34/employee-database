const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

function setOption(input) {
    if (input.text === 'View all departments') {
        let inputShape = new Circle (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.text === 'View all roles') {
        let inputShape = new Triangle (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.text === 'View all employees') {
        let inputShape = new Square (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.text === 'Add a department') {
        let inputShape = new Square (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.text === 'Add a role') {
        let inputShape = new Square (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.text === 'Add an employee') {
        let inputShape = new Square (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.text === 'Update an employee role') {
        let inputShape = new Square (input.text, input.textcolor, input.color)
        return inputShape.render()
    }
};

module.exports = setOption;