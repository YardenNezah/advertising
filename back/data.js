const { ObjectId } = require("mongodb");

let advertisements = [{
    _id:ObjectId(1),
    title: 'Tsaraf Restaurant',
    content: ['Welcome everyone!', 'Come to eat with us', 'The best italian food', 'PIZZA 1+1 on sale'],
    images: ["https://media-cdn.tripadvisor.com/media/photo-s/1a/46/ad/94/gusto-sharing.jpg"],
    template: 1,
    clientList: [1, 2],
    durationTime: 3000,
    frameTime: {
        startDate: new Date(2021, 0, 1, 10),
        endDate: new Date(2022, 11, 31, 23),
        days: [2, 4]
    }
},
{
    _id:ObjectId(2),
    title: 'Ronen Restaurant',
    content: ['Welcome everyone!', 'Come to eat with us', 'The best Mediterranean food', 'Fresh Fish', 'Kebeb', 'Great Greek Gyros'],
    images: ["https://media-cdn.tripadvisor.com/media/photo-s/1a/46/ad/94/gusto-sharing.jpg"],
    template: 2,
    clientList: [1, 3],
    durationTime: 5000,
    frameTime: {
        startDate: new Date(2021, 2, 1, 10),
        endDate: new Date(2022, 3, 30, 23),
        days: [3, 4]
    }
},
{
    _id:ObjectId(3),
    title: 'Noy Restaurant',
    content: [],
    images: ["https://media-cdn.tripadvisor.com/media/photo-s/1a/46/ad/94/gusto-sharing.jpg"],
    template: 3,
    clientList: [2, 3],
    durationTime: '4000',
    frameTime: {
        startDate: new Date(2021, 0, 1, 10),
        endDate: new Date(2022, 11, 31, 23),
        days: [1, 2, 3, 4, 5, 6, 7]
    }
},
{
    _id:ObjectId(4),
    title: 'Raz Restaurant',
    content: ['Beach Restaurant', 'Eat with a VIEW!'],
    images: ["https://media-cdn.tripadvisor.com/media/photo-s/1a/46/ad/94/gusto-sharing.jpg"],
    template: 1,
    clientList: [1],
    durationTime: '5000',
    frameTime: {
        startDate: new Date(2021, 10, 29, 10),
        endDate: new Date(2022, 11, 30, 23),
        days: [2]
    }
},
{
    _id:ObjectId(5),
    title: 'Cohavi Restaurant',
    content: ['Gourmet Assian Food', '2 Michelin Star!', 'since 2005', 'eat', 'drink', 'enjoy', 'SEE YOU SOON'],
    images: ["https://media-cdn.tripadvisor.com/media/photo-s/1a/46/ad/94/gusto-sharing.jpg"],
    template: 2,
    clientList: [3],
    durationTime: '6000',
    frameTime: {
        startDate: new Date(2022, 0, 1, 10),
        endDate: new Date(2022, 11, 31, 23),
        days: [2, 3, 4]
    }
}
]
module.exports = advertisements;