const list = [
  {
    dt: 1524182400,
    main: {
      temp: 285.01,
      temp_min: 285.01,
      temp_max: 288.902,
      pressure: 1028.94,
      sea_level: 1036.49,
      grnd_level: 1028.94,
      humidity: 69,
      temp_kf: -3.89
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
    ],
    clouds: { all: 0 },
    wind: { speed: 2.42, deg: 230.505 },
    sys: { pod: "n" },
    dt_txt: "2018-04-20 00:00:00"
  },
  {
    dt: 1524193200,
    main: {
      temp: 283.14,
      temp_min: 283.14,
      temp_max: 285.734,
      pressure: 1028.58,
      sea_level: 1036.27,
      grnd_level: 1028.58,
      humidity: 84,
      temp_kf: -2.6
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.16, deg: 214.503 },
    sys: { pod: "n" },
    dt_txt: "2018-04-20 03:00:00"
  },
  {
    dt: 1524204000,
    main: {
      temp: 283.98,
      temp_min: 283.98,
      temp_max: 285.281,
      pressure: 1029.12,
      sea_level: 1036.83,
      grnd_level: 1029.12,
      humidity: 84,
      temp_kf: -1.3
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.07, deg: 256.002 },
    sys: { pod: "d" },
    dt_txt: "2018-04-20 06:00:00"
  },
  {
    dt: 1524214800,
    main: {
      temp: 293.747,
      temp_min: 293.747,
      temp_max: 293.747,
      pressure: 1030.05,
      sea_level: 1037.53,
      grnd_level: 1030.05,
      humidity: 59,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.89, deg: 354.001 },
    sys: { pod: "d" },
    dt_txt: "2018-04-20 09:00:00"
  },
  {
    dt: 1524225600,
    main: {
      temp: 297.457,
      temp_min: 297.457,
      temp_max: 297.457,
      pressure: 1029.84,
      sea_level: 1037.37,
      grnd_level: 1029.84,
      humidity: 54,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
    ],
    clouds: { all: 0 },
    wind: { speed: 1.61, deg: 357.503 },
    sys: { pod: "d" },
    dt_txt: "2018-04-20 12:00:00"
  },
  {
    dt: 1524236400,
    main: {
      temp: 298.676,
      temp_min: 298.676,
      temp_max: 298.676,
      pressure: 1029.15,
      sea_level: 1036.71,
      grnd_level: 1029.15,
      humidity: 47,
      temp_kf: 0
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d"
      }
    ],
    clouds: { all: 44 },
    wind: { speed: 1.59, deg: 338.504 },
    sys: { pod: "d" },
    dt_txt: "2018-04-20 15:00:00"
  },
  {
    dt: 1524247200,
    main: {
      temp: 296.894,
      temp_min: 296.894,
      temp_max: 296.894,
      pressure: 1028.81,
      sea_level: 1036.41,
      grnd_level: 1028.81,
      humidity: 46,
      temp_kf: 0
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d"
      }
    ],
    clouds: { all: 64 },
    wind: { speed: 0.66, deg: 340.003 },
    sys: { pod: "d" },
    dt_txt: "2018-04-20 18:00:00"
  },
  {
    dt: 1524258000,
    main: {
      temp: 292.335,
      temp_min: 292.335,
      temp_max: 292.335,
      pressure: 1029.57,
      sea_level: 1037.05,
      grnd_level: 1029.57,
      humidity: 65,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
    ],
    clouds: { all: 0 },
    wind: { speed: 3.14, deg: 108.5 },
    sys: { pod: "n" },
    dt_txt: "2018-04-20 21:00:00"
  },
  {
    dt: 1524268800,
    main: {
      temp: 288.448,
      temp_min: 288.448,
      temp_max: 288.448,
      pressure: 1029.63,
      sea_level: 1037.14,
      grnd_level: 1029.63,
      humidity: 72,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
    ],
    clouds: { all: 0 },
    wind: { speed: 3.03, deg: 99.5001 },
    sys: { pod: "n" },
    dt_txt: "2018-04-21 00:00:00"
  },
  {
    dt: 1524279600,
    main: {
      temp: 285.656,
      temp_min: 285.656,
      temp_max: 285.656,
      pressure: 1028.83,
      sea_level: 1036.41,
      grnd_level: 1028.83,
      humidity: 76,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
    ],
    clouds: { all: 0 },
    wind: { speed: 2.41, deg: 101.503 },
    sys: { pod: "n" },
    dt_txt: "2018-04-21 03:00:00"
  },
  {
    dt: 1524290400,
    main: {
      temp: 284.648,
      temp_min: 284.648,
      temp_max: 284.648,
      pressure: 1028.56,
      sea_level: 1036.23,
      grnd_level: 1028.56,
      humidity: 81,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
    ],
    clouds: { all: 0 },
    wind: { speed: 2.42, deg: 103.001 },
    sys: { pod: "d" },
    dt_txt: "2018-04-21 06:00:00"
  },
  {
    dt: 1524301200,
    main: {
      temp: 291.234,
      temp_min: 291.234,
      temp_max: 291.234,
      pressure: 1028.37,
      sea_level: 1035.88,
      grnd_level: 1028.37,
      humidity: 62,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "02d" }
    ],
    clouds: { all: 8 },
    wind: { speed: 2.83, deg: 112.001 },
    sys: { pod: "d" },
    dt_txt: "2018-04-21 09:00:00"
  },
  {
    dt: 1524312000,
    main: {
      temp: 296.495,
      temp_min: 296.495,
      temp_max: 296.495,
      pressure: 1026.84,
      sea_level: 1034.42,
      grnd_level: 1026.84,
      humidity: 56,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
    ],
    clouds: { all: 0 },
    wind: { speed: 3.63, deg: 131.003 },
    sys: { pod: "d" },
    dt_txt: "2018-04-21 12:00:00"
  },
  {
    dt: 1524322800,
    main: {
      temp: 298.253,
      temp_min: 298.253,
      temp_max: 298.253,
      pressure: 1024.88,
      sea_level: 1032.59,
      grnd_level: 1024.88,
      humidity: 45,
      temp_kf: 0
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d"
      }
    ],
    clouds: { all: 24 },
    wind: { speed: 3.68, deg: 157.502 },
    sys: { pod: "d" },
    dt_txt: "2018-04-21 15:00:00"
  },
  {
    dt: 1524333600,
    main: {
      temp: 296.41,
      temp_min: 296.41,
      temp_max: 296.41,
      pressure: 1023.4,
      sea_level: 1030.97,
      grnd_level: 1023.4,
      humidity: 42,
      temp_kf: 0
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d"
      }
    ],
    clouds: { all: 12 },
    wind: { speed: 2.9, deg: 149 },
    sys: { pod: "d" },
    dt_txt: "2018-04-21 18:00:00"
  },
  {
    dt: 1524344400,
    main: {
      temp: 291.867,
      temp_min: 291.867,
      temp_max: 291.867,
      pressure: 1023.01,
      sea_level: 1030.4,
      grnd_level: 1023.01,
      humidity: 59,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
    ],
    clouds: { all: 0 },
    wind: { speed: 3.59, deg: 115 },
    sys: { pod: "n" },
    dt_txt: "2018-04-21 21:00:00"
  },
  {
    dt: 1524355200,
    main: {
      temp: 290.013,
      temp_min: 290.013,
      temp_max: 290.013,
      pressure: 1021.53,
      sea_level: 1029.02,
      grnd_level: 1021.53,
      humidity: 63,
      temp_kf: 0
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02n"
      }
    ],
    clouds: { all: 12 },
    wind: { speed: 3.98, deg: 127.501 },
    sys: { pod: "n" },
    dt_txt: "2018-04-22 00:00:00"
  },
  {
    dt: 1524366000,
    main: {
      temp: 289.457,
      temp_min: 289.457,
      temp_max: 289.457,
      pressure: 1019.47,
      sea_level: 1027.1,
      grnd_level: 1019.47,
      humidity: 62,
      temp_kf: 0
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02n"
      }
    ],
    clouds: { all: 24 },
    wind: { speed: 3.75, deg: 129.505 },
    sys: { pod: "n" },
    dt_txt: "2018-04-22 03:00:00"
  },
  {
    dt: 1524376800,
    main: {
      temp: 288.252,
      temp_min: 288.252,
      temp_max: 288.252,
      pressure: 1018.19,
      sea_level: 1025.6,
      grnd_level: 1018.19,
      humidity: 80,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    clouds: { all: 12 },
    wind: { speed: 2.93, deg: 135.511 },
    rain: { "3h": 1.45195 },
    sys: { pod: "d" },
    dt_txt: "2018-04-22 06:00:00"
  },
  {
    dt: 1524387600,
    main: {
      temp: 292.927,
      temp_min: 292.927,
      temp_max: 292.927,
      pressure: 1016.92,
      sea_level: 1024.4,
      grnd_level: 1016.92,
      humidity: 68,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    clouds: { all: 0 },
    wind: { speed: 2.92, deg: 133.501 },
    rain: { "3h": 0.51282 },
    sys: { pod: "d" },
    dt_txt: "2018-04-22 09:00:00"
  },
  {
    dt: 1524398400,
    main: {
      temp: 297.029,
      temp_min: 297.029,
      temp_max: 297.029,
      pressure: 1015.65,
      sea_level: 1023.1,
      grnd_level: 1015.65,
      humidity: 56,
      temp_kf: 0
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d"
      }
    ],
    clouds: { all: 12 },
    wind: { speed: 3.73, deg: 176 },
    rain: {},
    sys: { pod: "d" },
    dt_txt: "2018-04-22 12:00:00"
  },
  {
    dt: 1524409200,
    main: {
      temp: 297.23,
      temp_min: 297.23,
      temp_max: 297.23,
      pressure: 1014.29,
      sea_level: 1021.75,
      grnd_level: 1014.29,
      humidity: 41,
      temp_kf: 0
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d"
      }
    ],
    clouds: { all: 36 },
    wind: { speed: 5.48, deg: 210.501 },
    rain: {},
    sys: { pod: "d" },
    dt_txt: "2018-04-22 15:00:00"
  },
  {
    dt: 1524420000,
    main: {
      temp: 295.09,
      temp_min: 295.09,
      temp_max: 295.09,
      pressure: 1013.61,
      sea_level: 1021.08,
      grnd_level: 1013.61,
      humidity: 39,
      temp_kf: 0
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d"
      }
    ],
    clouds: { all: 36 },
    wind: { speed: 3.89, deg: 226.001 },
    rain: {},
    sys: { pod: "d" },
    dt_txt: "2018-04-22 18:00:00"
  },
  {
    dt: 1524430800,
    main: {
      temp: 290.272,
      temp_min: 290.272,
      temp_max: 290.272,
      pressure: 1015.59,
      sea_level: 1022.86,
      grnd_level: 1015.59,
      humidity: 68,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10n" }
    ],
    clouds: { all: 92 },
    wind: { speed: 4.83, deg: 247.503 },
    rain: { "3h": 0.55228 },
    sys: { pod: "n" },
    dt_txt: "2018-04-22 21:00:00"
  },
  {
    dt: 1524441600,
    main: {
      temp: 286.527,
      temp_min: 286.527,
      temp_max: 286.527,
      pressure: 1015.7,
      sea_level: 1023.24,
      grnd_level: 1015.7,
      humidity: 88,
      temp_kf: 0
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10n"
      }
    ],
    clouds: { all: 92 },
    wind: { speed: 4.12, deg: 257.509 },
    rain: { "3h": 3.0312 },
    sys: { pod: "n" },
    dt_txt: "2018-04-23 00:00:00"
  },
  {
    dt: 1524452400,
    main: {
      temp: 284.835,
      temp_min: 284.835,
      temp_max: 284.835,
      pressure: 1016.71,
      sea_level: 1024.18,
      grnd_level: 1016.71,
      humidity: 74,
      temp_kf: 0
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04n"
      }
    ],
    clouds: { all: 64 },
    wind: { speed: 5.22, deg: 271.506 },
    rain: {},
    sys: { pod: "n" },
    dt_txt: "2018-04-23 03:00:00"
  },
  {
    dt: 1524463200,
    main: {
      temp: 284.336,
      temp_min: 284.336,
      temp_max: 284.336,
      pressure: 1017.92,
      sea_level: 1025.45,
      grnd_level: 1017.92,
      humidity: 76,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    clouds: { all: 92 },
    wind: { speed: 4.81, deg: 274 },
    rain: { "3h": 0.0366 },
    sys: { pod: "d" },
    dt_txt: "2018-04-23 06:00:00"
  },
  {
    dt: 1524474000,
    main: {
      temp: 286.126,
      temp_min: 286.126,
      temp_max: 286.126,
      pressure: 1019.18,
      sea_level: 1026.71,
      grnd_level: 1019.18,
      humidity: 74,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    clouds: { all: 24 },
    wind: { speed: 4.61, deg: 266.502 },
    rain: { "3h": 0.0188 },
    sys: { pod: "d" },
    dt_txt: "2018-04-23 09:00:00"
  },
  {
    dt: 1524484800,
    main: {
      temp: 287.54,
      temp_min: 287.54,
      temp_max: 287.54,
      pressure: 1019.41,
      sea_level: 1026.97,
      grnd_level: 1019.41,
      humidity: 69,
      temp_kf: 0
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d"
      }
    ],
    clouds: { all: 20 },
    wind: { speed: 5.27, deg: 253.005 },
    rain: {},
    sys: { pod: "d" },
    dt_txt: "2018-04-23 12:00:00"
  },
  {
    dt: 1524495600,
    main: {
      temp: 287.368,
      temp_min: 287.368,
      temp_max: 287.368,
      pressure: 1018.74,
      sea_level: 1026.29,
      grnd_level: 1018.74,
      humidity: 65,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    clouds: { all: 92 },
    wind: { speed: 6.3, deg: 245.001 },
    rain: { "3h": 0.5554 },
    sys: { pod: "d" },
    dt_txt: "2018-04-23 15:00:00"
  },
  {
    dt: 1524506400,
    main: {
      temp: 285.037,
      temp_min: 285.037,
      temp_max: 285.037,
      pressure: 1017.54,
      sea_level: 1025.12,
      grnd_level: 1017.54,
      humidity: 78,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    clouds: { all: 92 },
    wind: { speed: 6.19, deg: 235.002 },
    rain: { "3h": 2.21495 },
    sys: { pod: "d" },
    dt_txt: "2018-04-23 18:00:00"
  },
  {
    dt: 1524517200,
    main: {
      temp: 284.769,
      temp_min: 284.769,
      temp_max: 284.769,
      pressure: 1016.68,
      sea_level: 1024.33,
      grnd_level: 1016.68,
      humidity: 85,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10n" }
    ],
    clouds: { all: 92 },
    wind: { speed: 5.71, deg: 236.502 },
    rain: { "3h": 0.8544 },
    sys: { pod: "n" },
    dt_txt: "2018-04-23 21:00:00"
  },
  {
    dt: 1524528000,
    main: {
      temp: 283.992,
      temp_min: 283.992,
      temp_max: 283.992,
      pressure: 1017.88,
      sea_level: 1025.38,
      grnd_level: 1017.88,
      humidity: 84,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10n" }
    ],
    clouds: { all: 44 },
    wind: { speed: 5.58, deg: 274.501 },
    rain: { "3h": 0.1222 },
    sys: { pod: "n" },
    dt_txt: "2018-04-24 00:00:00"
  },
  {
    dt: 1524538800,
    main: {
      temp: 282.234,
      temp_min: 282.234,
      temp_max: 282.234,
      pressure: 1018.61,
      sea_level: 1026.3,
      grnd_level: 1018.61,
      humidity: 83,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
    ],
    clouds: { all: 0 },
    wind: { speed: 4.56, deg: 261.5 },
    rain: {},
    sys: { pod: "n" },
    dt_txt: "2018-04-24 03:00:00"
  },
  {
    dt: 1524549600,
    main: {
      temp: 281.863,
      temp_min: 281.863,
      temp_max: 281.863,
      pressure: 1019.68,
      sea_level: 1027.32,
      grnd_level: 1019.68,
      humidity: 82,
      temp_kf: 0
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d"
      }
    ],
    clouds: { all: 36 },
    wind: { speed: 4.81, deg: 264.003 },
    rain: {},
    sys: { pod: "d" },
    dt_txt: "2018-04-24 06:00:00"
  },
  {
    dt: 1524560400,
    main: {
      temp: 284.064,
      temp_min: 284.064,
      temp_max: 284.064,
      pressure: 1020.48,
      sea_level: 1028.01,
      grnd_level: 1020.48,
      humidity: 81,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    clouds: { all: 68 },
    wind: { speed: 5.27, deg: 264.001 },
    rain: { "3h": 0.058999999999999 },
    sys: { pod: "d" },
    dt_txt: "2018-04-24 09:00:00"
  },
  {
    dt: 1524571200,
    main: {
      temp: 285.99,
      temp_min: 285.99,
      temp_max: 285.99,
      pressure: 1020.49,
      sea_level: 1028.11,
      grnd_level: 1020.49,
      humidity: 77,
      temp_kf: 0
    },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    clouds: { all: 36 },
    wind: { speed: 6.43, deg: 262.501 },
    rain: { "3h": 0.0983 },
    sys: { pod: "d" },
    dt_txt: "2018-04-24 12:00:00"
  },
  {
    dt: 1524582000,
    main: {
      temp: 285.784,
      temp_min: 285.784,
      temp_max: 285.784,
      pressure: 1020.84,
      sea_level: 1028.31,
      grnd_level: 1020.84,
      humidity: 68,
      temp_kf: 0
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d"
      }
    ],
    clouds: { all: 80 },
    wind: { speed: 7.36, deg: 267.5 },
    rain: {},
    sys: { pod: "d" },
    dt_txt: "2018-04-24 15:00:00"
  },
  {
    dt: 1524592800,
    main: {
      temp: 285.406,
      temp_min: 285.406,
      temp_max: 285.406,
      pressure: 1020.35,
      sea_level: 1027.96,
      grnd_level: 1020.35,
      humidity: 62,
      temp_kf: 0
    },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
    ],
    clouds: { all: 0 },
    wind: { speed: 5.67, deg: 260.504 },
    rain: {},
    sys: { pod: "d" },
    dt_txt: "2018-04-24 18:00:00"
  },
  {
    dt: 1524603600,
    main: {
      temp: 283.635,
      temp_min: 283.635,
      temp_max: 283.635,
      pressure: 1020.64,
      sea_level: 1028.24,
      grnd_level: 1020.64,
      humidity: 67,
      temp_kf: 0
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02n"
      }
    ],
    clouds: { all: 24 },
    wind: { speed: 5.11, deg: 251.001 },
    rain: {},
    sys: { pod: "n" },
    dt_txt: "2018-04-24 21:00:00"
  }
];

