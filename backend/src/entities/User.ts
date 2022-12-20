import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Organization } from "./Organization"

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255})
    name: string

    @Column({ type: 'varchar', length: 255})
    email: string

    @Column({ type: 'varchar', length: 255})
    password: string

    @Column({ type: 'varchar', length: 255})
    abvesc: string

    @Column({ type: 'varchar', length: 11})
    registration: string

    @Column({ type: 'varchar', length: 20})
    general_registration: string

    @Column()
    birthday: Date

    @Column()
    blood_type: number

    @ManyToOne(() => Organization, organizaton => organizaton.user_id)
    @JoinColumn({ name: 'organization_id' })
    organization_id: Organization
    
}