Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    stores:['Users'],
    models:['User'],
    views: [
        'user.List',
        'user.Edit'
    ],
    init: function () {
        this.control({
                'userlist': {
                    itemdblclick: this.editUser
                } ,
                'useredit button[action=save]':{
                    click:this.updateUser
                }
            }
        );
    },

    onPanelRendered: function () {
        console.log('The panel was rendered');
    },

    editUser: function (grid, record) {
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },
    updateUser: function (button){
        console.log('clicked the save button');
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
    }
});