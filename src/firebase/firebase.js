import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc,collection } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBRszxqJXL9K_adLIW_xsNWkRrx6iKmYys",
    authDomain: "reactcoder34855.firebaseapp.com",
    projectId: "reactcoder34855",
    storageBucket: "reactcoder34855.appspot.com",
    messagingSenderId: "1083177098198",
    appId: "1:1083177098198:web:f8ec3805afe0873f612277"
};
export async function exportArrayJuegos(){
    const games =[{
            "producto": "God of War",
            "descripcion":"lorem",
            "stock": 53,
            "precio": 7300,
            "imagen": "https://www.mdtech.news/u/fotografias/m/2022/11/6/f608x342-11116_40839_0.jpg",
            "categoria":"Aventura",
        }, 
        {
            "producto": "Call of Duty Black ops 2",
            "descripcion":"lorem",
            "stock": 19,
            "precio": 900,
            "imagen": "https://i.ytimg.com/vi/H74T9L2VZJo/maxresdefault.jpg",
            "categoria":"Guerra"
        },
        {
            "producto": "Elden Ring",
            "descripcion":"lorem",
            "stock": 14,
            "precio": 7200,
            "imagen": "https://assets.nuuvem.com/image/upload/v1/products/618418052f91a002e3f9cf6b/sharing_images/dl3d5ccidn9wlkemhfjr.jpg",
            "categoria":"Aventura"
        },
        {
            "producto": "counter strike GO",
            "descripcion":"lorem",
            "stock": 33,
            "precio": 1000,
            "imagen": "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427",
            "categoria":"Guerra"
        },
        {
            "producto": "Stray",
            "descripcion":"lorem",
            "stock": 20,
            "precio": 8000,
            "imagen": "https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png",
            "categoria":"Aventura",
        },
        {
            "producto": "Pay Day 2",
            "descripcion":"lorem",
            "stock": 60,
            "precio": 4700,
            "imagen": "https://media.vandal.net/m/20633/payday-2-2013121617378_1.jpg",
            "categoria":"Guerra",
        },
        {
            "producto": "Outlast 2",
            "descripcion":"lorem",
            "stock": 200,
            "precio": 4980,
            "imagen": "https://image.api.playstation.com/cdn/UP2113/CUSA06623_00/5vXtP0O5fmnnyrNnWAinTz57d04szG3b.png",
            "categoria":"Terror",
        },{
            "producto": "Poppy Playtime",
            "descripcion":"lorem",
            "stock": 500,
            "precio": 5600,
            "imagen": "https://i.3djuegos.com/juegos/18221/poppy_playtime/fotos/ficha/poppy_playtime-5543028.jpg",
            "categoria":"Terror",
        }
        ,{
            "producto": "Modern Warfare 2",
            "descripcion":"lorem",
            "stock": 500,
            "precio": 5600,
            "imagen": "https://image.api.playstation.com/vulcan/img/rnd/202008/1301/raryqz0xAsk3HutslehRAW4A.png",
            "categoria":"Guerra",
        },{
            "producto": "Dead By Daylight",
            "descripcion":"lorem",
            "stock": 10,
            "precio": 5700,
            "imagen": "https://phantom-marca.unidadeditorial.es/da2d5baf1ea1fa9a02f13f39b86fe52f/resize/1320/f/jpg/assets/multimedia/imagenes/2021/12/03/16385608274679.jpg",
            "categoria":"Terror",
        },{
        "producto": "Horizon",
        "descripcion":"lorem",
        "stock": 120,
        "precio": 9700,
        "imagen": "https://i.ytimg.com/vi/InoAU5wUFcE/maxresdefault.jpg",
        "categoria":"Aventura",
        }
        ];
    
        for (let item of games){
            addDoc(collection(db,"productos"),item).then((respuesta)=>
            console.log("item creado", respuesta.id)
            );
        }
    }

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)