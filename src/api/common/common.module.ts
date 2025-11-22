import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { DomainModule } from 'src/domain/domain.module';
import { AuthModule } from 'src/auth/auth.module';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';

@Module({
  imports : [DomainModule, AuthModule],
  controllers: [LoginController, SignupController],
  providers: [LoginService, SignupService]
})
export class CommonModule {}
