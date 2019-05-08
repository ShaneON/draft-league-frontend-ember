export default function() {
  this.get('http://localhost:8080/members', () => {
    return [{ id: 1, name: 'Shane', teamName: 'Choi-FC-Choi'},
          { id: 2, name: 'Nez', teamName: 'Nuzh'}]
  });

  this.get('http://localhost:8080/members/:id', () => {
    return { id: 1, name: 'Shane', teamName: 'Choi-FC-Choi',
            players: [
              {
                id: 1,
                firstName: 'Diego',
                lastName: 'Costa',
                team: 'Chelsea',
                position: 'ST',
                points: 1,
                isStarting: true
              },
              {
                id: 2,
                firstName: 'Lionel',
                lastName: 'Messi',
                team: 'Barca',
                position: 'ST',
                points: 1,
                isStarting: true
              },
            ]
          }
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = 'http://localhost:8080';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
}
