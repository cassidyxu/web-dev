// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2
//     if (a == 2) {
//         resolve('Success')
//     } else{ 
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// })

const userLeft = true
const userWatchingCatMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        }else if (userWatchingCatMeme) {
            reject({
                name: 'User Watchinig Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}


watchTutorialPromise().then((message) => {
    console.log('Success:' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})

//running multiple promises at once
// Promise.all
// Promise.race