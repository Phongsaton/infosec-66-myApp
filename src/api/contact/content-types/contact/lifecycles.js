module.exports = {
    async beforeCreate(event){
        console.log('beforeSave ', event)
        event.params.data.mobile = btoa(event.params.data.mobile)
        event.params.data.card_id = btoa(event.params.data.card_id)
    },

    async afterFindOne(event){
        console.log('afterFindOne ', event)
        event.result.mobile = atob(event.result.mobile)
        event.result.card_id = atob(event.result.card_id)
    },

    async afterFindMany(event){
        //await event.result.forEach(item => {
            //item.mobile = atob(item.mobile)
            //item.card_id = atob(item.card_id)
        //});
    }
}