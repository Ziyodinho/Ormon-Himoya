import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style=""><span style="letter-spacing:-0.2pt"><b>Halqachi pilla qurt  </b><span style=""><span style="letter-spacing:-0.2pt"><b>- </b><span style="letter-spacing:normal"><span style="letter-spacing:-0.2pt">(горный кольчатый шелкопряд<span style="letter-spacing:normal"><span style="letter-spacing:-0.2pt"><b> </b><span style="letter-spacing:normal"><span style="letter-spacing:-0.2pt"><b>– </b><span style="letter-spacing:normal"><i><span style="letter-spacing:-0.2pt">Malacosoma Parallela </i><span style="letter-spacing:normal"><i><span style="letter-spacing:-0.2pt"> </i><span style=""><span style="letter-spacing:-0.2pt">Stgr<span style=""><span style="letter-spacing:-0.2pt">. <span style=""><span style="letter-spacing:-0.2pt">)<span style=""><span style="letter-spacing:-0.2pt">. <span style="letter-spacing:normal">Bu zararkunanda O‘zbekiston, Tojikiston, Turkmaniston (Kopet<span style="letter-spacing:normal"><span style="letter-spacing:normal">tog‘), Qirg‘iziston, Janubiy-Sharqiy Qozog‘iston va Shimoliy Eron o‘rmonzorlarida keng tarqalgan bo‘lib, ayniqsa tog‘li o‘rmonlar va yovvoyi yong‘oq mevali o‘rmonzorlarda ko‘p uchraydi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:normal"><span style="letter-spacing:-0.2pt">Kapalakning asosiy rangi sariq-qo‘ng‘ir. Erkagining qanotlari o‘lchami 30-32 mm. mo‘ylovlari taroqsimon. Urg‘ochisi yirikroq va baquvvatroq. Qanotlari o‘lchami 36-40 mm. Oldingi qanotlari och sariq yoki qizg‘ish jigar-rang va ko‘ndalang yo‘l-yo‘l chiziqlari mavjud. Orqa qanotlari taniq-sariq rangda, ko‘ndalang<span style="letter-spacing:normal"><span style="letter-spacing:-0.2pt">chiziqlari yo‘q. Katta yoshli hasharotning rangi juda o‘zgaruvchan. Yosh kapalak qurti qora rangda, o‘lchami 2 mm. Katta yoshli kapalak qurti chiroyli kelishgan, uzunligi 40-45 mm, yumshoq va siyrak tuklar bilan qoplangan. Asosiy rangi kul rang-ko‘kish. G‘umbagi qo‘ng‘ir qoramtir, yumshoq, jigar rang tuklar bilan qoplangan, uzunligi taxminan 20 mm. Tuxumlari yumaloq ko‘kish-kul rang, tepasi oqish rangda.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:normal">Zararkunanda asosan mevali daraxtlar (olma, nok, olxo‘ri, olcha, behi, pista, bodom) bilan, shu bilan birga keng yaproqli daraxt turlari (eman, qayin, nama’tak, terak, tol) bilan ham oziqlanadi. Bu kapalak tabiatda iyun va iyul oylarida paydo bo‘ladi. Ular kunduzi daraxt tanalarida o‘troq hayot kechiradi va ommaviy ko‘payishi eski devorlarda o‘tadi. Ular faqat kechasi uchadi. Yirik va og‘ir vazmin urg‘ochisi kam harakat. Erkagi harakatchan, ko‘p uchuvchi, ko‘pincha yorug‘lik tomon harakatlanadi. Urg‘ochisi juftlashgandan so‘ng taxminan bir xaftadan keyin tuxum qo‘ya boshlaydi. Urg‘ochi kapalak bir-ikki yillik butoqlarni o‘rab (xalqa qilib) aylantirib tuxum qo‘yadi. Bitta xalqada bir-biri bilan mahkam bog‘langan 150-400 dona tuxum bo‘lishi mumkin. Ko‘payish generatsiyasi bir yillik.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><span style="letter-spacing:-0.2pt">Urg‘ochisi o‘rtacha 300 dona tuxum qo‘yadi. Tuxumlar shu holatda qishlaydi. Kapalak qurti kelgusi yil bahor oyida shu tuxumlardan chiqadi. Tuxumdan chiqqan qurtlar darhol barg yozayotgan novdalarga qarab ko‘tariladi. Ularning oziqlanishi, ayniqsa, issiq quyoshli kunlarda juda faol bo‘ladi va shu davrda ular juda tez o‘sadi. Ular yomg‘irli kunlarda harakatsiz va ovqatsiz tinch yotadi. Lichinkalarning tuxumdan chiqishdan to g‘umbakka aylanguncha bo‘lgan vaqt 38-41 kunga cho‘ziladi. Katta yoshli qurtlar iyun oyida devor yoki po‘stloq yoriqlarida, ayrim hollarda o‘rmon chirindilari ostida g‘umbakka aylanadi. Kapalaklarning yangi avlodi iyun oyining oxiri va ko‘pincha iyul oyida paydo bo‘ladi. Urg‘ochilari juftlashgach qisqa vaqt ichida tuxum qo‘yadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Halqachi pilla qurti issiq iqlimli o‘lkalarda tarqalgan zararkunandalar qatoriga kiradi. Shuning uchun bu zararkunanda yevropaning janubiy viloyatlarida ko‘p uchrab, ommaviy ko‘paygan vaqtlarda katta maydonlarda eman ixotazorlariga ziyon yetkazadi. Bundan tashqari bu zararkunandaning<span style="letter-spacing:normal"><i>M. </i><span style="letter-spacing:normal"><i>Neustria </i><span style="letter-spacing:normal"><i> </i><span style="letter-spacing:normal">turi shimoliy viloyatlarda, shu jumladan Rossiyaning yevropa qismida, Uzoq Sharq, Xitoy, Koreya, Yaponiya, Ural va Qrimning bargli o‘rmonlarida, tog‘li zonalarida ko‘p uchrab katta nobudgarchiliklarga olib keladi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><i><b>Qarshi kurash choralari: </b> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal"><i><b> </b> </i><span style="letter-spacing:normal"><i>sifatida </i><span style="letter-spacing:normal">qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><i><b>Kimyoviy kurash </b> </i>usul sifatida daraxtlarga Imitrin, 20 sus.k., 0,3-0,4 l/ga, Bagira 20% s.e.k. - 0,3 l/ga., Karbofos 50% em.k. 0,6-1,0 l/ga yoki Siperfos 55% k.e. -1,0 l/ga preparatidan biri qo‘llaniladi. </p><p align="center" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;margin-bottom:0.21cm;"><span style=""><span style="letter-spacing:-0.2pt"><span style=""><span style="letter-spacing:-0.2pt"><b>Halqachi pilla qurti </b></p><p></div>`;  
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
        source={require("./m_html_616140a5783671d1.gif")} />
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
        source={require("./m_html_8886c4dde6f47394.jpg")}/>

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
