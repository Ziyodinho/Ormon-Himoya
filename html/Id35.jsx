import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kuzgi tunlam </b>– <i>Agrotis </i><span ><i> </i><i>segetum Siff. </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kuzgi tunlam </b>- (озимая совка - <i>Agrotis segetum  </i>Siff.)asosiy zarari ekilgan urug‘larni va yosh nihollarni ildizlarini zararlaydi. Bu zararkunanda katta yosh qurti bosqichida tuproq ichida qishlaydi. Qurtlar martning ikkinchi yarmida, aprel boshlarida g‘umbakka aylanadi. 2-3 xafta o‘tgach bu g‘umbaklardan voyaga yetgan kapalaklar chiqadi, ozgina vaqt gul nektari bilan oziqlanadi va tuxum qo‘yadi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Kuzgi tunlam kapalagi va qurti </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Kuzgi tunlam kapalaklarikechalari uchib kunduz vaqtida kesak va begona o‘tlar orasida yashirinib yotadi. Tuxumlarini bitta-bittalab yoki to‘dalab barglarning orqa tomoniga qo‘yadi. Bitta urg‘ochi kapalak o‘rta hisobda 500-800 ta, eng ko‘pi bilan 1800 ta gacha tuxum qo‘yadi. Embrional davri 3-5 kun davom etadi. Tuxumdan chiqqan qurtlar ozgina shu joyda begona o‘tlar bilan ovqatlanadi, 2-3 yoshdan boshlab tuproq ostiga tushadi va kechalari o‘simlik ildizi bilan oziqlanadi. Qurtlar 30-40 kunda rivojlanib bo‘ladi. Ularning serpushtligi iqlimga bog‘liq. MarkaziyOsiyo va Kavkazortida3 bo‘g‘in, boshqa joylarda 2 bo‘g‘in beradi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari: </b> </i><i> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Nurell-D, 55% em.k. 1,5 l/ga, Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, Karbofos,50% 1 ga - 1,0-3,0 l/ga. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Biologik kurash: </b> </i>Bioslip BT gektariga 2,0-3,0 kg/ga, Mikrobiopreparatlardan Lepipobaktotsid, J (Ba-2000 YeA/g) 2-3 A; Lepidotsid SK-M, SK (BA-2000 YeA/mg) 3(A) mikrobiopreparatlari gektariga 1,0 l/ga qo‘llaniladi.</p><p></div>`;  
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
    <SafeAreaView style={styles.container}><ScrollView >
     
      <HTMLView  value={htmlContent}
  stylesheet={{ // стили для HTML-контента
    p: {
      fontSize: 18,
      color: '#000',
      textAlign: 'justify',
    },
  }} contentWidth={windowWidth} />
<Image style=
    {{ 
      width: '100%', 
      height: undefined,
      maxWidth: '100%',
      minWidth: '100%',
      aspectRatio: 1,
      alignSelf: 'center',
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
      width: 3,
      height: 4,
                    },
      shadowOpacity: 0.5,
      shadowRadius: 5,
borderRadius: 10,
    }} 
        source={require("./m_html_6d5a434e2415863.gif")} />
      <Image style=
    {{ 
      width: '100%', 
      height: undefined,
      maxWidth: '100%',
      minWidth: '100%',
      aspectRatio: 1,
      alignSelf: 'center',
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {
      width: 3,
      height: 4,
                    },
      shadowOpacity: 0.5,
      shadowRadius: 5,
borderRadius: 10,
    }} 
        source={require("./m_html_3796674a16552f68.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
