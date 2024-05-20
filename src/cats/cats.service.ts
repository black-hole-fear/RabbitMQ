import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './schema/cat.schema';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}

    async create(catDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(catDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }

    async findOne(id: string): Promise<Cat> {
        return this.catModel.findById(id).exec();
    }

    async update(id: string, updateCatDto: Partial<CreateCatDto>): Promise<Cat> {
        return this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true }).exec();
    }

    async remove(id: number): Promise<void | Cat> {
        return this.catModel.findByIdAndDelete(id).exec();
    }
}
