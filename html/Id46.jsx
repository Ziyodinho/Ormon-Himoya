import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:0.2pt"><b>Toq ipak qurti  </b><span style="letter-spacing:0.2pt"><b>- </b><span style=""><span style="letter-spacing:0.2pt">(<b><span style=""><span style="letter-spacing:0.2pt">непарный шелкопряд</b><b><span style=""><span style="letter-spacing:0.2pt"><i> </i></b><span style=""><span style="letter-spacing:0.2pt">-<i><span style=""><span style="letter-spacing:0.2pt">Ocneria dispar </i><i><span style=""><span style="letter-spacing:0.2pt"> </i><span style=""><span style="letter-spacing:0.2pt">L<span style=""><span style="letter-spacing:0.2pt">.<i><span style=""><span style="letter-spacing:0.2pt">) </i><span style="letter-spacing:0.2pt"></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:0.2pt">Toq ipak qurti yevropaning hamma issiq viloyatlarida (shimoliy xududlardan tashqari) tarqalib O‘rta yer dengizi orqali shimoliy Afrikagacha bo‘lgan o‘rmonzorlarda uchraydi. Shuningdek, Shimoliy Mongoliya, Xitoy, Koreya va Yaponiyada ham malum. <span style="letter-spacing:0.2pt"><span style="letter-spacing:0.2pt">Rossiya yevropa qismining hamma joyida, Sank-Peterburg, Volgograd, Perm, Qrim, Kavkaz va Uraldagi hamma o‘rmonzorlarda uchraydi. Bundan tashqari Sibir, Uzoq Sharq, Qozog‘iston va Markaziy Osiyoda (O‘zbekiston, Tojikiston, Qirg‘iziston) ham keng tarqalgan bo‘lib, o‘rmon xo‘jaliklari faoliyatiga katta zarar keltiruvchi eng xavfli zararkunandalardan biri hisoblanadi. <span style="letter-spacing:0.2pt"><span style="letter-spacing:0.2pt">Bu hasharotning erkagi qanotlari o‘lchami 35-45 mm, urg‘ochisiga nisbatan qoramtir, oldingi qanotlarn qoramtir-kulrang. To‘lqinsimon chiziqlari bor. Orqa qanotlari bir xil rangda, ya’ni qo‘ng‘ir. Qorni ensiz, mo‘ylovlari keng taroqsimon yoki patsimon. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Urg‘ochisi yirik qanotlari 55-75 mm, ikki juft qanotlari ham xira oq rangda. Oldingi qanotlarida zigzagsimon qora chiziqlari mavjud. Urg‘ochisining tanasi yirik, qorin ancha yo‘g‘onlashgan.Tuxumchalari avval och pushti rang, keyinroq to‘k kulrang, yumaloq, to‘p-to‘p bo‘lib joylashadi va sariq-jigar rang tukchalar bilan qoplanadi (onasi tomonidan) Tukchalar tuxumni sovuqdan saqlaydi. Shunday holatda tuxumchalar qishlab chiqadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;">Bahorga borib, aprel oyi boshlarida, tuxumlardan lichinkalar chiqadi.</p><p align="justify" >Kapalak qurti tanasi tsilindirsimon, boshi yumaloq, ikkita jigar rang chizig‘i mavjud. Katta yoshli kapalak qurti uzunligi 40-80 mm. Asosiy rangi sariq-jigar rang. Yosh qurtlar asosan kunduzi oziqlanadi. Katta yoshli qurtning oziqlanishi asosan kechasi o‘tadi. Ommaviy ko‘payishi esa kunduzi boshlanadi. Oziqalanish holati yaxshilangandan keyin 70-80 kunda, janubiy issiq viloyatlarda 45-50 kundan keyin g‘umbakka aylanishga tayyor bo‘ladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;">Bu kapalak tabiatda avgust oyining oxiri sentyabr oyining boshlarida (Markaziy Osiyoda iyul oyi o‘rtalarida) paydo bo‘ladi. Erkagi urg‘ochisidan oldinroq uchib chiqadi. Urg‘ochisi og‘ir vazmin ko‘pincha uchmaydi va daraxt po‘stlog‘ida o‘troq holda hayot kechiradi, ba’zan kechki payt uchib chiqib erkagini axtarib topadi va o‘ziga jalb qiladi.Urug‘langan urg‘ochisi po‘stloqning ostki tomoniga tuxum ko‘yadi. Bitta urg‘ochi kapalak bir mavsumda 250-500 ta tuxum qo‘yishi mumkin. Toq ipak qurti ko‘pgina manzarali va mevali daraxtlarning asosiy zararkunandasidir. <span >Jumladan, eman (dub), qayrog‘och, tol, terak, zarang, olma, o‘rik va boshqa butasimonlarni zararlaydi. Ba’zan igna<span >barglilarni ham zararlaydi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Qarshi kurash choralari: </b> </i><i> </i></p><p align="justify" style="orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><i><b>Kimyoviy kurash </b> </i>usul sifatida daraxtlarga Bagira 20% s.e.k. -0,3 l/ga yoki Siperfos 55% k.e. -1,0 l/ga preparatlari qo‘llaniladi. Karbofos 50% em.k. 0,6-1,0 l/ga qo‘llaniladi. Biologik kurash sifatida yaydoqchi, trixogramma 3 g/ga va oltinko‘zlar 1 ga 3000 dona tarqatiladi.</p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Toq ipak qurti </b><b>kapalagi va lichinkasi </b></p><p></div>`;  
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
        source={require("./m_html_7d66a48b176ffc5b.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
