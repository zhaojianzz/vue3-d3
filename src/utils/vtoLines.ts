export const line_UpFace= ['G', 'SoftTissueNa','nasion', 'NasalBridgePoint', 'DorsumOfNose', 'Prn', 'Columella', 'Subnasale', 'SoftTissueA', 'LabraleSuperius', 'UpperLip','UpperLip_add', 'Stms', 'UpperEmbrasure']
export const line_DownFace= ['LowerEmbrasure','Stmi','LowerLip_add', 'LowerLip', 'LabraleInferius', 'SoftTissueB', 'SoftTissuePog', 'SoftTissueGn', 'SoftTissueMe', 'SubmandibularPoint', 'C']
export const line_Cheeks= [
  'Me',
  'mandible_outline_1',
  'mandible_outline_2',
  'An',
  'CorpusLeft',
  'Go',
  'RamusDown',
  'mandible_outline_3',
  'Ar',
  'mandible_outline_4',
  'Co',
  'mandible_outline_5',
  'mandible_outline_6',
  'R3',
  'Go9',
  'Go8',
  'Go7',
  'R1'
]
export const line_UpTeeth = [
  'Ubsd',
  'A',
  'maxilla_outline_1',
  'ANS',
]
export const line_UpTeeth2 = [
  'ANS',
  'maxilla_outline_2',
  'maxilla_outline_3',
  'maxilla_outline_4',
  'maxilla_outline_5',
  'maxilla_outline_6',
  'PNS',
]
export const line_UpTeeth3 = [
  'PNS',
  'maxilla_outline_7',
  'maxilla_outline_8',
  'maxilla_outline_9',
  'maxilla_outline_10',
  'Ulsd'
]
export const line_DownTeeth = ['Lbsd', 'B', 'PM', 'Pog', 'Gn', 'Me', 'symphysis_outline_1', 'symphysis_outline_2', 'symphysis_outline_3', 'Llsd']
export const line_Head = ['G1','triangle_outline_1','Na', 'triangle_outline_2', 'triangle']
export const line_Head2 = ['triangle','nose','Na' ]
export const line_Eyes = ['Or0','eye','Or1', 'Or', 'Or2']
export const line_Head3 = ['S0Ba0','S0Ba1','Skull1', 'S0Ba3', 'Skull2', 'Skull3', 'Skull4', 'Skull5', 'Skull6', 'Skull7', 'Skull8', 'S0Ba10', 'S0Ba11', 'S0Ba12', 'S0Ba13', 'Ba', 'S0Ba15', 'S0Ba16', 'S0Ba17', 'S0Ba17t', 'S0Ba18', 'S0Ba22', 'Skull1', 'S0Ba19']
export const line_Head4 = ['S0Ba20','S0Ba21','S0Ba22', 'Skull2']
export const line_Head5 = ['Ptm','Pt1','Pt', 'Pt2', 'Pt3','Ptm']
export const line_Ruler = ['ruler0', 'ruler1']
export const controPoints = [ 'R3','Go9',
'Go8',
'Go7', 'R1', 'G1', 'SoftTissueNa', 'nasion', 'Na', 'Skull1', 'U1RootTip', 'U1IncisalTip', 'L1RootTip', 'L1IncisalTip', 'L6Distal', 'L6Mesial', 'U6Distal', 'U6Mesial']
export const KeyPoints = [...line_UpFace,...line_Ruler, "LFa", "UFa", 'Or', 'Ubsd', 'Ulsd','Llsd', 'Lbsd','G', 'Na', 'SoftTissueNa','NasalBridgePoint', 'Prn', 'Columella','ANS', 'Subnasale', 'B', 'SoftTissueB', 'A', 'SoftTissueA', 'S', 'Po', 'Pog', 'SoftTissuePog']
// 用于确定牙齿姿态
export const line_UpMolars = ['U6Distal', 'U6Mesial']
export const line_DownMolars = ['L6Distal', 'L6Mesial']
export const line_UpTooth = ['U1RootTip', 'U1IncisalTip']
export const line_SVGUpTooth = ['Utr', 'UtI']
export const line_DownTooth = ['L1RootTip', 'L1IncisalTip']
export const line_SVGDownTooth = ['Ltr', 'LtI']
export const upToothSvgRound = ["Ulsd","Ut_1","Ut_2","Ut_3","Ut_4","Ut_5","Ut_6","Ut_7","Ut_8","UtI","Ut_9","Ut_10","UFa","Ut_12","Ut_13", "Ubsd","Ut_14","Ut_15","Ut_16","Ut_17","Ut_18","Utr","Ut_19","Ut_20","Ut_21","Ut_22",'Ulsd']
export const upToothSvgCenter = ['Ubsd',"Utc_1","Utc_2","Utc_3","Utc_4","Ulsd"]
export const lowToothSvgRound = ["Llsd","Lt_1","Lt_2","Lt_3","Lt_4","Lt_5","Ltr","Lt_6","Lt_7","Lt_8","Lt_9","Lt_10","Lt_11","LFa","Lt_13","Lt_14","LtI", "Lt_15","Lt_16","Lt_17","Lt_18","Lt_19","Lt_20",'Llsd']
export const lowToothSvgCenter = ['Lbsd',"Ltc_1","Ltc_2","Ltc_3","Ltc_4","Llsd"]
export const Teeth = [
  // {
  //   id: 'upTooth',
  //   path: "M26.3,90C26.3,90.1,26.1,90.2,26,90.1C25.9,90.1,25.9,90,25.9,90C25.4,88.6,24.7,86,24.2,84.7C17.3,67.6,10,51.9,4.7,34.2C3.4000000000000004,30.000000000000004,2.7,26.700000000000003,1.6,21.400000000000002C1.1,18.8,0.20000000000000018,13.100000000000001,0.7000000000000001,9.400000000000002C1.5,1.3,6.2,-2,12.8,2.7C17.8,6.300000000000001,22.200000000000003,10.899999999999999,26.3,15.5C35.7,26.2,44.8,37.2,54,47.9C56.4,50.699999999999996,61.4,55.1,64.2,58.099999999999994C64.5,58.39999999999999,63.7,58.699999999999996,63.400000000000006,58.49999999999999C61.7,57.49999999999999,56.7,58.89999999999999,54.400000000000006,59.99999999999999C51.00000000000001,61.39999999999999,48.50000000000001,64.3,47.400000000000006,67.8C45.10000000000001,75.3,40.2,80.5,33.300000000000004,84C31,85.2,27.6,86.9,26.3,90ZM83.3,118.4C83.3,118.9,83.3,119.5,83.2,120C82.9,122.8,82.4,125.6,81.7,128.3C80,133.70000000000002,76.3,134.4,72.7,130.10000000000002C69.60000000000001,126.40000000000002,66.8,122.50000000000003,64.10000000000001,118.50000000000003C55.9,105.9,44.7,97.8,30,94.3C28.5,93.8,27.4,92.7,26.8,91.3C26.6,90.3,27.8,88.5,28.900000000000002,87.7C31.000000000000004,86.2,33.2,84.9,35.400000000000006,83.7C40.800000000000004,80.8,44.900000000000006,76,46.7,70.10000000000001C48.7,63.60000000000001,53.5,60.400000000000006,59.7,58.900000000000006C62,58.300000000000004,64.3,58.10000000000001,65.5,60.800000000000004C74.1,78.9,81.5,97.5,83.3,118.4Z",
  //   keyPoint: ['U1RootTip', 'U1IncisalTip'],
  //   defaultPoint: [[5,1], [80, 132.35800170898438]],
  //   otherPoint: [
  //     {
  //       landmark: 'Fa',
  //       point: [80, 100.35800170898438]
  //     },
  //   ],
  //   width: 82,
  //   height: 132,
  //   matrix: ''
  // },
  // {
  //   id: 'downTooth',
  //   path: "M60.8,60.42A0.32,0.32,0,0,0,60.489999999999995,59.92C53.489999999999995,60.75,50.99999999999999,57.14,50.739999999999995,51.36C50.339999999999996,42.44,46.12,36.86,37.89999999999999,33.36C35.18999999999999,32.22,33.89999999999999,32.13,32.58999999999999,34.74C24.73,50.08,16.41,65.15,9.08,80.68C5.4,88.49,3,97,0.9,105.41C-0.7599999999999999,111.92,2.9,115,9.05,112.25C14.48,109.81,20.05,106.67,24.11,102.43C35.11,90.93,45.28,78.7,55.71,66.70000000000002C57.1,65.11,59.33,62.45,60.8,60.42ZM84.57,9.58C84.96,1.4000000000000004,81.75,-1.1799999999999997,76.05,1.58A24,24,0,0,0,67.87,8.280000000000001A48.76,48.76,0,0,1,43.45,25A28.35,28.35,0,0,0,37,27.94C34.42,29.560000000000002,34.52,31.14,37.08,32.81C38.879999999999995,33.980000000000004,40.9,34.81,42.71,35.95A15.83,15.83,0,0,1,50.11,46.620000000000005C50.31,47.92,50.43,49.230000000000004,50.65,50.52C51.25,54.18000000000001,51.48,58.370000000000005,55.78,59.52S62.78,57.410000000000004,65.03,54.580000000000005C76.1,41,82.76,25.36,84.57,9.58Z",
  //   keyPoint: ['L1IncisalTip', 'L1RootTip'],
  //   defaultPoint: [[82,1], [2, 112]],
  //   otherPoint: [
  //     {
  //       landmark: 'LFa',
  //       point: [80, 28.35800170898438]
  //     },
  //   ],
  //   width: 84,
  //   height: 112,
  //   matrix: ''
  // },
  {
    id: 'upMolars',
    path: "M47,125.91C40,128.15,33.62,127.32,28.29,122.00999999999999M76.48,97.22C67,89,39.34,89.8,21.67,86.5A53.18,53.18,0,0,0,16.05,85.69C12.31,85.38,11.05,84.83,11.940000000000001,81.94C13.82,75.73,15.940000000000001,67.88,17.94,61.67999999999999C20.7,52.75,22.94,43.61,26.62,35S35.45,18.14,40.07,9.8A11.13,11.13,0,0,1,43.07,6.800000000000001C45.63,4.800000000000001,47.5,5.170000000000001,48.43,8.16A35.52,35.52,0,0,1,50.1,17.27C50.480000000000004,26.45,50.26,35.66,50.910000000000004,44.81C51.150000000000006,48.22,52.910000000000004,51.64,54.43000000000001,54.81C55.56000000000001,57.160000000000004,57.43000000000001,56.72,58.300000000000004,54.45C59.53,51.31,60.56,48.1,61.540000000000006,44.88C64,37,66,28.84,68.86,21A30,30,0,0,1,75.05,11.41C77.05,9.25,79.6,10.08,80.39,12.95C81.63,17.5,83.39,22.15,83.39,26.74C83.27,39.26,82.67,51.8,81.56,64.28C80.75,73.41,78.85000000000001,82.45,77.37,91.52C77.16000000000001,92.78999999999999,77.13000000000001,95.61999999999999,76.7,97.19999999999999A0.13,0.13,0,0,1,76.48,97.22ZM37.88,126.87C30.730000000000004,131.54,22.67,132.44,17.26,131.3C1.5,128,-2.31,119.52,2.36,104.68C4.359999999999999,98.45,8.17,92.74000000000001,11.36,86.88000000000001A3.81,3.81,0,0,1,14.45,85.64000000000001C30.45,87.84000000000002,50.36,88.74000000000001,62.95,91.57000000000002A21.3,21.3,0,0,1,66.53,92.72000000000003A12.63,12.63,0,0,0,68.34,93.28000000000003C73.53,94.64000000000003,77.23,97.11000000000003,76.9,103.72000000000003C76.52000000000001,111.34000000000003,78.23,119.12000000000003,77.2,126.61000000000003C75.8,137,66.79,140.21,56.22,137C50.72,135.36,46.53,134,41.71,131.05A9.79,9.79,0,0,1,37.88,126.84000000000002M57.1,55.74C56.72,56.93,55.38,56.49,54.730000000000004,55.410000000000004C53.1,52.71,51.290000000000006,48.980000000000004,51.050000000000004,46.050000000000004A203.4,203.4,0,0,1,51.620000000000005,14.300000000000004C52.010000000000005,9.920000000000005,55.760000000000005,5.600000000000005,58.620000000000005,1.6600000000000037C60.230000000000004,-0.5299999999999963,63.21000000000001,0.6600000000000037,63.86000000000001,2.760000000000004C65.62,8.470000000000004,68.78,14.660000000000004,67.72000000000001,20.060000000000006C65.36000000000001,32.14000000000001,60.780000000000015,43.86000000000001,57.070000000000014,55.72Z",
    keyPoint: ['U6Distal', 'U6Mesial'],
    defaultPoint: [[0,116], [77, 130]],
    width: 83.55,
    height: 131.64,
    matrix: ''
  },
  {
    id: 'downMolars',
    path: "M43.21,63.62C42.49,62.129999999999995,39,66.34,37.34,68.49C27.15,81.64,21,96.56,16.61,112.6A47.93,47.93,0,0,1,15,118C12.09,125.26,7,125.53,3.33,118.6A23.73,23.73,0,0,1,0.64,104.91A79.11,79.11,0,0,1,3.77,89.91A137,137,0,0,0,9.7,43.41C9.639999999999999,41.69,9.7,39.97,9.7,37.919999999999995A0.53,0.53,0,0,1,10.26,37.38999999999999C31.43,39.239999999999995,51.44,48.56999999999999,73.53,45.21999999999999A0.52,0.52,0,0,1,74.11,45.78999999999999C73.67999999999999,49.709999999999994,73.28,53.11999999999999,72.92999999999999,56.529999999999994C72.22999999999999,63.39999999999999,71.57,70.27,70.86999999999999,77.13999999999999C69.78999999999999,87.6,65.79999999999998,97.13999999999999,61.86999999999999,106.77999999999999C58.92,114,55.39,121,49.5,126.21A29.88,29.88,0,0,1,40.3,131.57C35.419999999999995,133.39,32.669999999999995,130.72,34.239999999999995,125.74C37.69,114.9,41.48,104.11,44,93A129.61,129.61,0,0,0,45.3,70C45.18,67.39,43.74,64.73,43.21,63.62ZM27,5.63C30.55,0.84,35.49,0,40.07,0.76C45.25,1.6,52.07,2.1100000000000003,56.81,5.1C59.72,6.93,59.910000000000004,11.64,60.160000000000004,11.23C62.6,7.22,67.7,5,72.92,5C76.92,5,82.63,8.69,83.39,13A33.52,33.52,0,0,1,81.33,32.9C75.79,45.39,75.85,45.6,62.2,45.47A99.15,99.15,0,0,1,45.56,43.69C34.45,41.69,23.42,39.16,12.330000000000005,37.03C10.120000000000005,36.61,9.390000000000006,35.75,9.280000000000005,33.57C9,27.28,8.41,21,8,14.71C7.59,9,10.58,4.84,14.62,1.55C17.28,-0.6100000000000001,20.33,0.9800000000000001,22.939999999999998,2.55C24.33,3.41,25.56,4.51,27,5.63Z",
    keyPoint: ['L6Distal', 'L6Mesial'],
    defaultPoint: [[8,14], [84, 23]],
    width: 83.55,
    height: 131.64,
    matrix: ''
  },
]


