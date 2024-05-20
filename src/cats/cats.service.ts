import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

export interface Cat {
    id: number;
    name: string;
    age: number;
    breed: string;
}

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    private idCounter = 1;

    create(catDto: CreateCatDto): Cat {
        const cat = { id: this.idCounter++, ...catDto };
        this.cats.push(cat);
        return cat;
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: number): Cat {
        return this.cats.find(cat => cat.id === id);
    }

    update(id: number, updateCatDto: Partial<CreateCatDto>): Cat {
        const catIndex = this.cats.findIndex(cat => cat.id === id);
        if (catIndex >= 0) {
            this.cats[catIndex] = { ...this.cats[catIndex], ...updateCatDto };
            return this.cats[catIndex];
        }
    }

    remove(id: number): void {
        const catIndex = this.cats.findIndex(cat => cat.id === id);
        if (catIndex >= 0) {
            this.cats.splice(catIndex, 1);
        }
    }
}
