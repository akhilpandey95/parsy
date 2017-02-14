/* This Source Code Form is subject to the terms of the MIT
 * License. If a copy of the same was not distributed with this
 * file, You can obtain one at https://github.com/AkhilHector/parsy/blob/master/LICENSE.*/

module.exports.data = (foo) => {
    var prefixed_questions = ["Who are you", "What is your name", "What are you"]
    var prefixed_answers = [
        "My name is Felix, Cheif cyber Commandant to Mr Akhil",
        "I am Felix, just a conversational chat AI built by Mr Akhil",
        "People call me felix, Eenie meenie miney moo, ignore my spellings because i am chatbot yoo !",
        "A long time ago, in a galaxy far far away........ I was born with the name Felix, given to me by master Akhil",
        "Oh you want to know about me, I'm Felix a conversational AI",
        "Hello there, this is felix, Cheif Operaional Commandant to Mr Akhil Pandey",
        "My name is Felix kerilious merilious, chatbot to my respected master",
        "Oops i don't precisely have a name, but you can call me Felix",
        "The internet gave me an IP address but my master ",
        "I am felix a miniscular spec, part of the web called internet"
    ]
    if (foo === "questions") {
        return prefixed_questions
    } else {
        return prefixed_answers
    }
}

module.exports.context = (foo) => {
    let string = foo.toString()
    let s1 = new Set()
    s1.add('What').add('Why').add('How').add('When').add('Does')

    for (let item of s1.values()) {
        if (string.startsWith(item)) {
            process.stdout.write(`A question with ${item}\n`)
        }
    }
}

module.exports.tellDate = (foo) => {
    let s2 = new Set()
    let prevFlag = false
    let afterFlag = false
    let afterKeywords = ['after', 'in', 'within', 'from now', 'to go', 'remaining', 'left']
    let today = new Date().getDate()
    let evaluate = foo.toString().toLowerCase()
    let catchDate = foo.toString().split(' ')
    let catchNumber = catchDate.indexOf('days')
    if (catchDate.indexOf('before') < (catchNumber - 1)) {
        prevFlag = true
    }
    if (catchDate.indexOf('after') < (catchNumber - 1)) {
        afterFlag = true
    }
    let specificDay = catchDate[catchNumber - 1]
    let specificDate = specificDay + " days";
    s2.add('today').add('this day').add('tomorrow').add('yesterday').add(specificDate)

    for (let item of s2.values()) {
        if (evaluate.includes(item)) {
            if((item === specificDate) && (afterFlag) && (evaluate.includes(afterKeywords[0] + ' ' + specificDate)
            || evaluate.includes(afterKeywords[1] + ' ' + specificDate) || evaluate.includes(afterKeywords[2] + ' ' + specificDate)
            || evaluate.includes(specificDate + ' ' + afterKeywords[3]) || evaluate.includes(specificDate + ' ' + afterKeywords[4])
            || evaluate.includes(specificDate + ' ' + afterKeywords[5]) || evaluate.includes(specificDate + ' ' + afterKeywords[6]))) {
                let value = new Date(new Date().setDate(today + parseInt(specificDay)))
                process.stdout.write(`The value of "${item}" is - ${value}\n`)
            }
            if((item === specificDate) && (afterFlag) && (evaluate.includes('before ' + specificDate))) {
                let value = new Date(new Date().setDate(today - parseInt(specificDay)))
                process.stdout.write(`The value of "${item}" is - ${value}\n`)
            }
            if((s2.has(item)) && (item !== specificDate) && (item === "this day" || item === "today")) {
                let value = new Date(new Date().setDate(today))
                process.stdout.write(`The value of "${item}" is - ${value}\n`)
            }
        }
    }
}
