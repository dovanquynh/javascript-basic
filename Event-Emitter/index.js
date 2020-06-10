//THong bao lich di cam trai, hoc
const myEmitter = require('./MyEmitter')
const Person = require('./Person')
const Student =  require('./Student')
const { EVENT_GO_CAMPING, EVENT_NEW_COURSE } = require('./eventNames')

let person1 = new Person('Quynh', 25)
let person2 = new Person('Duy', 18)

let student1 = new Student('Student 1')
let student2 = new Student('Student 2')

//Thong bao lich cam trai cho person1 va  person2
myEmitter.emit(EVENT_GO_CAMPING, {
    //Params
    place: 'Hung ha, Thai Binh',
    date: '19-10-2020'
})

//THong bao khoa hoc moi
myEmitter.emit(EVENT_NEW_COURSE, {
    couseName: 'Khoa hoc nodejs',
    date: '20/5/2020'
})

//Vậy đối tượng person1, 2 đăng ký nhận cả 2 event EVENT_GO_CAMPING, EVENT_NEW_COURSE !
//person1, person2, student1, student2 cũng đc gọi là các "listeners"
//Muốn xem event EVENT_NEW_COURSE gửi cho mấy listeners ?
console.log(`Số listeners của ${EVENT_NEW_COURSE} là : ${myEmitter.listenerCount(EVENT_NEW_COURSE)}`)
console.log(`Số listeners của ${EVENT_GO_CAMPING} là : ${myEmitter.listenerCount(EVENT_GO_CAMPING)}`)
