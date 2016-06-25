'use strict';

let colors = [
  {
    "r": 255,
    "g": 250,
    "b": 194,
    "gamma": {
      "number": "5130",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "292",
      "isSimilar": false
    },
    "madeira": {
      "number": "111",
      "isSimilar": true
    }
  },
  {
    "r": 249,
    "g": 242,
    "b": 135,
    "gamma": {
      "number": "5140",
      "isSimilar": false
    },
    "dmc": {
      "number": "445",
      "isSimilar": true
    },
    "anchor": {
      "number": "292",
      "isSimilar": true
    },
    "madeira": {
      "number": "102",
      "isSimilar": true
    }
  },
  {
    "r": 246,
    "g": 242,
    "b": 137,
    "gamma": {
      "number": "0041",
      "isSimilar": false
    },
    "dmc": {
      "number": "445",
      "isSimilar": false
    },
    "anchor": {
      "number": "288",
      "isSimilar": false
    },
    "madeira": {
      "number": "103",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 242,
    "b": 118,
    "gamma": {
      "number": "0514",
      "isSimilar": false
    },
    "dmc": {
      "number": "445",
      "isSimilar": false
    },
    "anchor": {
      "number": "802",
      "isSimilar": false
    },
    "madeira": {
      "number": "103",
      "isSimilar": false
    }
  },
  {
    "r": 252,
    "g": 231,
    "b": 64,
    "gamma": {
      "number": "3192",
      "isSimilar": false
    },
    "dmc": {
      "number": "307",
      "isSimilar": false
    },
    "anchor": {
      "number": "289",
      "isSimilar": false
    },
    "madeira": {
      "number": "104",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 226,
    "b": 26,
    "gamma": {
      "number": "0042",
      "isSimilar": false
    },
    "dmc": {
      "number": "973",
      "isSimilar": false
    },
    "anchor": {
      "number": "297",
      "isSimilar": false
    },
    "madeira": {
      "number": "105",
      "isSimilar": false
    }
  },
  {
    "r": 251,
    "g": 223,
    "b": 13,
    "gamma": {
      "number": "0516",
      "isSimilar": false
    },
    "dmc": {
      "number": "444",
      "isSimilar": false
    },
    "anchor": {
      "number": "298",
      "isSimilar": false
    },
    "madeira": {
      "number": "106",
      "isSimilar": false
    }
  },
  {
    "r": 251,
    "g": 210,
    "b": 21,
    "gamma": {
      "number": "5165",
      "isSimilar": false
    },
    "dmc": {
      "number": "973",
      "isSimilar": true
    },
    "anchor": {
      "number": "298",
      "isSimilar": false
    },
    "madeira": {
      "number": "106",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 243,
    "b": 173,
    "gamma": {
      "number": "0101",
      "isSimilar": false
    },
    "dmc": {
      "number": "3078",
      "isSimilar": false
    },
    "anchor": {
      "number": "292",
      "isSimilar": false
    },
    "madeira": {
      "number": "102",
      "isSimilar": false
    }
  },
  {
    "r": 253,
    "g": 240,
    "b": 156,
    "gamma": {
      "number": "0102",
      "isSimilar": false
    },
    "dmc": {
      "number": "3078",
      "isSimilar": true
    },
    "anchor": {
      "number": "293",
      "isSimilar": false
    },
    "madeira": {
      "number": "110",
      "isSimilar": false
    }
  },
  {
    "r": 254,
    "g": 238,
    "b": 137,
    "gamma": {
      "number": "0016",
      "isSimilar": false
    },
    "dmc": {
      "number": "727",
      "isSimilar": false
    },
    "anchor": {
      "number": "293",
      "isSimilar": false
    },
    "madeira": {
      "number": "102",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 227,
    "b": 95,
    "gamma": {
      "number": "3193",
      "isSimilar": false
    },
    "dmc": {
      "number": "726",
      "isSimilar": false
    },
    "anchor": {
      "number": "297",
      "isSimilar": true
    },
    "madeira": {
      "number": "108",
      "isSimilar": false
    }
  },
  {
    "r": 250,
    "g": 213,
    "b": 88,
    "gamma": {
      "number": "3194",
      "isSimilar": false
    },
    "dmc": {
      "number": "725",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "109",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 180,
    "b": 1,
    "gamma": {
      "number": "3197",
      "isSimilar": false
    },
    "dmc": {
      "number": "972",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "107",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 252,
    "b": 220,
    "gamma": {
      "number": "0043",
      "isSimilar": false
    },
    "dmc": {
      "number": "3823",
      "isSimilar": false
    },
    "anchor": {
      "number": "386",
      "isSimilar": false
    },
    "madeira": {
      "number": "2512",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 237,
    "b": 169,
    "gamma": {
      "number": "0021",
      "isSimilar": false
    },
    "dmc": {
      "number": "745",
      "isSimilar": false
    },
    "anchor": {
      "number": "300",
      "isSimilar": false
    },
    "madeira": {
      "number": "112",
      "isSimilar": true
    }
  },
  {
    "r": 255,
    "g": 226,
    "b": 118,
    "gamma": {
      "number": "0020",
      "isSimilar": false
    },
    "dmc": {
      "number": "744",
      "isSimilar": false
    },
    "anchor": {
      "number": "301",
      "isSimilar": false
    },
    "madeira": {
      "number": "109",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 195,
    "b": 58,
    "gamma": {
      "number": "0019",
      "isSimilar": false
    },
    "dmc": {
      "number": "742",
      "isSimilar": true
    },
    "anchor": {
      "number": "303",
      "isSimilar": false
    },
    "madeira": {
      "number": "114",
      "isSimilar": true
    }
  },
  {
    "r": 255,
    "g": 149,
    "b": 0,
    "gamma": {
      "number": "3195",
      "isSimilar": false
    },
    "dmc": {
      "number": "741",
      "isSimilar": false
    },
    "anchor": {
      "number": "314",
      "isSimilar": false
    },
    "madeira": {
      "number": "201",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 118,
    "b": 0,
    "gamma": {
      "number": "3196",
      "isSimilar": false
    },
    "dmc": {
      "number": "740",
      "isSimilar": false
    },
    "anchor": {
      "number": "316",
      "isSimilar": false
    },
    "madeira": {
      "number": "202",
      "isSimilar": false
    }
  },
  {
    "r": 252,
    "g": 126,
    "b": 12,
    "gamma": {
      "number": "3198",
      "isSimilar": false
    },
    "dmc": {
      "number": "971",
      "isSimilar": false
    },
    "anchor": {
      "number": "316",
      "isSimilar": false
    },
    "madeira": {
      "number": "202",
      "isSimilar": true
    }
  },
  {
    "r": 255,
    "g": 120,
    "b": 30,
    "gamma": {
      "number": "3199",
      "isSimilar": false
    },
    "dmc": {
      "number": "970",
      "isSimilar": false
    },
    "anchor": {
      "number": "330",
      "isSimilar": true
    },
    "madeira": {
      "number": "204",
      "isSimilar": false
    }
  },
  {
    "r": 242,
    "g": 105,
    "b": 34,
    "gamma": {
      "number": "3200",
      "isSimilar": false
    },
    "dmc": {
      "number": "947",
      "isSimilar": false
    },
    "anchor": {
      "number": "330",
      "isSimilar": false
    },
    "madeira": {
      "number": "205",
      "isSimilar": false
    }
  },
  {
    "r": 212,
    "g": 93,
    "b": 40,
    "gamma": {
      "number": "3201",
      "isSimilar": false
    },
    "dmc": {
      "number": "900",
      "isSimilar": false
    },
    "anchor": {
      "number": "326",
      "isSimilar": false
    },
    "madeira": {
      "number": "208",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 218,
    "b": 90,
    "gamma": {
      "number": "0104",
      "isSimilar": false
    },
    "dmc": {
      "number": "743",
      "isSimilar": false
    },
    "anchor": {
      "number": "302",
      "isSimilar": true
    },
    "madeira": {
      "number": "113",
      "isSimilar": false
    }
  },
  {
    "r": 254,
    "g": 188,
    "b": 70,
    "gamma": {
      "number": "0105",
      "isSimilar": false
    },
    "dmc": {
      "number": "741",
      "isSimilar": false
    },
    "anchor": {
      "number": "314",
      "isSimilar": false
    },
    "madeira": {
      "number": "114",
      "isSimilar": true
    }
  },
  {
    "r": 250,
    "g": 164,
    "b": 99,
    "gamma": {
      "number": "3204",
      "isSimilar": false
    },
    "dmc": {
      "number": "722",
      "isSimilar": false
    },
    "anchor": {
      "number": "323",
      "isSimilar": true
    },
    "madeira": {
      "number": "307",
      "isSimilar": true
    }
  },
  {
    "r": 252,
    "g": 151,
    "b": 73,
    "gamma": {
      "number": "0107",
      "isSimilar": false
    },
    "dmc": {
      "number": "3853",
      "isSimilar": false
    },
    "anchor": {
      "number": "1003",
      "isSimilar": false
    },
    "madeira": {
      "number": "0311",
      "isSimilar": false
    }
  },
  {
    "r": 228,
    "g": 117,
    "b": 43,
    "gamma": {
      "number": "0108",
      "isSimilar": false
    },
    "dmc": {
      "number": "721",
      "isSimilar": false
    },
    "anchor": {
      "number": "925",
      "isSimilar": false
    },
    "madeira": {
      "number": "0308",
      "isSimilar": false
    }
  },
  {
    "r": 236,
    "g": 104,
    "b": 16,
    "gamma": {
      "number": "0109",
      "isSimilar": false
    },
    "dmc": {
      "number": "720",
      "isSimilar": false
    },
    "anchor": {
      "number": "326",
      "isSimilar": false
    },
    "madeira": {
      "number": "0309",
      "isSimilar": false
    }
  },
  {
    "r": 234,
    "g": 222,
    "b": 119,
    "gamma": {
      "number": "0652",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "278",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 201,
    "g": 182,
    "b": 57,
    "gamma": {
      "number": "0653",
      "isSimilar": false
    },
    "dmc": {
      "number": "734",
      "isSimilar": true
    },
    "anchor": {
      "number": "279",
      "isSimilar": false
    },
    "madeira": {
      "number": "1610",
      "isSimilar": false
    }
  },
  {
    "r": 191,
    "g": 164,
    "b": 58,
    "gamma": {
      "number": "3176",
      "isSimilar": false
    },
    "dmc": {
      "number": "833",
      "isSimilar": false
    },
    "anchor": {
      "number": "907",
      "isSimilar": true
    },
    "madeira": {
      "number": "2202",
      "isSimilar": true
    }
  },
  {
    "r": 177,
    "g": 154,
    "b": 63,
    "gamma": {
      "number": "0654",
      "isSimilar": false
    },
    "dmc": {
      "number": "832",
      "isSimilar": false
    },
    "anchor": {
      "number": "907",
      "isSimilar": true
    },
    "madeira": {
      "number": "2202",
      "isSimilar": false
    }
  },
  {
    "r": 149,
    "g": 123,
    "b": 47,
    "gamma": {
      "number": "0094",
      "isSimilar": false
    },
    "dmc": {
      "number": "831",
      "isSimilar": false
    },
    "anchor": {
      "number": "277",
      "isSimilar": true
    },
    "madeira": {
      "number": "2201",
      "isSimilar": false
    }
  },
  {
    "r": 141,
    "g": 117,
    "b": 41,
    "gamma": {
      "number": "0655",
      "isSimilar": false
    },
    "dmc": {
      "number": "830",
      "isSimilar": true
    },
    "anchor": {
      "number": "889",
      "isSimilar": false
    },
    "madeira": {
      "number": "2112",
      "isSimilar": false
    }
  },
  {
    "r": 128,
    "g": 108,
    "b": 38,
    "gamma": {
      "number": "3177",
      "isSimilar": false
    },
    "dmc": {
      "number": "830",
      "isSimilar": false
    },
    "anchor": {
      "number": "277",
      "isSimilar": false
    },
    "madeira": {
      "number": "2112",
      "isSimilar": true
    }
  },
  {
    "r": 111,
    "g": 84,
    "b": 34,
    "gamma": {
      "number": "3178",
      "isSimilar": false
    },
    "dmc": {
      "number": "829",
      "isSimilar": false
    },
    "anchor": {
      "number": "906",
      "isSimilar": false
    },
    "madeira": {
      "number": "2114",
      "isSimilar": false
    }
  },
  {
    "r": 204,
    "g": 188,
    "b": 125,
    "gamma": {
      "number": "0093",
      "isSimilar": false
    },
    "dmc": {
      "number": "3046",
      "isSimilar": false
    },
    "anchor": {
      "number": "887",
      "isSimilar": false
    },
    "madeira": {
      "number": "2206",
      "isSimilar": false
    }
  },
  {
    "r": 202,
    "g": 183,
    "b": 81,
    "gamma": {
      "number": "3069",
      "isSimilar": false
    },
    "dmc": {
      "number": "834",
      "isSimilar": false
    },
    "anchor": {
      "number": "874",
      "isSimilar": true
    },
    "madeira": {
      "number": "2206",
      "isSimilar": true
    }
  },
  {
    "r": 187,
    "g": 170,
    "b": 85,
    "gamma": {
      "number": "3068",
      "isSimilar": false
    },
    "dmc": {
      "number": "370",
      "isSimilar": false
    },
    "anchor": {
      "number": "888",
      "isSimilar": false
    },
    "madeira": {
      "number": "2110",
      "isSimilar": false
    }
  },
  {
    "r": 160,
    "g": 143,
    "b": 77,
    "gamma": {
      "number": "3175",
      "isSimilar": false
    },
    "dmc": {
      "number": "371",
      "isSimilar": false
    },
    "anchor": {
      "number": "854",
      "isSimilar": false
    },
    "madeira": {
      "number": "2110",
      "isSimilar": false
    }
  },
  {
    "r": 156,
    "g": 140,
    "b": 74,
    "gamma": {
      "number": "0092",
      "isSimilar": false
    },
    "dmc": {
      "number": "372",
      "isSimilar": false
    },
    "anchor": {
      "number": "853",
      "isSimilar": false
    },
    "madeira": {
      "number": "2110",
      "isSimilar": false
    }
  },
  {
    "r": 249,
    "g": 245,
    "b": 182,
    "gamma": {
      "number": "0815",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "802",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 209,
    "g": 198,
    "b": 109,
    "gamma": {
      "number": "0017",
      "isSimilar": false
    },
    "dmc": {
      "number": "734",
      "isSimilar": false
    },
    "anchor": {
      "number": "279",
      "isSimilar": false
    },
    "madeira": {
      "number": "1610",
      "isSimilar": false
    }
  },
  {
    "r": 166,
    "g": 160,
    "b": 54,
    "gamma": {
      "number": "0010",
      "isSimilar": false
    },
    "dmc": {
      "number": "733",
      "isSimilar": false
    },
    "anchor": {
      "number": "280",
      "isSimilar": false
    },
    "madeira": {
      "number": "1611",
      "isSimilar": false
    }
  },
  {
    "r": 145,
    "g": 133,
    "b": 42,
    "gamma": {
      "number": "3171",
      "isSimilar": false
    },
    "dmc": {
      "number": "732",
      "isSimilar": false
    },
    "anchor": {
      "number": "281",
      "isSimilar": false
    },
    "madeira": {
      "number": "1612",
      "isSimilar": false
    }
  },
  {
    "r": 131,
    "g": 125,
    "b": 47,
    "gamma": {
      "number": "3172",
      "isSimilar": false
    },
    "dmc": {
      "number": "731",
      "isSimilar": false
    },
    "anchor": {
      "number": "924",
      "isSimilar": false
    },
    "madeira": {
      "number": "1612",
      "isSimilar": false
    }
  },
  {
    "r": 116,
    "g": 109,
    "b": 43,
    "gamma": {
      "number": "3173",
      "isSimilar": false
    },
    "dmc": {
      "number": "730",
      "isSimilar": false
    },
    "anchor": {
      "number": "924",
      "isSimilar": false
    },
    "madeira": {
      "number": "1614",
      "isSimilar": false
    }
  },
  {
    "r": 222,
    "g": 224,
    "b": 119,
    "gamma": {
      "number": "0816",
      "isSimilar": false
    },
    "dmc": {
      "number": "472",
      "isSimilar": false
    },
    "anchor": {
      "number": "254",
      "isSimilar": false
    },
    "madeira": {
      "number": "1414",
      "isSimilar": false
    }
  },
  {
    "r": 215,
    "g": 212,
    "b": 119,
    "gamma": {
      "number": "3244",
      "isSimilar": false
    },
    "dmc": {
      "number": "165",
      "isSimilar": false
    },
    "anchor": {
      "number": "802",
      "isSimilar": false
    },
    "madeira": {
      "number": "1414",
      "isSimilar": true
    }
  },
  {
    "r": 210,
    "g": 208,
    "b": 87,
    "gamma": {
      "number": "0817",
      "isSimilar": false
    },
    "dmc": {
      "number": "3819",
      "isSimilar": false
    },
    "anchor": {
      "number": "278",
      "isSimilar": false
    },
    "madeira": {
      "number": "2703",
      "isSimilar": false
    }
  },
  {
    "r": 190,
    "g": 193,
    "b": 50,
    "gamma": {
      "number": "3245",
      "isSimilar": false
    },
    "dmc": {
      "number": "166",
      "isSimilar": false
    },
    "anchor": {
      "number": "278",
      "isSimilar": false
    },
    "madeira": {
      "number": "2703",
      "isSimilar": true
    }
  },
  {
    "r": 168,
    "g": 177,
    "b": 68,
    "gamma": {
      "number": "0818",
      "isSimilar": false
    },
    "dmc": {
      "number": "166",
      "isSimilar": false
    },
    "anchor": {
      "number": "265",
      "isSimilar": false
    },
    "madeira": {
      "number": "1308",
      "isSimilar": false
    }
  },
  {
    "r": 159,
    "g": 161,
    "b": 70,
    "gamma": {
      "number": "3169",
      "isSimilar": false
    },
    "dmc": {
      "number": "581",
      "isSimilar": false
    },
    "anchor": {
      "number": "280",
      "isSimilar": false
    },
    "madeira": {
      "number": "1502",
      "isSimilar": false
    }
  },
  {
    "r": 146,
    "g": 153,
    "b": 55,
    "gamma": {
      "number": "0008",
      "isSimilar": false
    },
    "dmc": {
      "number": "471",
      "isSimilar": false
    },
    "anchor": {
      "number": "266",
      "isSimilar": true
    },
    "madeira": {
      "number": "1501",
      "isSimilar": false
    }
  },
  {
    "r": 121,
    "g": 135,
    "b": 56,
    "gamma": {
      "number": "0090",
      "isSimilar": false
    },
    "dmc": {
      "number": "469",
      "isSimilar": false
    },
    "anchor": {
      "number": "267",
      "isSimilar": false
    },
    "madeira": {
      "number": "1504",
      "isSimilar": false
    }
  },
  {
    "r": 119,
    "g": 120,
    "b": 48,
    "gamma": {
      "number": "3170",
      "isSimilar": false
    },
    "dmc": {
      "number": "580",
      "isSimilar": false
    },
    "anchor": {
      "number": "924",
      "isSimilar": false
    },
    "madeira": {
      "number": "1503",
      "isSimilar": true
    }
  },
  {
    "r": 122,
    "g": 128,
    "b": 53,
    "gamma": {
      "number": "0820",
      "isSimilar": false
    },
    "dmc": {
      "number": "580",
      "isSimilar": true
    },
    "anchor": {
      "number": "267",
      "isSimilar": false
    },
    "madeira": {
      "number": "1503",
      "isSimilar": false
    }
  },
  {
    "r": 79,
    "g": 89,
    "b": 37,
    "gamma": {
      "number": "0821",
      "isSimilar": false
    },
    "dmc": {
      "number": "937",
      "isSimilar": false
    },
    "anchor": {
      "number": "268",
      "isSimilar": false
    },
    "madeira": {
      "number": "1507",
      "isSimilar": false
    }
  },
  {
    "r": 51,
    "g": 83,
    "b": 43,
    "gamma": {
      "number": "0616",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "1044",
      "isSimilar": false
    },
    "madeira": {
      "number": "2603",
      "isSimilar": false
    }
  },
  {
    "r": 46,
    "g": 61,
    "b": 26,
    "gamma": {
      "number": "0823",
      "isSimilar": false
    },
    "dmc": {
      "number": "3362",
      "isSimilar": false
    },
    "anchor": {
      "number": "263",
      "isSimilar": false
    },
    "madeira": {
      "number": "1601",
      "isSimilar": false
    }
  },
  {
    "r": 153,
    "g": 156,
    "b": 108,
    "gamma": {
      "number": "3066",
      "isSimilar": false
    },
    "dmc": {
      "number": "3013",
      "isSimilar": false
    },
    "anchor": {
      "number": "853",
      "isSimilar": false
    },
    "madeira": {
      "number": "1511",
      "isSimilar": false
    }
  },
  {
    "r": 155,
    "g": 150,
    "b": 72,
    "gamma": {
      "number": "3067",
      "isSimilar": false
    },
    "dmc": {
      "number": "3012",
      "isSimilar": false
    },
    "anchor": {
      "number": "843",
      "isSimilar": false
    },
    "madeira": {
      "number": "1605",
      "isSimilar": false
    }
  },
  {
    "r": 99,
    "g": 95,
    "b": 47,
    "gamma": {
      "number": "3174",
      "isSimilar": false
    },
    "dmc": {
      "number": "3011",
      "isSimilar": false
    },
    "anchor": {
      "number": "846",
      "isSimilar": false
    },
    "madeira": {
      "number": "1507",
      "isSimilar": false
    }
  },
  {
    "r": 186,
    "g": 194,
    "b": 139,
    "gamma": {
      "number": "0091",
      "isSimilar": false
    },
    "dmc": {
      "number": "3053",
      "isSimilar": false
    },
    "anchor": {
      "number": "261",
      "isSimilar": false
    },
    "madeira": {
      "number": "1510",
      "isSimilar": false
    }
  },
  {
    "r": 114,
    "g": 136,
    "b": 95,
    "gamma": {
      "number": "0036",
      "isSimilar": false
    },
    "dmc": {
      "number": "3363",
      "isSimilar": false
    },
    "anchor": {
      "number": "262",
      "isSimilar": false
    },
    "madeira": {
      "number": "1602",
      "isSimilar": false
    }
  },
  {
    "r": 190,
    "g": 192,
    "b": 168,
    "gamma": {
      "number": "3165",
      "isSimilar": false
    },
    "dmc": {
      "number": "524",
      "isSimilar": false
    },
    "anchor": {
      "number": "858",
      "isSimilar": false
    },
    "madeira": {
      "number": "1511",
      "isSimilar": false
    }
  },
  {
    "r": 165,
    "g": 168,
    "b": 136,
    "gamma": {
      "number": "3166",
      "isSimilar": false
    },
    "dmc": {
      "number": "523",
      "isSimilar": false
    },
    "anchor": {
      "number": "859",
      "isSimilar": false
    },
    "madeira": {
      "number": "1512",
      "isSimilar": true
    }
  },
  {
    "r": 137,
    "g": 151,
    "b": 112,
    "gamma": {
      "number": "3064",
      "isSimilar": false
    },
    "dmc": {
      "number": "3052",
      "isSimilar": false
    },
    "anchor": {
      "number": "859",
      "isSimilar": true
    },
    "madeira": {
      "number": "1513",
      "isSimilar": false
    }
  },
  {
    "r": 147,
    "g": 161,
    "b": 129,
    "gamma": {
      "number": "3065",
      "isSimilar": false
    },
    "dmc": {
      "number": "522",
      "isSimilar": false
    },
    "anchor": {
      "number": "860",
      "isSimilar": false
    },
    "madeira": {
      "number": "1512",
      "isSimilar": false
    }
  },
  {
    "r": 79,
    "g": 96,
    "b": 53,
    "gamma": {
      "number": "3167",
      "isSimilar": false
    },
    "dmc": {
      "number": "520",
      "isSimilar": false
    },
    "anchor": {
      "number": "861",
      "isSimilar": false
    },
    "madeira": {
      "number": "2603",
      "isSimilar": false
    }
  },
  {
    "r": 133,
    "g": 144,
    "b": 92,
    "gamma": {
      "number": "3168",
      "isSimilar": false
    },
    "dmc": {
      "number": "3364",
      "isSimilar": false
    },
    "anchor": {
      "number": "260",
      "isSimilar": true
    },
    "madeira": {
      "number": "1509",
      "isSimilar": false
    }
  },
  {
    "r": 109,
    "g": 111,
    "b": 66,
    "gamma": {
      "number": "0035",
      "isSimilar": false
    },
    "dmc": {
      "number": "3051",
      "isSimilar": false
    },
    "anchor": {
      "number": "681",
      "isSimilar": false
    },
    "madeira": {
      "number": "1508",
      "isSimilar": false
    }
  },
  {
    "r": 93,
    "g": 92,
    "b": 43,
    "gamma": {
      "number": "3162",
      "isSimilar": false
    },
    "dmc": {
      "number": "936",
      "isSimilar": false
    },
    "anchor": {
      "number": "846",
      "isSimilar": false
    },
    "madeira": {
      "number": "1505",
      "isSimilar": false
    }
  },
  {
    "r": 75,
    "g": 80,
    "b": 53,
    "gamma": {
      "number": "3163",
      "isSimilar": false
    },
    "dmc": {
      "number": "935",
      "isSimilar": false
    },
    "anchor": {
      "number": "861",
      "isSimilar": false
    },
    "madeira": {
      "number": "1508",
      "isSimilar": true
    }
  },
  {
    "r": 52,
    "g": 60,
    "b": 29,
    "gamma": {
      "number": "3164",
      "isSimilar": false
    },
    "dmc": {
      "number": "934",
      "isSimilar": false
    },
    "anchor": {
      "number": "862",
      "isSimilar": false
    },
    "madeira": {
      "number": "1506",
      "isSimilar": false
    }
  },
  {
    "r": 204,
    "g": 220,
    "b": 190,
    "gamma": {
      "number": "0715",
      "isSimilar": false
    },
    "dmc": {
      "number": "369",
      "isSimilar": false
    },
    "anchor": {
      "number": "1043",
      "isSimilar": false
    },
    "madeira": {
      "number": "1309",
      "isSimilar": true
    }
  },
  {
    "r": 145,
    "g": 171,
    "b": 132,
    "gamma": {
      "number": "0716",
      "isSimilar": false
    },
    "dmc": {
      "number": "368",
      "isSimilar": false
    },
    "anchor": {
      "number": "214",
      "isSimilar": false
    },
    "madeira": {
      "number": "1310",
      "isSimilar": false
    }
  },
  {
    "r": 118,
    "g": 153,
    "b": 108,
    "gamma": {
      "number": "0717",
      "isSimilar": false
    },
    "dmc": {
      "number": "988",
      "isSimilar": false
    },
    "anchor": {
      "number": "215",
      "isSimilar": false
    },
    "madeira": {
      "number": "1311",
      "isSimilar": false
    }
  },
  {
    "r": 86,
    "g": 131,
    "b": 87,
    "gamma": {
      "number": "0718",
      "isSimilar": false
    },
    "dmc": {
      "number": "987",
      "isSimilar": false
    },
    "anchor": {
      "number": "244",
      "isSimilar": false
    },
    "madeira": {
      "number": "1403",
      "isSimilar": false
    }
  },
  {
    "r": 76,
    "g": 112,
    "b": 71,
    "gamma": {
      "number": "0089",
      "isSimilar": false
    },
    "dmc": {
      "number": "367",
      "isSimilar": true
    },
    "anchor": {
      "number": "217",
      "isSimilar": false
    },
    "madeira": {
      "number": "1312",
      "isSimilar": false
    }
  },
  {
    "r": 62,
    "g": 90,
    "b": 47,
    "gamma": {
      "number": "0719",
      "isSimilar": false
    },
    "dmc": {
      "number": "319",
      "isSimilar": false
    },
    "anchor": {
      "number": "218",
      "isSimilar": false
    },
    "madeira": {
      "number": "1313",
      "isSimilar": false
    }
  },
  {
    "r": 41,
    "g": 84,
    "b": 47,
    "gamma": {
      "number": "0720",
      "isSimilar": false
    },
    "dmc": {
      "number": "895",
      "isSimilar": false
    },
    "anchor": {
      "number": "1044",
      "isSimilar": false
    },
    "madeira": {
      "number": "1314",
      "isSimilar": false
    }
  },
  {
    "r": 227,
    "g": 238,
    "b": 159,
    "gamma": {
      "number": "6115",
      "isSimilar": false
    },
    "dmc": {
      "number": "3348",
      "isSimilar": false
    },
    "anchor": {
      "number": "254",
      "isSimilar": false
    },
    "madeira": {
      "number": "1604",
      "isSimilar": false
    }
  },
  {
    "r": 179,
    "g": 200,
    "b": 89,
    "gamma": {
      "number": "0613",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "265",
      "isSimilar": false
    },
    "madeira": {
      "number": "1501",
      "isSimilar": false
    }
  },
  {
    "r": 120,
    "g": 152,
    "b": 59,
    "gamma": {
      "number": "0614",
      "isSimilar": false
    },
    "dmc": {
      "number": "3347",
      "isSimilar": false
    },
    "anchor": {
      "number": "266",
      "isSimilar": false
    },
    "madeira": {
      "number": "1408",
      "isSimilar": false
    }
  },
  {
    "r": 152,
    "g": 168,
    "b": 89,
    "gamma": {
      "number": "3161",
      "isSimilar": false
    },
    "dmc": {
      "number": "470",
      "isSimilar": false
    },
    "anchor": {
      "number": "267",
      "isSimilar": false
    },
    "madeira": {
      "number": "1502",
      "isSimilar": false
    }
  },
  {
    "r": 136,
    "g": 171,
    "b": 92,
    "gamma": {
      "number": "3153",
      "isSimilar": false
    },
    "dmc": {
      "number": "988",
      "isSimilar": false
    },
    "anchor": {
      "number": "243",
      "isSimilar": false
    },
    "madeira": {
      "number": "1402",
      "isSimilar": false
    }
  },
  {
    "r": 106,
    "g": 130,
    "b": 61,
    "gamma": {
      "number": "3155",
      "isSimilar": false
    },
    "dmc": {
      "number": "3346",
      "isSimilar": false
    },
    "anchor": {
      "number": "267",
      "isSimilar": false
    },
    "madeira": {
      "number": "1407",
      "isSimilar": false
    }
  },
  {
    "r": 72,
    "g": 97,
    "b": 49,
    "gamma": {
      "number": "3156",
      "isSimilar": false
    },
    "dmc": {
      "number": "3345",
      "isSimilar": false
    },
    "anchor": {
      "number": "268",
      "isSimilar": false
    },
    "madeira": {
      "number": "1406",
      "isSimilar": false
    }
  },
  {
    "r": 171,
    "g": 207,
    "b": 138,
    "gamma": {
      "number": "3252",
      "isSimilar": false
    },
    "dmc": {
      "number": "164",
      "isSimilar": false
    },
    "anchor": {
      "number": "240",
      "isSimilar": false
    },
    "madeira": {
      "number": "1209",
      "isSimilar": false
    }
  },
  {
    "r": 135,
    "g": 164,
    "b": 98,
    "gamma": {
      "number": "0033",
      "isSimilar": false
    },
    "dmc": {
      "number": "989",
      "isSimilar": false
    },
    "anchor": {
      "number": "242",
      "isSimilar": false
    },
    "madeira": {
      "number": "1401",
      "isSimilar": false
    }
  },
  {
    "r": 79,
    "g": 108,
    "b": 51,
    "gamma": {
      "number": "0029",
      "isSimilar": false
    },
    "dmc": {
      "number": "904",
      "isSimilar": false
    },
    "anchor": {
      "number": "258",
      "isSimilar": false
    },
    "madeira": {
      "number": "1413",
      "isSimilar": false
    }
  },
  {
    "r": 31,
    "g": 86,
    "b": 31,
    "gamma": {
      "number": "3154",
      "isSimilar": false
    },
    "dmc": {
      "number": "986",
      "isSimilar": false
    },
    "anchor": {
      "number": "246",
      "isSimilar": false
    },
    "madeira": {
      "number": "1312",
      "isSimilar": false
    }
  },
  {
    "r": 169,
    "g": 195,
    "b": 62,
    "gamma": {
      "number": "3159",
      "isSimilar": false
    },
    "dmc": {
      "number": "907",
      "isSimilar": false
    },
    "anchor": {
      "number": "255",
      "isSimilar": false
    },
    "madeira": {
      "number": "1410",
      "isSimilar": false
    }
  },
  {
    "r": 130,
    "g": 174,
    "b": 68,
    "gamma": {
      "number": "3160",
      "isSimilar": false
    },
    "dmc": {
      "number": "906",
      "isSimilar": false
    },
    "anchor": {
      "number": "256",
      "isSimilar": false
    },
    "madeira": {
      "number": "1411",
      "isSimilar": false
    }
  },
  {
    "r": 117,
    "g": 154,
    "b": 62,
    "gamma": {
      "number": "0030",
      "isSimilar": false
    },
    "dmc": {
      "number": "905",
      "isSimilar": true
    },
    "anchor": {
      "number": "257",
      "isSimilar": false
    },
    "madeira": {
      "number": "1412",
      "isSimilar": false
    }
  },
  {
    "r": 238,
    "g": 245,
    "b": 94,
    "gamma": {
      "number": "0206",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 186,
    "g": 215,
    "b": 101,
    "gamma": {
      "number": "0207",
      "isSimilar": false
    },
    "dmc": {
      "number": "704",
      "isSimilar": false
    },
    "anchor": {
      "number": "256",
      "isSimilar": false
    },
    "madeira": {
      "number": "1308",
      "isSimilar": false
    }
  },
  {
    "r": 140,
    "g": 188,
    "b": 92,
    "gamma": {
      "number": "3157",
      "isSimilar": false
    },
    "dmc": {
      "number": "703",
      "isSimilar": false
    },
    "anchor": {
      "number": "238",
      "isSimilar": false
    },
    "madeira": {
      "number": "1307",
      "isSimilar": false
    }
  },
  {
    "r": 112,
    "g": 177,
    "b": 69,
    "gamma": {
      "number": "0209",
      "isSimilar": false
    },
    "dmc": {
      "number": "703",
      "isSimilar": true
    },
    "anchor": {
      "number": "238",
      "isSimilar": false
    },
    "madeira": {
      "number": "1307",
      "isSimilar": false
    }
  },
  {
    "r": 80,
    "g": 163,
    "b": 72,
    "gamma": {
      "number": "0319",
      "isSimilar": false
    },
    "dmc": {
      "number": "702",
      "isSimilar": true
    },
    "anchor": {
      "number": "226",
      "isSimilar": false
    },
    "madeira": {
      "number": "1306",
      "isSimilar": false
    }
  },
  {
    "r": 62,
    "g": 151,
    "b": 48,
    "gamma": {
      "number": "0210",
      "isSimilar": false
    },
    "dmc": {
      "number": "702",
      "isSimilar": false
    },
    "anchor": {
      "number": "226",
      "isSimilar": false
    },
    "madeira": {
      "number": "1306",
      "isSimilar": false
    }
  },
  {
    "r": 62,
    "g": 125,
    "b": 69,
    "gamma": {
      "number": "0212",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 45,
    "g": 95,
    "b": 58,
    "gamma": {
      "number": "0213",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "246",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 1,
    "g": 87,
    "b": 49,
    "gamma": {
      "number": "3158",
      "isSimilar": false
    },
    "dmc": {
      "number": "699",
      "isSimilar": false
    },
    "anchor": {
      "number": "923",
      "isSimilar": false
    },
    "madeira": {
      "number": "2704",
      "isSimilar": false
    }
  },
  {
    "r": 243,
    "g": 246,
    "b": 212,
    "gamma": {
      "number": "0500",
      "isSimilar": false
    },
    "dmc": {
      "number": "772",
      "isSimilar": false
    },
    "anchor": {
      "number": "259",
      "isSimilar": false
    },
    "madeira": {
      "number": "1604",
      "isSimilar": false
    }
  },
  {
    "r": 217,
    "g": 232,
    "b": 169,
    "gamma": {
      "number": "0501",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 171,
    "g": 213,
    "b": 139,
    "gamma": {
      "number": "0502",
      "isSimilar": false
    },
    "dmc": {
      "number": "954",
      "isSimilar": true
    },
    "anchor": {
      "number": "241",
      "isSimilar": false
    },
    "madeira": {
      "number": "1211",
      "isSimilar": false
    }
  },
  {
    "r": 155,
    "g": 211,
    "b": 144,
    "gamma": {
      "number": "0316",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "241",
      "isSimilar": false
    },
    "madeira": {
      "number": "1307",
      "isSimilar": true
    }
  },
  {
    "r": 64,
    "g": 167,
    "b": 86,
    "gamma": {
      "number": "0015",
      "isSimilar": false
    },
    "dmc": {
      "number": "911",
      "isSimilar": true
    },
    "anchor": {
      "number": "205",
      "isSimilar": false
    },
    "madeira": {
      "number": "1214",
      "isSimilar": false
    }
  },
  {
    "r": 46,
    "g": 145,
    "b": 72,
    "gamma": {
      "number": "0014",
      "isSimilar": false
    },
    "dmc": {
      "number": "700",
      "isSimilar": false
    },
    "anchor": {
      "number": "288",
      "isSimilar": false
    },
    "madeira": {
      "number": "1304",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 122,
    "b": 63,
    "gamma": {
      "number": "0321",
      "isSimilar": false
    },
    "dmc": {
      "number": "701",
      "isSimilar": false
    },
    "anchor": {
      "number": "227",
      "isSimilar": false
    },
    "madeira": {
      "number": "1305",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 121,
    "b": 59,
    "gamma": {
      "number": "0013",
      "isSimilar": false
    },
    "dmc": {
      "number": "909",
      "isSimilar": false
    },
    "anchor": {
      "number": "230",
      "isSimilar": false
    },
    "madeira": {
      "number": "1302",
      "isSimilar": false
    }
  },
  {
    "r": 150,
    "g": 197,
    "b": 157,
    "gamma": {
      "number": "0411",
      "isSimilar": false
    },
    "dmc": {
      "number": "3815",
      "isSimilar": false
    },
    "anchor": {
      "number": "877",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 110,
    "g": 138,
    "b": 105,
    "gamma": {
      "number": "3151",
      "isSimilar": false
    },
    "dmc": {
      "number": "320",
      "isSimilar": false
    },
    "anchor": {
      "number": "215",
      "isSimilar": false
    },
    "madeira": {
      "number": "1311",
      "isSimilar": false
    }
  },
  {
    "r": 4,
    "g": 56,
    "b": 16,
    "gamma": {
      "number": "3152",
      "isSimilar": false
    },
    "dmc": {
      "number": "890",
      "isSimilar": false
    },
    "anchor": {
      "number": "218",
      "isSimilar": true
    },
    "madeira": {
      "number": "1314",
      "isSimilar": false
    }
  },
  {
    "r": 180,
    "g": 232,
    "b": 179,
    "gamma": {
      "number": "3147",
      "isSimilar": false
    },
    "dmc": {
      "number": "955",
      "isSimilar": false
    },
    "anchor": {
      "number": "206",
      "isSimilar": false
    },
    "madeira": {
      "number": "1210",
      "isSimilar": false
    }
  },
  {
    "r": 136,
    "g": 199,
    "b": 141,
    "gamma": {
      "number": "3148",
      "isSimilar": false
    },
    "dmc": {
      "number": "913",
      "isSimilar": false
    },
    "anchor": {
      "number": "204",
      "isSimilar": false
    },
    "madeira": {
      "number": "1212",
      "isSimilar": false
    }
  },
  {
    "r": 88,
    "g": 169,
    "b": 107,
    "gamma": {
      "number": "0504",
      "isSimilar": false
    },
    "dmc": {
      "number": "912",
      "isSimilar": false
    },
    "anchor": {
      "number": "209",
      "isSimilar": true
    },
    "madeira": {
      "number": "1213",
      "isSimilar": true
    }
  },
  {
    "r": 0,
    "g": 140,
    "b": 76,
    "gamma": {
      "number": "0088",
      "isSimilar": false
    },
    "dmc": {
      "number": "910",
      "isSimilar": false
    },
    "anchor": {
      "number": "229",
      "isSimilar": false
    },
    "madeira": {
      "number": "1301",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 124,
    "b": 61,
    "gamma": {
      "number": "0414",
      "isSimilar": false
    },
    "dmc": {
      "number": "3818",
      "isSimilar": true
    },
    "anchor": {
      "number": "211",
      "isSimilar": false
    },
    "madeira": {
      "number": "1205",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 93,
    "b": 46,
    "gamma": {
      "number": "3149",
      "isSimilar": false
    },
    "dmc": {
      "number": "3818",
      "isSimilar": false
    },
    "anchor": {
      "number": "923",
      "isSimilar": false
    },
    "madeira": {
      "number": "2704",
      "isSimilar": false
    }
  },
  {
    "r": 187,
    "g": 215,
    "b": 174,
    "gamma": {
      "number": "3150",
      "isSimilar": false
    },
    "dmc": {
      "number": "966",
      "isSimilar": false
    },
    "anchor": {
      "number": "206",
      "isSimilar": false
    },
    "madeira": {
      "number": "1209",
      "isSimilar": false
    }
  },
  {
    "r": 184,
    "g": 206,
    "b": 166,
    "gamma": {
      "number": "4105",
      "isSimilar": false
    },
    "dmc": {
      "number": "966",
      "isSimilar": true
    },
    "anchor": {
      "number": "240",
      "isSimilar": false
    },
    "madeira": {
      "number": "1209",
      "isSimilar": false
    }
  },
  {
    "r": 162,
    "g": 204,
    "b": 170,
    "gamma": {
      "number": "3140",
      "isSimilar": false
    },
    "dmc": {
      "number": "563",
      "isSimilar": false
    },
    "anchor": {
      "number": "208",
      "isSimilar": false
    },
    "madeira": {
      "number": "1207",
      "isSimilar": false
    }
  },
  {
    "r": 100,
    "g": 154,
    "b": 115,
    "gamma": {
      "number": "3141",
      "isSimilar": false
    },
    "dmc": {
      "number": "562",
      "isSimilar": false
    },
    "anchor": {
      "number": "216",
      "isSimilar": false
    },
    "madeira": {
      "number": "1206",
      "isSimilar": true
    }
  },
  {
    "r": 74,
    "g": 128,
    "b": 91,
    "gamma": {
      "number": "3246",
      "isSimilar": false
    },
    "dmc": {
      "number": "505",
      "isSimilar": false
    },
    "anchor": {
      "number": "210",
      "isSimilar": false
    },
    "madeira": {
      "number": "1205",
      "isSimilar": false
    }
  },
  {
    "r": 184,
    "g": 206,
    "b": 190,
    "gamma": {
      "number": "3144",
      "isSimilar": false
    },
    "dmc": {
      "number": "3813",
      "isSimilar": false
    },
    "anchor": {
      "number": "875",
      "isSimilar": false
    },
    "madeira": {
      "number": "1101",
      "isSimilar": true
    }
  },
  {
    "r": 121,
    "g": 154,
    "b": 131,
    "gamma": {
      "number": "3145",
      "isSimilar": false
    },
    "dmc": {
      "number": "502",
      "isSimilar": false
    },
    "anchor": {
      "number": "877",
      "isSimilar": true
    },
    "madeira": {
      "number": "1703",
      "isSimilar": false
    }
  },
  {
    "r": 166,
    "g": 197,
    "b": 180,
    "gamma": {
      "number": "3061",
      "isSimilar": false
    },
    "dmc": {
      "number": "3817",
      "isSimilar": false
    },
    "anchor": {
      "number": "875",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 105,
    "g": 157,
    "b": 133,
    "gamma": {
      "number": "3062",
      "isSimilar": false
    },
    "dmc": {
      "number": "3816",
      "isSimilar": false
    },
    "anchor": {
      "number": "876",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 89,
    "g": 137,
    "b": 111,
    "gamma": {
      "number": "3063",
      "isSimilar": false
    },
    "dmc": {
      "number": "163",
      "isSimilar": false
    },
    "anchor": {
      "number": "216",
      "isSimilar": true
    },
    "madeira": {
      "number": "1703",
      "isSimilar": false
    }
  },
  {
    "r": 76,
    "g": 124,
    "b": 96,
    "gamma": {
      "number": "3143",
      "isSimilar": false
    },
    "dmc": {
      "number": "3815",
      "isSimilar": false
    },
    "anchor": {
      "number": "877",
      "isSimilar": false
    },
    "madeira": {
      "number": "1703",
      "isSimilar": true
    }
  },
  {
    "r": 47,
    "g": 100,
    "b": 75,
    "gamma": {
      "number": "3142",
      "isSimilar": false
    },
    "dmc": {
      "number": "561",
      "isSimilar": false
    },
    "anchor": {
      "number": "878",
      "isSimilar": false
    },
    "madeira": {
      "number": "1205",
      "isSimilar": true
    }
  },
  {
    "r": 209,
    "g": 226,
    "b": 215,
    "gamma": {
      "number": "0953",
      "isSimilar": false
    },
    "dmc": {
      "number": "504",
      "isSimilar": true
    },
    "anchor": {
      "number": "206",
      "isSimilar": true
    },
    "madeira": {
      "number": "1101",
      "isSimilar": false
    }
  },
  {
    "r": 142,
    "g": 190,
    "b": 169,
    "gamma": {
      "number": "0954",
      "isSimilar": false
    },
    "dmc": {
      "number": "503",
      "isSimilar": false
    },
    "anchor": {
      "number": "876",
      "isSimilar": false
    },
    "madeira": {
      "number": "1702",
      "isSimilar": true
    }
  },
  {
    "r": 72,
    "g": 130,
    "b": 105,
    "gamma": {
      "number": "0956",
      "isSimilar": false
    },
    "dmc": {
      "number": "163",
      "isSimilar": false
    },
    "anchor": {
      "number": "878",
      "isSimilar": false
    },
    "madeira": {
      "number": "1703",
      "isSimilar": false
    }
  },
  {
    "r": 73,
    "g": 111,
    "b": 92,
    "gamma": {
      "number": "0957",
      "isSimilar": false
    },
    "dmc": {
      "number": "501",
      "isSimilar": false
    },
    "anchor": {
      "number": "217",
      "isSimilar": false
    },
    "madeira": {
      "number": "1704",
      "isSimilar": false
    }
  },
  {
    "r": 68,
    "g": 104,
    "b": 78,
    "gamma": {
      "number": "0958",
      "isSimilar": false
    },
    "dmc": {
      "number": "561",
      "isSimilar": false
    },
    "anchor": {
      "number": "18",
      "isSimilar": true
    },
    "madeira": {
      "number": "1704",
      "isSimilar": true
    }
  },
  {
    "r": 20,
    "g": 54,
    "b": 30,
    "gamma": {
      "number": "0960",
      "isSimilar": false
    },
    "dmc": {
      "number": "500",
      "isSimilar": false
    },
    "anchor": {
      "number": "879",
      "isSimilar": false
    },
    "madeira": {
      "number": "1705",
      "isSimilar": false
    }
  },
  {
    "r": 142,
    "g": 194,
    "b": 179,
    "gamma": {
      "number": "3137",
      "isSimilar": false
    },
    "dmc": {
      "number": "993",
      "isSimilar": false
    },
    "anchor": {
      "number": "1070",
      "isSimilar": false
    },
    "madeira": {
      "number": "1201",
      "isSimilar": true
    }
  },
  {
    "r": 108,
    "g": 191,
    "b": 168,
    "gamma": {
      "number": "3060",
      "isSimilar": false
    },
    "dmc": {
      "number": "992",
      "isSimilar": false
    },
    "anchor": {
      "number": "1072",
      "isSimilar": false
    },
    "madeira": {
      "number": "1201",
      "isSimilar": false
    }
  },
  {
    "r": 63,
    "g": 136,
    "b": 120,
    "gamma": {
      "number": "3138",
      "isSimilar": false
    },
    "dmc": {
      "number": "3814",
      "isSimilar": false
    },
    "anchor": {
      "number": "1074",
      "isSimilar": false
    },
    "madeira": {
      "number": "1203",
      "isSimilar": true
    }
  },
  {
    "r": 23,
    "g": 106,
    "b": 89,
    "gamma": {
      "number": "3139",
      "isSimilar": false
    },
    "dmc": {
      "number": "991",
      "isSimilar": false
    },
    "anchor": {
      "number": "1076",
      "isSimilar": false
    },
    "madeira": {
      "number": "1204",
      "isSimilar": false
    }
  },
  {
    "r": 86,
    "g": 182,
    "b": 156,
    "gamma": {
      "number": "3134",
      "isSimilar": false
    },
    "dmc": {
      "number": "3851",
      "isSimilar": false
    },
    "anchor": {
      "number": "187",
      "isSimilar": true
    },
    "madeira": {
      "number": "1202",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 154,
    "b": 123,
    "gamma": {
      "number": "3135",
      "isSimilar": false
    },
    "dmc": {
      "number": "943",
      "isSimilar": false
    },
    "anchor": {
      "number": "188",
      "isSimilar": true
    },
    "madeira": {
      "number": "1203",
      "isSimilar": true
    }
  },
  {
    "r": 8,
    "g": 146,
    "b": 111,
    "gamma": {
      "number": "3136",
      "isSimilar": false
    },
    "dmc": {
      "number": "3850",
      "isSimilar": false
    },
    "anchor": {
      "number": "189",
      "isSimilar": true
    },
    "madeira": {
      "number": "1203",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 118,
    "b": 92,
    "gamma": {
      "number": "0506",
      "isSimilar": false
    },
    "dmc": {
      "number": "991",
      "isSimilar": true
    },
    "anchor": {
      "number": "1104",
      "isSimilar": false
    },
    "madeira": {
      "number": "1204",
      "isSimilar": false
    }
  },
  {
    "r": 202,
    "g": 232,
    "b": 222,
    "gamma": {
      "number": "6035",
      "isSimilar": false
    },
    "dmc": {
      "number": "3811",
      "isSimilar": true
    },
    "anchor": {
      "number": "1092",
      "isSimilar": false
    },
    "madeira": {
      "number": "1101",
      "isSimilar": true
    }
  },
  {
    "r": 156,
    "g": 211,
    "b": 204,
    "gamma": {
      "number": "3132",
      "isSimilar": false
    },
    "dmc": {
      "number": "964",
      "isSimilar": false
    },
    "anchor": {
      "number": "185",
      "isSimilar": false
    },
    "madeira": {
      "number": "1112",
      "isSimilar": false
    }
  },
  {
    "r": 143,
    "g": 211,
    "b": 212,
    "gamma": {
      "number": "0605",
      "isSimilar": false
    },
    "dmc": {
      "number": "959",
      "isSimilar": false
    },
    "anchor": {
      "number": "186",
      "isSimilar": false
    },
    "madeira": {
      "number": "1113",
      "isSimilar": false
    }
  },
  {
    "r": 81,
    "g": 192,
    "b": 187,
    "gamma": {
      "number": "0606",
      "isSimilar": false
    },
    "dmc": {
      "number": "958",
      "isSimilar": false
    },
    "anchor": {
      "number": "187",
      "isSimilar": false
    },
    "madeira": {
      "number": "1114",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 134,
    "b": 121,
    "gamma": {
      "number": "3133",
      "isSimilar": false
    },
    "dmc": {
      "number": "3812",
      "isSimilar": false
    },
    "anchor": {
      "number": "188",
      "isSimilar": false
    },
    "madeira": {
      "number": "2706",
      "isSimilar": false
    }
  },
  {
    "r": 110,
    "g": 178,
    "b": 167,
    "gamma": {
      "number": "3058",
      "isSimilar": false
    },
    "dmc": {
      "number": "3849",
      "isSimilar": false
    },
    "anchor": {
      "number": "1070",
      "isSimilar": false
    },
    "madeira": {
      "number": "1111",
      "isSimilar": false
    }
  },
  {
    "r": 66,
    "g": 145,
    "b": 127,
    "gamma": {
      "number": "3059",
      "isSimilar": false
    },
    "dmc": {
      "number": "3848",
      "isSimilar": false
    },
    "anchor": {
      "number": "1074",
      "isSimilar": false
    },
    "madeira": {
      "number": "1109",
      "isSimilar": false
    }
  },
  {
    "r": 2,
    "g": 128,
    "b": 99,
    "gamma": {
      "number": "6075",
      "isSimilar": false
    },
    "dmc": {
      "number": "3812",
      "isSimilar": true
    },
    "anchor": {
      "number": "189",
      "isSimilar": false
    },
    "madeira": {
      "number": "2705",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 96,
    "b": 78,
    "gamma": {
      "number": "3131",
      "isSimilar": false
    },
    "dmc": {
      "number": "3847",
      "isSimilar": false
    },
    "anchor": {
      "number": "1076",
      "isSimilar": false
    },
    "madeira": {
      "number": "2507",
      "isSimilar": true
    }
  },
  {
    "r": 211,
    "g": 233,
    "b": 231,
    "gamma": {
      "number": "0852",
      "isSimilar": false
    },
    "dmc": {
      "number": "747",
      "isSimilar": false
    },
    "anchor": {
      "number": "158",
      "isSimilar": false
    },
    "madeira": {
      "number": "1104",
      "isSimilar": false
    }
  },
  {
    "r": 196,
    "g": 231,
    "b": 232,
    "gamma": {
      "number": "0853",
      "isSimilar": false
    },
    "dmc": {
      "number": "3811",
      "isSimilar": false
    },
    "anchor": {
      "number": "1060",
      "isSimilar": false
    },
    "madeira": {
      "number": "1101",
      "isSimilar": false
    }
  },
  {
    "r": 165,
    "g": 219,
    "b": 222,
    "gamma": {
      "number": "0854",
      "isSimilar": false
    },
    "dmc": {
      "number": "598",
      "isSimilar": true
    },
    "anchor": {
      "number": "167",
      "isSimilar": false
    },
    "madeira": {
      "number": "1014",
      "isSimilar": true
    }
  },
  {
    "r": 124,
    "g": 190,
    "b": 198,
    "gamma": {
      "number": "0855",
      "isSimilar": false
    },
    "dmc": {
      "number": "3766",
      "isSimilar": false
    },
    "anchor": {
      "number": "167",
      "isSimilar": false
    },
    "madeira": {
      "number": "1109",
      "isSimilar": false
    }
  },
  {
    "r": 79,
    "g": 161,
    "b": 169,
    "gamma": {
      "number": "0856",
      "isSimilar": false
    },
    "dmc": {
      "number": "3810",
      "isSimilar": false
    },
    "anchor": {
      "number": "168",
      "isSimilar": false
    },
    "madeira": {
      "number": "1108",
      "isSimilar": false
    }
  },
  {
    "r": 28,
    "g": 134,
    "b": 155,
    "gamma": {
      "number": "0857",
      "isSimilar": false
    },
    "dmc": {
      "number": "3809",
      "isSimilar": false
    },
    "anchor": {
      "number": "1066",
      "isSimilar": false
    },
    "madeira": {
      "number": "2506",
      "isSimilar": false
    }
  },
  {
    "r": 3,
    "g": 106,
    "b": 120,
    "gamma": {
      "number": "0858",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "2507",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 88,
    "b": 104,
    "gamma": {
      "number": "0859",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 12,
    "g": 70,
    "b": 75,
    "gamma": {
      "number": "0860",
      "isSimilar": false
    },
    "dmc": {
      "number": "3808",
      "isSimilar": false
    },
    "anchor": {
      "number": "1068",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 180,
    "g": 213,
    "b": 212,
    "gamma": {
      "number": "3130",
      "isSimilar": false
    },
    "dmc": {
      "number": "598",
      "isSimilar": false
    },
    "anchor": {
      "number": "1062",
      "isSimilar": false
    },
    "madeira": {
      "number": "1111",
      "isSimilar": false
    }
  },
  {
    "r": 127,
    "g": 181,
    "b": 192,
    "gamma": {
      "number": "3056",
      "isSimilar": false
    },
    "dmc": {
      "number": "597",
      "isSimilar": false
    },
    "anchor": {
      "number": "1064",
      "isSimilar": false
    },
    "madeira": {
      "number": "1110",
      "isSimilar": true
    }
  },
  {
    "r": 112,
    "g": 168,
    "b": 179,
    "gamma": {
      "number": "3127",
      "isSimilar": false
    },
    "dmc": {
      "number": "807",
      "isSimilar": false
    },
    "anchor": {
      "number": "168",
      "isSimilar": false
    },
    "madeira": {
      "number": "1105",
      "isSimilar": false
    }
  },
  {
    "r": 68,
    "g": 146,
    "b": 157,
    "gamma": {
      "number": "3057",
      "isSimilar": false
    },
    "dmc": {
      "number": "3810",
      "isSimilar": false
    },
    "anchor": {
      "number": "1068",
      "isSimilar": true
    },
    "madeira": {
      "number": "1108",
      "isSimilar": true
    }
  },
  {
    "r": 41,
    "g": 110,
    "b": 135,
    "gamma": {
      "number": "3129",
      "isSimilar": false
    },
    "dmc": {
      "number": "3765",
      "isSimilar": false
    },
    "anchor": {
      "number": "169",
      "isSimilar": false
    },
    "madeira": {
      "number": "2506",
      "isSimilar": true
    }
  },
  {
    "r": 202,
    "g": 226,
    "b": 235,
    "gamma": {
      "number": "3053",
      "isSimilar": false
    },
    "dmc": {
      "number": "828",
      "isSimilar": false
    },
    "anchor": {
      "number": "9159",
      "isSimilar": false
    },
    "madeira": {
      "number": "1101",
      "isSimilar": false
    }
  },
  {
    "r": 184,
    "g": 218,
    "b": 233,
    "gamma": {
      "number": "3124",
      "isSimilar": false
    },
    "dmc": {
      "number": "3761",
      "isSimilar": false
    },
    "anchor": {
      "number": "928",
      "isSimilar": false
    },
    "madeira": {
      "number": "1014",
      "isSimilar": true
    }
  },
  {
    "r": 168,
    "g": 198,
    "b": 216,
    "gamma": {
      "number": "3054",
      "isSimilar": false
    },
    "dmc": {
      "number": "519",
      "isSimilar": false
    },
    "anchor": {
      "number": "1038",
      "isSimilar": false
    },
    "madeira": {
      "number": "1002",
      "isSimilar": false
    }
  },
  {
    "r": 107,
    "g": 156,
    "b": 185,
    "gamma": {
      "number": "3055",
      "isSimilar": false
    },
    "dmc": {
      "number": "518",
      "isSimilar": false
    },
    "anchor": {
      "number": "1039",
      "isSimilar": false
    },
    "madeira": {
      "number": "1106",
      "isSimilar": false
    }
  },
  {
    "r": 79,
    "g": 129,
    "b": 157,
    "gamma": {
      "number": "3125",
      "isSimilar": false
    },
    "dmc": {
      "number": "3760",
      "isSimilar": false
    },
    "anchor": {
      "number": "977",
      "isSimilar": false
    },
    "madeira": {
      "number": "1107",
      "isSimilar": false
    }
  },
  {
    "r": 67,
    "g": 116,
    "b": 144,
    "gamma": {
      "number": "3128",
      "isSimilar": false
    },
    "dmc": {
      "number": "806",
      "isSimilar": false
    },
    "anchor": {
      "number": "978",
      "isSimilar": false
    },
    "madeira": {
      "number": "1107",
      "isSimilar": false
    }
  },
  {
    "r": 99,
    "g": 211,
    "b": 225,
    "gamma": {
      "number": "3123",
      "isSimilar": false
    },
    "dmc": {
      "number": "3846",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 1,
    "g": 203,
    "b": 236,
    "gamma": {
      "number": "0087",
      "isSimilar": false
    },
    "dmc": {
      "number": "3845",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 4,
    "g": 172,
    "b": 206,
    "gamma": {
      "number": "0085",
      "isSimilar": false
    },
    "dmc": {
      "number": "3844",
      "isSimilar": false
    },
    "anchor": {
      "number": "410",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 87,
    "g": 186,
    "b": 245,
    "gamma": {
      "number": "3121",
      "isSimilar": false
    },
    "dmc": {
      "number": "996",
      "isSimilar": false
    },
    "anchor": {
      "number": "1090",
      "isSimilar": false
    },
    "madeira": {
      "number": "1103",
      "isSimilar": false
    }
  },
  {
    "r": 0,
    "g": 149,
    "b": 211,
    "gamma": {
      "number": "3122",
      "isSimilar": false
    },
    "dmc": {
      "number": "3843",
      "isSimilar": false
    },
    "anchor": {
      "number": "433",
      "isSimilar": false
    },
    "madeira": {
      "number": "1103",
      "isSimilar": true
    }
  },
  {
    "r": 0,
    "g": 100,
    "b": 176,
    "gamma": {
      "number": "0086",
      "isSimilar": false
    },
    "dmc": {
      "number": "995",
      "isSimilar": false
    },
    "anchor": {
      "number": "410",
      "isSimilar": false
    },
    "madeira": {
      "number": "1102",
      "isSimilar": false
    }
  },
  {
    "r": 207,
    "g": 229,
    "b": 240,
    "gamma": {
      "number": "3243",
      "isSimilar": false
    },
    "dmc": {
      "number": "162",
      "isSimilar": false
    },
    "anchor": {
      "number": "160",
      "isSimilar": false
    },
    "madeira": {
      "number": "908",
      "isSimilar": false
    }
  },
  {
    "r": 180,
    "g": 211,
    "b": 227,
    "gamma": {
      "number": "3115",
      "isSimilar": false
    },
    "dmc": {
      "number": "827",
      "isSimilar": false
    },
    "anchor": {
      "number": "159",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 145,
    "g": 180,
    "b": 206,
    "gamma": {
      "number": "3116",
      "isSimilar": false
    },
    "dmc": {
      "number": "813",
      "isSimilar": false
    },
    "anchor": {
      "number": "977",
      "isSimilar": false
    },
    "madeira": {
      "number": "1711",
      "isSimilar": false
    }
  },
  {
    "r": 90,
    "g": 130,
    "b": 162,
    "gamma": {
      "number": "0512",
      "isSimilar": false
    },
    "dmc": {
      "number": "826",
      "isSimilar": false
    },
    "anchor": {
      "number": "978",
      "isSimilar": true
    },
    "madeira": {
      "number": "1012",
      "isSimilar": false
    }
  },
  {
    "r": 22,
    "g": 109,
    "b": 146,
    "gamma": {
      "number": "0513",
      "isSimilar": false
    },
    "dmc": {
      "number": "517",
      "isSimilar": false
    },
    "anchor": {
      "number": "162",
      "isSimilar": false
    },
    "madeira": {
      "number": "1107",
      "isSimilar": false
    }
  },
  {
    "r": 18,
    "g": 85,
    "b": 126,
    "gamma": {
      "number": "3126",
      "isSimilar": false
    },
    "dmc": {
      "number": "3842",
      "isSimilar": false
    },
    "anchor": {
      "number": "164",
      "isSimilar": false
    },
    "madeira": {
      "number": "1010",
      "isSimilar": false
    }
  },
  {
    "r": 18,
    "g": 68,
    "b": 119,
    "gamma": {
      "number": "5135",
      "isSimilar": false
    },
    "dmc": {
      "number": "824",
      "isSimilar": true
    },
    "anchor": {
      "number": "148",
      "isSimilar": false
    },
    "madeira": {
      "number": "1010",
      "isSimilar": false
    }
  },
  {
    "r": 25,
    "g": 68,
    "b": 101,
    "gamma": {
      "number": "3119",
      "isSimilar": false
    },
    "dmc": {
      "number": "311",
      "isSimilar": false
    },
    "anchor": {
      "number": "148",
      "isSimilar": false
    },
    "madeira": {
      "number": "1006",
      "isSimilar": false
    }
  },
  {
    "r": 203,
    "g": 221,
    "b": 231,
    "gamma": {
      "number": "0301",
      "isSimilar": false
    },
    "dmc": {
      "number": "3841",
      "isSimilar": false
    },
    "anchor": {
      "number": "9159",
      "isSimilar": false
    },
    "madeira": {
      "number": "1001",
      "isSimilar": false
    }
  },
  {
    "r": 193,
    "g": 211,
    "b": 223,
    "gamma": {
      "number": "0027",
      "isSimilar": false
    },
    "dmc": {
      "number": "800",
      "isSimilar": true
    },
    "anchor": {
      "number": "144",
      "isSimilar": false
    },
    "madeira": {
      "number": "908",
      "isSimilar": false
    }
  },
  {
    "r": 198,
    "g": 211,
    "b": 225,
    "gamma": {
      "number": "3051",
      "isSimilar": false
    },
    "dmc": {
      "number": "3325",
      "isSimilar": false
    },
    "anchor": {
      "number": "129",
      "isSimilar": true
    },
    "madeira": {
      "number": "909",
      "isSimilar": true
    }
  },
  {
    "r": 159,
    "g": 187,
    "b": 213,
    "gamma": {
      "number": "3117",
      "isSimilar": false
    },
    "dmc": {
      "number": "3755",
      "isSimilar": false
    },
    "anchor": {
      "number": "140",
      "isSimilar": false
    },
    "madeira": {
      "number": "909",
      "isSimilar": true
    }
  },
  {
    "r": 120,
    "g": 155,
    "b": 192,
    "gamma": {
      "number": "3113",
      "isSimilar": false
    },
    "dmc": {
      "number": "799",
      "isSimilar": false
    },
    "anchor": {
      "number": "145",
      "isSimilar": false
    },
    "madeira": {
      "number": "910",
      "isSimilar": false
    }
  },
  {
    "r": 110,
    "g": 141,
    "b": 181,
    "gamma": {
      "number": "0005",
      "isSimilar": false
    },
    "dmc": {
      "number": "799",
      "isSimilar": false
    },
    "anchor": {
      "number": "145",
      "isSimilar": false
    },
    "madeira": {
      "number": "910",
      "isSimilar": false
    }
  },
  {
    "r": 54,
    "g": 99,
    "b": 144,
    "gamma": {
      "number": "0084",
      "isSimilar": false
    },
    "dmc": {
      "number": "825",
      "isSimilar": false
    },
    "anchor": {
      "number": "146",
      "isSimilar": false
    },
    "madeira": {
      "number": "1011",
      "isSimilar": false
    }
  },
  {
    "r": 60,
    "g": 87,
    "b": 128,
    "gamma": {
      "number": "0003",
      "isSimilar": false
    },
    "dmc": {
      "number": "824",
      "isSimilar": false
    },
    "anchor": {
      "number": "164",
      "isSimilar": false
    },
    "madeira": {
      "number": "1010",
      "isSimilar": false
    }
  },
  {
    "r": 45,
    "g": 66,
    "b": 107,
    "gamma": {
      "number": "3118",
      "isSimilar": false
    },
    "dmc": {
      "number": "312",
      "isSimilar": false
    },
    "anchor": {
      "number": "979",
      "isSimilar": false
    },
    "madeira": {
      "number": "1005",
      "isSimilar": false
    }
  },
  {
    "r": 12,
    "g": 18,
    "b": 37,
    "gamma": {
      "number": "0026",
      "isSimilar": false
    },
    "dmc": {
      "number": "336",
      "isSimilar": false
    },
    "anchor": {
      "number": "150",
      "isSimilar": false
    },
    "madeira": {
      "number": "1007",
      "isSimilar": false
    }
  },
  {
    "r": 200,
    "g": 210,
    "b": 230,
    "gamma": {
      "number": "3239",
      "isSimilar": false
    },
    "dmc": {
      "number": "157",
      "isSimilar": false
    },
    "anchor": {
      "number": "120",
      "isSimilar": false
    },
    "madeira": {
      "number": "907",
      "isSimilar": true
    }
  },
  {
    "r": 193,
    "g": 212,
    "b": 236,
    "gamma": {
      "number": "0302",
      "isSimilar": false
    },
    "dmc": {
      "number": "3840",
      "isSimilar": false
    },
    "anchor": {
      "number": "117",
      "isSimilar": false
    },
    "madeira": {
      "number": "907",
      "isSimilar": false
    }
  },
  {
    "r": 142,
    "g": 167,
    "b": 192,
    "gamma": {
      "number": "0023",
      "isSimilar": false
    },
    "dmc": {
      "number": "794",
      "isSimilar": false
    },
    "anchor": {
      "number": "175",
      "isSimilar": false
    },
    "madeira": {
      "number": "0907",
      "isSimilar": false
    }
  },
  {
    "r": 100,
    "g": 126,
    "b": 157,
    "gamma": {
      "number": "3052",
      "isSimilar": false
    },
    "dmc": {
      "number": "322",
      "isSimilar": false
    },
    "anchor": {
      "number": "978",
      "isSimilar": false
    },
    "madeira": {
      "number": "1004",
      "isSimilar": false
    }
  },
  {
    "r": 7,
    "g": 53,
    "b": 99,
    "gamma": {
      "number": "0759",
      "isSimilar": false
    },
    "dmc": {
      "number": "3807",
      "isSimilar": false
    },
    "anchor": {
      "number": "122",
      "isSimilar": false
    },
    "madeira": {
      "number": "2702",
      "isSimilar": false
    }
  },
  {
    "r": 2,
    "g": 16,
    "b": 28,
    "gamma": {
      "number": "3120",
      "isSimilar": false
    },
    "dmc": {
      "number": "939",
      "isSimilar": false
    },
    "anchor": {
      "number": "152",
      "isSimilar": false
    },
    "madeira": {
      "number": "1009",
      "isSimilar": false
    }
  },
  {
    "r": 108,
    "g": 145,
    "b": 192,
    "gamma": {
      "number": "0304",
      "isSimilar": false
    },
    "dmc": {
      "number": "809",
      "isSimilar": false
    },
    "anchor": {
      "number": "130",
      "isSimilar": false
    },
    "madeira": {
      "number": "909",
      "isSimilar": false
    }
  },
  {
    "r": 68,
    "g": 89,
    "b": 151,
    "gamma": {
      "number": "0082",
      "isSimilar": false
    },
    "dmc": {
      "number": "798",
      "isSimilar": false
    },
    "anchor": {
      "number": "131",
      "isSimilar": false
    },
    "madeira": {
      "number": "911",
      "isSimilar": false
    }
  },
  {
    "r": 44,
    "g": 65,
    "b": 128,
    "gamma": {
      "number": "0306",
      "isSimilar": false
    },
    "dmc": {
      "number": "797",
      "isSimilar": false
    },
    "anchor": {
      "number": "147",
      "isSimilar": false
    },
    "madeira": {
      "number": "912",
      "isSimilar": true
    }
  },
  {
    "r": 25,
    "g": 15,
    "b": 96,
    "gamma": {
      "number": "3114",
      "isSimilar": false
    },
    "dmc": {
      "number": "820",
      "isSimilar": false
    },
    "anchor": {
      "number": "134",
      "isSimilar": false
    },
    "madeira": {
      "number": "904",
      "isSimilar": false
    }
  },
  {
    "r": 69,
    "g": 63,
    "b": 117,
    "gamma": {
      "number": "3240",
      "isSimilar": false
    },
    "dmc": {
      "number": "158",
      "isSimilar": false
    },
    "anchor": {
      "number": "177",
      "isSimilar": false
    },
    "madeira": {
      "number": "2702",
      "isSimilar": false
    }
  },
  {
    "r": 24,
    "g": 31,
    "b": 102,
    "gamma": {
      "number": "0083",
      "isSimilar": false
    },
    "dmc": {
      "number": "796",
      "isSimilar": false
    },
    "anchor": {
      "number": "133",
      "isSimilar": false
    },
    "madeira": {
      "number": "0913",
      "isSimilar": false
    }
  },
  {
    "r": 22,
    "g": 17,
    "b": 81,
    "gamma": {
      "number": "0308",
      "isSimilar": false
    },
    "dmc": {
      "number": "791",
      "isSimilar": false
    },
    "anchor": {
      "number": "178",
      "isSimilar": false
    },
    "madeira": {
      "number": "904",
      "isSimilar": false
    }
  },
  {
    "r": 232,
    "g": 237,
    "b": 243,
    "gamma": {
      "number": "0752",
      "isSimilar": false
    },
    "dmc": {
      "number": "3756",
      "isSimilar": false
    },
    "anchor": {
      "number": "1037",
      "isSimilar": true
    },
    "madeira": {
      "number": "2504",
      "isSimilar": false
    }
  },
  {
    "r": 206,
    "g": 221,
    "b": 234,
    "gamma": {
      "number": "0753",
      "isSimilar": false
    },
    "dmc": {
      "number": "775",
      "isSimilar": false
    },
    "anchor": {
      "number": "1031",
      "isSimilar": false
    },
    "madeira": {
      "number": "1001",
      "isSimilar": false
    }
  },
  {
    "r": 187,
    "g": 200,
    "b": 214,
    "gamma": {
      "number": "0754",
      "isSimilar": false
    },
    "dmc": {
      "number": "3752",
      "isSimilar": false
    },
    "anchor": {
      "number": "343",
      "isSimilar": false
    },
    "madeira": {
      "number": "1001",
      "isSimilar": true
    }
  },
  {
    "r": 164,
    "g": 181,
    "b": 198,
    "gamma": {
      "number": "0755",
      "isSimilar": false
    },
    "dmc": {
      "number": "932",
      "isSimilar": false
    },
    "anchor": {
      "number": "1033",
      "isSimilar": false
    },
    "madeira": {
      "number": "1710",
      "isSimilar": false
    }
  },
  {
    "r": 125,
    "g": 152,
    "b": 181,
    "gamma": {
      "number": "0756",
      "isSimilar": false
    },
    "dmc": {
      "number": "794",
      "isSimilar": true
    },
    "anchor": {
      "number": "806",
      "isSimilar": true
    },
    "madeira": {
      "number": "1003",
      "isSimilar": false
    }
  },
  {
    "r": 76,
    "g": 105,
    "b": 140,
    "gamma": {
      "number": "0757",
      "isSimilar": false
    },
    "dmc": {
      "number": "334",
      "isSimilar": false
    },
    "anchor": {
      "number": "978",
      "isSimilar": false
    },
    "madeira": {
      "number": "1004",
      "isSimilar": false
    }
  },
  {
    "r": 59,
    "g": 88,
    "b": 109,
    "gamma": {
      "number": "0758",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "1035",
      "isSimilar": false
    },
    "madeira": {
      "number": "1712",
      "isSimilar": false
    }
  },
  {
    "r": 184,
    "g": 191,
    "b": 210,
    "gamma": {
      "number": "3049",
      "isSimilar": false
    },
    "dmc": {
      "number": "159",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "901",
      "isSimilar": false
    }
  },
  {
    "r": 154,
    "g": 164,
    "b": 194,
    "gamma": {
      "number": "3241",
      "isSimilar": false
    },
    "dmc": {
      "number": "159",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "901",
      "isSimilar": false
    }
  },
  {
    "r": 140,
    "g": 152,
    "b": 180,
    "gamma": {
      "number": "3050",
      "isSimilar": false
    },
    "dmc": {
      "number": "160",
      "isSimilar": false
    },
    "anchor": {
      "number": "806",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 106,
    "g": 105,
    "b": 131,
    "gamma": {
      "number": "3242",
      "isSimilar": false
    },
    "dmc": {
      "number": "161",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 104,
    "g": 109,
    "b": 141,
    "gamma": {
      "number": "3111",
      "isSimilar": false
    },
    "dmc": {
      "number": "793",
      "isSimilar": false
    },
    "anchor": {
      "number": "176",
      "isSimilar": false
    },
    "madeira": {
      "number": "906",
      "isSimilar": true
    }
  },
  {
    "r": 98,
    "g": 102,
    "b": 154,
    "gamma": {
      "number": "3112",
      "isSimilar": false
    },
    "dmc": {
      "number": "3838",
      "isSimilar": false
    },
    "anchor": {
      "number": "177",
      "isSimilar": false
    },
    "madeira": {
      "number": "905",
      "isSimilar": true
    }
  },
  {
    "r": 188,
    "g": 192,
    "b": 216,
    "gamma": {
      "number": "3109",
      "isSimilar": false
    },
    "dmc": {
      "number": "3747",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "901",
      "isSimilar": true
    }
  },
  {
    "r": 162,
    "g": 172,
    "b": 205,
    "gamma": {
      "number": "3047",
      "isSimilar": false
    },
    "dmc": {
      "number": "341",
      "isSimilar": false
    },
    "anchor": {
      "number": "117",
      "isSimilar": false
    },
    "madeira": {
      "number": "901",
      "isSimilar": true
    }
  },
  {
    "r": 148,
    "g": 168,
    "b": 201,
    "gamma": {
      "number": "0081",
      "isSimilar": false
    },
    "dmc": {
      "number": "3839",
      "isSimilar": false
    },
    "anchor": {
      "number": "176",
      "isSimilar": false
    },
    "madeira": {
      "number": "902",
      "isSimilar": false
    }
  },
  {
    "r": 134,
    "g": 146,
    "b": 187,
    "gamma": {
      "number": "3048",
      "isSimilar": false
    },
    "dmc": {
      "number": "156",
      "isSimilar": false
    },
    "anchor": {
      "number": "118",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 171,
    "g": 154,
    "b": 198,
    "gamma": {
      "number": "3238",
      "isSimilar": false
    },
    "dmc": {
      "number": "155",
      "isSimilar": false
    },
    "anchor": {
      "number": "1030",
      "isSimilar": true
    },
    "madeira": {
      "number": "902",
      "isSimilar": true
    }
  },
  {
    "r": 147,
    "g": 137,
    "b": 193,
    "gamma": {
      "number": "0078",
      "isSimilar": false
    },
    "dmc": {
      "number": "340",
      "isSimilar": false
    },
    "anchor": {
      "number": "118",
      "isSimilar": false
    },
    "madeira": {
      "number": "902",
      "isSimilar": false
    }
  },
  {
    "r": 121,
    "g": 113,
    "b": 160,
    "gamma": {
      "number": "0080",
      "isSimilar": false
    },
    "dmc": {
      "number": "792",
      "isSimilar": true
    },
    "anchor": {
      "number": "941",
      "isSimilar": false
    },
    "madeira": {
      "number": "905",
      "isSimilar": false
    }
  },
  {
    "r": 133,
    "g": 114,
    "b": 164,
    "gamma": {
      "number": "3110",
      "isSimilar": false
    },
    "dmc": {
      "number": "3746",
      "isSimilar": false
    },
    "anchor": {
      "number": "1030",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 108,
    "g": 80,
    "b": 134,
    "gamma": {
      "number": "0079",
      "isSimilar": false
    },
    "dmc": {
      "number": "333",
      "isSimilar": false
    },
    "anchor": {
      "number": "119",
      "isSimilar": false
    },
    "madeira": {
      "number": "903",
      "isSimilar": false
    }
  },
  {
    "r": 208,
    "g": 200,
    "b": 228,
    "gamma": {
      "number": "1095",
      "isSimilar": false
    },
    "dmc": {
      "number": "211",
      "isSimilar": false
    },
    "anchor": {
      "number": "342",
      "isSimilar": false
    },
    "madeira": {
      "number": "801",
      "isSimilar": false
    }
  },
  {
    "r": 206,
    "g": 182,
    "b": 228,
    "gamma": {
      "number": "0076",
      "isSimilar": false
    },
    "dmc": {
      "number": "210",
      "isSimilar": false
    },
    "anchor": {
      "number": "108",
      "isSimilar": false
    },
    "madeira": {
      "number": "802",
      "isSimilar": false
    }
  },
  {
    "r": 182,
    "g": 152,
    "b": 198,
    "gamma": {
      "number": "3107",
      "isSimilar": false
    },
    "dmc": {
      "number": "209",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "803",
      "isSimilar": false
    }
  },
  {
    "r": 159,
    "g": 101,
    "b": 164,
    "gamma": {
      "number": "0111",
      "isSimilar": false
    },
    "dmc": {
      "number": "208",
      "isSimilar": true
    },
    "anchor": {
      "number": "111",
      "isSimilar": false
    },
    "madeira": {
      "number": "0804",
      "isSimilar": true
    }
  },
  {
    "r": 124,
    "g": 64,
    "b": 135,
    "gamma": {
      "number": "0112",
      "isSimilar": false
    },
    "dmc": {
      "number": "3837",
      "isSimilar": false
    },
    "anchor": {
      "number": "100",
      "isSimilar": false
    },
    "madeira": {
      "number": "0712",
      "isSimilar": false
    }
  },
  {
    "r": 167,
    "g": 114,
    "b": 164,
    "gamma": {
      "number": "0074",
      "isSimilar": false
    },
    "dmc": {
      "number": "553",
      "isSimilar": false
    },
    "anchor": {
      "number": "98",
      "isSimilar": false
    },
    "madeira": {
      "number": "0712",
      "isSimilar": false
    }
  },
  {
    "r": 123,
    "g": 63,
    "b": 108,
    "gamma": {
      "number": "0077",
      "isSimilar": false
    },
    "dmc": {
      "number": "552",
      "isSimilar": false
    },
    "anchor": {
      "number": "99",
      "isSimilar": false
    },
    "madeira": {
      "number": "0713",
      "isSimilar": false
    }
  },
  {
    "r": 114,
    "g": 54,
    "b": 87,
    "gamma": {
      "number": "3108",
      "isSimilar": false
    },
    "dmc": {
      "number": "327",
      "isSimilar": false
    },
    "anchor": {
      "number": "100",
      "isSimilar": true
    },
    "madeira": {
      "number": "805",
      "isSimilar": true
    }
  },
  {
    "r": 84,
    "g": 18,
    "b": 68,
    "gamma": {
      "number": "0075",
      "isSimilar": false
    },
    "dmc": {
      "number": "550",
      "isSimilar": false
    },
    "anchor": {
      "number": "102",
      "isSimilar": false
    },
    "madeira": {
      "number": "0714",
      "isSimilar": false
    }
  },
  {
    "r": 193,
    "g": 174,
    "b": 194,
    "gamma": {
      "number": "0068",
      "isSimilar": false
    },
    "dmc": {
      "number": "3836",
      "isSimilar": false
    },
    "anchor": {
      "number": "90",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 174,
    "g": 153,
    "b": 177,
    "gamma": {
      "number": "0727",
      "isSimilar": false
    },
    "dmc": {
      "number": "554",
      "isSimilar": false
    },
    "anchor": {
      "number": "97",
      "isSimilar": false
    },
    "madeira": {
      "number": "0711",
      "isSimilar": false
    }
  },
  {
    "r": 145,
    "g": 114,
    "b": 151,
    "gamma": {
      "number": "0729",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 120,
    "g": 71,
    "b": 117,
    "gamma": {
      "number": "0730",
      "isSimilar": false
    },
    "dmc": {
      "number": "3835",
      "isSimilar": true
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "805",
      "isSimilar": true
    }
  },
  {
    "r": 100,
    "g": 36,
    "b": 65,
    "gamma": {
      "number": "3102",
      "isSimilar": false
    },
    "dmc": {
      "number": "3834",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "805",
      "isSimilar": false
    }
  },
  {
    "r": 76,
    "g": 26,
    "b": 49,
    "gamma": {
      "number": "3237",
      "isSimilar": false
    },
    "dmc": {
      "number": "154",
      "isSimilar": false
    },
    "anchor": {
      "number": "72",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 199,
    "g": 186,
    "b": 199,
    "gamma": {
      "number": "0725",
      "isSimilar": false
    },
    "dmc": {
      "number": "3743",
      "isSimilar": false
    },
    "anchor": {
      "number": "869",
      "isSimilar": false
    },
    "madeira": {
      "number": "2611",
      "isSimilar": false
    }
  },
  {
    "r": 171,
    "g": 151,
    "b": 158,
    "gamma": {
      "number": "0067",
      "isSimilar": false
    },
    "dmc": {
      "number": "452",
      "isSimilar": false
    },
    "anchor": {
      "number": "232",
      "isSimilar": false
    },
    "madeira": {
      "number": "1807",
      "isSimilar": true
    }
  },
  {
    "r": 150,
    "g": 110,
    "b": 110,
    "gamma": {
      "number": "3017",
      "isSimilar": false
    },
    "dmc": {
      "number": "3041",
      "isSimilar": false
    },
    "anchor": {
      "number": "871",
      "isSimilar": false
    },
    "madeira": {
      "number": "806",
      "isSimilar": false
    }
  },
  {
    "r": 114,
    "g": 83,
    "b": 90,
    "gamma": {
      "number": "3101",
      "isSimilar": false
    },
    "dmc": {
      "number": "3740",
      "isSimilar": false
    },
    "anchor": {
      "number": "873",
      "isSimilar": false
    },
    "madeira": {
      "number": "806",
      "isSimilar": false
    }
  },
  {
    "r": 223,
    "g": 192,
    "b": 219,
    "gamma": {
      "number": "3251",
      "isSimilar": false
    },
    "dmc": {
      "number": "153",
      "isSimilar": false
    },
    "anchor": {
      "number": "95",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 235,
    "g": 199,
    "b": 223,
    "gamma": {
      "number": "6080",
      "isSimilar": false
    },
    "dmc": {
      "number": "3609",
      "isSimilar": false
    },
    "anchor": {
      "number": "90",
      "isSimilar": false
    },
    "madeira": {
      "number": "710",
      "isSimilar": true
    }
  },
  {
    "r": 233,
    "g": 184,
    "b": 217,
    "gamma": {
      "number": "0037",
      "isSimilar": false
    },
    "dmc": {
      "number": "3609",
      "isSimilar": false
    },
    "anchor": {
      "number": "85",
      "isSimilar": false
    },
    "madeira": {
      "number": "710",
      "isSimilar": false
    }
  },
  {
    "r": 198,
    "g": 140,
    "b": 159,
    "gamma": {
      "number": "3098",
      "isSimilar": false
    },
    "dmc": {
      "number": "316",
      "isSimilar": false
    },
    "anchor": {
      "number": "1017",
      "isSimilar": true
    },
    "madeira": {
      "number": "809",
      "isSimilar": true
    }
  },
  {
    "r": 192,
    "g": 123,
    "b": 163,
    "gamma": {
      "number": "0609",
      "isSimilar": false
    },
    "dmc": {
      "number": "3608",
      "isSimilar": true
    },
    "anchor": {
      "number": "86",
      "isSimilar": false
    },
    "madeira": {
      "number": "709",
      "isSimilar": true
    }
  },
  {
    "r": 179,
    "g": 78,
    "b": 140,
    "gamma": {
      "number": "0072",
      "isSimilar": false
    },
    "dmc": {
      "number": "3607",
      "isSimilar": false
    },
    "anchor": {
      "number": "87",
      "isSimilar": false
    },
    "madeira": {
      "number": "708",
      "isSimilar": false
    }
  },
  {
    "r": 176,
    "g": 74,
    "b": 131,
    "gamma": {
      "number": "0611",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "78",
      "isSimilar": true
    },
    "madeira": {
      "number": "706",
      "isSimilar": false
    }
  },
  {
    "r": 159,
    "g": 45,
    "b": 111,
    "gamma": {
      "number": "0073",
      "isSimilar": false
    },
    "dmc": {
      "number": "718",
      "isSimilar": false
    },
    "anchor": {
      "number": "88",
      "isSimilar": false
    },
    "madeira": {
      "number": "707",
      "isSimilar": false
    }
  },
  {
    "r": 131,
    "g": 42,
    "b": 88,
    "gamma": {
      "number": "0031",
      "isSimilar": false
    },
    "dmc": {
      "number": "917",
      "isSimilar": false
    },
    "anchor": {
      "number": "89",
      "isSimilar": false
    },
    "madeira": {
      "number": "706",
      "isSimilar": false
    }
  },
  {
    "r": 128,
    "g": 1,
    "b": 55,
    "gamma": {
      "number": "3106",
      "isSimilar": false
    },
    "dmc": {
      "number": "915",
      "isSimilar": false
    },
    "anchor": {
      "number": "1029",
      "isSimilar": false
    },
    "madeira": {
      "number": "705",
      "isSimilar": false
    }
  },
  {
    "r": 250,
    "g": 208,
    "b": 213,
    "gamma": {
      "number": "0201",
      "isSimilar": false
    },
    "dmc": {
      "number": "963",
      "isSimilar": false
    },
    "anchor": {
      "number": "73",
      "isSimilar": false
    },
    "madeira": {
      "number": "502",
      "isSimilar": false
    }
  },
  {
    "r": 240,
    "g": 183,
    "b": 210,
    "gamma": {
      "number": "0202",
      "isSimilar": false
    },
    "dmc": {
      "number": "604",
      "isSimilar": false
    },
    "anchor": {
      "number": "50",
      "isSimilar": false
    },
    "madeira": {
      "number": "606",
      "isSimilar": false
    }
  },
  {
    "r": 239,
    "g": 168,
    "b": 202,
    "gamma": {
      "number": "0070",
      "isSimilar": false
    },
    "dmc": {
      "number": "604",
      "isSimilar": false
    },
    "anchor": {
      "number": "55",
      "isSimilar": false
    },
    "madeira": {
      "number": "614",
      "isSimilar": false
    }
  },
  {
    "r": 241,
    "g": 154,
    "b": 194,
    "gamma": {
      "number": "0402",
      "isSimilar": false
    },
    "dmc": {
      "number": "3806",
      "isSimilar": false
    },
    "anchor": {
      "number": "62",
      "isSimilar": false
    },
    "madeira": {
      "number": "701",
      "isSimilar": false
    }
  },
  {
    "r": 239,
    "g": 123,
    "b": 161,
    "gamma": {
      "number": "0204",
      "isSimilar": false
    },
    "dmc": {
      "number": "603",
      "isSimilar": false
    },
    "anchor": {
      "number": "62",
      "isSimilar": false
    },
    "madeira": {
      "number": "701",
      "isSimilar": false
    }
  },
  {
    "r": 206,
    "g": 80,
    "b": 127,
    "gamma": {
      "number": "0069",
      "isSimilar": false
    },
    "dmc": {
      "number": "3805",
      "isSimilar": false
    },
    "anchor": {
      "number": "63",
      "isSimilar": false
    },
    "madeira": {
      "number": "702",
      "isSimilar": true
    }
  },
  {
    "r": 209,
    "g": 70,
    "b": 108,
    "gamma": {
      "number": "0071",
      "isSimilar": false
    },
    "dmc": {
      "number": "602",
      "isSimilar": false
    },
    "anchor": {
      "number": "63",
      "isSimilar": true
    },
    "madeira": {
      "number": "611",
      "isSimilar": false
    }
  },
  {
    "r": 211,
    "g": 64,
    "b": 103,
    "gamma": {
      "number": "3104",
      "isSimilar": false
    },
    "dmc": {
      "number": "601",
      "isSimilar": false
    },
    "anchor": {
      "number": "63",
      "isSimilar": true
    },
    "madeira": {
      "number": "610",
      "isSimilar": false
    }
  },
  {
    "r": 191,
    "g": 28,
    "b": 72,
    "gamma": {
      "number": "3105",
      "isSimilar": false
    },
    "dmc": {
      "number": "600",
      "isSimilar": false
    },
    "anchor": {
      "number": "59",
      "isSimilar": true
    },
    "madeira": {
      "number": "507",
      "isSimilar": false
    }
  },
  {
    "r": 195,
    "g": 60,
    "b": 98,
    "gamma": {
      "number": "3103",
      "isSimilar": false
    },
    "dmc": {
      "number": "3804",
      "isSimilar": false
    },
    "anchor": {
      "number": "63",
      "isSimilar": false
    },
    "madeira": {
      "number": "604",
      "isSimilar": false
    }
  },
  {
    "r": 202,
    "g": 11,
    "b": 81,
    "gamma": {
      "number": "0404",
      "isSimilar": false
    },
    "dmc": {
      "number": "602",
      "isSimilar": true
    },
    "anchor": {
      "number": "57",
      "isSimilar": false
    },
    "madeira": {
      "number": "703",
      "isSimilar": false
    }
  },
  {
    "r": 249,
    "g": 214,
    "b": 221,
    "gamma": {
      "number": "0902",
      "isSimilar": false
    },
    "dmc": {
      "number": "818",
      "isSimilar": true
    },
    "anchor": {
      "number": "48",
      "isSimilar": false
    },
    "madeira": {
      "number": "502",
      "isSimilar": true
    }
  },
  {
    "r": 247,
    "g": 180,
    "b": 183,
    "gamma": {
      "number": "0066",
      "isSimilar": false
    },
    "dmc": {
      "number": "3326",
      "isSimilar": false
    },
    "anchor": {
      "number": "36",
      "isSimilar": false
    },
    "madeira": {
      "number": "504",
      "isSimilar": false
    }
  },
  {
    "r": 238,
    "g": 174,
    "b": 176,
    "gamma": {
      "number": "3087",
      "isSimilar": false
    },
    "dmc": {
      "number": "776",
      "isSimilar": false
    },
    "anchor": {
      "number": "36",
      "isSimilar": false
    },
    "madeira": {
      "number": "503",
      "isSimilar": false
    }
  },
  {
    "r": 237,
    "g": 166,
    "b": 172,
    "gamma": {
      "number": "0065",
      "isSimilar": false
    },
    "dmc": {
      "number": "3733",
      "isSimilar": false
    },
    "anchor": {
      "number": "1023",
      "isSimilar": false
    },
    "madeira": {
      "number": "813",
      "isSimilar": false
    }
  },
  {
    "r": 238,
    "g": 133,
    "b": 147,
    "gamma": {
      "number": "3088",
      "isSimilar": false
    },
    "dmc": {
      "number": "899",
      "isSimilar": false
    },
    "anchor": {
      "number": "76",
      "isSimilar": false
    },
    "madeira": {
      "number": "609",
      "isSimilar": false
    }
  },
  {
    "r": 229,
    "g": 109,
    "b": 127,
    "gamma": {
      "number": "3089",
      "isSimilar": false
    },
    "dmc": {
      "number": "335",
      "isSimilar": false
    },
    "anchor": {
      "number": "76",
      "isSimilar": true
    },
    "madeira": {
      "number": "506",
      "isSimilar": false
    }
  },
  {
    "r": 183,
    "g": 55,
    "b": 69,
    "gamma": {
      "number": "3090",
      "isSimilar": false
    },
    "dmc": {
      "number": "309",
      "isSimilar": false
    },
    "anchor": {
      "number": "42",
      "isSimilar": false
    },
    "madeira": {
      "number": "507",
      "isSimilar": true
    }
  },
  {
    "r": 236,
    "g": 185,
    "b": 188,
    "gamma": {
      "number": "3236",
      "isSimilar": false
    },
    "dmc": {
      "number": "151",
      "isSimilar": false
    },
    "anchor": {
      "number": "73",
      "isSimilar": false
    },
    "madeira": {
      "number": "607",
      "isSimilar": false
    }
  },
  {
    "r": 241,
    "g": 179,
    "b": 191,
    "gamma": {
      "number": "0904",
      "isSimilar": false
    },
    "dmc": {
      "number": "3354",
      "isSimilar": false
    },
    "anchor": {
      "number": "66",
      "isSimilar": true
    },
    "madeira": {
      "number": "606",
      "isSimilar": false
    }
  },
  {
    "r": 232,
    "g": 185,
    "b": 197,
    "gamma": {
      "number": "3093",
      "isSimilar": false
    },
    "dmc": {
      "number": "3689",
      "isSimilar": false
    },
    "anchor": {
      "number": "74",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 229,
    "g": 171,
    "b": 175,
    "gamma": {
      "number": "3091",
      "isSimilar": false
    },
    "dmc": {
      "number": "3354",
      "isSimilar": false
    },
    "anchor": {
      "number": "74",
      "isSimilar": true
    },
    "madeira": {
      "number": "607",
      "isSimilar": false
    }
  },
  {
    "r": 230,
    "g": 132,
    "b": 154,
    "gamma": {
      "number": "0905",
      "isSimilar": false
    },
    "dmc": {
      "number": "3688",
      "isSimilar": false
    },
    "anchor": {
      "number": "68",
      "isSimilar": false
    },
    "madeira": {
      "number": "605",
      "isSimilar": true
    }
  },
  {
    "r": 194,
    "g": 89,
    "b": 109,
    "gamma": {
      "number": "0906",
      "isSimilar": false
    },
    "dmc": {
      "number": "3687",
      "isSimilar": false
    },
    "anchor": {
      "number": "79",
      "isSimilar": false
    },
    "madeira": {
      "number": "605",
      "isSimilar": false
    }
  },
  {
    "r": 198,
    "g": 90,
    "b": 107,
    "gamma": {
      "number": "3092",
      "isSimilar": false
    },
    "dmc": {
      "number": "3731",
      "isSimilar": false
    },
    "anchor": {
      "number": "76",
      "isSimilar": false
    },
    "madeira": {
      "number": "506",
      "isSimilar": false
    }
  },
  {
    "r": 147,
    "g": 32,
    "b": 58,
    "gamma": {
      "number": "3235",
      "isSimilar": false
    },
    "dmc": {
      "number": "150",
      "isSimilar": false
    },
    "anchor": {
      "number": "59",
      "isSimilar": false
    },
    "madeira": {
      "number": "509",
      "isSimilar": false
    }
  },
  {
    "r": 134,
    "g": 50,
    "b": 72,
    "gamma": {
      "number": "3094",
      "isSimilar": false
    },
    "dmc": {
      "number": "3803",
      "isSimilar": false
    },
    "anchor": {
      "number": "1028",
      "isSimilar": false
    },
    "madeira": {
      "number": "2609",
      "isSimilar": false
    }
  },
  {
    "r": 145,
    "g": 38,
    "b": 68,
    "gamma": {
      "number": "0907",
      "isSimilar": false
    },
    "dmc": {
      "number": "3803",
      "isSimilar": true
    },
    "anchor": {
      "number": "65",
      "isSimilar": false
    },
    "madeira": {
      "number": "2609",
      "isSimilar": true
    }
  },
  {
    "r": 125,
    "g": 50,
    "b": 72,
    "gamma": {
      "number": "0038",
      "isSimilar": false
    },
    "dmc": {
      "number": "3685",
      "isSimilar": false
    },
    "anchor": {
      "number": "1028",
      "isSimilar": false
    },
    "madeira": {
      "number": "2609",
      "isSimilar": false
    }
  },
  {
    "r": 130,
    "g": 39,
    "b": 65,
    "gamma": {
      "number": "0406",
      "isSimilar": false
    },
    "dmc": {
      "number": "777",
      "isSimilar": true
    },
    "anchor": {
      "number": "65",
      "isSimilar": false
    },
    "madeira": {
      "number": "508",
      "isSimilar": false
    }
  },
  {
    "r": 113,
    "g": 31,
    "b": 46,
    "gamma": {
      "number": "0407",
      "isSimilar": false
    },
    "dmc": {
      "number": "814",
      "isSimilar": false
    },
    "anchor": {
      "number": "45",
      "isSimilar": false
    },
    "madeira": {
      "number": "514",
      "isSimilar": false
    }
  },
  {
    "r": 116,
    "g": 35,
    "b": 56,
    "gamma": {
      "number": "0908",
      "isSimilar": false
    },
    "dmc": {
      "number": "3685",
      "isSimilar": false
    },
    "anchor": {
      "number": "1028",
      "isSimilar": false
    },
    "madeira": {
      "number": "2609",
      "isSimilar": false
    }
  },
  {
    "r": 95,
    "g": 31,
    "b": 44,
    "gamma": {
      "number": "0409",
      "isSimilar": false
    },
    "dmc": {
      "number": "814",
      "isSimilar": true
    },
    "anchor": {
      "number": "45",
      "isSimilar": false
    },
    "madeira": {
      "number": "2608",
      "isSimilar": false
    }
  },
  {
    "r": 88,
    "g": 23,
    "b": 39,
    "gamma": {
      "number": "0909",
      "isSimilar": false
    },
    "dmc": {
      "number": "154",
      "isSimilar": false
    },
    "anchor": {
      "number": "873",
      "isSimilar": false
    },
    "madeira": {
      "number": "2607",
      "isSimilar": false
    }
  },
  {
    "r": 78,
    "g": 22,
    "b": 34,
    "gamma": {
      "number": "0410",
      "isSimilar": false
    },
    "dmc": {
      "number": "902",
      "isSimilar": false
    },
    "anchor": {
      "number": "44",
      "isSimilar": false
    },
    "madeira": {
      "number": "2607",
      "isSimilar": false
    }
  },
  {
    "r": 233,
    "g": 196,
    "b": 201,
    "gamma": {
      "number": "0875",
      "isSimilar": false
    },
    "dmc": {
      "number": "224",
      "isSimilar": false
    },
    "anchor": {
      "number": "23",
      "isSimilar": true
    },
    "madeira": {
      "number": "808",
      "isSimilar": true
    }
  },
  {
    "r": 230,
    "g": 188,
    "b": 195,
    "gamma": {
      "number": "3016",
      "isSimilar": false
    },
    "dmc": {
      "number": "3727",
      "isSimilar": false
    },
    "anchor": {
      "number": "1016",
      "isSimilar": false
    },
    "madeira": {
      "number": "2610",
      "isSimilar": false
    }
  },
  {
    "r": 221,
    "g": 179,
    "b": 177,
    "gamma": {
      "number": "0876",
      "isSimilar": false
    },
    "dmc": {
      "number": "778",
      "isSimilar": false
    },
    "anchor": {
      "number": "968",
      "isSimilar": false
    },
    "madeira": {
      "number": "808",
      "isSimilar": false
    }
  },
  {
    "r": 187,
    "g": 127,
    "b": 131,
    "gamma": {
      "number": "0877",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "1017",
      "isSimilar": false
    },
    "madeira": {
      "number": "809",
      "isSimilar": false
    }
  },
  {
    "r": 135,
    "g": 76,
    "b": 73,
    "gamma": {
      "number": "0879",
      "isSimilar": false
    },
    "dmc": {
      "number": "3726",
      "isSimilar": true
    },
    "anchor": {
      "number": "1018",
      "isSimilar": false
    },
    "madeira": {
      "number": "810",
      "isSimilar": false
    }
  },
  {
    "r": 130,
    "g": 70,
    "b": 70,
    "gamma": {
      "number": "3099",
      "isSimilar": false
    },
    "dmc": {
      "number": "315",
      "isSimilar": false
    },
    "anchor": {
      "number": "1019",
      "isSimilar": false
    },
    "madeira": {
      "number": "810",
      "isSimilar": true
    }
  },
  {
    "r": 111,
    "g": 46,
    "b": 53,
    "gamma": {
      "number": "3100",
      "isSimilar": false
    },
    "dmc": {
      "number": "3802",
      "isSimilar": false
    },
    "anchor": {
      "number": "1019",
      "isSimilar": true
    },
    "madeira": {
      "number": "2606",
      "isSimilar": false
    }
  },
  {
    "r": 252,
    "g": 177,
    "b": 186,
    "gamma": {
      "number": "3081",
      "isSimilar": false
    },
    "dmc": {
      "number": "3716",
      "isSimilar": false
    },
    "anchor": {
      "number": "25",
      "isSimilar": false
    },
    "madeira": {
      "number": "607",
      "isSimilar": false
    }
  },
  {
    "r": 240,
    "g": 141,
    "b": 159,
    "gamma": {
      "number": "3082",
      "isSimilar": false
    },
    "dmc": {
      "number": "962",
      "isSimilar": false
    },
    "anchor": {
      "number": "76",
      "isSimilar": false
    },
    "madeira": {
      "number": "609",
      "isSimilar": false
    }
  },
  {
    "r": 223,
    "g": 104,
    "b": 119,
    "gamma": {
      "number": "3083",
      "isSimilar": false
    },
    "dmc": {
      "number": "961",
      "isSimilar": false
    },
    "anchor": {
      "number": "75",
      "isSimilar": false
    },
    "madeira": {
      "number": "506",
      "isSimilar": false
    }
  },
  {
    "r": 232,
    "g": 134,
    "b": 140,
    "gamma": {
      "number": "3084",
      "isSimilar": false
    },
    "dmc": {
      "number": "3833",
      "isSimilar": false
    },
    "anchor": {
      "number": "1023",
      "isSimilar": false
    },
    "madeira": {
      "number": "414",
      "isSimilar": false
    }
  },
  {
    "r": 213,
    "g": 93,
    "b": 99,
    "gamma": {
      "number": "3085",
      "isSimilar": false
    },
    "dmc": {
      "number": "3832",
      "isSimilar": false
    },
    "anchor": {
      "number": "28",
      "isSimilar": false
    },
    "madeira": {
      "number": "506",
      "isSimilar": false
    }
  },
  {
    "r": 179,
    "g": 48,
    "b": 52,
    "gamma": {
      "number": "3086",
      "isSimilar": false
    },
    "dmc": {
      "number": "3831",
      "isSimilar": false
    },
    "anchor": {
      "number": "1006",
      "isSimilar": true
    },
    "madeira": {
      "number": "610",
      "isSimilar": false
    }
  },
  {
    "r": 170,
    "g": 16,
    "b": 46,
    "gamma": {
      "number": "4055",
      "isSimilar": false
    },
    "dmc": {
      "number": "304",
      "isSimilar": false
    },
    "anchor": {
      "number": "19",
      "isSimilar": false
    },
    "madeira": {
      "number": "0508",
      "isSimilar": false
    }
  },
  {
    "r": 249,
    "g": 175,
    "b": 183,
    "gamma": {
      "number": "3079",
      "isSimilar": false
    },
    "dmc": {
      "number": "957",
      "isSimilar": false
    },
    "anchor": {
      "number": "25",
      "isSimilar": false
    },
    "madeira": {
      "number": "612",
      "isSimilar": false
    }
  },
  {
    "r": 249,
    "g": 153,
    "b": 165,
    "gamma": {
      "number": "3077",
      "isSimilar": false
    },
    "dmc": {
      "number": "894",
      "isSimilar": false
    },
    "anchor": {
      "number": "26",
      "isSimilar": false
    },
    "madeira": {
      "number": "408",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 122,
    "b": 144,
    "gamma": {
      "number": "3080",
      "isSimilar": false
    },
    "dmc": {
      "number": "956",
      "isSimilar": false
    },
    "anchor": {
      "number": "40",
      "isSimilar": false
    },
    "madeira": {
      "number": "413",
      "isSimilar": false
    }
  },
  {
    "r": 252,
    "g": 106,
    "b": 132,
    "gamma": {
      "number": "0116",
      "isSimilar": false
    },
    "dmc": {
      "number": "893",
      "isSimilar": false
    },
    "anchor": {
      "number": "41",
      "isSimilar": false
    },
    "madeira": {
      "number": "411",
      "isSimilar": false
    }
  },
  {
    "r": 248,
    "g": 91,
    "b": 100,
    "gamma": {
      "number": "3078",
      "isSimilar": false
    },
    "dmc": {
      "number": "892",
      "isSimilar": false
    },
    "anchor": {
      "number": "33",
      "isSimilar": false
    },
    "madeira": {
      "number": "411",
      "isSimilar": false
    }
  },
  {
    "r": 239,
    "g": 73,
    "b": 73,
    "gamma": {
      "number": "0118",
      "isSimilar": false
    },
    "dmc": {
      "number": "891",
      "isSimilar": false
    },
    "anchor": {
      "number": "35",
      "isSimilar": false
    },
    "madeira": {
      "number": "412",
      "isSimilar": false
    }
  },
  {
    "r": 251,
    "g": 226,
    "b": 223,
    "gamma": {
      "number": "0025",
      "isSimilar": false
    },
    "dmc": {
      "number": "819",
      "isSimilar": false
    },
    "anchor": {
      "number": "271",
      "isSimilar": false
    },
    "madeira": {
      "number": "0501",
      "isSimilar": false
    }
  },
  {
    "r": 252,
    "g": 187,
    "b": 193,
    "gamma": {
      "number": "3074",
      "isSimilar": false
    },
    "dmc": {
      "number": "3708",
      "isSimilar": false
    },
    "anchor": {
      "number": "31",
      "isSimilar": false
    },
    "madeira": {
      "number": "408",
      "isSimilar": false
    }
  },
  {
    "r": 255,
    "g": 152,
    "b": 142,
    "gamma": {
      "number": "3075",
      "isSimilar": false
    },
    "dmc": {
      "number": "3706",
      "isSimilar": false
    },
    "anchor": {
      "number": "33",
      "isSimilar": false
    },
    "madeira": {
      "number": "409",
      "isSimilar": false
    }
  },
  {
    "r": 246,
    "g": 93,
    "b": 91,
    "gamma": {
      "number": "3076",
      "isSimilar": false
    },
    "dmc": {
      "number": "3705",
      "isSimilar": false
    },
    "anchor": {
      "number": "35",
      "isSimilar": false
    },
    "madeira": {
      "number": "410",
      "isSimilar": false
    }
  },
  {
    "r": 230,
    "g": 89,
    "b": 82,
    "gamma": {
      "number": "0063",
      "isSimilar": false
    },
    "dmc": {
      "number": "3801",
      "isSimilar": false
    },
    "anchor": {
      "number": "1098",
      "isSimilar": false
    },
    "madeira": {
      "number": "411",
      "isSimilar": false
    }
  },
  {
    "r": 232,
    "g": 49,
    "b": 36,
    "gamma": {
      "number": "0012",
      "isSimilar": false
    },
    "dmc": {
      "number": "666",
      "isSimilar": false
    },
    "anchor": {
      "number": "46",
      "isSimilar": false
    },
    "madeira": {
      "number": "210",
      "isSimilar": false
    }
  },
  {
    "r": 216,
    "g": 46,
    "b": 38,
    "gamma": {
      "number": "0119",
      "isSimilar": false
    },
    "dmc": {
      "number": "666",
      "isSimilar": false
    },
    "anchor": {
      "number": "46",
      "isSimilar": false
    },
    "madeira": {
      "number": "411",
      "isSimilar": false
    }
  },
  {
    "r": 206,
    "g": 31,
    "b": 50,
    "gamma": {
      "number": "0120",
      "isSimilar": false
    },
    "dmc": {
      "number": "321",
      "isSimilar": false
    },
    "anchor": {
      "number": "47",
      "isSimilar": false
    },
    "madeira": {
      "number": "507",
      "isSimilar": false
    }
  },
  {
    "r": 191,
    "g": 62,
    "b": 49,
    "gamma": {
      "number": "0062",
      "isSimilar": false
    },
    "dmc": {
      "number": "347",
      "isSimilar": false
    },
    "anchor": {
      "number": "1025",
      "isSimilar": false
    },
    "madeira": {
      "number": "407",
      "isSimilar": false
    }
  },
  {
    "r": 189,
    "g": 46,
    "b": 46,
    "gamma": {
      "number": "0024",
      "isSimilar": false
    },
    "dmc": {
      "number": "817",
      "isSimilar": false
    },
    "anchor": {
      "number": "13",
      "isSimilar": false
    },
    "madeira": {
      "number": "211",
      "isSimilar": false
    }
  },
  {
    "r": 169,
    "g": 35,
    "b": 50,
    "gamma": {
      "number": "0064",
      "isSimilar": false
    },
    "dmc": {
      "number": "326",
      "isSimilar": false
    },
    "anchor": {
      "number": "1006",
      "isSimilar": false
    },
    "madeira": {
      "number": "508",
      "isSimilar": false
    }
  },
  {
    "r": 152,
    "g": 35,
    "b": 44,
    "gamma": {
      "number": "0709",
      "isSimilar": false
    },
    "dmc": {
      "number": "498",
      "isSimilar": false
    },
    "anchor": {
      "number": "1005",
      "isSimilar": false
    },
    "madeira": {
      "number": "511",
      "isSimilar": false
    }
  },
  {
    "r": 129,
    "g": 16,
    "b": 36,
    "gamma": {
      "number": "0869",
      "isSimilar": false
    },
    "dmc": {
      "number": "816",
      "isSimilar": false
    },
    "anchor": {
      "number": "1005",
      "isSimilar": false
    },
    "madeira": {
      "number": "513",
      "isSimilar": false
    }
  },
  {
    "r": 252,
    "g": 220,
    "b": 218,
    "gamma": {
      "number": "3010",
      "isSimilar": false
    },
    "dmc": {
      "number": "3713",
      "isSimilar": false
    },
    "anchor": {
      "number": "1020",
      "isSimilar": false
    },
    "madeira": {
      "number": "502",
      "isSimilar": false
    }
  },
  {
    "r": 244,
    "g": 196,
    "b": 193,
    "gamma": {
      "number": "3011",
      "isSimilar": false
    },
    "dmc": {
      "number": "761",
      "isSimilar": false
    },
    "anchor": {
      "number": "1021",
      "isSimilar": false
    },
    "madeira": {
      "number": "404",
      "isSimilar": false
    }
  },
  {
    "r": 226,
    "g": 150,
    "b": 144,
    "gamma": {
      "number": "3012",
      "isSimilar": false
    },
    "dmc": {
      "number": "760",
      "isSimilar": false
    },
    "anchor": {
      "number": "1022",
      "isSimilar": false
    },
    "madeira": {
      "number": "405",
      "isSimilar": false
    }
  },
  {
    "r": 219,
    "g": 125,
    "b": 115,
    "gamma": {
      "number": "3071",
      "isSimilar": false
    },
    "dmc": {
      "number": "3712",
      "isSimilar": false
    },
    "anchor": {
      "number": "1023",
      "isSimilar": false
    },
    "madeira": {
      "number": "405",
      "isSimilar": true
    }
  },
  {
    "r": 195,
    "g": 97,
    "b": 84,
    "gamma": {
      "number": "3072",
      "isSimilar": false
    },
    "dmc": {
      "number": "3328",
      "isSimilar": false
    },
    "anchor": {
      "number": "1024",
      "isSimilar": false
    },
    "madeira": {
      "number": "406",
      "isSimilar": false
    }
  },
  {
    "r": 229,
    "g": 187,
    "b": 181,
    "gamma": {
      "number": "3095",
      "isSimilar": false
    },
    "dmc": {
      "number": "224",
      "isSimilar": false
    },
    "anchor": {
      "number": "893",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 228,
    "g": 185,
    "b": 182,
    "gamma": {
      "number": "3013",
      "isSimilar": false
    },
    "dmc": {
      "number": "152",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 197,
    "g": 126,
    "b": 122,
    "gamma": {
      "number": "3014",
      "isSimilar": false
    },
    "dmc": {
      "number": "223",
      "isSimilar": false
    },
    "anchor": {
      "number": "895",
      "isSimilar": false
    },
    "madeira": {
      "number": "812",
      "isSimilar": true
    }
  },
  {
    "r": 164,
    "g": 93,
    "b": 85,
    "gamma": {
      "number": "3015",
      "isSimilar": false
    },
    "dmc": {
      "number": "3722",
      "isSimilar": false
    },
    "anchor": {
      "number": "1027",
      "isSimilar": false
    },
    "madeira": {
      "number": "812",
      "isSimilar": false
    }
  },
  {
    "r": 170,
    "g": 80,
    "b": 72,
    "gamma": {
      "number": "3096",
      "isSimilar": false
    },
    "dmc": {
      "number": "3721",
      "isSimilar": false
    },
    "anchor": {
      "number": "896",
      "isSimilar": false
    },
    "madeira": {
      "number": "810",
      "isSimilar": false
    }
  },
  {
    "r": 133,
    "g": 49,
    "b": 46,
    "gamma": {
      "number": "3097",
      "isSimilar": false
    },
    "dmc": {
      "number": "221",
      "isSimilar": false
    },
    "anchor": {
      "number": "897",
      "isSimilar": false
    },
    "madeira": {
      "number": "811",
      "isSimilar": false
    }
  },
  {
    "r": 253,
    "g": 188,
    "b": 161,
    "gamma": {
      "number": "0703",
      "isSimilar": false
    },
    "dmc": {
      "number": "353",
      "isSimilar": false
    },
    "anchor": {
      "number": "6",
      "isSimilar": false
    },
    "madeira": {
      "number": "304",
      "isSimilar": false
    }
  },
  {
    "r": 246,
    "g": 157,
    "b": 128,
    "gamma": {
      "number": "3073",
      "isSimilar": false
    },
    "dmc": {
      "number": "352",
      "isSimilar": false
    },
    "anchor": {
      "number": "9",
      "isSimilar": false
    },
    "madeira": {
      "number": "303",
      "isSimilar": false
    }
  },
  {
    "r": 230,
    "g": 135,
    "b": 108,
    "gamma": {
      "number": "0705",
      "isSimilar": false
    },
    "dmc": {
      "number": "351",
      "isSimilar": false
    },
    "anchor": {
      "number": "10",
      "isSimilar": true
    },
    "madeira": {
      "number": "214",
      "isSimilar": false
    }
  },
  {
    "r": 228,
    "g": 102,
    "b": 71,
    "gamma": {
      "number": "0707",
      "isSimilar": false
    },
    "dmc": {
      "number": "350",
      "isSimilar": false
    },
    "anchor": {
      "number": "11",
      "isSimilar": false
    },
    "madeira": {
      "number": "213",
      "isSimilar": true
    }
  },
  {
    "r": 194,
    "g": 71,
    "b": 49,
    "gamma": {
      "number": "0708",
      "isSimilar": false
    },
    "dmc": {
      "number": "349",
      "isSimilar": true
    },
    "anchor": {
      "number": "13",
      "isSimilar": true
    },
    "madeira": {
      "number": "212",
      "isSimilar": true
    }
  },
  {
    "r": 172,
    "g": 84,
    "b": 76,
    "gamma": {
      "number": "0865",
      "isSimilar": false
    },
    "dmc": {
      "number": "221",
      "isSimilar": false
    },
    "anchor": {
      "number": "896",
      "isSimilar": false
    },
    "madeira": {
      "number": "401",
      "isSimilar": false
    }
  },
  {
    "r": 157,
    "g": 48,
    "b": 48,
    "gamma": {
      "number": "0867",
      "isSimilar": false
    },
    "dmc": {
      "number": "815",
      "isSimilar": false
    },
    "anchor": {
      "number": "44",
      "isSimilar": false
    },
    "madeira": {
      "number": "2502",
      "isSimilar": true
    }
  },
  {
    "r": 112,
    "g": 38,
    "b": 35,
    "gamma": {
      "number": "0028",
      "isSimilar": false
    },
    "dmc": {
      "number": "902",
      "isSimilar": false
    },
    "anchor": {
      "number": "022",
      "isSimilar": false
    },
    "madeira": {
      "number": "2501",
      "isSimilar": false
    }
  },
  {
    "r": 69,
    "g": 0,
    "b": 17,
    "gamma": {
      "number": "0871",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "72",
      "isSimilar": false
    },
    "madeira": {
      "number": "601",
      "isSimilar": true
    }
  },
  {
    "r": 79,
    "g": 8,
    "b": 12,
    "gamma": {
      "number": "0870",
      "isSimilar": false
    },
    "dmc": {
      "number": "902",
      "isSimilar": false
    },
    "anchor": {
      "number": "897",
      "isSimilar": false
    },
    "madeira": {
      "number": "601",
      "isSimilar": false
    }
  },
  {
    "r": 250,
    "g": 233,
    "b": 223,
    "gamma": {
      "number": "3024",
      "isSimilar": false
    },
    "dmc": {
      "number": "948",
      "isSimilar": false
    },
    "anchor": {
      "number": "1011",
      "isSimilar": false
    },
    "madeira": {
      "number": "306",
      "isSimilar": false
    }
  },
  {
    "r": 239,
    "g": 193,
    "b": 170,
    "gamma": {
      "number": "3025",
      "isSimilar": false
    },
    "dmc": {
      "number": "754",
      "isSimilar": false
    },
    "anchor": {
      "number": "1012",
      "isSimilar": false
    },
    "madeira": {
      "number": "305",
      "isSimilar": false
    }
  },
  {
    "r": 223,
    "g": 176,
    "b": 144,
    "gamma": {
      "number": "3026",
      "isSimilar": false
    },
    "dmc": {
      "number": "3771",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "2605",
      "isSimilar": false
    }
  },
  {
    "r": 185,
    "g": 113,
    "b": 97,
    "gamma": {
      "number": "3027",
      "isSimilar": false
    },
    "dmc": {
      "number": "3830",
      "isSimilar": false
    },
    "anchor": {
      "number": "5975",
      "isSimilar": false
    },
    "madeira": {
      "number": "401",
      "isSimilar": true
    }
  },
  {
    "r": 154,
    "g": 59,
    "b": 45,
    "gamma": {
      "number": "3211",
      "isSimilar": false
    },
    "dmc": {
      "number": "355",
      "isSimilar": false
    },
    "anchor": {
      "number": "1014",
      "isSimilar": false
    },
    "madeira": {
      "number": "401",
      "isSimilar": false
    }
  },
  {
    "r": 137,
    "g": 43,
    "b": 33,
    "gamma": {
      "number": "3212",
      "isSimilar": false
    },
    "dmc": {
      "number": "3777",
      "isSimilar": false
    },
    "anchor": {
      "number": "1015",
      "isSimilar": false
    },
    "madeira": {
      "number": "2502",
      "isSimilar": false
    }
  },
  {
    "r": 236,
    "g": 208,
    "b": 196,
    "gamma": {
      "number": "0765",
      "isSimilar": false
    },
    "dmc": {
      "number": "225",
      "isSimilar": false
    },
    "anchor": {
      "number": "1026",
      "isSimilar": false
    },
    "madeira": {
      "number": "814",
      "isSimilar": false
    }
  },
  {
    "r": 242,
    "g": 198,
    "b": 184,
    "gamma": {
      "number": "3213",
      "isSimilar": false
    },
    "dmc": {
      "number": "3779",
      "isSimilar": false
    },
    "anchor": {
      "number": "1012",
      "isSimilar": false
    },
    "madeira": {
      "number": "305",
      "isSimilar": false
    }
  },
  {
    "r": 234,
    "g": 192,
    "b": 180,
    "gamma": {
      "number": "0051",
      "isSimilar": false
    },
    "dmc": {
      "number": "758",
      "isSimilar": false
    },
    "anchor": {
      "number": "9575",
      "isSimilar": false
    },
    "madeira": {
      "number": "403",
      "isSimilar": false
    }
  },
  {
    "r": 196,
    "g": 133,
    "b": 111,
    "gamma": {
      "number": "0767",
      "isSimilar": false
    },
    "dmc": {
      "number": "3778",
      "isSimilar": false
    },
    "anchor": {
      "number": "1013",
      "isSimilar": false
    },
    "madeira": {
      "number": "403",
      "isSimilar": false
    }
  },
  {
    "r": 160,
    "g": 103,
    "b": 87,
    "gamma": {
      "number": "0768",
      "isSimilar": false
    },
    "dmc": {
      "number": "356",
      "isSimilar": false
    },
    "anchor": {
      "number": "5975",
      "isSimilar": false
    },
    "madeira": {
      "number": "402",
      "isSimilar": false
    }
  },
  {
    "r": 128,
    "g": 65,
    "b": 51,
    "gamma": {
      "number": "0772",
      "isSimilar": false
    },
    "dmc": {
      "number": "3857",
      "isSimilar": false
    },
    "anchor": {
      "number": "936",
      "isSimilar": false
    },
    "madeira": {
      "number": "2311",
      "isSimilar": true
    }
  },
  {
    "r": 246,
    "g": 225,
    "b": 208,
    "gamma": {
      "number": "3214",
      "isSimilar": false
    },
    "dmc": {
      "number": "3774",
      "isSimilar": false
    },
    "anchor": {
      "number": "778",
      "isSimilar": false
    },
    "madeira": {
      "number": "1909",
      "isSimilar": false
    }
  },
  {
    "r": 231,
    "g": 206,
    "b": 185,
    "gamma": {
      "number": "3030",
      "isSimilar": false
    },
    "dmc": {
      "number": "950",
      "isSimilar": false
    },
    "anchor": {
      "number": "4146",
      "isSimilar": false
    },
    "madeira": {
      "number": "2309",
      "isSimilar": false
    }
  },
  {
    "r": 216,
    "g": 179,
    "b": 157,
    "gamma": {
      "number": "0052",
      "isSimilar": false
    },
    "dmc": {
      "number": "3773",
      "isSimilar": false
    },
    "anchor": {
      "number": "1008",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 196,
    "g": 154,
    "b": 135,
    "gamma": {
      "number": "3031",
      "isSimilar": false
    },
    "dmc": {
      "number": "407",
      "isSimilar": false
    },
    "anchor": {
      "number": "914",
      "isSimilar": false
    },
    "madeira": {
      "number": "2312",
      "isSimilar": true
    }
  },
  {
    "r": 182,
    "g": 132,
    "b": 114,
    "gamma": {
      "number": "3028",
      "isSimilar": false
    },
    "dmc": {
      "number": "3859",
      "isSimilar": false
    },
    "anchor": {
      "number": "914",
      "isSimilar": false
    },
    "madeira": {
      "number": "2312",
      "isSimilar": false
    }
  },
  {
    "r": 184,
    "g": 132,
    "b": 108,
    "gamma": {
      "number": "3215",
      "isSimilar": false
    },
    "dmc": {
      "number": "3772",
      "isSimilar": false
    },
    "anchor": {
      "number": "1007",
      "isSimilar": false
    },
    "madeira": {
      "number": "2601",
      "isSimilar": false
    }
  },
  {
    "r": 140,
    "g": 89,
    "b": 62,
    "gamma": {
      "number": "3216",
      "isSimilar": false
    },
    "dmc": {
      "number": "632",
      "isSimilar": false
    },
    "anchor": {
      "number": "936",
      "isSimilar": false
    },
    "madeira": {
      "number": "2311",
      "isSimilar": false
    }
  },
  {
    "r": 141,
    "g": 87,
    "b": 69,
    "gamma": {
      "number": "3029",
      "isSimilar": false
    },
    "dmc": {
      "number": "3858",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "810",
      "isSimilar": false
    }
  },
  {
    "r": 254,
    "g": 235,
    "b": 226,
    "gamma": {
      "number": "0309",
      "isSimilar": false
    },
    "dmc": {
      "number": "948",
      "isSimilar": false
    },
    "anchor": {
      "number": "1011",
      "isSimilar": false
    },
    "madeira": {
      "number": "306",
      "isSimilar": false
    }
  },
  {
    "r": 251,
    "g": 219,
    "b": 205,
    "gamma": {
      "number": "0310",
      "isSimilar": false
    },
    "dmc": {
      "number": "967",
      "isSimilar": false
    },
    "anchor": {
      "number": "1012",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 251,
    "g": 204,
    "b": 184,
    "gamma": {
      "number": "0045",
      "isSimilar": false
    },
    "dmc": {
      "number": "3824",
      "isSimilar": true
    },
    "anchor": {
      "number": "9",
      "isSimilar": false
    },
    "madeira": {
      "number": "2503",
      "isSimilar": false
    }
  },
  {
    "r": 251,
    "g": 190,
    "b": 157,
    "gamma": {
      "number": "0312",
      "isSimilar": false
    },
    "dmc": {
      "number": "3341",
      "isSimilar": false
    },
    "anchor": {
      "number": "328",
      "isSimilar": false
    },
    "madeira": {
      "number": "302",
      "isSimilar": false
    }
  },
  {
    "r": 243,
    "g": 131,
    "b": 81,
    "gamma": {
      "number": "3202",
      "isSimilar": false
    },
    "dmc": {
      "number": "3340",
      "isSimilar": false
    },
    "anchor": {
      "number": "328",
      "isSimilar": false
    },
    "madeira": {
      "number": "301",
      "isSimilar": false
    }
  },
  {
    "r": 247,
    "g": 132,
    "b": 101,
    "gamma": {
      "number": "0314",
      "isSimilar": false
    },
    "dmc": {
      "number": "351",
      "isSimilar": true
    },
    "anchor": {
      "number": "328",
      "isSimilar": true
    },
    "madeira": {
      "number": "301",
      "isSimilar": false
    }
  },
  {
    "r": 240,
    "g": 110,
    "b": 70,
    "gamma": {
      "number": "0315",
      "isSimilar": false
    },
    "dmc": {
      "number": "608",
      "isSimilar": true
    },
    "anchor": {
      "number": "332",
      "isSimilar": false
    },
    "madeira": {
      "number": "206",
      "isSimilar": false
    }
  },
  {
    "r": 225,
    "g": 87,
    "b": 41,
    "gamma": {
      "number": "0044",
      "isSimilar": false
    },
    "dmc": {
      "number": "946",
      "isSimilar": false
    },
    "anchor": {
      "number": "332",
      "isSimilar": false
    },
    "madeira": {
      "number": "207",
      "isSimilar": false
    }
  },
  {
    "r": 234,
    "g": 89,
    "b": 44,
    "gamma": {
      "number": "0011",
      "isSimilar": false
    },
    "dmc": {
      "number": "606",
      "isSimilar": false
    },
    "anchor": {
      "number": "335",
      "isSimilar": false
    },
    "madeira": {
      "number": "209",
      "isSimilar": false
    }
  },
  {
    "r": 253,
    "g": 195,
    "b": 145,
    "gamma": {
      "number": "3203",
      "isSimilar": false
    },
    "dmc": {
      "number": "3825",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "307",
      "isSimilar": true
    }
  },
  {
    "r": 214,
    "g": 131,
    "b": 77,
    "gamma": {
      "number": "0046",
      "isSimilar": false
    },
    "dmc": {
      "number": "922",
      "isSimilar": false
    },
    "anchor": {
      "number": "1003",
      "isSimilar": true
    },
    "madeira": {
      "number": "310",
      "isSimilar": false
    }
  },
  {
    "r": 195,
    "g": 107,
    "b": 41,
    "gamma": {
      "number": "3205",
      "isSimilar": false
    },
    "dmc": {
      "number": "921",
      "isSimilar": false
    },
    "anchor": {
      "number": "1004",
      "isSimilar": true
    },
    "madeira": {
      "number": "2306",
      "isSimilar": false
    }
  },
  {
    "r": 167,
    "g": 79,
    "b": 42,
    "gamma": {
      "number": "0032",
      "isSimilar": false
    },
    "dmc": {
      "number": "920",
      "isSimilar": false
    },
    "anchor": {
      "number": "1004",
      "isSimilar": false
    },
    "madeira": {
      "number": "312",
      "isSimilar": false
    }
  },
  {
    "r": 155,
    "g": 59,
    "b": 27,
    "gamma": {
      "number": "3206",
      "isSimilar": false
    },
    "dmc": {
      "number": "919",
      "isSimilar": false
    },
    "anchor": {
      "number": "340",
      "isSimilar": false
    },
    "madeira": {
      "number": "313",
      "isSimilar": false
    }
  },
  {
    "r": 140,
    "g": 59,
    "b": 26,
    "gamma": {
      "number": "0771",
      "isSimilar": false
    },
    "dmc": {
      "number": "918",
      "isSimilar": false
    },
    "anchor": {
      "number": "341",
      "isSimilar": false
    },
    "madeira": {
      "number": "314",
      "isSimilar": false
    }
  },
  {
    "r": 248,
    "g": 238,
    "b": 220,
    "gamma": {
      "number": "0040",
      "isSimilar": false
    },
    "dmc": {
      "number": "3770",
      "isSimilar": false
    },
    "anchor": {
      "number": "1009",
      "isSimilar": false
    },
    "madeira": {
      "number": "2314",
      "isSimilar": false
    }
  },
  {
    "r": 235,
    "g": 188,
    "b": 154,
    "gamma": {
      "number": "0047",
      "isSimilar": false
    },
    "dmc": {
      "number": "3856",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "2309",
      "isSimilar": false
    }
  },
  {
    "r": 232,
    "g": 167,
    "b": 109,
    "gamma": {
      "number": "3207",
      "isSimilar": false
    },
    "dmc": {
      "number": "402",
      "isSimilar": false
    },
    "anchor": {
      "number": "1047",
      "isSimilar": false
    },
    "madeira": {
      "number": "2301",
      "isSimilar": false
    }
  },
  {
    "r": 242,
    "g": 224,
    "b": 206,
    "gamma": {
      "number": "3021",
      "isSimilar": false
    },
    "dmc": {
      "number": "951",
      "isSimilar": false
    },
    "anchor": {
      "number": "1010",
      "isSimilar": false
    },
    "madeira": {
      "number": "2308",
      "isSimilar": false
    }
  },
  {
    "r": 247,
    "g": 202,
    "b": 132,
    "gamma": {
      "number": "3208",
      "isSimilar": false
    },
    "dmc": {
      "number": "3855",
      "isSimilar": false
    },
    "anchor": {
      "number": "311",
      "isSimilar": false
    },
    "madeira": {
      "number": "2012",
      "isSimilar": false
    }
  },
  {
    "r": 247,
    "g": 178,
    "b": 92,
    "gamma": {
      "number": "3209",
      "isSimilar": false
    },
    "dmc": {
      "number": "3854",
      "isSimilar": false
    },
    "anchor": {
      "number": "311",
      "isSimilar": false
    },
    "madeira": {
      "number": "2307",
      "isSimilar": false
    }
  },
  {
    "r": 232,
    "g": 170,
    "b": 95,
    "gamma": {
      "number": "0050",
      "isSimilar": false
    },
    "dmc": {
      "number": "3827",
      "isSimilar": false
    },
    "anchor": {
      "number": "1002",
      "isSimilar": false
    },
    "madeira": {
      "number": "2013",
      "isSimilar": false
    }
  },
  {
    "r": 229,
    "g": 144,
    "b": 52,
    "gamma": {
      "number": "3210",
      "isSimilar": false
    },
    "dmc": {
      "number": "977",
      "isSimilar": false
    },
    "anchor": {
      "number": "1002",
      "isSimilar": false
    },
    "madeira": {
      "number": "2211",
      "isSimilar": false
    }
  },
  {
    "r": 230,
    "g": 151,
    "b": 63,
    "gamma": {
      "number": "0049",
      "isSimilar": false
    },
    "dmc": {
      "number": "976",
      "isSimilar": true
    },
    "anchor": {
      "number": "1001",
      "isSimilar": false
    },
    "madeira": {
      "number": "2302",
      "isSimilar": false
    }
  },
  {
    "r": 194,
    "g": 125,
    "b": 69,
    "gamma": {
      "number": "0048",
      "isSimilar": false
    },
    "dmc": {
      "number": "3776",
      "isSimilar": false
    },
    "anchor": {
      "number": "1048",
      "isSimilar": false
    },
    "madeira": {
      "number": "2011",
      "isSimilar": false
    }
  },
  {
    "r": 171,
    "g": 103,
    "b": 52,
    "gamma": {
      "number": "3022",
      "isSimilar": false
    },
    "dmc": {
      "number": "301",
      "isSimilar": false
    },
    "anchor": {
      "number": "1049",
      "isSimilar": true
    },
    "madeira": {
      "number": "2306",
      "isSimilar": false
    }
  },
  {
    "r": 147,
    "g": 77,
    "b": 41,
    "gamma": {
      "number": "3023",
      "isSimilar": false
    },
    "dmc": {
      "number": "400",
      "isSimilar": false
    },
    "anchor": {
      "number": "351",
      "isSimilar": false
    },
    "madeira": {
      "number": "2305",
      "isSimilar": false
    }
  },
  {
    "r": 116,
    "g": 64,
    "b": 29,
    "gamma": {
      "number": "0002",
      "isSimilar": false
    },
    "dmc": {
      "number": "300",
      "isSimilar": false
    },
    "anchor": {
      "number": "352",
      "isSimilar": false
    },
    "madeira": {
      "number": "2304",
      "isSimilar": false
    }
  },
  {
    "r": 227,
    "g": 190,
    "b": 142,
    "gamma": {
      "number": "0924",
      "isSimilar": false
    },
    "dmc": {
      "number": "945",
      "isSimilar": false
    },
    "anchor": {
      "number": "881",
      "isSimilar": false
    },
    "madeira": {
      "number": "1910",
      "isSimilar": false
    }
  },
  {
    "r": 205,
    "g": 160,
    "b": 114,
    "gamma": {
      "number": "0925",
      "isSimilar": false
    },
    "dmc": {
      "number": "3064",
      "isSimilar": true
    },
    "anchor": {
      "number": "883",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 195,
    "g": 140,
    "b": 85,
    "gamma": {
      "number": "0926",
      "isSimilar": false
    },
    "dmc": {
      "number": "3826",
      "isSimilar": false
    },
    "anchor": {
      "number": "1049",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 169,
    "g": 109,
    "b": 50,
    "gamma": {
      "number": "0927",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "355",
      "isSimilar": false
    },
    "madeira": {
      "number": "2601",
      "isSimilar": false
    }
  },
  {
    "r": 148,
    "g": 92,
    "b": 45,
    "gamma": {
      "number": "0928",
      "isSimilar": false
    },
    "dmc": {
      "number": "975",
      "isSimilar": false
    },
    "anchor": {
      "number": "357",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 130,
    "g": 85,
    "b": 52,
    "gamma": {
      "number": "0929",
      "isSimilar": false
    },
    "dmc": {
      "number": "433",
      "isSimilar": false
    },
    "anchor": {
      "number": "352",
      "isSimilar": false
    },
    "madeira": {
      "number": "2311",
      "isSimilar": false
    }
  },
  {
    "r": 96,
    "g": 57,
    "b": 32,
    "gamma": {
      "number": "0930",
      "isSimilar": false
    },
    "dmc": {
      "number": "300",
      "isSimilar": false
    },
    "anchor": {
      "number": "352",
      "isSimilar": false
    },
    "madeira": {
      "number": "2005",
      "isSimilar": false
    }
  },
  {
    "r": 241,
    "g": 216,
    "b": 99,
    "gamma": {
      "number": "0099",
      "isSimilar": false
    },
    "dmc": {
      "number": "3822",
      "isSimilar": false
    },
    "anchor": {
      "number": "295",
      "isSimilar": true
    },
    "madeira": {
      "number": "0112",
      "isSimilar": true
    }
  },
  {
    "r": 232,
    "g": 181,
    "b": 57,
    "gamma": {
      "number": "3248",
      "isSimilar": false
    },
    "dmc": {
      "number": "728",
      "isSimilar": false
    },
    "anchor": {
      "number": "306",
      "isSimilar": true
    },
    "madeira": {
      "number": "2509",
      "isSimilar": false
    }
  },
  {
    "r": 213,
    "g": 156,
    "b": 76,
    "gamma": {
      "number": "0214",
      "isSimilar": false
    },
    "dmc": {
      "number": "783",
      "isSimilar": true
    },
    "anchor": {
      "number": "890",
      "isSimilar": false
    },
    "madeira": {
      "number": "2204",
      "isSimilar": false
    }
  },
  {
    "r": 196,
    "g": 134,
    "b": 58,
    "gamma": {
      "number": "0007",
      "isSimilar": false
    },
    "dmc": {
      "number": "435",
      "isSimilar": false
    },
    "anchor": {
      "number": "1046",
      "isSimilar": false
    },
    "madeira": {
      "number": "2010",
      "isSimilar": false
    }
  },
  {
    "r": 183,
    "g": 130,
    "b": 55,
    "gamma": {
      "number": "0022",
      "isSimilar": false
    },
    "dmc": {
      "number": "434",
      "isSimilar": false
    },
    "anchor": {
      "number": "310",
      "isSimilar": false
    },
    "madeira": {
      "number": "2009",
      "isSimilar": false
    }
  },
  {
    "r": 226,
    "g": 183,
    "b": 58,
    "gamma": {
      "number": "3190",
      "isSimilar": false
    },
    "dmc": {
      "number": "3821",
      "isSimilar": false
    },
    "anchor": {
      "number": "305",
      "isSimilar": false
    },
    "madeira": {
      "number": "2510",
      "isSimilar": false
    }
  },
  {
    "r": 221,
    "g": 180,
    "b": 66,
    "gamma": {
      "number": "3020",
      "isSimilar": false
    },
    "dmc": {
      "number": "3820",
      "isSimilar": false
    },
    "anchor": {
      "number": "907",
      "isSimilar": false
    },
    "madeira": {
      "number": "2509",
      "isSimilar": false
    }
  },
  {
    "r": 204,
    "g": 151,
    "b": 43,
    "gamma": {
      "number": "3191",
      "isSimilar": false
    },
    "dmc": {
      "number": "3852",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "2203",
      "isSimilar": true
    }
  },
  {
    "r": 209,
    "g": 157,
    "b": 47,
    "gamma": {
      "number": "0097",
      "isSimilar": false
    },
    "dmc": {
      "number": "783",
      "isSimilar": false
    },
    "anchor": {
      "number": "306",
      "isSimilar": false
    },
    "madeira": {
      "number": "2514",
      "isSimilar": false
    }
  },
  {
    "r": 179,
    "g": 129,
    "b": 50,
    "gamma": {
      "number": "3185",
      "isSimilar": false
    },
    "dmc": {
      "number": "782",
      "isSimilar": false
    },
    "anchor": {
      "number": "308",
      "isSimilar": false
    },
    "madeira": {
      "number": "2210",
      "isSimilar": false
    }
  },
  {
    "r": 155,
    "g": 99,
    "b": 36,
    "gamma": {
      "number": "3186",
      "isSimilar": false
    },
    "dmc": {
      "number": "780",
      "isSimilar": false
    },
    "anchor": {
      "number": "310",
      "isSimilar": false
    },
    "madeira": {
      "number": "2214",
      "isSimilar": false
    }
  },
  {
    "r": 238,
    "g": 215,
    "b": 161,
    "gamma": {
      "number": "2125",
      "isSimilar": false
    },
    "dmc": {
      "number": "676",
      "isSimilar": false
    },
    "anchor": {
      "number": "361",
      "isSimilar": false
    },
    "madeira": {
      "number": "2207",
      "isSimilar": true
    }
  },
  {
    "r": 219,
    "g": 175,
    "b": 105,
    "gamma": {
      "number": "2130",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "362",
      "isSimilar": false
    },
    "madeira": {
      "number": "2208",
      "isSimilar": false
    }
  },
  {
    "r": 204,
    "g": 153,
    "b": 61,
    "gamma": {
      "number": "3019",
      "isSimilar": false
    },
    "dmc": {
      "number": "729",
      "isSimilar": false
    },
    "anchor": {
      "number": "890",
      "isSimilar": false
    },
    "madeira": {
      "number": "2204",
      "isSimilar": false
    }
  },
  {
    "r": 196,
    "g": 148,
    "b": 79,
    "gamma": {
      "number": "2135",
      "isSimilar": false
    },
    "dmc": {
      "number": "781",
      "isSimilar": false
    },
    "anchor": {
      "number": "308",
      "isSimilar": false
    },
    "madeira": {
      "number": "2209",
      "isSimilar": false
    }
  },
  {
    "r": 175,
    "g": 131,
    "b": 52,
    "gamma": {
      "number": "3188",
      "isSimilar": false
    },
    "dmc": {
      "number": "680",
      "isSimilar": false
    },
    "anchor": {
      "number": "901",
      "isSimilar": false
    },
    "madeira": {
      "number": "2210",
      "isSimilar": false
    }
  },
  {
    "r": 164,
    "g": 120,
    "b": 41,
    "gamma": {
      "number": "3189",
      "isSimilar": false
    },
    "dmc": {
      "number": "3829",
      "isSimilar": false
    },
    "anchor": {
      "number": "901",
      "isSimilar": false
    },
    "madeira": {
      "number": "2210",
      "isSimilar": false
    }
  },
  {
    "r": 186,
    "g": 130,
    "b": 37,
    "gamma": {
      "number": "0215",
      "isSimilar": false
    },
    "dmc": {
      "number": "781",
      "isSimilar": false
    },
    "anchor": {
      "number": "309",
      "isSimilar": false
    },
    "madeira": {
      "number": "2104",
      "isSimilar": false
    }
  },
  {
    "r": 147,
    "g": 102,
    "b": 38,
    "gamma": {
      "number": "0216",
      "isSimilar": false
    },
    "dmc": {
      "number": "780",
      "isSimilar": false
    },
    "anchor": {
      "number": "310",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 122,
    "g": 81,
    "b": 39,
    "gamma": {
      "number": "0217",
      "isSimilar": false
    },
    "dmc": {
      "number": "433",
      "isSimilar": false
    },
    "anchor": {
      "number": "358",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 101,
    "g": 60,
    "b": 30,
    "gamma": {
      "number": "0219",
      "isSimilar": false
    },
    "dmc": {
      "number": "300",
      "isSimilar": false
    },
    "anchor": {
      "number": "359",
      "isSimilar": false
    },
    "madeira": {
      "number": "2602",
      "isSimilar": false
    }
  },
  {
    "r": 99,
    "g": 70,
    "b": 31,
    "gamma": {
      "number": "0055",
      "isSimilar": false
    },
    "dmc": {
      "number": "801",
      "isSimilar": false
    },
    "anchor": {
      "number": "359",
      "isSimilar": false
    },
    "madeira": {
      "number": "2007",
      "isSimilar": false
    }
  },
  {
    "r": 80,
    "g": 47,
    "b": 27,
    "gamma": {
      "number": "0220",
      "isSimilar": false
    },
    "dmc": {
      "number": "898",
      "isSimilar": false
    },
    "anchor": {
      "number": "360",
      "isSimilar": false
    },
    "madeira": {
      "number": "2007",
      "isSimilar": false
    }
  },
  {
    "r": 232,
    "g": 210,
    "b": 144,
    "gamma": {
      "number": "0098",
      "isSimilar": false
    },
    "dmc": {
      "number": "738",
      "isSimilar": false
    },
    "anchor": {
      "number": "372",
      "isSimilar": false
    },
    "madeira": {
      "number": "2102",
      "isSimilar": false
    }
  },
  {
    "r": 175,
    "g": 136,
    "b": 70,
    "gamma": {
      "number": "3182",
      "isSimilar": false
    },
    "dmc": {
      "number": "3828",
      "isSimilar": false
    },
    "anchor": {
      "number": "373",
      "isSimilar": false
    },
    "madeira": {
      "number": "2109",
      "isSimilar": false
    }
  },
  {
    "r": 134,
    "g": 98,
    "b": 38,
    "gamma": {
      "number": "3184",
      "isSimilar": false
    },
    "dmc": {
      "number": "420",
      "isSimilar": false
    },
    "anchor": {
      "number": "375",
      "isSimilar": false
    },
    "madeira": {
      "number": "2105",
      "isSimilar": false
    }
  },
  {
    "r": 119,
    "g": 88,
    "b": 32,
    "gamma": {
      "number": "3183",
      "isSimilar": false
    },
    "dmc": {
      "number": "869",
      "isSimilar": false
    },
    "anchor": {
      "number": "944",
      "isSimilar": false
    },
    "madeira": {
      "number": "2113",
      "isSimilar": false
    }
  },
  {
    "r": 245,
    "g": 240,
    "b": 223,
    "gamma": {
      "number": "3187",
      "isSimilar": false
    },
    "dmc": {
      "number": "746",
      "isSimilar": false
    },
    "anchor": {
      "number": "275",
      "isSimilar": false
    },
    "madeira": {
      "number": "101",
      "isSimilar": false
    }
  },
  {
    "r": 236,
    "g": 236,
    "b": 210,
    "gamma": {
      "number": "0095",
      "isSimilar": false
    },
    "dmc": {
      "number": "3047",
      "isSimilar": false
    },
    "anchor": {
      "number": "852",
      "isSimilar": false
    },
    "madeira": {
      "number": "2205",
      "isSimilar": false
    }
  },
  {
    "r": 237,
    "g": 224,
    "b": 186,
    "gamma": {
      "number": "0096",
      "isSimilar": false
    },
    "dmc": {
      "number": "677",
      "isSimilar": false
    },
    "anchor": {
      "number": "886",
      "isSimilar": false
    },
    "madeira": {
      "number": "2207",
      "isSimilar": false
    }
  },
  {
    "r": 225,
    "g": 195,
    "b": 149,
    "gamma": {
      "number": "0054",
      "isSimilar": false
    },
    "dmc": {
      "number": "437",
      "isSimilar": false
    },
    "anchor": {
      "number": "362",
      "isSimilar": false
    },
    "madeira": {
      "number": "2012",
      "isSimilar": false
    }
  },
  {
    "r": 192,
    "g": 149,
    "b": 87,
    "gamma": {
      "number": "3218",
      "isSimilar": false
    },
    "dmc": {
      "number": "436",
      "isSimilar": false
    },
    "anchor": {
      "number": "1045",
      "isSimilar": false
    },
    "madeira": {
      "number": "2011",
      "isSimilar": false
    }
  },
  {
    "r": 177,
    "g": 149,
    "b": 99,
    "gamma": {
      "number": "3018",
      "isSimilar": false
    },
    "dmc": {
      "number": "3045",
      "isSimilar": false
    },
    "anchor": {
      "number": "888",
      "isSimilar": false
    },
    "madeira": {
      "number": "2103",
      "isSimilar": false
    }
  },
  {
    "r": 157,
    "g": 118,
    "b": 61,
    "gamma": {
      "number": "3253",
      "isSimilar": false
    },
    "dmc": {
      "number": "167",
      "isSimilar": false
    },
    "anchor": {
      "number": "375",
      "isSimilar": false
    },
    "madeira": {
      "number": "2104",
      "isSimilar": false
    }
  },
  {
    "r": 123,
    "g": 94,
    "b": 38,
    "gamma": {
      "number": "0657",
      "isSimilar": false
    },
    "dmc": {
      "number": "801",
      "isSimilar": true
    },
    "anchor": {
      "number": "359",
      "isSimilar": false
    },
    "madeira": {
      "number": "2007",
      "isSimilar": false
    }
  },
  {
    "r": 226,
    "g": 209,
    "b": 178,
    "gamma": {
      "number": "0802",
      "isSimilar": false
    },
    "dmc": {
      "number": "739",
      "isSimilar": false
    },
    "anchor": {
      "number": "366",
      "isSimilar": false
    },
    "madeira": {
      "number": "2404",
      "isSimilar": false
    }
  },
  {
    "r": 224,
    "g": 208,
    "b": 176,
    "gamma": {
      "number": "0018",
      "isSimilar": false
    },
    "dmc": {
      "number": "739",
      "isSimilar": false
    },
    "anchor": {
      "number": "276",
      "isSimilar": false
    },
    "madeira": {
      "number": "2001",
      "isSimilar": false
    }
  },
  {
    "r": 216,
    "g": 191,
    "b": 149,
    "gamma": {
      "number": "0803",
      "isSimilar": false
    },
    "dmc": {
      "number": "738",
      "isSimilar": false
    },
    "anchor": {
      "number": "942",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 209,
    "g": 183,
    "b": 127,
    "gamma": {
      "number": "0804",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "373",
      "isSimilar": true
    },
    "madeira": {
      "number": "2102",
      "isSimilar": false
    }
  },
  {
    "r": 195,
    "g": 160,
    "b": 112,
    "gamma": {
      "number": "0805",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "374",
      "isSimilar": false
    },
    "madeira": {
      "number": "2103",
      "isSimilar": true
    }
  },
  {
    "r": 187,
    "g": 147,
    "b": 92,
    "gamma": {
      "number": "0806",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "374",
      "isSimilar": true
    },
    "madeira": {
      "number": "2104",
      "isSimilar": false
    }
  },
  {
    "r": 164,
    "g": 125,
    "b": 75,
    "gamma": {
      "number": "0807",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "375",
      "isSimilar": false
    },
    "madeira": {
      "number": "2009",
      "isSimilar": true
    }
  },
  {
    "r": 132,
    "g": 95,
    "b": 46,
    "gamma": {
      "number": "0808",
      "isSimilar": false
    },
    "dmc": {
      "number": "3862",
      "isSimilar": false
    },
    "anchor": {
      "number": "944",
      "isSimilar": true
    },
    "madeira": {
      "number": "1913",
      "isSimilar": false
    }
  },
  {
    "r": 119,
    "g": 84,
    "b": 55,
    "gamma": {
      "number": "0809",
      "isSimilar": false
    },
    "dmc": {
      "number": "433",
      "isSimilar": false
    },
    "anchor": {
      "number": "358",
      "isSimilar": false
    },
    "madeira": {
      "number": "2008",
      "isSimilar": false
    }
  },
  {
    "r": 87,
    "g": 60,
    "b": 42,
    "gamma": {
      "number": "0811",
      "isSimilar": false
    },
    "dmc": {
      "number": "838",
      "isSimilar": false
    },
    "anchor": {
      "number": "1088",
      "isSimilar": false
    },
    "madeira": {
      "number": "1914",
      "isSimilar": false
    }
  },
  {
    "r": 68,
    "g": 46,
    "b": 16,
    "gamma": {
      "number": "3224",
      "isSimilar": false
    },
    "dmc": {
      "number": "3031",
      "isSimilar": false
    },
    "anchor": {
      "number": "905",
      "isSimilar": false
    },
    "madeira": {
      "number": "2003",
      "isSimilar": false
    }
  },
  {
    "r": 59,
    "g": 40,
    "b": 17,
    "gamma": {
      "number": "0812",
      "isSimilar": false
    },
    "dmc": {
      "number": "938",
      "isSimilar": false
    },
    "anchor": {
      "number": "381",
      "isSimilar": false
    },
    "madeira": {
      "number": "2005",
      "isSimilar": false
    }
  },
  {
    "r": 45,
    "g": 23,
    "b": 5,
    "gamma": {
      "number": "3219",
      "isSimilar": false
    },
    "dmc": {
      "number": "3371",
      "isSimilar": false
    },
    "anchor": {
      "number": "382",
      "isSimilar": false
    },
    "madeira": {
      "number": "2004",
      "isSimilar": false
    }
  },
  {
    "r": 246,
    "g": 242,
    "b": 235,
    "gamma": {
      "number": "3042",
      "isSimilar": false
    },
    "dmc": {
      "number": "3866",
      "isSimilar": false
    },
    "anchor": {
      "number": "926",
      "isSimilar": false
    },
    "madeira": {
      "number": "1908",
      "isSimilar": true
    }
  },
  {
    "r": 205,
    "g": 185,
    "b": 164,
    "gamma": {
      "number": "3220",
      "isSimilar": false
    },
    "dmc": {
      "number": "842",
      "isSimilar": false
    },
    "anchor": {
      "number": "1080",
      "isSimilar": false
    },
    "madeira": {
      "number": "1907",
      "isSimilar": false
    }
  },
  {
    "r": 179,
    "g": 159,
    "b": 140,
    "gamma": {
      "number": "0057",
      "isSimilar": false
    },
    "dmc": {
      "number": "841",
      "isSimilar": false
    },
    "anchor": {
      "number": "1082",
      "isSimilar": false
    },
    "madeira": {
      "number": "1911",
      "isSimilar": false
    }
  },
  {
    "r": 151,
    "g": 126,
    "b": 101,
    "gamma": {
      "number": "3221",
      "isSimilar": false
    },
    "dmc": {
      "number": "840",
      "isSimilar": false
    },
    "anchor": {
      "number": "1084",
      "isSimilar": false
    },
    "madeira": {
      "number": "1912",
      "isSimilar": true
    }
  },
  {
    "r": 104,
    "g": 78,
    "b": 55,
    "gamma": {
      "number": "3222",
      "isSimilar": false
    },
    "dmc": {
      "number": "839",
      "isSimilar": false
    },
    "anchor": {
      "number": "1086",
      "isSimilar": false
    },
    "madeira": {
      "number": "1913",
      "isSimilar": false
    }
  },
  {
    "r": 240,
    "g": 227,
    "b": 212,
    "gamma": {
      "number": "3033",
      "isSimilar": false
    },
    "dmc": {
      "number": "543",
      "isSimilar": false
    },
    "anchor": {
      "number": "933",
      "isSimilar": false
    },
    "madeira": {
      "number": "1909",
      "isSimilar": false
    }
  },
  {
    "r": 201,
    "g": 175,
    "b": 147,
    "gamma": {
      "number": "3034",
      "isSimilar": false
    },
    "dmc": {
      "number": "3864",
      "isSimilar": false
    },
    "anchor": {
      "number": "376",
      "isSimilar": false
    },
    "madeira": {
      "number": "1910",
      "isSimilar": false
    }
  },
  {
    "r": 195,
    "g": 173,
    "b": 154,
    "gamma": {
      "number": "0056",
      "isSimilar": false
    },
    "dmc": {
      "number": "3864",
      "isSimilar": true
    },
    "anchor": {
      "number": "1080",
      "isSimilar": true
    },
    "madeira": {
      "number": "1906",
      "isSimilar": false
    }
  },
  {
    "r": 164,
    "g": 134,
    "b": 108,
    "gamma": {
      "number": "3035",
      "isSimilar": false
    },
    "dmc": {
      "number": "3863",
      "isSimilar": false
    },
    "anchor": {
      "number": "379",
      "isSimilar": false
    },
    "madeira": {
      "number": "1912",
      "isSimilar": false
    }
  },
  {
    "r": 158,
    "g": 136,
    "b": 127,
    "gamma": {
      "number": "3217",
      "isSimilar": false
    },
    "dmc": {
      "number": "3861",
      "isSimilar": false
    },
    "anchor": {
      "number": "677",
      "isSimilar": true
    },
    "madeira": {
      "number": "1912",
      "isSimilar": true
    }
  },
  {
    "r": 148,
    "g": 121,
    "b": 116,
    "gamma": {
      "number": "3032",
      "isSimilar": false
    },
    "dmc": {
      "number": "3860",
      "isSimilar": false
    },
    "anchor": {
      "number": "379",
      "isSimilar": false
    },
    "madeira": {
      "number": "0806",
      "isSimilar": false
    }
  },
  {
    "r": 96,
    "g": 69,
    "b": 69,
    "gamma": {
      "number": "3249",
      "isSimilar": false
    },
    "dmc": {
      "number": "779",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 188,
    "g": 174,
    "b": 131,
    "gamma": {
      "number": "3179",
      "isSimilar": false
    },
    "dmc": {
      "number": "613",
      "isSimilar": false
    },
    "anchor": {
      "number": "831",
      "isSimilar": false
    },
    "madeira": {
      "number": "1902",
      "isSimilar": false
    }
  },
  {
    "r": 145,
    "g": 125,
    "b": 74,
    "gamma": {
      "number": "3180",
      "isSimilar": false
    },
    "dmc": {
      "number": "612",
      "isSimilar": false
    },
    "anchor": {
      "number": "832",
      "isSimilar": true
    },
    "madeira": {
      "number": "2108",
      "isSimilar": false
    }
  },
  {
    "r": 128,
    "g": 102,
    "b": 56,
    "gamma": {
      "number": "3181",
      "isSimilar": false
    },
    "dmc": {
      "number": "610",
      "isSimilar": false
    },
    "anchor": {
      "number": "898",
      "isSimilar": false
    },
    "madeira": {
      "number": "2107",
      "isSimilar": true
    }
  },
  {
    "r": 231,
    "g": 229,
    "b": 221,
    "gamma": {
      "number": "0034",
      "isSimilar": false
    },
    "dmc": {
      "number": "3866",
      "isSimilar": false
    },
    "anchor": {
      "number": "386",
      "isSimilar": false
    },
    "madeira": {
      "number": "1908",
      "isSimilar": false
    }
  },
  {
    "r": 225,
    "g": 225,
    "b": 217,
    "gamma": {
      "number": "3036",
      "isSimilar": false
    },
    "dmc": {
      "number": "712",
      "isSimilar": false
    },
    "anchor": {
      "number": "390",
      "isSimilar": false
    },
    "madeira": {
      "number": "1908",
      "isSimilar": true
    }
  },
  {
    "r": 186,
    "g": 181,
    "b": 153,
    "gamma": {
      "number": "0059",
      "isSimilar": false
    },
    "dmc": {
      "number": "642",
      "isSimilar": false
    },
    "anchor": {
      "number": "392",
      "isSimilar": false
    },
    "madeira": {
      "number": "1906",
      "isSimilar": false
    }
  },
  {
    "r": 147,
    "g": 137,
    "b": 98,
    "gamma": {
      "number": "3037",
      "isSimilar": false
    },
    "dmc": {
      "number": "640",
      "isSimilar": false
    },
    "anchor": {
      "number": "393",
      "isSimilar": false
    },
    "madeira": {
      "number": "1813",
      "isSimilar": false
    }
  },
  {
    "r": 96,
    "g": 91,
    "b": 69,
    "gamma": {
      "number": "3227",
      "isSimilar": false
    },
    "dmc": {
      "number": "3787",
      "isSimilar": false
    },
    "anchor": {
      "number": "273",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 59,
    "g": 46,
    "b": 8,
    "gamma": {
      "number": "3228",
      "isSimilar": false
    },
    "dmc": {
      "number": "3021",
      "isSimilar": false
    },
    "anchor": {
      "number": "905",
      "isSimilar": false
    },
    "madeira": {
      "number": "1904",
      "isSimilar": false
    }
  },
  {
    "r": 220,
    "g": 220,
    "b": 215,
    "gamma": {
      "number": "3038",
      "isSimilar": false
    },
    "dmc": {
      "number": "3024",
      "isSimilar": false
    },
    "anchor": {
      "number": "388",
      "isSimilar": false
    },
    "madeira": {
      "number": "1805",
      "isSimilar": false
    }
  },
  {
    "r": 178,
    "g": 174,
    "b": 149,
    "gamma": {
      "number": "3039",
      "isSimilar": false
    },
    "dmc": {
      "number": "3023",
      "isSimilar": false
    },
    "anchor": {
      "number": "899",
      "isSimilar": false
    },
    "madeira": {
      "number": "1902",
      "isSimilar": true
    }
  },
  {
    "r": 147,
    "g": 142,
    "b": 110,
    "gamma": {
      "number": "3040",
      "isSimilar": false
    },
    "dmc": {
      "number": "3022",
      "isSimilar": false
    },
    "anchor": {
      "number": "8581",
      "isSimilar": true
    },
    "madeira": {
      "number": "1812",
      "isSimilar": false
    }
  },
  {
    "r": 250,
    "g": 249,
    "b": 245,
    "gamma": {
      "number": "3250",
      "isSimilar": false
    },
    "dmc": {
      "number": "3865",
      "isSimilar": false
    },
    "anchor": {
      "number": "2",
      "isSimilar": false
    },
    "madeira": {
      "number": "2402",
      "isSimilar": false
    }
  },
  {
    "r": 242,
    "g": 239,
    "b": 229,
    "gamma": {
      "number": "0001",
      "isSimilar": false
    },
    "dmc": {
      "number": "Ecru",
      "isSimilar": false
    },
    "anchor": {
      "number": "831",
      "isSimilar": false
    },
    "madeira": {
      "number": "Ecru",
      "isSimilar": false
    }
  },
  {
    "r": 226,
    "g": 223,
    "b": 211,
    "gamma": {
      "number": "3225",
      "isSimilar": false
    },
    "dmc": {
      "number": "822",
      "isSimilar": false
    },
    "anchor": {
      "number": "390",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 214,
    "g": 211,
    "b": 193,
    "gamma": {
      "number": "3247",
      "isSimilar": false
    },
    "dmc": {
      "number": "644",
      "isSimilar": false
    },
    "anchor": {
      "number": "391",
      "isSimilar": true
    },
    "madeira": {
      "number": "1814",
      "isSimilar": false
    }
  },
  {
    "r": 215,
    "g": 208,
    "b": 194,
    "gamma": {
      "number": "0009",
      "isSimilar": false
    },
    "dmc": {
      "number": "3033",
      "isSimilar": false
    },
    "anchor": {
      "number": "391",
      "isSimilar": false
    },
    "madeira": {
      "number": "2001",
      "isSimilar": false
    }
  },
  {
    "r": 210,
    "g": 202,
    "b": 186,
    "gamma": {
      "number": "0915",
      "isSimilar": false
    },
    "dmc": {
      "number": "3782",
      "isSimilar": false
    },
    "anchor": {
      "number": "1050",
      "isSimilar": false
    },
    "madeira": {
      "number": "1902",
      "isSimilar": false
    }
  },
  {
    "r": 194,
    "g": 185,
    "b": 165,
    "gamma": {
      "number": "0644",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "392",
      "isSimilar": false
    },
    "madeira": {
      "number": "1812",
      "isSimilar": false
    }
  },
  {
    "r": 199,
    "g": 186,
    "b": 162,
    "gamma": {
      "number": "3041",
      "isSimilar": false
    },
    "dmc": {
      "number": "3782",
      "isSimilar": false
    },
    "anchor": {
      "number": "899",
      "isSimilar": false
    },
    "madeira": {
      "number": "1907",
      "isSimilar": false
    }
  },
  {
    "r": 173,
    "g": 161,
    "b": 131,
    "gamma": {
      "number": "3226",
      "isSimilar": false
    },
    "dmc": {
      "number": "3032",
      "isSimilar": false
    },
    "anchor": {
      "number": "903",
      "isSimilar": false
    },
    "madeira": {
      "number": "2002",
      "isSimilar": false
    }
  },
  {
    "r": 158,
    "g": 144,
    "b": 114,
    "gamma": {
      "number": "0917",
      "isSimilar": false
    },
    "dmc": {
      "number": "611",
      "isSimilar": false
    },
    "anchor": {
      "number": "898",
      "isSimilar": false
    },
    "madeira": {
      "number": "1903",
      "isSimilar": false
    }
  },
  {
    "r": 151,
    "g": 130,
    "b": 102,
    "gamma": {
      "number": "0058",
      "isSimilar": false
    },
    "dmc": {
      "number": "3790",
      "isSimilar": false
    },
    "anchor": {
      "number": "393",
      "isSimilar": false
    },
    "madeira": {
      "number": "1903",
      "isSimilar": false
    }
  },
  {
    "r": 116,
    "g": 98,
    "b": 63,
    "gamma": {
      "number": "0919",
      "isSimilar": false
    },
    "dmc": {
      "number": "3790",
      "isSimilar": false
    },
    "anchor": {
      "number": "889",
      "isSimilar": false
    },
    "madeira": {
      "number": "1905",
      "isSimilar": false
    }
  },
  {
    "r": 92,
    "g": 76,
    "b": 45,
    "gamma": {
      "number": "3223",
      "isSimilar": false
    },
    "dmc": {
      "number": "3781",
      "isSimilar": false
    },
    "anchor": {
      "number": "904",
      "isSimilar": false
    },
    "madeira": {
      "number": "2106",
      "isSimilar": true
    }
  },
  {
    "r": 227,
    "g": 220,
    "b": 219,
    "gamma": {
      "number": "0670",
      "isSimilar": false
    },
    "dmc": {
      "number": "453",
      "isSimilar": false
    },
    "anchor": {
      "number": "231",
      "isSimilar": false
    },
    "madeira": {
      "number": "1803",
      "isSimilar": false
    }
  },
  {
    "r": 197,
    "g": 182,
    "b": 180,
    "gamma": {
      "number": "0672",
      "isSimilar": false
    },
    "dmc": {
      "number": "452",
      "isSimilar": true
    },
    "anchor": {
      "number": "232",
      "isSimilar": true
    },
    "madeira": {
      "number": "1803",
      "isSimilar": true
    }
  },
  {
    "r": 182,
    "g": 167,
    "b": 166,
    "gamma": {
      "number": "0053",
      "isSimilar": false
    },
    "dmc": {
      "number": "452",
      "isSimilar": false
    },
    "anchor": {
      "number": "232",
      "isSimilar": false
    },
    "madeira": {
      "number": "1807",
      "isSimilar": false
    }
  },
  {
    "r": 165,
    "g": 153,
    "b": 147,
    "gamma": {
      "number": "0673",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "232",
      "isSimilar": false
    },
    "madeira": {
      "number": "1807",
      "isSimilar": true
    }
  },
  {
    "r": 151,
    "g": 142,
    "b": 135,
    "gamma": {
      "number": "0674",
      "isSimilar": false
    },
    "dmc": {
      "number": "451",
      "isSimilar": false
    },
    "anchor": {
      "number": "233",
      "isSimilar": false
    },
    "madeira": {
      "number": "1808",
      "isSimilar": false
    }
  },
  {
    "r": 97,
    "g": 81,
    "b": 69,
    "gamma": {
      "number": "0676",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "273",
      "isSimilar": false
    },
    "madeira": {
      "number": "1810",
      "isSimilar": false
    }
  },
  {
    "r": 224,
    "g": 222,
    "b": 224,
    "gamma": {
      "number": "0416",
      "isSimilar": false
    },
    "dmc": {
      "number": "3743",
      "isSimilar": true
    },
    "anchor": {
      "number": "234",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 204,
    "g": 193,
    "b": 208,
    "gamma": {
      "number": "0417",
      "isSimilar": false
    },
    "dmc": {
      "number": "3042",
      "isSimilar": false
    },
    "anchor": {
      "number": "870",
      "isSimilar": false
    },
    "madeira": {
      "number": "2612",
      "isSimilar": false
    }
  },
  {
    "r": 149,
    "g": 144,
    "b": 157,
    "gamma": {
      "number": "0061",
      "isSimilar": false
    },
    "dmc": {
      "number": "414",
      "isSimilar": false
    },
    "anchor": {
      "number": "235",
      "isSimilar": true
    },
    "madeira": {
      "number": "1802",
      "isSimilar": false
    }
  },
  {
    "r": 111,
    "g": 101,
    "b": 119,
    "gamma": {
      "number": "0419",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "872",
      "isSimilar": true
    },
    "madeira": {
      "number": "1810",
      "isSimilar": true
    }
  },
  {
    "r": 64,
    "g": 58,
    "b": 56,
    "gamma": {
      "number": "4195",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "873",
      "isSimilar": false
    },
    "madeira": {
      "number": "1810",
      "isSimilar": true
    }
  },
  {
    "r": 227,
    "g": 230,
    "b": 220,
    "gamma": {
      "number": "3043",
      "isSimilar": false
    },
    "dmc": {
      "number": "3072",
      "isSimilar": false
    },
    "anchor": {
      "number": "847",
      "isSimilar": false
    },
    "madeira": {
      "number": "1805",
      "isSimilar": false
    }
  },
  {
    "r": 206,
    "g": 204,
    "b": 197,
    "gamma": {
      "number": "3044",
      "isSimilar": false
    },
    "dmc": {
      "number": "648",
      "isSimilar": false
    },
    "anchor": {
      "number": "900",
      "isSimilar": false
    },
    "madeira": {
      "number": "1814",
      "isSimilar": true
    }
  },
  {
    "r": 208,
    "g": 207,
    "b": 201,
    "gamma": {
      "number": "0150",
      "isSimilar": false
    },
    "dmc": {
      "number": "648",
      "isSimilar": false
    },
    "anchor": {
      "number": "900",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 171,
    "g": 175,
    "b": 163,
    "gamma": {
      "number": "0152",
      "isSimilar": false
    },
    "dmc": {
      "number": "647",
      "isSimilar": false
    },
    "anchor": {
      "number": "1040",
      "isSimilar": false
    },
    "madeira": {
      "number": "1813",
      "isSimilar": false
    }
  },
  {
    "r": 151,
    "g": 151,
    "b": 142,
    "gamma": {
      "number": "0060",
      "isSimilar": false
    },
    "dmc": {
      "number": "646",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "1812",
      "isSimilar": false
    }
  },
  {
    "r": 100,
    "g": 98,
    "b": 83,
    "gamma": {
      "number": "3229",
      "isSimilar": false
    },
    "dmc": {
      "number": "645",
      "isSimilar": false
    },
    "anchor": {
      "number": "273",
      "isSimilar": true
    },
    "madeira": {
      "number": "1811",
      "isSimilar": false
    }
  },
  {
    "r": 108,
    "g": 110,
    "b": 88,
    "gamma": {
      "number": "0154",
      "isSimilar": false
    },
    "dmc": {
      "number": "844",
      "isSimilar": false
    },
    "anchor": {
      "number": "1041",
      "isSimilar": false
    },
    "madeira": {
      "number": "1810",
      "isSimilar": false
    }
  },
  {
    "r": 108,
    "g": 110,
    "b": 88,
    "gamma": {
      "number": "0154",
      "isSimilar": true
    },
    "dmc": {
      "number": "645",
      "isSimilar": false
    },
    "anchor": {
      "number": "273",
      "isSimilar": false
    },
    "madeira": {
      "number": "1811",
      "isSimilar": false
    }
  },
  {
    "r": 77,
    "g": 76,
    "b": 52,
    "gamma": {
      "number": "0155",
      "isSimilar": false
    },
    "dmc": {
      "number": "934",
      "isSimilar": false
    },
    "anchor": {
      "number": "1506",
      "isSimilar": false
    },
    "madeira": {
      "number": "1810",
      "isSimilar": true
    }
  },
  {
    "r": 229,
    "g": 234,
    "b": 233,
    "gamma": {
      "number": "0661",
      "isSimilar": false
    },
    "dmc": {
      "number": "928",
      "isSimilar": false
    },
    "anchor": {
      "number": "274",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 197,
    "g": 210,
    "b": 207,
    "gamma": {
      "number": "0662",
      "isSimilar": false
    },
    "dmc": {
      "number": "927",
      "isSimilar": false
    },
    "anchor": {
      "number": "837",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 167,
    "g": 190,
    "b": 194,
    "gamma": {
      "number": "0663",
      "isSimilar": false
    },
    "dmc": {
      "number": "927",
      "isSimilar": true
    },
    "anchor": {
      "number": "838",
      "isSimilar": true
    },
    "madeira": {
      "number": "1708",
      "isSimilar": false
    }
  },
  {
    "r": 120,
    "g": 152,
    "b": 153,
    "gamma": {
      "number": "3146",
      "isSimilar": false
    },
    "dmc": {
      "number": "926",
      "isSimilar": false
    },
    "anchor": {
      "number": "850",
      "isSimilar": false
    },
    "madeira": {
      "number": "1707",
      "isSimilar": false
    }
  },
  {
    "r": 124,
    "g": 153,
    "b": 155,
    "gamma": {
      "number": "0664",
      "isSimilar": false
    },
    "dmc": {
      "number": "926",
      "isSimilar": false
    },
    "anchor": {
      "number": "850",
      "isSimilar": false
    },
    "madeira": {
      "number": "1707",
      "isSimilar": false
    }
  },
  {
    "r": 107,
    "g": 128,
    "b": 132,
    "gamma": {
      "number": "0039",
      "isSimilar": false
    },
    "dmc": {
      "number": "3768",
      "isSimilar": false
    },
    "anchor": {
      "number": "840",
      "isSimilar": false
    },
    "madeira": {
      "number": "2508",
      "isSimilar": false
    }
  },
  {
    "r": 95,
    "g": 113,
    "b": 113,
    "gamma": {
      "number": "0665",
      "isSimilar": false
    },
    "dmc": {
      "number": "3768",
      "isSimilar": true
    },
    "anchor": {
      "number": "840",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 59,
    "g": 79,
    "b": 69,
    "gamma": {
      "number": "0666",
      "isSimilar": false
    },
    "dmc": {
      "number": "924",
      "isSimilar": true
    },
    "anchor": {
      "number": "851",
      "isSimilar": false
    },
    "madeira": {
      "number": "1706",
      "isSimilar": false
    }
  },
  {
    "r": 204,
    "g": 210,
    "b": 213,
    "gamma": {
      "number": "3045",
      "isSimilar": false
    },
    "dmc": {
      "number": "168",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 149,
    "g": 155,
    "b": 160,
    "gamma": {
      "number": "3046",
      "isSimilar": false
    },
    "dmc": {
      "number": "169",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 80,
    "g": 79,
    "b": 80,
    "gamma": {
      "number": "3230",
      "isSimilar": false
    },
    "dmc": {
      "number": "535",
      "isSimilar": false
    },
    "anchor": {
      "number": "400",
      "isSimilar": false
    },
    "madeira": {
      "number": "1809",
      "isSimilar": false
    }
  },
  {
    "r": 233,
    "g": 233,
    "b": 235,
    "gamma": {
      "number": "3231",
      "isSimilar": false
    },
    "dmc": {
      "number": "762",
      "isSimilar": false
    },
    "anchor": {
      "number": "234",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 230,
    "g": 233,
    "b": 234,
    "gamma": {
      "number": "0966",
      "isSimilar": false
    },
    "dmc": {
      "number": "415",
      "isSimilar": false
    },
    "anchor": {
      "number": "1031",
      "isSimilar": false
    },
    "madeira": {
      "number": "2504",
      "isSimilar": false
    }
  },
  {
    "r": 204,
    "g": 213,
    "b": 218,
    "gamma": {
      "number": "0967",
      "isSimilar": false
    },
    "dmc": {
      "number": "3753",
      "isSimilar": false
    },
    "anchor": {
      "number": "1032",
      "isSimilar": true
    },
    "madeira": {
      "number": "1001",
      "isSimilar": true
    }
  },
  {
    "r": 211,
    "g": 212,
    "b": 219,
    "gamma": {
      "number": "0006",
      "isSimilar": false
    },
    "dmc": {
      "number": "415",
      "isSimilar": false
    },
    "anchor": {
      "number": "398",
      "isSimilar": false
    },
    "madeira": {
      "number": "1803",
      "isSimilar": false
    }
  },
  {
    "r": 183,
    "g": 187,
    "b": 199,
    "gamma": {
      "number": "0004",
      "isSimilar": false
    },
    "dmc": {
      "number": "318",
      "isSimilar": false
    },
    "anchor": {
      "number": "399",
      "isSimilar": false
    },
    "madeira": {
      "number": "1802",
      "isSimilar": true
    }
  },
  {
    "r": 171,
    "g": 179,
    "b": 189,
    "gamma": {
      "number": "0969",
      "isSimilar": false
    },
    "dmc": {
      "number": "0",
      "isSimilar": false
    },
    "anchor": {
      "number": "235",
      "isSimilar": false
    },
    "madeira": {
      "number": "1710",
      "isSimilar": true
    }
  },
  {
    "r": 143,
    "g": 156,
    "b": 167,
    "gamma": {
      "number": "0970",
      "isSimilar": false
    },
    "dmc": {
      "number": "931",
      "isSimilar": true
    },
    "anchor": {
      "number": "1034",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 120,
    "g": 130,
    "b": 143,
    "gamma": {
      "number": "0971",
      "isSimilar": false
    },
    "dmc": {
      "number": "930",
      "isSimilar": true
    },
    "anchor": {
      "number": "1035",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 68,
    "g": 77,
    "b": 88,
    "gamma": {
      "number": "0972",
      "isSimilar": false
    },
    "dmc": {
      "number": "3750",
      "isSimilar": true
    },
    "anchor": {
      "number": "1036",
      "isSimilar": false
    },
    "madeira": {
      "number": "1712",
      "isSimilar": false
    }
  },
  {
    "r": 47,
    "g": 59,
    "b": 54,
    "gamma": {
      "number": "3070",
      "isSimilar": false
    },
    "dmc": {
      "number": "3799",
      "isSimilar": false
    },
    "anchor": {
      "number": "236",
      "isSimilar": false
    },
    "madeira": {
      "number": "1713",
      "isSimilar": true
    }
  },
  {
    "r": 84,
    "g": 86,
    "b": 89,
    "gamma": {
      "number": "3232",
      "isSimilar": false
    },
    "dmc": {
      "number": "317",
      "isSimilar": false
    },
    "anchor": {
      "number": "400",
      "isSimilar": false
    },
    "madeira": {
      "number": "1714",
      "isSimilar": false
    }
  },
  {
    "r": 50,
    "g": 58,
    "b": 57,
    "gamma": {
      "number": "3233",
      "isSimilar": false
    },
    "dmc": {
      "number": "413",
      "isSimilar": false
    },
    "anchor": {
      "number": "401",
      "isSimilar": true
    },
    "madeira": {
      "number": "1714",
      "isSimilar": false
    }
  },
  {
    "r": 206,
    "g": 208,
    "b": 213,
    "gamma": {
      "number": "3255",
      "isSimilar": false
    },
    "dmc": {
      "number": "415",
      "isSimilar": false
    },
    "anchor": {
      "number": "398",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 173,
    "g": 175,
    "b": 187,
    "gamma": {
      "number": "3256",
      "isSimilar": false
    },
    "dmc": {
      "number": "318",
      "isSimilar": true
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 143,
    "g": 144,
    "b": 150,
    "gamma": {
      "number": "3257",
      "isSimilar": false
    },
    "dmc": {
      "number": "318",
      "isSimilar": true
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 90,
    "g": 96,
    "b": 103,
    "gamma": {
      "number": "3258",
      "isSimilar": false
    },
    "dmc": {
      "number": "317",
      "isSimilar": false
    },
    "anchor": {
      "number": "0",
      "isSimilar": false
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 86,
    "g": 93,
    "b": 89,
    "gamma": {
      "number": "3259",
      "isSimilar": false
    },
    "dmc": {
      "number": "413",
      "isSimilar": true
    },
    "anchor": {
      "number": "1041",
      "isSimilar": true
    },
    "madeira": {
      "number": "0",
      "isSimilar": false
    }
  },
  {
    "r": 34,
    "g": 39,
    "b": 36,
    "gamma": {
      "number": "3260",
      "isSimilar": false
    },
    "dmc": {
      "number": "3799",
      "isSimilar": false
    },
    "anchor": {
      "number": "0401",
      "isSimilar": true
    },
    "madeira": {
      "number": "1713",
      "isSimilar": false
    }
  }
];

module.exports = colors;