import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { Quiz } from "./Quiz"
import { QuizResponse } from "./QuizResponse"
import { ResponseQuestion } from "./ResponseQuestion"

@Entity('quiz_question')
export class QuizQuestion {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255})
    question: string

    @Column()
    has_description: boolean

    @Column()
    has_response: boolean

    @ManyToOne(() => Quiz, quiz => quiz.organization_id)
    @JoinColumn({ name: 'quiz_id' })
    quiz_id: Quiz

    @OneToMany(() => QuizResponse, quizResponse => quizResponse.quiz_question_id)
    quiz_response_id: QuizResponse[]

    @OneToMany(() => ResponseQuestion, responseQuestion => responseQuestion.quiz_question_id)
    response_question_id: ResponseQuestion[]
}