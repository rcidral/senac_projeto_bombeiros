import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Organization } from "./Organization"
import { Response } from "./Response"

@Entity('quiz')
export class Quiz {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255})
    nome: string

    @ManyToOne(() => Organization, organizaton => organizaton.quiz_id)
    @JoinColumn({ name: 'organization_id' }) 
    organization_id: Organization

    @OneToMany(() => Response, response => response.quiz_id)
    response_id: Response[]

}