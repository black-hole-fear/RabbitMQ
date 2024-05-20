import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cat, CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly service: CatsService) {}

    @Post()
    create(@Body() createCatDto: CreateCatDto): Cat {
        return this.service.create(createCatDto);
    }

    @Get()
    findAll(): Cat[] {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Cat {
        return this.service.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: Partial<CreateCatDto>): Cat {
        return this.service.update(+id, updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): void {
        this.service.remove(+id);
    }
}
