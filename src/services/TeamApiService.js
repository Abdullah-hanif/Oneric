import { BASE_URL } from "../common/BaseUrl";

class TeamApiService {
  static getMyTeams = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/teams?userId=${userId}`);
      const parsedResponse = await response.json();

      if (parsedResponse?.data?.length !== 0) {
        return {
          message: parsedResponse?.message || "Teams fetched successfully",
          data: parsedResponse,
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      } else {
        return {
          message: "Teams Not Available",
          data: [],
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      }
    } catch (error) {
      return {
        message: "Teams fetching failed",
        data: [],
        error: true,
        success: false,
        errorDetails: JSON.stringify(error),
      };
    }
  };

  static createTeam = async (players, userId, matchId, name) => {
    try {
      const raw = JSON.stringify({ players, userId, matchId, name });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(`${BASE_URL}/teams`, requestOptions);

      const parsedResponse = await response.json();

      if (parsedResponse?.success) {
        return {
          message: parsedResponse?.message || "Teams fetched successfully",
          data: parsedResponse?.createdData || [],
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      } else {
        return {
          message: "Teams fetching failed",
          data: [],
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      }
    } catch (error) {
      return {
        message: "Teams fetching failed",
        data: [],
        error: true,
        success: false,
        errorDetails: JSON.stringify(error),
      };
    }
  };

  static updateTeam = async (teamId, players, name) => {
    try {
      const raw = JSON.stringify({ teamId, players, name });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(`${BASE_URL}/teams`, requestOptions);

      const parsedResponse = await response.json();

      if (parsedResponse?.success) {
        return {
          message: parsedResponse?.message || "Teams updated successfully",
          data: { teamId, players, name } || [],
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      } else {
        return {
          message: "Teams updated successfully",
          data: [],
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      }
    } catch (error) {
      return {
        message: "Teams updation failed",
        data: [],
        error: true,
        success: false,
        errorDetails: JSON.stringify(error),
      };
    }
  };
}

export default TeamApiService;
