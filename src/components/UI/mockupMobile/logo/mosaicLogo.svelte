<style lang="scss">
    @import "styling/stylesheet";

    svg {
        height: 100%;
        margin: 0 auto;
        enable-background: new 0 0 215.5 215.5;
    }

    .feat {
        polygon {
            stroke-width: 1.5px;
            stroke-dasharray: 410;
            stroke-dashoffset: 410;
            animation: offset 1.5s 2s linear forwards, fill 1s 3.5s linear forwards;
        }
    }

    .first {
        transform: translateX(-.15px);
    }

    .st0 {
        fill: transparent;
        stroke: $black;
        fill-opacity: 0.4;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .st1 {
        fill: transparent;
        stroke: $black;
        fill-opacity: 0.6;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .st2 {
        fill: transparent;
        stroke: $black;
        fill-opacity: 0.8;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

    .st3 {
        fill: transparent;
        stroke: $black;
    }

    @keyframes offset {
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes fill {
        100% {
            fill: $black;
            stroke: transparent;
        }
    }
</style>

<svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 215.5 215.5"
        xml:space="preserve"
>
    <g class="feat" transform="translate(-150.000000, -100.000000)">
        <g transform="translate(250.000000, 200.000000) scale(-1, 1) translate(-250.000000, -200.000000) translate(150.000000, 100.000000)">
            <polygon class="st0" points="158.7,8 92,74.7 192,174.7" />
            <polygon class="st1" points="92,74.7 92,141.3 192,174.7" />
            <polygon class="st2 first" points="192,174.7 92,141.3 92,208" />
            <polygon class="st1" points="25.3,8 92,74.7 -8,174.7" />
            <polygon class="st2" points="92,74.7 92,141.3 -8,174.7" />
            <polygon class="st3" points="-8,174.7 92,141.3 92,208" />
        </g>
    </g>
</svg>
