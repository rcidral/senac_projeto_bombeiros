import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Unity } from "./Unity"
import { Quiz } from "./Quiz"
import { User } from "./User"

@Entity('organization')
export class Organization {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255})
    nome: string

    @OneToMany(() => Unity, unity => unity.organization_id)
    unity_id: Unity[]

    @OneToMany(() => Quiz, quiz => quiz.organization_id)
    quiz_id: Quiz[]

    @OneToMany(() => User, user => user.organization_id)
    user_id: User[]
}