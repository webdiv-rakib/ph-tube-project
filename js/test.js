// const isVerified = false;
// if(isVerified === true){
//     console.log('user is verified');
// }
// else{
//     console.log('user is not verified');
// }

// console.log(`${isVerified === true ? "user is verified" : "user is not verified"}`);


// const isLove = true;
// if (isLove === true) {
//     for (let i = 0; ; i++) {
//         console.log("Sanziii Loved Me", i);
//     }
// }
// else {
//     console.log("Sanzi never ever loved me");
// }

// function iLoveYou() {
//     console.log("i love you")
// }
// iLoveYou();

function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = parseInt(time % 3600);
    let remainingMinutes = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} Hour ${remainingMinutes} Minutes ${remainingSecond} Seconds Ago`;
}
console.log(getTimeString(7865));

const demoObject = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}