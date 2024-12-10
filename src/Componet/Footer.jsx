import React from "react";
import { FaGithub, FaTwitter, FaHeart } from "react-icons/fa";
function Footer(props) {
    return (
        <>
            <div className="footer">
                <div className="flex ml">
                    <a href=""><h3 className="f-text">CHARACTERS:826</h3></a>
                    <a href=""><h3 className="f-text">LOCATIONS:126</h3></a>
                    <a href=""><h3 className="f-text">EPISODES:51</h3></a>
                </div>
                <a href=""><h3 className="f-text2">SERVER STATUS</h3></a>
                <div className="flex m-t" style={{ justifyContent: "center" }} >
                    <img style={{ width: "110px", height: "40px" , fill : "white"}} src="https://www.azavea.com/wp-content/uploads/2022/03/1280px-Netlify_logo.svg-1024x278.png" alt="" />
                    <img style={{ width: "110px", height: "50px"}} src="https://boldstart.vc/wp-content/uploads/2023/12/wordmark-stellate-invert.png" alt="" />
                </div>
                    <div className="ionc" >
                        <FaGithub style={{ color: "rgb(158, 158, 158)", fontSize: "20px"}} className="m"/>
                        <FaTwitter style={{ color: "rgb(158, 158, 158)", fontSize: "20px" }} className="m"/>
                        <FaHeart style={{ color: "rgb(158, 158, 158)", fontSize: "20px" }} className="m"/>
                    </div>
                        <div className="mt m-l" style={{color:"white"}}><span>❮❯ by Axel Fuhrmann 2024</span></div>

            </div>
        </>
    )
}
export default Footer