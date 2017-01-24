/*
 * parsy himself
 * Akhil Pandey
 * MIT License
 */

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
    let value = new Date().getDate()
    let evaluate = foo.toString()
    let catchDate = foo.toString().split(' ')
    let catchNumber = catchDate.indexOf('days')
    let specificDay = catchDate[catchNumber - 1]
    let specificDate = specificDay + " days";
    s2.add('today').add('this day').add('tomorrow').add('yesterday').add(specificDate)

    for (let item of s2.values()) {
        if (evaluate.includes(item)) {
            process.stdout.write(`The value of - ${item}\n`)
        }
    }
}
