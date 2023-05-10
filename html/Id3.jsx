import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.26cm;"><b>Kuzgi tunlam </b>- (озимая совка - <i>Agrotis segetum  </i>Siff. ) <span style="font-variant:small-caps">Asosiy zarari ekilgan urug‘larni va yosh nihollarni ildizlarini zararlaydi. Bu zararkunanda katta yosh qurti bosqichida tuproq ichida qishlaydi. Qurtlar martning ikkinchi yarmida, aprel boshlarida g‘umbakka aylanadi. 2-3 xafta o‘tgach bu g‘umbaklardan voyaga yetgan kapalaklar chiqadi, ozgina vaqt gul nektari bilan oziqlanadi va tuxum qo‘yadi. Kapalaklar kechalari uchib kunduz vaqtida kesak va begona o‘tlar orasida yashirinib yotadi. Tuxumlarini bitta-bittalab yoki to‘dalab barglarning orqa tomoniga qo‘yadi. Bitta urg‘ochi kapalak o‘rta hisobda 500-800 ta eng ko‘pi bilan 1800 ta tuxum qo‘yadi. Embrional davri 3-5 kun davom etadi. Tuxumdan chiqqan qurtlar ozgina shu joyda begona o‘tlar bilan ovqatlanadi, 2-3 yoshdan boshlab tuproq ostiga tushadi va kechalari o‘simlik ildizi bilan oziqlanadi. Qurtlar 30-40 kunda rivojlanib bo‘ladi. Ularning serpushtligi iqlimga bog‘liq. MarkaziyOsiyo va Kavkaz orti mamlakatlarda 3 ta avlod, boshqa joylarda esa2taavlod berib rivojlanadi.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;"><i><b>Kuzgi tunlamning yetuk zoti, lichinkasi va g‘umbagi </b> </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.4pt"><i><b>Kimyoviy kurash: </b> </i><span style="letter-spacing:-0.4pt"><i> </i><span style="letter-spacing:-0.4pt">Tayfun plyus, 10 % n.kuk. 0,5 – 0,6 kg/ga,<span style="letter-spacing:-0.4pt"><i> </i><span style="letter-spacing:-0.4pt">Nurell-D, 55 % em.k., 1,5 l/ga<span style="letter-spacing:-0.4pt"><i>, </i><span style="letter-spacing:-0.4pt">Fufanon, 57 % em.k., 3,0 l/ga,<span style="letter-spacing:-0.4pt"><span style="letter-spacing:-0.4pt">1,5-2,0 l/ga,<span style="letter-spacing:-0.4pt"><i> </i><span style="letter-spacing:-0.4pt">Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, Karbofos, 50 % em.k., 1,0-3,0 l/ga., Aykon miks, 20 % s.d.g. 0,4 kg/ga, Entovant pro, 30 % s.e.g. 0,2-0,25 kg/ga sarf-me’yorda preparatlarini qo‘llash tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.26cm;"><span style="letter-spacing:-0.4pt"><i><b>Biologik kurash: </b> </i><span style="letter-spacing:-0.4pt"><i> </i><span style="letter-spacing:-0.4pt">Bioslip BT, 2-3 l/ga,<span style="letter-spacing:-0.4pt"><i> </i><span style="letter-spacing:-0.4pt">Lepipobaktotsid<span style="letter-spacing:-0.4pt"><span style="letter-spacing:-0.4pt">J (Ba-2000 <span style="letter-spacing:-0.4pt"><span >Y<span style="letter-spacing:-0.4pt">eA/g)<span style="letter-spacing:-0.4pt"><span style="letter-spacing:-0.4pt">2-3 A; Lepidotsid SK-M, SK (BA-2000 YeA/mg) mikrobiopreparatlari qo‘llash.</p></div>`;  
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
       source={require("./i_html_de669b322c7f0ebe.jpg")}/>      
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
        source={require("./i_html_c025b28849a0e915.jpg")}/>      
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
        source={require("./i_html_a357356b12cea3ca.jpg")} />
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
