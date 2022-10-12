export const Clear = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fbbf24"/>
          <stop offset="0.45" stopColor="#fbbf24"/>
          <stop offset="1" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="10.5" stroke="#f8af18" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <path d="M32,15.71V9.5m0,45V48.29M43.52,20.48l4.39-4.39M16.09,47.91l4.39-4.39m0-23-4.39-4.39M47.91,47.91l-4.39-4.39M15.71,32H9.5m45,0H48.29" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3">
        <animateTransform attributeName="transform" dur="45s" values="0 32 32; 360 32 32" repeatCount="indefinite" type="rotate"/>
      </path>
    </svg>
  )
}

export const Clouds = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)">
        <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="7s" repeatCount="indefinite"/>
      </path>
    </svg>
  )
}

export const Fog = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="b" x1="27.5" y1="50.21" x2="36.5" y2="65.79" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d4d7dd"/>
          <stop offset="0.45" stopColor="#d4d7dd"/>
          <stop offset="1" stopColor="#bec1c6"/>
        </linearGradient>
        <linearGradient id="c" y1="44.21" y2="59.79" xlinkHref="#b"/>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <line x1="17" y1="58" x2="47" y2="58" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#b)">
        <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="0s" repeatCount="indefinite"/>
      </line>
      <line x1="17" y1="52" x2="47" y2="52" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#c)">
        <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="-4s" repeatCount="indefinite"/>
      </line>
    </svg>
  )
}

export const Thunderstorm = () => {
	return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="b" x1="26.74" y1="37.88" x2="35.76" y2="53.52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f7b23b"/>
          <stop offset="0.45" stopColor="#f7b23b"/>
          <stop offset="1" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <polygon points="30 36 26 48 30 48 28 58 38 44 32 44 36 36 30 36" stroke="#f6a823" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#b)">
        <animate attributeName="opacity" values="1; 1; 1; 1; 1; 1; 0.1; 1; 0.1; 1; 1; 0.1; 1; 0.1; 1" dur="2s" repeatCount="indefinite"/>
      </polygon>
    </svg>
	)
}

export const Hail = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="b" x1="23.25" y1="43.7" x2="24.75" y2="46.3" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#86c3db"/>
          <stop offset="0.45" stopColor="#86c3db"/>
          <stop offset="1" stopColor="#5eafcf"/>
        </linearGradient>
        <linearGradient id="c" x1="30.25" y1="43.7" x2="31.75" y2="46.3" xlinkHref="#b"/>
        <linearGradient id="d" x1="37.25" y1="43.7" x2="38.75" y2="46.3" xlinkHref="#b"/>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <path d="M24,43.5A1.5,1.5,0,1,0,25.5,45,1.5,1.5,0,0,0,24,43.5Z" fill="url(#b)">
        <animateTransform attributeName="transform" type="translate" values="1 -5; -2 18; -4 14" dur="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" repeatCount="indefinite"/>
      </path>
      <path d="M31,43.5A1.5,1.5,0,1,0,32.5,45,1.5,1.5,0,0,0,31,43.5Z" fill="url(#c)">
        <animateTransform attributeName="transform" type="translate" values="1 -5; -2 18; -4 14" dur="0.6s" begin="-0.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" begin="-0.4s" repeatCount="indefinite"/>
      </path>
      <path d="M38,43.5A1.5,1.5,0,1,0,39.5,45,1.5,1.5,0,0,0,38,43.5Z" fill="url(#d)">
        <animateTransform attributeName="transform" type="translate" values="1 -5; -2 18; -4 14" dur="0.6s" begin="-0.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0" dur="0.6s" begin="-0.2s" repeatCount="indefinite"/>
      </path>
    </svg>
  )
}

export const Rain = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="b" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4286ee"/>
          <stop offset="0.45" stopColor="#4286ee"/>
          <stop offset="1" stopColor="#0950bc"/>
        </linearGradient>
        <linearGradient id="c" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlinkHref="#b"/>
        <linearGradient id="d" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlinkHref="#b"/>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <line x1="24.39" y1="43.03" x2="23.61" y2="47.97" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="url(#b)">
        <animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>
      <line x1="31.39" y1="43.03" x2="30.61" y2="47.97" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="url(#c)">
        <animateTransform attributeName="transform" begin="-0.4s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.4s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>
      <line x1="38.39" y1="43.03" x2="37.61" y2="47.97" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="url(#d)">
        <animateTransform attributeName="transform" begin="-0.2s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.2s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>
    </svg>
  )
}

