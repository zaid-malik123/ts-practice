class ApiResponse {
    statusCode;
    data;
    success;
    message;
    constructor(statusCode, data, message) {
        this.statusCode = statusCode;
        this.data = data;
        this.success = true;
        this.message = message;
    }
}
export { ApiResponse };
//# sourceMappingURL=ApiResponse.js.map