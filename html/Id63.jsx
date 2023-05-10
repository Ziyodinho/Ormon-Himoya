import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b>Pista po‘stloqxo‘ri  </b><b>- </b>(фисташковый<i> </i>заболонник<i>– Chectoptelius vestitus  </i>Rey.<i>) </i>. Pista daraxtining eng xavfli zararkunandasi, O‘zbekistonning pista o‘sadigan hamma xududlarida keng tarqalgan. Bizning mamlakatimizdan tashqari MDX mamlakatlari, Qozog‘iston, Tojikiston, Qrim va Kavkazda hamuchraydi. Lichinkasi pistani po‘stlog‘ini kemirib zararlaydi, voyaga yetgan qo‘ng‘iz pista kurtaklarini teshib oziqlanadi. Bu zararkunanda lichinkalik va voyaga yetgan stadiyasida qishlab qoladi. Qo‘ng‘izlar aprel oyining oxirida uchib chiqadi va iyun oyigacha chiqishi davom etadi Shu vaqtda kishlagan lichinkalar g‘umbakka aylanadi, g‘umbakka aylanishdan oldin 3-4 x 2 mm kattalikda o‘ziga beshikcha yasaydi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.59cm;">Yosh qo‘ng‘izlari iyun oyida uchib chiqish uchun po‘stloqni 1,5mm kattalikda teshib chiqadi. Qo‘shimcha oziqlanagan urg‘ochi qo‘ng‘iz tuxum qo‘yishni boshlaydi, tuxumini o‘zi yasagan yo‘lak chetlariga qo‘yadi. Bu zararkunanda bir yilda bita avlod beradi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Qarshi kurash choralari </b> </i><b>: </b></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:-0.1pt"><i><b>Agrotexnik kurash: </b> </i><span style="letter-spacing:-0.1pt">daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k. Fitosanitar kurash: qurigan shox<span style="letter-spacing:-0.1pt">, po‘stloq <span style="letter-spacing:-0.1pt">va daraxtlarni kesib yo‘qotish.Kuzatish, ko‘payishini oldini olish, tarqalishiga yo‘l qo‘ymaslik, o‘z vaqtida zararlangan daraxtlar va shoxlarni qirqib tashlash.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash: </b> </i>Fufanon,57% e.k. 3,0 l/ga,Karbofos,50 % em.k.-3,0l/ga,<span style="letter-spacing:-0.1pt">Politrin gold, 44 % em.k. 1,0 l/ga, preparatlari sarflanadi.</p><p></div>`;  
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

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
