import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
    Meteor.methods({
        'addNumbers': function(num1, num2) {
            return num1 + num2;
        }
    });
}