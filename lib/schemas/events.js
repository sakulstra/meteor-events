/**
 * Created by lukas on 29.10.15.
 */

Events.attachSchema(new SimpleSchema({
    /**
     * title
     */
    title:{
        index: true,
        type: String,
    },
    /**
     * start date
     */
    startDate:{
        type: Date
    },
    /**
     * start time
     */
    startTime:{
        type: String
    },
    /**
     * end Time
     * optional for open ended events
     */
    endTime:{
        type: String,
        optional: true
    },
    /**
     *  if set to true, recurring event logic is processed
     */
    recurringEvent:{
        type: Boolean
    },
    /**
     * ######################################################################################################################
     * Everything below this section is recurring event logic only
     * ######################################################################################################################
     */
    /**
     * parentID allows as to change events within a recurring Event without losing the context
     */
    parentId:{
        type: String,
        optional: true
    },
    /**
     * contains a String representation of the cycle e.g. "2,w" for every 'two' 'weeks'
     * the cycle is always relative to the startDate
     * valid options: [1-9]+,[d,w,m]
     */
    frequency:{
        type: String,
        optional: true,
        custom: function(){
            //TODO: check recurringEvent
            return "required";
        }
    },
    /**
     * end Date -> should be bigger than startDate
     * optional because i want to allow - infinite
     */
    endDate:{
        type: Date,
        optional: true,
        custom: function(){
            //TODO: check if endDate > startDate
        }
    },
    excludeDates:{
        type:[Date]
    },
    /**
     * ######################################################################################################################
     * Everything below this section isn't saved in the database and only here for validation
     * ######################################################################################################################
     */
    /**
     * number which gets fed to frequency "every rate cycle" e.g. "5. week"
     */
    rate:{
        type: Number,
        optional: true,
        min: 1,
        max: 15
    },
    /**
     * unit which gets fed to frequency
     */
    unit:{
        type:String,
        optional: true
    }
}));