export const Snow = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="b" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#86c3db"/>
          <stop offset="0.45" stopColor="#86c3db"/>
          <stop offset="1" stopColor="#5eafcf"/>
        </linearGradient>
        <linearGradient id="c" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlinkHref="#b"/>
        <linearGradient id="d" x1="23.12" y1="43.48" x2="24.88" y2="46.52" xlinkHref="#b"/>
        <linearGradient id="e" x1="22.67" y1="42.69" x2="25.33" y2="47.31" xlinkHref="#b"/>
        <linearGradient id="f" x1="37.12" y1="43.48" x2="38.88" y2="46.52" xlinkHref="#b"/>
        <linearGradient id="g" x1="36.67" y1="42.69" x2="39.33" y2="47.31" xlinkHref="#b"/>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <g>
        <circle cx="31" cy="45" r="1.25" fill="none" strokeMiterlimit="10" stroke="url(#b)"/>
        <path d="M33.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M31,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" strokeLinecap="round" strokeMiterlimit="10" stroke="url(#c)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum" values="-1 -6; 1 12" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 31 45; 360 31 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite"/>
      </g>
      <g>
        <circle cx="24" cy="45" r="1.25" fill="none" strokeMiterlimit="10" stroke="url(#d)"/>
        <path d="M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" strokeLinecap="round" strokeMiterlimit="10" stroke="url(#e)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-2s" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 24 45; 360 24 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.25" fill="none" strokeMiterlimit="10" stroke="url(#f)"/>
        <path d="M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63" fill="none" strokeLinecap="round" strokeMiterlimit="10" stroke="url(#g)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-1s" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 38 45; 360 38 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite"/>
      </g>
    </svg>
  )
}

export const Drizzle = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="b" x1="23.31" y1="44.3" x2="24.69" y2="46.7" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4286ee"/>
          <stop offset="0.45" stopColor="#4286ee"/>
          <stop offset="1" stopColor="#0950bc"/>
        </linearGradient>
        <linearGradient id="c" x1="30.31" y1="44.3" x2="31.69" y2="46.7" xlinkHref="#b"/>
        <linearGradient id="d" x1="37.31" y1="44.3" x2="38.69" y2="46.7" xlinkHref="#b"/>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <line x1="24.08" y1="45.01" x2="23.92" y2="45.99" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="url(#c)">
        <animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <line x1="31.08" y1="45.01" x2="30.92" y2="45.99" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="url(#d)">
        <animateTransform attributeName="transform" type="translate" begin="-0.5s" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.5s" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <line x1="38.08" y1="45.01" x2="37.92" y2="45.99" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="url(#e)">
        <animateTransform attributeName="transform" type="translate" begin="-1s" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-1s" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
      </line>
    </svg>
  )
}


export const Dust = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <clipPath id="a">
          <polygon points="7.5 7.5 54.5 7.5 7.5 54.5 7.5 7.5" fill="none"/>
        </clipPath>
        <linearGradient id="b" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="c" x1="22.14" y1="36" x2="27.53" y2="45.32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fde68a"/>
          <stop offset="0.45" stopColor="#fde68a"/>
          <stop offset="1" stopColor="#fde171"/>
        </linearGradient>
        <linearGradient id="d" x1="34.27" y1="28.99" x2="39.66" y2="38.32" xlinkHref="#c"/>
        <linearGradient id="e" x1="43.47" y1="23.68" x2="48.86" y2="33" xlinkHref="#c"/>
        <linearGradient id="f" x1="32.14" y1="36" x2="37.53" y2="45.32" xlinkHref="#c"/>
        <linearGradient id="g" x1="44.27" y1="28.99" x2="49.66" y2="38.32" xlinkHref="#c"/>
        <linearGradient id="h" x1="53.47" y1="23.68" x2="58.86" y2="33" xlinkHref="#c"/>
      </defs>
      <g clipPath="url(#a)">
        <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#b)"/>
      </g>
      <g>
        <line x1="24.89" y1="45.11" x2="28.08" y2="41.92" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#c)"/>
        <line x1="33.03" y1="36.97" x2="40.45" y2="29.55" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" strokeDasharray="7 7" stroke="url(#d)"/>
        <line x1="42.92" y1="27.08" x2="46.11" y2="23.89" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#e)"/>
        <animateTransform attributeName="transform" type="translate" values="-2 2; 0 0; -2 2" dur="3s" repeatCount="indefinite"/>
      </g>
      <g>
        <line x1="34.89" y1="45.11" x2="38.08" y2="41.92" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#f)"/>
        <line x1="43.03" y1="36.97" x2="50.45" y2="29.55" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" strokeDasharray="7 7" stroke="url(#g)"/>
        <line x1="52.92" y1="27.08" x2="56.11" y2="23.89" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#h)"/>
        <animateTransform attributeName="transform" type="translate" values="-2 2; 0 0; -2 2" dur="3s" begin="-2.5s" repeatCount="indefinite"/>
      </g>
    </svg>
  )
}

