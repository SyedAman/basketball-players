/**
 * An action creator that creates an action which adds players to the roster.
 * @method hirePlayer
 * @param  {Object}   player - An available NBA player from free agents.
 * @return {Object} The action.
 */
export function hirePlayer(player) {
  // create the action
  // remove player from free agents and append it to roster array
  console.log(`${player} has been hired to your franchise!`)
  return {
    type: 'HIRE_PLAYER',
    payload: player
  }
}
