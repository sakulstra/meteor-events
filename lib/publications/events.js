/**
 * Created by lukas on 29.10.15.
 */
Meteor.publish('events', function(){
    var events = Events.find();

    if( events ) {
        return events;
    }

    return this.ready();
});