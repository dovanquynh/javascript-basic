// const doTask1 = (name, callback) => {
//     setTimeout(() => {
//         console.log(`1.Hoan thanh cong viec ${name}`)
//         //Error
//         if (name === 'Lai o to') {
//             callback('Ko thuc hien duoc', null)
//         }
//         else {
//             callback({ a: 1, b: 2 })
//         }
//     }, 1000)
// }

// const doTask2 = (name, callback) => {
//     setTimeout(() => {
//         console.log(`2.Hoan thanh cong viec ${name}`)
//         callback({ a: 11, b: 22 })
//     }, 1000)
// }

// console.log('bat dau task1')
// doTask1('Nau com', (result) => {
//     console.log('Nau com xong')
//     console.log(`Ket qua: ${JSON.stringify(result)}`)
// })

// console.log('bat dau task2')
// doTask2('Luoc rau', (result) => {
//     console.log('Luoc rau xong')
//     console.log(`Ket qua: ${JSON.stringify(result)}`)
// })

// console.log('bat dau task1')
// doTask1('Lai o to', (error, result) => {
//     console.log('Nau com xong')

//     if (error) {
//         console.log(`KO lam duoc: ${error}`)
//     }
//     else {
//         console.log(`Ket qua: ${JSON.stringify(result)}`)
//         doTask2('Luoc rau', (result2) => {
//             console.log('Luoc rau xong')
//             console.log(`Ket qua: ${JSON.stringify(result2)}`)
//         })
//     }
// })

//Promise
const doTaskA = (taskName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ket thuc taskA')
            if (taskName === 'Lai o to') {
                reject('Khong thuc hien duoc')
            }
            else {
                resolve({ a: 1, b: 2 })
            }
        }, 1000)
    })
}

const doTaskB = (taskName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ket thuc task B')
            resolve({ a: 11, b: 22 })
        }, 2000)
    })
}

// console.log('Chuan bi lam task A')
// doTaskA('Cau ca').then((result) => {
//     console.log(`success, ket qua la: ${JSON.stringify(result)}`)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// console.log('Chuan bi lam task khac')

//Gio muon thuc hien xong viec A roi den viec B = async

async function doSomeTasks(taskName1, taskName2) {
    try {
        await doTaskA(taskName1)
        await doTaskB(taskName2)
    }
    catch(error) {
        console.log(`Error ${error}`)
    }
}

doSomeTasks('Lai o to', 'Luoc rau')