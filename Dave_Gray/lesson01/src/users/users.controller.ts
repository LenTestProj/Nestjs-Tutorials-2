import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() //get /users or /users?role=value 
    findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN"){
        return role?{"role":role}:[]
    }

    @Get("interns") //GET /users/interns
    findAllInterns(){
        return []
    }

    @Get(":id")  //GEt /users/:id
    findOne(@Param("id") id: string){
        return {id}
    }

    @Post() //POST /users
    create(@Body() user:{}){
        return user;
    }

    @Patch(":id") //PATCH /users
    update(@Param("id") id:string, @Body() userUpdate:{}){
        return userUpdate;
    }

    @Delete(":id") //PATCH /users
    delete(@Param("id") id:string){
        return {id};
    }

}
