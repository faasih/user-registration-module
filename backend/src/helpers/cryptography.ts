import * as CryptoJS from 'crypto-js';
import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENCRYPTION_KEY } from '../helpers/constants';

@Injectable()
export class Encryption {
  private logger: Logger;

  constructor(private readonly configService: ConfigService) {
    this.logger = new Logger(Encryption.name);
  }

  encrypt(text: any): string {
    try {
      if (text) {
        let key: any = this.configService.get<string>(ENCRYPTION_KEY);
        key = CryptoJS.enc.Utf16LE.parse(key);
        key = CryptoJS.MD5(key);
        key.words.push(key.words[0], key.words[1]);
        const options = { mode: CryptoJS.mode.ECB };
        const textWordArray = CryptoJS.enc.Utf16LE.parse(text);
        const encrypted = CryptoJS.TripleDES.encrypt(
          textWordArray,
          key,
          options,
        );
        const base64String: string = encrypted.toString();
        return base64String;
      }

      return '';
    } catch (ex) {
      this.logger.error('encrypt - Error Occurred: ', ex);
      throw new InternalServerErrorException();
    }
  }

  decrypt(text: string): string {
    try {
      if (text) {
        let key: any = this.configService.get<string>(ENCRYPTION_KEY);
        key = CryptoJS.enc.Utf16LE.parse(key);
        key = CryptoJS.MD5(key);
        key.words.push(key.words[0], key.words[1]);
        var options = { mode: CryptoJS.mode.ECB };
        var decrypted = CryptoJS.TripleDES.decrypt(
          {
            ciphertext: CryptoJS.enc.Base64.parse(text),
          },
          key,
          options,
        );
        const result: string = decrypted.toString(CryptoJS.enc.Utf16LE);
        return result;
      }

      return '';
    } catch (ex) {
      this.logger.error('decrypt - Error Occurred: ', ex);
      throw new InternalServerErrorException();
    }
  }
}
