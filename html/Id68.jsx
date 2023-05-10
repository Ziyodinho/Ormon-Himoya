import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

  const htmlContent = `<style>*{font-size: 30px;}</style><div ><br><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;margin-top:0.21cm;margin-bottom:0.21cm;"><b>Daraxtlarning poyalari, novda va shoxlarini kasalliklari  </b></p><table style="width: 95%;
  margin: 10 auto;" cellPadding="7" cellSpacing="0"><colgroup><col width="292"/><col width="327"/></colgroup><tbody><tr><td width="292" height="2" style="border:1px solid #000000;padding:0cm 0.19cm"><p align="center" style="orphans:0;widows:0;text-indent:0cm;"><b>Kasallik </b></p></td><td width="327" style="border:1px solid #000000;padding:0cm 0.19cm"><p align="center" style="orphans:0;widows:0;text-indent:0cm;"><b>Qo‘zg‘atuvchisi yoki kasallik paydo bo‘lishining sababi</b></p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="292" style="border:1px solid #000000;padding:0cm 0.19cm"><p style="orphans:0;widows:0;text-indent:0cm;">Konolli akatsiyasi (akatsiyakonolli) poyalari zararlanishi va chirishi</p></td><td width="327" style="border:1px solid #000000;padding:0cm 0.19cm"><p style="orphans:0;widows:0;text-indent:0cm;"><span ><i>Phoma ammodendri </i></p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="292" style="border:1px solid #000000;padding:0cm 0.19cm"><p style="orphans:0;widows:0;text-indent:0cm;">Ilm daraxtlarining g<span >rafioz (golland) kasalligi</p></td><td width="327" style="border:1px solid #000000;padding:0cm 0.19cm"><p style="orphans:0;widows:0;text-indent:0cm;"><span ><i>Ceratocystisulmi </i>, konidial bosqichi <span ><i>Graphiumulmi </i><span >(ayrim yillari Markaziy Osiyoda <span >epifitotiya shaklida tarqaladi<span >)</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="292" style="border:1px solid #000000;padding:0cm 0.19cm"><p style="orphans:0;widows:0;text-indent:0cm;">Mevali daraxtlarning qora<span >rak kasalligi</p></td><td width="327" style="border:1px solid #000000;padding:0cm 0.19cm"><p style="orphans:0;widows:0;text-indent:0cm;"><i>Botryosphaeria obtusa </i>,konidial bosqichi <i>Sphaeropsis malorum </i></p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="292" style="border:1px solid #000000;padding:0cm 0.19cm"><p style="orphans:0;widows:0;text-indent:0cm;">Mevali, o‘rmon daraxtlari va yong‘oqning tsitosporoz qurish kasalligi</p></td><td width="327" style="border:1px solid #000000;padding:0cm 0.19cm"><p style="orphans:0;widows:0;text-indent:0cm;"><span ><i>Cytospora </i>turkumiga mansub zamburug‘lar</p></td></tr></tbody></table><p></div>`;  
const Id = () => {
  const windowWidth = useWindowDimensions().width;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
  }); 

  return (
    <WebView     source={{ html: htmlContent }} 
    style={styles.container} 
    contentWidth={windowWidth} 
  />
  );
};

export default Id;
