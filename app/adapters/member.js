import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  urlForFindRecord(id){
    return `http://localhost:8080/members/${id}`;
  },

  urlForFindAll(){
    return `http://localhost:8080/members/`;
  },

  urlForCreateRecord() {
    return `http://localhost:8080/members/`;
  },

  urlForUpdateRecord(id) {
    return `http://localhost:8080/members/${id}`;
  },
});