const finalData = [
  {
    info: {
      dt: 1524182400,
      main: {
        temp: 285.01,
        temp_min: 285.01,
        temp_max: 288.902,
        pressure: 1028.94,
        sea_level: 1036.49,
        grnd_level: 1028.94,
        humidity: 69,
        temp_kf: -3.89
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.42, deg: 230.505 },
      sys: { pod: "n" },
      dt_txt: "2018-04-20 00:00:00"
    },
    weekDay: 5
  },
  {
    info: {
      dt: 1524268800,
      main: {
        temp: 288.448,
        temp_min: 288.448,
        temp_max: 288.448,
        pressure: 1029.63,
        sea_level: 1037.14,
        grnd_level: 1029.63,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.03, deg: 99.5001 },
      sys: { pod: "n" },
      dt_txt: "2018-04-21 00:00:00"
    },
    weekDay: 6
  },
  {
    info: {
      dt: 1524355200,
      main: {
        temp: 290.013,
        temp_min: 290.013,
        temp_max: 290.013,
        pressure: 1021.53,
        sea_level: 1029.02,
        grnd_level: 1021.53,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n"
        }
      ],
      clouds: { all: 12 },
      wind: { speed: 3.98, deg: 127.501 },
      sys: { pod: "n" },
      dt_txt: "2018-04-22 00:00:00"
    },
    weekDay: 0
  },
  {
    info: {
      dt: 1524441600,
      main: {
        temp: 286.527,
        temp_min: 286.527,
        temp_max: 286.527,
        pressure: 1015.7,
        sea_level: 1023.24,
        grnd_level: 1015.7,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n"
        }
      ],
      clouds: { all: 92 },
      wind: { speed: 4.12, deg: 257.509 },
      rain: { "3h": 3.0312 },
      sys: { pod: "n" },
      dt_txt: "2018-04-23 00:00:00"
    },
    weekDay: 1
  }
];

module.exports = {
  list,
  finalData
};
