export const mapResponse = (response) => {
    return {
        message:response.data.message,
        body:response.data.body,
        status:response.status,
        severity:response.data.severity
    }
 
};

export const mapError = (error) => {
   return {
    message: error.response.data.message,
    body:error.response.data.body,
    status:error.response.status,
    severity:error.response.data.severity
   }
  };