import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
    Meteor.methods({
        'returnArgument': function(arg) {
            // TODO: Implement the method that takes an argument and returns it.
        }
    });
}