import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { Collections } from 'src/shared/enums/collection.enum';
import { UserRepository } from './repository/user.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema, collection : Collections.USER_COLLECTION }])],
    providers : [UserRepository],
    exports : [UserRepository]
})
export class DomainModule {}
