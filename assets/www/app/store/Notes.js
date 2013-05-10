Ext.define("eatgoods.store.Notes", {
	extend: "Ext.data.Store",
	requires: "Ext.data.proxy.LocalStorage",
	config: {
		model: "eatgoods.model.Note",
		proxy: {
            type: 'localstorage',
            id: 'notes-app-store'
        },
		data: [
			{ title: "秦晋小吃", narrative: "大碗面走起啊~~~~" },
			{ title: "春晓", narrative: "椒盐排条，你最明智的选择~~" },
			{ title: "麦当劳", narrative: "活蹦乱跳的薯条们~~~~经典的麦辣鸡~~" }
		],
		sorters: [{ property: 'dateCreated', direction: 'DESC'}]
	}
})