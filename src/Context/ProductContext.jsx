import { createContext } from "react";


const products = [
    {
        title: "MacBook Pro 13 2020",
        price: 10000,
        thumbnail: "https://th.bing.com/th/id/R.bdd4a33d33c72572b6e3442412b9c4d8?rik=Hte%2bBT4URa92EQ&pid=ImgRaw&r=0",
        discount: null
    },
    {
        title: "Iphone 14",
        price: 8000,
        thumbnail: "https://th.bing.com/th/id/R.38bb5fd5517b5d1e6dd9f1702dcc00d9?rik=SzxWCKzUq%2fakxA&pid=ImgRaw&r=0",
        discount: 15
    },
    {
        title: "kids Toy",
        price: 1000,
        thumbnail: "https://madeheart.com/media/productphoto/974/58818940/033_2.jpg",
        discount: 10
    },
    {
        title: "Mercedes-Benz AMG GT63",
        price: 1_000_000,
        thumbnail: "https://images.carexpert.com.au/resize/3000/-/app/uploads/2020/12/2021-Mercedes-AMG-A45-S-Review-51.jpg",
        discount: null
    },
    {
        title: "Eye Glasses",
        price: 600,
        thumbnail: "https://innofinsolutions.com/wp-content/uploads/2015/09/img12.jpg",
        discount: 60
    },
    {
        title: "air puds",
        price: 300,
        thumbnail: "https://images.frandroid.com/wp-content/uploads/2019/11/c_apple-airpods-pro-frandroid-dsc03978-1200x800.jpg",
        discount: null
    },
    {
        title: "PowerBank 10000M",
        price: 10000,
        thumbnail: "https://4.bp.blogspot.com/-rV0V3XoxSCg/XL9D2n7YveI/AAAAAAAAL0Q/6Sb9FnUAFOsqHwXiGzr6C4Q0psAjrU3_gCLcBGAs/s1600/OUTXE%2B20000mAh%2BSavage%2BSolar%2BCharger%2B4A%2BDual%2BInput%2BType%2BC%2Band%2BUSB%2B03.jpg",
        discount: null
    },
    {
        title: "travel back pack",
        price: 700,
        thumbnail: "https://cdn.packhacker.com/2019/05/amazonbasics-slim-travel-backpack-weekender-in-detroit-michigan-2.jpg?auto=compress&auto=format&w=768&h=512&fit=crop",
        discount: 10
    },
    {
        title: "selfie stick",
        price: 50,
        thumbnail: "https://3.bp.blogspot.com/-MU91ZBqmFD8/VNZ7i8DIhsI/AAAAAAAAaKA/BFAbn0M59cY/s1600/selfie%2Bstick.jpg",
        discount: 30
    }
]

const Context = createContext();


export default Context;

export {
    products
}