export const Mist = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="27.5" y1="17.21" x2="36.5" y2="32.79" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d4d7dd"/>
          <stop offset="0.45" stopColor="#d4d7dd"/>
          <stop offset="1" stopColor="#bec1c6"/>
        </linearGradient>
        <linearGradient id="b" y1="24.21" y2="39.79" xlinkHref="#a"/>
        <linearGradient id="c" y1="31.21" y2="46.79" xlinkHref="#a"/>
      </defs>
      <line x1="17" y1="25" x2="47" y2="25" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#a)">
        <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="0s" repeatCount="indefinite"/>
      </line>
      <line x1="17" y1="32" x2="47" y2="32" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#b)">
        <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="5s" begin="-2s" repeatCount="indefinite"/>
      </line>
      <line x1="17" y1="39" x2="47" y2="39" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#c)">
        <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="-4s" repeatCount="indefinite"/>
      </line>
    </svg>
  )
}

export const  Haze = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="b" x1="17.94" y1="55.73" x2="26.94" y2="71.32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d4d7dd"/>
          <stop offset="0.45" stopColor="#d4d7dd"/>
          <stop offset="1" stopColor="#bec1c6"/>
        </linearGradient>
        <linearGradient id="c" x1="28.81" y1="49.45" x2="37.81" y2="65.04" xlinkHref="#b"/>
        <linearGradient id="d" x1="37.06" y1="44.68" x2="46.06" y2="60.27" xlinkHref="#b"/>
        <linearGradient id="e" x1="17.94" y1="49.73" x2="26.94" y2="65.32" xlinkHref="#b"/>
        <linearGradient id="f" x1="28.81" y1="43.45" x2="37.81" y2="59.04" xlinkHref="#b"/>
        <linearGradient id="g" x1="37.06" y1="38.68" x2="46.06" y2="54.27" xlinkHref="#b"/>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <g>
        <line x1="17" y1="58" x2="21.5" y2="58" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#b)"/>
        <line x1="28.5" y1="58" x2="39" y2="58" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" strokeDasharray="7 7" stroke="url(#c)"/>
        <line x1="42.5" y1="58" x2="47" y2="58" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#d)"/>
        <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="5s" begin="0s" repeatCount="indefinite"/>
      </g>
      <g>
        <line x1="17" y1="52" x2="21.5" y2="52" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#e)"/>
        <line x1="28.5" y1="52" x2="39" y2="52" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" strokeDasharray="7 7" stroke="url(#f)"/>
        <line x1="42.5" y1="52" x2="47" y2="52" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#g)"/>
        <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="5s" begin="-4s" repeatCount="indefinite"/>
      </g>
    </svg>
  )  
}

