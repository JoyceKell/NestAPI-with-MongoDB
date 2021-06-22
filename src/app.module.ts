import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose'



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://joyce:ieupxqw5@cluster0.hzfzl.mongodb.net/test')
    ,UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
