import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><b><span style="">Turkiston tovusko‘zi </b><span style="letter-spacing:normal"><span style=""><span style="">(Туркестанская павлиноглазка<span style="">– <i><span style="">Neoris stroliczkana </i><span ><span style=""><i><span style="">schenki) </i><i><b><span style="">. </b> </i><span style="letter-spacing:normal">Bu kapalak qizg‘ish-sariq rangli, qanotlari o‘lchami 75-105 mm. Oldingi qanotlarida mayda-mayda nuqtalari (holi) bor. Tuxumlari yumaloq-ovalsimon bo‘lib, uzunligi 1-2,4 mm. eni 1-1.9 mm. Pista bargining ostki tomoniga qo‘yilgan tuxumlar, ustki tomoniga qo‘yilgan tuxumlarga nisbatan maydaroq bo‘ladi. Yangi qo‘yilgan tuxumlar tiniq-jigar rangda, vaqt o‘tishi bilan esa to‘q-jigar rang tusga kiradi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Kapalak qurti besh yosh davomida rivojlanadi va to‘rt marta po‘st tashlaydi. Lichinkalar birinchi yoshida 7 mm ga yetadi, tanasi v<span style="letter-spacing:normal">a<span style="letter-spacing:normal">boshi qora rangda, ammo, oqish tuklar bilan qoplangan bo‘ladi. Ularning tana uzunligi ikkinchi yoshida 17-19 mm, uchinchi yoshida 30 mm, to‘rtinchi yoshida esa 70-75 mm ga yetadi va tashqi rangi ham o‘zgarib, tiniq-yashil tusga kiradi. Tanasi ko‘p sonli oqish tuklar bilan qoplanadi. Kapalak qurti beshinchi yoshida rivojlanishni to‘xtatadi va tuproq ostida yoki chirindilar orasida g‘umbakka aylanish uchun daraxtdan pastga tushad<span style="letter-spacing:normal">i<span style="letter-spacing:normal">. <span style="letter-spacing:normal"><span >G‘umbagi to‘q-jigar rangli, uzunligi 30 mm dan 35 mm gacha yetadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Pillasi ovalsimon yoki cho‘zinchoq nok shaklda bo‘lib, uzunligi 45-55 mm<span style="letter-spacing:normal">,<span style="letter-spacing:normal">eni 30-35 mm bo‘ladi. Ko‘pgina hollarda pillasining ichidagi kapalakcha nobud bo‘ladi. Pilla ichidan chiqqan kapalaklar qanotlari va mo‘ylovlarini to‘g‘rilab oladi va sekin <span style="letter-spacing:normal">ac<span style="letter-spacing:normal">ta<span style="letter-spacing:normal">daraxt tanasi orqali shoxlariga ko‘tariladi. Daraxt shoxlarida ular juftlashadi va tuxum qo‘yish uchun joy axtara boshlaydi. Ular ko‘pchilik hollarda ikki yillik novdalarga qator qilib bir nechta tuxum qo‘yadi. Ba’zi hollarda ikki kator qilib qo‘yadi. Bitta qatorda 4 tadan 17 tagacha (ko‘pgina hollarda 4-8 ta) tuxum bo‘ladi. Bitta urg‘ochi kapalak 200 tagacha tuxum qo‘yishi mumkin.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal">Turkiston tovusko‘zi pistazor va ayrim keng bargli daraxtlarda uchraydigan zararkunandalardan hisoblanadi. Generatsiyasi bir yillik. Tuxum stadiyasida ikki-uch yillik novdalarda qishlaydi. <span style="letter-spacing:normal"><span >Mart oyining oxirlari va aprel oyining boshlarida qurtlar paydo bo‘ladi. Ular asosan kurtaklar va yang<span style="letter-spacing:normal">i<span style="letter-spacing:normal"><span >yozilgan barglar bila<span style="letter-spacing:normal">n<span style="letter-spacing:normal"><span >oziqlanishadi. Qurtlar 40-45 kun davomida barg yaproqlarini yeb tamom qiladi. 1973-1983 yillarda Bobotog‘ o‘rmon xo‘jaligi pistazorlar<span style="letter-spacing:normal">ga<span style="letter-spacing:normal"><span >60% ziyon yetkazganligi kuzatilgan. Oziqlanib bo‘lgandan so‘ng qurtlar daraxt tanasidan pastga tushib, daraxt ostida <span style="letter-spacing:normal">h<span style="letter-spacing:normal"><span >ashak yoki tuproq ostida katta pilla o‘rab g‘umbak<span style="letter-spacing:normal">k<span style="letter-spacing:normal"><span >a aylanadi. G‘umbak bosqichi may oyining o‘rtalaridan oktyabr oylarigacha davom etadi (150 kun). Bu davr maboynida g‘umbaklarning bir qismini har xil kemiruvchilar, parrandalar va zamburug‘lar yo‘q qiladi. <span style="letter-spacing:normal">Turkiston tovusko‘zini areali chegaralangan. U faqat Markaziy <span style="letter-spacing:normal">Osiyoda tarqalgan. Xandon pistadan tashqari bodomga, qayr<span style="letter-spacing:normal">a<span style="letter-spacing:normal">g‘ochga va boshqa mevali daraxtlarga zarar yetkazadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><i><b>Qarshi kurash choralari: </b> </i><i> </i></p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm"><span style="letter-spacing:normal"><i><b>Agrotexnik kurash </b> </i><span style="letter-spacing:normal">tadbirlardan qurigan shox va daraxtlarni kesib yo‘qotish, daraxtlarni o‘g‘itlash, tagini yumshatish sug‘orish va h.k.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;"><i><b>Kimyoviy kurash </b> </i>usul sifatida daraxtlarga Dalmetoat, 40% e.k., 1,5-2,0 l/ga, Bi-58 (yangi), 40% em.k. 1,5-2,0 l/ga, Bagira 20% s.e.k. - 0,3 l/ga yoki Siperfos 55% k.e. -1,0 l/ga preparatlari qo‘llaniladi. Karbofos 50% em.k. 0,6-1,0 l/ga qo‘llaniladi. </p><p></div>`;  
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
