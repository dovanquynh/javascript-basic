const { EVENT_NEW_COURSE } = require('./eventNames')
const myEmitter = require('./MyEmitter')

class Student {
    constructor(name) {
        this.name = name
        //Student lang nghe su kien "khoa hoc moi"

        myEmitter.on(EVENT_NEW_COURSE, (parmas) => {
            console.log(`${this.name} da nhan dc thong bao khoa hoc moi.
                        Noi dung: ${JSON.stringify(parmas)}`)
        })
    }
}

module.exports = Student