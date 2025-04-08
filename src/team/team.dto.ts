import { IsOptional, IsString, length, validate } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;
}

export class UpdateTeamDto {
  @IsString()
  @IsOptional()
  name?: string;
}

const createTeamDto = new CreateTeamDto();

validate(createTeamDto).then((erros) => {
  if (length) {
    console.log('error validation', erros);
  } else {
    console.log('validation succes');
  }
});
const updateteamDto = new UpdateTeamDto();

validate(updateteamDto).then((errors) => {
  if (length) {
    console.log('error validation', errors);
  } else {
    console.log('validation succes');
  }
});
