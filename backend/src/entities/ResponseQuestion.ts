import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { QuizQuestion } from "./QuizQuestion"
import { QuizResponse } from "./QuizResponse"
import { Response } from "./Response"

@Entity('response_question')
export class ResponseQuestion {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Response, response => response.response_question_id)
    @JoinColumn({ name: 'response_id' })
    response_id: Response

    @ManyToOne(() => QuizQuestion, quizQuestion => quizQuestion.response_question_id)
    @JoinColumn({ name: 'quiz_question_id' })
    quiz_question_id: QuizQuestion

    @ManyToOne(() => QuizResponse, quizResponse => quizResponse.response_question_id)
    @JoinColumn({ name: 'quiz_response_id' })
    quiz_response_id: QuizResponse

    
}