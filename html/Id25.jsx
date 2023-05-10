import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.4pt"><b>Archa urug‘xo‘ri  </b><span style="letter-spacing:-0.4pt">-<span style="letter-spacing:-0.4pt"><i>Megastigmus iuniperi  </i><span style="letter-spacing:-0.4pt">Nik.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.4pt">O‘zbekist<span style="letter-spacing:-0.4pt">o<span style="letter-spacing:-0.4pt">n, Qozog‘iston, Tojikistonda uchraydi. <span style="letter-spacing:-0.4pt"><span style="letter-spacing:-0.4pt">Hasharot odatda iyul va avgust oylarigacha uchib chiqadi, ba’zida esa bu<span style="letter-spacing:-0.4pt">h<span style="letter-spacing:-0.4pt">odisa sentyabrning yarmiga qadar cho‘ziladi. Hasharot kunduzi mevaga kirgan archa daraxti atrofida uchadi va o‘z tuxumini shu yilgi archa mevasiga qo‘yadi. Bunda urg‘ochi hasharot o‘z tuxum qo‘ygichini archa mevasining etiga xali qotmagan danagiga sanchib, har qaysi danak mag‘ziga bittadan tuxum qo‘yadi. Tuxumining rivojlanishi 15-20 kun davom etadi. Avgust oyida tuxumdan chiqqan lichinkalari urug‘ning pishmagan dan<span style="letter-spacing:-0.4pt">a<span style="letter-spacing:-0.4pt">gi bilan oziqlanadi va uning ichida qishlaydi. Bahor kelishi bilan lichinkalar yana oziqlana boshlaydi va iyun oxirida mag‘izning hammasini yeb tamomlaydi. Lichinkalar iyul boshlarida danak ichida g‘umbakka aylanadi va shu oyning oxirida g‘umbakdan voyaga yetgan xasharot chiqadi. Urug‘ni 50% gacha zararlaydi. Archa urug‘xo‘ri bir yilda bitta bo‘g‘in beradi, faqat yosh lichinkalargina ypyg‘ ichida qishlaydi. </p><p  align="center" style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;margin-top:0.21cm;margin-bottom:0.21cm;"><b>Archa urug‘xo‘ri  </b><i>- </i><i><b>Megastigmus iuniperi  </b> </i><b>Nik. </b></p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><b>Kurash choralari: </b></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash </b> </i><i>: </i>Bagira, 20% s.e.k. -0,3 – 0,4 l/ga, T-34, 24,7 % sus.k. 0,3-0,4 l/ga,Imitrin,20%, sus.k., 0,5 l/ga,Alfa enerji, 24,7 % sus.k. 0,4 l/ga, Fufanon,57% em.k. 0,6-1,0 l/ga preparatlari purkash.</p><p></div>`;  
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
        source={require("./i_html_177aba2df6e2f847.jpg")}/>

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
        source={require("./i_html_a8467ef6442e970f.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
