let roadmap = [
  { id: 1, title: 'Learn basics of investing', status: 'completed', priority: 'high' },
  { id: 2, title: 'Open brokerage account', status: 'in-progress', priority: 'high' },
  { id: 3, title: 'Build emergency fund', status: 'pending', priority: 'medium' }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') {
    return res.status(200).json(roadmap);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}