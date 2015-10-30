/**
 * Created by lukas on 29.10.15.
 */
/**
 * This function is fired on startup
 */
Meteor.startup(function() {
    //make sure Events collection is available
    if ( typeof  Events == "object" && Events.constructor == Mongo.Collection ){
        //initialize contents
    }
});