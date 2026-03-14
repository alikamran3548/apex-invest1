// In-memory storage (resets on each cold start - no database)
let entries = [
  { id: 1, title: 'Sample Entry 1', content: 'This is a sample entry', createdAt: new Date().toISOString() },
  { id: 2, title: 'Sample Entry 2', content: 'Another sample entry', createdAt: new Date().toISOString() }
];

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(entries);
  }

  if (req.method === 'POST') {
    const newEntry = {
      id: entries.length + 1,
      ...req.body,
      createdAt: new Date().toISOString()
    };
    entries.push(newEntry);
    return res.status(201).json(newEntry);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}