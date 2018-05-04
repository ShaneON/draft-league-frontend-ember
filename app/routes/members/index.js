import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [
      {
        firstName: "Shane",
        lastName: "O'Neill",
        teamName: "The Chois",
        points: "500"
      },
      {
        firstName: "Stephen",
        lastName: "Nesbitt",
        teamName: "Nuzh",
        points: "400"
      },
      {
        firstName: "David",
        lastName: "Nesbitt",
        teamName: "Doivehhhh",
        points: "300"
      },
      {
        firstName: "Larry",
        lastName: "Bradshaw",
        teamName: "The la's",
        points: "400"
      },
      {
        firstName: "Gavin",
        lastName: "Douglas",
        teamName: "Guvvvvvv",
        points: "1000"
      },
      {
        firstName: "Finnbar",
        lastName: "Curran",
        teamName: "The finns",
        points: "200"
      },
      {
        firstName: "Paul",
        lastName: "Keating",
        teamName: "The pals",
        points: "450"
      },
      {
        firstName: "Shane",
        lastName: "Flynn",
        teamName: "The Stoners",
        points: "420"
      }
    ];
  }
});
