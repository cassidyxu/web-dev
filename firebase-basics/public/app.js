document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app()
    // console.log(app)
    // const db = firebase.firestore()
    // const myPost = db.collection('posts').doc('firstpost');

    // get data only once
    // myPost.get()
    //     .then(doc => {
    //         const data = doc.data();
    //         document.getElementById("displayData").innerHTML = `${data.title}` +
    //             '<br>views: ' + `${data.views}`;
    //     })


    // update document each time the contents change
    // myPost.onSnapshot(doc => {
    //     const data = doc.data();
    //     document.getElementById("displayData").innerHTML = `${data.title}` +
    //         '<br>views: ' + `${data.views}`;
    // })


    // const db = firebase.firestore();
    // const productsRef = db.collection('products');

    // // const query = productsRef.where('price','>=',10);
    // const query = productsRef.orderBy('price', 'desc').limit(2)

    // query.get()
    //     .then(products => {
    //         let productInfo = '';
    //         products.forEach(doc => {
    //             data = doc.data();
    //             console.log(data)
    //             productInfo += `${data.name} at $${data.price}<br>`;
    //         })
    //         document.getElementById("displayProductData").innerHTML = productInfo;
    //     })

})

function uploadFiles(files) {
    const storageRef = firebase.storage().ref();
    const horseRef = storageRef.child('horse.jpg');
    const file = files.item(0);
    const task = horseRef.put(file);
    task.then(snapshot => {
        console.log(snapshot);
        snapshot.ref.getDownloadURL().then(url => {
            document.querySelector('#imgUpload').setAttribute('src', url);
        });
    })
}

// function updatePost(e){
//     const db = firebase.firestore()
//     const myPost = db.collection('posts').doc('firstpost');
//     // console.log(e)
//     myPost.update({title: e.target.value})
// }

// Authentication
// function googleLogin(){
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const user = result.user
//             document.getElementById("userDisplayName").textContent = `Hello ${user.displayName}`;
//             console.log(user)
//         })
//         .catch(console.log)
// }