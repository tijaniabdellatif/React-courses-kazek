const timestamp = Date.now();
const date = new Date(timestamp);
const dateString = date.toLocaleString('en-US',{
weekday:'short',
day : 'numeric',
year :'numeric',
month:'long'

})

export const dataBook = [

    {
        title:"Marxism",
        author : "Mark R.levin",
        date: dateString,
        price : 150 + 'EUR',
        authorImg : 'https://picsum.photos/32/32/?random',
        url : "https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg"
    },
    {
        title:"It ends with us",
        author : "paperBack",
        date: dateString,
        price : 120 + 'EUR',
        authorImg : 'https://picsum.photos/32/32/?random',
        url : "https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg"
    },
    {
        title:"Billy summer HArdcover",
        author : "stephen King",
        date: dateString,
        price : 130 + 'EUR',
        authorImg : 'https://picsum.photos/32/32/?random',
        url : "https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg"
    }

];