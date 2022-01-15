import COLORS from '../../utils/color'
import './feeling.css'


const Feeling = () => {
    return (
        <div class='container'>
            <img src={'images/BG_04.svg'}/>
            <div class='charactor'>
                <img class='charactor-size' src={'images/Charactor.svg'}/>
            </div>
            <div class='question'>How do you feel today?<br/>you can talk to me ...</div>
            <textarea class="textbox" placeholder='Type here ...'></textarea>
            <div class='center'>
                <div class='bottom'>
                    <button class='button'>Let's go!</button>
                </div>
            </div>
            <img class="cloud" src={'images/Clouds.svg'}/>
        </div>
    )
}

export default Feeling
