import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><b>Tol bargxo‘ri </b>(ивовый листоед - <i>Plagiodera versicolor Laich.).  </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Tol bargxo‘ri voyaga yetgan hasharot holida qishlab qoladi. Qishlashdan daraxtlar barg yozgan paytda chiqadi. Qishdan chiqqan qo‘ng‘iz biroz oziqlangandan keyin, tol bargining orqa tomoniga, to‘dalab tuxum qo‘yadi. Tuxum qo‘yishi aprel oyiga to‘g‘ri keladi. Qo‘ng‘izning rangi yashil-kul rang tusda bo‘lib, yaltirok, kattaligi 4-7 mmni tashkil etadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari </b> </i><b>: </b></p><p align="justify" style="orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash </b> </i>sifatida Karate 5 % em.k.–0,5 l/ga va Bagira 20% s.e.k. -0,3 l/ga, Atilla, 5 % em.k. 0,4-0,8 l/ga, Zalon, 35% em.k. 2,0-3,0 l/ga, Tanrek, 20 % em.k. 0,3-0,4 l/ga kimyoviy preparatlaribilanva Lepipobaktotsid, J (Ba-2000 yeA/g) 2-3 A mikrobiopreparati qo‘llaniladi.</p><p></div>`;  
const Id = () => {
  const windowWidth = useWindowDimensions().width;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      padding: 20,
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
<Image style={{ 
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
        source={require("./m_html_7956df991542dc39.jpg")}/>

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
        source={require("./m_html_41952b9ad83e242e.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
