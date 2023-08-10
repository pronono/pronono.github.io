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

const teams = document.querySelector('.teams');
const rankingTable = document.querySelector('#rankingTable');

function changeLeague(league) {
  teams.innerHTML = '';
  rankingTable.innerHTML =
    '<tbody><tr><td>...</td><td>...</td><td>...</td></tr></tbody>';

  if (league === 'noLeague') {
    teams.innerHTML = 'Select a League';
    return;
  }

  for (const [key, value] of Object.entries(leagues[league])) {
    const team = document.createElement('div');
    team.setAttribute('id', key);
    team.setAttribute('class', 'team');
    team.setAttribute('draggable', true);
    team.setAttribute('ondragstart', 'drag(event)');

    const img = document.createElement('img');
    img.setAttribute('src', `leagues/${value.logo}`);

    const text = document.createElement('span');
    text.innerHTML = value.name;

    team.appendChild(img);
    team.appendChild(text);
    teams.appendChild(team);
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  let target = ev.target;
  if (ev.target.tagName !== 'DIV') {
    target = ev.target.parentNode;
  }
  ev.dataTransfer.setData('name', target.id);
}

function drop(ev) {
  const team = ev.dataTransfer.getData('name');
  addTeamToRanking(team);
}

const rankingTableBody = document.querySelector('#rankingTable tbody');

function addTeamToRanking(e) {
  if (document.querySelector('#rankingTable td').innerHTML === '...') {
    rankingTable.innerHTML = '';
  }

  document.querySelector(`[id="${e}"]`).remove();

  const team = leagues[leagueSelection.value][e];

  const tr = document.createElement('tr');

  const position = document.createElement('td');
  position.innerHTML = document.querySelectorAll('#rankingTable tr').length + 1;

  const logo = document.createElement('td');
  const img = document.createElement('img');
  img.setAttribute('src', team.logo);
  logo.appendChild(img);

  const name = document.createElement('td');
  name.innerHTML = team.name;

  tr.appendChild(position);
  tr.appendChild(logo);
  tr.appendChild(name);

  rankingTable.appendChild(tr);
}
