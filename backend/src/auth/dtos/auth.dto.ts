import { IsNotEmpty, IsString, Matches } from 'class-validator';
import {
  VALID_EMAIL_MSG,
  VALID_NAME_MSG,
  VALID_PASSWORD_MSG,
} from 'src/helpers/resource_en';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z ]+$/, {
    message: VALID_NAME_MSG,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: VALID_EMAIL_MSG,
  })
  emailAddress: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: VALID_PASSWORD_MSG,
  })
  password: string;
}

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: VALID_EMAIL_MSG,
  })
  emailAddress: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: VALID_PASSWORD_MSG,
  })
  password: string;
}
