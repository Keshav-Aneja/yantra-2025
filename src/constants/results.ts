export interface Member {
  name: string;
  regno: string;
}

export interface TeamResult {
  team: string;
  members: Member[];
}

interface Result {
  [position: string]: TeamResult | TeamResult[];
}

interface EventResult {
  id: string;
  clubName: string;
  eventName: string;
  result: Result;
}

type EventResults = EventResult[];

export const eventResults: EventResults = [
  {
    id: "67987f6d09417fdee12784d4",
    clubName: "THE BIOTECH RESEARCH SOCIETY INDIA (BRSI)",
    eventName: "BiosensAItion - Innovation through Intelligence",
    result: {
      "1st": {
        team: "PYar",
        members: [
          { name: "AADITYA PANIGRAHI", regno: "24BBT0037" },
          { name: "SAI KARTHIK K", regno: "24BEE0166" },
          { name: "NETRA R", regno: "24BBT0055" }
        ]
      },
      "2nd": {
        team: "SAS",
        members: [
          { name: "SUBHRANSHU CHATTOPADHYAY", regno: "24BBT0267" },
          { name: "SARAH JONATHAN LOBO", regno: "24BBT0296" },
          { name: "SHETE ANISH ANIRUDHA", regno: "24BBT0269" }
        ]
      },
      "3rd": [
        {
          team: "Megatron",
          members: [
            { name: "MADHAN B", regno: "24MIC0010" },
            { name: "SREELEKSHMI T U", regno: "24MSI0103" }
          ]
        },
        {
          team: "Pushkar & Aditya",
          members: [
            { name: "APSHANKAR PUSHKAR HARSHAD", regno: "24BBT0142" },
            { name: "MHAISKAR ADITYA MAYURESH", regno: "24BBT0114" }
          ]
        }
      ]
    }
  },
  {
    id: "67987f6d09417fdee12784b7",
    clubName: "SOCIETY FOR INDUSTRIAL AND APPLIED MATHEMATICS (SIAM)",
    eventName: "Coding Relay",
    result: {
      "1st": {
        team: "School Bus",
        members: [
          { name: "ARYA KAUSHAL PAL", regno: "23BDS0220" },
          { name: "JEET RUGHANI", regno: "23BEL0003" },
          { name: "AYUSHI POONIA", regno: "23BCE0605" },
          { name: "KASHISH", regno: "23BCE0314" }
        ]
      },
      "2nd": {
        team: "Playboi Carti",
        members: [
          { name: "ABHAY RAWAT", regno: "24MIS0106" },
          { name: "RAJDEEP KUNDU", regno: "24BCE2177" },
          { name: "RISHIT BHANSALI", regno: "24BCI0137" },
          { name: "SHLOK DIGANSHU", regno: "23BDS0231" }
        ]
      },
      "3rd": {
        team: "Recursive Runner",
        members: [
          { name: "BHAVESH KUMAR PANJWANI", regno: "23BCE2355" },
          { name: "ROUNAK AGARWAL", regno: "23BIT0168" },
          { name: "RAHUL KUMAR", regno: "23BDS0135" },
          { name: "MOKSH PRADIP UDESHI", regno: "22BCE2169" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784b0",
    clubName: "AMERICAN SOCIETY OF CIVIL ENGINEERS (ASCE) & INDIAN SOCIETY OF EARTHQUAKE TECHNOLOGY(ISET)",
    eventName: "GREENPRINT",
    result: {
      "1st": {
        team: "Aloe Vera Gel",
        members: [
          { name: "ABHIJITH MANEESH", regno: "23BCL0036" },
          { name: "MISHAL ASLAM", regno: "23BCL0041" },
          { name: "TOURANGBAM ACHAMBA", regno: "23BCL0042" }
        ]
      },
      "2nd": {
        team: "Fusion Flams",
        members: [
          { name: "PRATHAM CHOUDHARY", regno: "22BCL0088" },
          { name: "AUSHMAN DUTTA", regno: "22BCL0106" }
        ]
      },
      "3rd": {
        team: "KAP",
        members: [
          { name: "MD ARYAN KHAN", regno: "23BCB0115" },
          { name: "KUNAL SAH", regno: "23BCB0111" },
          { name: "PRIYANSH GUPTA", regno: "23BCL0051" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784e0",
    clubName: "QUIZ CLUB",
    eventName: "Inquizitorius",
    result: {
      "1st": {
        team: "John Doe",
        members: [
          { name: "SIDHARTH SAROVARAM SAJITH", regno: "21BEC0442" },
          { name: "DHRUV AYYALASOMAYAJULA", regno: "21BCE2736" },
          { name: "PRERIT SACHDEV", regno: "22BCM0030" }
        ]
      },
      "2nd": {
        team: "OD Chahiye",
        members: [
          { name: "KARAN SHRIVASTAVA ANURAG", regno: "24BEI0124" },
          { name: "MAHEEP KRISHNA DUBEY", regno: "24BCE2197" },
          { name: "GUPTA ARNAV ALOK", regno: "24BEI0105" }
        ]
      },
      "3rd": {
        team: "Thalasons",
        members: [
          { name: "KANISHK PRATAP SINGH", regno: "22BDS0232" },
          { name: "HARVIR SINGH", regno: "22BCT0118" },
          { name: "AAREN JAIN", regno: "22BML0099" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784ad",
    clubName: "IEEE - TECHNOLOGY AND ENGINEERING MANAGEMENT SOCIETY (IEEE-TEMS) & ADVANCED DEVELOPER'S GROUP (ADG)",
    eventName: "SharkTech",
    result: {
      "1st": {
        team: "IOTA",
        members: [
          { name: "UDIT PANDEY", regno: "21BCE3085" },
          { name: "ASHUTOSH KRISHNA PARBHAKAR", regno: "21BML0168" },
          { name: "KSHITIJ TAKIAR", regno: "21BEC0684" },
          { name: "PARTH KEDAWAT", regno: "21BCE3250" }
        ]
      },
      "2nd": {
        team: "ThankingBeyonce",
        members: [
          { name: "DHAMALE GAURI SOPAN", regno: "21BCE2615" },
          { name: "ADITYA SANTOSH PANDE", regno: "21BCE0309" }
        ]
      },
      "3rd": {
        team: "Arise",
        members: [
          { name: "ILAKKIYA S", regno: "23BCE2012" },
          { name: "RAGHUL D", regno: "23BAI0034" },
          { name: "HARI PRASATH U", regno: "23BAI0038" },
          { name: "ADHVAITH N A", regno: "23BCE2064" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784d8",
    clubName: "SOCIETY FOR BIOLOGOCAL ENGINEERING (SBE)",
    eventName: "Sustain-a-city",
    result: {
      "1st": {
        team: "Manor Lords",
        members: [
          { name: "PARTH PATIAL", regno: "23BBT0116" },
          { name: "A KAVI SHREE", regno: "24BBT0115" },
          { name: "AKASH KUMAR", regno: "24BAI0032" },
          { name: "AMRUTHA V", regno: "24BBT0109" },
          { name: "SAKTIVISAKAN S", regno: "24BBT0153" }
        ]
      },
      "2nd": {
        team: "Ampere Avengers",
        members: [
          { name: "TEJAS RASTOGI", regno: "24BEC0303" },
          { name: "VINAMR KOHLI", regno: "24BEC0632" },
          { name: "RISHABH GUPTA", regno: "22BEC0811" },
          { name: "GURNOOR SINGH", regno: "24BEC0083" }
        ]
      },
      "3rd": [
        {
          team: "SDG Hackers",
          members: [
            { name: "OLETI SREE VATHSA", regno: "23BDS0143" },
            { name: "PASUMARTHI VENKATA KRISHNA YASASWI", regno: "23BCE0837" },
            { name: "S VENKATA SIVA LOKESH REDDY", regno: "23BCI0150" },
            { name: "KUTIKUPPALA CHETAN SRINIVAS", regno: "23BCE0890" }
          ]
        },
        {
          team: "Solar Punk",
          members: [
            { name: "PRASHANS DIXIT", regno: "24BCL0138" },
            { name: "THAKUR HARITA AJIT", regno: "24BCL0168" },
            { name: "ANVESHA MODI", regno: "24BCL0118" },
            { name: "TANISHQ DAGA", regno: "24BCL0042" }
          ]
        },
        {
          team: "Sustainablility",
          members: [
            { name: "ALISYAM SAHAS", regno: "23BCE0299" },
            { name: "RAMADUGU VENKATA RAMA RITHWIK", regno: "23BCE0271" },
            { name: "KAKUMANU VENKATA SAI YASWANTH", regno: "23BCE0037" },
            { name: "SK MD ABDUR RAZZAK", regno: "24BHT0034" },
            { name: "SHIVAM PANDEY", regno: "24BHT0015" }
          ]
        }
      ]
    }
  },
  {
    id: "67987f6d09417fdee12784c0",
    clubName: "SOCIETY FOR BIOLOGOCAL ENGINEERING (SBE)",
    eventName: "Relay-thon: AI for Sustainability",
    result: {
      "1st": {
        team: "Team 2",
        members: [
          { name: "ARUSH JAMES", regno: "24BAI0277" },
          { name: "ARHAM SADIQ K", regno: "24BAI0335" }
        ]
      },
      "2nd": {
        team: "Team 10",
        members: [
          { name: "ADITYA PRATAP SINGH", regno: "22BEE0333" }
        ]
      },
      "3rd": {
        team: "Ditto",
        members: [
          { name: "AGARWAL ARSHIYA ASHISH", regno: "24BEC0195" },
          { name: "ANANYA BISHT", regno: "24BVD0037" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784ca",
    clubName: "SOCIETY OF AUTOMOTIVE ENGINEERS (SAE)",
    eventName: "Drone it yourself",
    result: {
      "1st (Advanced)": {
        team: "Aero-ninJAS",
        members: [
          { name: "SHINDE AKSHAT NANDKUMAR", regno: "24BME0391" },
          { name: "JOSHIL RAKESH ARORA", regno: "24BME0421" },
          { name: "SANJAY VIGNESH C P", regno: "24BME0462" }
        ]
      },
      "2nd (Advanced)": {
        team: "Forged",
        members: [
          { name: "SREE KAVINRAJ S", regno: "23BMM0001" },
          { name: "RAAJAPRASANNA M", regno: "23BEC0283" },
          { name: "SHAILANDRAA N", regno: "23BEC0313" }
        ]
      },
      "3rd (Advanced)": {
        team: "Team Zoop",
        members: [
          { name: "PAVITHERAN V R", regno: "24BMM0044" },
          { name: "SHASHANK SHEKHAR KHANDELWAL", regno: "22BME0434" }
        ]
      },
      "1st (Freshers)": {
        team: "abinow",
        members: [
          { name: "ABINOW R", regno: "24BEE0198" }
        ]
      },
      "2nd (Freshers)": [
        {
          team: "SHERRR",
          members: [
            { name: "ADITYA KUMAR", regno: "24BEC0424" },
            { name: "RAJVARDHAN SINGH", regno: "24BEC0567" },
            { name: "NIRMESH NIVAN PRASAD", regno: "24BCB0085" }
          ]
        },
        {
          team: "Aerial Quest",
          members: [
            { name: "VEDANJALI GAUTAM", regno: "24BEE0160" },
            { name: "KHWAISH INDOLIA", regno: "24BEE0152" },
            { name: "RAHUL SUDARSHAN", regno: "24BEE0202" }
          ]
        }
      ],
      "3rd (Freshers)": {
        team: "The CAA Drone",
        members: [
          { name: "CHARVI ADHYAM", regno: "24BEC0651" },
          { name: "ANANDITA KAUSHAL", regno: "24BEC0613" },
          { name: "ARUSHI MEHROTRA", regno: "24BME0581" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784d6",
    clubName: "IEEE SIGNAL PROCESSING SOCIETY (IEEE-SPS) & THE ELECTRONICS CLUB (TEC)",
    eventName: "Hardware Hustle",
    result: {
      "Winner": {
        team: "Kacha Mango",
        members: [
          { name: "VISWANAD RAM R", regno: "23BEC0143" },
          { name: "KHUSHI YADAV", regno: "24BIT0287" },
          { name: "NIKHILESH PURI", regno: "22BML0052" },
          { name: "SANJANA SUDARSAN", regno: "23BEC0175" },
          { name: "GANGISHETTY TEJASHWAN", regno: "23BEC0343" }
        ]
      },
      "Special Mention": {
        team: "The M.A.N.C.S",
        members: [
          { name: "CHINMY C NAVALI", regno: "23BEC0406" },
          { name: "ANISH RAJ", regno: "23BEC0495" },
          { name: "SURENDRA PATIL", regno: "23BEC0194" },
          { name: "BOROLE MAYUR SANDIP", regno: "23BEC0316" },
          { name: "KARETIYA NAMANKUMAR JAGDISHBHAI", regno: "23BVD0023" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784cd",
    clubName: "DEVELOPERS STUDENT CLUB (DSC)",
    eventName: "Hexathon",
    result: {
      "1st": {
        team: "Byte Balance",
        members: [
          { name: "RONIA GRACE RIJO", regno: "22BID0026" },
          { name: "NAKUL GANGA PRASAD", regno: "22BID0018" }
        ]
      },
      "2nd": {
        team: "HexQuad",
        members: [
          { name: "RAGHAVA REDDY BOMMINENI", regno: "23BEC0254" },
          { name: "MAIMOON ZAHID", regno: "23BDS0188" },
          { name: "PAKHI AGRAWAL", regno: "23BIT0190" },
          { name: "LADANI NEEL AMITBHAI", regno: "23BIT0094" }
        ]
      },
      "3rd": {
        team: "WebVerse",
        members: [
          { name: "ANOUSHKA BASAK", regno: "24BAI0153" },
          { name: "RIDDHI BHADURI", regno: "24BCE0573" },
          { name: "AISHIKI MUKHOPADHYAY", regno: "24BCB0060" },
          { name: "MITALI AGRAWAL", regno: "24BCB0034" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784b9",
    clubName: "SOCIETY OF MANUFACTURING ENGINEERS (SME)",
    eventName: "Smart Manufacturing for SDGs: AI-Powered Innovations",
    result: {
      "Winner": {
        team: "REDS&COPS",
        members: [
          { name: "SANJEEV KARNATAPU", regno: "23BAI0003" },
          { name: "SAI SURYA SIDDHARTH MYLAVARAPU", regno: "23BCE0550" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784ce",
    clubName: "THE SOCIETY OF PETROLEUM ENGINEERS (SPE)",
    eventName: "The Company Case",
    result: {
      "1st": [
        {
          team: "Gandhi",
          members: [
            { name: "KEDIA PRANATH NIKUNJ", regno: "22BCI0206" },
            { name: "SAKSHAM AGARWAL", regno: "22BCT0305" }
          ]
        },
        {
          team: "Nehru",
          members: [
            { name: "DEBARGHYA SAHA", regno: "22BCE2937" }
          ]
        }
      ],
      "2nd": [
        {
          team: "Bharat Petroleum",
          members: [
            { name: "YUVRAJ THUKRAL", regno: "22BCT0219" },
            { name: "AYAN NARAYAN", regno: "22BCE3605" },
            { name: "ANJALY REJI", regno: "22BDS0379" },
            { name: "KANISH KHETARPAL", regno: "22BCE2354" }
          ]
        },
        {
          team: "MALT",
          members: [
            { name: "SHROT SINGH", regno: "21BEC0137" },
            { name: "SUYASH SHUKLA", regno: "22BME0645" },
            { name: "YASH VARDHAN MALIK", regno: "22BME0705" },
            { name: "DEVANSH KAUSHIK", regno: "22BME0343" }
          ]
        }
      ]
    }
  },
  {
    id: "67987f6d09417fdee12784b1",
    clubName: "MATRIX- THE MULTIMEDIA CLUB",
    eventName: "Voice it out",
    result: {
      "1st": {
        team: "Sakamura Titens",
        members: [
          { name: "AKSHAT SRIVASTAVA", regno: "23BCT0108" },
          { name: "SANUJ SUDHAKAR DHOTE", regno: "23BIT0447" },
          { name: "DEVESH SWAMI", regno: "23BIT0448" },
          { name: "SAFAL GUPTA", regno: "23BCT0237" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784e5",
    clubName: "BULLS AND BEARS CLUB",
    eventName: "Dalal Street 2.0",
    result: {
      "1st": [
        {
          team: "228",
          members: [
            { name: "SHIVAANSH AGGARWAL", regno: "24BCE0883" }
          ]
        },
        {
          team: "7",
          members: [
            { name: "AADITYA GARG", regno: "23BBS0070" }
          ]
        }
      ],
      "2nd": [
        {
          team: "64",
          members: [
            { name: "ZANZAN HRUSHAIBH SHRIKRISHNA", regno: "24BCE0485" }
          ]
        },
        {
          team: "65",
          members: [
            { name: "SOLANKI YUG NILESH", regno: "24BME0742" }
          ]
        }
      ],
      "3rd": [
        {
          team: "98",
          members: [
            { name: "AYUSH NAUGARIYA", regno: "24BDS0076" }
          ]
        },
        {
          team: "197",
          members: [
            { name: "ASMITA PAL", regno: "23BCE2200" }
          ]
        }
      ]
    }
  },
  {
    id: "67987f6d09417fdee12784d9",
    clubName: "INTERNATIONAL SOCIETY OF AUTOMATION (ISA)",
    eventName: "Binary Battles 2.0",
    result: {
      "1st": {
        team: "Syntax Soldiers",
        members: [
          { name: "ARYAN JAIN", regno: "22BDS0266" },
          { name: "MANAV MISHRA", regno: "24BIT0100" },
          { name: "UJJWAL SINGH", regno: "23BCT0189" },
          { name: "CHAITANYA REDDY", regno: "23BCE0089" }
        ]
      },
      "2nd": {
        team: "Shriek Shrike Shrek",
        members: [
          { name: "VARRSAN D", regno: "22BCE2231" },
          { name: "YASH MATHUR", regno: "22BCE3119" },
          { name: "ANMOL BHARADWAJ", regno: "22BCE0289" }
        ]
      },
      "3rd": {
        team: "Cheetah Hi Kehde",
        members: [
          { name: "YASH", regno: "22BCE0947" },
          { name: "SOURADIP SAHA", regno: "22BCE2152" },
          { name: "MANISH KUMAR PANDEY", regno: "22BCE0615" },
          { name: "DHRUV ARORA", regno: "22BCE3020" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784d3",
    clubName: "THE AI & ML CLUB - TAM & SOLAR ENERGY SOCIETY OF INDIA (SESI)",
    eventName: "Bid-a-Thon",
    result: {
      "1st": {
        team: "GLITCHFIX",
        members: [
          { name: "UTKARSH RAWAT", regno: "24BAI0061" },
          { name: "PRANAY KUMAR MAHATO", regno: "24BIT0594" }
        ]
      },
      "2nd": {
        team: "Midas",
        members: [
          { name: "YAKOB JO ALAPATT", regno: "24BBS0047" },
          { name: "SURAJ KUMAR", regno: "24BBS0045" },
          { name: "RISHI SUGAVANAM", regno: "24BBS0144" },
          { name: "VISHAL SUKUMAR", regno: "24BBS0097" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784ac",
    clubName: "ADVERTISING AND MARKETING CLUB & MOZILLA FIREFOX CLUB",
    eventName: "InnovationX2.0",
    result: {
      "Best Innovation": {
        team: "Hactivators",
        members: [
          { name: "A SACHIVE ANAND", regno: "22BCE3293" },
          { name: "BALAJI M", regno: "22BCE3090" },
          { name: "J ARAVIND", regno: "22BCE0814" },
          { name: "DEENA ATHITHYAA D", regno: "22BCE2908" },
          { name: "ARJUN T S", regno: "22BCE0507" },
          { name: "SUSHIIEL A", regno: "22BDS0390" }
        ]
      },
      "Best Fresher": {
        team: "InnoVITors",
        members: [
          { name: "SARA JAIN", regno: "24BCE2360" },
          { name: "ANUSHKA ASHUTOSH GATTANI", regno: "24BCE2283" },
          { name: "ISHITA ANANT", regno: "24BCE0555" },
          { name: "P S N V SRI SRAVYA", regno: "24BCE2267" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784da",
    clubName: "INTERNET OF THINGS COMMUNITY (IOTHINC)",
    eventName: "aiTopia",
    result: {
      "Winner": {
        team: "BRO-CODE",
        members: [
          { name: "SAKET THOTA", regno: "23BCT0031" },
          { name: "SRIJA KOPPAR", regno: "23BCT0057" },
          { name: "CHIRAG VINID", regno: "23BCT0034" },
          { name: "MEGH CHAKRAVARTY", regno: "23BCT0033" }
        ]
      },
      "Runner Up": {
        team: "SpotFinder",
        members: [
          { name: "AMAN AMITABH", regno: "23BCT0165" },
          { name: "NANDITHA NAIR", regno: "23BCT0172" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784bc",
    clubName: "INTERNET OF THINGS COMMUNITY (IOTHINC)",
    eventName: "AI for Resilient Cities: 'Engineering Sustainability and Climate Harmony'",
    result: {
      "1st": {
        team: "Carbon Loop",
        members: [
          { name: "R MOHAMMED ANEEZ", regno: "22BCI0107" }
        ]
      },
      "2nd": {
        team: "Kushal 22BIT0438",
        members: [
          { name: "MORE KUSHAL RAJENDRA", regno: "22BIT0438" }
        ]
      },
      "3rd": {
        team: "SHRAVAN KUMAR",
        members: [
          { name: "SHRAVAN KUMAR", regno: "23BCE0242" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784e4",
    clubName: "INDIAN INSTITUTE OF CHEMICAL ENGINEERS (IICHE)",
    eventName: "Code Green",
    result: {
      "1st": {
        team: "Own The Spectrum",
        members: [
          { name: "N SHIV AADHIREYAN", regno: "23BCM0041" },
          { name: "SAKITHIYAN T M", regno: "24MID0252" },
          { name: "AMRITHA VIHA R", regno: "23BCM0001" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784c1",
    clubName: "DREAM MERCHANTS",
    eventName: "Techcraft",
    result: {
      "1st": {
        team: "Titans",
        members: [
          { name: "VEEKSHITH GALI", regno: "23BCE0915" },
          { name: "G YASESWINI", regno: "22BCA0060" }
        ]
      },
      "2nd": {
        team: "gg ez",
        members: [
          { name: "TRIVEDI KRUTARTH KARTIK", regno: "22BCE0684" },
          { name: "ARITRA DAS KANUNGO", regno: "23BBT0023" },
          { name: "SAKSHAM AGARWAL", regno: "22BBS0225" },
          { name: "UTKARSH SINGH JADON", regno: "23BBS0053" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784c5",
    clubName: "IEEE PROFESSIONAL COMMUNICATION SOCIETY (IEEE-PCS) & SOFT COMPUTING RESEARCH SOCIETY (SCRS)",
    eventName: "Survival.exe",
    result: {
      "1st": {
        team: "Ho Say Yung",
        members: [
          { name: "ANIRUDH RAGHAVAN", regno: "24BME0630" },
          { name: "JEEVAN P ABRAHAM", regno: "24BCB0083" },
          { name: "RIJUL RAVIKUMAR", regno: "24BAI0009" },
          { name: "S ARJUN", regno: "24BME0699" },
          { name: "ARTHUR LESLIE", regno: "24BME0426" }
        ]
      },
      "2nd": {
        team: "Ctrl Alt Delete",
        members: [
          { name: "JOHAN VIJI SKARIAH", regno: "24BCI0176" },
          { name: "PRANJUL AGRAWAL", regno: "24BCI0056" },
          { name: "SINGAM REDDY VIBHAVARI", regno: "24MDT0191" },
          { name: "SHAIK MOHAMMED ABRAR", regno: "24BYB0134" },
          { name: "TANMOY PAUL", regno: "24BIT0587" }
        ]
      },
      "3rd": {
        team: "Smooth Operaters",
        members: [
          { name: "ADITYA TOMAR", regno: "23BKT0061" },
          { name: "RUTHWIK N P", regno: "24BCE0602" },
          { name: "AAYUSH SOOD", regno: "23BDS0177" },
          { name: "SANATH M KOUSHIK", regno: "24BCE2187" },
          { name: "CHIRANTHAN S R", regno: "24BCE2169" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784ba",
    clubName: "VIT MATHEMATICAL ASSOCIATION (VITMAS)",
    eventName: "Mindflick",
    result: {
      "1st": {
        team: "Neural Sparks",
        members: [
          { name: "GANTA NIRANJAN YADAV", regno: "22MIS0200" },
          { name: "MENTA MANEESH KUMAR", regno: "22MIS0124" },
          { name: "ADVAITTEJ P S", regno: "24BBD0118" },
          { name: "SUMANTH SHAIK", regno: "22MIS0506" },
          { name: "BOMMIREDDY KRISHNA VAMSI", regno: "22BCE3041" }
        ]
      },
      "2nd": {
        team: "CKB",
        members: [
          { name: "PUNYA JAIN", regno: "22BCE0500" },
          { name: "NISHANTAK PANIGRAHI", regno: "22BCE2896" },
          { name: "MAYANK SINGH PATWAL", regno: "22BCE2387" }
        ]
      },
      "3rd": {
        team: "SDG-HACKERS",
        members: [
          { name: "PASUMARTHI VENKATA KRISHNA YASASWI", regno: "23BCE0837" },
          { name: "KUTIKUPPALA CHETAN SRINIVAS", regno: "23BCE0890" },
          { name: "S VENKATA SIVA LOKESH REDDY", regno: "23BCI0150" },
          { name: "OLETI SREE VATHSA", regno: "23BDS0143" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784e2",
    clubName: "THE CATALYST CLUB",
    eventName: "Molecular Mayhem",
    result: {
      "1st": {
        team: "Elements",
        members: [
          { name: "NIHLA M", regno: "24MSM0124" }
        ]
      },
      "2nd": {
        team: "Benzene",
        members: [
          { name: "KANAK GOVINDAN", regno: "24MSH0100" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784de",
    clubName: "IEEE SOCIETY ON SOCIAL IMPLICATIONS OF TECHNOLOGY (IEEE-SSIT) & CENTRE FOR SOCIAL ENTREPRENEURSHIP DEVELOPMENT(CSED)",
    eventName: "Code 4 Change 2.0",
    result: {
      "1st": {
        team: "Tech Tycoons",
        members: [
          { name: "YAJAT KAPUR", regno: "22BBS0110" },
          { name: "DIYA KAILASH", regno: "22BBS0157" },
          { name: "GARVIT JOSHI", regno: "22BCE2671" }
        ]
      },
      "2nd": {
        team: "Skill Issues",
        members: [
          { name: "ASHANK SETHI", regno: "22BCE2950" },
          { name: "JAYADITYA SONI", regno: "22BCI0233" },
          { name: "ANURAG", regno: "22BIT0052" },
          { name: "GAGAN", regno: "22BBS0240" },
          { name: "MAYUKH GARG", regno: "22BIT0048" }
        ]
      },
      "3rd & Women in Tech": {
        team: "Tech Titans",
        members: [
          { name: "ADITYA MODI", regno: "22BIT0382" },
          { name: "AKSHITA SACHDEVA", regno: "22BIT0462" },
          { name: "SHAKSHI MITTAL", regno: "22BIT0446" }
        ]
      },
      "Best UI/UX": {
        team: "Fork You",
        members: [
          { name: "AARAV RAINA", regno: "23BCE0992" },
          { name: "TITHI SHAH", regno: "23BCE0809" },
          { name: "DIPIT MADAN", regno: "23BCE0813" },
          { name: "ADITYA SHARMA", regno: "23BCE0936" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784b8",
    clubName: "IEEE PROFESSIONAL COMMUNICATION SOCIETY (IEEE-PCS) & IEEE -COMMUNICATIONS SOCIETY (IEEE-COMSOC)",
    eventName: "Connectron",
    result: {
      "1st": {
        team: "Voltics",
        members: [
          { name: "AYUSH JAISWAL", regno: "23BEC0204" },
          { name: "ARCHITA NATH", regno: "23BEC0111" },
          { name: "ABHRADEEP BASU", regno: "23BCE0713" }
        ]
      },
      "2nd": {
        team: "Yellow Light",
        members: [
          { name: "GOLLA PAVAN SHIVA", regno: "22BCE3217" },
          { name: "THALLA HARSHITHA", regno: "22BCE0903" },
          { name: "TULA RAJ KUMAR", regno: "22BCE3598" },
          { name: "CHITRADA JASWANTH", regno: "22BCE3546" }
        ]
      },
      "3rd": {
        team: "Darling",
        members: [
          { name: "JOSHUA ROLAND WILLIAMS", regno: "22BCE3022" },
          { name: "KETAN CHOUHAN", regno: "22BML0090" },
          { name: "AKSHAT JAIN", regno: "22BIT0355" },
          { name: "LATISHA PINJARI", regno: "23BCE2105" },
          { name: "ADITI G KRISHNAN", regno: "23BDS0054" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784b3",
    clubName: "STUDENTS ASSOCIATION OF BIO-ENGINEERING SCIENCE AND TECHNOLOGY (SABEST)",
    eventName: "Crisis Command",
    result: {
      "1st": {
        team: "DeepSeekers",
        members: [
          { name: "ANVESHA MODI", regno: "24BCL0118" },
          { name: "PRASHANS DIXIT", regno: "24BCL0138" },
          { name: "TANISHQ DAGA", regno: "24BCL0042" }
        ]
      },
      "2nd": [
        {
          team: "CodeGreen",
          members: [
            { name: "R DEEPIKHA", regno: "23BBT0109" },
            { name: "AMRITHA S", regno: "23BBT0055" },
            { name: "SASUDA S", regno: "23BBT0148" }
          ]
        },
        {
          team: "Neha Sudhan & Co",
          members: [
            { name: "KAARTHIGA DHANASEKARAN", regno: "24MID0297" },
            { name: "NEHA SUDHAN", regno: "24MID0326" },
            { name: "JANANI MUTHUKUMAR", regno: "24MID0319" }
          ]
        }
      ],
      "3rd": [
        {
          team: "Ghee Roast",
          members: [
            { name: "AMRUTHA V", regno: "24BBT0109" },
            { name: "M AADESH", regno: "24BBT0167" },
            { name: "SANJANA VIJAY KRISHNAN", regno: "24BBT0106" }
          ]
        },
        {
          team: "NeoMinds",
          members: [
            { name: "TANISHQA DEY", regno: "24BBT0311" },
            { name: "DHARUL MITTAL", regno: "22BCE3135" },
            { name: "M ROGINI VARSHNI", regno: "23BBT0081" }
          ]
        }
      ]
    }
  },
  {
    id: "67987f6d09417fdee12784aa",
    clubName: "CODECHEF - VIT",
    eventName: "DevSoc'25",
    result: {
      "Winner": {
        team: "Kurkure",
        members: [
          { name: "ASHWANI KUMAR MOUDGIL", regno: "22BCE0553" },
          { name: "RAGHAV SHARMA", regno: "23BCI0008" },
          { name: "RAJAN HASIJA", regno: "23BCE2366" },
          { name: "RICHA HARIDAS", regno: "24BCA0085" },
          { name: "BHARGAV R", regno: "22BBS0258" }
        ]
      },
      "Runner Up": {
        team: "Teretni dab",
        members: [
          { name: "LAKSHMI SARUPA VENKADESH", regno: "23BCE0463" },
          { name: "VERMA DIVYANSH SHAMIT", regno: "23BDS0183" },
          { name: "NITIN S", regno: "23BIT0388" },
          { name: "MAHENDRA SAJJAN CHOUDHARY", regno: "23BCE0701" }
        ]
      },
      "Best Fresher": {
        team: "ERROR200(SUCCESS)",
        members: [
          { name: "VIDHI AGARWAL", regno: "24BML0081" },
          { name: "DEVANSH ARORA", regno: "24BIT0366" },
          { name: "ANJALI BAJAJ", regno: "24BML0098" }
        ]
      },
      "Finance and Fintech": {
        team: "Code Brew",
        members: [
          { name: "CHAITANYA SRIVASTAVA", regno: "24BIT0301" },
          { name: "ARSHIA GHOSH", regno: "24BCI0093" },
          { name: "ASHI", regno: "24BME0487" },
          { name: "SURYA V", regno: "24MCA0221" },
          { name: "ATHARVA SHARMA", regno: "24BCB0017" }
        ]
      },
      "Healthcare and Education": {
        team: "git farm",
        members: [
          { name: "ANSH MEHTA", regno: "22BCE2112" },
          { name: "SHAH MANAN VIKRAM", regno: "22BCE0618" },
          { name: "TANUSH PRATIK GOLWALA", regno: "22BCE2653" }
        ]
      },
      "Media and Entertainment": {
        team: "The Unidentifiers",
        members: [
          { name: "SIDDHARTH JAIN", regno: "22BCE0743" },
          { name: "VADDARAPU KARTHIK YADAV", regno: "22BCE0929" },
          { name: "AKSHAT AGRAWAL", regno: "22BCE0787" },
          { name: "DAKSH KHANDELWAL", regno: "22BCE0899" },
          { name: "ARSHLAAN SIDDIQUIE", regno: "22BCB0132" }
        ]
      },
      "Digital Security": {
        team: "Nonchalant",
        members: [
          { name: "RISHIT SHIVAM", regno: "23BKT0020" },
          { name: "HARSHIT NARANG", regno: "23BKT0022" },
          { name: "ADITYA SINGH", regno: "23BCI0035" },
          { name: "ISHAAN SAMDANI", regno: "23BME0453" }
        ]
      },
      "Environment and Sustainability": {
        team: "Grapefruit",
        members: [
          { name: "SIAL HUSAIN MUSTUFA", regno: "22BCE0430" },
          { name: "NIGAM ACHINTYA NITIN", regno: "22BCE2759" },
          { name: "AVANISH VISHAL GHARAT", regno: "22BDS0335" },
          { name: "BINHANI SOUMIL NITIN", regno: "22BDS0275" },
          { name: "SHIVANG SRIVASTAVA", regno: "22BCE3668" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784b2",
    clubName: "IEEE CIRCUITS AND SYSTEMS (IEEE-CAS) & THE INSTRUMENT SOCIETY OF INDIA (ISOI)",
    eventName: "ELECTRO-HACK",
    result: {
      "1st": {
        team: "BioBooth",
        members: [
          { name: "P TARUN RAM", regno: "24BBS0181" },
          { name: "NAGARAJAN M", regno: "24BEC0339" },
          { name: "AYUSH MISHRA", regno: "24BML0029" }
        ]
      },
      "2nd": [
        {
          team: "Green Intel",
          members: [
            { name: "SAKSHI SINGH A", regno: "22BEC0068" },
            { name: "MOHAK VAISH", regno: "22BEC0050" },
            { name: "PRARTHNA PUHAN", regno: "22BEC0075" },
            { name: "ARUNIMA UPADHYAYA", regno: "22BML0035" },
            { name: "CHANDRIMA MANIK", regno: "22BEC0807" }
          ]
        },
        {
          team: "Matrix",
          members: [
            { name: "MUHAMMAD NABEEL", regno: "22BEC0888" },
            { name: "YANDARAPU JAYA KUSHAL", regno: "22BEC0263" },
            { name: "YARAMALA YOKESWARA REDDY", regno: "22BEC0759" },
            { name: "PANGA RAVI TEJA", regno: "22BEC0754" },
            { name: "ROMPICHARLA NOKSHIT RAMA YASESWI", regno: "22BEC0577" }
          ]
        }
      ],
      "3rd": [
        {
          team: "Akatsuki",
          members: [
            { name: "RANJITH SHARAN J", regno: "22BEI0106" },
            { name: "SRI SAAI MATHURAA", regno: "22BEC0368" },
            { name: "SUNSITHA VARSHINI PUGALAENDHI", regno: "22BEC0738" },
            { name: "SANAPUTUR SAI CHARAN", regno: "22BEC0696" }
          ]
        },
        {
          team: "The Ohm-Lette Squad",
          members: [
            { name: "ABHIPRIYA SRIVASTAVA", regno: "23BEC0361" },
            { name: "SHEIK AFRATH", regno: "23BVD0024" },
            { name: "SANJAY C", regno: "23BEC0174" },
            { name: "ABISHEK GURU M", regno: "23BEC0187" },
            { name: "KASAT SANJALI SUMEET", regno: "23BVD0042" }
          ]
        }
      ],
      "Best Fresher": {
        team: "HealX",
        members: [
          { name: "NEERAJA SURESH", regno: "24BEC0427" },
          { name: "ADITYA UDIYA", regno: "24BDS0024" },
          { name: "GARVIT AGGARWAL", regno: "24BDS0028" },
          { name: "PARVATHY KIRAN", regno: "24BVD0150" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784dc",
    clubName: "AMERICAN INSTITUTE OF CHEMICAL ENGINEERS (AICHE)",
    eventName: "Elemental Fourfold Forge",
    result: {
      "1st": {
        team: "The Hustlers",
        members: [
          { name: "SARVESHWARAN R", regno: "24BCM0057" },
          { name: "LENSAR SAJI PATTAMANA", regno: "24BCM0044" },
          { name: "SANTHOSH V S", regno: "24BCM0056" }
        ]
      },
      "2nd": {
        team: "Bombastic Bombers",
        members: [
          { name: "P ADITYA", regno: "24BCM0253" },
          { name: "NIRBHAY P MEHTA", regno: "24BCM0122" },
          { name: "SHYAM SUNDAR KRISHNAMURTHY", regno: "24BCM0224" },
          { name: "K O SHAWN PAUL", regno: "24BCM0257" }
        ]
      },
      "3rd": {
        team: "The oasis",
        members: [
          { name: "RAGHAVI POSHITHA N", regno: "24BCM0026" },
          { name: "VANI KAVYADEEEP PRAVIN", regno: "24BCM0053" },
          { name: "SONAR VEDANT YOGESH", regno: "24BCM0037" },
          { name: "ANMOL BAJAJ", regno: "24BCM0052" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784ae",
    clubName: "INDIAN SOCIETY FOR TECHNICAL EDUCATION (ISTE) & INSTITUTE ELECTRICAL & ELECTRONICS ENGINEERING (IEEE)",
    eventName: "Synapse",
    result: {
      "1st": {
        team: "Error 409- Conflict",
        members: [
          { name: "AKSHATH RAJKUMAR", regno: "23BAI0059" },
          { name: "JAIN ARYAN RAMESH", regno: "23BCT0020" },
          { name: "P VISHWAJITH", regno: "23BCI0128" }
        ]
      },
      "2nd": {
        team: "Dory's Crew",
        members: [
          { name: "MIIT DAGA", regno: "22BIT0084" },
          { name: "KSHIRJA SAHAY", regno: "22BCE0995" },
          { name: "YUVRAJ SINGH SHEKHAWAT", regno: "22BCE3548" },
          { name: "SIDHANT MISHRA", regno: "22BIT0370" }
        ]
      },
      "3rd": {
        team: "Treasure Hunt",
        members: [
          { name: "UJJVAL RAGHAVENDRA L", regno: "22BEC0464" },
          { name: "NISHANTH S", regno: "22BEC0502" },
          { name: "CHINMAY VINOD", regno: "22BEC0276" },
          { name: "RAJAT RAMESH GUJJAR", regno: "22BEC0512" },
          { name: "CHINMAY B", regno: "22BEC0329" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784be",
    clubName: "IEEE-ROBOTICS & AUTOMATION SOCIETY (IEEE-RAS) & ANTI DRUG CLUB",
    eventName: "Reboot",
    result: {
      "1st": {
        team: "Astute",
        members: [
          { name: "HARSHIL BALIYA", regno: "24BEI0067" },
          { name: "PALKEE PANDIT", regno: "24BCE2920" }
        ]
      },
      "2nd": {
        team: "Team Nirakshit",
        members: [
          { name: "ROBIN PHILIP", regno: "22BEC0987" },
          { name: "ANIKET KUMAR SINGH", regno: "22BEC0983" },
          { name: "TANMAY MISHRA", regno: "22BEC0067" },
          { name: "AMAN CHAUHAN", regno: "22BCE0476" }
        ]
      },
      "3rd": {
        team: "Jai Shree Krishna",
        members: [
          { name: "JYOTIRADITYA KALE", regno: "22BCE0292" },
          { name: "LOKHANDWALA HUSSAIN EMDAD", regno: "22BIT0620" },
          { name: "SAI MALLIKA EVURI", regno: "22BEC0875" },
          { name: "JAWANDHIYA KRISHNA SURENDRA", regno: "22BEC0790" },
          { name: "RAGHAV CHANDAK", regno: "22BEC0810" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784d7",
    clubName: "ASSOCIATION FOR COMPUTING MACHINERY (ACM)",
    eventName: "Reverse Coding",
    result: {
      "1st": {
        team: "You are L",
        members: [
          { name: "RISHIK BANSAL", regno: "23BKT0046" },
          { name: "MITISHA SHARMA", regno: "23BCE0434" },
          { name: "JOSITHAA JOSEPH", regno: "23BCE0437" },
          { name: "AAKAASH SATHYA SARAVANAN", regno: "23BCE0500" }
        ]
      },
      "2nd": {
        team: "Invalid Input",
        members: [
          { name: "INDANI ARMAAN SHALIMAR", regno: "22BCE3347" },
          { name: "DESHMUKH ADITYA RAHUL", regno: "22BCE2764" },
          { name: "LADDHA SHRINIL NITIN", regno: "22BCT0149" },
          { name: "BHATTAD VEDH SANJAY", regno: "22BCT0252" }
        ]
      },
      "3rd": {
        team: "Razer",
        members: [
          { name: "SHIVAM MOTWANI", regno: "22BCE2528" },
          { name: "ARJUN GUHA", regno: "22BCE2408" },
          { name: "ARYAN SEHGAL", regno: "22BDS0007" },
          { name: "AARJAV JAIN", regno: "22BCT0104" }
        ]
      },
      "Best Fresher": {
        team: "XYZ",
        members: [
          { name: "DIVYAM AGRAWAL", regno: "24BIT0423" },
          { name: "YUVRAJ BANSAL", regno: "24BCE2238" },
          { name: "KRISHANG ZINZUWADIA", regno: "24BCE2239" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784d0",
    clubName: "SOCIETY OF AUTOMOTIVE ENGINEERS (SAE)",
    eventName: "DriveAble",
    result: {
      "1st": [
        {
          team: "Espada",
          members: [
            { name: "YADLA VISHNU VAMSI", regno: "24BML0011" }
          ]
        },
        {
          team: "Ehsan Abdulkhader",
          members: [
            { name: "EHSAN ABDULKHADER", regno: "24BCT0089" }
          ]
        }
      ],
      "2nd": {
        team: "Team YOLO",
        members: [
          { name: "ANWESH AJITABH DASH", regno: "22BME0651" }
        ]
      },
      "3rd": {
        team: "KayOS",
        members: [
          { name: "SOUMEN BASA", regno: "22BME0246" }
        ]
      }
    }
  },
  {
    id: "67987f6d09417fdee12784af",
    clubName: "SOCIETY OF AUTOMOTIVE ENGINEERS (SAE)",
    eventName: "Model Mania Design-a-Thon",
    result: {
      "Winner": {
        team: "KayOS",
        members: [
          { name: "SOUMEN BASA", regno: "22BME0246" },
          { name: "ANWESH AJITABH DASH", regno: "22BME0651" }
        ]
      }
    }
  },
]

export const proctorHackResult = {
  id: "1",
  clubName: "Office of Students' Welfare",
  eventName: "Proctor-Proctee Hackathon",
  result: {
    "1st": {
      team: "Tech Titans",
      members: [
        { name: "AKSHITA SACHDEVA", regno: "22BIT0462" },
        { name: "SHAKSHI MITTAL", regno: "22BIT0446" },
        { name: "RIYA SHARMA", regno: "22BIT0402" }
      ]
    },
    "2nd": {
      team: "AI Beans",
      members: [
        { name: "JAGATHKISHORE M M", regno: "24BCE0626" },
        { name: "NIHIT GARG", regno: "24BCE0627" }
      ]
    },
    "3rd": {
      team: "Techy",
      members: [
        { name: "SHINJANI PAL", regno: "24BML0077" },
        { name: "B SRIVARDAN", regno: "22BML0095" }
      ]
    }
  }
}

export const centralHackResult = {
  id: "2",
  clubName: "Central Hack",
  eventName: "Yantra'25 Central Hack",
  result: {
    "1st": {
      team: "Burnt Resistors",
      members: [
        { name: "ADARSH SOMU PALANIAPPAN", regno: "23BEC0155" },
        { name: "SOORYAKANTH RAMAKRISHNAN", regno: "23BEE0083" },
        { name: "PAI SHANTANU HARISH", regno: "22BEC0982" },
        { name: "KOTHURI ATUL SAI", regno: "23BCE0704" },
        { name: "S R ABISHEK", regno: "23BEE0084" }
      ]
    },
    "2nd": {
      team: "ACS Bionics",
      members: [
        { name: "SAVAR MAGO", regno: "23BEC0314" },
        { name: "HRITAM SHRIVASTAVA", regno: "23BML0032" },
        { name: "SUHRITH NPK SISTLA", regno: "23BEC0242" },
        { name: "V TUSHAR", regno: "23BEC0384" }
      ]
    },
    "3rd": {
      team: "BaldevTheDestroyer",
      members: [
        { name: "DIVYANSHU KUMAR MAHTO", regno: "22BIT0129" },
        { name: "RITIK GARG", regno: "22BIT0274" },
        { name: "ANUBHAV SAXENA", regno: "22BIT0291" },
        { name: "AYUSH SINGH", regno: "22BIT0287" },
        { name: "NISHANT HEMANT CHOPDE", regno: "22BIT0170" }
      ]
    },
    "Sustainable Cities": {
      team: "Pivot",
      members: [
        { name: "KETAN CHOUHAN", regno: "22BML0090" },
        { name: "ANISHA PLAWAT", regno: "22BCE0275" },
        { name: "JOSHUA ROLAND WILLIAMS", regno: "22BCE3022" },
        { name: "SHREYA AGARWAL", regno: "22BCE2179" },
        { name: "SATHISH SARATHY B", regno: "22BEC0598" }
      ]
    },
    "Good Wealth and Economic Development": {
      team: "Hello World",
      members: [
        { name: "AARYAN SHRIVASTAV", regno: "23BCE0927" },
        { name: "SALMA MEHWISH K M", regno: "23BML0058" },
        { name: "SAMAGRA SRIVASTAVA", regno: "23BCE0874" },
        { name: "SHAIKH UZAIR HAIDERPASHA", regno: "23BCE0870" }
      ]
    },
    "Good Health and Well Being": {
      team: "CRABS",
      members: [
        { name: "SUCHETANA CHOWDHURY", regno: "23BCE0597" },
        { name: "SUJATRO GANGULI", regno: "23BCE0578" },
        { name: "ALAN J BIBINS", regno: "23BCE0598" },
        { name: "ROHIT PHANIRAM SAKAMURI", regno: "23BDS0051" },
        { name: "NITIN S", regno: "23BIT0388" }
      ]
    },
    "Partnership for Goals": {
      team: "THE UNIDENTIFIERS",
      members: [
        { name: "RIYA SHARMA", regno: "22BIT0402" },
        { name: "YASH KUMAR", regno: "22BCT0349" },
        { name: "AKSHAT AGRAWAL", regno: "22BCE0787" },
        { name: "ARSHLAAN SIDDIQUIE", regno: "22BCB0132" },
        { name: "SIDDHARTH JAIN", regno: "22BCE0743" }
      ]
    },
    "Quality Education": {
      team: "Bhagwan Bharose",
      members: [
        { name: "G S ASHWIN", regno: "22BCE2314" },
        { name: "RITIKA SANTOSH JADHAV", regno: "23BEL0012" },
        { name: "ADWITIYA PAUL", regno: "22BCE0415" },
        { name: "ADARSH ARUNKUMAR SHIRAWALMATH", regno: "22BKT0058" },
        { name: "MAMAWALA EBRAHIM MUSTAFA", regno: "22BCT0338" }
      ]
    },
    "Reduced Inequalities": {
      team: "Noscodice",
      members: [
        { name: "VANI VERMA", regno: "23BAI0016" },
        { name: "UPASANA BHAUMIK", regno: "23BCB0074" },
        { name: "RASHI KUSHWAHA", regno: "23BCB0116" },
        { name: "BHUMIT GOYAL", regno: "23BCI0137" }
      ]
    },
    "Best Implementation": {
      team: "IOTA",
      members: [
        { name: "PARTH KEDAWAT", regno: "21BCE3250" },
        { name: "VANSH MATHUR", regno: "21BCE0489" },
        { name: "UDIT PANDEY", regno: "21BCE3085" }
      ]
    },
    "Best UI/UX": {
      team: "Almost Reality",
      members: [
        { name: "ASHWANI KUMAR MOUDGIL", regno: "22BCE0553" },
        { name: "RAJAN HASIJA", regno: "23BCE2366" },
        { name: "BHARGAV R", regno: "22BBS0258" },
        { name: "RICHA HARIDAS", regno: "24BCA0085" },
        { name: "RAGHAV SHARMA", regno: "23BCI0008" }
      ]
    },
    "Best AI Model": {
      team: "Segmentation Fault",
      members: [
        { name: "GURUMAUJ SATSANGI", regno: "23BCE0474" },
        { name: "PRATHAM KHANDUJA", regno: "23BCE0420" },
        { name: "RAGHAV AGRAWAL", regno: "23BCE0535" },
        { name: "AARYAN UPADHYAY", regno: "23BCE0638" },
        { name: "RUDRA GUPTA", regno: "23BDS0306" }
      ]
    },
    "Best Women Team": {
      team: "Learning Loop",
      members: [
        { name: "STUTI DAHAL", regno: "22BCE3907" },
        { name: "DIANE SUSAN THOMAS", regno: "22BCE3694" },
        { name: "KASHISH HUSSAIN", regno: "22BCI0262" },
        { name: "PRAKRITI SHRESTHA", regno: "22BDS0439" }
      ]
    },
    "Best Fresher Team": {
      team: "Astra",
      members: [
        { name: "ADITYA UDIYA", regno: "24BDS0024" },
        { name: "GARVIT AGGARWAL", regno: "24BDS0028" },
        { name: "MEDA SRIKAR", regno: "24BCT0310" },
        { name: "NIDHI LAVEKAR", regno: "24BMM0066" }
      ]
    },
    "Best Electronics Team": {
      team: "Victus",
      members: [
        { name: "ARAVIND B", regno: "22BEC0936" },
        { name: "ARNAV OBEROI", regno: "23BME0081" },
        { name: "ROHAN JACOB", regno: "22BEC0602" },
        { name: "DIVYANSH KRISHNA", regno: "23BKT0021" },
        { name: "AAKASH GURUMURTHI", regno: "23BIT0245" }
      ]
    },
    "Best Mechanical Team": {
      team: "Blitzkreig",
      members: [
        { name: "SURIYA KHARTHIKH V S", regno: "22BME0155" },
        { name: "VIDHYACHAARAN R S", regno: "22BME0224" },
        { name: "SIDDHARTH RAJEEV", regno: "22BME0252" }
      ]
    },
    "Best Civil Team": {
      team: "ASL",
      members: [
        { name: "ARONNYA PAL", regno: "23BCE0619" },
        { name: "NADKARNI SUKRUTA MANGESH", regno: "23BCE0606" },
        { name: "YAGANTI LOHITHNATH REDDY", regno: "23BCE0594" }
      ]
    },
    "Best Biotechnology Team": {
      team: "Jugnu",
      members: [
        { name: "ISHAAN MISHRA", regno: "22BIT0394" },
        { name: "AKSHAT JAIN", regno: "22BIT0355" },
        { name: "NAINIKA ANISH", regno: "23BCT0047" },
        { name: "SANCHITHA V", regno: "23BCB0077" },
        { name: "VRISHA PARIKH", regno: "22BML0020" }
      ]
    },
    "Best Chemical Team": {
      team: "AGRI",
      members: [
        { name: "KAVITHA G", regno: "24MTS0018" },
        { name: "ANUSHKA PAUL", regno: "23BBT0085" },
        { name: "AMAL C N", regno: "24MTS0020" },
        { name: "M R NAMANA", regno: "24MTS0014" },
        { name: "PALLAVI PRAKASH MALOKAR", regno: "24MTS0006" }
      ]
    },
    "Best Agriculture Team": {
      team: "Watt ka Engine",
      members: [
        { name: "PARTH KAPOOR", regno: "22BEC0367" },
        { name: "AKUL ANAND CHORDIA", regno: "22BCE3277" },
        { name: "M MAYANK BAFNA", regno: "22BEC0889" }
      ]
    }
  }
}