class PlayersApiService {
  static getPlayersByType = async (players, type) => {
    const tempPlayers = [];
    Object.values(players).forEach((item) => {
      item?.player?.roles?.forEach((role) => {
        if (role == type) {
          tempPlayers.push(item);
        }
      });
    });
    return tempPlayers;
  };
}

export default PlayersApiService;
