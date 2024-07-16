"use strict";

import { Response } from "express";
import httpStatusCode from "./httpStatusCode";

interface SuccessResponseOptions {
  message?: string;
  statusCode?: number;
  reasonStatusCode?: string;
  metadata?: Record<string, any> | null;
  option?: {};
}

class SuccessResponse {
  message: string;
  status: number;
  metadata: Record<string, any> | null;
  option?: {};

  constructor({
    message,
    statusCode = httpStatusCode.StatusCodes.OK,
    reasonStatusCode = httpStatusCode.ReasonPhrases.OK,
    metadata = {},
  }: SuccessResponseOptions) {
    this.message = message || reasonStatusCode;
    this.status = statusCode;
    this.metadata = metadata;
  }

  send(res: Response, header: Record<string, any> = {}): Response {
    return res.status(this.status).json(this);
  }
}

class OK extends SuccessResponse {
  constructor({ message, metadata }: SuccessResponseOptions) {
    super({ message, metadata });
  }
}

class Created extends SuccessResponse {
  option: Record<string, any>;

  constructor({
    message,
    statusCode = httpStatusCode.StatusCodes.CREATED,
    reasonStatusCode = httpStatusCode.ReasonPhrases.CREATED,
    metadata,
    option = {},
  }: SuccessResponseOptions) {
    super({ message, statusCode, reasonStatusCode, metadata });
    this.option = option;
  }
}

class NoContent extends SuccessResponse {
  constructor({
    message,
    statusCode = httpStatusCode.StatusCodes.NO_CONTENT,
    reasonStatusCode = httpStatusCode.ReasonPhrases.NO_CONTENT,
    metadata,
  }: SuccessResponseOptions) {
    super({ message, statusCode, reasonStatusCode, metadata });
  }
}

export { OK, Created, NoContent };
