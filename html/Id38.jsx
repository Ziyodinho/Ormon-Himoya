import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Buzoqbosh qo‘ng‘izlari  </b>- (хрущи - <i>Melolonthinae </i>)o‘rmon manzarali daraxtlariga buzoqbosh qo‘ng‘izlarning uch turi: zararli buzoqbosh qo‘ng‘iz (<i>Polyhpylla adspersa  </i>Motsch.) uch tishli buzoqbosh qo‘ng‘iz (<i>Polyhpylla tridentata </i>Reit<span style="letter-spacing:-0.1pt">) va mart buzoqbosh qo‘ng‘izi (<span style="letter-spacing:-0.1pt"><i>Meloontha </i><span style="letter-spacing:-0.1pt"><span style="letter-spacing:-0.1pt"><i>aticta </i><span style="letter-spacing:-0.1pt">Ball.) zarar yetkazadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Buzoqbosh qo‘ng‘izlarning lichinkalari daraxtlar ildizini kemirib, quvvatdan ketkazadi, ba’zan ko‘chatzorlarida yosh ko‘chatlarni quritib ham qo‘yadi. Buzoqbosh qo‘ng‘izlar meva daraxtlaridan tashqari tokka, manzarali daraxt va butalarga zarar yetkazadi, ba’zan buzilgan bog‘larning o‘rniga ekilgan ekinlarga ham zarar yetkazadi. Zararli buzoqbosh qo‘ng‘iz (<i>Polyhpylla adspersa </i>Motsch)ko‘proq uchraydi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari: </b> </i><i> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.Qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p align="justify" style="orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash: </b> </i>Bi-58 (yangi), 40% em.k. 1,0-1,5 l/ga, Karbofos,50% 1 ga - 1,0-3,0 l/ga., Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, Bagira, 20 % em.k. 0,3-0,4 l/ga sarf me’yorlarda kimyoviy ishlov o‘tkazish. </p><p></div>`;  
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
        source={require("./m_html_56f4ddf52442f0a9.jpg")}/>

      <Image style=
    {{ 
      width: '100%', 
      height: undefined,
      maxWidth: '100%',
      minWidth: '100%',
      aspectRatio: 1.7,
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
        source={require("./m_html_17169a41fde6c65.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
