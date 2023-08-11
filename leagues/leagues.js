const leagues = {
  'Ligue 1': {
    legends: {
      'UEFA Champions League': {
        color: 'blue',
        position: [1, 2, 3],
      },
      'UEFA Champions League Qualifiers': {
        color: 'blue-2',
        position: [4],
      },
      'UEFA Europa League': {
        color: 'orange',
        position: [5],
      },
      'UEFA Conference League Play-offs': {
        color: 'green',
        position: [6],
      },
      'Relegation Play-off': {
        color: 'yellow',
        position: [16],
      },
      Relegation: {
        color: 'red',
        position: [17, 18],
      },
    },
    teams: {
      'AS MONACO': {
        name: 'AS MONACO',
        logo: 'ligue1/ASMONACO.png',
      },
      BREST: {
        name: 'STADE BRESTOIS 29',
        logo: 'ligue1/BREST.png',
      },
      CLERMONT: {
        name: 'CLERMONT FOOT 63',
        logo: 'ligue1/CLERMONT.png',
      },
      'FC LORIENT': {
        name: 'FC LORIENT',
        logo: 'ligue1/FCLORIENT.png',
      },
      'FC METZ': {
        name: 'FC METZ',
        logo: 'ligue1/FCMETZ.png',
      },
      'FC NANTES': {
        name: 'FC NANTES',
        logo: 'ligue1/FCNANTES.png',
      },
      'HAVRE AC': {
        name: 'HAVRE AC',
        logo: 'ligue1/HAVREAC.png',
      },
      LOSC: {
        name: 'LOSC LILLE',
        logo: 'ligue1/LOSC.png',
      },
      MONTPELLIER: {
        name: 'MONTPELLIER HÉRAULT SC',
        logo: 'ligue1/MONTPELLIER.png',
      },
      'OGC NICE': {
        name: 'OGC NICE',
        logo: 'ligue1/OGCNICE.png',
      },
      OL: {
        name: 'OLYMPIQUE LYONNAIS',
        logo: 'ligue1/OL.png',
      },
      OM: {
        name: 'OLYMPIQUE DE MARSEILLE',
        logo: 'ligue1/OM.png',
      },
      PSG: {
        name: 'PARIS SAINT-GERMAIN',
        logo: 'ligue1/PSG.png',
      },
      'RC LENS': {
        name: 'RC LENS',
        logo: 'ligue1/RCLENS.png',
      },
      REIMS: {
        name: 'STADE DE REIMS',
        logo: 'ligue1/REIMS.png',
      },
      RENNES: {
        name: 'STADE RENNAIS FC',
        logo: 'ligue1/RENNES.png',
      },
      STRASBOURG: {
        name: 'RC STRASBOURG ALSACE',
        logo: 'ligue1/STRASBOURG.png',
      },
      'TOULOUSE FC': {
        name: 'TOULOUSE FC',
        logo: 'ligue1/TOULOUSEFC.png',
      },
    },
  },
  'Ligue 2': {
    legends: {
      Promotion: {
        color: 'blue',
        position: [1, 2],
      },
      'Promotion Play-off': {
        color: 'green',
        position: [3, 4, 5],
      },
      Relegation: {
        color: 'red',
        position: [17, 18, 19, 20],
      },
    },
    teams: {
      'AC AJACCIO': {
        name: 'AC AJACCIO',
        logo: 'ligue2/ACAJACCIO.png',
      },
      'AJ AUXERRE': {
        name: 'AJ AUXERRE',
        logo: 'ligue2/AJAUXERRE.png',
      },
      'AMIENS SC': {
        name: 'AMIENS SC',
        logo: 'ligue2/AMIENSSC.png',
      },
      'ANGERS SCO': {
        name: 'ANGERS SCO',
        logo: 'ligue2/ANGERSSCO.png',
      },
      ASSE: {
        name: 'AS SAINT-ÉTIENNE',
        logo: 'ligue2/ASSE.png',
      },
      BORDEAUX: {
        name: 'FC GIRONDINS DE BORDEAUX',
        logo: 'ligue2/BORDEAUX.png',
      },
      'EA GUINGAMP': {
        name: 'EN AVANT GUINGAMP',
        logo: 'ligue2/EAGUINGAMP.png',
      },
      'FC ANNECY': {
        name: 'FC ANNECY',
        logo: 'ligue2/FCANNECY.png',
      },
      GRENOBLE: {
        name: 'GRENOBLE FOOT 38',
        logo: 'ligue2/GRENOBLE.png',
      },
      'LAVAL MFC': {
        name: 'STADE LAVALLOIS MFC',
        logo: 'ligue2/LAVALMFC.png',
      },
      'PARIS FC': {
        name: 'PARIS FC',
        logo: 'ligue2/PARISFC.png',
      },
      'PAU FC': {
        name: 'PAU FC',
        logo: 'ligue2/PAUFC.png',
      },
      QRM: {
        name: 'QUEVILLY ROUEN METROPOLE',
        logo: 'ligue2/QRM.png',
      },
      'RODEZ AF': {
        name: 'RODEZ AVEYRON FOOTBALL',
        logo: 'ligue2/RODEZAF.png',
      },
      'SC BASTIA': {
        name: 'SC BASTIA',
        logo: 'ligue2/SCBASTIA.png',
      },
      'SM CAEN': {
        name: 'STADE MALHERBE CAEN',
        logo: 'ligue2/SMCAEN.png',
      },
      TROYES: {
        name: 'ESTAC TROYES',
        logo: 'ligue2/TROYES.png',
      },
      VAFC: {
        name: 'VALENCIENNES FC',
        logo: 'ligue2/VAFC.png',
      },
      'US CONCARNEAU': {
        name: 'US CONCARNEAU',
        logo: 'ligue2/USCONCARNEAU.png',
      },
      'USL DUNKERQUE': {
        name: 'USL DUNKERQUE',
        logo: 'ligue2/USLDUNKERQUE.png',
      },
    },
  },
  'Premier League': {
    legends: {
      'UEFA Champions League': {
        color: 'blue',
        position: [1, 2, 3, 4],
      },
      'UEFA Europa League': {
        color: 'orange',
        position: [5],
      },
      Relegation: {
        color: 'red',
        position: [18, 19, 20],
      },
    },
    teams: {
      Arsenal: {
        name: 'Arsenal',
        logo: 'premierleague/Arsenal.png',
      },
      AstonVilla: {
        name: 'Aston Villa',
        logo: 'premierleague/AstonVilla.png',
      },
      Bournemouth: {
        name: 'Bournemouth',
        logo: 'premierleague/Bournemouth.png',
      },
      Brentford: {
        name: 'Brentford',
        logo: 'premierleague/Brentford.png',
      },
      Brighton: {
        name: 'Brighton and Hove Albion',
        logo: 'premierleague/Brighton.png',
      },
      Burnley: {
        name: 'Burnley',
        logo: 'premierleague/Burnley.png',
      },
      Chelsea: {
        name: 'Chelsea',
        logo: 'premierleague/Chelsea.png',
      },
      CrystalPalace: {
        name: 'Crystal Palace',
        logo: 'premierleague/CrystalPalace.png',
      },
      Everton: {
        name: 'Everton',
        logo: 'premierleague/Everton.png',
      },
      Fulham: {
        name: 'Fulham',
        logo: 'premierleague/Fulham.png',
      },
      Liverpool: {
        name: 'Liverpool',
        logo: 'premierleague/Liverpool.png',
      },
      Luton: {
        name: 'Luton Town',
        logo: 'premierleague/Luton.png',
      },
      ManCity: {
        name: 'Manchester City',
        logo: 'premierleague/ManCity.png',
      },
      ManUnited: {
        name: 'Manchester United',
        logo: 'premierleague/ManUnited.png',
      },
      Newcastle: {
        name: 'Newcastle United',
        logo: 'premierleague/Newcastle.png',
      },
      Nottingham: {
        name: 'Nottingham Forest',
        logo: 'premierleague/Nottingham.png',
      },
      SheffUtd: {
        name: 'Sheffield United',
        logo: 'premierleague/SheffUtd.png',
      },
      Tottenham: {
        name: 'Tottenham Hotspur',
        logo: 'premierleague/Tottenham.png',
      },
      WestHam: {
        name: 'West Ham United',
        logo: 'premierleague/WestHam.png',
      },
      Wolverhampton: {
        name: 'Wolverhampton Wanderers',
        logo: 'premierleague/Wolverhampton.png',
      },
    },
  },
  Championship: {
    legends: {
      Promotion: {
        color: 'blue',
        position: [1, 2],
      },
      'Promotion Play-off': {
        color: 'green',
        position: [3, 4, 5, 6],
      },
      Relegation: {
        color: 'red',
        position: [22, 23, 24],
      },
    },
    teams: {
      Birmingham: {
        name: 'Birmingham City',
        logo: 'championship/Birmingham.png',
      },
      Blackburn: {
        name: 'Blackburn Rovers',
        logo: 'championship/Blackburn.png',
      },
      BristolCity: {
        name: 'Bristol City',
        logo: 'championship/BristolCity.png',
      },
      Cardiff: {
        name: 'Cardiff City',
        logo: 'championship/Cardiff.png',
      },
      Coventry: {
        name: 'Coventry City',
        logo: 'championship/Coventry.png',
      },
      Huddersfield: {
        name: 'Huddersfield Town',
        logo: 'championship/Huddersfield.png',
      },
      Hull: {
        name: 'Hull City',
        logo: 'championship/Hull.png',
      },
      Ipswich: {
        name: 'Ipswich Town',
        logo: 'championship/Ipswich.png',
      },
      Leeds: {
        name: 'Leeds United',
        logo: 'championship/Leeds.png',
      },
      Leicester: {
        name: 'Leicester City',
        logo: 'championship/Leicester.png',
      },
      Middlesbrough: {
        name: 'Middlesbrough',
        logo: 'championship/Middlesbrough.png',
      },
      Millwall: {
        name: 'Millwall',
        logo: 'championship/Millwall.png',
      },
      Norwich: {
        name: 'Norwich City',
        logo: 'championship/Norwich.png',
      },
      Plymouth: {
        name: 'Plymouth Argyle',
        logo: 'championship/Plymouth.png',
      },
      Preston: {
        name: 'Preston North End',
        logo: 'championship/Preston.png',
      },
      QPR: {
        name: 'Queens Park Rangers',
        logo: 'championship/QPR.png',
      },
      Rotherham: {
        name: 'Rotherham United',
        logo: 'championship/Rotherham.png',
      },
      SheffWed: {
        name: 'Sheffield Wednesday',
        logo: 'championship/SheffWed.png',
      },
      Southampton: {
        name: 'Southampton',
        logo: 'championship/Southampton.png',
      },
      Stoke: {
        name: 'Stoke City',
        logo: 'championship/Stoke.png',
      },
      Sunderland: {
        name: 'Sunderland',
        logo: 'championship/Sunderland.png',
      },
      Swansea: {
        name: 'Swansea City',
        logo: 'championship/Swansea.png',
      },
      Watford: {
        name: 'Watford',
        logo: 'championship/Watford.png',
      },
      WestBromwich: {
        name: 'West Bromwich Albion',
        logo: 'championship/WestBromwich.png',
      },
    },
  },
  'La Liga': {
    legends: {
      'UEFA Champions League': {
        color: 'blue',
        position: [1, 2, 3, 4],
      },
      'UEFA Europa League': {
        color: 'orange',
        position: [5],
      },
      'UEFA Conference League Play-offs': {
        color: 'green',
        position: [6],
      },
      Relegation: {
        color: 'red',
        position: [18, 19, 20],
      },
    },
    teams: {
      Alaves: {
        name: 'Deportivo Alavés',
        logo: 'laliga/Alaves.png',
      },
      Almeria: {
        name: 'UD Almería',
        logo: 'laliga/Almeria.png',
      },
      Atletico: {
        name: 'Atlético de Madrid',
        logo: 'laliga/Atletico.png',
      },
      Barcelone: {
        name: 'FC Barcelona',
        logo: 'laliga/Barcelone.png',
      },
      Betis: {
        name: 'Real Betis',
        logo: 'laliga/Betis.png',
      },
      Bilbao: {
        name: 'Athletic Club',
        logo: 'laliga/Bilbao.png',
      },
      Cadix: {
        name: 'Cádiz CF',
        logo: 'laliga/Cadix.png',
      },
      CeltaVigo: {
        name: 'RC Celta',
        logo: 'laliga/CeltaVigo.png',
      },
      Getafe: {
        name: 'Getafe CF',
        logo: 'laliga/Getafe.png',
      },
      Girona: {
        name: 'Girona FC',
        logo: 'laliga/Girona.png',
      },
      Grenade: {
        name: 'Granada CF',
        logo: 'laliga/Grenade.png',
      },
      LasPalmas: {
        name: 'UD Las Palmas',
        logo: 'laliga/LasPalmas.png',
      },
      Majorque: {
        name: 'RCD Mallorca',
        logo: 'laliga/Majorque.png',
      },
      Osasuna: {
        name: 'CA Osasuna',
        logo: 'laliga/Osasuna.png',
      },
      RealMadrid: {
        name: 'Real Madrid',
        logo: 'laliga/RealMadrid.png',
      },
      RealSociedad: {
        name: 'Real Sociedad',
        logo: 'laliga/RealSociedad.png',
      },
      Seville: {
        name: 'Sevilla FC',
        logo: 'laliga/Seville.png',
      },
      Valence: {
        name: 'Valencia CF',
        logo: 'laliga/Valence.png',
      },
      Vallecano: {
        name: 'Rayo Vallecano',
        logo: 'laliga/Vallecano.png',
      },
      Villarreal: {
        name: 'Villarreal CF',
        logo: 'laliga/Villarreal.png',
      },
    },
  },
  'La Liga 2': {
    legends: {
      Promotion: {
        color: 'blue',
        position: [1, 2],
      },
      'Promotion Play-off': {
        color: 'green',
        position: [3, 4, 5, 6],
      },
      Relegation: {
        color: 'red',
        position: [19, 20, 21, 22],
      },
    },
    teams: {
      Albacete: {
        name: 'Albacete',
        logo: 'laliga2/Albacete.png',
      },
      Alcorcon: {
        name: 'Alcorcón',
        logo: 'laliga2/Alcorcon.png',
      },
      Amorebieta: {
        name: 'Amorebieta',
        logo: 'laliga2/Amorebieta.png',
      },
      Burgos: {
        name: 'Burgos',
        logo: 'laliga2/Burgos.png',
      },
      Carthagene: {
        name: 'Cartagena',
        logo: 'laliga2/Carthagene.png',
      },
      Eibar: {
        name: 'Eibar',
        logo: 'laliga2/Eibar.png',
      },
      Elche: {
        name: 'Elche',
        logo: 'laliga2/Elche.png',
      },
      Eldense: {
        name: 'Eldense',
        logo: 'laliga2/Eldense.png',
      },
      Espanyol: {
        name: 'Espanyol',
        logo: 'laliga2/Espanyol.png',
      },
      FCAndorra: {
        name: 'Futbol Club Andorra',
        logo: 'laliga2/FCAndorra.png',
      },
      Gijon: {
        name: 'Sporting Gijón',
        logo: 'laliga2/Gijon.png',
      },
      Huesca: {
        name: 'Huesca',
        logo: 'laliga2/Huesca.png',
      },
      Leganes: {
        name: 'Leganés',
        logo: 'laliga2/Leganes.png',
      },
      Levante: {
        name: 'Levante',
        logo: 'laliga2/Levante.png',
      },
      Mirandes: {
        name: 'Mirandés',
        logo: 'laliga2/Mirandes.png',
      },
      Oviedo: {
        name: 'Real Oviedo',
        logo: 'laliga2/Oviedo.png',
      },
      RacingFerrol: {
        name: 'Ferrol',
        logo: 'laliga2/RacingFerrol.png',
      },
      Santander: {
        name: 'Santander',
        logo: 'laliga2/Santander.png',
      },
      Saragosse: {
        name: 'Saragosse',
        logo: 'laliga2/Saragosse.png',
      },
      Tenerife: {
        name: 'Tenerife',
        logo: 'laliga2/Tenerife.png',
      },
      Valladolid: {
        name: 'Valladolid',
        logo: 'laliga2/Valladolid.png',
      },
      VillarrealII: {
        name: 'Villarreal Club de Fútbol B',
        logo: 'laliga2/VillarrealII.png',
      },
    },
  },
  'Serie A': {
    legends: {
      'UEFA Champions League': {
        color: 'blue',
        position: [1, 2, 3, 4],
      },
      'UEFA Europa League': {
        color: 'orange',
        position: [5],
      },
      'UEFA Conference League Play-offs': {
        color: 'green',
        position: [6],
      },
      Relegation: {
        color: 'red',
        position: [18, 19, 20],
      },
    },
    teams: {
      Atalanta: {
        name: 'Atalanta',
        logo: 'seriea/Atalanta.png',
      },
      Bologne: {
        name: 'Bologna',
        logo: 'seriea/Bologne.png',
      },
      Cagliari: {
        name: 'Cagliari',
        logo: 'seriea/Cagliari.png',
      },
      Empoli: {
        name: 'Empoli',
        logo: 'seriea/Empoli.png',
      },
      Fiorentina: {
        name: 'Fiorentina',
        logo: 'seriea/Fiorentina.png',
      },
      Frosinone: {
        name: 'Frosinone',
        logo: 'seriea/Frosinone.png',
      },
      Genoa: {
        name: 'Genoa',
        logo: 'seriea/Genoa.png',
      },
      Hellas: {
        name: 'Hellas Verona',
        logo: 'seriea/Hellas.png',
      },
      InterMilan: {
        name: 'Inter',
        logo: 'seriea/InterMilan.png',
      },
      Juventus: {
        name: 'Juventus',
        logo: 'seriea/Juventus.png',
      },
      Lazio: {
        name: 'Lazio',
        logo: 'seriea/Lazio.png',
      },
      Lecce: {
        name: 'Lecce',
        logo: 'seriea/Lecce.png',
      },
      Milan: {
        name: 'Milan',
        logo: 'seriea/Milan.png',
      },
      Monza: {
        name: 'Monza',
        logo: 'seriea/Monza.png',
      },
      Naples: {
        name: 'Napoli',
        logo: 'seriea/Naples.png',
      },
      Rome: {
        name: 'Roma',
        logo: 'seriea/Rome.png',
      },
      Salernitana: {
        name: 'Salernitana',
        logo: 'seriea/Salernitana.png',
      },
      Sassuolo: {
        name: 'Sassuolo',
        logo: 'seriea/Sassuolo.png',
      },
      Torino: {
        name: 'Torino',
        logo: 'seriea/Torino.png',
      },
      Udinese: {
        name: 'Udinese',
        logo: 'seriea/Udinese.png',
      },
    },
  },
  'Serie B': {
    legends: {
      Promotion: {
        color: 'blue',
        position: [1, 2],
      },
      'Promotion Play-off': {
        color: 'green',
        position: [3, 4, 5, 6, 7, 8],
      },
      'Relegation Play-off': {
        color: 'yellow',
        position: [16, 17],
      },
      Relegation: {
        color: 'red',
        position: [18, 19],
      },
    },
    teams: {
      Ascoli: {
        name: 'Ascoli',
        logo: 'serieb/Ascoli.png',
      },
      Bari: {
        name: 'Bari',
        logo: 'serieb/Bari.png',
      },
      Catanzaro: {
        name: 'Catanzaro',
        logo: 'serieb/Catanzaro.png',
      },
      Cittadella: {
        name: 'Cittadella',
        logo: 'serieb/Cittadella.png',
      },
      Come: {
        name: 'Como',
        logo: 'serieb/Come.png',
      },
      Cosenza: {
        name: 'Cosenza',
        logo: 'serieb/Cosenza.png',
      },
      Cremonese: {
        name: 'Cremonese',
        logo: 'serieb/Cremonese.png',
      },
      FeralpiSalo: {
        name: 'Feralpisalò',
        logo: 'serieb/FeralpiSalo.png',
      },
      Lecco: {
        name: 'Lecco',
        logo: 'serieb/Lecco.png',
      },
      Modena: {
        name: 'Modena',
        logo: 'serieb/Modena.png',
      },
      Palermo: {
        name: 'Palermo',
        logo: 'serieb/Palermo.png',
      },
      Parme: {
        name: 'Parma',
        logo: 'serieb/Parme.png',
      },
      Pise: {
        name: 'Pisa',
        logo: 'serieb/Pise.png',
      },
      Reggiana: {
        name: 'Reggiana',
        logo: 'serieb/Reggiana.png',
      },
      Sampdoria: {
        name: 'Sampdoria',
        logo: 'serieb/Sampdoria.png',
      },
      Spezia: {
        name: 'Spezia',
        logo: 'serieb/Spezia.png',
      },
      Sudtirol: {
        name: 'Südtirol',
        logo: 'serieb/Sudtirol.png',
      },
      Ternana: {
        name: 'Ternana',
        logo: 'serieb/Ternana.png',
      },
      Venise: {
        name: 'Venezi',
        logo: 'serieb/Venise.png',
      },
    },
  },
  Bundesliga: {
    legends: {
      'UEFA Champions League': {
        color: 'blue',
        position: [1, 2, 3, 4],
      },
      'UEFA Europa League': {
        color: 'orange',
        position: [5],
      },
      'UEFA Conference League Qualifiers': {
        color: 'green',
        position: [6],
      },
      'Relegation Play-off': {
        color: 'yellow',
        position: [16],
      },
      Relegation: {
        color: 'red',
        position: [17, 18],
      },
    },
    teams: {
      Augsbourg: {
        name: 'FC Augsburg',
        logo: 'bundesliga/Augsbourg.png',
      },
      BayernMunich: {
        name: 'FC Bayern München',
        logo: 'bundesliga/BayernMunich.png',
      },
      Breme: {
        name: 'SV Werder Bremen',
        logo: 'bundesliga/Breme.png',
      },
      Bochum: {
        name: 'VfL Bochum 1848',
        logo: 'bundesliga/Bochum.png',
      },
      Cologne: {
        name: 'FC Köln',
        logo: 'bundesliga/Cologne.png',
      },
      Darmstadt: {
        name: 'SV Darmstadt 98',
        logo: 'bundesliga/Darmstadt.png',
      },
      Dortmund: {
        name: 'Borussia Dortmund',
        logo: 'bundesliga/Dortmund.png',
      },
      Francfort: {
        name: 'Eintracht Frankfurt',
        logo: 'bundesliga/Francfort.png',
      },
      Fribourg: {
        name: 'Sport-Club Freiburg',
        logo: 'bundesliga/Fribourg.png',
      },
      Heidenheim: {
        name: 'FC Heidenheim 1846',
        logo: 'bundesliga/Heidenheim.png',
      },
      Hoffenheim: {
        name: 'TSG Hoffenheim',
        logo: 'bundesliga/Hoffenheim.png',
      },
      Leipzig: {
        name: 'RB Leipzig',
        logo: 'bundesliga/Leipzig.png',
      },
      Leverkusen: {
        name: 'Bayer 04 Leverkusen',
        logo: 'bundesliga/Leverkusen.png',
      },
      Mgladbach: {
        name: 'Borussia Mönchengladbach',
        logo: 'bundesliga/Mgladbach.png',
      },
      Mayence: {
        name: 'FSV Mainz 05',
        logo: 'bundesliga/Mayence.png',
      },
      Stuttgart: {
        name: 'VfB Stuttgart',
        logo: 'bundesliga/Stuttgart.png',
      },
      UnionBerlin: {
        name: 'FC Union Berlin',
        logo: 'bundesliga/UnionBerlin.png',
      },
      Wolfsbourg: {
        name: 'VfL Wolfsburg',
        logo: 'bundesliga/Wolfsbourg.png',
      },
    },
  },
  '2. Bundesliga': {
    legends: {
      Promotion: {
        color: 'blue',
        position: [1, 2],
      },
      'Promotion Play-off': {
        color: 'green',
        position: [3],
      },
      'Relegation Play-off': {
        color: 'yellow',
        position: [16],
      },
      Relegation: {
        color: 'red',
        position: [17, 18],
      },
    },
    teams: {
      Brunswick: {
        name: 'Eintracht Braunschweig',
        logo: '2bundesliga/Brunswick.png',
      },
      Dusseldorf: {
        name: 'Fortuna Düsseldorf',
        logo: '2bundesliga/Dusseldorf.png',
      },
      Elversberg: {
        name: 'SV Elversberg',
        logo: '2bundesliga/Elversberg.png',
      },
      GreutherFurth: {
        name: 'SpVgg Greuther Fürth',
        logo: '2bundesliga/GreutherFurth.png',
      },
      Hambourg: {
        name: 'Hamburger SV',
        logo: '2bundesliga/Hambourg.png',
      },
      Hanovre: {
        name: 'Hannover 96',
        logo: '2bundesliga/Hanovre.png',
      },
      Hertha: {
        name: 'Hertha BSC',
        logo: '2bundesliga/Hertha.png',
      },
      Kaiserslautern: {
        name: 'FC Kaiserslautern',
        logo: '2bundesliga/Kaiserslautern.png',
      },
      Karlsruhe: {
        name: 'Karlsruher SC',
        logo: '2bundesliga/Karlsruhe.png',
      },
      Kiel: {
        name: 'Holstein Kiel',
        logo: '2bundesliga/Kiel.png',
      },
      Magdebourg: {
        name: 'FC Magdeburg',
        logo: '2bundesliga/Magdebourg.png',
      },
      Nuremberg: {
        name: 'FC Nürnberg',
        logo: '2bundesliga/Nuremberg.png',
      },
      Paderborn: {
        name: 'SC Paderborn 07',
        logo: '2bundesliga/Paderborn.png',
      },
      Osnabruck: {
        name: 'VfL Osnabrück',
        logo: '2bundesliga/Osnabruck.png',
      },
      Rostock: {
        name: 'F.C. Hansa Rostock',
        logo: '2bundesliga/Rostock.png',
      },
      SanktPauli: {
        name: 'FC St. Pauli',
        logo: '2bundesliga/SanktPauli.png',
      },
      Schalke04: {
        name: 'FC Schalke 04',
        logo: '2bundesliga/Schalke04.png',
      },
      Wiesbaden: {
        name: 'SV Wehen Wiesbaden',
        logo: '2bundesliga/Wiesbaden.png',
      },
    },
  },
};
