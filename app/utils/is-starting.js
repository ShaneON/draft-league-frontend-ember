export default function isStarting(member) {
  switch(player.pos) {
    case 'GK':
      return _checkStartingStatus(member, 1, 'GK');
      break;
    case 'DEF':
      return _checkStartingStatus(member, 4, 'DEF');
      break;
    case 'MID':
      return _checkStartingStatus(member, 4, 'MID');
      break;
    case 'ST':
      return _checkStartingStatus(member, 2, 'ST');
      break;
  }
}

function checkStartingStatus(member, num, pos) {
  let playersInPosition = member.players.filter(p => p.pos === pos);
  if (playersInPosition.length <= num) {
    return true;
  }
  else {
    return false;
  }
}
