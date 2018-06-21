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
    AZ: {
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
    AR: {
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
    CA: {
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
    CO: {
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
    CT: {
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
    DE: {
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
    FL: {
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
    GA: {
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
    HI: {
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
    ID: {
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
    IL: {
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
    IN: {
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
    IA: {
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
    KS: {
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
    KY: {
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
    LA: {
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
    ME: {
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
    MD: {
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
    MA: {
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
    MI: {
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
    MN: {
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
    MS: {
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
    MO: {
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
    MT: {
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
    NE: {
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
    NV: {
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
    NH: {
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
    NJ: {
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
// Not sure if we'll  actually need this array yet, but I'm keeping the base here just in case
const US_STATES = ['Wisconsin', 'Alabama', 'Kansas'];

export default {
  INDV,
  JOINT,
  TAX_BRACKETS,
  US_STATES
};
