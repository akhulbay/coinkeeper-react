import cs from './CircleProgressBar.module.css'
import styled, {keyframes} from "styled-components";


function CircleProgressBar({percentage}) {
    const circleWidth = 160
    const dashArray = 435
    const dashOffset = dashArray - (dashArray * percentage) / 100;
    const color2 = "#28d551";
    const color1 = "#28d551";


    const anim = keyframes`
      from {
        stroke-dashoffset: ${dashArray};
      }
      to {
        stroke-dashoffset: ${dashOffset};
      }
    `
    const Circle = styled.circle`
      animation-name: ${anim};
    `

    return (
        <div className={cs.incomePieChart}>
            <div className={cs.incomeOuter}>
                <div className={cs.incomeInner}>
                    <div id={cs.number} className={cs.incomeInnerNumber}>
                        {percentage}%
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">

                        <stop offset="0%" stopColor={color1}/>
                        <stop offset="70%" stopColor={color2}/>

                    </linearGradient>
                </defs>
                <Circle cx="80"
                        cy="80"
                        r="70"
                        strokeLinecap="round"
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}

                />
            </svg>
        </div>

    );
}

export default CircleProgressBar;