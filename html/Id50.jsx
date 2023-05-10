import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><b><span style="">Turkiston zarkapalagi</b><span style=""><span style=""> (Туркестанская златагузка<i><b><span style=""></b> </i><span style="">–<i>Euproctis </i><i> </i><i>Korghalica </i>M<span style="letter-spacing:1.0pt"><span style="">ooro<span style="letter-spacing:1.0pt"><span style="">. <span style="letter-spacing:1.0pt"><span style="">)<span style="letter-spacing:1.0pt"><i><span style="">. </i><span style="letter-spacing:1.0pt"><i><span style=""> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Turkiston zarkapalagi Tojikiston, O‘zbekiston, Janubiy Qozog‘iston va Qirg‘izistonning vodiy va tog‘ o‘rmonlarida keng tarqalgan bo‘lib, o‘rmon xo‘jalik o‘simliklariga jiddiy zarar yetkazadi. <span style="letter-spacing:normal"><span style="letter-spacing:normal">Kapalak qanotlari o‘lchami 32-38 mm. Ko‘kragi va oldingi qanotlari tiniq yaltirok, o‘rtasida bitta yirik to‘q-qizg‘ish dog‘i bor. Qanotlari yuqori chekkasida esa 8<span style="letter-spacing:normal"><span style="letter-spacing:normal">ta to‘q-qoramtir dog‘lari bor. Orqa qanotlari yumshoq. Qornining oxirida bir to‘p z<span style="letter-spacing:normal">ap<span style="letter-spacing:normal">g<span style="letter-spacing:normal">a<span style="letter-spacing:normal">o‘xshash tovlanuvchi tuklari (kokili) bor. Shuning uchun u zarkapalak deyiladi. Tuxumi tiniq-sariq rangda, yumaloq shaklda. Rivojlanish bosqichi 18-23 kun davom etadi. Lichinkalari oxirgi yoshida 35-37 mm g<span style="letter-spacing:normal">a ye<span style="letter-spacing:normal">tadi va ko‘kish qora rang hosil qiladi. Lichinkalar bezovta qilinganda o‘zidan suyuqlik ajratadi. <span style="letter-spacing:normal">A<span style="letter-spacing:normal">ga<span style="letter-spacing:normal">p<span style="letter-spacing:normal">shu suyuqlik odam terisiga tushsa yokimsiz qichishish hosil qiladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">G‘umbagi to‘q-jigar rangli bo‘lib, sariq-kulrang pillasining ichida joylashgan bo‘ladi. G‘umbagining rivojlanishi 15-20 kun davom etadi. Kapalak iyul oyining boshlarida uchib chiqadi. <span style="letter-spacing:normal"><span style="letter-spacing:normal">Urg‘ochisi barglarning ostki tomoniga tuxum qo‘yadi. Tuxumlarini zarsimon tuklari bilan berkitib (yopishtirib) qo‘yadi va qornining oxirgi segmentini uzib tashlab ketadi. L.E.Semenova ma’lumotlariga ko‘ra bitta tuxum uyachasida 60 tadan 200 tagacha tuxum bo‘ladi. Tuxumdan chiqqan lichinkalar barglar bilan oziqlanishni boshlaydi. Ular barglarning sirtqi epidermis qavatini kemiradi, ammo parenxema qavatiga teginmaydi. Lichinkalar kuzga borib 2-3 ta skletlashgan (qurigan) barglarni birlashtirib uyacha yasaydi va shu uyachaga kirib qishlash uchun qoladi. Ular 2-3-chi yoshida qishlashda bo‘ladi. Bahorga borib, harorat 10-<span style="letter-spacing:normal">1<span style="letter-spacing:normal">2°C<span style="letter-spacing:normal">ga yaqinlashganda qishlashdan chiqib kurtaklarga qarab harakatlanadi. Zararlangan kurtaklar barg yozmaydi va qurib qoladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:normal">Lichinkalar kunduzi oziqlanadi. Kechasi va yomg‘irli kunlarda uyalarida tinch yotadi. <span style="letter-spacing:normal"><span style="letter-spacing:normal">Turkiston zarkapalagi ko‘pchilik zararkunandalar kabi manzarali va mevali daraxtlarning kushandasidir. I.K.Maxnovskiy ma’lumotlariga ko‘ra Turkiston zarkapalagi o‘rik, shaftoli, nok, olma, bodom, olcha, olxo‘ri, gilos, malina, pista, tol, ok akatsiya, ir<span style="letter-spacing:normal">g‘<span style="letter-spacing:normal">ay va zarang kabi daraxtlarning xavfli zararkunandasi hisoblanadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari: </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal"><i><b>: </b> </i><span style="letter-spacing:normal">qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Kimyoviy kurash </b> </i>usul sifatida daraxtlarga Atilla, 5% em.k. 0,5-0,8 l/ga, Esfen-alfa, 5 % em.k 1,0 l/ga,Siperfos 55% k.e. -1,0 l/ga yoki Bagira 20% s.e.k. - 0,3 l/ga preparatlari qo‘llaniladi. Karbofos 50% em.k. 0,6-1,0 l/ga qo‘llaniladi<i>. </i></p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><span style=""> <b><span style="">Turkiston zarkapalagi</b><b><span style="">va lichinkasi</b></p><p></div>`;  
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
        source={require("./m_html_c16d958ba30eadc3.jpg")} />

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
        source={require("./m_html_bc8039f3ae99e2c8.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
