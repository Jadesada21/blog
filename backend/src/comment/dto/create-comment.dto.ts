import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength } from "class-validator";

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    commentName!: string

    @IsString()
    @IsNotEmpty()
    @Matches(/^[ก-๙0-9\s]+$/, { message: 'ข้อความต้องเป็นภาษาไทยและ/หรือตัวเลขเท่านั้น' })
    @MaxLength(200)
    message!: string
}