export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    console.log('收到文字：', text);
    res.status(200).send('收到：' + text);
  } else {
    res.status(405).send('只接受 POST 方法');
  }
}
