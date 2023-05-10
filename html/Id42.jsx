import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b>Terak bargxo‘ri </b>(тополевый листоед-<i>Melasoma populi  </i>L<i>. </i>).</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;">Terak bargxo‘ri juda ko‘p hududlardauchraydi,ya’ni Rossiyaning yevropa qismida, Qrimda, Kavkazda, Qozog‘istonda, O‘zbekistonda va Sibirda keng tarqalgan. Terak bargxo‘ri Markaziy Osiyoda terak yetishtiruvchn xo‘jaliklar uchun eng xavfli zararkunanda hisoblanadi. Terak bargxo‘ri vodiy o‘rmonlaridagi terak hamda tollarning eng xavfli zararkunandalaridan biri hisoblanadi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt">Qo‘ng‘iz po‘stloq yoriqlarida qishlaydi. Qishlab qolgan qo‘ng‘izlar mart oxirida chiqadi. Qishlovdan chiqqan qo‘ng‘iz 8-10 kundan so‘ng tuxum qo‘ya boshlaydi, uning tuxum qo‘yish davri may oyining oxiriga kadar davom etadi. Tuxum qo‘yilganidan so‘ng 4-5 kun o‘tgach lichinkalar chiqa boshlaydi va ularning rivojlanishi 10-12 kunga cho‘ziladi. Lichinkalar rivojlanish davrining oxirida oziqlanishdan to‘xtaydi, so‘rg‘ichlari bilan barglarga yopishadi va shu joyda g‘umbakka aylanadi. G‘umbaklik davri 4-5 kun davom etadi. G‘umbakdan chiqqan yosh urg‘ochi qo‘ng‘izlar 10-12 kundan so‘ng tuxum qo‘ya boshlaydi. Ikkinchi bo‘g‘in rivojlanish davri 16-17 kun davom etadi. Ikkinchi bo‘g‘in qo‘ng‘izlari iyul oyining ikkinchi yarmigacha oziqlanib avgust boshida uyquga ketadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span >Bu hasharotning ikkala turi ham terak barglarida rivojlanadi. Ikkala turining biologiyasi ham juda o‘xshash. Qo‘ng‘izlar yerda, ya’ni to‘kilgan barglar ostida qishlab chiqadi. Urug‘langanurg‘ochi<span >hasharot barglarning ostki tomoniga tuxum qo‘yadi. Ba’zi xollarda daraxt poyalari yoki novdalariga 25-35 tadan qilib tuxum qo‘yadi. Tuxumlari avval to‘q-sariq-kizil, keyinrok esa jigar rangga aylanadi. M.S.Gershun ma’lumotlariga ko‘ra embrional rivojlanishi mart oyida 10-12 kun aprel oyida 8-12 kun, may oyida 6-9 kun, i<span >yun oyi<span >da esa<span style="letter-spacing:normal"><span >4-7<span style="letter-spacing:normal"><span >kun davom etadi. Tabiatda bu hasharot erta bahorda, ya’ni joylashgan joyiga bog‘liq holda mart va aprel oylarida paydo bo‘ladi (janubiy viloyatlarda).Qo‘ng‘izlarva uning lichinkalari barg bilan oziqlanadi. Bu hasharotning ko‘payishi juda tez davom etadi va katta-katta maydonlarda terakzorlar bargini yeb bitiradi. </p><p align="justify" style="orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari </b> </i>:<span style="letter-spacing:normal"><i><b> </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash </b> </i>sifatida Karate, 5 % 0,5-0,7 l/ga, Imtirin, 20 % sus.k. 0,4 l/ga, Bagira 20% s.e.k. - 0,3 l/ga va Karache 5 % em.k. - 1 ga - 0,5-0,7 l. kimyoviy preparatlar qo‘llash tavsiya etiladi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><span style="letter-spacing:-0.3pt"><b>8-rasm. </b><span style="letter-spacing:-0.3pt"><b>Terak bargxo‘ri </b><span style="letter-spacing:-0.3pt"><b>va uning zarari </b></p><p></div>`;  
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
        source={require("./m_html_ea1d94c81cdf5f09.jpg")} />

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
        source={require("./m_html_a6fbbabdf2cf5cbc.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
