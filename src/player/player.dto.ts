import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  validate,
} from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsNumber()
  @IsNotEmpty()
  teamId: number;

  @IsNumber()
  @IsNotEmpty()
  number: number;
}

export class UpdatePlayerDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  position?: string;

  @IsNumber()
  @IsOptional()
  teamId?: number;

  @IsNumber()
  @IsOptional()
  number?: number;
}

const createPlayerDto = new CreatePlayerDto();

validate(createPlayerDto).then((errors) => {
  if (errors.length > 0) {
    console.log('Validation failed. Errors:', errors);
  } else {
    console.log('Validation succeed');
  }
});

const updatePlayerDto = new UpdatePlayerDto();

validate(updatePlayerDto).then((errors) => {
  if (errors.length > 0) {
    console.log('validation failed. Errors:', errors);
  } else {
    console.log('Validation succeed');
  }
});
