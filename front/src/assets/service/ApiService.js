/* ApiFetch class provides an interface for interacting with User API.                          **
** It encapsulates details of HTTP communication and provides a method to fetch data.           **
**                                                                                              **
** Properties:                                                                                  **
** - dataUrl: Base URL for User API. All requests will be made to this URL.                     **
**                                                                                              **
** Methods:                                                                                     **
** - getData(id, action): An asynchronous method that performs a GET request to User API.       **
**   It takes a user ID and an action (which could be a sub-route or parameter) as parameters.  **
**  Method returns data associated with that user and action.                                   **
**   If an error occurs during request (e.g., a non-200 response), an exception is thrown.      **
**   If received data is invalid or missing, an exception is also thrown.                       **
**   All exceptions are logged to console and then re-thrown to be handled by caller.           **
**                                                                                              **
** Usage:                                                                                       **
** To use this class, create an instance and call getData method with appropriate parameters.   **
** Handle all exceptions at place where you call this method.                                   */

class ApiFetch {
    static dataUrl = `http://localhost:3000/user/`;
  
    async getData(id, action) {
      try {
        const response = await fetch(`${ApiFetch.dataUrl}${id}/${action}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (!data || !data.data) {
          throw new Error("Invalid data received from the server.");
        }
  
        return data.data;
      } catch (error) {
        console.error("An error occurred:", error);
        throw error; // Re-throw the error to allow the caller to handle it
      }
    }
  }
  
  export default ApiFetch;