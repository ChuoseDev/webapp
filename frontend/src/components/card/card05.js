import { useState, useEffect } from "react"

const Card05 = () => {
    const [bgCard, setBgCard] = useState('#FFFFFF')

    const cardStyle = {
        position: 'relative',
        // box-sizing: 'border-box',
        width: '305px',
        height: '434px',
        background: bgCard,
        border: '2px solid #9484F8',
        borderRadius: '29px'
    }
    const charStyle = {
        position: 'absolute',
        left:'70px',
        top:'289px',
        left: '104px',
        top: '269px',
    }

    const circleInnerStyle = {
        position: 'absolute',
        width: '148.29px',
        height: '147.43px',
        borderRadius: '100px',
        left: '78.43px',
        top: '234.29px',
        background: '#9081F8',
        filter: 'blur(20px)',
    }

    const circleOuterStyle = {
        position: 'absolute',
        width: '192px',
        height: '192px',
        borderRadius: '100px',
        left: '57px',
        top: '212px',
        background: '#C4BDF7',
        filter: 'blur(21px)',
    }

    const headerStyle = {
        //Font
        fontFamily: 'Comfortaa',
        fontSize: '26px',
        fontWeight: 700,
        lineHeight: '29px',
        textAlign: 'left',

        //Position
        position: 'absolute',
        width: '305px',
        height: '60px',
        left: '10px', //should 17
        top: '78px',
        color: '#553CFD',
    }
    const infoStyle = {
        position: 'absolute',
        width: '251px',
        height: '101px',
        left: '13px',
        top: '146px',
        color: '#553CFD',

        fontFamily: 'Comfortaa',
        fontSize: '12px',
        fontWeight: 300,
        lineHeight: '13px',
        textAlign: 'left',
        fontStyle: 'normal',
        color: '#553CFD',

    }
    const cardNumberStyle = {
        position: 'absolute',
        width: '39px',
        height: '30px',
        left: '236px',
        top: '19px',
        color: '#553CFD',

        fontFamily: 'Comfortaa',
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '40px',
        textAlign: 'center',
        fontStyle: 'normal',
        color: '#553CFD',

    }

    const svgStyle = {
        position: 'absolute',
        left:'222px',
        top:'30.18px',
        height:'25.51px',
        width:'65.21px',
        transform: 'rotate(-16.72deg)',
    }

    const ellipseStyle = {
        position: 'absolute',
        border: '1px solid #AEA3F8',
        borderRadius: '100px',
        stroke: '#AEA3F8',
        strokeWidth: '1px',
        fill: 'transparent',
        fillOpacity:0,
    }



    return <button style={cardStyle} onClick={() => {
        if (bgCard==='#FFFFFF') {
            setBgCard('#DBDDFC')
        }
        else {
            setBgCard('#FFFFFF')
        }
        }}>
        <svg position='absolute'  style={svgStyle}>
            <ellipse style={ellipseStyle} cx='32.6px' cy='12.75px' ry='11.75px' rx='31.6'/>
        </svg>
        <div id='cardnumber' style={cardNumberStyle}>05</div>

        <div style={headerStyle}>
            Catastrophizing {<br/>}
            การมองทุกอย่างเป็นหายนะ
        </div>
        <div style={infoStyle}>
            การคิดว่าสิ่งที่เกิดขึ้นจะนําไปสู่สิ่งที่เลวร้ายมากๆ ไม่มีใครหรืออะไรจะเลวร้ายไปได้มากกว่านี้อีกแล้ว เช่น ถ้าเขาเกลียดชูโอ้ส ชูโอ้สคงไม่สามารถมีความสุขได้อีก 
        </div>
        <div id='circleInner' style={circleOuterStyle}></div>
        <div id='circleOuter' style={circleInnerStyle}></div>
        <img src='images/CharCard05.svg' style={charStyle}/>
        
    </button>
}

export default Card05