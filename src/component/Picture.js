import myPics from "./images/IMG-20211021-WA0002.jpg"
import './bootstrap-5.1.1-dist/css/bootstrap.css'
import Email from "../component/images/download.png"
import LinkedIn from "../component/images/linkedin.png"

export default function Picture(){
    return(
        // <div className="card">
        //     <img src={myPics} alt="Mypicture" className="card-img-top"/>
        // </div>
        <div className="d-flex justify-content-center">
        <nav className="card " >
            <img src={myPics} className="card-img-top" alt="mypicture"/>
                <div className="card-body bg-dark">
             <h5 className="card-title d-flex justify-content-center text-light">Ayodeji Oyebanji</h5>
            <p className="card-text text-light d-flex justify-content-center ">Software Developer</p>
            <button className="btn btn-light text-dark  "><img src={Email} className="email" alt="email"></img> Email</button>
            <button className="btn btn-primary text-light  "><img src={LinkedIn} className="LinkedIn" alt="linkedin"></img> Linked in</button>
            
            </div>
            

        
                </nav>

            

        </div>
//2:33:33



    )
}