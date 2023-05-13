gdjs.TutorialCode = {};
gdjs.TutorialCode.GDRiprendiObjects1= [];
gdjs.TutorialCode.GDRiprendiObjects2= [];
gdjs.TutorialCode.GDSquareWhiteSliderObjects1= [];
gdjs.TutorialCode.GDSquareWhiteSliderObjects2= [];
gdjs.TutorialCode.GDVolumeTextObjects1= [];
gdjs.TutorialCode.GDVolumeTextObjects2= [];
gdjs.TutorialCode.GDContornoObjects1= [];
gdjs.TutorialCode.GDContornoObjects2= [];
gdjs.TutorialCode.GDVolumeObjects1= [];
gdjs.TutorialCode.GDVolumeObjects2= [];
gdjs.TutorialCode.GDPausaFadeObjects1= [];
gdjs.TutorialCode.GDPausaFadeObjects2= [];
gdjs.TutorialCode.GDBlackDecoratedButtonObjects1= [];
gdjs.TutorialCode.GDBlackDecoratedButtonObjects2= [];
gdjs.TutorialCode.GDLifeBarObjects1= [];
gdjs.TutorialCode.GDLifeBarObjects2= [];
gdjs.TutorialCode.GDLifeBarContainerObjects1= [];
gdjs.TutorialCode.GDLifeBarContainerObjects2= [];
gdjs.TutorialCode.GDHeatObjects1= [];
gdjs.TutorialCode.GDHeatObjects2= [];
gdjs.TutorialCode.GDOverheatObjects1= [];
gdjs.TutorialCode.GDOverheatObjects2= [];
gdjs.TutorialCode.GDBulletsdHUDObjects1= [];
gdjs.TutorialCode.GDBulletsdHUDObjects2= [];
gdjs.TutorialCode.GDGameOverObjects1= [];
gdjs.TutorialCode.GDGameOverObjects2= [];
gdjs.TutorialCode.GDFadeObjects1= [];
gdjs.TutorialCode.GDFadeObjects2= [];
gdjs.TutorialCode.GDShootObjects1= [];
gdjs.TutorialCode.GDShootObjects2= [];
gdjs.TutorialCode.GDFlatDarkJoystickObjects1= [];
gdjs.TutorialCode.GDFlatDarkJoystickObjects2= [];
gdjs.TutorialCode.GDGUIDAObjects1= [];
gdjs.TutorialCode.GDGUIDAObjects2= [];
gdjs.TutorialCode.GDGratteri3Objects1= [];
gdjs.TutorialCode.GDGratteri3Objects2= [];
gdjs.TutorialCode.GDManetteObjects1= [];
gdjs.TutorialCode.GDManetteObjects2= [];
gdjs.TutorialCode.GDMafiosoObjects1= [];
gdjs.TutorialCode.GDMafiosoObjects2= [];
gdjs.TutorialCode.GDwasdObjects1= [];
gdjs.TutorialCode.GDwasdObjects2= [];
gdjs.TutorialCode.GDARRESTAObjects1= [];
gdjs.TutorialCode.GDARRESTAObjects2= [];
gdjs.TutorialCode.GDmuovitiObjects1= [];
gdjs.TutorialCode.GDmuovitiObjects2= [];
gdjs.TutorialCode.GDAVANZAObjects1= [];
gdjs.TutorialCode.GDAVANZAObjects2= [];
gdjs.TutorialCode.GDGIOCAObjects1= [];
gdjs.TutorialCode.GDGIOCAObjects2= [];
gdjs.TutorialCode.GDINDIETROObjects1= [];
gdjs.TutorialCode.GDINDIETROObjects2= [];
gdjs.TutorialCode.GDGUIDABackObjects1= [];
gdjs.TutorialCode.GDGUIDABackObjects2= [];
gdjs.TutorialCode.GDGUIDABack22Objects1= [];
gdjs.TutorialCode.GDGUIDABack22Objects2= [];
gdjs.TutorialCode.GDLetterKeyObjects1= [];
gdjs.TutorialCode.GDLetterKeyObjects2= [];
gdjs.TutorialCode.GDArrowKeyObjects1= [];
gdjs.TutorialCode.GDArrowKeyObjects2= [];
gdjs.TutorialCode.GDSpaceKeyObjects1= [];
gdjs.TutorialCode.GDSpaceKeyObjects2= [];
gdjs.TutorialCode.GDGIFLifeObjects1= [];
gdjs.TutorialCode.GDGIFLifeObjects2= [];
gdjs.TutorialCode.GDOJOObjects1= [];
gdjs.TutorialCode.GDOJOObjects2= [];
gdjs.TutorialCode.GDpAUSAtEXTObjects1= [];
gdjs.TutorialCode.GDpAUSAtEXTObjects2= [];
gdjs.TutorialCode.GDHEATTextObjects1= [];
gdjs.TutorialCode.GDHEATTextObjects2= [];
gdjs.TutorialCode.GDStudenteTextObjects1= [];
gdjs.TutorialCode.GDStudenteTextObjects2= [];
gdjs.TutorialCode.GDHEATGIFObjects1= [];
gdjs.TutorialCode.GDHEATGIFObjects2= [];
gdjs.TutorialCode.GDSTUDENTEGlobalObjects1= [];
gdjs.TutorialCode.GDSTUDENTEGlobalObjects2= [];
gdjs.TutorialCode.GDPausaPhotoObjects1= [];
gdjs.TutorialCode.GDPausaPhotoObjects2= [];
gdjs.TutorialCode.GDEscKeyObjects1= [];
gdjs.TutorialCode.GDEscKeyObjects2= [];
gdjs.TutorialCode.GDNewSpriteObjects1= [];
gdjs.TutorialCode.GDNewSpriteObjects2= [];
gdjs.TutorialCode.GDNewBitmapTextObjects1= [];
gdjs.TutorialCode.GDNewBitmapTextObjects2= [];
gdjs.TutorialCode.GDNewSprite2Objects1= [];
gdjs.TutorialCode.GDNewSprite2Objects2= [];
gdjs.TutorialCode.GDNewSprite3Objects1= [];
gdjs.TutorialCode.GDNewSprite3Objects2= [];
gdjs.TutorialCode.GDNewBBTextObjects1= [];
gdjs.TutorialCode.GDNewBBTextObjects2= [];


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AVANZA"), gdjs.TutorialCode.GDAVANZAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDAVANZAObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDAVANZAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDAVANZAObjects1[k] = gdjs.TutorialCode.GDAVANZAObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDAVANZAObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "SECONDA");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("INDIETRO"), gdjs.TutorialCode.GDINDIETROObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDINDIETROObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDINDIETROObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDINDIETROObjects1[k] = gdjs.TutorialCode.GDINDIETROObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDINDIETROObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "SECONDA");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "SECONDA");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GIOCA"), gdjs.TutorialCode.GDGIOCAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDGIOCAObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDGIOCAObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDGIOCAObjects1[k] = gdjs.TutorialCode.GDGIOCAObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDGIOCAObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "SECONDA");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FirstLevelMobile", false);
}}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDRiprendiObjects1.length = 0;
gdjs.TutorialCode.GDRiprendiObjects2.length = 0;
gdjs.TutorialCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.TutorialCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.TutorialCode.GDVolumeTextObjects1.length = 0;
gdjs.TutorialCode.GDVolumeTextObjects2.length = 0;
gdjs.TutorialCode.GDContornoObjects1.length = 0;
gdjs.TutorialCode.GDContornoObjects2.length = 0;
gdjs.TutorialCode.GDVolumeObjects1.length = 0;
gdjs.TutorialCode.GDVolumeObjects2.length = 0;
gdjs.TutorialCode.GDPausaFadeObjects1.length = 0;
gdjs.TutorialCode.GDPausaFadeObjects2.length = 0;
gdjs.TutorialCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.TutorialCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.TutorialCode.GDLifeBarObjects1.length = 0;
gdjs.TutorialCode.GDLifeBarObjects2.length = 0;
gdjs.TutorialCode.GDLifeBarContainerObjects1.length = 0;
gdjs.TutorialCode.GDLifeBarContainerObjects2.length = 0;
gdjs.TutorialCode.GDHeatObjects1.length = 0;
gdjs.TutorialCode.GDHeatObjects2.length = 0;
gdjs.TutorialCode.GDOverheatObjects1.length = 0;
gdjs.TutorialCode.GDOverheatObjects2.length = 0;
gdjs.TutorialCode.GDBulletsdHUDObjects1.length = 0;
gdjs.TutorialCode.GDBulletsdHUDObjects2.length = 0;
gdjs.TutorialCode.GDGameOverObjects1.length = 0;
gdjs.TutorialCode.GDGameOverObjects2.length = 0;
gdjs.TutorialCode.GDFadeObjects1.length = 0;
gdjs.TutorialCode.GDFadeObjects2.length = 0;
gdjs.TutorialCode.GDShootObjects1.length = 0;
gdjs.TutorialCode.GDShootObjects2.length = 0;
gdjs.TutorialCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.TutorialCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.TutorialCode.GDGUIDAObjects1.length = 0;
gdjs.TutorialCode.GDGUIDAObjects2.length = 0;
gdjs.TutorialCode.GDGratteri3Objects1.length = 0;
gdjs.TutorialCode.GDGratteri3Objects2.length = 0;
gdjs.TutorialCode.GDManetteObjects1.length = 0;
gdjs.TutorialCode.GDManetteObjects2.length = 0;
gdjs.TutorialCode.GDMafiosoObjects1.length = 0;
gdjs.TutorialCode.GDMafiosoObjects2.length = 0;
gdjs.TutorialCode.GDwasdObjects1.length = 0;
gdjs.TutorialCode.GDwasdObjects2.length = 0;
gdjs.TutorialCode.GDARRESTAObjects1.length = 0;
gdjs.TutorialCode.GDARRESTAObjects2.length = 0;
gdjs.TutorialCode.GDmuovitiObjects1.length = 0;
gdjs.TutorialCode.GDmuovitiObjects2.length = 0;
gdjs.TutorialCode.GDAVANZAObjects1.length = 0;
gdjs.TutorialCode.GDAVANZAObjects2.length = 0;
gdjs.TutorialCode.GDGIOCAObjects1.length = 0;
gdjs.TutorialCode.GDGIOCAObjects2.length = 0;
gdjs.TutorialCode.GDINDIETROObjects1.length = 0;
gdjs.TutorialCode.GDINDIETROObjects2.length = 0;
gdjs.TutorialCode.GDGUIDABackObjects1.length = 0;
gdjs.TutorialCode.GDGUIDABackObjects2.length = 0;
gdjs.TutorialCode.GDGUIDABack22Objects1.length = 0;
gdjs.TutorialCode.GDGUIDABack22Objects2.length = 0;
gdjs.TutorialCode.GDLetterKeyObjects1.length = 0;
gdjs.TutorialCode.GDLetterKeyObjects2.length = 0;
gdjs.TutorialCode.GDArrowKeyObjects1.length = 0;
gdjs.TutorialCode.GDArrowKeyObjects2.length = 0;
gdjs.TutorialCode.GDSpaceKeyObjects1.length = 0;
gdjs.TutorialCode.GDSpaceKeyObjects2.length = 0;
gdjs.TutorialCode.GDGIFLifeObjects1.length = 0;
gdjs.TutorialCode.GDGIFLifeObjects2.length = 0;
gdjs.TutorialCode.GDOJOObjects1.length = 0;
gdjs.TutorialCode.GDOJOObjects2.length = 0;
gdjs.TutorialCode.GDpAUSAtEXTObjects1.length = 0;
gdjs.TutorialCode.GDpAUSAtEXTObjects2.length = 0;
gdjs.TutorialCode.GDHEATTextObjects1.length = 0;
gdjs.TutorialCode.GDHEATTextObjects2.length = 0;
gdjs.TutorialCode.GDStudenteTextObjects1.length = 0;
gdjs.TutorialCode.GDStudenteTextObjects2.length = 0;
gdjs.TutorialCode.GDHEATGIFObjects1.length = 0;
gdjs.TutorialCode.GDHEATGIFObjects2.length = 0;
gdjs.TutorialCode.GDSTUDENTEGlobalObjects1.length = 0;
gdjs.TutorialCode.GDSTUDENTEGlobalObjects2.length = 0;
gdjs.TutorialCode.GDPausaPhotoObjects1.length = 0;
gdjs.TutorialCode.GDPausaPhotoObjects2.length = 0;
gdjs.TutorialCode.GDEscKeyObjects1.length = 0;
gdjs.TutorialCode.GDEscKeyObjects2.length = 0;
gdjs.TutorialCode.GDNewSpriteObjects1.length = 0;
gdjs.TutorialCode.GDNewSpriteObjects2.length = 0;
gdjs.TutorialCode.GDNewBitmapTextObjects1.length = 0;
gdjs.TutorialCode.GDNewBitmapTextObjects2.length = 0;
gdjs.TutorialCode.GDNewSprite2Objects1.length = 0;
gdjs.TutorialCode.GDNewSprite2Objects2.length = 0;
gdjs.TutorialCode.GDNewSprite3Objects1.length = 0;
gdjs.TutorialCode.GDNewSprite3Objects2.length = 0;
gdjs.TutorialCode.GDNewBBTextObjects1.length = 0;
gdjs.TutorialCode.GDNewBBTextObjects2.length = 0;

gdjs.TutorialCode.eventsList0(runtimeScene);

return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
