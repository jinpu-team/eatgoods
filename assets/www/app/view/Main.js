Ext.define('test.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: '查找',
                iconCls: 'search',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    layout: 'vbox',
                    items:[
                        {
                            xtype: 'searchfield',
                            placeHolder: '输入菜名搜索',
                            name:'searchfield',
                            centered: true,
                            width:'95%'
                        }
                    ]
                },
                html: [
                    "<ul class='menu_list'><li><label>炒菜</label><span>手撕包菜</span><span>地三鲜</span><span>回锅肉</span><span>小炒肉</span></li>",
                    "<li><label>米粉类</label><span>炒米粉</span><span>炒土豆粉</span><span>酸辣粉</span><span>牛肉粉</span></li>",
                    "<li><label>米粉类</label><span>炒米粉</span><span>炒土豆粉</span><span>酸辣粉</span><span>牛肉粉</span></li>",
                    "<li><label>米粉类</label><span>炒米粉</span><span>炒土豆粉</span><span>酸辣粉</span><span>牛肉粉</span></li>",
                    "<li><label>炒饭</label><span>蛋炒饭</span><span>西红柿炒饭</span><span>扬州炒饭</span></li></ul>"
                ].join("")
            },
            {
                title: '特色推荐',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '本周最受欢迎'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
