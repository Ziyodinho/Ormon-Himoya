import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;"><b>Qarag‘ay tunlami</b><b>– </b><i>Panolis Jlammed Schij </i><i>. </i><i>J </i><i>. </i></p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;margin-bottom:0.21cm;">Kechasi uchadigan kapalak. Qanotlarining o‘lchami 30-35 mm. Qanoti va ko‘kragining asosiy rangi qo‘ng‘ir rangdan ko‘kish-jigarrang holatga o‘zgarib turadi. Mo‘ylovlari tukli, bo‘g‘imlardan iborat bo‘lib, tashqi tomoni arrasimon. Urg‘ochisining qorni kulrang-sariq, oldingi qanotlarida tiniq, ba’zan to‘q rangli yirik nuqtalari mavjud. Qanotlari chetida zigzagsimon chiziqlari bor. Orqa qanotlari xira kulrang. Kapalaklar qanotlarini yig‘ib o‘tirganda qarag‘ay po‘stloqlaribilan moslashib ketadi. Shunda ular ko‘zga tashlanmaydi. Tuxumi yassi sharsimon, o‘rtasida qisman chuqurchasi bor. Avvalroq keyinroq binafsha-jigarrang ko‘rinishda. O‘lchami 0,6-0,8 mm. G‘umbagi yaltiroq jigarrang, uzunligi 16-18 mm. Bir yoshli lichinkalari<span >ning tana uzunligi 2-3 mm, sariq-yashil rangli, boshi sariq. Katta yoshli lichinkalarining uzunligi 37-40 mm. Orqa tomonida keng, uzun oqyo‘l<span >lari bor. Qarag‘ay tunlami lichinkalari asosan oddiy qarag‘ayning kushandasi hisoblanadi. Kapalaklarningtabiatga uchib chiqishi geografik joylashuvga va iqlimga bog‘liq holda mart oyi oxirlaridan (issiq o‘lkalarda) iyun oyi boshlarigacha (sovuq o‘lkalarda) davom etadi.</p><p  align="justify" >Asosiy uchib chiqish vaqti aprel oyi oxirlari va may oyi boshlarida kuzatiladi. Kapalaklar quyosh botgandan keyin uchib chiqadi va ko‘pchiligi daraxtlar tepasi bo‘ylab 30-45 minut davomida harakatlanadi. Ularningjuftlashishi kechasi bo‘lib o‘tadi. Urug‘langan urg‘ochi kapalak qarag‘ay igna barglarining ostki tomoniga 2-10 tadan qilib tuxum qo‘yadi. Taxminan 14-15 kundan keyin tuxumchalardan yosh lichinkalar paydo bo‘ladi va igna barglarni kemira boshlaydi. Katta yoshli lichinkalar qarag‘ay barglarini butunlay yeb qo‘yadi. Lichinkalar o‘z rivojlanishi davomida besh yosh yashaydi. Lichinkalar taxminan 4-5 hafta oziqlanib, keyin o‘rmon chirindi qoplami bilan tuproqning mineral qoplami o‘rtasida g‘umbakka aylanadi. Qarag‘ay tunlami yevropa va Osiyoning oddiy qarag‘ay o‘sgan hamma xududlarida keng tarqalgan. Rossiyaning yevropa qismida o‘rmon va o‘rmon dasht zonalarida, Sibirda, shimoliy Mongoliyada, shimoliy-sharqiy Xitoyda, Koreya va Yaponiyada, shuningdek, Markaziy Osiyoning tog‘ zonalarida uchraydi. Ular asosan 30-60 yillik qarag‘ayzorlarni zararlaydi.</p><p  align="justify" ><b>Kurash choralari: </b></p><p  align="justify" ><i><b>Agrotexnik kurash: </b> </i>qator oralariga ishlov berish, begona o‘tlarni yo‘qotish, yaxob suvlarni berish.</p><p  align="justify" ><i><b>Kimyoviy kurash: </b> </i><i> </i>Varrior, 13 % s.e.k., 0,1-0,2 l/ga, Tayfun plyus, 10 % n.kuk. 0,5 – 0,6 kg/ga,<i> </i>Nurell-D, 55 % em.k., 1,5 l/ga<i>, </i>Fufanon, 57 % 1,5-2,0 l/ga,<i> </i>Detsis, 2,5% s.e.k. 0,5-1,0 l/ga, Karbofos, 50 % 1,0-3,0 l/ga., Aykon miks, 20 % s.d.g. 0,4 kg/ga sarf – me’yorda qo‘llash.</p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.26cm;"><i><b>Biologik kurash:  </b> </i>Bioslip BT, n.kuk. 2,0-3,0 kg/ga,<i> </i>Lepidobaktotsid,J (Ba-2000 yeA/g)2-3 A; Lepidotsid SK-M, SK (BA-2000 yeA/mg) 3 (A) mikrobiopreparatlari qo‘llaniladi.</p><p></div>`;  
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
        source={require("./i_html_16a3de12640556aa.jpg")} />

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
        source={require("./i_html_57c51ea1900b33aa.jpg")}/>

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
        source={require("./i_html_44a3e8716d3c462d.gif")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
