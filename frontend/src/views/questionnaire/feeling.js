import './feeling.css'



const Feeling = () => {

    const onClickLetGo= async () => {
        try {
        console.log(document.getElementById('feeling-textarea').value)
        } catch (err) {
        console.log(err)
        }
    }
    
    return (
        <div class='container'>
            <img class="bg4" src={'images/BG_04.svg'}/>
            <div class='charactor'>
                <img class='charactor-size' src={'images/Charactor.svg'}/>
            </div>
            <div class='question'>How do you feel today?<br/>you can talk to me ...</div>
            <textarea id='feeling-textarea' class="textbox" placeholder='Type here ...'></textarea>
            <div class='center'>
                <div class='bottom'>
                    <button class='button' onClick={() => onClickLetGo()} >Let's go!</button>
                </div>
            </div>
            <img class="cloud" src={'images/Clouds.svg'}/>
        </div>
    )
}

export default Feeling
