const leagues = {
  'Ligue 1': {
    legends: {
      'UEFA Champions League': {
        color: 'blue',
        position: [1, 2, 3],
      },
      'UEFA Champions League Qualifiers': {
        color: 'green',
        position: [4],
      },
      'UEFA Europa League': {
        color: 'orange',
        position: [5],
      },
      'UEFA Conference League Play-offs': {
        color: 'orange-2',
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
  'Premiere League': {
    legends: {
      'UEFA Champions League': {
        color: 'blue',
        position: [1, 2, 3, 4],
      },
      'UEFA Europa League': {
        color: 'green',
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
        logo: 'premiereleague/Arsenal.png',
      },
      AstonVilla: {
        name: 'Aston Villa',
        logo: 'premiereleague/AstonVilla.png',
      },
      Bournemouth: {
        name: 'Bournemouth',
        logo: 'premiereleague/Bournemouth.png',
      },
      Brentford: {
        name: 'Brentford',
        logo: 'premiereleague/Brentford.png',
      },
      Brighton: {
        name: 'Brighton and Hove Albion',
        logo: 'premiereleague/Brighton.png',
      },
      Burnley: {
        name: 'Burnley',
        logo: 'premiereleague/Burnley.png',
      },
      Chelsea: {
        name: 'Chelsea',
        logo: 'premiereleague/Chelsea.png',
      },
      CrystalPalace: {
        name: 'Crystal Palace',
        logo: 'premiereleague/CrystalPalace.png',
      },
      Everton: {
        name: 'Everton',
        logo: 'premiereleague/Everton.png',
      },
      Fulham: {
        name: 'Fulham',
        logo: 'premiereleague/Fulham.png',
      },
      Liverpool: {
        name: 'Liverpool',
        logo: 'premiereleague/Liverpool.png',
      },
      Luton: {
        name: 'Luton Town',
        logo: 'premiereleague/Luton.png',
      },
      ManCity: {
        name: 'Manchester City',
        logo: 'premiereleague/ManCity.png',
      },
      ManUnited: {
        name: 'Manchester United',
        logo: 'premiereleague/ManUnited.png',
      },
      Newcastle: {
        name: 'Newcastle United',
        logo: 'premiereleague/Newcastle.png',
      },
      Nottingham: {
        name: 'Nottingham Forest',
        logo: 'premiereleague/Nottingham.png',
      },
      SheffUtd: {
        name: 'Sheffield United',
        logo: 'premiereleague/SheffUtd.png',
      },
      Tottenham: {
        name: 'Tottenham Hotspur',
        logo: 'premiereleague/Tottenham.png',
      },
      WestHam: {
        name: 'West Ham United',
        logo: 'premiereleague/WestHam.png',
      },
      Wolverhampton: {
        name: 'Wolverhampton Wanderers',
        logo: 'premiereleague/Wolverhampton.png',
      },
    },
  },
  'League Championship': {
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
        logo: 'leaguechampionship/Birmingham.png',
      },
      Blackburn: {
        name: 'Blackburn Rovers',
        logo: 'leaguechampionship/Blackburn.png',
      },
      BristolCity: {
        name: 'Bristol City',
        logo: 'leaguechampionship/BristolCity.png',
      },
      Cardiff: {
        name: 'Cardiff City',
        logo: 'leaguechampionship/Cardiff.png',
      },
      Coventry: {
        name: 'Coventry City',
        logo: 'leaguechampionship/Coventry.png',
      },
      Huddersfield: {
        name: 'Huddersfield Town',
        logo: 'leaguechampionship/Huddersfield.png',
      },
      Hull: {
        name: 'Hull City',
        logo: 'leaguechampionship/Hull.png',
      },
      Ipswich: {
        name: 'Ipswich Town',
        logo: 'leaguechampionship/Ipswich.png',
      },
      Leeds: {
        name: 'Leeds United',
        logo: 'leaguechampionship/Leeds.png',
      },
      Leicester: {
        name: 'Leicester City',
        logo: 'leaguechampionship/Leicester.png',
      },
      Middlesbrough: {
        name: 'Middlesbrough',
        logo: 'leaguechampionship/Middlesbrough.png',
      },
      Millwall: {
        name: 'Millwall',
        logo: 'leaguechampionship/Millwall.png',
      },
      Norwich: {
        name: 'Norwich City',
        logo: 'leaguechampionship/Norwich.png',
      },
      Plymouth: {
        name: 'Plymouth Argyle',
        logo: 'leaguechampionship/Plymouth.png',
      },
      Preston: {
        name: 'Preston North End',
        logo: 'leaguechampionship/Preston.png',
      },
      QPR: {
        name: 'Queens Park Rangers',
        logo: 'leaguechampionship/QPR.png',
      },
      Rotherham: {
        name: 'Rotherham United',
        logo: 'leaguechampionship/Rotherham.png',
      },
      SheffWed: {
        name: 'Sheffield Wednesday',
        logo: 'leaguechampionship/SheffWed.png',
      },
      Southampton: {
        name: 'Southampton',
        logo: 'leaguechampionship/Southampton.png',
      },
      Stoke: {
        name: 'Stoke City',
        logo: 'leaguechampionship/Stoke.png',
      },
      Sunderland: {
        name: 'Sunderland',
        logo: 'leaguechampionship/Sunderland.png',
      },
      Swansea: {
        name: 'Swansea City',
        logo: 'leaguechampionship/Swansea.png',
      },
      Watford: {
        name: 'Watford',
        logo: 'leaguechampionship/Watford.png',
      },
      WestBromwich: {
        name: 'West Bromwich Albion',
        logo: 'leaguechampionship/WestBromwich.png',
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
        color: 'green',
        position: [5],
      },
      'UEFA Conference League Qualifiers': {
        color: 'orange',
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
  'Liga Adelante': {
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
        logo: 'ligaadelante/Albacete.png',
      },
      Alcorcon: {
        name: 'Alcorcón',
        logo: 'ligaadelante/Alcorcon.png',
      },
      Amorebieta: {
        name: 'Amorebieta',
        logo: 'ligaadelante/Amorebieta.png',
      },
      Burgos: {
        name: 'Burgos',
        logo: 'ligaadelante/Burgos.png',
      },
      Carthagene: {
        name: 'Cartagena',
        logo: 'ligaadelante/Carthagene.png',
      },
      Eibar: {
        name: 'Eibar',
        logo: 'ligaadelante/Eibar.png',
      },
      Elche: {
        name: 'Elche',
        logo: 'ligaadelante/Elche.png',
      },
      Eldense: {
        name: 'Eldense',
        logo: 'ligaadelante/Eldense.png',
      },
      Espanyol: {
        name: 'Espanyol',
        logo: 'ligaadelante/Espanyol.png',
      },
      FCAndorra: {
        name: 'Futbol Club Andorra',
        logo: 'ligaadelante/FCAndorra.png',
      },
      Gijon: {
        name: 'Sporting Gijón',
        logo: 'ligaadelante/Gijon.png',
      },
      Huesca: {
        name: 'Huesca',
        logo: 'ligaadelante/Huesca.png',
      },
      Leganes: {
        name: 'Leganés',
        logo: 'ligaadelante/Leganes.png',
      },
      Levante: {
        name: 'Levante',
        logo: 'ligaadelante/Levante.png',
      },
      Mirandes: {
        name: 'Mirandés',
        logo: 'ligaadelante/Mirandes.png',
      },
      Oviedo: {
        name: 'Real Oviedo',
        logo: 'ligaadelante/Oviedo.png',
      },
      RacingFerrol: {
        name: 'Ferrol',
        logo: 'ligaadelante/RacingFerrol.png',
      },
      Santander: {
        name: 'Santander',
        logo: 'ligaadelante/Santander.png',
      },
      Saragosse: {
        name: 'Saragosse',
        logo: 'ligaadelante/Saragosse.png',
      },
      Tenerife: {
        name: 'Tenerife',
        logo: 'ligaadelante/Tenerife.png',
      },
      Valladolid: {
        name: 'Valladolid',
        logo: 'ligaadelante/Valladolid.png',
      },
      VillarrealII: {
        name: 'Villarreal Club de Fútbol B',
        logo: 'ligaadelante/VillarrealII.png',
      },
    },
  },
};
