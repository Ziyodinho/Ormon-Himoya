import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Qo‘ng‘ir dog‘lanish ( </b><i><b>Gnomonia leptostyla </b> </i><b>) kasalligi </b><b>va uning </b><b>zarari </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Yong‘oq daraxti kasalliklari </b><b>dan </b>(qo‘ng‘ir dog‘lanish, marssoninoz; un-shudring, oq dog‘lanish, bakterial kuyish) himoya qilishda<i> Agrotexnik qoidalarga </i>rioya qilish, qurigan novdalarni kesib turishzarur.To‘kilgan barglarni va mevalarni to‘plab yo‘qotish, daraxt tagidagi va atrofidagi tuproqni ag‘darish va o‘g‘itlash tavsiya qilinadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash choralari </b> </i>kasallik kuchli rivojlanishi kutilganda birinchi belgilari ko‘rinishi bilanoq, 1% li Bordo suyuqligi purkash lozim. Qo‘zg‘atuvchining qishlovchi bosqichiga qarshi kuzda barglar to‘kilganidan keyin yoki erta bahorda (barglar yozilishigacha) 3-4% li Bordo suyuqligi (daraxt yaxshilab ho‘llangunicha); mis oksixlorid 90% n.kuk., 0,3-0,5% li eritma; temir kuporosi 53% n.kuk., 2,0-3,0% li eritma, 30-40 kg/ga me’yorida daraxtlarga va ostidagi tuproqqa ishlov beriladi. </p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Yong‘oq daraxtini bakterioz kasalligi </b><b>va uning </b><b>zarari </b></p><p></div>`;  
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
        source={require("./m_html_4f7b823a967d06e1.jpg")}/>

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
        source={require("./m_html_515fb4710a1cb38f.jpg")} />

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
        source={require("./m_html_d385b3fa41024a93.jpg")} />
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
        source={require("./m_html_fbc7d1320688e50c.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
