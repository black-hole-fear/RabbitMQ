import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
