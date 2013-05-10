Ext.define("eatgoods.view.NoteEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.noteeditor",
    config: {
        scrollable: 'vertical'
    },
    initialize: function () {

        this.callParent(arguments);

        var backButton = {
            xtype: "button",
            ui: "back",
            text: "返回"
        };

        var saveButton = {
            xtype: "button",
            ui: "action",
            text: "保存",
            handler: this.onSaveButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "订餐",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };

        var deleteButton = {
            xtype: "button",
            iconCls: "trash",
            iconMask: true,
            scope: this
        };

        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                deleteButton
            ]
        };

        var noteTitleEditor = {
            xtype: 'textfield',
            name: 'title',
            label: 'Title',
            required: true
        };

        var noteNarrativeEditor = {
            xtype: 'textareafield',
            name: 'narrative',
            label: 'Narrative'
        };

        this.add([
            topToolbar,
            { xtype: "fieldset",
                items: [noteTitleEditor, noteNarrativeEditor]
            },
            bottomToolbar
        ]);
    },
    onSaveButtonTap: function () {
        console.log("saveNoteCommand");
        this.fireEvent("saveNoteCommand", this);
    }

});

