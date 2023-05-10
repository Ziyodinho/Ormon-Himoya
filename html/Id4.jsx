import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"><b>Simqurtlar </b><span style="letter-spacing:-0.3pt">- (щелкуны - <span style="letter-spacing:-0.3pt"><i>Elateridae </i><span style="letter-spacing:-0.3pt">)<span style="letter-spacing:-0.3pt"> h<span style="letter-spacing:-0.3pt">ar<span style="letter-spacing:-0.3pt">-<span style="letter-spacing:-0.3pt">xil turlarga mansub qarsildoq qo‘ng‘izlarning generatsiyasi 2-5 yil davom etadi. Ularning ba’zi turlari esa lichinkalik stadiyasida qishlaydi. Qo‘ng‘izlar tuxumini tuproqqa ko‘yadi<span style="letter-spacing:-0.3pt">. <span style="letter-spacing:-0.3pt">Ularning ayrimlari tuxumlarini tuproqning yuza qavatiga, ba’zilari esa 15<span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt">sm chuqurlikka joylaydi. Odatda urg‘ochi ko‘ng‘izlar 130-150 tagacha <span style="letter-spacing:-0.3pt"><span ><span style="letter-spacing:-0.3pt"><i> A.meliculosus  </i><span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt"><i> Cand  </i><span style="letter-spacing:-0.3pt">turi esa 162 tagacha tuxum qo‘yadi. Urg‘ochi qo‘ng‘izlar tuxumlarini ko‘pincha chim bosgan yerlarga qo‘yadi va ana shu sababli ular ko‘p yillik o‘tlarga hamda yangi ekinzorlarga aylantirilgan yerlarga eng ko‘p zarar yetkazadi. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;">Ayrim turlarining embrional rivojlanish davri bir xaftadan bir oygacha va undan ham uzoqroqqa cho‘ziladi.<i>A. </i><i>m </i><i>eliculosus </i><i> </i><i>Cand </i>qo‘ng‘izlarining tuxumlari o‘rtacha harorat 23,3°C bo‘lganida 17 kunda, 23,7°C bo‘lganida 16 kunda va 22,3°C bo‘lganida 19 kunda rivojlanadi.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Agrotexnik kurash: </b> </i>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i><i> </i>Zaxarli aldamchi yemlar tayyorlanib (100 kg kunjara, 2 l/ga Bi-58 40% k.e. (yangi) aralashtirilib) tuproqqa solinadi. Hamda kimyoviy Delfos, 36% em.k., 1,0 l/ga, Nurell-D, 55 % em.k., 1,5 l/ga, Fufanon, 57 % em.k., 3,0 l/ga,1,5-2,0 l/ga, Detsis, 2,5 % s.e.k. 0,5-1,0 l/ga, Karbofos, 50 % em.k., 1,0-3,0 l/ga preparatlarni sarf-me’yorlarda purkash.</p><p></div>`;  
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
        source={require("./Id4.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
