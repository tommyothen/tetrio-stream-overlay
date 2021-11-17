import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=300');

  if (!req.query.id) return res.status(404).end();

  const url = `https://ch.tetr.io/api/users/${req.query.id}`;
  if (url == "https://ch.tetr.io/api/users/undefined") return res.status(404).end();

  const tetrio = await fetch(url);
  console.log(`Outbound request to ${url}`);
  const tetrioJson = await tetrio.json();
  const success = tetrioJson.success;

  if (!success) return res.status(404).json(tetrioJson);
  return res.status(200).json({
    rating: tetrioJson.data.user.league.rating,
    rank: tetrioJson.data.user.league.rank,
    rd: tetrioJson.data.user.league.rd,
    glicko: tetrioJson.data.user.league.glicko,
    standing: tetrioJson.data.user.league.standing,
    standing_local: tetrioJson.data.user.league.standing_local,
    prev_rank: tetrioJson.data.user.league.prev_rank,
    next_rank: tetrioJson.data.user.league.next_rank,
    prev_at: tetrioJson.data.user.league.prev_at,
    next_at: tetrioJson.data.user.league.next_at,
  });
}
