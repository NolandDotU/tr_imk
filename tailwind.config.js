/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#97A97C',
      },
      backgroundImage: {
        'login-img': "url('https://s3-alpha-sig.figma.com/img/c51e/9043/f3797927c60b3248c3723f14526075a3?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tlvsfyws-A7SLQYj6Wrqbd0N~yGXaj8W1fP2wtHEFzBlXpcRVHwYER7EItV3DclHo715KmGv8yyIdUA-wAHaGBQl~KsF44vUsM0IUjsrQqRgZBdIi7ofsod85taDpwhjn-qLIe2Rr3BWbKIVgF5GPMoEms5ojrvrF-dMPPFeweUg2S~J0do4utELH29~rH18cCXCTdtFd6bMryNG7EwFqKCIhnpE4sYcpF0h6-UHuzhNIgpNSTjfC980dVvNqY1PJOgXvbRlxT3h~kfGhd6BE62IAsku~qiVVp7B0-P6VKlxrTBLYCmLWkVjrQYz1LG3jCXr~b0HhC9qaQpWfj3T4Q__')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
  },
}