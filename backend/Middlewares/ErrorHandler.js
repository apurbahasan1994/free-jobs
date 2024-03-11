import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleWare = (err,req,res,next)=>{
    const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = err.message || 'Something went wrong, Please try again later';
    res.status(statusCode).json({message:msg});
}

export default errorHandlerMiddleWare;