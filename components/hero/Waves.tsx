import React, { useEffect, useLayoutEffect, useState } from 'react'
import wave from '../../assets/illustrations/single-wave-pattern.svg'
import { StyledProplessComponent } from '../types'
import useWaves from './useWaves'

function Waves({ className }: StyledProplessComponent): JSX.Element {
    let totalArea = useWaves()
    let waveMargin = 15
    let waveWidth = 650
    let xOffSet = 2
    let yOffSet = 14
    let waveArray = new Array(Math.floor(totalArea / waveMargin) - 5).fill("")

    return (
        <svg className={className} viewBox="0 700 1920 1400" >
            <title>Waves falling down</title>
            <defs>
                <symbol id="wave" viewBox='0 0 566 27'>
                    <image href={wave.src} x={0} y={0} />
                </symbol>
            </defs>
            {waveArray.map((k, i) => (
                <React.Fragment key={`wave${i}`}>
                    <use xlinkHref='#wave' x="0" y={waveMargin * i + yOffSet} width={waveWidth} />
                    <use xlinkHref='#wave' x={waveWidth - xOffSet} y={waveMargin * i + yOffSet} width={waveWidth} />
                    <use xlinkHref='#wave' x={waveWidth * 2 - xOffSet * 2} y={waveMargin * i + yOffSet} width={waveWidth} />
                </React.Fragment>
            ))}

        </svg>
    )
}

export default React.memo(Waves)
