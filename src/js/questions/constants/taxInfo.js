export const INDV = 'INDV';
export const JOINT = 'JOINT';

const TAX_BRACKETS = {
  STATE: {
    AL: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    AK: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0
        }]
    },
    AZ: {
      [INDV]: [
        {
          maxEarnings: 10346,
          percent: 0.0259
        },
        {
          maxEarnings: 25861,
          percent: 0.0288
        },
        {
          maxEarnings: 51721,
          percent: 0.0336
        },
        {
          maxEarnings: 155159,
          percent: 0.0424
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0454
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 20690,
          percent: 0.0259
        },
        {
          maxEarnings: 51721,
          percent: 0.0288
        },
        {
          maxEarnings: 103440,
          percent: 0.0336
        },
        {
          maxEarnings: 310317,
          percent: 0.0424
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0454
        }]
    },
    AR: {
      [INDV]: [
        {
          maxEarnings: 4299,
          percent: 0.009
        },
        {
          maxEarnings: 8499,
          percent: 0.025
        },
        {
          maxEarnings: 12699,
          percent: 0.035
        },
        {
          maxEarnings: 21199,
          percent: 0.045
        },
        {
          maxEarnings: 35099,
          percent: 0.06
        },
        {
          maxEarnings: 999999999999,
          percent: 0.069
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 4299,
          percent: 0.009
        },
        {
          maxEarnings: 8499,
          percent: 0.025
        },
        {
          maxEarnings: 12699,
          percent: 0.035
        },
        {
          maxEarnings: 21199,
          percent: 0.045
        },
        {
          maxEarnings: 35099,
          percent: 0.06
        },
        {
          maxEarnings: 999999999999,
          percent: 0.069
        }]
    },
    CA: {
      [INDV]: [
        {
          maxEarnings: 8233,
          percent: 0.01
        },
        {
          maxEarnings: 19495,
          percent: 0.02
        },
        {
          maxEarnings: 30769,
          percent: 0.03
        },
        {
          maxEarnings: 42711,
          percent: 0.04
        },
        {
          maxEarnings: 53980,
          percent: 0.08
        },
        {
          maxEarnings: 275738,
          percent: 0.093
        },
        {
          maxEarnings: 330884,
          percent: 0.103
        },
        {
          maxEarnings: 551473,
          percent: 0.113
        },
        {
          maxEarnings: 1000000,
          percent: 0.123
        },
        {
          maxEarnings: 999999999999,
          percent: 0.133
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 16446,
          percent: 0.01
        },
        {
          maxEarnings: 38990,
          percent: 0.02
        },
        {
          maxEarnings: 61538,
          percent: 0.04
        },
        {
          maxEarnings: 85422,
          percent: 0.06
        },
        {
          maxEarnings: 107960,
          percent: 0.08
        },
        {
          maxEarnings: 551476,
          percent: 0.093
        },
        {
          maxEarnings: 661768,
          percent: 0.103
        },
        {
          maxEarnings: 1000000,
          percent: 0.113
        },
        {
          maxEarnings: 1074996,
          percent: 0.123
        },
        {
          maxEarnings: 999999999999,
          percent: 0.133
        }]
    },
    CO: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0463
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0463
        }]
    },
    CT: {
      [INDV]: [
        {
          maxEarnings: 10000,
          percent: 0.03
        },
        {
          maxEarnings: 50000,
          percent: 0.05
        },
        {
          maxEarnings: 100000,
          percent: 0.055
        },
        {
          maxEarnings: 200000,
          percent: 0.06
        },
        {
          maxEarnings: 250000,
          percent: 0.065
        },
        {
          maxEarnings: 500000,
          percent: 0.069
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0699
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 20000,
          percent: 0.03
        },
        {
          maxEarnings: 100000,
          percent: 0.05
        },
        {
          maxEarnings: 200000,
          percent: 0.055
        },
        {
          maxEarnings: 400000,
          percent: 0.06
        },
        {
          maxEarnings: 500000,
          percent: 0.065
        },
        {
          maxEarnings: 1000000,
          percent: 0.069
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0699
        }]
    },
    DE: {
      [INDV]: [
        {
          maxEarnings: 2000,
          percent: 0.0
        },
        {
          maxEarnings: 5000,
          percent: 0.022
        },
        {
          maxEarnings: 10000,
          percent: 0.039
        },
        {
          maxEarnings: 20000,
          percent: 0.048
        },
        {
          maxEarnings: 25000,
          percent: 0.052
        },
        {
          maxEarnings: 60000,
          percent: 0.0555
        },
        {
          maxEarnings: 999999999999,
          percent: 0.066
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 2000,
          percent: 0.0
        },
        {
          maxEarnings: 5000,
          percent: 0.022
        },
        {
          maxEarnings: 10000,
          percent: 0.039
        },
        {
          maxEarnings: 20000,
          percent: 0.048
        },
        {
          maxEarnings: 25000,
          percent: 0.052
        },
        {
          maxEarnings: 60000,
          percent: 0.0555
        },
        {
          maxEarnings: 999999999999,
          percent: 0.066
        }]
    },
    FL: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0
        }]
    },
    GA: {
      [INDV]: [
        {
          maxEarnings: 750,
          percent: 0.01
        },
        {
          maxEarnings: 2250,
          percent: 0.02
        },
        {
          maxEarnings: 3750,
          percent: 0.03
        },
        {
          maxEarnings: 5270,
          percent: 0.04
        },
        {
          maxEarnings: 7000,
          percent: 0.05
        },
        {
          maxEarnings: 999999999999,
          percent: 0.06
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.01
        },
        {
          maxEarnings: 3000,
          percent: 0.02
        },
        {
          maxEarnings: 5000,
          percent: 0.03
        },
        {
          maxEarnings: 7000,
          percent: 0.04
        },
        {
          maxEarnings: 10000,
          percent: 0.05
        },
        {
          maxEarnings: 999999999999,
          percent: 0.06
        }]
    },
    HI: {
      [INDV]: [
        {
          maxEarnings: 2400,
          percent: 0.014
        },
        {
          maxEarnings: 4800,
          percent: 0.032
        },
        {
          maxEarnings: 9600,
          percent: 0.055
        },
        {
          maxEarnings: 14400,
          percent: 0.064
        },
        {
          maxEarnings: 19200,
          percent: 0.068
        },
        {
          maxEarnings: 24000,
          percent: 0.072
        },
        {
          maxEarnings: 36000,
          percent: 0.076
        },
        {
          maxEarnings: 48000,
          percent: 0.079
        },
        {
          maxEarnings: 150000,
          percent: 0.0825
        },
        {
          maxEarnings: 175000,
          percent: 0.09
        },
        {
          maxEarnings: 200000,
          percent: 0.10
        },
        {
          maxEarnings: 999999999999,
          percent: 0.11
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 4800,
          percent: 0.014
        },
        {
          maxEarnings: 9600,
          percent: 0.032
        },
        {
          maxEarnings: 19200,
          percent: 0.055
        },
        {
          maxEarnings: 28800,
          percent: 0.064
        },
        {
          maxEarnings: 38400,
          percent: 0.068
        },
        {
          maxEarnings: 48000,
          percent: 0.072
        },
        {
          maxEarnings: 72000,
          percent: 0.076
        },
        {
          maxEarnings: 96000,
          percent: 0.079
        },
        {
          maxEarnings: 300000,
          percent: 0.0825
        },
        {
          maxEarnings: 350000,
          percent: 0.09
        },
        {
          maxEarnings: 400000,
          percent: 0.10
        },
        {
          maxEarnings: 999999999999,
          percent: 0.11
        }]
    },
    ID: {
      [INDV]: [
        {
          maxEarnings: 1472,
          percent: 0.016
        },
        {
          maxEarnings: 2945,
          percent: 0.036
        },
        {
          maxEarnings: 4417,
          percent: 0.041
        },
        {
          maxEarnings: 5890,
          percent: 0.051
        },
        {
          maxEarnings: 7362,
          percent: 0.061
        },
        {
          maxEarnings: 11043,
          percent: 0.071
        },
        {
          maxEarnings: 999999999999,
          percent: 0.074
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 2944,
          percent: 0.016
        },
        {
          maxEarnings: 5890,
          percent: 0.036
        },
        {
          maxEarnings: 8834,
          percent: 0.041
        },
        {
          maxEarnings: 11780,
          percent: 0.051
        },
        {
          maxEarnings: 14724,
          percent: 0.061
        },
        {
          maxEarnings: 22086,
          percent: 0.071
        },
        {
          maxEarnings: 999999999999,
          percent: 0.074
        }]
    },
    IL: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0495
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0495
        }]
    },
    IN: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0323
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0323
        }]
    },
    IA: {
      [INDV]: [
        {
          maxEarnings: 1598,
          percent: 0.0036
        },
        {
          maxEarnings: 3196,
          percent: 0.0072
        },
        {
          maxEarnings: 6392,
          percent: 0.0243
        },
        {
          maxEarnings: 14382,
          percent: 0.045
        },
        {
          maxEarnings: 23970,
          percent: 0.0612
        },
        {
          maxEarnings: 31960,
          percent: 0.0648
        },
        {
          maxEarnings: 47940,
          percent: 0.068
        },
        {
          maxEarnings: 71910,
          percent: 0.0792
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0898
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1598,
          percent: 0.0036
        },
        {
          maxEarnings: 3196,
          percent: 0.0072
        },
        {
          maxEarnings: 6392,
          percent: 0.0243
        },
        {
          maxEarnings: 14382,
          percent: 0.045
        },
        {
          maxEarnings: 23970,
          percent: 0.0612
        },
        {
          maxEarnings: 31960,
          percent: 0.0648
        },
        {
          maxEarnings: 47940,
          percent: 0.068
        },
        {
          maxEarnings: 71910,
          percent: 0.0792
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0898
        }]
    },
    KS: {
      [INDV]: [
        {
          maxEarnings: 2500,
          percent: 0.0
        },
        {
          maxEarnings: 15000,
          percent: 0.031
        },
        {
          maxEarnings: 30000,
          percent: 0.0525
        },
        {
          maxEarnings: 999999999999,
          percent: 0.057
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 5000,
          percent: 0.0
        },
        {
          maxEarnings: 30000,
          percent: 0.031
        },
        {
          maxEarnings: 60000,
          percent: 0.0525
        },
        {
          maxEarnings: 999999999999,
          percent: 0.057
        }]
    },
    KY: {
      [INDV]: [
        {
          maxEarnings: 3000,
          percent: 0.02
        },
        {
          maxEarnings: 4000,
          percent: 0.03
        },
        {
          maxEarnings: 5000,
          percent: 0.04
        },
        {
          maxEarnings: 8000,
          percent: 0.05
        },
        {
          maxEarnings: 75000,
          percent: 0.058
        },
        {
          maxEarnings: 999999999999,
          percent: 0.06
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 3000,
          percent: 0.02
        },
        {
          maxEarnings: 4000,
          percent: 0.03
        },
        {
          maxEarnings: 5000,
          percent: 0.04
        },
        {
          maxEarnings: 8000,
          percent: 0.05
        },
        {
          maxEarnings: 75000,
          percent: 0.058
        },
        {
          maxEarnings: 999999999999,
          percent: 0.06
        }]
    },
    LA: {
      [INDV]: [
        {
          maxEarnings: 12500,
          percent: 0.02
        },
        {
          maxEarnings: 50000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.06
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 25000,
          percent: 0.02
        },
        {
          maxEarnings: 100000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.06
        }]
    },
    ME: {
      [INDV]: [
        {
          maxEarnings: 21450,
          percent: 0.058
        },
        {
          maxEarnings: 50750,
          percent: 0.0675
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0715
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 42900,
          percent: 0.058
        },
        {
          maxEarnings: 101550,
          percent: 0.0675
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0715
        }]
    },
    MD: {
      [INDV]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 2000,
          percent: 0.03
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 100000,
          percent: 0.0475
        },
        {
          maxEarnings: 125000,
          percent: 0.05
        },
        {
          maxEarnings: 150000,
          percent: 0.0525
        },
        {
          maxEarnings: 250000,
          percent: 0.0550
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0575
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 2000,
          percent: 0.03
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 150000,
          percent: 0.0475
        },
        {
          maxEarnings: 175000,
          percent: 0.05
        },
        {
          maxEarnings: 225000,
          percent: 0.0525
        },
        {
          maxEarnings: 300000,
          percent: 0.0550
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0575
        }]
    },
    MA: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.051
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.051
        }]
    },
    MI: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0425
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0425
        }]
    },
    MN: {
      [INDV]: [
        {
          maxEarnings: 25890,
          percent: 0.0535
        },
        {
          maxEarnings: 85060,
          percent: 0.0705
        },
        {
          maxEarnings: 160020,
          percent: 0.0785
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0985
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 37850,
          percent: 0.0535
        },
        {
          maxEarnings: 150380,
          percent: 0.0705
        },
        {
          maxEarnings: 266700,
          percent: 0.0785
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0985
        }]
    },
    MS: {
      [INDV]: [
        {
          maxEarnings: 1000,
          percent: 0.0
        },
        {
          maxEarnings: 5000,
          percent: 0.03
        },
        {
          maxEarnings: 10000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.0
        },
        {
          maxEarnings: 5000,
          percent: 0.03
        },
        {
          maxEarnings: 10000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    MO: {
      [INDV]: [
        {
          maxEarnings: 100,
          percent: 0.00
        },
        {
          maxEarnings: 1008,
          percent: 0.015
        },
        {
          maxEarnings: 2016,
          percent: 0.02
        },
        {
          maxEarnings: 3024,
          percent: 0.025
        },
        {
          maxEarnings: 4032,
          percent: 0.03
        },
        {
          maxEarnings: 5040,
          percent: 0.035
        },
        {
          maxEarnings: 6048,
          percent: 0.04
        },
        {
          maxEarnings: 7056,
          percent: 0.045
        },
        {
          maxEarnings: 8064,
          percent: 0.05
        },
        {
          maxEarnings: 9072,
          percent: 0.055
        },
        {
          maxEarnings: 999999999999,
          percent: 0.059
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 100,
          percent: 0.00
        },
        {
          maxEarnings: 1008,
          percent: 0.015
        },
        {
          maxEarnings: 2016,
          percent: 0.02
        },
        {
          maxEarnings: 3024,
          percent: 0.025
        },
        {
          maxEarnings: 4032,
          percent: 0.03
        },
        {
          maxEarnings: 5040,
          percent: 0.035
        },
        {
          maxEarnings: 6048,
          percent: 0.04
        },
        {
          maxEarnings: 7056,
          percent: 0.045
        },
        {
          maxEarnings: 8064,
          percent: 0.05
        },
        {
          maxEarnings: 9072,
          percent: 0.055
        },
        {
          maxEarnings: 999999999999,
          percent: 0.059
        }]
    },
    MT: {
      [INDV]: [
        {
          maxEarnings: 3000,
          percent: 0.01
        },
        {
          maxEarnings: 5200,
          percent: 0.02
        },
        {
          maxEarnings: 8000,
          percent: 0.03
        },
        {
          maxEarnings: 10800,
          percent: 0.04
        },
        {
          maxEarnings: 13900,
          percent: 0.05
        },
        {
          maxEarnings: 17900,
          percent: 0.06
        },
        {
          maxEarnings: 999999999999,
          percent: 0.069
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 3000,
          percent: 0.01
        },
        {
          maxEarnings: 5200,
          percent: 0.02
        },
        {
          maxEarnings: 8000,
          percent: 0.03
        },
        {
          maxEarnings: 10800,
          percent: 0.04
        },
        {
          maxEarnings: 13900,
          percent: 0.05
        },
        {
          maxEarnings: 17900,
          percent: 0.06
        },
        {
          maxEarnings: 999999999999,
          percent: 0.069
        }]
    },
    NE: {
      [INDV]: [
        {
          maxEarnings: 3150,
          percent: 0.0246
        },
        {
          maxEarnings: 18880,
          percent: 0.0351
        },
        {
          maxEarnings: 30420,
          percent: 0.0501
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0684
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 6290,
          percent: 0.0246
        },
        {
          maxEarnings: 37760,
          percent: 0.0351
        },
        {
          maxEarnings: 60480,
          percent: 0.0501
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0684
        }]
    },
    NV: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.0
        }]
    },
    NH: {
      [INDV]: [
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    NJ: {
      [INDV]: [
        {
          maxEarnings: 20000,
          percent: 0.014
        },
        {
          maxEarnings: 35000,
          percent: 0.0175
        },
        {
          maxEarnings: 40000,
          percent: 0.035
        },
        {
          maxEarnings: 75000,
          percent: 0.05525
        },
        {
          maxEarnings: 500000,
          percent: 0.0637
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0897
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 20000,
          percent: 0.014
        },
        {
          maxEarnings: 50000,
          percent: 0.0175
        },
        {
          maxEarnings: 70000,
          percent: 0.0245
        },
        {
          maxEarnings: 80000,
          percent: 0.035
        },
        {
          maxEarnings: 150000,
          percent: 0.05525
        },
        {
          maxEarnings: 500000,
          percent: 0.0637
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0897
        }]
    },
    // This is where I stopped
    // https://taxfoundation.org/state-individual-income-tax-rates-brackets-2018/
    NM: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    NY: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    NC: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    ND: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    OH: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    OK: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    OR: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    PA: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    RI: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    SC: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    SD: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    TN: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    TX: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    UT: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    VT: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    VA: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    WA: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    WV: {
      [INDV]: [
        {
          maxEarnings: 500,
          percent: 0.02
        },
        {
          maxEarnings: 3000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 1000,
          percent: 0.02
        },
        {
          maxEarnings: 6000,
          percent: 0.04
        },
        {
          maxEarnings: 999999999999,
          percent: 0.05
        }]
    },
    WI: {
      [INDV]: [
        {
          maxEarnings: 11090,
          percent: 0.04
        },
        {
          maxEarnings: 22190,
          percent: 0.0584
        },
        {
          maxEarnings: 244270,
          percent: 0.0627
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0765
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 14790,
          percent: 0.04
        },
        {
          maxEarnings: 29580,
          percent: 0.0584
        },
        {
          maxEarnings: 325700,
          percent: 0.0627
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0765
        }]
    },
    WY: {
      [INDV]: [
        {
          maxEarnings: 11090,
          percent: 0.04
        },
        {
          maxEarnings: 22190,
          percent: 0.0584
        },
        {
          maxEarnings: 244270,
          percent: 0.0627
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0765
        }
      ],
      [JOINT]: [
        {
          maxEarnings: 14790,
          percent: 0.04
        },
        {
          maxEarnings: 29580,
          percent: 0.0584
        },
        {
          maxEarnings: 325700,
          percent: 0.0627
        },
        {
          maxEarnings: 999999999999,
          percent: 0.0765
        }]
    }
  },
  FEDERAL: {
    [INDV]: [
      {
        maxEarnings: 9525,
        percent: 0.10
      },
      {
        maxEarnings: 38700,
        percent: 0.12
      },
      {
        maxEarnings: 82500,
        percent: 0.22
      },
      {
        maxEarnings: 157500,
        percent: 0.24
      },
      {
        maxEarnings: 200000,
        percent: 0.32
      },
      {
        maxEarnings: 500000,
        percent: 0.35
      },
      {
        maxEarnings: 999999999,
        percent: 0.37
      }
    ],
    [JOINT]: [{
      maxEarnings: 19050,
      percent: 0.10
    },
    {
      maxEarnings: 77400,
      percent: 0.12
    },
    {
      maxEarnings: 165000,
      percent: 0.22
    },
    {
      maxEarnings: 315000,
      percent: 0.24
    },
    {
      maxEarnings: 400000,
      percent: 0.32
    },
    {
      maxEarnings: 600000,
      percent: 0.35
    },
    {
      maxEarnings: 999999999,
      percent: 0.37
    }]
  }
};
// Not sure if we'll actually need this array yet, but I'm keeping the base here just in case
const STATE_CODES = "filler";

export default {
  INDV,
  JOINT,
  TAX_BRACKETS,
  STATE_CODES
};
