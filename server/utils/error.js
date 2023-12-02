exports.errorHandler = (code = 500, msg = "Something Went Wrong") => {
    const error = new Error();
    error.statusCode = code;
    error.message = msg;

    return error;
}