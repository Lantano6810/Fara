import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Param,
    ParseIntPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.usersService.updateUser(id, updateUserDto);
    }

    @Put(':id/password')
    updateUserPassword(
        @Param('id', ParseIntPipe) id: number,
        @Body() updatePasswordDto: UpdatePasswordDto
    ) {
        return this.usersService.updatePassword(
            id,
            updatePasswordDto.oldPassword,
            updatePasswordDto.newPassword
        );
    }

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }
}