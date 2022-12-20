import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Response } from "./Response"
import { Unity } from "./Unity"

@Entity('vehicle')
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255})
    code: string

    @Column({ type: 'varchar', length: 255})
    category: string

    @Column({ type: 'varchar', length: 255})
    chassis: string

    @Column({ type: 'varchar', length: 4})
    year: string

    @Column({ type: 'varchar', length: 10})
    license: string

    @Column()
    acquisition: Date

    @ManyToOne(() => Unity, unity => unity.vehicle_id)
    @JoinColumn({ name: 'unity_id' })
    unity_id: Unity

    @OneToMany(() => Response, response => response.vehicle_id)
    response_id: Response[]
}