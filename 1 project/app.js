/**
 * Created with IntelliJ IDEA.
 * User: S
 * Date: 26.08.13
 * Time: 19:36
 * To change this template use File | Settings | File Templates.
 */
Ext.application({
    requires:['Ext.container.Viewport'],
    name: 'AM',
    appFolder: 'app',
    launch: function(){
        Ext.create('Ext.container.Viewport', {
            layout:'fit',
            title:'Users',
            html: 'OLOLOLO'
        })
    }




});