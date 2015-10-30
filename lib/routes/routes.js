/**
 * Created by lukas on 29.10.15.
 */
FlowRouter.route('/event/insert',{
    name:'insertEvent',
    action: function(){
        BlazeLayout.render("mainLayout", {
            content: "eventInsertForm"
        });
    }
})