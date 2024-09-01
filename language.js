const signIn = document.getElementById('signIn');
const section = document.getElementById('section');

section.addEventListener('change', function () {
  if (section.value === 'en-IN') {
    signIn.textContent = 'signIn';
    infoh1.textContent = 'The biggest Indian hits. The best Indian stories.All streaming here.'
    infop.textContent = 'Watch anywhere. Cancel anytime.'
    formh3.textContent = 'Ready to watch? Enter your email to create or restart your membership.'
    hide.textContent = 'Email address'
    btn.textContent = 'Get Started'
    contenth2_1.textContent = 'Enjoy on your TV'
    contentp_1.textContent = 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
    stangerthingdowmload.textContent = 'Downloading...'
    contenth2_2.textContent = 'Download your shows to watch offline'
    contentp_2.textContent = 'Save your favourites easily and always have something to watch.'
    contenth2_3.textContent = 'Watch everywhere'
    contentp_3.textContent = 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
    contenth2_4.textContent = 'Create profiles for kids'
    contentp_4.textContent = 'Send children on adventures with their favourite characters in a space made just for them—free with yourmembership.'
    Qh2.textContent = 'Frequently Asked Questions'
    Q1.textContent = 'What is Netflix?'
    A1.textContent = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    Q2.textContent = 'How much does Netflix cost?'
    A2.textContent = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
    Q3.textContent = 'Where can I watch?'
    A3.textContent = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    Q4.textContent = 'How do I cancel?'
    A4.textContent = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    Q5.textContent = 'What can I watch on Netflix?'
    A5.textContent = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    Q6.textContent = 'Is Netflix good for kids?'
    A6.textContent = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    formh3_2.textContent = "Ready to watch? Enter your email to create or restart your membership."
    hide2.textContent = 'Email address'
    btn2.textContent = 'Get Started'
    // Qcall.textContent = 'Questions? Call 000-800-919-1694 '
    LB.textContent = 'Netflix India'
   


  }
  else if (section.value === 'hi-IN') {
    signIn.textContent = 'साइन इन करें';
    infoh1.textContent = 'सबसे बड़ी भारतीय हिट. सर्वोत्तम भारतीय कहानियाँ। सभी स्ट्रीमिंग यहाँ।'
    infop.textContent = 'कहीं भी देखो. किसी भी समय रद्द करें.'
    formh3.textContent = 'देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।'
    hide.textContent = 'ईमेल एड्रेस'
    btn.textContent = 'शुरू करें'
    contenth2_1.textContent = 'अपने टीवी पर आनंद लें'
    contentp_1.textContent = 'स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.'
    stangerthingdowmload.textContent = 'डाउनलोड हो रहा है...'
    contenth2_2.textContent = 'ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें'
    contentp_2.textContent = 'अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.'
    contenth2_3.textContent = 'हर जगह देखें'
    contentp_3.textContent = 'बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.'
    contenth2_4.textContent = 'बच्चों के लिए प्रोफ़ाइल बनाएं'
    contentp_4.textContent = 'बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.'
    Qh2.textContent = 'अक्सर पूछे जाने वाले सवाल'
    Q1.textContent = 'Netflix क्या है?'
    A1.textContent = "Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!"
    Q2.textContent = 'Netflix की कीमत कितनी है?'
    A2.textContent = "हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं."
    Q3.textContent = 'मैं कहां देख सकता हूं?'
    A3.textContent = "कहीं भी, कभी भी देखें अपने पर्सनल कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए, वेब पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें.आप iOS, Android या Windows 10 ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं."
    Q4.textContent = 'मैं कैसे कैंसल करूं?'
    A4.textContent = "Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें."
    Q5.textContent = 'मैं Netflix पर क्या देख सकता/सकती हूं?'
    A5.textContent = "Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें."
    Q6.textContent = 'क्या Netflix बच्चों के लिए ठीक है?'
    A6.textContent = "आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं. बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें."
    formh3_2.textContent = "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें."
    hide2.textContent = 'ईमेल एड्रेस'
    btn2.textContent = 'शुरू करें'
    // Qcall.textContent = 'कोई सवाल है?  000-800-919-1694 पर कॉल करें'
    LB.textContent = 'Netflix भारत'
   

  }
});




