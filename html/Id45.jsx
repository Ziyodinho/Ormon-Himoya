import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b>Tut odimchisi </b>(тутовая пяденица - <i>Apocheima cinerarus Efsch </i>.). Bu zararkunanda o‘rik, bexi, shaftoli, olxo‘ri, tog‘olcha, olma, jiyda, akatsiya va boshqa bir qancha daraxtlarning kurtak va barglarini yeb zarar keltiradi, ayniqsa tut daraxtini. Daraxt tanasining deyarli hamma joyida uchraydi. Erkagini qanot yozgandagi kattaligi 35 mm, urg‘ochisi qanotsiz.</p><p align="justify" style="orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari: </b> </i><span style="letter-spacing:normal"><i><b> </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Kimyoviy kurash </b> </i>usul sifatida daraxtlarga Atilla, 5% em.k. 0,5-0,8 l/ga, Siperfos 55% k.e. -1,0 l/ga yoki Bagira 20% s.e.k. -0,3 l/ga preparatlari qo‘llaniladi. Karbofos 50% em.k. 0,6-1,0 l/ga qo‘llaniladi. Biologik kurash sifatida yaydoqchi, trixogramma 3 gr/ga va oltinko‘zlar 1 ga 3000 dona tarqatiladi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Tut odimchisi </b><b>kapalagi va lichinkasi </b></p><p></div>`;  
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
        source={require("./m_html_2f3b3863613386d9.jpg")} />

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
        source={require("./m_html_efaebf56096b918c.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
