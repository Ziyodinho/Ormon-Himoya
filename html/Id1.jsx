import React from 'react';
import { Image, View, ScrollView, SafeAreaView, useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div style="text-align: justify !important;" ><p><span><b>Buzoqbosh qo‘ng‘izlari  </b><b></b><span>- (хрущи-<span><i>Melolonthinae </i><span>)</p><p  style=";line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span>O‘rmon manzarali daraxtlariga buzoqbosh qo‘ng‘izlarning uch turi: zararli buzoqbosh qo‘ng‘iz (<span><i>Polyhpylla adspersa  </i><span>Motsch.) uch tishli buzoqbosh qo‘ng‘iz (<span><i>Polyhpylla tridentata </i><span>Reit<span style=";letter-spacing:-0.1pt"><span>) va mart buzoqbosh qo‘ng‘izi (<span style=";letter-spacing:-0.1pt"><span><i>Meloontha aticta </i><span style=";letter-spacing:-0.1pt"><span>Ball.) zarar ye<span>tkazadi. Buzoqbosh qo‘ng‘izlarning lichinkalari daraxtlar ildizini kemirib, quvvatdan ketkazadi, ba’zan ko‘chatzorlarida yosh ko‘chatlarni quritib ham qo‘yadi. Buzoqbosh qo‘ng‘izlar meva daraxtlaridan tashqari tokka, manzarali daraxt va butalarga zarar yetkazadi, ba’zan buzilgan bog‘larni o‘rniga ekilgan ekinlarga ham zarar yetkazadi. Zararli buzoqbosh qo‘ng‘iz (<span><i>Polyhpylla adspersa </i><span>Motsch) <span><span>ko‘proq uchraydi.</p><p  align="center" style=";;";"><span><b>Buzoqbosh qo‘ng‘izi va lichinkalari  </b></p><p  align="justify" style=";line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span><b>Kurash choralari:  </b></p><p  align="justify" style=";line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span><i><b>Agrotexnik kurash:  </b> </i><span>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p  align="justify" style=";line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span><i><b>Kimyoviy kurash:  </b> </i><span><i> </i>Fufanon, 57 % 1,5-2,0 l/ga,<i> </i><span>Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, Karbofos, 50 % em.k., 1,0-3,0 l/ga sarf – me’yorda qo‘llash.</p><p></div>`;  
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
      
      <Image style={{ width: '100%',
  aspectRatio: 1,
  alignSelf: 'center',
  height: undefined, 
  maxWidth: '100%',
  minWidth: '100%',
  marginBottom: 20,
  borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
 }} source={require("./i_html_c43a03400d387f51.jpg")} />
      
      <Image style={{ width: '100%',
  aspectRatio: 1,
  height: undefined, 
  alignSelf: 'center',
  maxWidth: '100%',
  minWidth: '100%',
  marginBottom: 20,
  borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
 }} source={require("./Id1_1.jpg")} />
       <Image style={{ width: '100%',
  aspectRatio: 0.5,
  height: undefined, 
  alignSelf: 'center',
  maxWidth: '100%',
  minWidth: '100%',
  marginBottom: 20,
  borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
 }} source={require("./Id1.jpg")} />
      
      <Image style={{ width: '100%',  aspectRatio: 1,  alignSelf: 'center',
      maxWidth: '100%',
      width: '100%',
      height: undefined, 
      marginBottom: 20,
      minWidth: '100%',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
 }} source={require("./i_html_917ee4c1ab892591.jpg")}/>
    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
