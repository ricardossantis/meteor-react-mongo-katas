import './method.js';
import assert from 'assert';
import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
    describe('returnArgument', () => {
        it('returns the argument correctly', () => {
            const arg = 'test';

            // Call the method and get the result
            const result = Meteor.call('returnArgument', arg);

            // Check that the result is as expected
            assert.equal(result, arg);
        });
    });
}