const leagueSelection = document.getElementById('leagueSelection');
let currentLeague = 'noLeague';

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

const legendsDiv = document.getElementById('legends');
const teamsDiv = document.getElementById('teams');
const ranking = document.getElementById('ranking');
const rankingInfo = document.getElementById('rankingInfo');

function changeLeague(league) {
  currentLeague = league;

  legendsDiv.innerHTML = '';
  teamsDiv.innerHTML = '';
  $('#ranking li').remove();
  showRankingInfo();

  if ($('#teams').hasClass('ui-sortable')) {
    $('#teams, #ranking').sortable('destroy');
  }

  if (league === 'noLeague') {
    teamsDiv.innerHTML = 'Select a League';
    return;
  }

  createTeams(leagues[league]['teams']);
  createLegend(leagues[league]['legends']);
}

function createTeams(teams) {
  for (const [key, value] of Object.entries(teams)) {
    const team = document.createElement('li');
    team.setAttribute('id', key);
    team.setAttribute('class', 'team');

    const img = document.createElement('img');
    img.setAttribute('src', `leagues/logo/${value.logo}`);

    const text = document.createElement('span');
    text.innerHTML = value.name;

    team.appendChild(img);
    team.appendChild(text);
    teamsDiv.appendChild(team);
  }

  createSortable();
}

function createLegend(legends) {
  for (const [key, value] of Object.entries(legends)) {
    const legend = document.createElement('li');
    legend.setAttribute('class', `legend-${value.color}`);
    legend.innerHTML = key;

    legendsDiv.appendChild(legend);
  }
}

function createSortable() {
  $('#teams, #ranking').sortable({
    connectWith: '.connectedSortable',
    items: 'li',
    update: function () {
      showRankingInfo();
      updateColor();
    },
  });
}

$('#ranking').on('click', 'li', function (event) {
  $(event.target).closest('li').detach().appendTo('#teams');
  showRankingInfo();
  updateColor();
});

$('#teams').on('click', 'li', function (event) {
  $(event.target).closest('li').detach().appendTo('#ranking');
  showRankingInfo();
  updateColor();
});

function showRankingInfo() {
  if ($('#ranking li').length) {
    rankingInfo.hidden = true;
  } else {
    rankingInfo.hidden = false;
  }
}

function updateColor() {
  const legends = leagues[currentLeague]['legends'];

  $(`#ranking li`).removeClass(function (index, className) {
    return (className.match(/(^|\s)legend-\S+/g) || []).join(' ');
  });

  for (const [key, value] of Object.entries(legends)) {
    value.position.forEach((element) => {
      $(`#ranking li:nth-child(${element + 1})`).addClass(
        `legend-${value.color}`
      );
    });
  }
}