export const upFaceTrans = [
  {
    landmark: "NasalBridgePoint",
    diff: [
    ],
    coeff: {
      x: 1,
      y: 1
    }
  },
  {
    landmark: "DorsumOfNose",
    diff: [
    ],
    coeff: {
      x: 1,
      y: 1
    }
  },
  {
    landmark: "Prn",
    diff: [
    ],
    coeff: {
      x: 1,
      y: 1
    }
  },
  {
    landmark: "Columella",
    diff: [
      {
        landmark: 'ANS',
          coeff: {
            x: 1,
            y:1
        }
      }
    ],
    coeff: {
      x: 0.4,
      y: 0.2
    }
  },
  {
    landmark: "Subnasale",
    diff: [
      {
        landmark: 'ANS',
          coeff: {
            x: 0.85,
            y: 0.85
        }
      },
      {
        landmark: 'UFa',
          coeff: {
            x: 0.15,
            y: 0.15
        }
      }
    ],
    coeff: {
      x: 0.60,
      y: 0.3
    }
  },
  {
    landmark: "SoftTissueA",
    diff: [
      // {
      //   landmark: 'A',
      //     coeff: {
      //       x: 0.85,
      //       y: 0.85
      //   }
      // },
      // {
      //   landmark: 'UFa',
      //     coeff: {
      //       x: 0.15,
      //       y: 0.15
      //   }
      // }
      {
        landmark: 'A',
          coeff: {
            x: 0.7,
            y: 0.7
        }
      },
      {
        landmark: 'UFa',
          coeff: {
            x: 0.3,
            y: 0.3
        }
      }
    ],
    coeff: {
      x: 0.70,
      y: 0.4
    }
  },
  {
    landmark: "LabraleSuperius",
    diff: [
      {
        landmark: 'Ubsd',
          coeff: {
            x: 0.65,
            y: 0.65
        }
      },
      // {
      //   landmark: 'UFa',
      //     coeff: {
      //       x: 0.7,
      //       y: 0.7
      //   }
      // },
      {
        landmark: 'A',
          coeff: {
            x: 0.35,
            y: 0.35
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "UpperLip",
    diff: [
      {
        landmark: 'UFa',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "UpperLip_add",
    diff: [
      {
        landmark: 'UFa',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "Stms",
    diff: [
      {
        landmark: 'UFa',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "UpperEmbrasure",
    diff: [
      {
        landmark: 'UFa',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
]

export const downFaceTrans = [
  {
    landmark: "LowerEmbrasure",
    diff: [
      {
        landmark: 'LFa',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "Stmi",
    diff: [
      {
        landmark: 'LFa',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "LowerLip_add",
    diff: [
      {
        landmark: 'LFa',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "LowerLip",
    diff: [
      {
        landmark: 'LFa',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "LabraleInferius",
    diff: [
      {
        landmark: 'Lbsd',
          coeff: {
            x: 1,
            y: 1
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "SoftTissueB",
    diff: [
      {
        landmark: 'B',
          coeff: {
            x: 0.55,
            y: 0.55
        }
      },
      {
        landmark: 'LFa',
          coeff: {
            x: 0.45,
            y: 0.45
        }
      }
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "SoftTissuePog",
    diff: [
      {
        landmark: 'Pog',
          coeff: {
            x: 0.55,
            y: 0.55
        }
      },
      {
        landmark: 'LFa',
          coeff: {
            x: 0.45,
            y: 0.45
        }
      }
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "SoftTissueGn",
    diff: [
      {
        landmark: 'Gn',
          coeff: {
            x: 1,
            y: 1,
        }
      },
    ],
    coeff: {
      x: 0.85,
      y: 0.4
    }
  },
  {
    landmark: "SoftTissueMe",
    diff: [
      {
        landmark: 'Me',
          coeff: {
            x: 1,
            y: 1,
        }
      },
    ],
    coeff: {
      x: 0.7,
      y: 0.4
    }
  },
  {
    landmark: "SubmandibularPoint",
    diff: [
      {
        landmark: 'Me',
          coeff: {
            x: 1,
            y: 1,
        }
      },
    ],
    coeff: {
      x: 0.3,
      y: 0.3
    }
  },
]