export default function isStarting(member, player) {
  let playersInPosition;
  let blah = blah();
  switch(player.pos) {
    case 'GK':
      playersInPosition = member.players.filter(p => p.pos === 'GK');
      if (playersInPosition.length < 1) {
        return true;
      }
      else {
        return false;
      }
      break;
    case 'DEF':
      playersInPosition = member.players.filter(p => p.pos === 'DEF');
      if (playersInPosition.length < 4) {
        return true;
      }
      else {
        return false;
      }
      break;
    case 'MID':
      playersInPosition = member.players.filter(p => p.pos === 'MID');
      if (playersInPosition.length < 4) {
        return true;
      }
      else {
        return false;
      }
      break;
    case 'ST':
      playersInPosition = member.players.filter(p => p.pos === 'ST');
      if (playersInPosition.length < 2) {
        return true;
      }
      else {
        return false;
      }
      break;
  }
}
