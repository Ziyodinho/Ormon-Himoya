import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt"><b>Kaliforniya </b><span style="letter-spacing:-0.3pt"><b> </b><span style="letter-spacing:-0.3pt"><b>qalqondori </b><span style="letter-spacing:-0.3pt">- (калифорнийская щитовка - <span style="letter-spacing:-0.3pt"><i>Quadraspidiotus perniciosus  </i><span style="letter-spacing:-0.3pt">Comst.). Bu <span style="letter-spacing:-0.3pt">h<span style="letter-spacing:-0.3pt">asharot karantin ob’ekt bo‘lib O‘zbekistonda 1964 yilda topilgan. Hozirgi kunda bir nechta viloyatlarda tarqalgan. Bu qalqondorlar hammaxo‘r hisoblanadi, 200 dan ko‘proq har xil o‘simliklarga zarar yetkazadi.</p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;margin-top:0.21cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"> <span style="letter-spacing:-0.3pt"><b>Kaliforniya </b><span style="letter-spacing:-0.3pt"><b> </b><span style="letter-spacing:-0.3pt"><b>qalqondori </b><span style="letter-spacing:-0.3pt"><b> </b><span style="letter-spacing:-0.3pt"><b>va uning  </b><span style="letter-spacing:-0.3pt"><b>zarari </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt">Ayniqsa, mevali daraxtlar qattiq zarar k<span style="letter-spacing:-0.3pt">o‘<span style="letter-spacing:-0.3pt">radi. <span style="letter-spacing:-0.3pt"><span >Olma, nok, bexi, shaftoli, karam va boshqalar. O‘rmon daraxtlaridan terak, nastarin, zarang<span style="letter-spacing:-0.3pt">, yel, tuyya, qarag‘ay<span style="letter-spacing:-0.3pt"><span >va boshqalar. Lichinkasi va voyaga yetmagan urg‘ochisi novda va mevalardagi shirani so‘rib oladi, shu joylarda qizil dog‘ qoladi, bu ayniqsa, mevalarda ko‘rinib turadi. Qalqondor 1 yoshida daraxt tanasida qishlaydi. Bahorda uyg‘onib, 25-30 kundan keyin voyaga yetadi, urg‘ochisi erkagi bilan ko‘shilgandan keyin 1 oydan so‘ng lichinka tug‘a boshlaydi, urg‘ochisi 100-200 tagacha tu<span style="letter-spacing:-0.3pt">g‘<span style="letter-spacing:-0.3pt"><span >adi. Lichinkalarining tug‘ilishi 40-46 kungacha davom etadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari: </b> </i><i> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">kech kuz yoki erta bahorda, daraxt kurtak chiqarmasdan oldin<span style="letter-spacing:normal">qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k. Qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash: </b> </i>Ovipron, 2000(800 g/l k.e.) 10-15 l/ga,Bi-58 (yangi), 40% em.k. 1,0-1,5 l/ga, Karbofos,50% 1 ga - 1,0-3,0 l/ga., Bagira, 20 % em.k. 0,3-0,4 l/ga, Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, sarf me’yorlarda kimyoviy ishlov o‘tkazish. </p><p></div>`;  
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
        source={require("./m_html_3ce187c89ad9cbc.jpg")} />

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
        source={require("./m_html_20e507052960f972.gif")} />
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
        source={require("./m_html_9c39e0f4213b7105.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
