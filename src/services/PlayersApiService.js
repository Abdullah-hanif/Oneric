import { BASE_URL } from "../common/BaseUrl";

class PlayersApiService {
  static getMatchPlayers = async (matchId) => {
    try {
      const response = await fetch(`${BASE_URL}/matches/${id}`);
      const parsedResponse = await response.json();

      if (parsedResponse) {
        return {
          message: parsedResponse?.message || "Match fetched successfully",
          data: parsedResponse,
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      } else {
        return {
          message: "Match fetching failed",
          data: [],
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      }
    } catch (error) {
      return {
        message: "Match fetching failed",
        data: [],
        error: true,
        success: false,
        errorDetails: JSON.stringify(error),
      };
    }
  };
}

export default PlayersApiService;
