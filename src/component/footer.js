import "./bootstrap-5.1.1-dist/css/bootstrap.css"
import GitHub from "./images/git hub.png"
import Linkedin from "./images/linkedin.png"
import email from "./images/download.png"

export default function Footer(){
    return(
        <div className="d-flex justify-content-center">
            <div className="card ">
                  <div className="card-footer d-flex justify-content-center">
                      <img src={GitHub} alt="git" className="git" />
                      <img src={Linkedin} alt="linkedin" className ="linked-footer"/>
                      <img src={email} alt="email" className ="email-footer"/>
                        
                  </div>
              
            </div>
            

        </div>
        

    )
}