var playlist = {
  Queen: "Fat Bottomed Girls",
  Juvenile: "Back That Azz Up",
  SirMixALot: "Baby Got Back",
  BellDivDaVoe: "Poison"
}
function updatePlaylist (object, key, value) {
  Object.assign({}, playlist, {key: 'value'})
}