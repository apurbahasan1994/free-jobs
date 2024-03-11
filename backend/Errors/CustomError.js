import { StatusCodes } from "http-status-codes";

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends HttpError {
  constructor(message = "Bad request") {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized") {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export class ForbiddenError extends HttpError {
  constructor(message = "Forbidden") {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = "Not found") {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export class MethodNotAllowedError extends HttpError {
  constructor(message = "Method not allowed") {
    super(message, StatusCodes.METHOD_NOT_ALLOWED);
  }
}

export class ConflictError extends HttpError {
  constructor(message = "Conflict") {
    super(message, StatusCodes.CONFLICT);
  }
}

export class InternalServerError extends HttpError {
  constructor(message = "Internal server error") {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export class NotImplementedError extends HttpError {
  constructor(message = "Not implemented") {
    super(message, StatusCodes.NOT_IMPLEMENTED);
  }
}
