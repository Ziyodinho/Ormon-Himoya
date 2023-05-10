import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b>Toq ipak qurti  </b><b>– </b><i>Ocneria dispar </i><i>L </i>.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;">Toq ipak qurti<b> </b><b>- </b>(непарный шелкопряд<b><i> </i></b>-<i>Ocneria dispar  </i><i> </i>L.<i>) </i>Toq ipak qurti yevropaning hamma issiq viloyatlarida (shimoliy xududlardan tashqari) tarqalib O‘rta yer dengizi orqali shimoliy Afrikagacha bo‘lgan o‘rmonzorlarda uchraydi. Shuningdek, Shimoliy Mongoliya, Xitoy, Koreya va Yaponiyada ham malum.Rossiya yevropa qismining hamma joyida, Sankt-Peterburg, Volgograd, Perm, Qrim, Kavkaz va Uraldagi hamma o‘rmonzorlarda uchraydi. Bundan tashqari Sibir, Uzoq Sharq, Qozog‘iston va Markaziy Osiyoda (O‘zbekiston, Tojikiston, Qirg‘iziston) ham keng tarqalgan bo‘lib, o‘rmon xo‘jaliklari faoliyatiga katta zarar keltiruvchi eng xavfli zararkunandalardan biri hisoblanadi.Bu hasharotning erkagi qanotlari o‘lchami 35-45 mm, urg‘ochisiga nisbatan qoramtir, oldingi qanotlarn qoramtir-kulrang. To‘lqinsimon chiziqlari bor. Orqa qanotlari bir xil rangda, ya’ni qo‘ng‘ir. Qorni ensiz, mo‘ylovlari keng taroqsimon yoki patsimon. Urg‘ochisi yirik qanotlari 55-75 mm, ikki juft qanotlarn ham xira oq rangda. Oldingi qanotlarida zigzagsimon qora chiziqlari mavjud. Urg‘ochisining tanasi yirik, qorin ancha yo‘g‘onlashgan.Tuxumchalari avval och pushti rang, keyinroq to‘k kulrang, yumaloq, to‘p-to‘p bo‘lib joylashadi va sariq-jigar rang tukchalar bilan qoplanadi (onasi tomonidan) tukchalar tuxumni sovuqdan saqlaydi. Shunday holatda tuxumchalar qishlab chiqadi.</p><p  align="justify" >Bahorga borib, aprel oyi boshlarida, tuxumlardan lichinkalar chiqadi.</p><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;">Kapalak qurti tanasi tsilindrsimon, boshi yumaloq, ikkita jigar rang chizig‘i mavjud. Katta yoshli kapalak qurti uzunligi 40-80 mm. Asosiy rangi sariq-jigar rang. Yosh qurtlar asosan kunduzi oziqlanadi. Katta yoshli qurtning oziqlanishi asosan kechasi o‘tadi. Ommaviy ko‘payishi esa kunduzi boshlanadi. Oziqalanish holati yaxshilangandan keyin 70-80 kunda, janubiy issiq viloyatlarda 45-50 kundan keyin g‘umbakka aylanishga tayyor bo‘ladi.</p><p  align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm;">Bu kapalak tabiatda avgust oyining oxiri sentyabr oyining boshlarida (Markaziy Osiyoda iyul oyi o‘rtalarida) paydo bo‘ladi. Erkagi urg‘ochisidan oldinroq uchib chiqadi. Urg‘ochisi og‘ir vazmin ko‘pincha uchmaydi va daraxt po‘stlog‘ida o‘troq holda hayot kechiradi, ba’zan kechki payt uchib chiqib erkagini axtarib topadi va o‘ziga jalb qiladi.Urug‘langan urg‘ochisi po‘stloqning ostki tomoniga tuxum ko‘yadi. Bitta urg‘ochi kapalak bir mavsumda 250-500 ta tuxum qo‘yishi mumkin. Toq ipak qurti ko‘pgina manzarali va mevali daraxtlarning asosiy zararkunandasidir. <span >Jumladan, eman (dub), qayra<span >g‘och, tol, terak, zarang, olma, o‘rik va boshqa butasimonlarni zararlaydi. Ba’zan igna<span >barglilarni ham zararlaydi.</p><p  align="justify"><b>Kurash choralari: </b></p><p  align="justify" ><i><b>Agrotexnik kurash: </b> </i>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p  align="justify" ><span ><i><b>Kimyoviy kurash: </b> </i><span ><i> </i><span >Detsis, 2,5 % s.e.k. 0,5-1,0 l/ga, Aykon miks, 20 % s.d.g. 0,4 kg/ga, Varrior, 13 % s.e.k., 0,1-0,2 l/ga, Tayfun plyus, 10 % n.kuk. 0,5 – 0,6 kg/ga,<span ><i> </i><span >Nurell-D, 55 % em.k., 1,5 l/ga<span ><i>, </i><span >Fufanon, 57 % 1,5-2,0 l/ga,<span ><i> </i><span >sarf – me’yorda qo‘llash.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.26cm;"><i><b>Biologik kurash: </b> </i><i> </i>Bioslip BT, n.kuk. 2,0-3,0 kg/ga,<i> </i>Lepidobaktotsid,J (Ba-2000 <span >YeA/g)2-3 A; Lepidotsid SK-M, SK (BA-2000 <span >YeA/mg) 3(A) mikrobiopreparatlari qo‘llaniladi.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-top:0.21cm;margin-bottom:0.21cm;"><b>9-rasm. </b><b>Toq ipak qurti </b><b>-  </b><i><b>Ocneria dispar</b> </i><i><b></b><b>L</b><b>. </b><p><br></div>`;  
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
        source={require("./i_html_f89c51aa8ee68007.jpg")} />

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
        source={require("./i_html_c4b049a601797a61.jpg")}/>

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
        source={require("./i_html_f760f2ac62184861.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
