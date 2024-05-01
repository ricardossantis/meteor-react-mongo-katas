import './method.js';
import assert from 'assert';
import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
    describe('addNumbers', () => {
        it('adds two numbers correctly', () => {
            const num1 = 3;
            const num2 = 4;

            // Call the method and get the result
            const result = Meteor.call('addNumbers', num1, num2);

            // Check that the result is as expected
            assert.equal(result, 7);
        });
    });
}

