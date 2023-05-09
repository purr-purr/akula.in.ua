import type { NextApiRequest, NextApiResponse } from 'next';

import { sendEmail } from '../../lib/email';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { userData } = req.body;

	await sendEmail({
		to: '666hesoyam@gmail.com',
		subject: 'Solo Dev',
		html: `
			<h2>Text: ${userData.text}</h2>
			<h2>Phone Number: ${userData.phone}</h2>
			<h2>Person Name:${userData.name}</h2>
		`,
	});

	return res.status(200).json({ message: 'Email sent successfully' });
}
