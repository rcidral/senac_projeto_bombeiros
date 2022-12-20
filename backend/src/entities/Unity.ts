import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Organization } from "./Organization"
import { Vehicle } from "./Vehicle"

@Entity('unity')
export class Unity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255})
    name: string

    @ManyToOne(() => Organization, organizaton => organizaton.unity_id)
    @JoinColumn({ name: 'organization_id' }) 
    organization_id: Organization

    @OneToMany(() => Vehicle, vehicle => vehicle.unity_id)
    vehicle_id : Vehicle[]
}