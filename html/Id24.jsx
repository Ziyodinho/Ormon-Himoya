import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p><b>Archa tilla qo‘ng‘izi  </b>(<i>Anthaxia conradti </i>Sem.) <b>- </b> Markaziy Osiyo archa hududlarida keng tarqalgan bo‘lib, dengiz sathidan 3000 metrgacha balandlikda uchrab turadi. Archa tilla qo‘ng‘izi daraxtlarning qariyb 50 foizini zararlaydi. Tilla qo‘ng‘izlarning joylashishishi uchun yaxshi yorug‘lik tushadigan, quyosh bilan isiydigan, tashqi sog‘lom daraxtlarni afzal ko‘radi. Qo‘ng‘izlari ko‘proq yorug‘lik va issiqlikni sevadi, shuning uchun ham quyosh tik tushadigan archalarni ko‘proq zararlaydi. Tilla qo‘ng‘izlar holsizlangan va yangidan kesilgan archa novdalarini xush ko‘radi. Zararkunanda daraxtni yerga yaqin shoxlaridan boshlab zararlaydi. Shuning uchun tilla qo‘ng‘iz tushgan archa pastdan tepasiga qarab qurib boradi. </p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;"><span style="letter-spacing:-0.3pt"><b>Tavsifi. </b><span style="letter-spacing:-0.3pt">Qo‘ng‘iz to‘q bronza rangida, qariyb qora rangda, biroz yaltiroq, tanasi keng, silliq bo‘lib, 4-8 mm. uzunlikka ega. Old bel qismi ko‘ndalang, serg‘ovak burishgan, qanotqalqonlari tekis, keng, tepa qismida tishlari bor. Qanot qalqonlari mayda nuqtali, metall yaltiroqligiga ega. Lichinkasi tekis, oq rangli, 10-15 mm. uzunlikka ega. Oziqlanish davrida lichinkasida qo‘ng‘ir un bilan to‘ldirilgan qo‘ng‘ir ichak ko‘rinadi. Old ko‘krak kengaygan va yassi bo‘lib, boshi bilan rombsimon shaklini xosil qiladi. Archa tilla qo‘ng‘izi lichinka va shakllangan yosh qo‘ng‘izlar davrida po‘stloq ostida qishlaydi. Qo‘ng‘izlar uchishi aprel oyining ikkinchi yarmida boshlanadi va iyunning ikkinchi yarmigacha davom etadi, ayrim yillarda, ayniqsa, bahori kechikkan yillarda iyul oyining yarmida ham uchratish mumkin. <span style="letter-spacing:-0.3pt"><span style="letter-spacing:-0.3pt">Qo‘ng‘izlar mazkur oilaning ko‘plab vakillari kabi yorug‘liksevar va gulsevar, iliq quyoshli havoda 11 soatdan 17 soatgacha uchadi. Qo‘ng‘izlar juda serharakat bo‘lib, yoruqlar va chuqurliklarni qidirib shoxlarning po‘stlog‘i bo‘ylab tez harakatlanadi. Mos bo‘lgan joyni topgandan so‘ng, urg‘ochi u yerga tuxumdonni tushiradi va 3-5 tuxum qo‘yadi. Tuxum qo‘yish uchun tilla qo‘ng‘iz zaiflashgan va toza chopilgan daraxtlarni afzal ko‘radilar va ularni izlab qo‘ng‘izlar 2-3 km masofani uchib o‘tadi. Qo‘ng‘izlar momaqaymoq, na’matak, qizilpoycha va boshqa shu kabi o‘simliklarning changlari bilan qo‘shimcha oziqlanadilar. Qo‘ng‘izlar 2 oygacha yashaydilar. 20-25 kun keyin embrion rivojlanishi tugallanadi va iyunning birinchi o‘n kunligida birinchi linchinkalari paydo bo‘ladi va ular qobiqqa o‘ralib, po‘stloq bilan oziqlana boshlaydi. Bunda lichinkalar o‘z yo‘lini odatda shox yoki butoqlar asosiga yo‘naltiradilar, lichinkalarning yo‘llari uzun, egri-bugri bo‘lib, lichinkalar o‘sishi bilan kengaya boradi.<p><p align="center" style="line-height:100%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"> <b>Archa tilla qo‘ng‘izi -  </b><i><b>Anthaxia conradti </b> </i><b>Sem. </b></p><p><span style="letter-spacing:-0.3pt">Sovuq tushganda lichinka yo‘llarda qishlaydi, keyingi yilning bahorida ular oziqlanishni davom ettiradi. Iyunda lichinkalar oziqlanishni tugatadilar va yog‘ochda belanchak qiladilar hamda lichinkalarning bir qismi bu yerda lichinka davrida ikkinchi marta qishlaydi, boshqa bir qismi g‘umbakka aylanadilar va ayni o‘sha yerda qishlaydilar. G‘umbak belanchagiga kirish yo‘lini qo‘ng‘ir un bilan berkitadilar. G‘umbak davri 10-12 kun davom etadi. Uchinchi yilning bahorida, aprel oyining ikkinchi yarmida, qo‘ng‘izlar chiqishi boshlanadi.</p><p><span style="letter-spacing:0.2pt">Archa tilla qo‘ng‘izi rivojlanishining butun tsikli 2 yilda tugaydi. Biroq I.K.Maxnovskiy (1966) tilla qo‘ng‘iz rivojining nisbatan tezlashgan siklini kuzatgan. Muallifning ta’kidlashicha, lichinka po‘stloqning maksimal isish va yoritish sharoitlarida yaxshi isitiladigan va janubiy nishablik butalarida oziqlansa, lichinka birinchi yilning avgustida oziqlanishni tugatadi, sentyabrda yog‘ochda belanchak qiladi va qishlaydi. Keyingi yilning aprel-may oylarida g‘umbakka aylanadi va 2 haftadan so‘ng qo‘ng‘iz ucha boshlaydi. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.27cm;">Mazkur holatda generatsiya bir yil mobaynida tugallanadi. Ayrim hududlarda tilla qo‘ng‘iz lichinkalarining parazitlardan halok bo‘lishi 21,6 % ga yetadi. Hasharotxo‘r qushlar-kirki, chittak va boshqalar ham ahamiyatga ega. Yuqorida keltirilgan turdan tashqari archada tilla qo‘ng‘izlarning boshqa turlari – Yong‘in zlatkasi <i>Melanchila acuminate  </i>Bey, shuningdek, <i>Melanophila euspidata  </i>Klug,<i>Anthaxia auriventris  </i>Ball;<i>Zarudniona </i>Richt,<i>Antraxia Iarudniana  </i>Richt,<i>Anthaxia herri chrysis  </i>Ab. va boshqalar rivojlanadi.</p><p align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm;">Archa tilla qo‘ng‘iziga qarshi kurashish uchun o‘rmondagi juda zaiflangan (igna barglarning 75 foizi to‘kilib ketgan) daraxtlar qirqiladi va tezda o‘rmondan olib ketiladi. Tilla qo‘ng‘izlarni yig‘ib olish uchun fevral-mart oylarida o‘rmonzorlarga yangi qirqilgan shoxlar quyib qo‘yiladi va bu shoxlar yig‘ishtirib olinadi. Zararlangan maydonga erta bahorda yarim metr uzunlikdagi archa shoxlari tashlanadi va shoxlar yig‘ib olinmay shu joyda qoldiriladi, chunki ularga joylashgan zararkunandalar quyosh ta’siridan halok bo‘ladi. Bu tashlangan shoxlar zararkunandalarni kamaytiribgina qolmay, balki tuproq sharoitini ham yaxshilaydi, yerni soyalaydi, tuproqni yonbag‘irlardan oqib tushgan suv bilan yuvilishdan saqlaydi. </p><p align="justify" style="line-height:100%;orphans:0;widows:0;text-indent:1.27cm;"><span style="letter-spacing:normal"><b>Kurash choralari: </b></p><p><span style="letter-spacing:0.2pt"><i><b>Agrotexnik tadbirlar </b> </i><span style="letter-spacing:0.2pt"><i><b>: </b> </i><span style="letter-spacing:0.2pt">mineral <span style="letter-spacing:0.2pt">o‘<span style="letter-spacing:0.2pt">g‘itlarni tavsiya etilgan sarf me’yorlarda qo‘llash, tuproqda namligini yetarli darajada ta’minlash. Igna bargli daraxtlarni yaxshi o‘sib chiroyli kurkam bo‘lishi uchun ularga kerakli barcha agrotexnik, ug‘itlash va sug‘orish ishlari sifatli <span style="letter-spacing:0.2pt">o‘<span style="letter-spacing:0.2pt">tkazish bilan birga ularni zararli organizmlardan o‘z vaqtida himoya qilish. </p><p  align="justify" style="line-height:115%;orphans:0;widows:0;text-indent:1.25cm"><i><b>Kimyoviy kurash </b> </i><i>: </i>usul sifatida daraxtlarga imitrin,20%, sus.k., 0,5 l/ga Siperfos,55% em.k. -1,0 l/ga, Alfa enerji, 24,7 % sus.k. 0,4 l/ga, Fufanon,57% e.k.,Karbofos,50% em.k. 0,6-1,0 l/ga yoki Bagira, 20 % s.e.k. -0,3 – 0,4 l/ga, T-34, 24,7 % sus.k. 0,3-0,4 l/ga preparatlari purkash.</p><p></div>`;  
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
        source={require("./i_html_d86836eeb448e70.jpg")}/>

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
        source={require("./i_html_75197263c0d16d6d.gif")}/>
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
        source={require("./i_html_a725ecc99eee0658.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
