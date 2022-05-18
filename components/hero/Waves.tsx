import React, { useEffect, useLayoutEffect, useState } from 'react'
import wave from '../../assets/illustrations/single-wave-pattern.svg'
import { StyledProplessComponent } from '../types'
import useWaves from './useWaves'

function Waves({ className }: StyledProplessComponent): JSX.Element {
    let totalArea = useWaves()
    let waveMargin = 14.2
    let waveWidth = 650
    let xOffSet = -100
    let yOffSet = 14
    let waveArray = new Array(Math.floor(totalArea / waveMargin) - 5).fill("")

    return (
        <svg className={className} viewBox="0 700 1920 1400" >
            <title>Waves falling down</title>
            <defs>
                <symbol id="wave" viewBox='0 0 566 27'>
                    <image href={wave.src} x={0} y={0} />
                </symbol>
                <symbol id="fullscreen-wave" viewBox='0 0 1920 27'>
                    <use xlinkHref='#wave' x={-700} y='0' transform="scale(1.15, 1)" />
                    <use xlinkHref='#wave' x={-135} y='0' transform="scale(1.15, 1)" />
                    <use xlinkHref='#wave' x={430} y='0' transform="scale(1.15, 1)" />
                </symbol>
            </defs>

            <g data-testid="wave-container">
                {waveArray.map((k, i) => (
                    <use
                        key={`wave${i}`}
                        xlinkHref='#fullscreen-wave'
                        x={0}
                        y={waveMargin * i + yOffSet}
                        width="1920"
                    />
                ))}
            </g>
        </svg>
    )
}

export default React.memo(Waves)
