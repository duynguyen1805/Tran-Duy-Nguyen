"use strict";
import httpStatusCode from "./httpStatusCode";

const { StatusCodes, ReasonPhrases } = httpStatusCode;

class ErrorResponse extends Error {
  status?: number;
  // now?: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    // this.now = Date.now();

    Error.captureStackTrace(this, this.constructor);
  }
}

class MultipleChoices extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.MULTIPLE_CHOICES,
    status: number = StatusCodes.MULTIPLE_CHOICES
  ) {
    super(message, status);
  }
}

class MovedPermanently extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.MOVED_PERMANENTLY,
    status: number = StatusCodes.MOVED_PERMANENTLY
  ) {
    super(message, status);
  }
}

class SeeOther extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.SEE_OTHER,
    status: number = StatusCodes.SEE_OTHER
  ) {
    super(message, status);
  }
}

class NotModified extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.NOT_MODIFIED,
    status: number = StatusCodes.NOT_MODIFIED
  ) {
    super(message, status);
  }
}

class UseProxy extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.USE_PROXY,
    status: number = StatusCodes.USE_PROXY
  ) {
    super(message, status);
  }
}

class TemporaryRedirect extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.TEMPORARY_REDIRECT,
    status: number = StatusCodes.TEMPORARY_REDIRECT
  ) {
    super(message, status);
  }
}

class PermanentRedirect extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.PERMANENT_REDIRECT,
    status: number = StatusCodes.PERMANENT_REDIRECT
  ) {
    super(message, status);
  }
}

class BadRequestError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.BAD_REQUEST,
    status: number = StatusCodes.BAD_REQUEST
  ) {
    super(message, status);
  }
}

class UnauthorizedError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.UNAUTHORIZED,
    status: number = StatusCodes.UNAUTHORIZED
  ) {
    super(message, status);
  }
}

class PaymentRequiredError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.PAYMENT_REQUIRED,
    status: number = StatusCodes.PAYMENT_REQUIRED
  ) {
    super(message, status);
  }
}

class ForbiddenError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.FORBIDDEN,
    status: number = StatusCodes.FORBIDDEN
  ) {
    super(message, status);
  }
}

class NotFoundError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.NOT_FOUND,
    status: number = StatusCodes.NOT_FOUND
  ) {
    super(message, status);
  }
}

class MethodNotAllowedError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.METHOD_NOT_ALLOWED,
    status: number = StatusCodes.METHOD_NOT_ALLOWED
  ) {
    super(message, status);
  }
}

class NotAcceptableError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.NOT_ACCEPTABLE,
    status: number = StatusCodes.NOT_ACCEPTABLE
  ) {
    super(message, status);
  }
}

class ProxyAuthenticationRequiredError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.PROXY_AUTHENTICATION_REQUIRED,
    status: number = StatusCodes.PROXY_AUTHENTICATION_REQUIRED
  ) {
    super(message, status);
  }
}

class RequestTimeoutError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.REQUEST_TIMEOUT,
    status: number = StatusCodes.REQUEST_TIMEOUT
  ) {
    super(message, status);
  }
}

class ConflictError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.CONFLICT,
    status: number = StatusCodes.CONFLICT
  ) {
    super(message, status);
  }
}

class GoneError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.GONE,
    status: number = StatusCodes.GONE
  ) {
    super(message, status);
  }
}

class LengthRequiredError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.LENGTH_REQUIRED,
    status: number = StatusCodes.LENGTH_REQUIRED
  ) {
    super(message, status);
  }
}

class PreconditionFailedError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.PRECONDITION_FAILED,
    status: number = StatusCodes.PRECONDITION_FAILED
  ) {
    super(message, status);
  }
}

class UnsupportedMediaTypeError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.UNSUPPORTED_MEDIA_TYPE,
    status: number = StatusCodes.UNSUPPORTED_MEDIA_TYPE
  ) {
    super(message, status);
  }
}

