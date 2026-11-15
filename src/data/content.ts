import { local, type Localized } from '../i18n';
export interface Service { id:string; title:Localized; description:Localized; image:string }
export const services: Service[] = [
 {id:'pre-wedding',title:local('Pre-wedding photography','婚前摄影','Fotografi pra-perkahwinan'),description:local('Portraits planned around your setting, style and story.','按你们喜欢的场景与风格，规划婚前拍摄。','Potret mengikut lokasi, gaya dan kisah anda.'),image:'outdoor-2'},
 {id:'wedding-day',title:local('Wedding-day photography','婚礼当天摄影','Fotografi hari perkahwinan'),description:local('Photography for your celebration, from the big moments to the little details.','从重要时刻到细小感动，为婚礼当天留下记录。','Fotografi majlis, daripada detik utama hingga butiran kecil.'),image:'main-0'},
 {id:'film',title:local('Wedding videography','婚礼摄像','Videografi perkahwinan'),description:local('Your day in motion. Discuss the coverage and film format in your quote.','用影片珍藏这一天。拍摄范围与形式在报价时确认。','Rakam hari anda dalam filem. Bincangkan liputan dan format dalam sebut harga.'),image:'main-4'},
 {id:'beauty',title:local('Bridal makeup & hair','新娘化妆与发型','Solekan & rambut pengantin'),description:local('Makeup and hairstyling shaped by Japanese vocational training and your preferences.','结合日本专门学校训练，按你的喜好打造妆发。','Solekan dan dandanan rambut berasaskan latihan Jepun serta pilihan anda.'),image:'studio-2'},
 {id:'gowns',title:local('Wedding gown rental','婚纱租赁','Sewaan gaun pengantin'),description:local('Explore styles and ask about fittings, rental stock and sizes.','探索款式，咨询试纱、租赁库存与尺码。','Terokai gaya dan tanya tentang sesi mencuba, stok serta saiz.'),image:'studio-0'},
 {id:'rom',title:local('ROM photography','注册结婚摄影','Fotografi ROM'),description:local('Photography for your registration, with couple and family portraits.','记录注册仪式，并拍摄新人及亲友合影。','Fotografi pendaftaran serta potret pasangan dan keluarga.'),image:'main-3'},
 {id:'albums',title:local('Albums, made personal','专属婚礼相册','Album peribadi'),description:local('Printed albums with personal covers and layouts. Ask about the available options.','定制封面与排版，让照片成为可以翻阅的回忆。','Album bercetak dengan kulit dan susun atur peribadi. Tanya pilihan yang tersedia.'),image:'outdoor-3'},
];
export const packages = [
 {id:'essential-rom', title:local('Essential ROM','简约注册配套','ROM Asas'), description:local('For your first official “I do”.','为正式说出“我愿意”的那一刻。','Untuk lafaz pertama yang rasmi.'), image:'main-3',price:null as number|null, includes:[local('Registration ceremony photography','注册仪式摄影','Fotografi upacara pendaftaran'),local('Couple & family portraits','新人及亲友合影','Potret pasangan & keluarga'),local('Edited digital photographs','精修电子照片','Foto digital yang disunting')], extras:[local('Makeup & hairstyling','化妆与发型','Solekan & dandanan rambut'),local('Personalised album','定制相册','Album peribadi')]},
 {id:'signature-pre-wedding',title:local('Signature Pre-Wedding','精选婚前配套','Pra-perkahwinan Signature'),description:local('A little time, just for the two of you.','留一点时间，只属于你们。','Sedikit masa, khas untuk anda berdua.'),image:'outdoor-1',price:null as number|null, includes:[local('Pre-wedding portrait session','婚前人像拍摄','Sesi potret pra-perkahwinan'),local('Gown & styling consultation','婚纱与造型咨询','Konsultasi gaun & gaya'),local('Bridal makeup & hairstyling','新娘化妆与发型','Solekan & rambut pengantin'),local('Edited digital photographs','精修电子照片','Foto digital yang disunting')],extras:[local('Gown rental, subject to inventory','婚纱租赁，视库存而定','Sewaan gaun, tertakluk pada stok'),local('Album & additional locations','相册与额外拍摄地点','Album & lokasi tambahan')]},
 {id:'complete-wedding-day',title:local('Complete Wedding Day','完整婚礼当天配套','Hari Perkahwinan Lengkap'),description:local('For the day, and everything it means.','珍藏这一天，以及它承载的一切。','Untuk hari itu dan segala maknanya.'),image:'main-4',price:null as number|null, includes:[local('Wedding-day photography','婚礼当天摄影','Fotografi hari perkahwinan'),local('Wedding videography','婚礼摄像','Videografi perkahwinan'),local('Bridal makeup & hairstyling','新娘化妆与发型','Solekan & rambut pengantin'),local('Coverage planning consultation','当天拍摄规划咨询','Konsultasi perancangan liputan')], extras:[local('Gown rental, subject to inventory','婚纱租赁，视库存而定','Sewaan gaun, tertakluk pada stok'),local('Personalised albums & extra coverage','定制相册与额外拍摄时段','Album peribadi & liputan tambahan')]},
];
export interface Gown {
 id:string;
 title:Localized;
 style:'minimal'|'romantic';
 silhouette:'aline'|'fitted';
 images:string[];
 sizes:string[]|null;
 description:Localized;
}
export const gowns: Gown[] = [
 {id:'quiet-elegance',title:local('Quiet elegance','静谧优雅','Keanggunan tenang'),style:'minimal',silhouette:'fitted',images:['main-1','main-2','main-4'],sizes:null,description:local('An off-shoulder neckline, a clean fitted silhouette and a soft train. An understated direction for a modern bridal look.','一字肩领口、利落修身剪裁与柔美拖尾，演绎简约的新娘风格。','Garis leher terbuka di bahu, potongan mengikut bentuk dan ekor lembut untuk gaya pengantin moden.')},
 {id:'soft-romance',title:local('Soft romance','轻柔浪漫','Romantika lembut'),style:'romantic',silhouette:'aline',images:['studio-0','studio-1','studio-4'],sizes:null,description:local('A softly flowing skirt and delicate texture, paired with a relaxed, romantic mood. Explore this silhouette at your consultation.','轻盈裙摆与细腻质感，带来柔美浪漫的气息。欢迎咨询相似剪裁。','Skirt beralun lembut dan tekstur halus membawakan suasana romantik. Bincangkan potongan ini semasa konsultasi.')},
 {id:'garden-poetry',title:local('Garden poetry','花园诗意','Puisi taman'),style:'romantic',silhouette:'fitted',images:['outdoor-1','outdoor-2','outdoor-4'],sizes:null,description:local('Lace detail, a high neckline and an elongated line. A romantic silhouette against the softness of a garden.','蕾丝细节、高领设计与修长线条，在花园景致中展现浪漫轮廓。','Perincian renda, garis leher tinggi dan potongan memanjang yang romantik berlatarbelakangkan taman.')},
];
export const gallery = [
 {id:'main-1',categories:['pre-wedding','outdoor'],alt:local('Couple standing among white flowers against a green hedge','新人站在白花与绿篱之间','Pasangan berdiri di antara bunga putih berlatarbelakangkan pokok hijau')},
 {id:'studio-0',categories:['pre-wedding','studio'],alt:local('Seated bride and standing groom in a softly lit studio','柔光影棚中坐着的新娘与站立的新郎','Pengantin perempuan duduk dan pengantin lelaki berdiri dalam studio bercahaya lembut')},
 {id:'main-0',categories:['pre-wedding','studio'],alt:local('Close portrait of a couple showing their wedding rings','新人展示婚戒的近景肖像','Potret dekat pasangan menunjukkan cincin perkahwinan')},
 {id:'outdoor-1',categories:['pre-wedding','outdoor'],alt:local('Close outdoor portrait of a couple, the bride wearing lace','户外近景中的新人，新娘身穿蕾丝婚纱','Potret dekat pasangan di luar, pengantin memakai renda')},
 {id:'studio-1',categories:['pre-wedding','studio'],alt:local('Bride holding a floral bouquet above her face','新娘将花束举在脸前','Pengantin perempuan mengangkat sejambak bunga di hadapan wajah')},
 {id:'main-3',categories:['pre-wedding','outdoor'],alt:local('A laughing couple sharing a moment beside a green hedge','新人在绿篱旁开怀微笑','Pasangan ketawa bersama di sebelah pokok hijau')},
 {id:'studio-2',categories:['pre-wedding','studio'],alt:local('Intimate studio portrait of a couple embracing','新人相拥的亲密室内肖像','Potret intim pasangan berpelukan dalam studio')},
 {id:'outdoor-3',categories:['outdoor'],alt:local('Blush bridal shoes and white flowers on a garden bench','花园长椅上的淡粉婚鞋与白花','Kasut pengantin merah jambu lembut dan bunga putih di bangku taman')},
 {id:'main-4',categories:['pre-wedding','outdoor'],alt:local('Couple holding hands and smiling in a garden','花园中牵手微笑的新人','Pasangan berpegangan tangan dan tersenyum di taman')},
 {id:'studio-3',categories:['pre-wedding','studio'],alt:local('Black and white portrait of a couple looking at one another','新人深情对望的黑白肖像','Potret hitam putih pasangan saling memandang')},
 {id:'outdoor-2',categories:['pre-wedding','outdoor'],alt:local('Couple with a long lace wedding train on a garden lawn','草坪上的新人和蕾丝长拖尾','Pasangan dengan ekor gaun renda panjang di taman')},
 {id:'studio-4',categories:['pre-wedding','studio'],alt:local('Couple seated together with a floral studio arrangement','新人坐在影棚花艺布景旁','Pasangan duduk bersama dengan gubahan bunga studio')},
];