export const Smoke = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3f7fe"/>
          <stop offset="0.45" stopColor="#f3f7fe"/>
          <stop offset="1" stopColor="#deeafb"/>
        </linearGradient>
        <linearGradient id="b" x1="30.25" y1="48.4" x2="33.25" y2="53.6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b8bdc6"/>
          <stop offset="0.45" stopColor="#b8bdc6"/>
          <stop offset="1" stopColor="#a5aab2"/>
        </linearGradient>
        <linearGradient id="c" x1="23.5" y1="38.1" x2="28" y2="45.9" xlinkHref="#b"/>
        <linearGradient id="d" x1="33.75" y1="28.8" x2="39.75" y2="39.2" xlinkHref="#b"/>
      </defs>
      <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <circle cx="31.75" cy="51" r="3" stroke="#afb4bc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#b)">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -17;" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0; 1; 1; 1; 0" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="r" values="3; 4.5; 6" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="25.75" cy="51" r="4.5" stroke="#afb4bc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#c)">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -17;" dur="3s" begin="-1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0; 1; 1; 1; 0" dur="3s" begin="-1s" repeatCount="indefinite"/>
        <animate attributeName="r" values="3; 4.5; 6" dur="3s" begin="-1s" repeatCount="indefinite"/>
        <animate attributeName="cx" values="31.75; 25.75" dur="3s" begin="-1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="36.75" cy="51" r="6" stroke="#afb4bc" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#d)">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 -17;" dur="3s" begin="-2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0; 1; 1; 1; 0" dur="3s" begin="-2s" repeatCount="indefinite"/>
        <animate attributeName="r" values="3; 4.5; 6" dur="3s" begin="-2s" repeatCount="indefinite"/>
        <animate attributeName="cx" values="31.75; 36.75" dur="3s" begin="-2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}

export const Tornado = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="27.5" y1="12.21" x2="36.5" y2="27.79" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d4d7dd"/>
          <stop offset="0.45" stopColor="#d4d7dd"/>
          <stop offset="1" stopColor="#bec1c6"/>
        </linearGradient>
        <linearGradient id="b" x1="28" y1="19.07" x2="36" y2="32.93" xlinkHref="#a"/>
        <linearGradient id="c" x1="28.63" y1="26.15" x2="35.38" y2="37.85" xlinkHref="#a"/>
        <linearGradient id="d" x1="29.25" y1="33.24" x2="34.75" y2="42.76" xlinkHref="#a"/>
        <linearGradient id="e" x1="30.25" y1="40.97" x2="33.75" y2="47.03" xlinkHref="#a"/>
      </defs>
      <line x1="17" y1="20" x2="47" y2="20" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#a)">
        <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="19" y1="26" x2="45" y2="26" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#b)">
        <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="2s" begin="-0.2s" repeatCount="indefinite"/>
      </line>
      <line x1="21.5" y1="32" x2="42.5" y2="32" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#c)">
        <animateTransform attributeName="transform" type="translate" values="-5 0; 5 0; -5 0" dur="2s" begin="-0.4s" repeatCount="indefinite"/>
      </line>
      <line x1="24" y1="38" x2="40" y2="38" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#d)">
        <animateTransform attributeName="transform" type="translate" values="-6 0; 6 0; -6 0" dur="2s" begin="-0.6s" repeatCount="indefinite"/>
      </line>
      <line x1="28" y1="44" x2="36" y2="44" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#e)">
        <animateTransform attributeName="transform" type="translate" values="-7 0; 7 0; -7 0" dur="2s" begin="-0.8s" repeatCount="indefinite"/>
      </line>
    </svg>
  )
}

export const Sunset = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <clipPath id="a">
          <rect y="7.5" width="64" height="32" fill="none"/>
        </clipPath>
        <linearGradient id="b" x1="26.75" y1="29.91" x2="37.25" y2="48.09" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fbbf24"/>
          <stop offset="0.45" stopColor="#fbbf24"/>
          <stop offset="1" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
      <g clipPath="url(#a)">
        <circle cx="32" cy="39" r="10.5" stroke="#f8af18" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#b)"/>
        <path d="M32,22.71V16.5m0,45V55.29M43.52,27.48l4.39-4.39M16.09,54.91l4.39-4.39m0-23-4.39-4.39M47.91,54.91l-4.39-4.39M15.71,39H9.5m45,0H48.29" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3">
          <animateTransform attributeName="transform" type="rotate" values="0 32 39; 360 32 39" dur="45s" repeatCount="indefinite"/>
        </path>
      </g>
      <polyline points="16 42.5 27 42.5 32 47 37 42.5 48 42.5" fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </svg>
  )
}

