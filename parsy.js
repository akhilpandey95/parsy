/*
 * parsy himself
 * Akhil Pandey
 * MIT License
 */

module.exports.context = (foo) => {
    let string = foo.toString()
    let s1 = new Set()
    s1.add('What').add('Why').add('How').add('When')

    for(let item of s1.values()) {
        if(string.startsWith(item)) {
            console.log("Breaking the question will happen here")
        }
    }
}

module.exports.tellDate = (foo) => {
    let evaluate = foo.toString()
    let s2 = new Set()
    s2.add('today').add('this day').add('tomorrow').add('yesterday')

    for(let item of s2.values()) {
        if(evaluate.includes(item)) {
            console.log("date operations will start here")
        }
    }
}
