import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private imageService: ImageService) {}
  @Get()
  scanPage() {
    return this.imageService.scan();
  }
}
