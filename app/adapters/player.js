import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  urlForFindRecord(id){
    return `http://localhost:8080/players/${id}`;
  },

  urlForFindAll(){
    return `http://localhost:8080/players/`;
  },

  urlForUpdateRecord(id){
    return `http://localhost:8080/players/${id}`;
  }
});
