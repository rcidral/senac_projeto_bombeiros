import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { QuizQuestion } from "./QuizQuestion"
import { ResponseQuestion } from "./ResponseQuestion"

@Entity('quiz_response')
export class QuizResponse {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255})
    response: string

    @ManyToOne(() => QuizQuestion, quizQuestion => quizQuestion.quiz_response_id)
    @JoinColumn({ name: 'quiz_question_id' })
    quiz_question_id: QuizQuestion

    @OneToMany(() => ResponseQuestion, responseQuestion => responseQuestion.quiz_response_id)
    response_question_id: ResponseQuestion[]

}