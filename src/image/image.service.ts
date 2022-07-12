import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';

@Injectable()
export class ImageService {
  constructor(private readonly crawler: NestCrawlerService) {}

  public async scan(): Promise<any> {
    const data: any = await this.crawler.fetch({
      target:
        'https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression',
      fetch: {
        info: {
          selector: '#mw-content-text > div.mw-parser-output > table > tbody ',
        },
      },
    });

    const str: string[] = data.info.split('\n\n');
    const numbers = str
      .filter((s) => {
        s = s.trim().slice(0, 5);
        if (Number(s)) {
          return s;
        }
      })
      .map((n) => parseFloat(n));

    return numbers;
  }
}
