import { AnimateImage } from "konvas";
import './grey.css'


const Grey = () => {
    const star = <img src='images/star.svg' id='star'/>
    const bgColor = <div id='bgColor'></div>
    const topCloud = <img src='images/cloud.svg' id='topCloud' />
    const btmCloud = <img src='images/cloud.svg' id='btmCloud'/>
    const greyChar00 = <img src='images/greyChar_00.svg' id='greyChar00'/>
    const greyChar01 = <img src='images/greyChar_01.svg' id='greyChar01'/>
    const greyText = 
        <div id='greyText'>
            ตัวฉันที่กำลังลอยอยู่ในความคิด<br></br>...
        </div>
    return (
        <div style={{position: 'absolute'}}>
           {bgColor}
           {star}
           {topCloud}
           {greyChar00}
           {greyChar01}
           {btmCloud}
           {greyText}
           
        </div>
    )
}

export default Grey;