import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/DataMocked";

/* MockedService class provides methods to fetch and filter data based on user actions.    **
 **                                                                                         **
 ** Service imports four sets of data from DataMocked:                                      **
 ** - USER_MAIN_DATA: Contains main user information.                                       **
 ** - USER_ACTIVITY: Contains user activity data.                                           **
 ** - USER_AVERAGE_SESSIONS: Contains average session data for users.                       **
 ** - USER_PERFORMANCE: Contains user performance metrics.                                  **
 **                                                                                         **
 ** Class uses a dataMap object to map action types to corresponding data sets.             **
 ** filterData method is used to filter appropriate data set based on user ID and key.      **
 **                                                                                         **
 ** Main method, getData, determines which data set to use based on action provided,        **
 ** filters data, and then logs result in a structured format in console.                   */

class MockedService {
    
  // Map to associate action types with their corresponding data sets.
  dataMap = {
    activity: USER_ACTIVITY,
    "average-sessions": USER_AVERAGE_SESSIONS,
    performance: USER_PERFORMANCE,
    default: USER_MAIN_DATA,
  };

  filterData(data, id, key) {
    let filteredData = data.filter((item) => item[key].toString() === id);
    return filteredData[0];
  }

  async getData(id, action) {
    let dataKey = action in this.dataMap ? action : "default";
    let key = dataKey === "default" ? "id" : "userId";

    let result = this.filterData(this.dataMap[dataKey], id, key);

    // Structured display in the console
    console.table(result);

    return result;
  }
}

export default MockedService;
