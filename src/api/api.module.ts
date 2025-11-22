import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [V1Module, CommonModule]
})
export class ApiModule {}
