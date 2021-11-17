import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=300');

  if (!req.query.id) return res.status(404).end();

  const tetrio = await fetch(`https://ch.tetr.io/api/users/${req.query.id}`);
  console.log(`Outbound request to https://ch.tetr.io/api/users/${req.query.id}`);
  const tetrioJson = await tetrio.json();
  const success = tetrioJson.success;

  if (!success) return res.status(404).json(tetrioJson);
  return res.status(200).json( tetrioJson );
}
