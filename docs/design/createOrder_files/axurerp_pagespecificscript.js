﻿for(var i = 0; i < 20; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u8'] = 'top';
u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('orderInfoTotal.html');

}
});
gv_vAlignTable['u10'] = 'top';
u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	SetPanelState('u9', 'pd1u9','none','',500,'none','',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u18'] = 'top';
u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	SetPanelState('u9', 'pd0u9','none','',500,'none','',500);

}
});
