import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_produtos"})
export class Produto {
    
    @PrimaryGeneratedColumn() 
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 200, nullable: false})
    nome: string;

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 2}) 
    @Column({type: "decimal", precision: 10, scale: 2})
    preco: number;

    @Column()
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE" 
    })
    categoria: Categoria;

}