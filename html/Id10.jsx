import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.23cm;"><span style="letter-spacing:-0.3pt"><b>Kaliforniya qalqondori </b><span style="letter-spacing:-0.3pt">- (калифорнийская щитовка - <span style="letter-spacing:-0.3pt"><i>Diaspidiotus Perniciosus  </i><span style="letter-spacing:-0.3pt">Comst.). Bu <span style="letter-spacing:-0.3pt">h<span style="letter-spacing:-0.3pt">asharot karantin ob’ekt bo‘lib O‘zbekistonda 1964 yilda topilgan. Hozirgi kunda bir nechta viloyatlarda tarqalgan. Bu qalqondorlar hammaxo‘r hisoblanadi, 200 dan ko‘proq har xil o‘simliklarga zarar yetkazadi. Ayniqsa, mevali daraxtlar qattiq zarar ko‘radi. Olma, nok, be<span style="letter-spacing:-0.3pt">h<span style="letter-spacing:-0.3pt">i, shaftoli, karam va boshqalar. <span style="letter-spacing:-0.3pt"><span >O‘rmon daraxtlaridan terak, siren, <span style="letter-spacing:-0.3pt">zarang<span style="letter-spacing:-0.3pt">, yel, tuya, qarag‘ay<span style="letter-spacing:-0.3pt"><span >va boshqalar. Lichinkasi va voyaga yetmagan urg‘ochisi novda va mevalardagi shirani so‘rib oladi, shu joylarda qizil dog‘ qoladi, bu ayniqsa, mevalarda ko‘rinib turadi. Qalqondor 1 yoshida daraxt tanasida qishlaydi. Bahorda uyg‘onib, 25-30 kundan keyin voyaga yetadi, erkagi urg‘ochisi bilan ko‘shilgandan keyin 1 oydan so‘ng lichinka tug‘a boshlaydi, urg‘ochisi 100-200 tagacha tu<span style="letter-spacing:-0.3pt">g‘<span style="letter-spacing:-0.3pt"><span >adi. Lichinkalarining tug‘ilishi 40-46 kungacha davom etadi.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-top:0.21cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"><b>Kaliforniya qalqondori </b><span style="letter-spacing:-0.3pt"><b>-  </b><span style="letter-spacing:-0.3pt"><i><b>Diaspidiotus Perniciosus  </b> </i><span style="letter-spacing:-0.3pt"><b>Comst </b><span style="letter-spacing:-0.3pt"><b>. </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.3pt">mineral<span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. <span style="letter-spacing:-0.3pt">Qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, qurigan daraxt shoxlarini kesish.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Biologik kurash: </b> </i><b> </b>Mikrobiopreparatlardan Bioslip BV, em.k. 2,0-3,0 l/ga sarf-me’yorlarda qo‘llash tavsiya etiladi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Bi-58 (yangi), 40 % em.k. 1,0-1,5 l/ga, Imitrin, 20% sus.k., Danadim, 40 % em.k., 1,5-2,5 l/ga, Ekotsis, 2,5% s.e.k. 0,5-1,0 l/ga, Atilla-Super 10 % em.k<i>., </i>0,3-0,4 l/ga, Preparat – RR-1, 10-15 l/ga, Ovipron 2000 em.k. (800 g/l), 10-15 l/ga, Konfidor, 20 % em.k. 0,2-0,3l/ga.,Bagira, 20 % em.k., 0,3-0,4 l/ga va boshqapreparatlarni qo‘llash.<br> </p></div>`;  
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
        source={require("./i_html_81ceda492cd3377e.jpg")} name="Изображение4" align="bottom" width="310" height="272" border="0"/>

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
        source={require("./i_html_25c105858a8cc50.jpg")} name="Изображение5" align="bottom" width="289" height="271" border="0"/>
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
