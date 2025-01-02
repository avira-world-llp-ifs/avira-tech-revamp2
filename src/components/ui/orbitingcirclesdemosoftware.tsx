import OrbitingCircles from "@/components/ui/orbiting-circles";

export function OrbitingCirclesDemoSoftware() {
  return (
    <div className="relative flex h-[500px]  w-96 flex-col items-center justify-center  rounded-3xl  bg-black ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Avira
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.aws />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.git />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent "
        radius={190}
        duration={20}
        delay={5}
        reverse
      >
        <Icons.teams />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent "
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <Icons.vscode />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.azure />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.github />
      </OrbitingCircles>




    </div>
  );
}

const Icons = {

  github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
    <linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
    </svg>),


  vscode: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#ce93d8" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#8e24aa" d="M4.416,33.815l3.159,1.95c0.733,0.44,1.664,0.365,2.318-0.185L34,15.938V5.353 c0-1.198-1.482-1.758-2.275-0.86L9,29.873L4.416,33.815z"></path><path fill="#ab47bc" d="M4.416,14.185l3.159-1.95c0.733-0.44,1.664-0.365,2.318,0.185L34,32.063v10.585 c0,1.198-1.482,1.758-2.275,0.86L9,18.127L4.416,14.185z"></path><path fill="#6a1b9a" d="M9,18.13v11.74l-3.2,3.74C5.22,34.37,4,33.96,4,33V15c0-0.96,1.22-1.37,1.8-0.61L9,18.13z"></path>
    </svg> ),

  teams: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
    <path fill="#c7ede6" d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"></path><path fill="#fdfcef" d="M38.876,41.5c0,0,3.64,0,6.125,0s4.5-2.015,4.5-4.5c0-2.333-1.782-4.229-4.055-4.455 c0.022-0.181,0.055-0.358,0.055-0.545c0-2.485-2.015-4.5-4.5-4.5c-1.438,0-2.703,0.686-3.527,1.736 c-0.14-2.636-2.302-4.736-4.973-4.736c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282c-0.642-0.777-1.6-1.282-2.687-1.282 c-1.781,0-3.234,1.335-3.455,3.055c-0.181-0.022-0.358-0.055-0.545-0.055c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5 s9.5,0,9.5,0h5.375V42h3V41.5z"></path><path fill="#472b29" d="M32.501,24c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047c-0.602-0.354-1.29-0.547-2-0.547 c-1.831,0-3.411,1.261-3.858,3.005C21.096,32.002,21.049,32,21.001,32c-2.757,0-5,2.243-5,5s2.243,5,5,5h14.875 c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H21.001c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.117,0,0.23,0.017,0.343,0.032 l0.141,0.019c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437C22.233,31.125,23.505,30,25.001,30 c0.885,0,1.723,0.401,2.301,1.1c0.098,0.118,0.241,0.182,0.386,0.182c0.078,0,0.156-0.018,0.228-0.056 c0.209-0.107,0.314-0.346,0.254-0.573C28.054,30.217,28,29.851,28,29.5c0-2.481,2.019-4.5,4.5-4.5 c2.381,0,4.347,1.872,4.474,4.263c0.011,0.208,0.15,0.387,0.349,0.45c0.05,0.016,0.101,0.024,0.152,0.024 c0.15,0,0.296-0.069,0.392-0.192c0.771-0.981,1.913-1.544,3.133-1.544c2.206,0,4,1.794,4,4c0,0.117-0.017,0.23-0.032,0.343 l-0.019,0.141c-0.016,0.134,0.022,0.268,0.106,0.373s0.207,0.172,0.34,0.185c2.055,0.205,3.604,1.906,3.604,3.958 c0,2.206-1.794,4-4,4h-6.125c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h6.125c2.757,0,5-2.243,5-5 c0-2.397-1.689-4.413-4.003-4.877c0.002-0.041,0.003-0.082,0.003-0.123c0-2.757-2.243-5-5-5c-1.176,0-2.293,0.416-3.183,1.164 C37.22,25.76,35.056,24,32.501,24L32.501,24z"></path><path fill="#472b29" d="M31.001,31c-1.403,0-2.609,0.999-2.913,2.341C27.721,33.119,27.302,33,26.876,33 c-1.202,0-2.198,0.897-2.353,2.068C24.32,35.023,24.127,35,23.938,35c-1.529,0-2.811,1.2-2.918,2.732 c-0.009,0.138,0.094,0.257,0.232,0.267c0.006,0,0.012,0,0.018,0c0.13,0,0.24-0.101,0.249-0.232 c0.089-1.271,1.151-2.268,2.419-2.268c0.229,0,0.47,0.042,0.738,0.127c0.022,0.007,0.045,0.01,0.067,0.01 c0.055,0,0.11-0.02,0.156-0.054c0.064-0.047,0.102-0.129,0.102-0.209c0-1.034,0.841-1.875,1.875-1.875 c0.447,0,0.885,0.168,1.231,0.473c0.047,0.041,0.106,0.063,0.165,0.063c0.032,0,0.063-0.006,0.093-0.019 c0.088-0.035,0.148-0.117,0.155-0.212c0.102-1.292,1.191-2.305,2.479-2.305c0.208,0,0.425,0.034,0.682,0.107 c0.023,0.007,0.047,0.01,0.07,0.01c0.109,0,0.207-0.073,0.239-0.182c0.038-0.133-0.039-0.271-0.172-0.309 C31.518,31.04,31.257,31,31.001,31L31.001,31z"></path><path fill="#472b29" d="M44.884,32.5c-1.326,0-2.508,0.897-2.874,2.182c-0.038,0.133,0.039,0.271,0.172,0.309 c0.023,0.007,0.046,0.01,0.068,0.01c0.109,0,0.209-0.072,0.24-0.182c0.305-1.071,1.289-1.818,2.393-1.818 c0.117,0,0.23,0.014,0.342,0.029c0.012,0.002,0.023,0.003,0.035,0.003c0.121,0,0.229-0.092,0.246-0.217 c0.019-0.137-0.077-0.263-0.214-0.281C45.159,32.516,45.023,32.5,44.884,32.5L44.884,32.5z"></path><path fill="#fff" d="M71.405,24H61.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h9.905c0.276,0,0.5,0.224,0.5,0.5 S71.682,24,71.405,24z"></path><path fill="#fff" d="M74.5,24h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S74.777,24,74.5,24z"></path><path fill="#fff" d="M79.491,26H70.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5 S79.767,26,79.491,26z"></path><path fill="#fff" d="M68.5,26h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S68.777,26,68.5,26z"></path><path fill="#fff" d="M65.5,26h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S65.777,26,65.5,26z"></path><path fill="#fff" d="M71.5,28h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S71.776,28,71.5,28z"></path><path fill="#fff" d="M74.5,19c-0.177,0-0.823,0-1,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,0.823,0,1,0 c0.276,0,0.5-0.224,0.5-0.5S74.776,19,74.5,19z"></path><path fill="#fff" d="M74.5,21c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,4.823,0,5,0 c0.276,0,0.5-0.224,0.5-0.5S74.776,21,74.5,21z"></path><path fill="#fff" d="M79.5,23c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.177,0,2.823,0,3,0 c0.276,0,0.5-0.224,0.5-0.5S79.776,23,79.5,23z"></path><path fill="#fff" d="M29.5,75h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S29.776,75,29.5,75z"></path><path fill="#fff" d="M33.5,75h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S33.776,75,33.5,75z"></path><path fill="#fff" d="M38.5,77h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S38.777,77,38.5,77z"></path><path fill="#fff" d="M26.5,77h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S26.776,77,26.5,77z"></path><path fill="#fff" d="M23.375,77H21.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.875c0.276,0,0.5,0.224,0.5,0.5 S23.651,77,23.375,77z"></path><path fill="#fff" d="M32.5,73h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S32.777,73,32.5,73z"></path><path fill="#fff" d="M29.5,79h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S29.776,79,29.5,79z"></path><g><path fill="#fdfcef" d="M84.5,77.5c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 C88.473,70.366,88.5,70.187,88.5,70c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C74.128,68.714,73.592,68.5,73,68.5 c-1.228,0-2.245,0.887-2.455,2.055C70.366,70.527,70.187,70.5,70,70.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s7.5,0,7.5,0 V78h7V77.5z"></path><path fill="#472b29" d="M86.25,73C86.112,73,86,72.888,86,72.75c0-1.223,0.995-2.218,2.218-2.218 c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176 c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C86.5,72.888,86.388,73,86.25,73z"></path><circle cx="79.5" cy="77.5" r=".5" fill="#472b29"></circle><path fill="#472b29" d="M88,78h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H88c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377C87.975,70.314,88,70.16,88,70 c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148c-0.182-0.049-0.321-0.195-0.36-0.379 C81.58,66.165,80.141,65,78.5,65c-1.93,0-3.5,1.57-3.5,3.5c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54 c-0.179,0.102-0.396,0.118-0.556-0.01C73.878,69.155,73.449,69,73,69c-0.966,0-1.792,0.691-1.963,1.644 c-0.048,0.267-0.296,0.446-0.569,0.405C70.314,71.025,70.16,71,70,71c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5 c0.276,0,0.5,0.224,0.5,0.5S77.776,78,77.5,78H70c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006 C70.588,68.82,71.711,68,73,68c0.349,0,0.689,0.061,1.011,0.18C74.176,65.847,76.126,64,78.5,64c1.831,0,3.466,1.127,4.153,2.774 C83.333,66.276,84.155,66,85,66c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142C90.739,70.59,92,72.169,92,74 C92,76.206,90.206,78,88,78z"></path><path fill="#472b29" d="M82.5,77c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5c0.159,0,0.841,0,1,0 c0.276,0,0.5-0.224,0.5-0.5S82.776,77,82.5,77z"></path></g><path fill="#666aad" d="M66.09,62c-3.25,0-5.895-2.579-5.895-5.75V46h10.491c0.716,0,1.299,0.561,1.299,1.25v9 C71.985,59.421,69.341,62,66.09,62z"></path><path fill="#472b29" d="M70.687,46.4c0.495,0,0.898,0.381,0.898,0.85v9c0,2.95-2.465,5.35-5.495,5.35s-5.495-2.4-5.495-5.35 V46.4H70.687 M70.687,45H59.195v11.25c0,3.728,3.087,6.75,6.895,6.75s6.895-3.022,6.895-6.75v-9C72.985,46.007,71.957,45,70.687,45 L70.687,45z"></path><path fill="#8889b9" d="M40.151,45.556v13.696c0,5.763,4.421,10.796,10.267,11.168c6.408,0.409,11.733-4.583,11.733-10.797 V47.72c0-1.196-0.985-2.164-2.2-2.164H40.151z"></path><path fill="#472b29" d="M51.153,68.25c-0.196,0-0.394-0.006-0.593-0.019c-0.138-0.009-0.242-0.128-0.233-0.266 c0.009-0.137,0.121-0.253,0.266-0.233c1.525,0.1,2.973-0.194,4.295-0.852c0.122-0.062,0.273-0.012,0.335,0.112 s0.011,0.273-0.112,0.335C53.883,67.939,52.551,68.25,51.153,68.25z"></path><path fill="#472b29" d="M57.173,65.801c-0.064,0-0.129-0.025-0.178-0.075c-0.097-0.099-0.096-0.257,0.003-0.354 c0.733-0.721,1.312-1.553,1.72-2.474c0.448-1.009,0.675-2.087,0.675-3.203V53c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25 v6.696c0,1.186-0.242,2.332-0.718,3.406c-0.434,0.979-1.048,1.863-1.826,2.627C57.3,65.777,57.237,65.801,57.173,65.801z"></path><path fill="#472b29" d="M59.643,51.25c-0.138,0-0.25-0.112-0.25-0.25v-3c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25 v3C59.893,51.138,59.781,51.25,59.643,51.25z"></path><circle cx="50.993" cy="35.999" r="5.999" fill="#666aad"></circle><path fill="#4a5397" d="M65.989,42.005c-2.199,0-3.989-1.79-3.989-3.989c0-2.2,1.79-3.989,3.989-3.989 s3.988,1.79,3.988,3.989C69.978,40.215,68.188,42.005,65.989,42.005z"></path><path fill="#472b29" d="M60.345,46.4c0.495,0,0.898,0.386,0.898,0.861v12.435c0,5.461-4.526,9.904-10.09,9.904 c-0.224,0-0.45-0.007-0.678-0.022c-5.279-0.336-9.415-4.847-9.415-10.27V46.4H60.345 M60.345,45H39.66v14.308 c0,6.021,4.618,11.278,10.726,11.667C50.643,70.992,50.899,71,51.153,71c6.347,0,11.49-5.061,11.49-11.304V47.261 C62.643,46.012,61.614,45,60.345,45L60.345,45z"></path><path fill="#472b29" d="M50.993,30.4c3.087,0,5.599,2.512,5.599,5.599s-2.512,5.599-5.599,5.599 c-3.087,0-5.599-2.512-5.599-5.599S47.906,30.4,50.993,30.4 M50.993,29c-3.865,0-6.999,3.133-6.999,6.999s3.133,6.999,6.999,6.999 c3.865,0,6.999-3.133,6.999-6.999S54.859,29,50.993,29L50.993,29z"></path><path fill="#472b29" d="M66,34.403c1.983,0,3.597,1.614,3.597,3.597S67.983,41.597,66,41.597S62.403,39.983,62.403,38 S64.017,34.403,66,34.403 M66,33c-2.761,0-5,2.239-5,5s2.239,5,5,5c2.761,0,5-2.239,5-5S68.761,33,66,33L66,33z"></path><path fill="#4a5397" d="M28.932,60.972c-0.514,0-0.932-0.418-0.932-0.932V40.92c0-0.514,0.418-0.932,0.932-0.932h19.119 c0.514,0,0.932,0.418,0.932,0.932v19.12c0,0.514-0.418,0.932-0.932,0.932H28.932z"></path><path fill="#fdfcef" d="M43.079,45h-9.174v1.939h3.436v9.337h2.303v-9.337h3.436V45H43.079z"></path><path fill="#472b29" d="M39.643,56.526H37.34c-0.138,0-0.25-0.112-0.25-0.25V47.19h-3.186c-0.138,0-0.25-0.112-0.25-0.25V45 c0-0.138,0.112-0.25,0.25-0.25h9.174c0.138,0,0.25,0.112,0.25,0.25v1.939c0,0.138-0.112,0.25-0.25,0.25h-3.186v9.086 C39.893,56.414,39.781,56.526,39.643,56.526z M37.59,56.026h1.802V46.94c0-0.138,0.112-0.25,0.25-0.25h3.186v-1.44h-8.674v1.439 h3.186c0.138,0,0.25,0.112,0.25,0.25V56.026z"></path><path fill="#472b29" d="M48.067,40.401c0.293,0,0.532,0.239,0.532,0.532v19.133c0,0.293-0.239,0.532-0.532,0.532H28.933 c-0.293,0-0.532-0.239-0.532-0.532V40.932c0-0.293,0.239-0.532,0.532-0.532h19.133 M48.067,39H28.933 C27.867,39,27,39.866,27,40.933v19.133C27,61.133,27.866,62,28.933,62h19.133C49.133,62,50,61.134,50,60.067V40.932 C50,39.866,49.134,39,48.067,39L48.067,39z"></path>
    </svg>),

  azure: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <linearGradient id="k8yl7~hDat~FaoWq8WjN6a_VLKafOkk3sBX_gr1" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b"></stop><stop offset="1" stop-color="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a_VLKafOkk3sBX_gr1)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b_VLKafOkk3sBX_gr2" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b_VLKafOkk3sBX_gr2)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c_VLKafOkk3sBX_gr3" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"></stop><stop offset="1" stop-color="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c_VLKafOkk3sBX_gr3)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path>
    </svg>),

  git: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<linearGradient id="SVGID_1__xBKl2pdJg5kk_gr1" x1="32" x2="32" y1="5.34" y2="56.998" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_1__xBKl2pdJg5kk_gr1)" d="M57.9,28.5L35.5,6.1c-0.9-0.9-2.2-1.5-3.5-1.5s-2.6,0.5-3.5,1.5L6.1,28.5c-0.9,0.9-1.5,2.2-1.5,3.5	s0.5,2.6,1.5,3.5l22.3,22.3c0.9,0.9,2.2,1.5,3.5,1.5s2.6-0.5,3.5-1.5l22.3-22.3c0.9-0.9,1.5-2.2,1.5-3.5S58.8,29.4,57.9,28.5z M56.5,34.1L34.1,56.5c-1.1,1.1-3.1,1.1-4.2,0L7.5,34.1C7,33.6,6.7,32.8,6.7,32s0.3-1.6,0.9-2.1l16-16l6.5,6.5h0V43h2V22.4	l10.8,10.8l1.4-1.4L24.9,12.5l5-5C30.4,7,31.2,6.7,32,6.7s1.6,0.3,2.1,0.9l22.3,22.3c0.6,0.6,0.9,1.3,0.9,2.1S57,33.6,56.5,34.1z"></path><linearGradient id="SVGID_2__xBKl2pdJg5kk_gr2" x1="31" x2="31" y1="39" y2="47.213" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="31" cy="43" r="4" fill="url(#SVGID_2__xBKl2pdJg5kk_gr2)"></circle><linearGradient id="SVGID_3__xBKl2pdJg5kk_gr3" x1="31" x2="31" y1="17.043" y2="24.326" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="31" cy="21" r="4" fill="url(#SVGID_3__xBKl2pdJg5kk_gr3)"></circle><g><linearGradient id="SVGID_4__xBKl2pdJg5kk_gr4" x1="43" x2="43" y1="28.021" y2="35.733" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="43" cy="32" r="4" fill="url(#SVGID_4__xBKl2pdJg5kk_gr4)"></circle></g>
</svg>
  ),
  aws: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"></path><path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"></path>
    </svg>
  ),
 
  
};