export const Sunrise = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <clipPath id="a">
          <rect y="7.5" width="64" height="32" fill="none"/>
        </clipPath>
        <linearGradient id="b" x1="26.75" y1="29.91" x2="37.25" y2="48.09" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fbbf24"/>
          <stop offset="0.45" stopColor="#fbbf24"/>
          <stop offset="1" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
      <g clipPath="url(#a)">
        <circle cx="32" cy="39" r="10.5" stroke="#f8af18" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#b)"/>
        <path d="M32,22.71V16.5m0,45V55.29M43.52,27.48l4.39-4.39M16.09,54.91l4.39-4.39m0-23-4.39-4.39M47.91,54.91l-4.39-4.39M15.71,39H9.5m45,0H48.29" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3">
          <animateTransform attributeName="transform" type="rotate" values="0 32 39; 360 32 39" dur="45s" repeatCount="indefinite"/>
        </path>
      </g>
      <polyline points="16 42.5 27 42.5 32 38 37 42.5 48 42.5" fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </svg>
  )
}

export const Temperature = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="23.73" y1="19.16" x2="39.18" y2="45.93" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#515a69" stopOpacity="0.05"/>
          <stop offset="0.45" stopColor="#6b7280" stopOpacity="0.05"/>
          <stop offset="1" stopColor="#384354" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="b" x1="23.48" y1="18.73" x2="39.43" y2="46.36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d4d7dd"/>
          <stop offset="0.45" stopColor="#d4d7dd"/>
          <stop offset="1" stopColor="#bec1c6"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="42" r="4.5" fill="#ef4444"/>
      <path d="M32,27V42" fill="none" stroke="#ef4444" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 1; 0 0" dur="1s" repeatCount="indefinite"/>
      </path>
      <path d="M39,41.9a7,7,0,1,1-14,0,7.12,7.12,0,0,1,3-5.83v-17a4,4,0,1,1,8,0v17A7.12,7.12,0,0,1,39,41.9ZM32.5,25H36m-3.5-4H36m-3.5,8H36" strokeLinecap="round" strokeLinejoin="round" fill="url(#a)" stroke="url(#b)"/>
      <path d="M42.44,35A2,2,0,1,1,43,33.53,2,2,0,0,1,42.44,35Zm-2-.79a.89.89,0,0,0,1.26,0,.88.88,0,0,0,0-1.25.83.83,0,0,0-.63-.27.86.86,0,0,0-.63.27.89.89,0,0,0-.26.63A.85.85,0,0,0,40.39,34.16Z" fill="#374151"/>
      <path d="M45,32.29a3.68,3.68,0,0,1,2.61-.85c1.75,0,2.87.68,3.35,2.06a.37.37,0,0,1-.26.54l-.67.23a.46.46,0,0,1-.34,0,.49.49,0,0,1-.19-.28,1.79,1.79,0,0,0-1.89-1.13,2.13,2.13,0,0,0-1.46.45,1.61,1.61,0,0,0-.52,1.3v2.73a1.62,1.62,0,0,0,.52,1.3,2.08,2.08,0,0,0,1.46.46A1.78,1.78,0,0,0,49.49,38a.53.53,0,0,1,.21-.29.5.5,0,0,1,.33,0l.66.24a.38.38,0,0,1,.28.54c-.49,1.38-1.61,2.07-3.37,2.07A3.68,3.68,0,0,1,45,39.71a3.09,3.09,0,0,1-.92-2.37v-2.7A3.07,3.07,0,0,1,45,32.29Z" fill="#374151"/>
    </svg>
  )  
}

export const Pressure = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <polyline points="32 44 32 20 26.21 26.89 32 20 37.78 26.89" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 0; 0 -9; 0 -9" dur="1.5s" keyTimes="0.0; 0.5; 0.9; 1.0" begin="0s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0; 1; 1; 0; 0" dur="1.5s" keyTimes="0.0; 0.3; 0.8; 0.9; 1.0" repeatCount="indefinite"/>
      </polyline>
    </svg>
  )
}

export const Wind = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="27.56" y1="17.64" x2="38.27" y2="36.19" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d4d7dd"/>
          <stop offset="0.45" stopColor="#d4d7dd"/>
          <stop offset="1" stopColor="#bec1c6"/>
        </linearGradient>
        <linearGradient id="b" x1="19.96" y1="29.03" x2="31.37" y2="48.8" xlinkHref="#a"/>
      </defs>
      <path d="M43.64,20a5,5,0,1,1,3.61,8.46H11.75" fill="none" strokeDasharray="35 22" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#a)">
        <animate attributeName="stroke-dashoffset" values="-57; 57" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M29.14,44a5,5,0,1,0,3.61-8.46h-21" fill="none" strokeDasharray="24 15" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" stroke="url(#b)">
        <animate attributeName="stroke-dashoffset" values="-39; 39" dur="2s" begin="-1.5s" repeatCount="indefinite"/>
      </path>
    </svg>
  )
} 

