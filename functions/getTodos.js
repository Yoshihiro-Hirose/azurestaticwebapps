exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify([
      {
        content: '米を買う',
        done: false
      },
      {
        content: '卵も買う',
        done: true
      },
      {
        content: '肉も買う',
        done: false
      }
    ])
  }
}
