module.exports = {
    async beforeCreate(event){
        //console.log(event)
        event.params.data.mobile = btoa(event.params.data.mobile)
        event.params.data.card_id = btoa(event.params.data.card_id)
        event.params.data.line = btoa(event.params.data.line)
    },

    async afterFindOne(event){
        //console.log(event)
        if(!event.result) return
        event.result.mobile = atob(event.result.mobile)
        event.result.card_id = atob(event.result.card_id)
        event.result.line = atob(event.result.line)
     },

    async afterFindMany(event){
        console.log(event)
        if(!event.result) return
        await event.result.forEach(item => {
            item.mobile = atob(item.mobile)
            item.card_id = atob(item.card_id)
            item.line = atob(item.line)
         });
     },
    async beforeUpdate(event){
        //console.log(event)
        if(!event.params.data.mobile && !event.params.data.card_i && !event.params.data.line) return
        event.params.data.mobile = btoa(event.params.data.mobile)
        event.params.data.card_id = btoa(event.params.data.card_id)
        event.params.data.line = btoa(event.params.data.line)
    },
}