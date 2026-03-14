let investors = [
  { id: 1, name: 'Warren Buffett', strategy: 'Value Investing' },
  { id: 2, name: 'Ray Dalio', strategy: 'All Weather Portfolio' }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.status(200).json(investors);
  }

  if (req.method === 'POST') {
    const newInvestor = { id: investors.length + 1, ...req.body };
    investors.push(newInvestor);
    return res.status(201).json(newInvestor);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}