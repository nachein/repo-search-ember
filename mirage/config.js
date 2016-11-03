export default function() {

  this.get('/repos', () => {
    return {
      data: [{
          type: 'repo',
          id: 1,
          attributes: {
            name: 'Repo 1',
            url: 'http://www.google.com'
          }
        },
        {
          type: 'repo',
          id: 2,
          attributes: {
            name: 'Repo 2',
            url: 'http://www.google.com'
          }
        }]
    };
  });
}
