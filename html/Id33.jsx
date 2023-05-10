import React from 'react';
import { Image, ScrollView, SafeAreaView,   useWindowDimensions, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

  const htmlContent = `<div ><p><b>Qarag‘ay novdalarining deformatsiyasi, qarag‘ayning vertun kasalligi. </b> Kasallik qo‘zg‘atuvchisi – <i>Melampsora pinitorqua </i>Rostr. Zamburug‘ ko‘chatlar va 1-12 yoshgacha bo‘lgan qarag‘ay daraxtlarining shox, novda va barglarini, shuningdek tog‘ teragi, oq terak barglarini kasallantiradi, ya’ni u ikki xo‘jayinli, to‘liq rivojlanish doirasiga ega bo‘lgan zamburug‘ turi hisoblanadi. Ba’zan tog‘ va veymut qarag‘ay turida ham uchraydi. Kasallangan joylarda mitseliy daraxtning kambiy va lub to‘qimalarini yemiradi, novdalar yuqori qismining og‘irligi natijasida egiladi, ammo o‘sishdan to‘xtamaydi va novda lotin harfi «S» ga o‘xshab egila boshlaydi. Shuning uchun kasallik «Qarag‘ay vertuni» deb ataladi. <span style="letter-spacing:-0.3pt">Kasallikning zarari tuproq va ob-havo sharoitiga bog‘liq bo‘ladi. Kasallanish erta bahorda bazidiosporalar orqali yuzaga keladi. Yosh, yashil po‘stloqli novdalar va igna barglarida spermagonial davri hosil bo‘ladi. Bir yillik ko‘chat va novdalar yosh po‘sti parenximatik xujayralarining 2-3 qatorida spermagoniylar tagida tillarang-sariq yassi (uzunligi 1-2 sm va eni 2-3 mm) etsiyalar hosil bo‘ladi. Bu kasallik ko‘chatzorlarda, yosh daraxtzorlarda va tabiiy o‘rmonlarda igna bargli daraxtlarga katta zarar keltiradi. Novdalarning deformatsiyasi yog‘och texnik sifatining yomonlashishiga olib keladi.</p><p  align="center" style="line-height:115%;orphans:0;widows:0;text-indent:0cm;margin-bottom:0.21cm;"><b>Qarag‘ay novdalarining deformatsiyasi, qarag‘ayning vertun ( </b><i>Melampsora pinitorqua </i>Rostr<b>) kasalligi </b></p><p>Kasallik kuchli rivojlanganda daraxtni yuqori qismi qurib qoladi. Bu zamburug‘ bilan kasallangan qarag‘ay va terak daraxtlarining barglari to‘kilib ketadi. Kasallikning rivojlanishiga ov-havo sharoiti yuqori darajada ta’sir qiladi. Quruq va iliq kuzgi havo sporalarning qishga yaxshi tayyorlanishiga imkon beradi, uzoq muddatli sernam bahor esa bazidiospoaralarning o‘sishi va daraxtlarda kasalliklarning kasallanish jarayonini tezlashtiradi. </p><p><b><span style="">Kurash choralari: </b></p><p><i><b><span style="">Agrotexnik kurash:</b> </i><span style="">Daraxtlarni kasalliklarga chidamligini oshirish maqsadida kaliy va fosfor mineral ug‘itlar bilan yetarli darajada ta’minlash.</p><p><i><b>Kimyoviy kurash: </b> </i><b> </b><span style="">Topsin<span style="">,<span style="">M 70% n.kuk., 1,0 kg/t, Tifani 70% n.kuk. 1,0 kg/t, Fundazol<span style="">,<span style="">50<span style=""><span style="">% n.kuk. 2-3 kg/t.,<span style=""><span style="">(benomil asosli) preparatlar bilan ishlov berish. <span style=""></p><p></div>`;  
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
        source={require("./i_html_ecce4268625d50d2.jpg")} />

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
        source={require("./i_html_5c1281ccdb670956.jpg")} />

    </ScrollView></SafeAreaView >
     
  );
};

export default Id;