class ExpectationFailedError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.EXPECTATION_FAILED,
    status: number = StatusCodes.EXPECTATION_FAILED
  ) {
    super(message, status);
  }
}

class UnprocessableEntityError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.UNPROCESSABLE_ENTITY,
    status: number = StatusCodes.UNPROCESSABLE_ENTITY
  ) {
    super(message, status);
  }
}

class LockedError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.LOCKED,
    status: number = StatusCodes.LOCKED
  ) {
    super(message, status);
  }
}

class FailedDependencyError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.FAILED_DEPENDENCY,
    status: number = StatusCodes.FAILED_DEPENDENCY
  ) {
    super(message, status);
  }
}

class PreconditionRequiredError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.PRECONDITION_REQUIRED,
    status: number = StatusCodes.PRECONDITION_REQUIRED
  ) {
    super(message, status);
  }
}

class TooManyRequestsError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.TOO_MANY_REQUESTS,
    status: number = StatusCodes.TOO_MANY_REQUESTS
  ) {
    super(message, status);
  }
}

class RequestHeaderFieldsTooLargeError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.REQUEST_HEADER_FIELDS_TOO_LARGE,
    status: number = StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE
  ) {
    super(message, status);
  }
}

class InternalServerError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.INTERNAL_SERVER_ERROR,
    status: number = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message, status);
  }
}

class NotImplementedError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.NOT_IMPLEMENTED,
    status: number = StatusCodes.NOT_IMPLEMENTED
  ) {
    super(message, status);
  }
}

class BadGatewayError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.BAD_GATEWAY,
    status: number = StatusCodes.BAD_GATEWAY
  ) {
    super(message, status);
  }
}

class ServiceUnavailableError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.SERVICE_UNAVAILABLE,
    status: number = StatusCodes.SERVICE_UNAVAILABLE
  ) {
    super(message, status);
  }
}

class GatewayTimeoutError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.GATEWAY_TIMEOUT,
    status: number = StatusCodes.GATEWAY_TIMEOUT
  ) {
    super(message, status);
  }
}

class HttpVersionNotSupportedError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.HTTP_VERSION_NOT_SUPPORTED,
    status: number = StatusCodes.HTTP_VERSION_NOT_SUPPORTED
  ) {
    super(message, status);
  }
}

class InsufficientStorageError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.INSUFFICIENT_STORAGE,
    status: number = StatusCodes.INSUFFICIENT_STORAGE
  ) {
    super(message, status);
  }
}

class NetworkAuthenticationRequiredError extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.NETWORK_AUTHENTICATION_REQUIRED,
    status: number = StatusCodes.NETWORK_AUTHENTICATION_REQUIRED
  ) {
    super(message, status);
  }
}

class RedisErrorResponse extends ErrorResponse {
  constructor(
    message: string = ReasonPhrases.INTERNAL_SERVER_ERROR,
    status: number = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message, status);
  }
}

export {
  ErrorResponse,
  MultipleChoices,
  MovedPermanently,
  SeeOther,
  NotModified,
  UseProxy,
  TemporaryRedirect,
  PermanentRedirect,
  BadRequestError,
  UnauthorizedError,
  PaymentRequiredError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  NotAcceptableError,
  ProxyAuthenticationRequiredError,
  RequestTimeoutError,
  ConflictError,
  GoneError,
  LengthRequiredError,
  PreconditionFailedError,
  UnsupportedMediaTypeError,
  ExpectationFailedError,
  UnprocessableEntityError,
  LockedError,
  FailedDependencyError,
  PreconditionRequiredError,
  TooManyRequestsError,
  RequestHeaderFieldsTooLargeError,
  InternalServerError,
  NotImplementedError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
  HttpVersionNotSupportedError,
  InsufficientStorageError,
  NetworkAuthenticationRequiredError,
  RedisErrorResponse,
};
