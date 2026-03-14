let portfolio = [
  { id: 1, name: 'Tech Stocks', allocation: 40, value: 50000 },
  { id: 2, name: 'Bonds', allocation: 30, value: 37500 },
  { id: 3, name: 'Real Estate', allocation: 30, value: 37500 }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.status(200).json({
      items: portfolio,
      summary: {
        totalValue: portfolio.reduce((sum, item) => sum + item.value, 0),
        itemCount: portfolio.length
      }
    });
  }

  if (req.method === 'POST') {
    const newItem = { id: portfolio.length + 1, ...req.body };
    portfolio.push(newItem);
    return res.status(201).json(newItem);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}