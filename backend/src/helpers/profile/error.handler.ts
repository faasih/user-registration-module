import { ErrorHandler } from '@automapper/core';
import { Logger } from '@nestjs/common';

export const globalErrorHandler: ErrorHandler = {
  handle(error) {
    new Logger('globalErrorHandler').error('globalErrorHandler: ', error);
  },
};
