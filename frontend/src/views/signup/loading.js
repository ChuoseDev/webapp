import COLORS from '../../utils/color'
import '../../App.css'
const Loading = () => {
    return (
        <div class="center">
            <div class="main">
                <img id="cloud" src={'images/Clouds.svg'} />
                <img id="bg0" src={'images/BG_00.svg'} />
                <div class="container">
                    <h1 class="allChuose">
                        <div class="chuose" style={{ color: COLORS.RED }}>
                            C
                        </div>
                        <div class="chuose" style={{ color: COLORS.BLUE }}>
                            H
                        </div>
                        <div class="chuose" style={{ color: COLORS.ORANGE }}>
                            U
                        </div>
                        <div class="chuose" style={{ color: COLORS.PURPLE }}>
                            O
                        </div>
                        <div class="chuose" style={{ color: COLORS.PINK }}>
                            S
                        </div>
                        <div class="chuose" style={{ color: COLORS.GREEN }}>
                            E
                        </div>
                    </h1>
                    <div id="imgChar01" >
                        <img src='images/Charactor.svg' alt='logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading