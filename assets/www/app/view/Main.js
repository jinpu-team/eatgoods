Ext.define('eatgoods.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.noteslistcontainer",
    initialize: function () {
        this.callParent(arguments);
        var loginButton = {
            xtype: "button",
            text: '登录',
            ui: 'back',
            handler: this.onLoginButtonTap,
            scope: this 
        };
        var newButton = {
            xtype: "button",
            text: '订单',
            ui: 'action',
            handler: this.onNewButtonTap,
            scope: this 
        };
        // var searchField={
        //     xtype: 'searchfield',
        //     placeHolder: '搜索饭店',
        //     name:'searchfield'
        // }
        var topToolbar = {
            xtype: "toolbar",
            title:"选择订单",
            docked: "top",
            items: [
            loginButton,
            // { xtype: 'spacer' },
            // searchField,
            { xtype: 'spacer' },
            newButton
            ]
        };
        var searchIco={
            title: '查找',
            iconCls: 'search'
        }
        var featureIco={
            title: '特色推荐',
            iconCls: 'action',
        }
        var groupIco={
            title:'团饭',
            iconCls:'shop1'
        }
        var bottomToolbar = {
            xtype: "tabbar",
            docked: "bottom",            
            items: [
            searchIco,
            featureIco,
            groupIco
            ]
        };
        var notesList = {
            xtype: "noteslist",
            store: Ext.getStore("Notes"),
            listeners: {
                disclose: { fn: this.onNotesListDisclose, scope: this }
            }
        };
        this.add([topToolbar, notesList, bottomToolbar]); 
    },
    onNewButtonTap: function () {
        console.log("newNoteCommand");
        this.fireEvent("newNoteCommand", this);
    },
    onNotesListDisclose: function (list, record, target, index, evt, options) {
        console.log("editNoteCommand");
        this.fireEvent('editNoteCommand', this, record);
    },
    config: {
        layout: {
            type: 'fit'
        }
    }           
});
