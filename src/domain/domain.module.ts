import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { Collections } from 'src/shared/enums/collection.enum';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema, collection : Collections.USER_COLLECTION }])],
})
export class DomainModule {}
