Ext.define('AM.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    title: 'All Users',

    store: 'Users',
    tbar: [
        { xtype: 'button', text: 'Sort', action: 'sort' },
        { xtype: 'textfield' ,itemId: 'nameFilter' }
    ],

    initComponent: function () {
        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }

});