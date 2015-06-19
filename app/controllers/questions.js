import Ember from 'ember';

export default Ember.ArrayController.extend ({
  actions: {
    add: function() {
      $("#addModal").modal('show');
    }
  }
});
