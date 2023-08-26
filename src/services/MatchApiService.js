import { BASE_URL } from "../common/BaseUrl";

class MatchApiService {
  static getMatchById = async (id) => {
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

  static getMatchesByStatus = async (status) => {
    try {
      const response = await fetch(`${BASE_URL}/matches?status=${status}`);
      const parsedResponse = await response.json();

      if (parsedResponse?.success) {
        return {
          message: parsedResponse?.message || "Match fetched successfully",
          data: parsedResponse?.data || [],
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

export default MatchApiService;
