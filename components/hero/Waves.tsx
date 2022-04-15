import React from 'react'
import wave from '../../assets/illustrations/single-wave-pattern.svg'
console.log(wave)
import { StyledProplessComponent } from '../types'

function Waves({ className }: StyledProplessComponent): JSX.Element {
    let waveMargin = 14
    let totalArea = 1000
    let waveWidth = 650
    
    let xOffSet = 2
    let yOffSet = 14
    let waveArray = new Array(Math.floor(totalArea / waveMargin)).fill("")


    return (
        <svg className={className} viewBox="0 700 1920 1400">
            <defs>
                <symbol id="wave" viewBox='0 0 566 27'>
                    <image href={wave.src} x={0} y={0} />
                </symbol>
            </defs>
            {waveArray.map((k, i) => (
                <>
                    <use xlinkHref='#wave' x="0" y={waveMargin * i + yOffSet} width={waveWidth} />
                    <use xlinkHref='#wave' x={waveWidth - xOffSet} y={waveMargin * i + yOffSet} width={waveWidth} />
                    <use xlinkHref='#wave' x={waveWidth * 2 - xOffSet * 2} y={waveMargin * i + yOffSet} width={waveWidth} />
                </>
            ))}

        </svg>
    )
}

export default React.memo(Waves)
