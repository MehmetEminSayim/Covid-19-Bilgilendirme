<template>
  <div>
    <section class="home_banner_area">
      <div class="container">
        <div class="row home_banner_inner">
          <div class="col-sm-7">
            <h5 class="wow fadeInUp" data-wow-delay="300ms">COVID-19 </h5>
            <h3 class="wow fadeInUp" data-wow-delay="500ms">Koronavirüs Nedir?
            </h3>
            <p class="wow fadeInUp" data-wow-delay="400ms">
              lk olarak Çin’in Wuhan bölgesinde, 2019 yılı Aralık ayının başında görülüp, bu bölgedeki yetkililer tarafından tanımlandığı için gayri resmi Wuhan koronavirüsü adıyla da bilinen yeni koronavirüs solunum yolu enfeksiyonuna neden olan ve insandan insana geçebilen bulaşıcı bir virüstür.
            </p>
            <router-link to="/about" exact active-class="active" tag="div">
              <a class="main_btn wow fadeInLeft" data-wow-delay="300ms" href="#">Corona Virüs Nedir?</a>
            </router-link>
            <div class="row home_option">
              <div class="col-lg-6 wow fadeIn" data-wow-delay="300ms">
                <div class="media">
                  <div class="d-flex">
                    <i class="linearicons-shield-check"></i>
                  </div>
                  <div class="media-body">
                    <h4>Koruma</h4>
                    <p>Kendinizi nasıl korursunuz</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 wow fadeIn" data-wow-delay="400ms">
                <div class="media">
                  <div class="d-flex">
                    <i class="linearicons-pulse"></i>
                  </div>
                  <div class="media-body">
                    <h4>Semptomlar</h4>
                    <p>Temel belirtileri kontrol edin</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 wow fadeIn" data-wow-delay="500ms">
                <div class="media">
                  <div class="d-flex">
                    <i class="linearicons-bubbles"></i>
                  </div>
                  <div class="media-body">
                    <h4>Yardım Alın</h4>
                    <p>Sağlık hizmetlerinden danışmanlık alın?</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 wow fadeIn" data-wow-delay="600ms">
                <div class="media">
                  <div class="d-flex">
                    <i class="linearicons-document2"></i>
                  </div>
                  <div class="media-body">
                    <h4>Bilgilendirme</h4>
                    <p>Bilgilendirmeleri takip edin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <img class="img-fluid wow fadeInRight" data-wow-delay="400ms"
                 src="src/assets/siteAssets/images/svg/home-banner-cleaner.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <app-api></app-api>

    <section class="check_now_area">
      <div class="container">
        <div class="row m-0 justify-content-between">
          <div class="left">
            <div class="media">
              <div class="d-flex">
                <img src="assets/images/check-1.png" alt="" />
                <img src="assets/images/check-2.png" alt="" />
                <img src="assets/images/check-3.png" alt="" />
              </div>
              <div class="media-body">
                <h4>Corona Virüs semptomların mı var?</h4>
                <p>
                  Hemen 112 acil sağlık hizmet hattını ara ve gerekli bilgilendirmeyi edin.
                </p>
              </div>
            </div>
          </div>
          <div class="right">
            <a class="icon_btn wow fadeInRight" data-wow-delay="400ms" href="tel:112">Hemen 112 Ara <i
              class="linearicons-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
    <section class="protect_yourself_area p_100">
      <div class="container">
        <div class="main_title text-center">
          <h5>Corona Virüsten Uzak Durun!</h5>
          <h2>Korunmak için neler yapmalıyız?</h2>
        </div>
        <div class="row protect_inner">
          <div class="col-lg-6">
            <div class="row protect_list_inner">
              <div class="col-6">
                <div class="protect_list_item">
                  <div class="protect_list_title">
                    <h3>Yapmanız gerekenler</h3>
                    <h6>Corona'yı önleyin</h6>
                  </div>
                  <ul class="nav flex-column">
                    <li>
                      <a href="#"><i class="linearicons-home4"></i>Evde kal</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-desk-tape"></i>Maske tak</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-tissue"></i>Kolonya kullan</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-couch"></i>Dezenfektan kullan</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-rain"></i>Ellerini sık sık yıka</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-thermometer"></i>Sık sık kendini izole et</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-bottle"></i>Tokalaşma</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-6">
                <div class="protect_list_item red">
                  <div class="protect_list_title">
                    <h3>Yapmamanız gerekenler</h3>
                    <h6>Corona önlemleri</h6>
                  </div>
                  <ul class="nav flex-column">
                    <li>
                      <a href="#"><i class="linearicons-man-woman"></i>Sosyal mesafeyi aşma</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-paw"></i>Hastalık şüphelilerinde uzak dur</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-woman"></i>Kucaklaşmadan kaçın</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-hand"></i>Tokalaşmaktan kaçın</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-chair"></i>Kalabalık ortamlardan uzak dur</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-drop-crossed"></i>Seyehat etme</a>
                    </li>
                    <li>
                      <a href="#"><i class="linearicons-plane-crossed"></i>Misafir kabul etme</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="protect_self_text">
              <h3>Kendini nasıl izole edebilirsin?</h3>
              <p>
                Eger kendinizde korona belirtileri hissetiniz ise öncelikle en yakın sağlık kuruluşu ile irtibata geçene kadar
                kimseyle tokalaşmayın kalabalık ortamlardan uzak durun temastan ve yakınlaşmaktan kaçının.
              </p>
              <a class="text_btn" target="_blank" href="https://covid19.saglik.gov.tr/">Kendinizi nasıl koruyabilirsiniz?
                <i class="linearicons-arrow-right"></i></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="protect_img text-center apps_craft_animation">
              <img class="img-fluid wow fadeIn" data-wow-delay="500ms" src="rc/assets/siteAssets/images/protect-img.png" alt="" />
              <ul class="nav">
                <li><img src="src/assets/siteAssets/images/icon/project-virus-1.png" alt=""></li>
                <li><img src="src/assets/siteAssets/images/icon/project-virus-2.png" alt=""></li>
                <li><img class="layer layer2" data-depth="0.5" src="src/assets/siteAssets/images/icon/project-virus-3.png" alt=""></li>
                <li><img src="src/assets/siteAssets/images/icon/project-virus-4.png" alt=""></li>
                <li><img src="src/assets/siteAssets/images/icon/project-virus-5.png" alt=""></li>
                <li><img src="src/assets/siteAssets/images/icon/project-virus-6.png" alt=""></li>
                <li><img src="src/assets/siteAssets/images/icon/project-virus-7.png" alt=""></li>
                <li><img src="src/assets/siteAssets/images/icon/project-virus-8.png" alt=""></li>
                <li><img class="layer layer2" data-depth="0.5" src="asrc/assets/siteAssets/images/icon/project-virus-9.png" alt=""></li>
                <li><img src="src/assets/siteAssets/images/icon/project-virus-10.png" alt=""></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="washing_process_area pad_btm">
      <div class="container">
        <div class="main_title text-center white">
          <h5>El yıkama işlemi</h5>
          <h2>Ellerinizi nasıl yıkamalısınız</h2>
        </div>
        <div class="washing_process_inner row">
          <div class="col-lg-2 col-sm-4 col-6 wow fadeIn" data-wow-delay="400ms">
            <div class="washing_item">
              <div class="icon">
                <img src="src/assets/siteAssets/images/icon/washing-1.png" alt="" />
                <div class="number">
                  1
                </div>
              </div>
              <p><span>Sabun sürün</span> ve ellerinizi birbirine ovun</p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-6 wow fadeIn" data-wow-delay="500ms">
            <div class="washing_item">
              <div class="icon">
                <img src="src/assets/siteAssets/images/icon/washing-2.png" alt="" />
                <div class="number">
                  2
                </div>
              </div>
              <p>
                <span>Bir elinizi </span> diğer elinizin arkasını ovmak için
                kullanın ve tersini yapın
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-6 wow fadeIn" data-wow-delay="600ms">
            <div class="washing_item">
              <div class="icon">
                <img src="src/assets/siteAssets/images/icon/washing-3.png" alt="" />
                <div class="number">
                  3
                </div>
              </div>
              <p>
                <span>Ellerinizi</span> tbirbirine sürtün ve parmaklarınızın arasını temizleyin
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-6 wow fadeIn" data-wow-delay="700ms">
            <div class="washing_item">
              <div class="icon">
                <img src="src/assets/siteAssets/images/icon/washing-4.png" alt="" />
                <div class="number">
                  4
                </div>
              </div>
              <p>
                <span>Parmaklarınızın</span> arkasını avuçlarınıza sürtün
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-6 wow fadeIn" data-wow-delay="800ms">
            <div class="washing_item">
              <div class="icon">
                <img src="src/assets/siteAssets/images/icon/washing-5.png" alt="" />
                <div class="number">
                  5
                </div>
              </div>
              <p>
                <span>Parmaklarınızın</span> arkasını avuçlarınıza sürtün
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4 col-6 wow fadeIn" data-wow-delay="900ms">
            <div class="washing_item">
              <div class="icon">
                <img src="src/assets/siteAssets/images/icon/washing-6.png" alt="" />
                <div class="number">
                  6
                </div>
              </div>
              <p>
                <span>Parmak uçlarınızı</span> diğer elinizin avuç içine sürün ve tersini yapın
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="answers_area p_100">
      <div class="container">
        <div class="main_title">
          <h3>Corona Virüs Nedir!</h3>
          <h5>Corona Virüs Hakkında Sık Sorulan Sorular</h5>
        </div>
        <div class="row answer_inner">
          <div class="col-lg-4">
            <div class="question_list">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                      Corona Virüs Hakkında
                      <i class="linearicons-chevron-down"></i>
                    </button>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                       data-parent="#accordionExample">
                    <div class="card-body">
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                             aria-controls="home" aria-selected="true">Corona Virüsü (Koronavirüs) Belirtileri Nelerdir?</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                             aria-controls="profile" aria-selected="false">Corona Virüsü (Koronavirüs) Tedavisi Nasıl Yapılır?</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                             aria-controls="contact" aria-selected="false">Bağışıklık Sistemi Koronavirüsle Nasıl Savaşıyor?</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab"
                             aria-controls="four" aria-selected="false">Coronavirus (Koronavirüs) Tanısı Nasıl Konulur?</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="tab-content answer_details" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h4>Corona Virüsü (Koronavirüs) Belirtileri Nelerdir?</h4>
                <p>
                  Yeni koronavirüs enfeksiyonu belirtileri arasında ateş, öksürük, nefes darlığı ve solunum güçlüğü bulunur. Daha ağır vakalarda enfeksiyon zatürreye, akut solunum yetmezliğine, böbrek yetmezliğine ve hatta ölüme neden olabilir.

                  Bütün virüs türleri gibi zaman içinde sürekli evrimleşen koronavirüsler 2002 senesinden itibaren grip benzeri semptomlar gösteren daha ciddi sağlık sorunlarına neden olmaya başlamıştır.

                  Koronavirüsler hayvanlar ve insanlar arasında bulaşma riski taşıyan, yani zoonik virüslerdir. Geçmişte MERS adıyla bilinen Orta Doğu Solunum Sendromu’nun develerden, SARS adıyla bilinen Şiddetli Akut Solunum Sendromu’nun da misk kedilerinden insana geçtiği düşünülmektedir.

                  Koronavirüs enfeksiyonlarının yayılmasını önlemek için standart öneriler arasında düzenli olarak alkollü el dezenfektanları veya su-sabunla el yıkanması ve temizliği, öksürme ve hapşırma sırasında ağız ve burnun mendil veya dirsek içi ile kapatılması, bu semptomları gösteren kişilerle yakınlaşmaktan kaçınılması yer alır. Kullanılan mendilin derhal çöpe atılması gereklidir.

                  Koronavirüs vakalarının görüldüğü yerlerde canlı hayvan pazarlarından uzak durulması tavsiye edilir.

                  Koronavirüsün belirtileri arasında en sık karşılaşılan semptomlar birkaç gün boyunca devam eden yüksek ateş, baş ağrısı ve kuru öksürük olarak bilinmektedir. Fakat bazı hastalarda aşağıdaki semptomlarda gözlemlenmektedir;

                  Nefes darlığı,
                  Balgamlı öksürük,
                  Boğaz ağrısı,
                  Kas ve eklem ağrıları,
                  Mide bulantısı veya kusma,
                  İştahsızlık,
                  Burun akıntısı,
                  Baş ağrısı,
                  Ağır solunum yetmezliği,
                  Böbrek yetmezliği gibi durumlar koronavirüsün belirtileri arasında yer alabilmektedir.
                  Koronavirüsü belirtileri gösteren kişilerin ilgili sağlık kurumlarına gitmeden önce, çevresindeki kişilere bulaştırmamak için maske takarak önlem alması gerekmektedir.
                </p>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h4>Corona Virüsü (Koronavirüs) Tedavisi Nasıl Yapılır?</h4>
                <p>
                  SARS-CoV-2 Akut Solunum Yolu Hastalığı için şu anda belirli bir kesin tedavi yolu mevcut değildir. Gerçekleştirilen tedavi ateş, kuru öksürük ve nefes darlığı gibi belirtilerin hafifletilmesine odaklanır.

                  Mevcut zatürre tedavilerinin, bu hastalık için etkin olup olmadığı yönünde araştırmalar sürmektedir. Hastalık virüs temelli olduğu için antibiyotikler etkili değildir.

                  Koronavirüs (COVID-19) hastalığının teşhis edilmesinin ardından hastalığın belirtilerini kontrol etmek için doktor kontrolünde ağrı kesici ve ateş düşürücü ilaçlar kullanılabilir.

                  Hasta bireyin bulunduğu odaların neminin dengelenmesi, çay gibi sıcak içeceklerin tüketilmesi ile ılık duşlar boğaz ağrısı ve/veya öksürüğün hafiflemesine yardımcı olacaktır.

                  Bol sıvı tüketmek, dinlenmek ve düzenli uyku hastalığın belirtilerinin hafiflemesi için önemlidir. Ancak hastalığın belirtileri normal soğuk algınlığı sürecinden daha ağır seyretmeye başlarsa mutlaka uzman bir doktora başvurmak gereklidir.

                  Eğer, kendinizde veya çevrenizde kişilerde yeni koronavirüs hastalığı belirtileri olduğunuz düşünüyorsanız, en kısa zamanda, vakit kaybetmeden, maske takarak bir sağlık kuruluşuna başvurulması gerekmektedir.
                </p>
              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <h4>Bağışıklık Sistemi Koronavirüsle Nasıl Savaşıyor?</h4>
                <p>
                  Vücudumuza yabancı bir organizma, bir madde girdiği zaman bağışıklık sistemi hücrelerimiz bunu hemen algılarlar. Bunu algıladıkları zaman ona karşı hem hücresel düzeyde hem de antikor adı verilen proteinler düzeyinde vücudumuzu bu organizmalara karşı korumaya çalışırlar.

                  Vücudumuza yabancı bir madde girdiği zaman, bu yabancı maddelerin üzerindeki yabancı protein vücutta bulunan diğer proteinlerden farklı olduğu çeşitli savunma hücrelerinin yüzeyinde bulunan almaçlar tarafından algılanır.

                  Algılanan bu yabancı proteinle tam anahtar kilit usülü bağlanacak ve onu etkisiz hale getirecek antikor proteinleri vücut tarafından üretilir.

                  Antikorlar yabancı proteinlere bağlanarak onları işlevsizleştirir. Örneğin, virüslerin hücrelerimize girmekte kullandıkları proteinler vücudun antikorları tarafından işlevsizleştirildiğinde virüs hücrelere tutunamaz ve içeri giremez. Aşı üretiminde de bu mantık kullanılır.

                  Aşı içerisinde bulunan madde virüsün kendisi değil, hücre içine girmekte kullandığı proteinleridir. Bu sayede vücudumuz önceden bu proteini bloke edecek, bağlayacak antikorları vücudumuzda oluşturur.

                  Bu sayede vücut, etkenin kendisi olan virüsle karşılaşsa dahi, virüsün hücre içine girmekte kullandığı proteinleri antikorlar sayesinde hızlıca işlevsizleştirerek hasta olmamızı engeller.
                </p>
              </div>
              <div class="tab-pane fade" id="four" role="tabpanel" aria-labelledby="four-tab">
                <h4>Coronavirus (Koronavirüs) Tanısı Nasıl Konulur?</h4>
                <p>
                  Yeni koronavirüsün tanısı için laboratuvar ortamında test yapılması gereklidir. Koronavirüsün kesin tanısı moleküler testler ile gerçekleştirilir.

                  Olası vaka tanımına uyan kişilerden alınabilecek boğaz sürüntüsü, balgam gibi örnekler üzerinde virüsün genetik materyalinin tespit edilmesi ile tanı konmaktadır. Alınan örnekler yapılan tanı testleri, şu anda ülkemizde “Halk Sağlığı Genel Müdürlüğü Ulusal Viroloji Referans Laboratuvarında” ve Sağlık Bakanlığı tarafından belirlenen “Halk Sağlığı Laboratuvarlarında” yapılabilmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Api from "../components/Api"
export default {
  components : {
    appApi : Api
  }
}
</script>
