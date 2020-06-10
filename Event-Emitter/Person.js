const { EVENT_GO_CAMPING } = require('./eventNames')
const myEmitter = require('./MyEmitter')

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        //Person lang nghe su kien "GO camping"
        myEmitter.on(EVENT_GO_CAMPING, (params) => {
            console.log(`${this.name} da nhan dc thong bao di cam trai.
                        Noi dung: ${JSON.stringify(params)}`)
        })
    }
}

module.exports = Person