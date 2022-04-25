import React from 'react'
import { StyledProplessComponent } from '../../types'

interface WaveProps {
    lineWidth: number;
}

let CustomWave = ({ lineWidth }: WaveProps) => (
    <svg id={`lineWidth${lineWidth}`} viewBox='0 0 566 27' fill="none">
        <path
            d="M1 13.5C32.3333 0 63.6667 0 95 13.5C126.333 27 157.667 27 189 13.5C220.333 0 251.667 0 283 13.5C314.333 27 345.667 27 377 13.5C408.333 0 439.667 0 471 13.5C502.333 27 533.667 27 565 13.5"
            stroke="#F5F9FF" strokeWidth={lineWidth}
        />
    </svg>
)

function AerocardWaves({ className }: StyledProplessComponent): JSX.Element {
    let waveMargin = 6
    let totalArea = 150
    let yOffSet = 0
    let xOffSet = -10
    let waveArray = new Array(Math.floor(totalArea / waveMargin)).fill("")
    return (
        <svg className={className} viewBox="0 0 566 270">
            <defs>
                <CustomWave lineWidth={1} />
                <CustomWave lineWidth={2} />
            </defs>
            {waveArray.map((k, i) => (
                <use
                    xlinkHref={i > 7 ? '#lineWidth2' : '#lineWidth1'}
                    id={`customWave${i}`}
                    key={`customWave${i}`}
                    x={xOffSet}
                    width={566}
                    height={27}
                    y={waveMargin * i + yOffSet}
                    transform="rotate(4.26 0 0)"
                >
                    <animateTransform
                        attributeName='transform'
                        type="translate"
                        dur="5s"
                        repeatCount="indefinite"
                        values={`${xOffSet} ; -200`}
                        keyTimes="0;1"
                    />
                </use>
            ))}
        </svg>
    )
}

export default React.memo(AerocardWaves)
