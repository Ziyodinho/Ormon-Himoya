import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt"><b>Simqurtlar </b><span style="letter-spacing:-0.3pt">- (щелкуны - E<span style="letter-spacing:-0.3pt"><i>lateidae </i><span style="letter-spacing:-0.3pt">) xar xil turlarga mansub qarsildoq qo‘ng‘izlarning generatsiyasi 2-5 yil davom etadi. Ularning ba’zi turlari esa lichinkalik stadiyasida qishlaydi. Qo‘ng‘izlar tuxumini tuproqqa ko‘yadi<span style="letter-spacing:-0.3pt">.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-top:0.21cm;margin-bottom:0.21cm;"><b>Simqurt qo‘ng‘izi va lichinkasi  </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Ularning ayrimlari tuxumlarini tuproqning yuza qavatiga, ba’zilari esa 15sm chuqurlikka joylaydi. Odatda urg‘ochi ko‘ng‘izlar 130-150 tagacha<i>A </i>.<i>meliculosus </i>Cand turi esa 162 tagacha tuxum qo‘yadi. Urg‘ochi qo‘ng‘izlar tuxumlarini ko‘pincha chim bosgan yerlarga qo‘yadi va ana shu sababli ular ko‘p yillik o‘tlarga hamda yangi ekinzorlarga aylantirilgan yerlarda eng ko‘p zarar yetkazadi. Ayrim turlarining embrional rivojlanish davri bir xaftadan bir oygacha va undan ham uzoqroqqa cho‘ziladi.<i>A.meliculosus </i>Cand qo‘ng‘izlarining tuxumlari o‘rtacha harorat 23,3°Cbo‘lganida 17 kunda, 23,7°Cbo‘lganida 16 kunda va 22,3°Cbo‘lganida 19 kunda rivojlanadi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari: </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash </b> </i><i><b>: </b> </i><i> </i>Karbofos,50% 1 ga - 1,0-3,0 l/ga., Nurell-D, 55% em.k. 1,5 l/ga, Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, Amrell-D, 60 % em.k. 1,0-1,5 l/ga, Bi-58 (yangi) 40 % em.k. 1,0-1,5 l/ga sarf me’yorlarda qo‘llash. </p><p></div>`;  
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
        source={require("./m_html_b254daf6882cc735.jpg")}/>

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
        source={require("./m_html_8089e46ff5724849.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
