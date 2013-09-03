Ext.define("AM.store.Users", {
 extend:'Ext.data.Store',
    model:'AM.model.User',
    autoLoad: true,

    //data: [
    //    {name: 'Ed',    email: 'ed@sencha.com'},
    //    {name: 'Tommy', email: 'tommy@sencha.com'}
    //]
    proxy: {
        type: 'ajax',
		api : {
		read : 'data/Users.json',
		update : 'data/updateUsers.json'
		},       
       reader: {
            type: 'json',
           root: 'users',
            successProperty: 'success'
        }
    }
})