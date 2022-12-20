import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Quiz } from "./Quiz"
import { ResponseQuestion } from "./ResponseQuestion"
import { Vehicle } from "./Vehicle"

@Entity('response')
export class Response {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Vehicle, vehicle => vehicle.response_id)
    @JoinColumn({ name: 'vehicle_id' })
    vehicle_id: Vehicle

    @ManyToOne(() => Quiz, quiz => quiz.response_id)
    @JoinColumn({ name: 'quiz_id' })
    quiz_id: Quiz

    @Column()
    date: Date

    @OneToMany(() => ResponseQuestion, responseQuestion => responseQuestion.response_id)
    response_question_id: ResponseQuestion[]
    
}