export const Humidity = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="a" x1="23.61" y1="21.85" x2="37.27" y2="45.52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3392d6"/>
          <stop offset="0.45" stopColor="#3392d6"/>
          <stop offset="1" stopColor="#2477b2"/>
        </linearGradient>
      </defs>
      <path d="M32,17c-6.09,9-10,14.62-10,20.09a10,10,0,0,0,20,0C42,31.62,38.09,26,32,17Z" stroke="#2885c7" strokeMiterlimit="10" strokeWidth="0.5" fill="url(#a)"/>
      <path d="M26.24,30.19a3,3,0,0,1,2.12-.69,3,3,0,0,1,2.12.69,2.51,2.51,0,0,1,.74,1.92v1.24a2.48,2.48,0,0,1-.74,1.9,3.05,3.05,0,0,1-2.12.68,3,3,0,0,1-2.12-.68,2.48,2.48,0,0,1-.74-1.9V32.11A2.51,2.51,0,0,1,26.24,30.19Zm11-.23a.42.42,0,0,1-.08.4L29,41.69a1.37,1.37,0,0,1-.44.44,1.87,1.87,0,0,1-.72.09h-.67c-.2,0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1,1,0,0,1,.41-.41,2,2,0,0,1,.67-.08h.76Q37.19,29.78,37.26,30Zm-8.9,1.17c-.79,0-1.19.36-1.19,1.07v1c0,.71.4,1.07,1.19,1.07s1.19-.36,1.19-1.07v-1C29.55,31.49,29.15,31.13,28.36,31.13Zm5.16,5.63a3,3,0,0,1,2.12-.69,3,3,0,0,1,2.12.69,2.51,2.51,0,0,1,.74,1.92v1.24a2.48,2.48,0,0,1-.74,1.9,3,3,0,0,1-2.12.68,3.05,3.05,0,0,1-2.12-.68,2.48,2.48,0,0,1-.74-1.9V38.68A2.51,2.51,0,0,1,33.52,36.76Zm2.12.94c-.79,0-1.19.35-1.19,1.07v1c0,.73.4,1.09,1.19,1.09s1.19-.36,1.19-1.09v-1C36.83,38.05,36.43,37.7,35.64,37.7Z" fill="#fff"/>
    </svg>
  )
}

export const Celcius = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path d="M27,30a3.75,3.75,0,0,1-2.75,1.18A3.8,3.8,0,0,1,21.48,30a3.91,3.91,0,0,1,2.78-6.69A3.89,3.89,0,0,1,27,30Zm-4-1.54a1.65,1.65,0,0,0,1.22.51,1.69,1.69,0,0,0,1.22-.51,1.61,1.61,0,0,0,.51-1.2,1.71,1.71,0,0,0-.5-1.23,1.65,1.65,0,0,0-1.23-.52A1.63,1.63,0,0,0,23,26a1.68,1.68,0,0,0-.51,1.23A1.61,1.61,0,0,0,23,28.42Z" fill="#374151"/>
      <path d="M32,24.79a7.12,7.12,0,0,1,5.08-1.67c3.4,0,5.58,1.34,6.52,4a.72.72,0,0,1-.5,1.05l-1.32.46a.88.88,0,0,1-.65,0,1,1,0,0,1-.38-.54c-.53-1.48-1.75-2.21-3.67-2.21a4.19,4.19,0,0,0-2.85.87,3.23,3.23,0,0,0-1,2.54v5.3a3.24,3.24,0,0,0,1,2.54,4.09,4.09,0,0,0,2.85.89c1.9,0,3.12-.74,3.67-2.23a1,1,0,0,1,.41-.56.75.75,0,0,1,.64.06l1.3.45a.75.75,0,0,1,.53,1.06q-1.43,4-6.55,4A7.17,7.17,0,0,1,32,39.21a6,6,0,0,1-1.79-4.59V29.36A5.94,5.94,0,0,1,32,24.79Z" fill="#374151"/>
    </svg>
  )
}

