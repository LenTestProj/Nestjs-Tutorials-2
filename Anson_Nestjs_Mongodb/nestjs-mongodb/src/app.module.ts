import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [ 
    ConfigModule.forRoot({
        isGlobal:true,
    }), 
    // MongooseModule.forRoot(process.env.MONGO_URI)
    MongooseModule.forRootAsync({
        inject:[ConfigService],
        useFactory:(config:ConfigService) => ({
            uri: config.get("MONGO_URI"),
            connectionFactory:(connection)=>{
                console.log("Mongodb connected");
                return connection
            }
        }),
    }),
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
