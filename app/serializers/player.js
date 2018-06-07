import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
  const newPayload = payload.map(t => this._toNormalisedPayload(t));
  return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = this._toNormalisedPayload(payload);
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  _toNormalisedPayload(payload) {
    return {
      id: payload.id,
      firstName: payload.first_name,
      lastName: payload.second_name,
      team: payload.teamName,
      position: payload.position,
      points: payload.total_points,
      isStarting: payload.is_starting
    };
  }
});
