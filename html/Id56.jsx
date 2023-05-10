import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:-0.3pt"><b>Katta terak oynachisi  </b><span style="letter-spacing:-0.3pt">(Стеклянница большая тополевая -Aegeria apiformis). butun yevropa bo‘ylab tarqalgan. Shuningdek, Qrim, Kavkaz, Sibir, Ural, O‘rta Osiyo, Old Osiyo va Shimoliy Amerikada keng tarqalgan. O‘rta Osiyoda tog‘li xududlarda uchraydi. Bu kapalakning qanotlari o‘lchami 40-45 mm. Boshi sariq, ko‘kragi qora-jigarrang. Qanotlari yaltiroq, jiyaklari hoshiyalangan, oldingi tomonida qora nuqtalari bor. Lichinkalari oq-sariq rangda, orqa tomonida sezilmaydigan chizig‘i bor. Katta yoshli lichinkalarining tana uzunligi 24-25 mm. G‘umbagi to‘q-qo‘ng‘ir rangli, uzunligi taxminan 30 mm. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:0.2pt">Kapalaklarning tabiatga uchib chiqishi janubiy viloyatlarda may oyi boshlarida boshlanib iyul oyi boshlarigacha davom etadi. Urg‘ochi kapalak daraxt tanasining eng pastki qismiga po‘stloq osti va yoriqlariga bittadan tuxum qo‘yadi. Ba’zan tuproqqa ham tuxum qo‘yadi. Kapalagi 1200 ta gacha tuxum qo‘yadi. Oradan 3-4 hafta o‘tib lichinkalar chiqadi va daraxt po‘stlog‘ini teshib oziqlanishni boshlaydi. Ular yoz bo‘yi oziqlanadi. Ko‘pchilik hollarda lichinkalar daraxt po‘stlog‘ida qishlaydi. Bahorga borib, ya’ni teraklar barg yoza boshlagan vaqtda qishlovdan chiqqan lichinkalar daraxt tanasini ham teshib har tomonga qarab teshiklar (kovaklar) hosil qiladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm">Katta yoshli lichinkalar o‘zi hosil qilgan kovaklarda qishlaydi. Lichinkalarning bir qismi g‘umbak hosil qilish uchun tayyorlanadi. Bir qismi esa kelgusi bahorda yana oziqlanishni boshlaydi. Ular daraxt tanasidan tashqariga chiqadigan teshikchalar hosil qiladi. Shu teshiklarning chiqish joyi g‘umbak beshikchalari vazifasini o‘taydi. Lichinkalar shu yerda g‘umbakka aylanadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm">Katta terak oynachisi asosan daraxt tanasi zararkunandasi hisoblanadi. U terak po‘stlog‘i va yog‘ochini zararlaydi. Zararkunandaning ommaviy ko‘payishi ko‘chatxona (pitomnik) va terak plantatsiyalarida bo‘lib o‘tadi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari: </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Kimyoviy kurash: </b> </i>Difuz 48 % li sus.k. 0,5-0,7 l/ga va &quot;Dimilin&quot; 48% sus.k. 0,5 l/ga preparatlari bilan ishlov beriladi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm"><span style="letter-spacing:-0.3pt"><b>Katta terak oynachisi </b></p><p></div>`;  
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
        source={require("./m_html_bdf56f69dcb4fe5c.jpg")} />
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
        source={require("./m_html_11df1033c6ab12aa.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
