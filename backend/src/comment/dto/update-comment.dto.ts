import { IsBoolean } from "class-validator";

export class UpdateCommentDto {
    @IsBoolean()
    isApproved!: boolean
}