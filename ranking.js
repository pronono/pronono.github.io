const leagueSelection = document.getElementById('leagueSelection');

for (const [key, value] of Object.entries(leagues)) {
  const option = document.createElement('option');
  option.setAttribute('value', key);
  option.innerHTML = key;
  leagueSelection.appendChild(option);
}

const rightCol = document.querySelector('.rightCol');

rightCol.addEventListener('change', (event) => {
  if (event.target.tagName === 'SELECT') {
    changeLeague(event.target.value);
  }
});

const teams = document.querySelector('#teams');
const ranking = document.querySelector('#ranking');
const rankingInfo = document.getElementById('rankingInfo');

function changeLeague(league) {
  teams.innerHTML = '';
  $('#ranking li').remove();
  showRankingInfo();

  if ($('#teams').hasClass('ui-sortable')) {
    $('#teams, #ranking').sortable('destroy');
  }

  if (league === 'noLeague') {
    teams.innerHTML = 'Select a League';
    return;
  }

  createTeams(leagues[league]);
}

function createTeams(league) {
  for (const [key, value] of Object.entries(league)) {
    const team = document.createElement('li');
    team.setAttribute('id', key);
    team.setAttribute('class', 'team');

    const img = document.createElement('img');
    img.setAttribute('src', `leagues/logo/${value.logo}`);

    const text = document.createElement('span');
    text.innerHTML = value.name;

    team.appendChild(img);
    team.appendChild(text);
    teams.appendChild(team);
  }

  createSortable();
}

function createSortable() {
  $('#teams, #ranking').sortable({
    connectWith: '.connectedSortable',
    items: 'li',
    update: function () {
      showRankingInfo();
    },
  });
}

$('#ranking').on('click', 'li', function (event) {
  $(event.target).closest('li').detach().appendTo('#teams');
  showRankingInfo();
});

$('#teams').on('click', 'li', function (event) {
  $(event.target).closest('li').detach().appendTo('#ranking');
  showRankingInfo();
});

function showRankingInfo() {
  if ($('#ranking li').length) {
    rankingInfo.hidden = true;
  } else {
    rankingInfo.hidden = false;
  }
}
