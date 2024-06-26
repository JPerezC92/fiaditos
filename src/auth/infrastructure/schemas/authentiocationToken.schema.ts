import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const AuthTokenSchema = extendApi(
	z.object({
		accessToken: z.string().min(1).trim(),
		refreshToken: z.string().min(1).trim(),
	}),
	{
		title: 'AuthentiocationTokens',
		description: 'Authentiocation tokens for a user session.',
	},
);

export class AuthTokenDto extends createZodDto(AuthTokenSchema) {}
