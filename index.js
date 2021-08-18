const chalk = require('chalk');
const readlineSync = require('readline-sync');

const obj = {
    bot: chalk.red('bot '),
    user: chalk.green('user ')
}

const greeting = readlineSync.question(`${obj.bot}: Hello ${obj.user}, what your name? \n${obj.user}: `);
console.log(`${obj.bot}: Hello ${greeting}, I have a couple of question for you.`)
//console.log(`${obj.bot}: ${greeting}`)

if (readlineSync.keyInYN(`${obj.bot}: Are you ready ?`) === false) {
    console.log('You are boring!')
    process.exit();
} else {
    console.log('You have to pass the test.')
}

const question = readlineSync.question(`How much is ${5} + ${5} = `)
if (question === '10') {
    console.log(`${obj.bot}: Welcome to the WebStorm editor! I am a console bot, you can choose the questions that I will try to answer you. `)
    console.log(`${obj.bot}: Here's my list of questions for you!`)
    console.log('==========================================')
    console.log('1) What is the date today? ')
    console.log('2) Math question?')
    console.log('3) To say that I am beautiful ^_^')
    console.log('==========================================')
    const list = readlineSync.question()
    let arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
        if (list === '1') {
            console.log(new Date())
            break
        }
        if (list === '2') {
            let num1 = '';
            let num2 = '';
            const math = readlineSync.question('value: ', num1),
                math1 = readlineSync.question(),
                math2 = readlineSync.question('value: ', num2)
            for (let x = 0; x < 1; x++) {
                if (math1 === '+') {
                    console.log(+math + +math2)
                }
                if (math1 === '-') {
                    console.log(+math - +math2)
                }
                if (math1 === '/') {
                    console.log(+math / +math2)
                }
                if (math1 === '*') {
                    console.log(+math * +math2)
                }
            }

            break
        }
        if (list === '3') {
            readlineSync.question(`${obj.user}: `)
            console.log(`${obj.bot}: Thank you my friend!`)
            break
        }
    }

} else {
    console.log(`${obj.bot}: Are you serious? Think...`)
}