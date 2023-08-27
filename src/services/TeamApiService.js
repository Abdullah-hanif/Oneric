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
        message: "Something went wrong while fetching teams",
        data: [],
        error: true,
        success: false,
        errorDetails: JSON.stringify(error),
      };
    }
  };

  static createTeam = async (
    players,
    userId,
    matchId,
    name,
    captain,
    viceCaptian
  ) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        players: players,
        userId: userId,
        name: name,
        matchId: matchId,
        captain: captain,
        viceCaptian: viceCaptian,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(`${BASE_URL}/teams`, requestOptions);
      const parsedResponse = await response.json();

      if (parsedResponse?.success) {
        return {
          message: parsedResponse?.message || "Teams created successfully",
          data: parsedResponse?.createdData || [],
          error: true,
          success: true,
          errorDetails: JSON.stringify(parsedResponse),
        };
      } else {
        return {
          message:
            "Something went wrong while creating a team (May the name already exists!)",
          data: [],
          error: true,
          success: false,
          errorDetails: JSON.stringify(parsedResponse),
        };
      }
    } catch (error) {
      return {
        message:
          "Something went wrong while creating a team (May the name already exists!)",
        data: [],
        error: true,
        success: false,
        errorDetails: JSON.stringify(error),
      };
    }
  };

  static updateTeam = async (teamId, players, name, captain, viceCaptian) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        players: players,
        userId: userId,
        name: name,
        matchId: matchId,
        captain: captain,
        viceCaptian: viceCaptian,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(`${BASE_URL}/teams/${teamId}`,requestOptions);
      const parsedResponse = await response.json();

      if (parsedResponse?.success) {
        return {
          message: parsedResponse?.message || "Teams updated successfully",
          data:
            {
              players: players,
              userId: userId,
              name: name,
              matchId: matchId,
              captain: captain,
              viceCaptian: viceCaptian,
            } || [],
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
