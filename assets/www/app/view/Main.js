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
                    "<ul class='menu_list'><li><label>炒菜</label><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span></li>",
                    "<li><label>米粉</label><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span></li>",
                    "<li><label>米粉</label><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span></li>",
                    "<li><label>米粉</label><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span></li>",
                    "<li><label>炒饭</label><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span><span><img width='48' height='48' src='resources/images/pic01.jpg' onClick='WHAT_GOES_HERE?'/></span></li></ul>"
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
                        url: 'http://www.tangdou.com/v44/dANMMAMjwDzj0Q2.html',
                        posterUrl: 'resources/images/pic01.jpg'
                    }
                ]
            },
            {
                title:'团饭',
                iconCls:'shop1',
                items:[
                    {
                        docked:'top',
                        xtype:'titlebar',
                        title:'一起订饭'
                    },
                    {

                    }
                ]
            }
        ],
        listeners:{
            painted:function(panel){
                var el=panel.element;
                el.on('tap',function(e,t){
                    var image=e.getTarget('img');
                    if(image){
                        //an image was tapped
                        alert("ok");
                    }
                },panel);
            }
        }

    }
});
