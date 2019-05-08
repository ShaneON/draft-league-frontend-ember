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
              {
                id: 3,
                firstName: 'Bram',
                lastName: 'Stoker',
                team: 'Chelsea',
                position: 'MID',
                points: 1,
                isStarting: true
              },
              {
                id: 4,
                firstName: 'Mark',
                lastName: 'Overmars',
                team: 'Barca',
                position: 'MID',
                points: 1,
                isStarting: true
              },
              {
                id: 5,
                firstName: 'Luis',
                lastName: 'Figo',
                team: 'Chelsea',
                position: 'MID',
                points: 1,
                isStarting: true
              },
              {
                id: 6,
                firstName: 'Paul',
                lastName: 'Pogba',
                team: 'Barca',
                position: 'MID',
                points: 1,
                isStarting: true
              },
              {
                id: 7,
                firstName: 'Paul',
                lastName: 'Stoker',
                team: 'Chelsea',
                position: 'DEF',
                points: 1,
                isStarting: true
              },
              {
                id: 8,
                firstName: 'Peter',
                lastName: 'Overmars',
                team: 'Barca',
                position: 'DEF',
                points: 1,
                isStarting: true
              },
              {
                id: 9,
                firstName: 'Luigi',
                lastName: 'Figo',
                team: 'Chelsea',
                position: 'DEF',
                points: 1,
                isStarting: true
              },
              {
                id: 10,
                firstName: 'Foo',
                lastName: 'Pogba',
                team: 'Barca',
                position: 'DEF',
                points: 1,
                isStarting: true
              },
              {
                id: 11,
                firstName: 'Petr',
                lastName: 'Cech',
                team: 'Barca',
                position: 'GK',
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
