// ======================================================================
// HỌC LIỆU TIẾNG TRUNG HSK - PHẦN DỮ LIỆU BÀI HỌC
// Biến gốc: const ALL_LESSONS
// ======================================================================

const ALL_LESSONS = [
  {
    id: "lesson-hsk1-bai16-24words",
    title: "Bài học 24 Từ vựng Trọng tâm HSK 1 - HSK 3",
    groups: [
      {
        id: "group-1",
        title: "Nhóm 1: Hành vi & Đời sống thường nhật",
        desc: "Các từ vựng cốt lõi diễn đạt sự việc, nỗ lực cá nhân, sự quan tâm và tương trợ trong cuộc sống.",
        words: [
          // ------------------------------------------------------------
          // TỪ SỐ 1: 事情 (shìqing)
          // ------------------------------------------------------------
          {
            id: "word-1-shiqing",
            index: 1,
            hanzi: "事情",
            pinyin: "shìqing",
            coreMeaning: "sự việc, công việc, chuyện",
            pos: "Danh từ",
            topic: "Đời sống & Công việc",
            introAudio: [
              { lang: "vi-VN", text: "Từ số một:", pause: 200 },
              { lang: "zh-CN", text: "事情", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: sự việc, việc, chuyện.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn muốn nói về một việc, một sự việc cụ thể hoặc trừu tượng đang xảy ra hoặc cần giải quyết.",
              detail: "Danh từ này chỉ chung các hiện tượng, hoạt động, biến cố trong đời sống xã hội hoặc đời sống cá nhân. Khi tiếng Việt nói 'có chuyện gì thế?', 'tôi có việc cần làm', 'đây là việc của tôi', tiếng Trung đều dùng từ này.",
              keyPoint: "事情 dùng lượng từ 件 (jiàn). Không bao giờ dùng lượng từ 个 (gè) trong cách nói chuẩn mực.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "事情", pause: 400 },
                { lang: "vi-VN", text: "dùng để gọi tên các vụ việc, công việc cần xử lý hoặc sự tình xảy ra. Lưu ý quan trọng nhất: lượng từ chuẩn của từ này là ", pause: 300 },
                { lang: "zh-CN", text: "件", pause: 400 },
                { lang: "vi-VN", text: ", không dùng lượng từ chung chung.", pause: 300 }
              ]
            },
            structures: [
              {
                title: "Diễn đạt: làm một việc gì đó",
                pattern: "做 / 办 + (一件) + 事情",
                note: "做事情 nhấn mạnh vào hành động làm/thực hiện; 办事情 nhấn mạnh vào giải quyết thủ tục, xử lý sự vụ.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Làm hoặc giải quyết sự việc. Ta dùng:", pause: 250 },
                  { lang: "zh-CN", text: "做事情", pause: 500 },
                  { lang: "vi-VN", text: "hoặc", pause: 200 },
                  { lang: "zh-CN", text: "办事情", pause: 600 },
                  { lang: "vi-VN", text: "Ví dụ: Hôm nay tôi có rất nhiều việc phải làm.", pause: 300 }
                ]
              },
              {
                title: "Diễn đạt: có việc / có chuyện gì",
                pattern: "有 + 事情 / 什么 + 事情？",
                note: "Dùng để hỏi thăm khi thấy người khác tìm mình hoặc thông báo mình đang bận việc.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Hỏi có chuyện gì hoặc thông báo có việc:", pause: 250 },
                  { lang: "zh-CN", text: "你找我有什么事情？", pause: 800 },
                  { lang: "vi-VN", text: "Bạn tìm tôi có việc gì thế?", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "我今天有很多事情要做。",
                vi: "Hôm nay tôi có rất nhiều việc phải làm.",
                pause: 1500
              },
              {
                zh: "这是一件很重要的事情。",
                vi: "Đây là một sự việc rất quan trọng.",
                pause: 1500
              },
              {
                zh: "昨天的会议上发生了一件事情。",
                vi: "Trong cuộc họp hôm qua đã xảy ra một chuyện.",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa 事情 (việc/chuyện), 工作 (công việc nghề nghiệp) và 东西 (đồ vật)",
              situation: "Người học tiếng Việt thường dùng từ 'việc' cho cả nghề nghiệp lẫn sự tình, dẫn tới dùng sai.",
              explanation: "工作 là công việc gắn với nghề nghiệp, vị trí làm việc kiếm ra tiền (làm bác sĩ, giáo viên, nhân viên). 事情 là sự việc, công chuyện cụ thể hàng ngày (đi đón con, ký hợp đồng, nộp báo cáo). Bạn có thể tìm 'công việc' (找工作), nhưng bạn xử lý 'sự việc' (办事情).",
              wrong: "我下午要去银行办一个工作。",
              right: "我下午要去银行办一件事情。",
              tip: "Đi ngân hàng, đi ủy ban, xử lý việc cá nhân thì dùng 事情 đi cùng lượng từ 件. Nói về nghề nghiệp, công ty, xin việc mới dùng 工作.",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa sự việc và nghề nghiệp:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai để phân tích:", pause: 200 },
                { lang: "zh-CN", text: "我下午要去银行办一个工作。", pause: 600 },
                { lang: "vi-VN", text: "Câu này sai vì đi ngân hàng giải quyết việc cá nhân không phải là nghề nghiệp, và lượng từ không dùng chiếc cái chung chung. Câu đúng phải là:", pause: 300 },
                { lang: "zh-CN", text: "我下午要去银行办一件事情。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Chữ 情 (qing) khi ghép trong 事情 đọc thanh nhẹ (khẽ, ngắn), không đọc rõ thanh hai.",
              audio: [
                { lang: "vi-VN", text: "Chú ý phát âm: chữ thứ hai đọc thanh nhẹ. Lắng nghe và đọc theo:", pause: 300 },
                { lang: "zh-CN", text: "事情", pause: 1500 },
                { lang: "zh-CN", text: "这是一件很重要的事情。", pause: 2500 }
              ]
            },
            write: {
              desc: "Chữ 事 có 8 nét, trung tâm là bộ Khuyết nét thẳng đứng có móc xuyên qua các nét ngang. Chữ 情 gồm bộ Tâm đứng bên trái và chữ Thanh bên phải.",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Sự gồm các nét ngang xếp tầng và một nét sổ đứng xuyên suốt. Chữ Tình bên trái là bộ tâm đứng, bên phải là chữ thanh chỉ âm đọc.", pause: 400 }
              ]
            },
            summary: "事情: danh từ chỉ sự việc, chuyện. Đi với lượng từ 件. Phân biệt với 工作 là nghề nghiệp ổn định."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 2: 努力 (nǔlì)
          // ------------------------------------------------------------
          {
            id: "word-2-nuli",
            index: 2,
            hanzi: "努力",
            pinyin: "nǔlì",
            coreMeaning: "cố gắng, nỗ lực, chăm chỉ",
            pos: "Tính từ / Động từ / Phó từ",
            topic: "Học tập & Thái độ sống",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai:", pause: 200 },
              { lang: "zh-CN", text: "努力", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: cố gắng, nỗ lực, chăm chỉ.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng để khen ngợi thái độ kiên trì của một người, hoặc tự nhắc nhở bản thân phải dồn hết tâm sức để hoàn thành mục tiêu.",
              detail: "Từ này vừa đóng vai trò tính từ (rất chăm chỉ: 很努力), vừa làm phó từ đứng trước động từ để chỉ cách thức hành động (cố gắng làm gì: 努力学习), vừa có thể dùng độc lập như động từ hoặc danh từ (sự nỗ lực).",
              keyPoint: "Khi làm trạng ngữ bổ nghĩa cho động từ, 努力 đứng ngay TRƯỚC động từ đó.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "努力", pause: 400 },
                { lang: "vi-VN", text: "biểu thị sự dồn sức, kiên trì. Từ này có thể đứng trước động từ để nói cố gắng làm việc gì, hoặc đứng sau phó từ chỉ mức độ để khen ngợi ai đó rất chăm chỉ.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Cố gắng làm việc gì (Làm trạng ngữ)",
                pattern: "努力 + Động từ",
                note: "Đứng trực tiếp trước động từ hành động để mô tả thái độ, phương thức.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Đặt trước động từ để chỉ sự cố gắng hành động:", pause: 250 },
                  { lang: "zh-CN", text: "努力学习", pause: 600 },
                  { lang: "vi-VN", text: "cố gắng học tập;", pause: 200 },
                  { lang: "zh-CN", text: "努力工作", pause: 600 },
                  { lang: "vi-VN", text: "chăm chỉ làm việc.", pause: 300 }
                ]
              },
              {
                title: "Khen ngợi mức độ chăm chỉ (Làm vị ngữ tính từ)",
                pattern: "Chủ ngữ + 很 / 非常 + 努力",
                note: "Trong câu này, tính từ 努力 cần phó từ mức độ như 很 đi kèm, không dùng 是.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Miêu tả một người rất chăm chỉ:", pause: 250 },
                  { lang: "zh-CN", text: "他学习很努力。", pause: 800 },
                  { lang: "vi-VN", text: "Anh ấy học tập rất chăm chỉ.", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "只要努力，你就能学好汉语。",
                vi: "Chỉ cần nỗ lực, bạn sẽ có thể học tốt tiếng Trung.",
                pause: 1500
              },
              {
                zh: "为了买房子，他每天都在努力工作。",
                vi: "Để mua nhà, ngày nào anh ấy cũng chăm chỉ làm việc.",
                pause: 1500
              },
              {
                zh: "他的汉语进步很快，因为他平时很努力。",
                vi: "Tiếng Trung của cậu ấy tiến bộ rất nhanh vì bình thường cậu ấy rất nỗ lực.",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt 努力 (nỗ lực/dốc sức) và 认真 (nghiêm túc/cẩn thận)",
              situation: "Người học hay dịch lẫn lộn hai từ này vì tiếng Việt đều có thể dịch là 'chăm chỉ'.",
              explanation: "努力 nhấn mạnh vào sự bỏ nhiều công sức, thời gian, vượt khó (dốc sức). 认真 nhấn mạnh vào thái độ cẩn thận, tỉ mỉ, không qua loa, có trách nhiệm từng chi tiết.",
              wrong: "他写字很努力，一个错字都没有。",
              right: "他写字很认真，一个错字都没有。",
              tip: "Viết chữ nắn nót, làm bài cẩn thận không có lỗi sai thì dùng 认真. Thức khuya dậy sớm, cày cuốc dốc sức để đạt thành tích cao thì dùng 努力.",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa dốc sức và cẩn thận tỉ mỉ:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu dùng từ chưa tự nhiên trong ngữ cảnh xét nét lỗi chính tả:", pause: 250 },
                { lang: "zh-CN", text: "他写字很努力，一个错字都没有。", pause: 600 },
                { lang: "vi-VN", text: "Viết không sai chữ nào là do thái độ tỉ mỉ, cẩn thận. Do đó, câu tự nhiên và đúng ý nhất phải dùng từ nghiêm túc cẩn thận:", pause: 300 },
                { lang: "zh-CN", text: "他写字很认真，一个错字都没有。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Âm nǔ đọc thanh ba, lì đọc thanh bốn dứt khoát. Chú ý phân biệt âm n (nǔ) và l (lì), không đọc ngọng n thành l.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm rõ hai phụ âm đầu n và l:", pause: 300 },
                { lang: "zh-CN", text: "努力", pause: 1500 },
                { lang: "zh-CN", text: "努力工作", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 努 gồm chữ Nô (奴) ở trên và bộ Lực (力) ở dưới, ngụ ý dốc toàn bộ sức lực. Chữ 力 chỉ có 2 nét: nét hoành chiết câu và nét phẩy xuyên qua.",
              audio: [
                { lang: "vi-VN", text: "Mẹo nhớ mặt chữ: Chữ Nỗ có bộ Lực nằm ở dưới đáy, tượng trưng cho việc bỏ hết sức lực ra để vươn lên.", pause: 400 }
              ]
            },
            summary: "努力: tính từ/phó từ chỉ sự nỗ lực, chăm chỉ. Đứng trước động từ (努力学习) hoặc làm vị ngữ (很努力). Khác với 认真 ở chỗ nhấn mạnh vào dốc sức chứ không phải sự tỉ mỉ."
          }
        ]
      }
    ]
  }
];
          // ------------------------------------------------------------
          // TỪ SỐ 3: 成绩 [成績] (chéngjì)
          // ------------------------------------------------------------
          {
            id: "word-3-chengji",
            index: 3,
            hanzi: "成绩",
            pinyin: "chéngjì",
            coreMeaning: "thành tích, kết quả, điểm số",
            pos: "Danh từ",
            topic: "Học tập & Đánh giá",
            introAudio: [
              { lang: "vi-VN", text: "Từ số ba:", pause: 200 },
              { lang: "zh-CN", text: "成绩", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: thành tích, kết quả, điểm số.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi nói về kết quả học tập, điểm thi cử, hoặc thành quả cụ thể đạt được sau một quá trình phấn đấu trong công việc, thể thao.",
              detail: "Danh từ này chỉ kết quả được đo đạc, đánh giá bằng điểm số (điểm thi) hoặc sự ghi nhận thành quả cụ thể (thành tích công tác, huy chương thi đấu). Khi nói về điểm số thi cử ở trường học, tiếng Trung dùng từ này để chỉ mức điểm cụ thể.",
              keyPoint: "Thường kết hợp với động từ 取得 (đạt được), 提高 (nâng cao), hoặc các tính từ đánh giá như 好 / 不好 (tốt / không tốt), 优秀 (xuất sắc).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "成绩", pause: 400 },
                { lang: "vi-VN", text: "chỉ kết quả được lượng hóa bằng điểm số thi cử hoặc thành quả cụ thể gặt hái được sau nỗ lực. Khác với kết quả chung chung, từ này chuyên dùng cho điểm số bài thi.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Đạt được thành tích tốt",
                pattern: "取得 + (好 / 优异的) + 成绩",
                note: "Động từ 取得 mang nghĩa đạt được, giành được nhờ quá trình nỗ lực.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Đạt được thành tích tốt. Ta kết hợp:", pause: 250 },
                  { lang: "zh-CN", text: "取得好成绩", pause: 700 },
                  { lang: "vi-VN", text: "Ví dụ: Cố gắng học tập để đạt điểm cao.", pause: 300 }
                ]
              },
              {
                title: "Điểm thi / Kết quả học tập",
                pattern: "考试成绩 / 学习成绩",
                note: "Đóng vai trò là cụm danh từ làm chủ ngữ hoặc tân ngữ trong câu.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Điểm thi hoặc kết quả học tập:", pause: 250 },
                  { lang: "zh-CN", text: "考试成绩", pause: 600 },
                  { lang: "vi-VN", text: "hoặc", pause: 200 },
                  { lang: "zh-CN", text: "学习成绩", pause: 600 }
                ]
              },
              {
                title: "Thành tích nâng cao / tiến bộ",
                pattern: "成绩 + 提高 / 进步",
                note: "Dùng để diễn tả sự tiến bộ rõ rệt về điểm số.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Điểm số nâng cao hoặc tiến bộ:", pause: 250 },
                  { lang: "zh-CN", text: "他的汉语成绩提高得很快。", pause: 900 },
                  { lang: "vi-VN", text: "Điểm tiếng Trung của cậu ấy tiến bộ rất nhanh.", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "他这次考试的成绩非常优秀。",
                vi: "Điểm thi lần này của cậu ấy vô cùng xuất sắc.",
                pause: 1500
              },
              {
                zh: "经过努力，他在工作中取得了很大的成绩。",
                vi: "Qua nỗ lực, anh ấy đã đạt được thành tích rất lớn trong công việc.",
                pause: 1500
              },
              {
                zh: "如果不认真复习，考试成绩就不会提高。",
                vi: "Nếu không nghiêm túc ôn tập, điểm thi sẽ không thể nâng cao được.",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa 成绩 (thành tích, điểm số) và 结果 (kết quả sự việc, diễn biến)",
              situation: "Người học tiếng Việt thường gọi 'kết quả thi' nên dịch máy móc sang tiếng Trung thành 结果.",
              explanation: "结果 chỉ kết cục, diễn biến cuối cùng của một chuỗi sự việc hoặc hiện tượng (như kết quả điều tra, kết quả trận đấu ai thắng ai thua). Còn khi muốn hỏi về điểm số thi cử, thứ hạng học tập của cá nhân, tiếng Trung dùng 成绩. Nói 考试结果 người nghe sẽ hiểu là kết quả đậu hay rớt, chứ không phải con số điểm cụ thể.",
              wrong: "我想知道这次汉语考试的结果是多少分。",
              right: "我想知道这次汉语考试的成绩是多少分。",
              tip: "Hỏi về số điểm, xếp loại học lực, bằng khen -> dùng 成绩. Nói về kết cục sự việc, tỷ số thắng thua -> dùng 结果.",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa điểm số thi cử và kết quả chung của sự việc:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu dùng từ chưa phù hợp khi hỏi điểm số:", pause: 200 },
                { lang: "zh-CN", text: "我想知道这次汉语考试的结果是多少分。", pause: 600 },
                { lang: "vi-VN", text: "Khi hỏi về số điểm cụ thể của bài thi, người bản xứ dùng từ thành tích điểm số chứ không dùng từ kết quả chung chung. Câu chuẩn xác là:", pause: 300 },
                { lang: "zh-CN", text: "我想知道这次汉语考试的成绩是多少分。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Chữ 成 đọc thanh hai (chéng, cao dần từ dưới lên), chữ 绩 đọc thanh bốn (jì, dứt khoát từ trên xuống). Phân biệt âm j trong jì, không đọc nhầm thành z hoặc q.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm: chữ đầu thanh hai, chữ sau thanh bốn dứt khoát. Lắng nghe và đọc theo:", pause: 300 },
                { lang: "zh-CN", text: "成绩", pause: 1500 },
                { lang: "zh-CN", text: "取得好成绩", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 成 gồm 6 nét, có bộ Qua (戈) hình mũi giáo vươn lên bao bọc bên ngoài. Chữ 绩 có bộ Mịch (纟) bên trái tượng trưng cho sợi tơ dệt nên thành quả, bên phải là chữ Trách (责) đóng vai trò biểu âm.",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ thứ nhất có bộ qua mang hình mũi giáo. Chữ thứ hai bên trái là bộ mịch chỉ sợi tơ, bên phải là chữ trách gợi ý âm đọc.", pause: 400 }
              ]
            },
            summary: "成绩: danh từ chỉ thành tích, điểm số thi cử. Thường đi với cụm 取得好成绩, 考试成绩. Khác với 结果 ở chỗ chuyên dùng để định lượng điểm thi và sự tiến bộ học tập."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 4: 照顾 [照顧] (zhàogù)
          // ------------------------------------------------------------
          {
            id: "word-4-zhaogu",
            index: 4,
            hanzi: "照顾",
            pinyin: "zhàogù",
            coreMeaning: "chăm sóc, trông nom, săn sóc",
            pos: "Động từ",
            topic: "Gia đình & Đời sống",
            introAudio: [
              { lang: "vi-VN", text: "Từ số bốn:", pause: 200 },
              { lang: "zh-CN", text: "照顾", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: chăm sóc, trông nom, săn sóc.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi săn sóc, trông nom sức khỏe hoặc đời sống sinh hoạt của người thân (cha mẹ, con cái, người ốm), vật nuôi, hoặc tự chăm sóc bản thân.",
              detail: "照顾 là ngoại động từ mang tân ngữ trực tiếp. Từ này diễn tả sự để mắt, lo chu toàn miếng ăn, giấc ngủ, thuốc men hoặc sinh hoạt hàng ngày. Ngoài ra trong giao tiếp thương mại, từ này còn có nghĩa mở rộng là chiếu cố, ủng hộ mua hàng.",
              keyPoint: "照顾 tác động trực tiếp lên người hoặc vật tiếp nhận, không thêm giới từ 给 hoặc 为 trước đối tượng được chăm sóc theo thói quen tiếng Việt.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "照顾", pause: 400 },
                { lang: "vi-VN", text: "dùng khi chăm lo đời sống sinh hoạt, trông nom người thân hoặc thú cưng. Đây là động từ trực tiếp, đối tượng được chăm sóc đi liền ngay phía sau mà không cần thêm giới từ.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Chăm sóc ai đó trực tiếp",
                pattern: "照顾 + Người / Thú cưng / Đồ vật",
                note: "Tân ngữ đứng liền sau động từ, không dùng giới từ trung gian.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Chăm sóc ai đó trực tiếp:", pause: 250 },
                  { lang: "zh-CN", text: "照顾老人", pause: 600 },
                  { lang: "vi-VN", text: "chăm sóc người già;", pause: 200 },
                  { lang: "zh-CN", text: "照顾孩子", pause: 600 },
                  { lang: "vi-VN", text: "trông nom con trẻ.", pause: 300 }
                ]
              },
              {
                title: "Tự chăm sóc tốt bản thân (Lời dặn dò)",
                pattern: "照顾好 + 自己",
                note: "好 làm bổ ngữ kết quả biểu thị trạng thái chu đáo, vẹn toàn.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Dặn dò tự chăm sóc tốt cho bản thân:", pause: 250 },
                  { lang: "zh-CN", text: "照顾好自己", pause: 700 },
                  { lang: "vi-VN", text: "Bạn phải tự chăm sóc tốt cho mình nhé.", pause: 400 }
                ]
              },
              {
                title: "Nhận được sự chăm sóc từ người khác",
                pattern: "得到 / 受到 + (Ai đó) + 的照顾",
                note: "Dùng khi người nói ở vị thế thụ hưởng sự quan tâm, giúp đỡ.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Nhận được sự quan tâm chăm sóc:", pause: 250 },
                  { lang: "zh-CN", text: "他在生病期间得到了大家的照顾。", pause: 1000 },
                  { lang: "vi-VN", text: "Trong thời gian bị ốm, anh ấy đã nhận được sự chăm sóc của mọi người.", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "妈妈生病了，我需要在家里照顾她。",
                vi: "Mẹ bị ốm rồi, tôi cần ở nhà chăm sóc mẹ.",
                pause: 1500
              },
              {
                zh: "外面天气很冷，一个人出门要照顾好自己。",
                vi: "Thời tiết bên ngoài rất lạnh, một mình ra ngoài phải tự chăm sóc tốt bản thân nhé.",
                pause: 1500
              },
              {
                zh: "他工作太忙，平时常常没有时间照顾家里的猫。",
                vi: "Anh ấy công việc bận rộn quá, ngày thường hay không có thời gian chăm sóc chú mèo ở nhà.",
                pause: 1500
              }
            ],
            trap: {
              name: "Thừa giới từ 给/为 do thói quen dịch từng chữ 'chăm sóc cho ai'",
              situation: "Trong tiếng Việt nói 'chăm sóc cho mẹ', người học hay chuyển ngữ thành *照顾给妈妈 hoặc *为妈妈照顾.",
              explanation: "照顾 là ngoại động từ mang tân ngữ trực tiếp (照顾 + Đối tượng). Không bao giờ đặt 給 vào sau động từ 照顾. Giới từ 给 chỉ dùng khi đứng trước động từ để biểu thị hành động làm thay hộ người khác (ví dụ: 给朋友照顾狗 - trông chó giúp bạn).",
              wrong: "这里的护士每天都照顾给病人。",
              right: "这里的护士每天都照顾病人。",
              tip: "Quy tắc đơn giản: 照顾 + người, tuyệt đối không dịch từ 'cho' thành 给 ghép vào sau.",
              audio: [
                { lang: "vi-VN", text: "Bẫy dịch máy móc từ tiếng Việt: chăm sóc cho ai:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai ngữ pháp thường gặp do thừa từ cho:", pause: 200 },
                { lang: "zh-CN", text: "这里的护士每天都照顾给病人。", pause: 600 },
                { lang: "vi-VN", text: "Trong tiếng Trung, động từ này tác động trực tiếp lên người nhận, không được chèn giới từ cho vào giữa. Câu sửa đúng là:", pause: 300 },
                { lang: "zh-CN", text: "这里的护士每天都照顾病人。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Cả hai chữ 照 (zhào) và 顾 (gù) đều có âm gốc thanh bốn. Tuy nhiên trong khẩu ngữ giao tiếp thực tế, chữ 顾 (gu) thường được phát âm lướt nhẹ, ngắn gọn như thanh nhẹ.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm: chữ đầu đọc thanh bốn rõ ràng, chữ sau đọc lướt nhẹ nhàng. Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "照顾", pause: 1500 },
                { lang: "zh-CN", text: "照顾好自己", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 照 gồm chữ Chiêu (昭) ở trên và bộ Hỏa bốn chấm (灬) ở dưới đáy tượng trưng cho ánh sáng soi rọi. Chữ 顾 gồm chữ Hộ (雇 lược giản) bên trái và bộ Hiệt (页 - cái đầu/khuôn mặt) bên phải, mang hình ảnh quay đầu lại để trông nom, để mắt tới.",
              audio: [
                { lang: "vi-VN", text: "Mẹo nhớ mặt chữ: Chữ Chiếu bên dưới có bốn chấm hỏa soi sáng. Chữ Cố bên phải có bộ hiệt tượng trưng cho khuôn mặt, gợi ý việc hướng ánh mắt quay lại trông nom.", pause: 400 }
              ]
            },
            summary: "照顾: động từ mang tân ngữ trực tiếp (照顾 + đối tượng). Thường dùng dạng dặn dò 照顾好自己. Không thêm giới từ 给/为 theo thói quen tiếng Việt."
          }
          // ------------------------------------------------------------
          // TỪ SỐ 5: 帮助 [幫助] (bāngzhù)
          // ------------------------------------------------------------
          {
            id: "word-5-bangzhu",
            index: 5,
            sourceIndex: 10,
            hanzi: "帮助",
            pinyin: "bāngzhù",
            coreMeaning: "giúp, giúp đỡ, sự giúp đỡ",
            pos: "Động từ / Danh từ",
            topic: "Giao tiếp & Ứng xử",
            introAudio: [
              { lang: "vi-VN", text: "Từ số năm:", pause: 200 },
              { lang: "zh-CN", text: "帮助", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: giúp, giúp đỡ hoặc sự giúp đỡ.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn ra tay hỗ trợ ai đó giải quyết khó khăn, hoặc khi bạn bày tỏ lòng cảm ơn trước sự hỗ trợ mà mình nhận được từ người khác.",
              detail: "Từ này có hai từ loại chính: động từ (giúp đỡ ai làm việc gì) và danh từ (sự giúp đỡ, trợ giúp). Khi là động từ, từ này mang tân ngữ chỉ người trực tiếp ngay phía sau.",
              keyPoint: "Là ngoại động từ mang tân ngữ trực tiếp (帮助 + Người). Phân biệt rõ với động từ ly hợp 帮忙 vốn không được mang tân ngữ người ở ngay phía sau.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "帮助", pause: 400 },
                { lang: "vi-VN", text: "vừa là động từ vừa là danh từ. Khi là động từ, bạn đặt ngay người nhận sự giúp đỡ ở phía sau, ví dụ giúp đỡ tôi, giúp đỡ bạn bè.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Giúp ai làm việc gì",
                pattern: "帮助 + Người + (Động từ / Hành động)",
                note: "Đứng trực tiếp trước người tiếp nhận; phần hành động phía sau nói rõ giúp làm việc gì.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Giúp ai đó làm việc gì:", pause: 250 },
                  { lang: "zh-CN", text: "帮助别人", pause: 600 },
                  { lang: "vi-VN", text: "giúp đỡ người khác;", pause: 200 },
                  { lang: "zh-CN", text: "帮助我学汉语", pause: 700 },
                  { lang: "vi-VN", text: "giúp tôi học tiếng Trung.", pause: 300 }
                ]
              },
              {
                title: "Dưới sự giúp đỡ của ai (Dùng làm danh từ)",
                pattern: "在 + (Ai đó) + 的帮助下",
                note: "Cấu trúc giới từ cố định thường đứng đầu câu hoặc trước vị ngữ để nêu nguyên nhân thành công, tiến bộ.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Dưới sự giúp đỡ của ai đó:", pause: 250 },
                  { lang: "zh-CN", text: "在老师的帮助下", pause: 700 },
                  { lang: "vi-VN", text: "dưới sự giúp đỡ của thầy cô giáo.", pause: 400 }
                ]
              },
              {
                title: "Cảm ơn hoặc cần sự giúp đỡ",
                pattern: "需要 / 感谢 + 帮助",
                note: "Đóng vai trò danh từ trừu tượng.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Cảm ơn sự giúp đỡ:", pause: 250 },
                  { lang: "zh-CN", text: "非常感谢你的帮助。", pause: 900 },
                  { lang: "vi-VN", text: "Rất cảm ơn sự giúp đỡ của bạn.", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "谢谢你这几天对我的帮助。",
                vi: "Cảm ơn sự giúp đỡ của bạn dành cho tôi trong mấy ngày qua.",
                pause: 1500
              },
              {
                zh: "在老师的帮助下，我的汉语水平提高得很快。",
                vi: "Dưới sự giúp đỡ của thầy cô, trình độ tiếng Trung của tôi tiến bộ rất nhanh.",
                pause: 1500
              },
              {
                zh: "遇到困难的时候，大家应该互相帮助。",
                vi: "Khi gặp khó khăn, mọi người nên giúp đỡ lẫn nhau.",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa 帮助 (động từ thường/danh từ) và 帮忙 (động từ ly hợp)",
              situation: "Người học tiếng Việt thường dùng từ 'giúp' và ghép thẳng tân ngữ phía sau, tạo ra câu sai *帮忙你.",
              explanation: "帮助 là động từ thường nên kết hợp trực tiếp với người: 帮助你. Ngược lại, 帮忙 là động từ ly hợp (bāng-máng, trong đó máng đã là tân ngữ), cấu trúc này tuyệt đối không được mang thêm tân ngữ phía sau. Muốn dùng 帮忙, phải nói 帮你的忙 hoặc 给我帮忙.",
              wrong: "你可以帮忙我一下吗？",
              right: "你可以帮我一个忙吗？ / 你可以帮助我一下吗？",
              tip: "Nếu muốn nói 'giúp ai', hãy dùng 帮助 + Người. Còn nếu lỡ dùng chữ 帮忙, hãy chèn người vào giữa thành 帮 + Người + 忙.",
              audio: [
                { lang: "vi-VN", text: "Bẫy ngữ pháp cực kỳ phổ biến giữa hai từ giúp đỡ:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai để phân tích:", pause: 200 },
                { lang: "zh-CN", text: "你可以帮忙我一下吗？", pause: 600 },
                { lang: "vi-VN", text: "Câu này sai vì từ thứ hai là động từ ly hợp, không được mang tân ngữ trực tiếp phía sau. Bạn phải dùng từ giúp đỡ thứ nhất mang tân ngữ, hoặc tách từ thứ hai ra. Câu chuẩn là:", pause: 300 },
                { lang: "zh-CN", text: "你可以帮助我一下吗？", pause: 800 },
                { lang: "vi-VN", text: "hoặc dùng dạng ly hợp:", pause: 200 },
                { lang: "zh-CN", text: "你可以帮我一个忙吗？", pause: 1000 }
              ]
            },
            pron: {
              guide: "Chữ 帮 (bāng) đọc thanh một (ngang, cao). Chữ 助 (zhù) phát âm âm uốn lưỡi zh, thanh bốn dứt khoát từ trên xuống.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm: chữ đầu giữ cao độ bằng phẳng, chữ sau uốn lưỡi đọc dứt khoát. Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "帮助", pause: 1500 },
                { lang: "zh-CN", text: "互相帮助", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 帮 gồm bộ Cân (巾 - cái khăn) ở dưới nâng đỡ phần chữ Bang phía trên. Chữ 助 gồm chữ Thả (且) bên trái và bộ Lực (力 - sức lực) bên phải.",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Bang có bộ cân là dải khăn ở dưới. Chữ Trợ có bộ lực ở bên phải mang ý nghĩa đem sức lực của mình ra trợ giúp.", pause: 400 }
              ]
            },
            summary: "帮助: vừa là động từ mang tân ngữ trực tiếp (帮助别人), vừa là danh từ (你的帮助). Khác với động từ ly hợp 帮忙 ở chỗ không được ghép trực tiếp tân ngữ sau 帮忙."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 6: 提 (tí)
          // ------------------------------------------------------------
          {
            id: "word-6-ti",
            index: 6,
            sourceIndex: 12,
            hanzi: "提",
            pinyin: "tí",
            coreMeaning: "xách, nhấc; nêu ra, đưa ra; nhắc tới",
            pos: "Động từ",
            topic: "Động tác cơ thể & Giao tiếp",
            introAudio: [
              { lang: "vi-VN", text: "Từ số sáu:", pause: 200 },
              { lang: "zh-CN", text: "提", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: xách, nhấc; đưa ra, nhắc tới.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn cầm quai xách một chiếc túi/hành lý bằng một tay buông thõng, hoặc khi bạn nêu ra câu hỏi/ý kiến, hoặc khi trong trò chuyện có ai đó nhắc đến một chuyện cũ.",
              detail: "Nghĩa đen là hành động cầm, xách vật thể có quai hướng từ dưới lên. Nghĩa bóng cực kỳ thông dụng là đưa ra ý kiến, đặt câu hỏi, hoặc đề cập đến một sự việc trong quá khứ.",
              keyPoint: "Trong khẩu ngữ giao tiếp, cụm từ cố định 别提了 mang nghĩa 'ôi đừng nhắc nữa / chuyện chán lắm khỏi phải nói'.",
              audio: [
                { lang: "vi-VN", text: "Động từ ", pause: 150 },
                { lang: "zh-CN", text: "提", pause: 400 },
                { lang: "vi-VN", text: "vừa chỉ động tác dùng tay xách túi xách, vừa dùng trong giao tiếp khi muốn đưa ra câu hỏi, ý kiến hoặc nhắc lại một chuyện nào đó.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Xách, nhấc đồ vật có quai",
                pattern: "提 + Túi / Hành lý / Đồ vật",
                note: "Chỉ động tác tay buông thõng cầm quai kéo lên.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Xách túi xách hoặc hành lý:", pause: 250 },
                  { lang: "zh-CN", text: "提包", pause: 600 },
                  { lang: "vi-VN", text: "xách túi;", pause: 200 },
                  { lang: "zh-CN", text: "提行李", pause: 600 },
                  { lang: "vi-VN", text: "xách hành lý.", pause: 300 }
                ]
              },
              {
                title: "Nêu ra, đưa ra câu hỏi / ý kiến",
                pattern: "提 + 问题 / 意见 / 要求",
                note: "Thường dùng trong cuộc họp, lớp học hoặc khi trao đổi công việc.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Đưa ra câu hỏi hoặc ý kiến góp ý:", pause: 250 },
                  { lang: "zh-CN", text: "提问题", pause: 600 },
                  { lang: "vi-VN", text: "đặt câu hỏi;", pause: 200 },
                  { lang: "zh-CN", text: "提意见", pause: 600 },
                  { lang: "vi-VN", text: "đóng góp ý kiến.", pause: 300 }
                ]
              },
              {
                title: "Khẩu ngữ than thở: Đừng nhắc tới nữa / Khỏi phải nói",
                pattern: "别提了，+ (Vế câu than phiền)",
                note: "Dùng để đáp lại khi người khác hỏi thăm về một việc không suôn sẻ hoặc gặp vận xui.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Khẩu ngữ than thở đừng nhắc tới nữa:", pause: 250 },
                  { lang: "zh-CN", text: "别提了，昨天的考试太难了。", pause: 1000 },
                  { lang: "vi-VN", text: "Ôi đừng nhắc nữa, bài thi hôm qua khó quá đi mất.", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "这个行李箱太重了，我来帮你提吧。",
                vi: "Chiếc vali này nặng quá, để tôi xách giúp bạn nhé.",
                pause: 1500
              },
              {
                zh: "大家对这个计划还有什么意见，请现在提出来。",
                vi: "Mọi người đối với kế hoạch này còn ý kiến gì nữa, xin hãy nêu ra ngay bây giờ.",
                pause: 1500
              },
              {
                zh: "别提了，今天早上我不仅迟到了，还把手机弄丢了。",
                vi: "Đừng nhắc nữa, sáng nay tôi không những đi muộn mà còn làm mất điện thoại nữa.",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt 提 (xách), 拿 (cầm/lấy) và 抬 (khiêng/nhấc bằng hai tay)",
              situation: "Người học hay dùng lẫn các động từ cầm nắm mang vác đồ vật.",
              explanation: "提 chỉ động tác dùng tay giữ quai/dây và để vật buông thõng xuống (như xách xô nước, xách giỏ chợ). 拿 là động tác dùng ngón tay cầm, nắm, lấy vật bất kỳ. 抬 là động tác hai người cùng khiêng hoặc một người dùng cả hai tay nâng vật nặng lên phía trước ngực.",
              wrong: "这个包有带子，你抬着比较方便。",
              right: "这个包有带子，你提着比较方便。",
              tip: "Vật có quai xách buông tay -> dùng 提. Cầm nắm đồ vật thông thường -> dùng 拿. Khiêng vật nặng nâng lên cao -> dùng 抬.",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt động tác cầm xách mang vác:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu dùng từ sai tư thế động tác:", pause: 200 },
                { lang: "zh-CN", text: "这个包有带子，你抬着比较方便。", pause: 600 },
                { lang: "vi-VN", text: "Túi có quai thì động tác tự nhiên là buông tay xách chứ không ai dùng hai tay khiêng nâng lên cao. Câu sửa đúng là:", pause: 300 },
                { lang: "zh-CN", text: "这个包有带子，你提着比较方便。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu t (bật hơi mạnh, đầu lưỡi tiếp xúc lợi trên rồi luồng hơi bật mạnh ra), kết hợp vận mẫu i đọc thanh hai (tí). Tránh đọc nhầm thành d (không bật hơi).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm: chú ý bật hơi mạnh ở âm đầu. Lắng nghe và đọc theo:", pause: 300 },
                { lang: "zh-CN", text: "提", pause: 1500 },
                { lang: "zh-CN", text: "提包", pause: 1500 },
                { lang: "zh-CN", text: "提出问题", pause: 1800 }
              ]
            },
            write: {
              desc: "Bên trái là bộ Thủ (扌 - cánh tay, bàn tay) chỉ động tác cầm xách. Bên phải là chữ Thị (是) đóng vai trò hài âm hỗ trợ tạo chữ.",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Bên trái là bộ tài gảy biểu thị động tác của bàn tay xách đồ, bên phải là chữ thị.", pause: 400 }
              ]
            },
            summary: "提: động từ xách (đồ có quai) hoặc đưa ra (ý kiến, câu hỏi). Thành ngữ khẩu ngữ quen thuộc: 别提了 (đừng nhắc nữa/than vãn)."
          }
        ],
        ], // Kết thúc mảng words của Nhóm 1

        // ============================================================
        // BÀI TẬP NHÓM 1: BA LOẠI TOÀN DIỆN (8 CÂU)
        // ============================================================
        exercises: [
          // A. Nhớ chủ động & dùng từ đích danh (Câu 1, 2)
          {
            id: "g1-ex-1",
            type: "Trắc nghiệm lượng từ & danh từ",
            prompt: "Chọn lượng từ chuẩn xác nhất để điền vào chỗ trống: 这____事情非常重要，你一定要认真办。",
            options: [
              "A. 个",
              "B. 件",
              "C. 条",
              "D. 本"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu một: Chọn lượng từ chuẩn xác nhất điền vào câu sau:", pause: 300 },
              { lang: "zh-CN", text: "这事情非常重要，你一定要认真办。", pause: 600 }
            ],
            reasonRight: "Lượng từ quy chuẩn duy nhất dùng cho danh từ 事情 (sự việc) là 件 (jiàn).",
            reasonWrong: "Không dùng 個 (lượng từ chung chung) trong văn phong chuẩn, cũng không dùng 条 (cho vật dài) hay 本 (cho sách vở).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B.", pause: 200 },
              { lang: "zh-CN", text: "一件事情", pause: 400 },
              { lang: "vi-VN", text: "Danh từ sự việc bắt buộc dùng lượng từ kiện, biểu thị từng sự vụ riêng biệt.", pause: 300 }
            ]
          },
          {
            id: "g1-ex-2",
            type: "Phân biệt từ gần nghĩa",
            prompt: "Câu nào dưới đây diễn đạt tự nhiên nhất ý: 'Cậu ấy viết chữ rất cẩn thận, không hề sai một chữ nào'?",
            options: [
              "A. 他写字很努力，一个错字都没有。",
              "B. 他写字很认真，一个错字都没有。",
              "C. 他写字很成绩，一个错字都没有。",
              "D. 他写字很照顾，一个错字都没有。"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu hai: Chọn câu biểu đạt đúng thái độ cẩn thận, tỉ mỉ khi viết chữ.", pause: 400 }
            ],
            reasonRight: "认真 biểu thị thái độ cẩn trọng, tỉ mỉ, không làm ẩu nên viết không sai chữ nào. 努力 là dốc sức, cày cuốc.",
            reasonWrong: "Câu A dùng 努力 chưa đúng trọng tâm vì viết đúng từng nét là nhờ cẩn thận; C và D dùng sai từ loại danh từ và động từ vào vị trí bổ ngữ trạng thái.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B.", pause: 200 },
              { lang: "zh-CN", text: "认真", pause: 300 },
              { lang: "vi-VN", text: "biểu thị sự tỉ mỉ, nghiêm túc. Còn nỗ lực chỉ sự dồn công sức vượt khó.", pause: 300 }
            ]
          },

          // B. Vị trí, kết hợp & bẫy ngữ pháp (Câu 3, 4, 5, 6)
          {
            id: "g1-ex-3",
            type: "Bẫy ngữ pháp giới từ",
            prompt: "Chọn câu có cấu trúc ngữ pháp đúng và tự nhiên nhất khi nói về việc chăm sóc thú cưng:",
            options: [
              "A. 我每天都在家里照顾给小狗。",
              "B. 我每天都在家里为小狗照顾。",
              "C. 我每天都在家里照顾小狗。",
              "D. 我每天都在家里从小狗照顾。"
            ],
            correct: 2,
            questionAudio: [
              { lang: "vi-VN", text: "Câu ba: Chọn câu đúng ngữ pháp khi diễn đạt việc chăm sóc chú chó ở nhà.", pause: 400 }
            ],
            reasonRight: "照顾 là ngoại động từ mang tân ngữ trực tiếp (照顾 + Đối tượng), không chèn giới từ 给 hoặc 为 phía trước tân ngữ.",
            reasonWrong: "Người học tiếng Việt hay dịch từng chữ 'chăm sóc cho ai' nên thêm 給 hoặc 为, đây là lỗi thừa giới từ.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là C.", pause: 200 },
              { lang: "zh-CN", text: "照顾小狗", pause: 400 },
              { lang: "vi-VN", text: "Tân ngữ đứng liền ngay sau động từ, tuyệt đối không dịch từ cho thành giới từ chèn vào giữa.", pause: 300 }
            ]
          },
          {
            id: "g1-ex-4",
            type: "Bẫy động từ thường vs Động từ ly hợp",
            prompt: "Điền từ thích hợp vào chỗ trống: 你明天可以____我复习汉语考试吗？",
            options: [
              "A. 帮忙",
              "B. 帮助",
              "C. 照顾给",
              "D. 提出"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu bốn: Chọn từ thích hợp điền vào câu sau:", pause: 300 },
              { lang: "zh-CN", text: "你明天可以我复习汉语考试吗？", pause: 600 }
            ],
            reasonRight: "帮助 là động từ thường, mang tân ngữ người và hành động trực tiếp phía sau (帮助我做...).",
            reasonWrong: "帮忙 là động từ ly hợp đã chứa tân ngữ mang, không thể ghép trực tiếp đại từ 我 ngay sau nó thành *帮忙我.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B.", pause: 200 },
              { lang: "zh-CN", text: "帮助我复习", pause: 400 },
              { lang: "vi-VN", text: "Nếu dùng từ ở đáp án A, bạn phải nói là giúp tôi một việc, không được nói giúp đỡ tôi trực tiếp.", pause: 300 }
            ]
          },
          {
            id: "g1-ex-5",
            type: "Cách dùng động từ kết hợp",
            prompt: "Trong cuộc họp, khi muốn nói 'Nếu mọi người có ý kiến gì thì hãy nêu ra ngay', câu nào đúng?",
            options: [
              "A. 大家有什么意见，请现在提出来。",
              "B. 大家有什么意见，请现在拿出来。",
              "C. 大家有什么意见，请现在抬出来。",
              "D. 大家有什么意见，请现在别提了。"
            ],
            correct: 0,
            questionAudio: [
              { lang: "vi-VN", text: "Câu năm: Chọn câu diễn đạt chuẩn xác hành động nêu ý kiến trong cuộc họp.", pause: 400 }
            ],
            reasonRight: "提 kết hợp với 问题 (câu hỏi) hoặc 意见 (ý kiến) để biểu thị việc nêu ra, đề xuất thảo luận.",
            reasonWrong: "拿 là cầm lấy đồ vật cụ thể; 抬 là khiêng nhấc vật nặng; 别提了 là khẩu ngữ than thở đừng nhắc tới nữa.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là A.", pause: 200 },
              { lang: "zh-CN", text: "提出意见", pause: 400 },
              { lang: "vi-VN", text: "Động từ này dùng cho cả nghĩa bóng là nêu ra ý kiến, đặt câu hỏi.", pause: 300 }
            ]
          },
          {
            id: "g1-ex-6",
            type: "Phân biệt 成绩 và 结果",
            prompt: "Chọn câu hỏi chuẩn xác nhất khi muốn hỏi về điểm số thi cử:",
            options: [
              "A. 你这次汉语考试的结果是多少分？",
              "B. 你这次汉语考试的成绩是多少分？",
              "C. 你这次汉语考试的事情是多少分？",
              "D. 你这次汉语考试的努力是多少分？"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu sáu: Chọn câu hỏi đúng nhất về điểm số bài thi.", pause: 400 }
            ],
            reasonRight: "成绩 chỉ điểm số, thành tích được lượng hóa cụ thể bằng con số điểm.",
            reasonWrong: "结果 chỉ kết quả đậu hay rớt chung chung, không dùng đi liền với câu hỏi cụ thể bao nhiêu điểm.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B.", pause: 200 },
              { lang: "zh-CN", text: "考试成绩是多少分", pause: 400 },
              { lang: "vi-VN", text: "Hỏi về số điểm bài thi luôn dùng từ thành tích điểm số.", pause: 300 }
            ]
          },

          // C. Luyện nghe hiểu (Câu 7, 8)
          {
            id: "g1-ex-7",
            type: "Nghe hiểu bắt chi tiết",
            isListening: true,
            prompt: "Nghe đoạn ghi âm và trả lời câu hỏi: Người nói dự định sẽ làm gì sau khi tan làm?",
            options: [
              "A. Đi ngân hàng giải quyết công việc",
              "B. Về nhà chăm sóc mẹ bị ốm",
              "C. Ở lại công ty nỗ lực làm việc",
              "D. Cùng bạn bè bàn luận vấn đề"
            ],
            correct: 1,
            transcript: "最近我妈妈生病了，我每天下班以后都要马上回家照顾她。",
            questionAudio: [
              { lang: "vi-VN", text: "Câu bảy: Hãy nghe đoạn ghi âm sau đây:", pause: 300 },
              { lang: "zh-CN", text: "最近我妈妈生病了，我每天下班以后都要马上回家照顾她。", pause: 800 },
              { lang: "vi-VN", text: "Câu hỏi: Người nói dự định sẽ làm gì sau khi tan làm?", pause: 400 }
            ],
            reasonRight: "Trong đoạn nghe có câu rõ ràng: 回家照顾她 (về nhà chăm sóc bà ấy - tức người mẹ bị ốm).",
            reasonWrong: "Các phương án khác đưa ra thông tin nhiễu không có trong nội dung nghe.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B. Người nói nêu rõ:", pause: 200 },
              { lang: "zh-CN", text: "回家照顾她", pause: 400 },
              { lang: "vi-VN", text: "tức là về nhà chăm sóc người mẹ đang bị bệnh.", pause: 300 }
            ]
          },
          {
            id: "g1-ex-8",
            type: "Nghe hiểu ngữ khí & nội dung",
            isListening: true,
            prompt: "Nghe đoạn hội thoại và chọn nhận định chính xác nhất về kết quả bài thi:",
            options: [
              "A. Người nói đạt thành tích vô cùng xuất sắc",
              "B. Người nói không hề cố gắng ôn tập",
              "C. Người nói đã rất nỗ lực nhưng điểm thi không như ý",
              "D. Người nói nhờ bạn bè giải quyết giúp sự việc"
            ],
            correct: 2,
            transcript: "别提了，虽然我复习得很努力，但是这次的考试成绩还是不太好。",
            questionAudio: [
              { lang: "vi-VN", text: "Câu tám: Hãy nghe kỹ ngữ khí và nội dung đoạn thoại sau:", pause: 300 },
              { lang: "zh-CN", text: "别提了，虽然我复习得很努力，但是这次的考试成绩还是不太好。", pause: 800 },
              { lang: "vi-VN", text: "Câu hỏi: Nhận định nào sau đây là chính xác?", pause: 400 }
            ],
            reasonRight: "Khẩu ngữ 别提了 mở đầu biểu thị than thở, vế sau nêu rõ tuy rất nỗ lực ôn tập nhưng điểm thi vẫn không tốt.",
            reasonWrong: "A sai vì điểm không tốt; B sai vì người nói có ôn rất nỗ lực; D không được nhắc tới.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là C. Cụm từ than thở:", pause: 200 },
              { lang: "zh-CN", text: "别提了", pause: 300 },
              { lang: "vi-VN", text: "và câu nói tuy ôn tập rất nỗ lực nhưng điểm thi vẫn chưa tốt.", pause: 300 }
            ]
          }
        ],

        // ============================================================
        // TỰ DÙNG TỪ & PHẢN HỒI (2 TÌNH HUỐNG 3 TẦNG)
        // ============================================================
        selfUse: {
          id: "g1-self-1",
          situation: "Bạn thấy đồng nghiệp của mình đang xách rất nhiều tài liệu nặng và chuẩn bị đi xử lý một sự việc gấp. Hãy chủ động mở lời muốn xách đỡ giúp họ và dặn họ đừng quá lo lắng.",
          hint1: "Hãy dùng động từ xách đồ có quai, kết hợp cấu trúc đề nghị giúp ai làm việc gì, và nhắc đến lượng từ của sự việc.",
          hint2: "Khung câu gợi ý: 我来帮你提... / 这件事情...",
          modelAnswer: "这个包太重了，我来帮你提吧。这件事情你别太担心。",
          modelExplain: "Câu mẫu vận dụng chuẩn xác động từ 提 cho túi xách, kết hợp cấu trúc 帮助 mang tân ngữ trực tiếp (我来帮你提), và danh từ 事情 đi cùng đại từ chỉ định 这.",
          modelAudio: [
            { lang: "vi-VN", text: "Tình huống một: Đề nghị xách đồ giúp đồng nghiệp. Lắng nghe câu mẫu:", pause: 300 },
            { lang: "zh-CN", text: "这个包太重了，我来帮你提吧。这件事情你别太担心。", pause: 1500 }
          ]
        },
        additionalSelfUse: {
          id: "g1-self-2",
          situation: "Kỳ thi tiếng Trung đã kết thúc và bạn nhận được điểm số rất cao. Hãy viết một đoạn ngắn nói về sự chăm chỉ nỗ lực của bản thân, và cảm ơn sự giúp đỡ tận tình của thầy giáo.",
          hint1: "Vận dụng cụm từ đạt thành tích tốt, phó từ nỗ lực đứng trước động từ, và kết cấu dưới sự giúp đỡ của ai đó.",
          hint2: "Khung câu gợi ý: 在老师的帮助下... / 经过努力... / 取得了好成绩",
          modelAnswer: "在老师的帮助下，我平时学习非常努力，这次考试取得了很好的成绩。非常感谢老师！",
          modelExplain: "Câu này kết hợp hoàn hảo cấu trúc danh từ 在...的帮助下, vị ngữ tính từ 努力 đi cùng phó từ mức độ, và động từ kết hợp chuẩn mực 取得好成绩.",
          modelAudio: [
            { lang: "vi-VN", text: "Tình huống hai: Báo tin điểm thi và cảm ơn thầy cô. Lắng nghe câu mẫu:", pause: 300 },
            { lang: "zh-CN", text: "在老师的帮助下，我平时学习非常努力，这次考试取得了很好的成绩。非常感谢老师！", pause: 2000 }
          ]
        },

        // ============================================================
        // ÔN TẬP CÁCH QUÃNG NGÀY 1, 3, 7 (TOÀN BỘ 6 TỪ)
        // ============================================================
        reviews: [
          // Ngày 1: Nhớ nghĩa cốt lõi & Cấu trúc cơ bản
          {
            day: 1,
            type: "Nhớ nghĩa & Tạo câu cơ bản",
            q: "Hãy dịch câu sau sang tiếng Trung có dùng lượng từ chuẩn: 'Hôm nay tôi có hai việc quan trọng cần làm.'",
            answer: "我今天有两件事情要做。",
            explain: "Bắt buộc dùng lượng từ 件 trước 事情, số lượng 2 dùng 两 chứ không dùng 二.",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày một: Nhớ lượng từ của sự việc. Đáp án chuẩn:", pause: 300 },
              { lang: "zh-CN", text: "我今天有两件事情要做。", pause: 1200 }
            ]
          },
          {
            day: 1,
            type: "Nhớ nghĩa & Tạo câu cơ bản",
            q: "Để động viên bạn bè 'Chỉ cần bạn cố gắng học tập, bạn nhất định sẽ tiến bộ', bạn nói thế nào?",
            answer: "只要你努力学习，就一定会进步。",
            explain: "努力 đứng trực tiếp trước động từ 学习 làm trạng ngữ biểu thị phương thức hành động.",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày một: Cố gắng làm gì. Đáp án chuẩn:", pause: 300 },
              { lang: "zh-CN", text: "只要你努力学习，就一定会进步。", pause: 1200 }
            ]
          },

          // Ngày 3: Bẫy ngữ pháp & Vị trí kết hợp
          {
            day: 3,
            type: "Bẫy kết hợp & Vị trí",
            q: "Sửa lỗi câu sai sau: 他生病了，我要去医院照顾给他。",
            answer: "他生病了，我要去医院照顾他。",
            explain: "照顾 mang tân ngữ trực tiếp chỉ người, tuyệt đối không chèn giới từ 给 vào phía sau động từ.",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày ba: Bẫy thừa giới từ. Câu sửa đúng là:", pause: 300 },
              { lang: "zh-CN", text: "他生病了，我要去医院照顾他。", pause: 1200 }
            ]
          },
          {
            day: 3,
            type: "Bẫy kết hợp & Vị trí",
            q: "Tại sao nói '你可以帮助我吗' là đúng, nhưng nói '你可以帮忙我吗' lại là sai ngữ pháp?",
            answer: "Vì 帮助 là ngoại động từ mang tân ngữ trực tiếp (帮助我), còn 帮忙 là động từ ly hợp đã có tân ngữ 忙 bên trong, không thể nhận thêm tân ngữ 我 phía sau.",
            explain: "Với 帮忙, phải nói 帮我的忙 hoặc 给我帮忙.",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày ba: Phân biệt động từ thường và động từ ly hợp. Hãy ghi nhớ quy tắc mang tân ngữ.", pause: 400 }
            ]
          },

          // Ngày 7: Phản xạ giao tiếp & Ứng dụng nâng cao
          {
            day: 7,
            type: "Vận dụng giao tiếp & Phản xạ",
            q: "Khi bạn gặp một ngày rất xui xẻo và bạn bè hỏi thăm, câu cửa miệng than thở nào hay dùng nhất với từ 提?",
            answer: "别提了！",
            explain: "别提了 mang nghĩa 'Đừng nhắc nữa / Chán lắm khỏi phải nói', dùng mở đầu cho vế câu than phiền.",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày bảy: Khẩu ngữ than thở. Đọc dứt khoát:", pause: 300 },
              { lang: "zh-CN", text: "别提了！", pause: 1000 }
            ]
          },
          {
            day: 7,
            type: "Nghe hiểu & Ứng dụng tổng hợp",
            listenAudio: [
              { lang: "zh-CN", text: "在大家的帮助下，他的汉语成绩提高得非常快，真让人高兴。", pause: 1000 }
            ],
            q: "Nghe câu tiếng Trung và cho biết: Nhờ vào điều gì mà điểm tiếng Trung của anh ấy tiến bộ nhanh?",
            answer: "Nhờ vào sự giúp đỡ của mọi người (在大家的帮助下).",
            explain: "Cấu trúc 在...帮助下 chỉ nguyên nhân khách quan đem lại thành tích (成绩) tiến bộ vượt bậc.",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày bảy: Lời giải câu nghe hiểu. Đáp án là nhờ có sự giúp đỡ của mọi người.", pause: 300 }
            ]
          }
        ]
      }, // Kết thúc group-1 (Nhóm 1)
      // ==============================================================
      // NHÓM 2: HỌC TẬP & NGÔN NGỮ
      // ==============================================================
      {
        id: "group-2",
        title: "Nhóm 2: Học tập & Ngôn ngữ",
        desc: "Các từ vựng trọng tâm về hoạt động tiếp thu tri thức, rèn luyện kỹ năng, trao đổi thư từ và văn hóa nghệ thuật.",
        words: [
          // ------------------------------------------------------------
          // TỪ SỐ 7: 讲 [講] (jiǎng)
          // ------------------------------------------------------------
          {
            id: "word-7-jiang",
            index: 7,
            sourceIndex: 7,
            hanzi: "讲",
            pinyin: "jiǎng",
            coreMeaning: "nói, kể, giảng giải",
            pos: "Động từ",
            topic: "Học tập & Giao tiếp",
            introAudio: [
              { lang: "vi-VN", text: "Từ số bảy:", pause: 200 },
              { lang: "zh-CN", text: "讲", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: nói, kể, giảng giải.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn kể một câu chuyện dài có mở đầu kết thúc, khi thầy cô truyền đạt kiến thức trên lớp, hoặc khi bàn luận đạo lý, giải thích sự tình có đầu có đuôi.",
              detail: "Khác với các động từ phát âm thông thường, từ này nhấn mạnh vào tính nội dung, tính hệ thống của lời nói. Người nói thường đóng vai trò truyền đạt thông tin (giảng bài, kể chuyện, nói lý lẽ).",
              keyPoint: "Thường kết hợp với các danh từ có nội dung dài như 故事 (câu chuyện), 课 (tiết học/bài học), 道理 (đạo lý, lẽ phải).",
              audio: [
                { lang: "vi-VN", text: "Động từ ", pause: 150 },
                { lang: "zh-CN", text: "讲", pause: 400 },
                { lang: "vi-VN", text: "nhấn mạnh vào việc nói có hệ thống, kể lại diễn biến hoặc giảng dạy kiến thức. Thường đi cùng câu chuyện, tiết học hoặc đạo lý.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Giảng bài / Kể chuyện",
                pattern: "讲 + 课 / 故事 / 道理",
                note: "Kết hợp trực tiếp với danh từ biểu thị nội dung được truyền tải.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Giảng bài hoặc kể chuyện:", pause: 250 },
                  { lang: "zh-CN", text: "讲课", pause: 600 },
                  { lang: "vi-VN", text: "giảng bài;", pause: 200 },
                  { lang: "zh-CN", text: "讲故事", pause: 600 },
                  { lang: "vi-VN", text: "kể chuyện.", pause: 300 }
                ]
              },
              {
                title: "Kể hoặc giảng giải cho ai nghe",
                pattern: "给 + Ai + 讲 + (Nội dung)",
                note: "Dùng giới từ 给 để dẫn đối tượng tiếp nhận thông tin.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Kể hoặc giải thích cho ai nghe:", pause: 250 },
                  { lang: "zh-CN", text: "给我讲一个故事", pause: 800 },
                  { lang: "vi-VN", text: "kể cho tôi một câu chuyện;", pause: 200 },
                  { lang: "zh-CN", text: "给学生讲课", pause: 700 },
                  { lang: "vi-VN", text: "giảng bài cho học sinh.", pause: 300 }
                ]
              },
              {
                title: "Đánh giá mức độ rõ ràng khi giảng giải",
                pattern: "讲 + 得 + 很 / 非常 + 清楚",
                note: "Sử dụng bổ ngữ trạng thái để khen ngợi khả năng truyền đạt dễ hiểu.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Đánh giá giảng giải rất rõ ràng:", pause: 250 },
                  { lang: "zh-CN", text: "老师讲得很清楚。", pause: 800 },
                  { lang: "vi-VN", text: "Thầy cô giảng bài rất rõ ràng, dễ hiểu.", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "王老师讲课讲得非常生动，大家都喜欢听。",
                vi: "Thầy Vương giảng bài rất sinh động, ai cũng thích nghe.",
                pause: 1500
              },
              {
                zh: "每天晚上睡觉前，妈妈都会给我讲一个有趣的故事。",
                vi: "Mỗi tối trước khi đi ngủ, mẹ đều sẽ kể cho tôi một câu chuyện thú vị.",
                pause: 1500
              },
              {
                zh: "这道题我不太懂，你可以给我讲讲吗？",
                vi: "Câu hỏi này tôi không hiểu lắm, bạn có thể giảng giải cho tôi một chút được không?",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt 讲 (giảng giải/kể nội dung), 说 (nói chung/phát ngôn) và 告诉 (bảo/thông báo cho ai)",
              situation: "Người học tiếng Việt hay coi ba từ này đều là 'nói' nên dễ thay thế lẫn lộn làm mất tính tự nhiên.",
              explanation: "说 là động từ nói chung nhất, dùng khi phát ra âm thanh, nói một câu ngắn, hoặc biểu đạt ý kiến (说一句话, 说汉语). 讲 nhấn mạnh kể chuyện dài, giảng dạy kiến thức hoặc nói lý lẽ (讲课, 讲故事). Còn khi muốn bảo hoặc thông báo thông tin ngắn gọn cho ai đó biết, cấu trúc chuẩn bắt buộc là 告诉 + Người (hoặc 对...说), không dùng 讲 đi kèm tân ngữ người trực tiếp mang nghĩa 'bảo ai'.",
              wrong: "他讲我今天不要去办公室。",
              right: "他告诉我今天不要去办公室。 / 他对我说今天不要去办公室。",
              tip: "Nói tiếng Trung, nói vài câu -> dùng 说. Giảng bài, kể chuyện, nói lý lẽ -> dùng 讲. Bảo ai, thông báo cho ai biết -> dùng 告诉.",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa giảng giải, phát ngôn và thông báo:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai khi muốn truyền đạt lời dặn dò thông báo:", pause: 200 },
                { lang: "zh-CN", text: "他讲我今天不要去办公室。", pause: 600 },
                { lang: "vi-VN", text: "Từ này không đi trực tiếp với đại từ nhân xưng để mang nghĩa bảo ai làm gì. Để thông báo lời dặn, bạn phải dùng từ bảo hoặc giới từ nói với ai. Câu sửa đúng là:", pause: 300 },
                { lang: "zh-CN", text: "他告诉我今天不要去办公室。", pause: 800 },
                { lang: "vi-VN", text: "hoặc nói:", pause: 200 },
                { lang: "zh-CN", text: "他对我说今天不要去办公室。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu j (đầu lưỡi áp sát lợi dưới, mặt lưỡi nâng lên ngạc cứng), kết hợp vận mẫu iang, đọc thanh ba (jiǎng) trầm và kéo dài tự nhiên.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm thanh ba chuẩn xác: hạ thấp giọng rồi nâng nhẹ. Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "讲", pause: 1500 },
                { lang: "zh-CN", text: "讲课", pause: 1500 },
                { lang: "zh-CN", text: "讲故事", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 讲 bên trái là bộ Ngôn (讠) tượng trưng cho lời nói và ngôn ngữ. Bên phải là chữ Tỉnh (井 - cái giếng) gồm hai nét ngang và hai nét sổ đan xen tạo âm và khung chữ.",
              audio: [
                { lang: "vi-VN", text: "Mẹo nhớ mặt chữ: Bên trái là bộ ngôn liên quan đến lời ăn tiếng nói giảng giải, bên phải là chữ tỉnh mang hình dáng khung giếng nước đan chéo nhau.", pause: 400 }
              ]
            },
            summary: "讲: động từ chỉ hành động giảng bài (讲课), kể chuyện (讲故事), giải thích đạo lý (讲道理). Khác với 说 ở tính hệ thống nội dung, và khác với 告诉 ở chỗ không mang tân ngữ chỉ người trực tiếp để truyền lệnh."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 8: 练习 [練習] (liànxí)
          // ------------------------------------------------------------
          {
            id: "word-8-lianxi",
            index: 8,
            sourceIndex: 19,
            hanzi: "练习",
            pinyin: "liànxí",
            coreMeaning: "luyện tập, rèn luyện; bài tập rèn luyện",
            pos: "Động từ / Danh từ",
            topic: "Học tập & Kỹ năng",
            introAudio: [
              { lang: "vi-VN", text: "Từ số tám:", pause: 200 },
              { lang: "zh-CN", text: "练习", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: luyện tập, rèn luyện; bài tập thực hành.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn lặp đi lặp lại một hành động, bài học hay kỹ năng (như nghe, nói, viết, chơi thể thao) để trở nên thuần thục; hoặc chỉ các bài tập củng cố trong giáo trình.",
              detail: "Khi làm động từ, từ này mang tân ngữ là một kỹ năng hoặc môn học (练习口语 - luyện khẩu ngữ, 练习汉字 - luyện chữ Hán). Khi làm danh từ, nó chỉ phần bài tập thực hành (听力练习 - bài tập luyện nghe, 课后练习 - bài tập sau bài học).",
              keyPoint: "Nhấn mạnh vào quá trình lặp lại để nâng cao kỹ năng thực hành, khác với việc ôn lại lý thuyết đã qua.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "练习", pause: 400 },
                { lang: "vi-VN", text: "vừa là động từ vừa là danh từ. Diễn tả việc lặp đi lặp lại một kỹ năng để thành thạo, hoặc chỉ các dạng bài tập thực hành rèn luyện trong sách.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Luyện tập kỹ năng cụ thể",
                pattern: "练习 + Kỹ năng / Môn học / Hành động",
                note: "Đứng trước danh từ hoặc động từ chỉ kỹ năng cần rèn luyện.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Rèn luyện kỹ năng cụ thể:", pause: 250 },
                  { lang: "zh-CN", text: "练习口语", pause: 600 },
                  { lang: "vi-VN", text: "luyện khẩu ngữ giao tiếp;", pause: 200 },
                  { lang: "zh-CN", text: "练习书法", pause: 600 },
                  { lang: "vi-VN", text: "luyện viết thư pháp.", pause: 300 }
                ]
              },
              {
                title: "Làm bài tập rèn luyện (Dùng làm danh từ)",
                pattern: "做 + (Chủ đề) + 练习",
                note: "Kết hợp với động từ 做 để diễn đạt hành động làm bài tập củng cố.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Làm bài tập củng cố:", pause: 250 },
                  { lang: "zh-CN", text: "做听力练习", pause: 700 },
                  { lang: "vi-VN", text: "làm bài tập luyện nghe;", pause: 200 },
                  { lang: "zh-CN", text: "做课后练习", pause: 700 },
                  { lang: "vi-VN", text: "làm bài tập sau bài học.", pause: 300 }
                ]
              },
              {
                title: "Khuyên nhủ rèn luyện nhiều hơn",
                pattern: "多 + 练习",
                note: "Phó từ 多 đứng trước động từ để biểu thị tần suất và mức độ nỗ lực rèn luyện.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Khuyên nhủ luyện tập nhiều hơn:", pause: 250 },
                  { lang: "zh-CN", text: "要想学好外语，必须多练习。", pause: 1000 },
                  { lang: "vi-VN", text: "Muốn học tốt ngoại ngữ, nhất định phải luyện tập nhiều.", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "学汉语没有近路，只有每天坚持练习才能说得流利。",
                vi: "Học tiếng Trung không có đường tắt, chỉ có kiên trì luyện tập mỗi ngày mới có thể nói lưu loát.",
                pause: 1500
              },
              {
                zh: "做完书上的练习题以后，请大家对照一下答案。",
                vi: "Sau khi làm xong bài tập trong sách giáo khoa, xin mời mọi người đối chiếu lại đáp án.",
                pause: 1500
              },
              {
                zh: "他每天晚上都会花半个小时练习写汉字。",
                vi: "Mỗi tối anh ấy đều dành ra nửa tiếng đồng hồ để luyện viết chữ Hán.",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt 练习 (luyện tập kỹ năng/bài tập củng cố), 复习 (ôn tập bài cũ trước thi) và 作业 (nhiệm vụ bài tập về nhà)",
              situation: "Người học tiếng Việt hay dùng từ 'ôn bài' hoặc 'bài tập' chung chung nên nhầm lẫn ba từ này.",
              explanation: "练习 nhấn mạnh vào việc rèn luyện tay nghề, kỹ năng thông qua thực hành thao tác (luyện phát âm, luyện chạy bộ, làm câu đố rèn phản xạ). 复习 nhấn mạnh vào việc xem lại kiến thức lý thuyết đã học trong quá khứ để ghi nhớ cho kỳ thi (ôn bài cũ). 作业 là nhiệm vụ học tập chính thức do thầy cô giao đem về nhà làm và phải nộp.",
              wrong: "明天就要期末考试了，今晚我要在家练习课文。",
              right: "明天就要期末考试了，今晚我要在家复习课文。",
              tip: "Xem lại bài cũ chuẩn bị thi cử -> 复习. Rèn luyện kỹ năng thực hành -> 练习. Bài thầy cô giao về nhà nộp -> 作业.",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa rèn luyện thực hành, ôn bài cũ và nhiệm vụ bài tập về nhà:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu dùng từ chưa chuẩn xác khi chuẩn bị cho kỳ thi:", pause: 200 },
                { lang: "zh-CN", text: "明天就要期末考试了，今晚我要在家练习课文。", pause: 600 },
                { lang: "vi-VN", text: "Xem lại bài khóa để nắm vững kiến thức trước ngày thi phải dùng từ ôn tập bài cũ. Câu dùng từ chuẩn xác là:", pause: 300 },
                { lang: "zh-CN", text: "明天就要期末考试了，今晚我要在家复习课文。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Chữ 练 đọc thanh bốn (liàn) dứt khoát từ trên xuống. Chữ 习 đọc thanh hai (xí) nâng cao dần giọng từ dưới lên. Tránh phát âm xí thành xì dấu huyền của tiếng Việt.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm: chữ đầu rơi dứt khoát, chữ sau vuốt cao. Nghe và đọc theo:", pause: 300 },
                { lang: "zh-CN", text: "练习", pause: 1500 },
                { lang: "zh-CN", text: "练习口语", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 练 có bộ Mịch (纟 - sợi tơ) bên trái, ngụ ý quá trình luyện tơ trắng cần sự tỉ mỉ lặp lại; bên phải là bộ Đông lược nét. Chữ 习 gồm chữ Vũ (羽 - cánh lông chim non đang vỗ cánh tập bay) được giản thể thành hai nét chấm phẩy bên trong khung.",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Luyện có bộ mịch tượng trưng cho sợi tơ rèn giũa kiên trì. Chữ Tập mang hình ảnh đôi cánh chim non kiên nhẫn đập cánh tập bay.", pause: 400 }
              ]
            },
            summary: "练习: vừa là động từ luyện tập kỹ năng thao tác (练习口语, 多练习), vừa là danh từ bài tập thực hành (听力练习). Phân biệt với 复习 (ôn bài cũ trước kỳ thi) và 作业 (nhiệm vụ bài tập về nhà được giao)."
          },
          // ------------------------------------------------------------
          // TỪ SỐ 9: 作业 [作業] (zuòyè)
          // ------------------------------------------------------------
          {
            id: "word-9-zuoye",
            index: 9,
            sourceIndex: 24,
            hanzi: "作业",
            pinyin: "zuòyè",
            coreMeaning: "bài tập, bài tập về nhà",
            pos: "Danh từ",
            topic: "Học tập & Nhà trường",
            introAudio: [
              { lang: "vi-VN", text: "Từ số chín:", pause: 200 },
              { lang: "zh-CN", text: "作业", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: bài tập, bài tập về nhà.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi nói về các nhiệm vụ học tập, bài viết hoặc câu hỏi do giáo viên giao cho học sinh, sinh viên làm sau giờ học để nộp lại chấm điểm[span_0](start_span)[span_0](end_span)[span_1](start_span)[span_1](end_span).",
              detail: "Đây là danh từ chỉ bài tập chính khóa[span_2](start_span)[span_2](end_span). Thường dùng các lượng từ như 份 (fèn - phần bài tập), 篇 (piān - bài luận), hoặc lượng từ cá thể hóa[span_3](start_span)[span_3](end_span).",
              keyPoint: "Kết hợp với các động từ chuyên dụng: 做 / 写 (làm/viết bài tập), 交 (nộp bài tập), 留 / 布置 (thầy cô giao bài tập)[span_4](start_span)[span_4](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "作业", pause: 400 },
                { lang: "vi-VN", text: "chỉ nhiệm vụ bài tập về nhà do giáo viên giao[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span). Động từ đi kèm gồm có làm bài tập, nộp bài tập và thầy cô giao bài tập[span_7](start_span)[span_7](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Làm hoặc viết bài tập về nhà",
                pattern: "做 / 写 + 作业",
                note: "Cả 做 và 写 đều dùng tự nhiên khi nói hành động làm bài tập[span_8](start_span)[span_8](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Làm hoặc viết bài tập:", pause: 250 },
                  { lang: "zh-CN", text: "做作业", pause: 600 },
                  { lang: "vi-VN", text: "hoặc", pause: 200 },
                  { lang: "zh-CN", text: "写作业", pause: 600 }
                ]
              },
              {
                title: "Nộp bài tập cho thầy cô",
                pattern: "交 + 作业",
                note: "Động từ 交 mang nghĩa trao nộp giấy tờ, bài vở cho người quản lý[span_9](start_span)[span_9](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Nộp bài tập:", pause: 250 },
                  { lang: "zh-CN", text: "交作业", pause: 700 },
                  { lang: "vi-VN", text: "Ví dụ: Mau chóng nộp bài tập cho thầy giáo[span_10](start_span)[span_10](end_span).", pause: 300 }
                ]
              },
              {
                title: "Thầy cô giao bài tập về nhà",
                pattern: "留 / 布置 + 作业",
                note: "留 là khẩu ngữ thông dụng; 布置 trang trọng hơn, thường dùng trong trường học[span_11](start_span)[span_11](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Thầy cô giao bài tập về nhà:", pause: 250 },
                  { lang: "zh-CN", text: "留作业", pause: 600 },
                  { lang: "vi-VN", text: "Hôm nay cô giáo giao rất ít bài tập[span_12](start_span)[span_12](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "我今天有很多作业要做，不能跟你一起去玩了。",
                vi: "Hôm nay tôi có rất nhiều bài tập phải làm, không thể đi chơi cùng bạn được rồi[span_13](start_span)[span_13](end_span).",
                pause: 1500
              },
              {
                zh: "请大家明天上课前把昨天的作业交上来。",
                vi: "Xin mọi người nộp bài tập của ngày hôm qua lên trước giờ vào lớp ngày mai[span_14](start_span)[span_14](end_span).",
                pause: 1500
              },
              {
                zh: "王老师今天留的汉语作业不太难，我半个小时就写完了。",
                vi: "Bài tập tiếng Trung thầy Vương giao hôm nay không khó lắm, tôi nửa tiếng đã viết xong rồi[span_15](start_span)[span_15](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa 作业 (bài tập về nhà), 工作 (công việc kiếm sống) và 练习 (rèn luyện kỹ năng)",
              situation: "Người học tiếng Việt hay dùng từ 'việc' hoặc 'bài' dẫn tới dịch sai khi nói về bài học ở trường[span_16](start_span)[span_16](end_span).",
              explanation: "作业 là bài tập cụ thể do thầy cô giao đem về nhà làm để nộp kiểm tra[span_17](start_span)[span_17](end_span)[span_18](start_span)[span_18](end_span). 工作 là công việc chuyên môn ở cơ quan, văn phòng kiếm thu nhập[span_19](start_span)[span_19](end_span). 练习 là các hoạt động luyện tập thao tác, rèn luyện kỹ năng nói/viết[span_20](start_span)[span_20](end_span)[span_21](start_span)[span_21](end_span). Không được nói 'có nhiều công việc của trường' bằng 工作 khi ý muốn nói là bài tập về nhà[span_22](start_span)[span_22](end_span).",
              wrong: "我今晚在家里有很多工作要做，因为明天老师要检查。",
              right: "我今晚在家里有很多作业要做，因为明天老师要检查。",
              tip: "Bài thầy cô giao về nhà nộp -> 作业[span_23](start_span)[span_23](end_span). Luyện kỹ năng thực hành -> 练习[span_24](start_span)[span_24](end_span). Việc làm ở công ty -> 工作[span_25](start_span)[span_25](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa bài tập về nhà và công việc cơ quan:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai khi muốn nói về bài tập do thầy cô giao kiểm tra:", pause: 200 },
                { lang: "zh-CN", text: "我今晚在家里有很多工作要做，因为明天老师要检查。", pause: 600 },
                { lang: "vi-VN", text: "Nhiệm vụ học tập ở trường lớp đem về nhà làm phải dùng từ bài tập về nhà, không dùng từ công việc công sở. Câu đúng là:", pause: 300 },
                { lang: "zh-CN", text: "我今晚在家里有很多作业要做，因为明天老师要检查。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Cả hai chữ 作 (zuò) và 业 (yè) đều mang thanh bốn dứt khoát từ trên xuống. Chú ý âm z trong zuò là âm đầu lưỡi trước không bật hơi, tránh đọc nhầm sang c hoặc j[span_26](start_span)[span_26](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm cả hai âm thanh bốn dứt khoát. Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "作业", pause: 1500 },
                { lang: "zh-CN", text: "写作业", pause: 1500 },
                { lang: "zh-CN", text: "交作业", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 作 bên trái có bộ Nhân đứng (亻), bên phải là chữ Sạ (乍)[span_27](start_span)[span_27](end_span). Chữ 业 gồm 5 nét, khởi đầu bằng hai nét chấm ở giữa, nét sổ ngang ngắn và một nét hoành đáy dài nâng đỡ[span_28](start_span)[span_28](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Tác có bộ nhân đứng chỉ hành động của con người làm bài. Chữ Nghiệp kết thúc bằng một nét ngang dài vững chắc dưới đáy[span_29](start_span)[span_29](end_span).", pause: 400 }
              ]
            },
            summary: "作业: danh từ chỉ bài tập về nhà[span_30](start_span)[span_30](end_span)[span_31](start_span)[span_31](end_span). Các kết hợp bắt buộc nhớ: 写作业 (viết bài tập), 交作业 (nộp bài tập), 留作业 (giao bài tập)[span_32](start_span)[span_32](end_span)."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 10: 词典 [詞典] (cídiǎn)
          // ------------------------------------------------------------
          {
            id: "word-10-cidian",
            index: 10,
            sourceIndex: 13,
            hanzi: "词典",
            pinyin: "cídiǎn",
            coreMeaning: "từ điển",
            pos: "Danh từ",
            topic: "Học tập & Dụng cụ tra cứu",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười:", pause: 200 },
              { lang: "zh-CN", text: "词典", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: từ điển[span_33](start_span)[span_33](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn cần tra cứu từ vựng mới, đối chiếu nghĩa của chữ Hán, hoặc nhắc đến sách công cụ học ngoại ngữ[span_34](start_span)[span_34](end_span)[span_35](start_span)[span_35](end_span).",
              detail: "Danh từ chỉ sách hoặc phần mềm tra cứu từ ngữ[span_36](start_span)[span_36](end_span)[span_37](start_span)[span_37](end_span). Lượng từ chuẩn xác cho từ điển dạng quyển là 本 (běn)[span_38](start_span)[span_38](end_span).",
              keyPoint: "Hành động tra từ điển luôn dùng động từ 查 (chá), tuyệt đối không dùng động từ 看 (nhìn/xem)[span_39](start_span)[span_39](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "词典", pause: 400 },
                { lang: "vi-VN", text: "chỉ cuốn từ điển dùng để giải nghĩa từ[span_40](start_span)[span_40](end_span)[span_41](start_span)[span_41](end_span). Lượng từ của nó là ", pause: 200 },
                { lang: "zh-CN", text: "本", pause: 300 },
                { lang: "vi-VN", text: "và động từ tra cứu là ", pause: 200 },
                { lang: "zh-CN", text: "查", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Tra từ điển",
                pattern: "查 + 词典",
                note: "Động từ 查 biểu thị hành vi tìm kiếm, tra khảo thông tin[span_42](start_span)[span_42](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Tra từ điển:", pause: 250 },
                  { lang: "zh-CN", text: "查词典", pause: 600 },
                  { lang: "vi-VN", text: "Gặp từ mới không biết thì tra từ điển[span_43](start_span)[span_43](end_span).", pause: 300 }
                ]
              },
              {
                title: "Lượng từ một cuốn từ điển",
                pattern: "一 + 本 + 词典",
                note: "Dùng lượng từ 本 cho sách vở, tài liệu đóng quyển[span_44](start_span)[span_44](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Một cuốn từ điển:", pause: 250 },
                  { lang: "zh-CN", text: "一本词典", pause: 600 }
                ]
              },
              {
                title: "Các loại từ điển thường gặp",
                pattern: "电子词典 / 汉越词典 / 汉英词典",
                note: "Ghép trực tiếp tên ngôn ngữ hoặc hình thức tra cứu trước 词典[span_45](start_span)[span_45](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Các loại từ điển chuyên ngành:", pause: 250 },
                  { lang: "zh-CN", text: "电子词典", pause: 600 },
                  { lang: "vi-VN", text: "từ điển điện tử;", pause: 200 },
                  { lang: "zh-CN", text: "汉越词典", pause: 600 },
                  { lang: "vi-VN", text: "từ điển Hán Việt[span_46](start_span)[span_46](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "学外语的时候，遇到不懂的生词就应该查词典。",
                vi: "Khi học ngoại ngữ, gặp từ mới không hiểu thì nên tra từ điển[span_47](start_span)[span_47](end_span).",
                pause: 1500
              },
              {
                zh: "这本汉越词典非常实用，对我的学习帮助很大。",
                vi: "Cuốn từ điển Hán-Việt này rất thiết thực, giúp ích rất nhiều cho việc học của tôi[span_48](start_span)[span_48](end_span).",
                pause: 1500
              },
              {
                zh: "你手机里下载了什么汉语词典软件吗？",
                vi: "Trong điện thoại của bạn có tải ứng dụng từ điển tiếng Trung nào không[span_49](start_span)[span_49](end_span)?",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa động từ 查词典 (tra cứu tìm nghĩa) và 看词典 (đọc xem giải trí); Phân biệt 词典 và 字典",
              situation: "Người học tiếng Việt thường dùng từ 'xem từ điển' nên dịch máy móc thành *看词典[span_50](start_span)[span_50](end_span).",
              explanation: "Khi cần tìm hiểu cách dùng hay nghĩa của một từ ngữ cụ thể, tiếng Trung bắt buộc dùng động từ tra cứu là 查词典[span_51](start_span)[span_51](end_span). Dùng 看词典 sẽ khiến người bản ngữ hiểu là bạn mở từ điển ra đọc từng trang như đọc truyện tranh[span_52](start_span)[span_52](end_span). Ngoài ra, 字典 là sách chuyên giải nghĩa từng chữ Hán đơn lẻ, còn 词典 là sách giải nghĩa từ ngữ, cụm từ hoàn chỉnh[span_53](start_span)[span_53](end_span).",
              wrong: "这个词是什么意思，你看一下词典吧。",
              right: "这个词是什么意思，你查一下词典吧。",
              tip: "Hành vi tìm nghĩa từ vựng -> luôn dùng 查词典, không dùng 看词典[span_54](start_span)[span_54](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy chọn động từ khi tra cứu từ điển:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu dùng động từ chưa đúng với thói quen bản ngữ:", pause: 200 },
                { lang: "zh-CN", text: "这个词是什么意思，你看一下词典吧。", pause: 600 },
                { lang: "vi-VN", text: "Khi tìm kiếm thông tin nghĩa từ, người Trung Quốc dùng động từ tra chứ không dùng động từ xem nhìn. Câu nói chuẩn xác là:", pause: 300 },
                { lang: "zh-CN", text: "这个词是什么意思，你查一下词典吧。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Chữ 词 đọc âm c (đầu lưỡi chạm răng trước rồi bật luồng hơi mạnh ra), thanh hai (cí)[span_55](start_span)[span_55](end_span). Chữ 典 đọc thanh ba (diǎn)[span_56](start_span)[span_56](end_span). Tránh nhầm âm c thành z không bật hơi[span_57](start_span)[span_57](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm bật hơi ở chữ đầu tiên: c bật hơi thanh hai, điển thanh ba. Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "词典", pause: 1500 },
                { lang: "zh-CN", text: "查词典", pause: 1500 },
                { lang: "zh-CN", text: "一本词典", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 词 gồm bộ Ngôn (讠) bên trái chỉ ngôn từ ngữ nghĩa, bên phải là chữ Ty (司) đóng vai trò biểu âm[span_58](start_span)[span_58](end_span). Chữ 典 gồm bộ Khúc (曲) phía trên và bộ Củng (廾 - hai tay nâng sách quý) ở phía dưới[span_59](start_span)[span_59](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Từ có bộ ngôn chỉ từ ngữ. Chữ Điển có hình dáng hai bàn tay cung kính nâng bộ sách quý cổ xưa[span_60](start_span)[span_60](end_span).", pause: 400 }
              ]
            },
            summary: "词典: danh từ từ điển[span_61](start_span)[span_61](end_span)[span_62](start_span)[span_62](end_span). Lượng từ: 本[span_63](start_span)[span_63](end_span). Động từ đi kèm chuẩn xác: 查词典 (tra từ điển)[span_64](start_span)[span_64](end_span)."
          },
          // ------------------------------------------------------------
          // TỪ SỐ 11: 音乐 [音樂] (yīnyuè)
          // ------------------------------------------------------------
          {
            id: "word-11-yinyue",
            index: 11,
            sourceIndex: 6,
            hanzi: "音乐",
            pinyin: "yīnyuè",
            coreMeaning: "âm nhạc, nhạc",
            pos: "Danh từ",
            topic: "Văn hóa & Nghệ thuật",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười một:", pause: 200 },
              { lang: "zh-CN", text: "音乐", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: âm nhạc, nhạc.", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi nói về sở thích nghe nhạc, các bài hát, giai điệu thư giãn hoặc các sự kiện biểu diễn nghệ thuật âm nhạc[span_0](start_span)[span_0](end_span)[span_1](start_span)[span_1](end_span).",
              detail: "Danh từ chỉ nghệ thuật phối hợp các âm thanh, giai điệu[span_2](start_span)[span_2](end_span)[span_3](start_span)[span_3](end_span). Lượng từ chuẩn xác để đếm một bản nhạc hoặc khúc nhạc là 首 (shǒu - bài/bản) hoặc 段 (duàn - đoạn nhạc)[span_4](start_span)[span_4](end_span).",
              keyPoint: "Kết hợp thường gặp nhất là động từ 听 (nghe): 听音乐. Chữ 乐 ở đây là chữ đa âm đọc là yuè, không đọc là lè[span_5](start_span)[span_5](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "音乐", pause: 400 },
                { lang: "vi-VN", text: "chỉ các giai điệu âm nhạc[span_6](start_span)[span_6](end_span)[span_7](start_span)[span_7](end_span). Lượng từ của một khúc nhạc hay bản nhạc là ", pause: 200 },
                { lang: "zh-CN", text: "首", pause: 300 },
                { lang: "vi-VN", text: ", hành động nghe nhạc kết hợp cùng động từ thính[span_8](start_span)[span_8](end_span).", pause: 300 }
              ]
            },
            structures: [
              {
                title: "Nghe nhạc thư giãn",
                pattern: "听 + 音乐",
                note: "Cụm động tân phổ biến nhất chỉ sở thích hoặc hoạt động giải trí hàng ngày[span_9](start_span)[span_9](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Nghe nhạc:", pause: 250 },
                  { lang: "zh-CN", text: "听音乐", pause: 600 },
                  { lang: "vi-VN", text: "Tôi thích vừa làm bài tập vừa nghe nhạc[span_10](start_span)[span_10](end_span).", pause: 300 }
                ]
              },
              {
                title: "Lượng từ của bài nhạc / khúc nhạc",
                pattern: "一 + 首 / 段 + 音乐",
                note: "首 dùng cho bài hát, bản nhạc hoàn chỉnh; 段 dùng cho một đoạn nhạc trích đoạn[span_11](start_span)[span_11](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Một bản nhạc hoặc một đoạn nhạc:", pause: 250 },
                  { lang: "zh-CN", text: "一首音乐", pause: 600 },
                  { lang: "vi-VN", text: "hoặc", pause: 200 },
                  { lang: "zh-CN", text: "一段音乐", pause: 600 }
                ]
              },
              {
                title: "Các danh từ ghép chủ đề âm nhạc",
                pattern: "音乐会 / 音乐家",
                note: "音乐会 là buổi hòa nhạc; 音乐家 là nhạc sĩ sáng tác hoặc biểu diễn tài năng[span_12](start_span)[span_12](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Buổi hòa nhạc và nhạc sĩ:", pause: 250 },
                  { lang: "zh-CN", text: "音乐会", pause: 600 },
                  { lang: "vi-VN", text: "buổi hòa nhạc;", pause: 200 },
                  { lang: "zh-CN", text: "音乐家", pause: 600 },
                  { lang: "vi-VN", text: "nhạc sĩ[span_13](start_span)[span_13](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "我习惯在写作业的时候听一点轻音乐。",
                vi: "Tôi có thói quen nghe một chút nhạc nhẹ lúc làm bài tập[span_14](start_span)[span_14](end_span).",
                pause: 1500
              },
              {
                zh: "这首音乐的旋律非常动听，让人感觉很轻松。",
                vi: "Giai điệu của bản nhạc này vô cùng êm tai, khiến con người cảm thấy rất thư thái[span_15](start_span)[span_15](end_span).",
                pause: 1500
              },
              {
                zh: "周末我和朋友一起去剧场听了一场音乐会。",
                vi: "Cuối tuần tôi cùng bạn bè đến nhà hát nghe một buổi hòa nhạc[span_16](start_span)[span_16](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Chữ đa âm đa nghĩa: 乐 đọc là yuè (nhạc) hay lè (vui vẻ)?",
              situation: "Người học tiếng Trung hay nhầm lẫn cách phát âm của chữ 乐 trong các từ ghép khác nhau[span_17](start_span)[span_17](end_span).",
              explanation: "Chữ 乐 khi liên quan đến âm thanh, bài hát, nhạc cụ thì bắt buộc đọc là yuè (thanh bốn), như trong 音乐 (âm nhạc), 乐器 (nhạc cụ)[span_18](start_span)[span_18](end_span). Nhưng khi chữ này mang nghĩa vui mừng, hạnh phúc thì đọc là lè (thanh bốn), như trong 快乐 (vui vẻ), 乐意 (sẵn lòng)[span_19](start_span)[span_19](end_span). Không được đọc 音乐 thành *yīnlè[span_20](start_span)[span_20](end_span).",
              wrong: "他非常喜欢听流行音乐（yīnlè）。",
              right: "他非常喜欢听流行音乐（yīnyuè）。",
              tip: "Liên quan đến âm thanh nghệ thuật -> đọc là yuè[span_21](start_span)[span_21](end_span). Liên quan đến niềm vui vẻ -> đọc là lè[span_22](start_span)[span_22](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy chữ đa âm đa nghĩa giữa âm nhạc và niềm vui:", pause: 200 },
                { lang: "vi-VN", text: "Hãy chú ý, chữ thứ hai trong từ âm nhạc mang âm đọc chuẩn là:", pause: 200 },
                { lang: "zh-CN", text: "音乐", pause: 600 },
                { lang: "vi-VN", text: "Không được đọc nhầm theo âm vui vẻ trong từ khoái lạc. Cặp đối chiếu rõ ràng nhất là âm nhạc đọc là:", pause: 300 },
                { lang: "zh-CN", text: "音乐", pause: 500 },
                { lang: "vi-VN", text: "còn vui vẻ đọc là:", pause: 200 },
                { lang: "zh-CN", text: "快乐", pause: 800 }
              ]
            },
            pron: {
              guide: "Chữ 音 (yīn) đọc thanh một bằng phẳng ở âm vực cao[span_23](start_span)[span_23](end_span). Chữ 乐 (yuè) bắt đầu bằng nguyên âm tròn môi ü biến âm ghép với è, rơi thanh bốn dứt khoát (yuè)[span_24](start_span)[span_24](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn âm đầu tròn môi và rơi thanh bốn dứt khoát. Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "音乐", pause: 1500 },
                { lang: "zh-CN", text: "听音乐", pause: 1500 },
                { lang: "zh-CN", text: "一首音乐", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 音 gồm bộ Lập (立) ở trên và bộ Nhật (日) ở dưới, tượng trưng cho âm thanh phát ra rõ ràng từng nhịp[span_25](start_span)[span_25](end_span). Chữ 乐 (giản thể) có 5 nét: nét phẩy, nét thụ chiết và hai nét chấm bên trong khung[span_26](start_span)[span_26](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Âm có bộ lập ở trên và bộ nhật ở dưới[span_27](start_span)[span_27](end_span). Chữ Nhạc giản thể gồm năm nét với hai nét chấm đối xứng ôm lấy nét sổ uốn[span_28](start_span)[span_28](end_span).", pause: 400 }
              ]
            },
            summary: "音乐: danh từ âm nhạc[span_29](start_span)[span_29](end_span)[span_30](start_span)[span_30](end_span). Cụm từ cốt lõi: 听音乐[span_31](start_span)[span_31](end_span). Lượng từ: 首 (bản/bài)[span_32](start_span)[span_32](end_span). Chú ý chữ 乐 đọc là yuè, phân biệt với lè trong 快乐[span_33](start_span)[span_33](end_span)."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 12: 信 (xìn)
          // ------------------------------------------------------------
          {
            id: "word-12-xin",
            index: 12,
            sourceIndex: 22,
            hanzi: "信",
            pinyin: "xìn",
            coreMeaning: "thư, bức thư; tin tưởng",
            pos: "Danh từ / Động từ",
            topic: "Giao tiếp & Thư từ",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười hai:", pause: 200 },
              { lang: "zh-CN", text: "信", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: thư, bức thư; tin tưởng[span_34](start_span)[span_34](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn viết thư tay gửi cho người thân, nhận được thư gửi qua đường bưu điện, hoặc khi biểu thị niềm tin vào lời nói của ai đó[span_35](start_span)[span_35](end_span)[span_36](start_span)[span_36](end_span).",
              detail: "Khi làm danh từ, 信 chỉ bức thư trao đổi tin tức[span_37](start_span)[span_37](end_span)[span_38](start_span)[span_38](end_span). Lượng từ độc quyền cho bức thư là 封 (fēng)[span_39](start_span)[span_39](end_span). Khi làm động từ, 信 mang nghĩa tin, tin tưởng vào điều gì (tương đương 相信)[span_40](start_span)[span_40](end_span)[span_41](start_span)[span_41](end_span).",
              keyPoint: "Hành động gửi thư bằng bưu điện dùng động từ 寄 (jì), không dùng 发 (phát - chỉ dùng cho tin nhắn điện tử, email)[span_42](start_span)[span_42](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "信", pause: 400 },
                { lang: "vi-VN", text: "vừa là danh từ bức thư, vừa là động từ tin tưởng[span_43](start_span)[span_43](end_span)[span_44](start_span)[span_44](end_span). Lượng từ của bức thư là ", pause: 200 },
                { lang: "zh-CN", text: "封", pause: 300 },
                { lang: "vi-VN", text: ", và động từ gửi thư tay qua bưu điện là ", pause: 200 },
                { lang: "zh-CN", text: "寄", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Viết, gửi hoặc nhận thư",
                pattern: "写信 / 寄信 / 收到信",
                note: "Động từ đi kèm tương ứng với từng giai đoạn chuyển phát thư từ[span_45](start_span)[span_45](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Viết thư, gửi thư và nhận thư:", pause: 250 },
                  { lang: "zh-CN", text: "写信", pause: 600 },
                  { lang: "vi-VN", text: "viết thư;", pause: 200 },
                  { lang: "zh-CN", text: "寄信", pause: 600 },
                  { lang: "vi-VN", text: "gửi thư;", pause: 200 },
                  { lang: "zh-CN", text: "收到信", pause: 600 },
                  { lang: "vi-VN", text: "nhận được thư[span_46](start_span)[span_46](end_span).", pause: 300 }
                ]
              },
              {
                title: "Lượng từ một bức thư",
                pattern: "一 + 封 + 信",
                note: "封 là lượng từ chuyên dụng biểu thị vật được niêm phong, dán kín miệng như phong bì thư[span_47](start_span)[span_47](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Một bức thư:", pause: 250 },
                  { lang: "zh-CN", text: "一封信", pause: 700 }
                ]
              },
              {
                title: "Tin tưởng ai đó (Dùng làm động từ)",
                pattern: "信 / 相信 + Ai đó + 的话",
                note: "Trong khẩu ngữ hay nói vắn tắt: 你信不信？(Cậu có tin không?)[span_48](start_span)[span_48](end_span)",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Biểu thị sự tin tưởng:", pause: 250 },
                  { lang: "zh-CN", text: "我相信你", pause: 700 },
                  { lang: "vi-VN", text: "tôi tin tưởng bạn[span_49](start_span)[span_49](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "昨天下午我收到了朋友从国外寄来的一封信。",
                vi: "Chiều hôm qua tôi đã nhận được một bức thư do người bạn gửi từ nước ngoài về[span_50](start_span)[span_50](end_span).",
                pause: 1500
              },
              {
                zh: "现在大家都在网上聊天，很少有人亲手写信了。",
                vi: "Bây giờ mọi người đều trò chuyện trên mạng, rất ít người tự tay viết thư nữa[span_51](start_span)[span_51](end_span).",
                pause: 1500
              },
              {
                zh: "这是真的事情，你一定要相信我。",
                vi: "Đây là sự việc có thật, bạn nhất định phải tin tôi[span_52](start_span)[span_52](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn lượng từ 封 (bức thư), 张 (tờ giấy); và phân biệt động từ 寄信 (gửi thư bưu điện) vs 发短信 (nhắn tin điện tử)",
              situation: "Người học tiếng Việt hay dùng lượng từ 'cái' hoặc 'tờ' cho thư nên nói thành *一个信 hoặc *一张信[span_53](start_span)[span_53](end_span).",
              explanation: "Lượng từ của thư từ bắt buộc là 封 (fēng)[span_54](start_span)[span_54](end_span). 张 chỉ dùng cho tờ giấy viết thư (一张信纸)[span_55](start_span)[span_55](end_span). Ngoài ra, gửi thư qua đường bưu cục dùng động từ 寄 (jì), còn gửi tin nhắn điện thoại hay thư điện tử email mới dùng động từ 发 (fā: 发短信, 发邮件)[span_56](start_span)[span_56](end_span). Không được nói *发信 khi muốn nói gửi thư giấy bưu điện[span_57](start_span)[span_57](end_span).",
              wrong: "我刚去邮局发了一个信。",
              right: "我刚去邮局寄了一封信。",
              tip: "Thư giấy niêm phong bưu điện -> dùng lượng từ 封 và động từ 寄[span_58](start_span)[span_58](end_span). Tin nhắn điện tử -> dùng động từ 发[span_59](start_span)[span_59](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy lượng từ và động từ chuyển phát thư từ:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai lượng từ và động từ khi gửi thư bưu cục:", pause: 200 },
                { lang: "zh-CN", text: "我刚去邮局发了一个信。", pause: 600 },
                { lang: "vi-VN", text: "Đi bưu điện gửi thư tay phải dùng động từ ký gửi, và lượng từ phong kín cho bức thư. Câu sửa chuẩn xác là:", pause: 300 },
                { lang: "zh-CN", text: "我刚去邮局寄了一封信。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu x (mặt lưỡi nâng sát ngạc cứng), kết hợp vận mẫu in, đọc thanh bốn dứt khoát (xìn)[span_60](start_span)[span_60](end_span). Tránh đọc nhẹ như dấu nặng của tiếng Việt[span_61](start_span)[span_61](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm dứt khoát âm thanh bốn. Lắng nghe và đọc theo:", pause: 300 },
                { lang: "zh-CN", text: "信", pause: 1500 },
                { lang: "zh-CN", text: "写信", pause: 1500 },
                { lang: "zh-CN", text: "一封信", pause: 1800 }
              ]
            },
            write: {
              desc: "Bên trái là bộ Nhân đứng (亻) tượng trưng cho con người; bên phải là chữ Ngôn (言) tượng trưng cho lời nói[span_62](start_span)[span_62](end_span). Con người nói ra lời thì phải có chữ tín, tạo thành chữ Tín (信)[span_63](start_span)[span_63](end_span).",
              audio: [
                { lang: "vi-VN", text: "Mẹo nhớ mặt chữ: Bên trái là người, bên phải là lời nói[span_64](start_span)[span_64](end_span). Lời con người nói ra phải thành thật, đáng tin cậy[span_65](start_span)[span_65](end_span).", pause: 400 }
              ]
            },
            summary: "信: danh từ bức thư (lượng từ 封, đi với 写信, 寄信, 收信); hoặc động từ tin tưởng (相信, 听信)[span_66](start_span)[span_66](end_span)[span_67](start_span)[span_67](end_span)."
          }
        ], // Kết thúc mảng words của Nhóm 2
        // ============================================================
        // BÀI TẬP NHÓM 2: BA LOẠI TOÀN DIỆN (8 CÂU)
        // ============================================================
        exercises: [
          // A. Nhớ chủ động & dùng từ đích danh (Câu 1, 2)
          {
            id: "g2-ex-1",
            type: "Động từ kết hợp chuyên dụng",
            prompt: "Chọn động từ chuẩn xác nhất để điền vào chỗ trống: 学外语遇到不懂的生词，应该马上____词典。",
            options: [
              "A. 看",
              "B. 查",
              "C. 听",
              "D. 讲"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu một: Chọn động từ chuẩn xác nhất điền vào câu sau:", pause: 300 },
              { lang: "zh-CN", text: "学外语遇到不懂的生词，应该马上词典。", pause: 600 }
            ],
            reasonRight: "Hành vi tra cứu nghĩa từ vựng trong từ điển bắt buộc dùng động từ 查 (chá: 查词典)[span_0](start_span)[span_0](end_span).",
            reasonWrong: "看词典 mang nghĩa đọc lướt sách từ điển như đọc truyện; 听 là nghe âm thanh; 讲 là kể chuyện giảng bài[span_1](start_span)[span_1](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_2](start_span)[span_2](end_span).", pause: 200 },
              { lang: "zh-CN", text: "查词典", pause: 400 },
              { lang: "vi-VN", text: "Tra cứu từ vựng luôn dùng động từ tra[span_3](start_span)[span_3](end_span).", pause: 300 }
            ]
          },
          {
            id: "g2-ex-2",
            type: "Lượng từ danh từ thư từ",
            prompt: "Chọn lượng từ chuẩn xác nhất để điền vào câu sau: 昨天我收到了远方朋友寄来的两____信。",
            options: [
              "A. 本",
              "B. 张",
              "C. 封",
              "D. 首"
            ],
            correct: 2,
            questionAudio: [
              { lang: "vi-VN", text: "Câu hai: Chọn lượng từ chuẩn xác cho bức thư:", pause: 300 },
              { lang: "zh-CN", text: "昨天我收到了远方朋友寄来的两信。", pause: 600 }
            ],
            reasonRight: "Lượng từ chuyên dụng của 信 (bức thư đã được niêm phong, gửi đi) là 封 (fēng)[span_4](start_span)[span_4](end_span).",
            reasonWrong: "本 dùng cho sách vở từ điển; 张 dùng cho tờ giấy viết thư chưa gấp niêm phong; 首 dùng cho bài hát, bản nhạc[span_5](start_span)[span_5](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là C[span_6](start_span)[span_6](end_span).", pause: 200 },
              { lang: "zh-CN", text: "两封信", pause: 400 },
              { lang: "vi-VN", text: "Lượng từ của bức thư được niêm phong là phong[span_7](start_span)[span_7](end_span).", pause: 300 }
            ]
          },

          // B. Vị trí, kết hợp & bẫy ngữ pháp (Câu 3, 4, 5, 6)
          {
            id: "g2-ex-3",
            type: "Phân biệt 讲 và 告诉",
            prompt: "Chọn câu có cấu trúc diễn đạt chuẩn xác nhất khi muốn thông báo: 'Thầy giáo bảo chúng tôi ngày mai không cần đến trường':",
            options: [
              "A. 老师讲我们明天不用来学校。",
              "B. 老师告诉我们明天不用来学校。",
              "C. 老师练习我们明天不用来学校。",
              "D. 老师作业我们明天不用来学校。"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu ba: Chọn câu đúng nhất khi truyền đạt lời dặn dò thông báo từ thầy giáo[span_8](start_span)[span_8](end_span).", pause: 400 }
            ],
            reasonRight: "告诉 đi trực tiếp với tân ngữ người để biểu thị hành vi thông báo, bảo ai làm gì (告诉 + Người + Nội dung)[span_9](start_span)[span_9](end_span).",
            reasonWrong: "讲 không đi liền tân ngữ người để mang nghĩa thông báo/bảo ai; 讲 nhấn mạnh vào giảng bài hoặc kể chuyện[span_10](start_span)[span_10](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_11](start_span)[span_11](end_span). Cấu trúc thông báo cho ai biết dùng:", pause: 200 },
              { lang: "zh-CN", text: "告诉我们", pause: 400 },
              { lang: "vi-VN", text: "Không dùng động từ giảng giải đi kèm trực tiếp đại từ chỉ người[span_12](start_span)[span_12](end_span).", pause: 300 }
            ]
          },
          {
            id: "g2-ex-4",
            type: "Phân biệt 作业, 练习 và 复习",
            prompt: "Chọn từ thích hợp điền vào chỗ trống: 老师今天留的汉语____有点多，我写到了晚上十点。",
            options: [
              "A. 作业",
              "B. 音乐",
              "C. 词典",
              "D. 事情"
            ],
            correct: 0,
            questionAudio: [
              { lang: "vi-VN", text: "Câu bốn: Chọn từ thích hợp điền vào câu sau:", pause: 300 },
              { lang: "zh-CN", text: "老师今天留的汉语有点多，我写到了晚上十点。", pause: 600 }
            ],
            reasonRight: "Cụm cố định 留作业 (thầy cô giao bài tập về nhà) và 写作业 (viết/làm bài tập)[span_13](start_span)[span_13](end_span).",
            reasonWrong: "音乐 là âm nhạc; 词典 là từ điển; 事情 là sự việc chung chung, không đi với kết hợp 留...写[span_14](start_span)[span_14](end_span)[span_15](start_span)[span_15](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là A[span_16](start_span)[span_16](end_span).", pause: 200 },
              { lang: "zh-CN", text: "留作业", pause: 300 },
              { lang: "vi-VN", text: "và", pause: 150 },
              { lang: "zh-CN", text: "写作业", pause: 300 },
              { lang: "vi-VN", text: "là cụm từ chuyên dùng cho bài tập về nhà do giáo viên giao[span_17](start_span)[span_17](end_span).", pause: 300 }
            ]
          },
          {
            id: "g2-ex-5",
            type: "Động từ chuyển phát thư từ",
            prompt: "Điền động từ thích hợp: 我想去邮局给国外的父母____一封信。",
            options: [
              "A. 发",
              "B. 寄",
              "C. 讲",
              "D. 做"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu năm: Chọn động từ gửi thư qua đường bưu điện[span_18](start_span)[span_18](end_span):", pause: 300 },
              { lang: "zh-CN", text: "我想去邮局给国外的父母一封信。", pause: 600 }
            ],
            reasonRight: "Gửi thư tay niêm phong qua bưu điện bắt buộc dùng động từ 寄 (jì: 寄信)[span_19](start_span)[span_19](end_span).",
            reasonWrong: "发 chỉ dùng cho truyền tin điện tử (发短信, 发邮件); 讲 là nói/kể; 做 là làm[span_20](start_span)[span_20](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_21](start_span)[span_21](end_span).", pause: 200 },
              { lang: "zh-CN", text: "寄信", pause: 400 },
              { lang: "vi-VN", text: "Gửi thư giấy bưu cục dùng động từ ký gửi[span_22](start_span)[span_22](end_span).", pause: 300 }
            ]
          },
          {
            id: "g2-ex-6",
            type: "Lượng từ của âm nhạc & kết hợp",
            prompt: "Chọn câu có lượng từ và kết hợp tự nhiên nhất khi khen một khúc nhạc:",
            options: [
              "A. 这本音乐非常好听，我很喜欢。",
              "B. 这首音乐非常好听，我很喜欢。",
              "C. 这件音乐非常好听，我很喜欢。",
              "D. 这封音乐非常好听，我很喜欢。"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu sáu: Chọn câu dùng lượng từ chuẩn xác cho khúc nhạc[span_23](start_span)[span_23](end_span).", pause: 400 }
            ],
            reasonRight: "Lượng từ chuẩn của một bản nhạc, khúc nhạc là 首 (shǒu) hoặc 段 (duàn)[span_24](start_span)[span_24](end_span).",
            reasonWrong: "本 dùng cho sách vở; 件 dùng cho sự việc hoặc áo quần; 封 dùng cho thư từ[span_25](start_span)[span_25](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_26](start_span)[span_26](end_span).", pause: 200 },
              { lang: "zh-CN", text: "一首音乐", pause: 400 },
              { lang: "vi-VN", text: "Lượng từ của bản nhạc là thủ[span_27](start_span)[span_27](end_span).", pause: 300 }
            ]
          },

          // C. Luyện nghe hiểu (Câu 7, 8)
          {
            id: "g2-ex-7",
            type: "Nghe hiểu bắt thói quen & hành động",
            isListening: true,
            prompt: "Nghe đoạn ghi âm và trả lời câu hỏi: Người nói có thói quen gì vào mỗi buổi tối?",
            options: [
              "A. Đi bưu điện gửi thư cho bạn bè",
              "B. Ngồi nghe nhạc và viết bài tập về nhà",
              "C. Đọc truyện tranh thay vì tra từ điển",
              "D. Đến nhà thầy giáo để luyện tập khẩu ngữ"
            ],
            correct: 1,
            transcript: "我每天晚上写作业的时候，都喜欢一边听轻音乐，一边做练习。",
            questionAudio: [
              { lang: "vi-VN", text: "Câu bảy: Hãy nghe đoạn văn sau đây[span_28](start_span)[span_28](end_span):", pause: 300 },
              { lang: "zh-CN", text: "我每天晚上写作业的时候，都喜欢一边听轻音乐，一边做练习。", pause: 800 },
              { lang: "vi-VN", text: "Câu hỏi: Thói quen mỗi buổi tối của người nói là gì[span_29](start_span)[span_29](end_span)?", pause: 400 }
            ],
            reasonRight: "Đoạn văn nêu rõ lúc viết bài tập thì thích vừa nghe nhạc nhẹ vừa làm bài rèn luyện (一边听轻音乐，一边做练习)[span_30](start_span)[span_30](end_span).",
            reasonWrong: "Các phương án A, C, D không có trong thông tin bài nghe[span_31](start_span)[span_31](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_32](start_span)[span_32](end_span). Người nói nhắc tới:", pause: 200 },
              { lang: "zh-CN", text: "写作业", pause: 300 },
              { lang: "vi-VN", text: "và", pause: 150 },
              { lang: "zh-CN", text: "听轻音乐", pause: 400 },
              { lang: "vi-VN", text: "tức là vừa nghe nhạc vừa làm bài tập[span_33](start_span)[span_33](end_span).", pause: 300 }
            ]
          },
          {
            id: "g2-ex-8",
            type: "Nghe hiểu lời dặn của giáo viên",
            isListening: true,
            prompt: "Nghe lời dặn của thầy giáo và cho biết học sinh cần làm gì khi gặp từ mới?",
            options: [
              "A. Hỏi ngay bạn cùng bàn",
              "B. Bỏ qua không cần học",
              "C. Tự mình tra từ điển để hiểu nghĩa",
              "D. Viết thư hỏi ý kiến thầy giáo"
            ],
            correct: 2,
            transcript: "今天的课就讲到这里。回去做作业时，如果有不懂的生词，大家一定要多查词典。",
            questionAudio: [
              { lang: "vi-VN", text: "Câu tám: Lắng nghe lời dặn dò của giáo viên cuối tiết học[span_34](start_span)[span_34](end_span):", pause: 300 },
              { lang: "zh-CN", text: "今天的课就讲到这里。回去做作业时，如果有不懂的生词，大家一定要多查词典。", pause: 800 },
              { lang: "vi-VN", text: "Câu hỏi: Khi làm bài tập gặp từ mới, học sinh cần làm gì[span_35](start_span)[span_35](end_span)?", pause: 400 }
            ],
            reasonRight: "Thầy giáo dặn dò rõ ràng: 如果有不懂的生词，大家一定要多查词典 (nếu có từ mới không hiểu, mọi người nhất định phải tra từ điển nhiều)[span_36](start_span)[span_36](end_span).",
            reasonWrong: "Các đáp án A, B, D đi ngược lại với lời khuyên trong đoạn ghi âm[span_37](start_span)[span_37](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là C[span_38](start_span)[span_38](end_span). Thầy dặn:", pause: 200 },
              { lang: "zh-CN", text: "一定要多查词典", pause: 400 },
              { lang: "vi-VN", text: "tức là hãy chủ động tự tra từ điển[span_39](start_span)[span_39](end_span).", pause: 300 }
            ]
          }
        ],

        // ============================================================
        // TỰ DÙNG TỪ & PHẢN HỒI (2 TÌNH HUỐNG 3 TẦNG)
        // ============================================================
        selfUse: {
          id: "g2-self-1",
          situation: "Bạn muốn chia sẻ kinh nghiệm học tiếng Trung của mình với một người bạn mới: Hãy khuyên bạn ấy mỗi ngày nên kiên trì rèn luyện khẩu ngữ, khi làm bài tập nếu gặp chữ mới không hiểu thì nên chủ động tra từ điển[span_40](start_span)[span_40](end_span).",
          hint1: "Vận dụng động từ luyện tập kỹ năng nói, cụm từ làm bài tập về nhà và động từ tra từ điển chuyên dụng[span_41](start_span)[span_41](end_span).",
          hint2: "Khung câu gợi ý: 每天坚持练习口语... / 做作业的时候... / 遇到生词要查词典[span_42](start_span)[span_42](end_span)",
          modelAnswer: "学汉语要每天坚持练习口语。做作业的时候如果遇到不懂的生词，一定要多查词典。",
          modelExplain: "Câu mẫu vận dụng chuẩn xác động từ 练习 mang tân ngữ kỹ năng 口语, động từ 做作业 cho bài tập về nhà, và hành động 查词典 chuẩn xác[span_43](start_span)[span_43](end_span).",
          modelAudio: [
            { lang: "vi-VN", text: "Tình huống một: Khuyên bạn kinh nghiệm học tiếng Trung. Lắng nghe câu mẫu[span_44](start_span)[span_44](end_span):", pause: 300 },
            { lang: "zh-CN", text: "学汉语要每天坚持练习口语。做作业的时候如果遇到不懂的生词，一定要多查词典。", pause: 1800 }
          ]
        },
        additionalSelfUse: {
          id: "g2-self-2",
          situation: "Bạn nhận được một bức thư viết tay của một người bạn cũ. Hãy viết lời hồi âm ngắn kể rằng thầy giáo tiếng Trung trên lớp giảng bài rất hay, và bạn thường vừa nghe nhạc vừa viết bài tập về nhà[span_45](start_span)[span_45](end_span).",
          hint1: "Dùng lượng từ của bức thư kết hợp động từ nhận thư, dùng bổ ngữ trạng thái miêu tả thầy giáo giảng bài hay, và cấu trúc vừa nghe nhạc vừa viết bài tập[span_46](start_span)[span_46](end_span).",
          hint2: "Khung câu gợi ý: 收到你寄来的一封信... / 老师讲课讲得很好... / 一边听音乐一边写作业[span_47](start_span)[span_47](end_span)",
          modelAnswer: "昨天我收到了你寄来的一封信。现在的汉语老师讲课讲得非常生动，我每天晚上都一边听音乐一边写作业。",
          modelExplain: "Câu này kết hợp hoàn hảo lượng từ 一封信 đi với động từ 寄 và 收到, động từ lặp lại 讲课讲得, và cấu trúc song song 听音乐 kết hợp 写作业[span_48](start_span)[span_48](end_span).",
          modelAudio: [
            { lang: "vi-VN", text: "Tình huống hai: Viết thư hồi âm kể về chuyện học tập. Lắng nghe câu mẫu[span_49](start_span)[span_49](end_span):", pause: 300 },
            { lang: "zh-CN", text: "昨天我收到了你寄来的一封信。现在的汉语老师讲课讲得非常生动，我每天晚上都一边听音乐一边写作业。", pause: 2000 }
          ]
        },

        // ============================================================
        // ÔN TẬP CÁCH QUÃNG NGÀY 1, 3, 7 (TOÀN BỘ 6 TỪ NHÓM 2)
        // ============================================================
        reviews: [
          // Ngày 1: Nhớ nghĩa cốt lõi & Cấu trúc cơ bản
          {
            day: 1,
            type: "Nhớ nghĩa & Tạo câu cơ bản",
            q: "Hãy nói câu: 'Thầy Vương giảng bài rất rõ ràng, học sinh đều thích nghe' sang tiếng Trung[span_50](start_span)[span_50](end_span).",
            answer: "王老师讲课讲得非常清楚，学生们都喜欢听。",
            explain: "Dùng động từ 讲课 kết hợp lặp lại động từ với bổ ngữ trạng thái 得清楚[span_51](start_span)[span_51](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày một: Giảng bài rõ ràng. Đáp án chuẩn[span_52](start_span)[span_52](end_span):", pause: 300 },
              { lang: "zh-CN", text: "王老师讲课讲得非常清楚，学生们都喜欢听。", pause: 1200 }
            ]
          },
          {
            day: 1,
            type: "Nhớ nghĩa & Tạo câu cơ bản",
            q: "Dịch câu sau dùng lượng từ chuẩn: 'Tôi vừa mới mua một cuốn từ điển Hán-Việt[span_53](start_span)'[span_53](end_span).",
            answer: "我刚买了一本汉越词典。",
            explain: "Lượng từ của sách từ điển là 本 (běn)[span_54](start_span)[span_54](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày một: Lượng từ của từ điển. Đáp án chuẩn[span_55](start_span)[span_55](end_span):", pause: 300 },
              { lang: "zh-CN", text: "我刚买了一本汉越词典。", pause: 1200 }
            ]
          },

          // Ngày 3: Bẫy ngữ pháp & Vị trí kết hợp
          {
            day: 3,
            type: "Bẫy kết hợp & Vị trí",
            q: "Sửa lỗi câu sai sau: 昨天下午我收到了朋友寄来的一张信[span_56](start_span)[span_56](end_span)。",
            answer: "昨天下午我收到了朋友寄来的一封信。",
            explain: "Lượng từ của bức thư niêm phong là 封, không dùng 张 (chỉ dùng cho tờ giấy)[span_57](start_span)[span_57](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày ba: Bẫy lượng từ của bức thư. Câu sửa đúng là[span_58](start_span)[span_58](end_span):", pause: 300 },
              { lang: "zh-CN", text: "昨天下午我收到了朋友寄来的一封信。", pause: 1200 }
            ]
          },
          {
            day: 3,
            type: "Bẫy kết hợp & Vị trí",
            q: "Tại sao nói '看词典' trong trường hợp cần tìm nghĩa từ lại không tự nhiên bằng '查词典[span_59](start_span)'[span_59](end_span)?",
            answer: "Vì 查 nhấn mạnh vào thao tác tra cứu, tìm kiếm định nghĩa cụ thể[span_60](start_span)[span_60](end_span). Còn 看 chỉ mang nghĩa nhìn xem, giở đọc giải trí[span_61](start_span)[span_61](end_span).",
            explain: "Hành động tra cứu thông tin luôn dùng 查[span_62](start_span)[span_62](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày ba: Phân biệt động từ tra cứu và nhìn ngắm[span_63](start_span)[span_63](end_span). Hãy nhớ luôn dùng tra từ điển[span_64](start_span)[span_64](end_span).", pause: 400 }
            ]
          },

          // Ngày 7: Phản xạ giao tiếp & Ứng dụng nâng cao
          {
            day: 7,
            type: "Vận dụng giao tiếp & Phản xạ",
            q: "Chữ 乐 trong từ 音乐 và trong từ 快乐 có cách đọc Pinyin khác nhau thế nào[span_65](start_span)[span_65](end_span)?",
            answer: "Trong 音乐 đọc là yuè (thanh bốn - âm nhạc), còn trong 快乐 đọc là lè (thanh bốn - vui vẻ)[span_66](start_span)[span_66](end_span).",
            explain: "Đây là chữ đa âm đa nghĩa rất quan trọng trong tiếng Trung[span_67](start_span)[span_67](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày bảy: Nhớ cách đọc chữ đa âm. Âm nhạc đọc là[span_68](start_span)[span_68](end_span):", pause: 300 },
              { lang: "zh-CN", text: "音乐", pause: 600 },
              { lang: "vi-VN", text: "còn vui vẻ đọc là[span_69](start_span)[span_69](end_span):", pause: 200 },
              { lang: "zh-CN", text: "快乐", pause: 800 }
            ]
          },
          {
            day: 7,
            type: "Nghe hiểu & Ứng dụng tổng hợp",
            listenAudio: [
              { lang: "zh-CN", text: "只有每天坚持练习，认真写作业，遇到问题多查词典，你的成绩才会提高。", pause: 1000 }
            ],
            q: "Nghe câu tiếng Trung và tóm tắt ba việc cần làm để nâng cao thành tích học tập[span_70](start_span)[span_70](end_span)?",
            answer: "1. Kiên trì luyện tập mỗi ngày (坚持练习); 2. Nghiêm túc làm bài tập về nhà (认真写作业); 3. Gặp vấn đề chăm chỉ tra từ điển (多查词典)[span_71](start_span)[span_71](end_span).",
            explain: "Câu tổng hợp các động từ và cụm kết hợp trọng tâm của cả Nhóm 1 và Nhóm 2[span_72](start_span)[span_72](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày bảy: Lời giải nghe hiểu. Ba việc cần làm là kiên trì luyện tập, chăm chỉ làm bài tập và tích cực tra từ điển[span_73](start_span)[span_73](end_span).", pause: 400 }
            ]
          }
        ]
      }, // Kết thúc group-2 (Nhóm 2)
      // ==============================================================
      // NHÓM 3: TRẠNG THÁI, MỨC ĐỘ & KẾT QUẢ
      // ==============================================================
      {
        id: "group-3",
        title: "Nhóm 3: Trạng thái, Mức độ & Kết quả",
        desc: "Các phó từ thời gian, tính từ miêu tả trạng thái và bổ ngữ chỉ kết quả động tác trong tiếng Trung[span_0](start_span)[span_0](end_span)[span_1](start_span)[span_1](end_span)[span_2](start_span)[span_2](end_span).",
        words: [
          // ------------------------------------------------------------
          // TỪ SỐ 13: 刚 [剛] (gāng)
          // ------------------------------------------------------------
          {
            id: "word-13-gang",
            index: 13,
            sourceIndex: 11,
            hanzi: "刚",
            pinyin: "gāng",
            coreMeaning: "vừa, vừa mới[span_3](start_span)[span_3](end_span)",
            pos: "Phó từ",
            topic: "Thời gian & Trạng thái",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười ba:", pause: 200 },
              { lang: "zh-CN", text: "刚", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: vừa, vừa mới[span_4](start_span)[span_4](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi một hành động hoặc sự việc xảy ra cách thời điểm hiện tại rất ngắn theo cảm nhận chủ quan của người nói[span_5](start_span)[span_5](end_span).",
              detail: "Là phó từ chỉ thời gian, biểu thị sự việc vừa mới xảy ra[span_6](start_span)[span_6](end_span)[span_7](start_span)[span_7](end_span). Từ này luôn đứng sau chủ ngữ và đứng ngay trước động từ[span_8](start_span)[span_8](end_span). Nó phản ánh cảm nhận thời gian ngắn của người nói (có thể là vài phút trước, hoặc mới chuyển đến đây vài tháng)[span_9](start_span)[span_9](end_span).",
              keyPoint: "Là phó từ nên vị trí bắt buộc là SAU chủ ngữ và TRƯỚC động từ; tuyệt đối không đứng trước chủ ngữ[span_10](start_span)[span_10](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "刚", pause: 400 },
                { lang: "vi-VN", text: "là phó từ mang nghĩa vừa mới[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span). Từ này đứng sau chủ ngữ và trước động từ, biểu thị hành động xảy ra chưa lâu theo đánh giá của người nói[span_13](start_span)[span_13](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Vừa mới làm hành động gì",
                pattern: "Chủ ngữ + 刚 + Động từ + (Tân ngữ)",
                note: "Đứng trực tiếp trước động từ làm trạng ngữ chỉ thời gian[span_14](start_span)[span_14](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Vừa mới làm hành động gì[span_15](start_span)[span_15](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "刚到家", pause: 600 },
                  { lang: "vi-VN", text: "vừa về đến nhà[span_16](start_span)[span_16](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "刚下课", pause: 600 },
                  { lang: "vi-VN", text: "vừa tan học[span_17](start_span)[span_17](end_span).", pause: 300 }
                ]
              },
              {
                title: "Vừa mới... thì đã...",
                pattern: "刚 + Động từ 1 + 就 + Động từ 2",
                note: "Liên kết hai hành động xảy ra nối tiếp nhau trong chớp mắt[span_18](start_span)[span_18](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Vừa làm xong việc này thì việc kia xảy ra[span_19](start_span)[span_19](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "我刚出门就下雨了。", pause: 900 },
                  { lang: "vi-VN", text: "Tôi vừa bước chân ra khỏi cửa thì trời đã mưa[span_20](start_span)[span_20](end_span).", pause: 400 }
                ]
              },
              {
                title: "Vừa mới đến một khoảng thời gian chủ quan",
                pattern: "刚 + 来 / 学 + Khoảng thời gian",
                note: "Nhấn mạnh cảm giác thời gian còn ngắn, chưa được bao lâu[span_21](start_span)[span_21](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Nhấn mạnh thời gian ngắn theo cảm nhận chủ quan[span_22](start_span)[span_22](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "他刚来这里两个月。", pause: 800 },
                  { lang: "vi-VN", text: "Anh ấy vừa mới đến đây được hai tháng[span_23](start_span)[span_23](end_span).", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "我刚吃完晚饭，现在还不饿。",
                vi: "Tôi vừa mới ăn cơm tối xong, bây giờ vẫn chưa đói[span_24](start_span)[span_24](end_span).",
                pause: 1500
              },
              {
                zh: "老师刚进教室，上课的铃声就响了。",
                vi: "Thầy giáo vừa bước vào lớp học thì chuông báo giờ học đã reo lên[span_25](start_span)[span_25](end_span).",
                pause: 1500
              },
              {
                zh: "他们刚认识不久，所以还不太了解对方。",
                vi: "Họ vừa mới quen biết nhau chưa lâu, cho nên vẫn chưa hiểu rõ về nhau lắm[span_26](start_span)[span_26](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt phó từ 刚 và danh từ thời gian 刚才",
              situation: "Người học tiếng Việt thường dùng từ 'vừa nãy' và 'vừa mới' lẫn lộn, dẫn đến đặt sai vị trí trong câu[span_27](start_span)[span_27](end_span).",
              explanation: "刚 là phó từ, CHỈ ĐỨNG SAU chủ ngữ (我刚...) và mang tính chủ quan (vài phút, vài ngày hoặc vài tháng trước đều dùng được nếu người nói cảm thấy ngắn)[span_28](start_span)[span_28](end_span). 刚才 là danh từ chỉ thời gian thực tế (khoảng vài phút trước thời điểm nói), CÓ THỂ đứng trước hoặc sau chủ ngữ (刚才我... hoặc 我刚才...)[span_29](start_span)[span_29](end_span). Không bao giờ được đặt 刚 ở trước chủ ngữ[span_30](start_span)[span_30](end_span).",
              wrong: "刚我去办公室找你，但是你不在。",
              right: "刚才我去办公室找你，但是你不在。 / 我刚去办公室找你，但是你不在。",
              tip: "Đứng đầu câu trước chủ ngữ -> bắt buộc dùng 刚才[span_31](start_span)[span_31](end_span). Đứng sau chủ ngữ -> dùng được cả 刚 và 刚才[span_32](start_span)[span_32](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy ngữ pháp về vị trí giữa phó từ và danh từ thời gian[span_33](start_span)[span_33](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai vị trí ngữ pháp[span_34](start_span)[span_34](end_span):", pause: 200 },
                { lang: "zh-CN", text: "刚我去办公室找你，但是你不在。", pause: 600 },
                { lang: "vi-VN", text: "Phó từ này không bao giờ được đứng trước chủ ngữ[span_35](start_span)[span_35](end_span). Đứng đầu câu bạn phải dùng danh từ thời gian, hoặc chuyển phó từ ra sau chủ ngữ[span_36](start_span)[span_36](end_span). Câu đúng là:", pause: 300 },
                { lang: "zh-CN", text: "刚才我去办公室找你，但是你不在。", pause: 900 },
                { lang: "vi-VN", text: "hoặc[span_37](start_span)[span_37](end_span):", pause: 200 },
                { lang: "zh-CN", text: "我刚去办公室找你，但是你不在。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu g (âm gốc lưỡi không bật hơi), kết hợp vận mẫu ang mũi sau, đọc thanh một ngân cao bằng phẳng (gāng)[span_38](start_span)[span_38](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm thanh một ngân vang, rõ âm mũi[span_39](start_span)[span_39](end_span). Nghe và đọc theo:", pause: 300 },
                { lang: "zh-CN", text: "刚", pause: 1500 },
                { lang: "zh-CN", text: "刚才", pause: 1500 },
                { lang: "zh-CN", text: "刚到", pause: 1800 }
              ]
            },
            write: {
              desc: "Bên trái là chữ Cương (冈 - ngọn núi dài), bên phải là bộ Đao đứng (刂) tượng trưng cho lưỡi dao sắc bén mang ý nghĩa cứng cỏi, vừa khớp[span_40](start_span)[span_40](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Bên trái là chữ cương, bên phải là bộ đao đứng[span_41](start_span)[span_41](end_span).", pause: 400 }
              ]
            },
            summary: "刚: phó từ vừa, vừa mới[span_42](start_span)[span_42](end_span)[span_43](start_span)[span_43](end_span). Luôn đứng sau chủ ngữ và trước động từ (我刚到)[span_44](start_span)[span_44](end_span). Khác với danh từ 刚才 ở chỗ không bao giờ đứng đầu câu trước chủ ngữ[span_45](start_span)[span_45](end_span)."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 14: 最近 (zuìjìn)
          // ------------------------------------------------------------
          {
            id: "word-14-zuijin",
            index: 14,
            sourceIndex: 17,
            hanzi: "最近",
            pinyin: "zuìjìn",
            coreMeaning: "gần đây, dạo này; gần nhất[span_46](start_span)[span_46](end_span)",
            pos: "Danh từ thời gian / Phó từ",
            topic: "Thời gian & Đời sống",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười bốn:", pause: 200 },
              { lang: "zh-CN", text: "最近", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: gần đây, dạo này[span_47](start_span)[span_47](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng để hỏi thăm tình hình sức khỏe, công việc, học tập trong những ngày hoặc tuần trở lại đây; hoặc thông báo sự thay đổi gần đây[span_48](start_span)[span_48](end_span).",
              detail: "Vừa là danh từ thời gian chỉ khoảng thời gian cách hiện tại không lâu (quá khứ gần hoặc tương lai gần), vừa có thể làm định ngữ chỉ cự ly khoảng cách gần nhất[span_49](start_span)[span_49](end_span).",
              keyPoint: "Trạng ngữ chỉ thời gian luôn đứng ở đầu câu hoặc đứng sau chủ ngữ trước động từ; không đặt ở cuối câu như tiếng Việt[span_50](start_span)[span_50](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "最近", pause: 400 },
                { lang: "vi-VN", text: "dùng để hỏi han hoặc miêu tả tình trạng dạo này, gần đây[span_51](start_span)[span_51](end_span)[span_52](start_span)[span_52](end_span). Vị trí trong câu là đứng ở đầu câu hoặc ngay trước vị ngữ[span_53](start_span)[span_53](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Hỏi thăm tình hình dạo này",
                pattern: "你 + 最近 + 怎么样 / 忙吗？",
                note: "Câu cửa miệng thông dụng bậc nhất khi chào hỏi xã giao hàng ngày[span_54](start_span)[span_54](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Hỏi thăm tình hình dạo này[span_55](start_span)[span_55](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "你最近怎么样？", pause: 800 },
                  { lang: "vi-VN", text: "Dạo này bạn thế nào[span_56](start_span)[span_56](end_span)?", pause: 300 }
                ]
              },
              {
                title: "Làm trạng ngữ thời gian đầu câu",
                pattern: "最近，+ (Mệnh đề chỉ sự thay đổi)",
                note: "Bao quát tình hình chung trong thời gian gần đây[span_57](start_span)[span_57](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Đặt ở đầu câu miêu tả sự việc dạo này[span_58](start_span)[span_58](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "最近天气很热。", pause: 800 },
                  { lang: "vi-VN", text: "Dạo này thời tiết rất nóng[span_59](start_span)[span_59](end_span).", pause: 300 }
                ]
              },
              {
                title: "Chỉ vị trí khoảng cách gần nhất",
                pattern: "最近的 + Danh từ nơi chốn",
                note: "Sử dụng chữ 最 (nhất) kết hợp với 近 (gần) để chỉ cự ly địa lý[span_60](start_span)[span_60](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Chỉ khoảng cách gần nhất[span_61](start_span)[span_61](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "最近的超市", pause: 700 },
                  { lang: "vi-VN", text: "siêu thị gần nhất[span_62](start_span)[span_62](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "好久不见，你最近都在忙些什么呢？",
                vi: "Lâu rồi không gặp, dạo này bạn đang bận rộn những việc gì thế[span_63](start_span)[span_63](end_span)?",
                pause: 1500
              },
              {
                zh: "最近因为要准备考试，所以我很少看电影。",
                vi: "Gần đây do phải chuẩn bị thi cử, cho nên tôi rất ít khi xem phim[span_64](start_span)[span_64](end_span).",
                pause: 1500
              },
              {
                zh: "请问离这里最近的地铁站在哪儿？",
                vi: "Xin hỏi ga tàu điện ngầm gần nhất cách đây nằm ở đâu[span_65](start_span)[span_65](end_span)?",
                pause: 1500
              }
            ],
            trap: {
              name: "Đặt từ chỉ thời gian ở cuối câu theo thói quen nói tiếng Việt",
              situation: "Trong tiếng Việt, ta có thể nói 'Bạn có bận không dạo này?', người học thường chuyển ngữ nguyên xi từ sang tiếng Trung[span_66](start_span)[span_66](end_span).",
              explanation: "Trong ngữ pháp tiếng Trung, trạng ngữ chỉ thời gian (như 最近, 今天, 明天) BẮT BUỘC phải đứng trước vị ngữ: hoặc đứng ở đầu câu, hoặc đứng ngay sau chủ ngữ[span_67](start_span)[span_67](end_span). Tuyệt đối không được vứt trạng ngữ chỉ thời gian ra sau cùng của câu[span_68](start_span)[span_68](end_span).",
              wrong: "你的身体好吗最近？",
              right: "你最近身体好吗？ / 最近你的身体好吗？",
              tip: "Ghi nhớ quy tắc vị trí vàng: Thời gian luôn đứng TRƯỚC hành động, không đứng ở đuôi câu[span_69](start_span)[span_69](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy vị trí của từ chỉ thời gian[span_70](start_span)[span_70](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai do thói quen đặt thời gian cuối câu của tiếng Việt[span_71](start_span)[span_71](end_span):", pause: 250 },
                { lang: "zh-CN", text: "你的身体好吗最近？", pause: 600 },
                { lang: "vi-VN", text: "Trong tiếng Trung, từ chỉ thời gian phải đứng trước hành động hoặc ở đầu câu[span_72](start_span)[span_72](end_span). Câu sửa đúng là:", pause: 300 },
                { lang: "zh-CN", text: "你最近身体好吗？", pause: 800 },
                { lang: "vi-VN", text: "hoặc[span_73](start_span)[span_73](end_span):", pause: 200 },
                { lang: "zh-CN", text: "最近你的身体好吗？", pause: 1000 }
              ]
            },
            pron: {
              guide: "Cả hai chữ 最 (zuì) và 近 (jìn) đều đọc thanh bốn dứt khoát[span_74](start_span)[span_74](end_span). Phân biệt âm z trong zuì (âm đầu lưỡi trước thẳng) và âm j trong jìn (mặt lưỡi nâng lên)[span_75](start_span)[span_75](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm dứt khoát cả hai thanh bốn, chú ý phân biệt hai phụ âm đầu[span_76](start_span)[span_76](end_span). Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "最近", pause: 1500 },
                { lang: "zh-CN", text: "你最近好吗？", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 最 có bộ Nhật (日) ở trên, chữ Thủ (取) ở dưới[span_77](start_span)[span_77](end_span). Chữ 近 bên phải là chữ Cân (斤 - cái búa/rìu), bên trái là bộ Quai xước (辶 - bước chân đi lại) mang ý nghĩa khoảng cách bước chân gần[span_78](start_span)[span_78](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Tối ở trên có bộ nhật[span_79](start_span)[span_79](end_span). Chữ Cận có bộ quai xước chỉ bước chân đi gần[span_80](start_span)[span_80](end_span).", pause: 400 }
              ]
            },
            summary: "最近: danh từ/phó từ dạo này, gần đây (thời gian) hoặc gần nhất (khoảng cách)[span_81](start_span)[span_81](end_span)[span_82](start_span)[span_82](end_span). Đứng đầu câu hoặc trước động từ, không bao giờ đặt cuối câu[span_83](start_span)[span_83](end_span)."
          },
          // ------------------------------------------------------------
          // TỪ SỐ 15: 安静 [安靜] (ānjìng)
          // ------------------------------------------------------------
          {
            id: "word-15-anjing",
            index: 15,
            sourceIndex: 15,
            hanzi: "安静",
            pinyin: "ānjìng",
            coreMeaning: "yên tĩnh, yên lặng, trật tự",
            pos: "Tính từ / Động từ",
            topic: "Trạng thái & Môi trường",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười lăm:", pause: 200 },
              { lang: "zh-CN", text: "安静", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: yên tĩnh, yên lặng hoặc trật tự[span_0](start_span)[span_0](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi miêu tả một không gian không có tiếng ồn ào (như thư viện, đêm khuya), hoặc khi yêu cầu mọi người giữ trật tự, ngừng làm ồn trong phòng học, hội trường[span_1](start_span)[span_1](end_span).",
              detail: "Khi làm tính từ, từ này miêu tả trạng thái tĩnh lặng của môi trường hay tâm trạng con người[span_2](start_span)[span_2](end_span). Khi làm động từ, nó dùng trong câu mệnh lệnh với ý nghĩa 'hãy giữ trật tự, im lặng[span_3](start_span)'[span_3](end_span).",
              keyPoint: "Trong lớp học hoặc nơi công cộng, cụm từ mệnh lệnh lịch sự phổ biến nhất là 请大家安静 (xin mọi người giữ trật tự)[span_4](start_span)[span_4](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "安静", pause: 400 },
                { lang: "vi-VN", text: "vừa là tính từ yên tĩnh, vừa làm động từ yêu cầu mọi người giữ trật tự, không làm ồn[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Nơi chốn yên tĩnh",
                pattern: "Nơi chốn + 很 / 非常 + 安静",
                note: "Tính từ làm vị ngữ miêu tả môi trường không có tiếng ồn[span_7](start_span)[span_7](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Miêu tả không gian yên tĩnh:", pause: 250 },
                  { lang: "zh-CN", text: "图书馆里很安静", pause: 700 },
                  { lang: "vi-VN", text: "trong thư viện rất yên tĩnh[span_8](start_span)[span_8](end_span).", pause: 300 }
                ]
              },
              {
                title: "Yêu cầu giữ trật tự / Im lặng",
                pattern: "请 + (大家) + 安静 + (一下)",
                note: "Dùng như một động từ trong câu cầu khiến, nhắc nhở trật tự[span_9](start_span)[span_9](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Yêu cầu trật tự:", pause: 250 },
                  { lang: "zh-CN", text: "请大家安静一下", pause: 800 },
                  { lang: "vi-VN", text: "Xin mọi người trật tự một chút[span_10](start_span)[span_10](end_span).", pause: 300 }
                ]
              },
              {
                title: "Trở nên yên tĩnh trở lại",
                pattern: "安静 + 下来",
                note: "Bổ ngữ xu hướng 下来 biểu thị trạng thái từ ồn ào náo động chuyển dần về trạng thái tĩnh lặng, cố định[span_11](start_span)[span_11](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Trở nên yên tĩnh:", pause: 250 },
                  { lang: "zh-CN", text: "教室里慢慢安静下来了。", pause: 900 },
                  { lang: "vi-VN", text: "Lớp học dần dần yên ắng trở lại[span_12](start_span)[span_12](end_span).", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "图书馆里非常安静，大家都在认真看书。",
                vi: "Trong thư viện vô cùng yên tĩnh, mọi người đều đang chăm chú đọc sách[span_13](start_span)[span_13](end_span).",
                pause: 1500
              },
              {
                zh: "上课铃响了，请大家安静下来，准备听讲。",
                vi: "Chuông vào lớp reo rồi, xin mọi người trật tự lại, chuẩn bị nghe giảng[span_14](start_span)[span_14](end_span).",
                pause: 1500
              },
              {
                zh: "我喜欢住在安静的地方，因为太吵了我睡不着觉。",
                vi: "Tôi thích sống ở nơi yên tĩnh, vì ồn ào quá tôi không thể nào ngủ được[span_15](start_span)[span_15](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa 安静 (yên tĩnh, không ồn) và 干净 (sạch sẽ, không bẩn)",
              situation: "Hai từ này có chữ Hán gần giống nhau ở chữ thứ hai và phát âm na ná (ān / gān) khiến người học hay nói nhầm[span_16](start_span)[span_16](end_span).",
              explanation: "安静 liên quan đến ÂM THANH (ngược nghĩa với 吵 - ồn ào)[span_17](start_span)[span_17](end_span)[span_18](start_span)[span_18](end_span). Còn 干净 liên quan đến VỆ SINH, RÁC RƯỞI (ngược nghĩa với 脏 - bẩn thỉu)[span_19](start_span)[span_19](end_span). Khen căn phòng không có bụi bẩn thì phải dùng 干净, không được nói *房间很安静 khi muốn nói về độ sạch[span_20](start_span)[span_20](end_span).",
              wrong: "这个房间打扫得非常安静，一点儿垃圾都没有。",
              right: "这个房间打扫得非常干净，一点儿垃圾都没有。",
              tip: "Không có tiếng ồn -> 安静 (An tĩnh)[span_21](start_span)[span_21](end_span)[span_22](start_span)[span_22](end_span). Quét dọn sạch sẽ, không rác bẩn -> 干净 (Càn tịnh)[span_23](start_span)[span_23](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa yên tĩnh âm thanh và sạch sẽ vệ sinh:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu dùng sai từ ngữ do nhầm lẫn âm đọc:", pause: 200 },
                { lang: "zh-CN", text: "这个房间打扫得非常安静，一点儿垃圾都没有。", pause: 600 },
                { lang: "vi-VN", text: "Dọn dẹp không còn rác thì phải dùng từ sạch sẽ, chứ không dùng từ yên tĩnh. Câu chuẩn là:", pause: 300 },
                { lang: "zh-CN", text: "这个房间打扫得非常干净，一点儿垃圾都没有。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Chữ 安 (ān) đọc thanh một bằng phẳng ở âm vực cao[span_24](start_span)[span_24](end_span). Chữ 静 (jìng) bắt đầu bằng âm j (mặt lưỡi nâng sát ngạc cứng), đọc thanh bốn dứt khoát từ trên xuống (jìng)[span_25](start_span)[span_25](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chữ đầu thanh một, chữ sau thanh bốn dứt khoát. Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "安静", pause: 1500 },
                { lang: "zh-CN", text: "请安静", pause: 1500 },
                { lang: "zh-CN", text: "非常安静", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 安 có bộ Miên (宀 - mái nhà) che chở cho người phụ nữ (bộ Nữ 女) bên dưới, ngụ ý người phụ nữ ở yên dưới mái nhà thì gia đạo bình an[span_26](start_span)[span_26](end_span). Chữ 静 bên trái là chữ Thanh (青 - màu xanh biếc), bên phải là chữ Tranh (争 - tranh giành), ngụ ý dẹp yên tranh giành thì trở lại tĩnh lặng[span_27](start_span)[span_27](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ An có mái nhà che phía trên chữ nữ. Chữ Tĩnh bên trái có màu xanh, bên phải là chữ tranh[span_28](start_span)[span_28](end_span).", pause: 400 }
              ]
            },
            summary: "安静: tính từ yên tĩnh (không ồn ào), động từ giữ trật tự (请安静)[span_29](start_span)[span_29](end_span)[span_30](start_span)[span_30](end_span). Phân biệt với 干净 (sạch sẽ không bụi bẩn)[span_31](start_span)[span_31](end_span)."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 16: 合适 [合適] (héshì)
          // ------------------------------------------------------------
          {
            id: "word-16-heshi",
            index: 16,
            sourceIndex: 8,
            hanzi: "合适",
            pinyin: "héshì",
            coreMeaning: "thích hợp, vừa vặn, hợp lý",
            pos: "Tính từ",
            topic: "Đánh giá & Tính chất",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười sáu:", pause: 200 },
              { lang: "zh-CN", text: "合适", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: thích hợp, vừa vặn, hợp lý[span_32](start_span)[span_32](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi thử quần áo, giày dép thấy vừa vặn kích cỡ; hoặc đánh giá một thời điểm, con người, phương án có thích hợp với hoàn cảnh hay không[span_33](start_span)[span_33](end_span)[span_34](start_span)[span_34](end_span).",
              detail: "Đây là một TÍNH TỪ biểu thị sự tương xứng, vừa vặn, hợp lẽ[span_35](start_span)[span_35](end_span)[span_36](start_span)[span_36](end_span). Vì là tính từ, nó làm vị ngữ miêu tả hoặc làm định ngữ, và KHÔNG THỂ mang tân ngữ trực tiếp phía sau[span_37](start_span)[span_37](end_span).",
              keyPoint: "Bắt buộc nhớ: 合适 là tính từ, tuyệt đối không được mang tân ngữ trực tiếp ở sau (*合适我 là sai ngữ pháp!)[span_38](start_span)[span_38](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "合适", pause: 400 },
                { lang: "vi-VN", text: "là tính từ biểu thị sự vừa vặn kích cỡ hoặc thích hợp hoàn cảnh[span_39](start_span)[span_39](end_span)[span_40](start_span)[span_40](end_span). Vì là tính từ nên từ này tuyệt đối không được mang tân ngữ trực tiếp theo sau[span_41](start_span)[span_41](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Kích cỡ / Quần áo vừa vặn",
                pattern: "Quần áo / Giày dép + 很 / 不 + 合适",
                note: "Dùng để đánh giá kích cỡ to nhỏ, dài ngắn khi mua sắm, mặc thử[span_42](start_span)[span_42](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Đánh giá đồ mặc vừa vặn:", pause: 250 },
                  { lang: "zh-CN", text: "这件衣服很合适。", pause: 800 },
                  { lang: "vi-VN", text: "Bộ quần áo này rất vừa vặn[span_43](start_span)[span_43](end_span).", pause: 300 }
                ]
              },
              {
                title: "Thích hợp đối với ai đó",
                pattern: "对 + Ai / Cái gì + (来说) + 很合适",
                note: "Muốn chỉ đối tượng thích hợp, bắt buộc phải dùng giới từ 对 đưa đối tượng ra trước[span_44](start_span)[span_44](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Thích hợp đối với ai:", pause: 250 },
                  { lang: "zh-CN", text: "这个工作对他很合适。", pause: 900 },
                  { lang: "vi-VN", text: "Công việc này đối với anh ấy rất thích hợp[span_45](start_span)[span_45](end_span).", pause: 400 }
                ]
              },
              {
                title: "Thời điểm không thích hợp",
                pattern: "时间 / 时候 + 不太合适",
                note: "Cách nói khéo léo để từ chối hoặc chọn lại thời gian hẹn gặp[span_46](start_span)[span_46](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Thời gian không tiện, không phù hợp:", pause: 250 },
                  { lang: "zh-CN", text: "现在去不太合适。", pause: 800 },
                  { lang: "vi-VN", text: "Bây giờ đi có vẻ không tiện cho lắm[span_47](start_span)[span_47](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "这双鞋的大小正合适，穿着非常舒服。",
                vi: "Kích cỡ của đôi giày này vừa in, đi vào vô cùng êm chân[span_48](start_span)[span_48](end_span).",
                pause: 1500
              },
              {
                zh: "大家都觉得他来当班长是最合适的人选。",
                vi: "Mọi người đều cảm thấy bạn ấy làm lớp trưởng là lựa chọn thích hợp nhất[span_49](start_span)[span_49](end_span).",
                pause: 1500
              },
              {
                zh: "现在大家都在休息，你这个时候给他打电话不太合适吧。",
                vi: "Bây giờ mọi người đều đang nghỉ ngơi, bạn gọi điện thoại cho anh ấy lúc này e là không tiện lắm đâu[span_50](start_span)[span_50](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa tính từ 合适 (không nhận tân ngữ) và động từ 适合 (mang tân ngữ trực tiếp)",
              situation: "Người học tiếng Việt hay nói 'cái này hợp tôi' nên dịch máy móc ghép thẳng thành *合适我[span_51](start_span)[span_51](end_span).",
              explanation: "合适 là TÍNH TỪ: không thể mang tân ngữ trực tiếp phía sau (*这件衣服合适我 là sai ngữ pháp!)[span_52](start_span)[span_52](end_span). Muốn dùng với người, phải đưa người vào cấu trúc giới từ: 这件衣服对我来说很合适[span_53](start_span)[span_53](end_span). Còn 适合 là ĐỘNG TỪ: bắt buộc đi liền với tân ngữ trực tiếp phía sau: 这件衣服适合我[span_54](start_span)[span_54](end_span).",
              wrong: "你穿这件黑色的衣服不太合适你。",
              right: "你穿这件黑色的衣服不太适合你。 / 这件黑色的衣服对你不太合适。",
              tip: "Có tân ngữ chỉ người ở sau -> dùng 适合 (适合 + Người)[span_55](start_span)[span_55](end_span). Đứng một mình làm vị ngữ hoặc có giới từ 对 phía trước -> dùng 合适 (很合适 / 对...很合适)[span_56](start_span)[span_56](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy ngữ pháp kinh điển giữa thích hợp và phù hợp:", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai ngữ pháp rất phổ biến do ghép tân ngữ vào tính từ:", pause: 200 },
                { lang: "zh-CN", text: "这件衣服不太合适你。", pause: 600 },
                { lang: "vi-VN", text: "Từ này là tính từ nên không được mang tân ngữ trực tiếp. Bạn phải đổi sang động từ phù hợp mang tân ngữ, hoặc dùng cấu trúc giới từ đối với ai. Câu sửa đúng là:", pause: 300 },
                { lang: "zh-CN", text: "这件衣服不太适合你。", pause: 800 },
                { lang: "vi-VN", text: "hoặc nói:", pause: 200 },
                { lang: "zh-CN", text: "这件衣服对你不太合适。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Chữ 合 đọc thanh hai (hé, nâng giọng từ dưới lên). Chữ 适 phát âm âm đầu sh uốn lưỡi, đọc thanh bốn dứt khoát từ trên xuống (shì)[span_57](start_span)[span_57](end_span). Tránh đọc shì thành s nhẹ[span_58](start_span)[span_58](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chữ đầu nâng cao, chữ sau uốn lưỡi rơi thanh bốn dứt khoát. Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "合适", pause: 1500 },
                { lang: "zh-CN", text: "很合适", pause: 1500 },
                { lang: "zh-CN", text: "正合适", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 合 có bộ Nhân (人) và nét ngang ở trên, bên dưới là bộ Khẩu (口), mang ý niệm nhiều miệng cùng hòa thuận hợp lại[span_59](start_span)[span_59](end_span). Chữ 适 bên trong là chữ Thiệt (舌 - cái lưỡi), bên ngoài là bộ Quai xước (辶 - bước chân đi lại), ngụ ý đi đứng ăn nói đều vừa mực thước[span_60](start_span)[span_60](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Hợp gồm người và miệng hòa hợp[span_61](start_span)[span_61](end_span). Chữ Thích có bộ quai xước bao bọc bên ngoài chữ thiệt[span_62](start_span)[span_62](end_span).", pause: 400 }
              ]
            },
            summary: "合适: tính từ thích hợp, vừa vặn (quần áo, thời điểm, công việc)[span_63](start_span)[span_63](end_span)[span_64](start_span)[span_64](end_span). Phân biệt với động từ 适合 ở chỗ 合适 không bao giờ nhận tân ngữ trực tiếp theo sau (*合适你 là sai ngữ pháp!)[span_65](start_span)[span_65](end_span)."
          },
          // ------------------------------------------------------------
          // TỪ SỐ 17: 完 (wán)
          // ------------------------------------------------------------
          {
            id: "word-17-wan",
            index: 17,
            sourceIndex: 21,
            hanzi: "完",
            pinyin: "wán",
            coreMeaning: "xong, hoàn thành, hết",
            pos: "Động từ / Bổ ngữ kết quả",
            topic: "Hành động & Kết quả",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười bảy:", pause: 200 },
              { lang: "zh-CN", text: "完", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: xong, hoàn thành, hết[span_0](start_span)[span_0](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi một động tác đã tiến hành đến giai đoạn kết thúc, một nhiệm vụ đã hoàn thành trọn vẹn, hoặc tài nguyên/đồ vật đã dùng cạn kiệt không còn lại gì[span_1](start_span)[span_1](end_span)[span_2](start_span)[span_2](end_span).",
              detail: "完 có thể làm động từ độc lập mang nghĩa kết thúc, nhưng cách dùng quan trọng và phổ biến nhất trong ngữ pháp tiếng Trung là làm BỔ NGỮ KẾT QUẢ đứng ngay sau động từ chính để biểu thị hành động đã xong xuôi hoặc tiêu hao hết[span_3](start_span)[span_3](end_span).",
              keyPoint: "Khi làm bổ ngữ kết quả, 完 đứng liền ngay SAU động từ, giữa động từ và 完 không được chèn bất kỳ thành phần nào khác[span_4](start_span)[span_4](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "完", pause: 400 },
                { lang: "vi-VN", text: "vừa là động từ vừa là bổ ngữ kết quả quen thuộc bậc nhất[span_5](start_span)[span_5](end_span). Khi đứng sau động từ khác, nó biểu thị động tác đã làm xong hoặc đồ vật đã dùng hết sạch[span_6](start_span)[span_6](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Làm xong hành động gì (Bổ ngữ kết quả)",
                pattern: "Động từ + 完 + (Tân ngữ / 了)",
                note: "Đứng ngay sau động từ chỉ thao tác như ăn, uống, xem, viết, làm[span_7](start_span)[span_7](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Đứng sau động từ biểu thị làm xong[span_8](start_span)[span_8](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "做完作业", pause: 600 },
                  { lang: "vi-VN", text: "làm xong bài tập[span_9](start_span)[span_9](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "吃完了", pause: 600 },
                  { lang: "vi-VN", text: "ăn xong rồi[span_10](start_span)[span_10](end_span).", pause: 300 }
                ]
              },
              {
                title: "Tiêu hao cạn kiệt, dùng hết sạch",
                pattern: "用完 / 卖完 / 花完",
                note: "Biểu thị trạng thái đồ vật, tiền bạc, hàng hóa không còn lại chút nào[span_11](start_span)[span_11](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Dùng hết, bán hết hoặc tiêu hết tiền[span_12](start_span)[span_12](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "用完了", pause: 600 },
                  { lang: "vi-VN", text: "dùng hết rồi[span_13](start_span)[span_13](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "书卖完了", pause: 700 },
                  { lang: "vi-VN", text: "sách đã bán hết sạch[span_14](start_span)[span_14](end_span).", pause: 300 }
                ]
              },
              {
                title: "Chưa làm xong (Thể phủ định)",
                pattern: "没 + Động từ + 完",
                note: "Phủ định của bổ ngữ kết quả bắt buộc dùng phó từ 没, tuyệt đối không dùng 不[span_15](start_span)[span_15](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Phủ định chưa làm xong[span_16](start_span)[span_16](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "还没写完", pause: 700 },
                  { lang: "vi-VN", text: "vẫn chưa viết xong[span_17](start_span)[span_17](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "等我做完这件事情，就马上过去找你。",
                vi: "Đợi tôi làm xong việc này sẽ lập tức qua tìm bạn ngay[span_18](start_span)[span_18](end_span).",
                pause: 1500
              },
              {
                zh: "这家商店的面包很好吃，每天下午早就卖完了。",
                vi: "Bánh mì của cửa hàng này rất ngon, chiều nào cũng bán hết sạch từ sớm[span_19](start_span)[span_19](end_span).",
                pause: 1500
              },
              {
                zh: "今天的听力考试我还没听完，时间就到了。",
                vi: "Bài thi nghe hôm nay tôi còn chưa nghe xong thì thời gian đã hết rồi[span_20](start_span)[span_20](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt bổ ngữ kết quả 完 (xong về mặt số lượng/hết) và 好 (xong xuôi hoàn thiện/sẵn sàng)",
              situation: "Người học tiếng Việt hay coi 'làm xong' đều như nhau nên không phân biệt được 做完 và 做好[span_21](start_span)[span_21](end_span).",
              explanation: "Động từ + 完 nhấn mạnh thuần túy vào mặt THỜI GIAN VÀ KẾT THÚC (làm hết, không còn việc sót lại)[span_22](start_span)[span_22](end_span). Động từ + 好 nhấn mạnh vào CHẤT LƯỢNG VÀ TRẠNG THÁI SẴN SÀNG (làm xong hoàn thiện, đâu vào đấy, vừa lòng, sẵn sàng dùng)[span_23](start_span)[span_23](end_span). Ví dụ: 准备完 (chuẩn bị hết các hạng mục), 准备好 (chuẩn bị xong xuôi chu đáo, sẵn sàng bắt đầu)[span_24](start_span)[span_24](end_span).",
              wrong: "饭做完了，大家快来吃吧。（Nhấn mạnh sẵn sàng mời ăn cơm）",
              right: "饭做好了，大家快来吃吧。",
              tip: "Nấu cơm xong đâu vào đấy dọn lên bàn mời ăn -> dùng 做好 / 准备好[span_25](start_span)[span_25](end_span). Chỉ tính xong về mặt hết sạch bài vở, công việc -> dùng 做完[span_26](start_span)[span_26](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa làm xong kết thúc và làm xong hoàn thiện sẵn sàng[span_27](start_span)[span_27](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Khi cơm đã nấu xong ngon lành dọn lên bàn mời mọi người vào ăn, câu tự nhiên nhất là[span_28](start_span)[span_28](end_span):", pause: 250 },
                { lang: "zh-CN", text: "饭做好了，大家快来吃吧。", pause: 800 },
                { lang: "vi-VN", text: "Dùng chữ hảo ở đây biểu thị món ăn đã hoàn thiện sẵn sàng, tốt đẹp[span_29](start_span)[span_29](end_span). Còn nếu dùng từ hoàn kết thúc, người nghe chỉ thấy thuần túy là hành động nấu đã dừng lại[span_30](start_span)[span_30](end_span).", pause: 300 }
              ]
            },
            pron: {
              guide: "Phát âm vận mẫu an đi sau âm đệm u thành uan, đọc thanh hai (wán, vuốt giọng cao dần từ dưới lên)[span_31](start_span)[span_31](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm thanh hai vuốt cao tự nhiên[span_32](start_span)[span_32](end_span). Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "完", pause: 1500 },
                { lang: "zh-CN", text: "做完了", pause: 1500 },
                { lang: "zh-CN", text: "还没完", pause: 1800 }
              ]
            },
            write: {
              desc: "Phía trên là bộ Miên (宀 - mái nhà), phía dưới là chữ Nguyên (元 - ban đầu, khởi nguồn), mang ý nghĩa sự việc trọn vẹn dưới một mái nhà[span_33](start_span)[span_33](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Ở trên có bộ miên mái nhà che chở, ở dưới là chữ nguyên[span_34](start_span)[span_34](end_span).", pause: 400 }
              ]
            },
            summary: "完: động từ/bổ ngữ kết quả xong, hết[span_35](start_span)[span_35](end_span)[span_36](start_span)[span_36](end_span). Đứng liền sau động từ (做完, 吃完, 卖完)[span_37](start_span)[span_37](end_span). Phủ định dùng 没 (还没做完)[span_38](start_span)[span_38](end_span). Phân biệt với 好 ở trạng thái sẵn sàng, trọn vẹn[span_39](start_span)[span_39](end_span)."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 18: 掉 (diào)
          // ------------------------------------------------------------
          {
            id: "word-18-diao",
            index: 18,
            sourceIndex: 9,
            hanzi: "掉",
            pinyin: "diào",
            coreMeaning: "rơi, rớt; mất, biến mất",
            pos: "Động từ / Bổ ngữ kết quả",
            topic: "Hành động & Sự thay đổi trạng thái",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười tám:", pause: 200 },
              { lang: "zh-CN", text: "掉", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: rơi, rớt; mất, rụng[span_40](start_span)[span_40](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi đồ vật bị rơi tuột từ trên cao xuống đất, lá cây hoặc tóc rụng, hoặc làm bổ ngữ kết quả diễn tả hành động vứt bỏ, làm biến mất, tiêu biến một thứ gì đó[span_41](start_span)[span_41](end_span)[span_42](start_span)[span_42](end_span).",
              detail: "Khi làm động từ độc lập, 掉 chỉ sự rơi rụng vật lý (lá rụng, đồ rơi xuống nước/đất)[span_43](start_span)[span_43](end_span)[span_44](start_span)[span_44](end_span). Khi làm bổ ngữ kết quả, nó kết hợp với các động từ tiêu cực hoặc hành động tiêu trừ (như vứt, quên, ăn sạch, trừ đi) mang ý nghĩa làm cho sạch, tiêu biến hoàn toàn[span_45](start_span)[span_45](end_span).",
              keyPoint: "Là bổ ngữ kết quả cực kỳ đặc sắc của tiếng Trung: 扔掉 (vứt bỏ đi), 忘掉 (quên phắt đi), 擦掉 (lau sạch đi)[span_46](start_span)[span_46](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "掉", pause: 400 },
                { lang: "vi-VN", text: "vừa có nghĩa rơi rớt đồ vật, vừa làm bổ ngữ kết quả mang ý nghĩa loại bỏ hoặc làm tiêu biến hoàn toàn một sự vật[span_47](start_span)[span_47](end_span)[span_48](start_span)[span_48](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Rơi rớt xuống nơi nào đó",
                pattern: "掉 + 在 / 到 + Nơi chốn",
                note: "Biểu thị sự rơi rớt vật lý và điểm đến cuối cùng của đồ vật[span_49](start_span)[span_49](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Rơi rớt xuống địa điểm nào[span_50](start_span)[span_50](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "掉在地上", pause: 700 },
                  { lang: "vi-VN", text: "rơi trên mặt đất[span_51](start_span)[span_51](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "掉进水里", pause: 700 },
                  { lang: "vi-VN", text: "rơi vào trong nước[span_52](start_span)[span_52](end_span).", pause: 300 }
                ]
              },
              {
                title: "Hành động tiêu biến, loại bỏ (Bổ ngữ kết quả)",
                pattern: "Động từ + 掉 + (Tân ngữ)",
                note: "Đứng sau các động từ như 扔 (vứt), 忘 (quên), 卖 (bán), 吃 (ăn) để chỉ sự triệt để, dứt điểm[span_53](start_span)[span_53](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Làm bổ ngữ kết quả tiêu biến, triệt để[span_54](start_span)[span_54](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "扔掉", pause: 600 },
                  { lang: "vi-VN", text: "vứt bỏ đi[span_55](start_span)[span_55](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "忘掉烦恼", pause: 700 },
                  { lang: "vi-VN", text: "quên hết muộn phiền[span_56](start_span)[span_56](end_span).", pause: 300 }
                ]
              },
              {
                title: "Rụng, rớt mất (Tự nhiên biến mất)",
                pattern: "Chủ ngữ + 掉了",
                note: "Miêu tả răng rụng, cúc áo đứt rớt, tóc rụng[span_57](start_span)[span_57](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Rụng hoặc đứt rớt[span_58](start_span)[span_58](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "扣子掉了", pause: 700 },
                  { lang: "vi-VN", text: "cúc áo bị đứt rớt rồi[span_59](start_span)[span_59](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "小心一点儿，你的手机刚才差点儿掉在地上。",
                vi: "Cẩn thận một chút, điện thoại của bạn vừa nãy suýt nữa thì rơi xuống đất đấy[span_60](start_span)[span_60](end_span).",
                pause: 1500
              },
              {
                zh: "这些旧报纸已经没有用了，快把它们扔掉吧。",
                vi: "Chỗ báo cũ này không còn dùng được nữa rồi, mau đem vứt bỏ chúng đi thôi[span_61](start_span)[span_61](end_span).",
                pause: 1500
              },
              {
                zh: "过去那些不开心的事情，你就全忘掉了好吗？",
                vi: "Những chuyện không vui trong quá khứ đó, bạn quên hết sạch đi được không[span_62](start_span)[span_62](end_span)?",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt 掉 (rơi vật lý/bổ ngữ biến mất) và 丢 (làm thất lạc/đánh mất)",
              situation: "Người học tiếng Việt hay nói 'mất đồ' nên dùng lẫn lộn 掉了 và 丢了[span_63](start_span)[span_63](end_span).",
              explanation: "丢 nhấn mạnh vào việc ĐÁNH MẤT, THẤT LẠC không tìm thấy (như mất ví tiền, mất chìa khóa: 我的钱包丢了)[span_64](start_span)[span_64](end_span). 掉 nhấn mạnh vào việc RƠI RỚT từ trên cao xuống hoặc rụng ra khỏi vị trí ban đầu (掉在地上, 掉头发)[span_65](start_span)[span_65](end_span)[span_66](start_span)[span_66](end_span). Khi làm bổ ngữ kết quả, 扔掉 (vứt bỏ) thì không thể thay bằng *扔丢[span_67](start_span)[span_67](end_span).",
              wrong: "我的钥匙掉在路上了，现在找不到了。（Có thể đúng nếu biết rõ bị rơi, nhưng không biết ở đâu thì dùng 丢 tự nhiên hơn）",
              right: "我的钥匙丢了，到处都找不到。",
              tip: "Thất lạc không rõ tung tích -> 丢[span_68](start_span)[span_68](end_span). Rơi từ trên cao xuống đất, rụng rời -> 掉[span_69](start_span)[span_69](end_span)[span_70](start_span)[span_70](end_span). Bổ ngữ vứt đi, loại bỏ -> 扔掉 / 忘掉[span_71](start_span)[span_71](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa đánh mất thất lạc và rơi rớt vật lý[span_72](start_span)[span_72](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Khi chìa khóa bị thất lạc không tìm thấy, câu tự nhiên nhất của người bản xứ là[span_73](start_span)[span_73](end_span):", pause: 250 },
                { lang: "zh-CN", text: "我的钥匙丢了，到处都找不到。", pause: 800 },
                { lang: "vi-VN", text: "Dùng từ thất lạc khi không rõ tung tích đồ vật[span_74](start_span)[span_74](end_span). Còn từ rơi rớt chỉ dùng khi mắt thấy vật rơi xuống đất hoặc rụng ra khỏi quần áo[span_75](start_span)[span_75](end_span).", pause: 300 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu d (đầu lưỡi chạm răng trên, không bật hơi), kết hợp vận mẫu iao, rơi thanh bốn dứt khoát từ trên xuống (diào)[span_76](start_span)[span_76](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm dứt khoát âm thanh bốn[span_77](start_span)[span_77](end_span). Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "掉", pause: 1500 },
                { lang: "zh-CN", text: "掉地上", pause: 1500 },
                { lang: "zh-CN", text: "扔掉", pause: 1800 }
              ]
            },
            write: {
              desc: "Bên trái là bộ Thủ (扌 - cánh tay/bàn tay), bên phải là chữ Trác (卓 - cao ráo, vượt trội), ngụ ý buông tay từ trên cao thì đồ vật rơi xuống[span_78](start_span)[span_78](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Bên trái có bộ tài gảy chỉ bàn tay buông lơi, bên phải là chữ trác[span_79](start_span)[span_79](end_span).", pause: 400 }
              ]
            },
            summary: "掉: động từ rơi, rớt (掉地上)[span_80](start_span)[span_80](end_span)[span_81](start_span)[span_81](end_span); bổ ngữ kết quả triệt để, loại bỏ (扔掉, 忘掉, 吃掉)[span_82](start_span)[span_82](end_span). Phân biệt với 丢 (đánh mất, thất lạc)[span_83](start_span)[span_83](end_span)."
          }
        ], // Kết thúc mảng words của Nhóm 3
        // ============================================================
        // BÀI TẬP NHÓM 3: BA LOẠI TOÀN DIỆN (8 CÂU)
        // ============================================================
        exercises: [
          // A. Nhớ chủ động & dùng từ đích danh (Câu 1, 2)
          {
            id: "g3-ex-1",
            type: "Phân biệt vị trí phó từ 刚 và danh từ thời gian 刚才",
            prompt: "Chọn từ thích hợp nhất để điền vào chỗ trống ở ĐẦU CÂU: ____你去哪儿了？我到处找你都找不到。",
            options: [
              "A. 刚",
              "B. 刚才",
              "C. 最近",
              "D. 合适"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu một: Chọn từ chuẩn xác điền vào vị trí đầu câu trước đại từ nhân xưng:", pause: 300 },
              { lang: "zh-CN", text: "你去哪儿了？我到处找你都找不到。", pause: 600 }
            ],
            reasonRight: "刚才 là danh từ chỉ thời gian, có thể đứng ở đầu câu trước chủ ngữ. 刚 là phó từ, bắt buộc phải đứng sau chủ ngữ trước động từ[span_0](start_span)[span_0](end_span).",
            reasonWrong: "刚 tuyệt đối không đứng đầu câu trước chủ ngữ[span_1](start_span)[span_1](end_span); 最近 mang nghĩa dạo này/gần đây không khớp ngữ cảnh tìm người vừa diễn ra cách đây vài phút[span_2](start_span)[span_2](end_span)[span_3](start_span)[span_3](end_span); 合适 là tính từ[span_4](start_span)[span_4](end_span)[span_5](start_span)[span_5](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_6](start_span)[span_6](end_span).", pause: 200 },
              { lang: "zh-CN", text: "刚才你去哪儿了？", pause: 400 },
              { lang: "vi-VN", text: "Chỉ có danh từ thời gian mới được đứng đầu câu trước chủ ngữ, phó từ vừa mới không được đứng ở vị trí này[span_7](start_span)[span_7](end_span).", pause: 300 }
            ]
          },
          {
            id: "g3-ex-2",
            type: "Bẫy ngữ pháp tính từ 合适 vs động từ 适合",
            prompt: "Chọn câu có cấu trúc ngữ pháp chuẩn xác nhất khi nhận xét trang phục của người khác:",
            options: [
              "A. 这件黑色的衣服非常合适你。",
              "B. 这件黑色的衣服对你来说非常合适。",
              "C. 这件黑色的衣服非常适合为你。",
              "D. 这件黑色的衣服非常安静你。"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu hai: Chọn câu đúng ngữ pháp khi đánh giá chiếc áo thích hợp với đối phương[span_8](start_span)[span_8](end_span).", pause: 400 }
            ],
            reasonRight: "合适 là tính từ, không thể mang tân ngữ người trực tiếp ở phía sau; muốn chỉ đối tượng tiếp nhận phải dùng kết cấu giới từ 对...来说 rất chuẩn mực[span_9](start_span)[span_9](end_span).",
            reasonWrong: "A sai vì 合适 là tính từ không mang tân ngữ trực tiếp (*合适你 là sai ngữ pháp)[span_10](start_span)[span_10](end_span); C sai vì 适合 là động từ không đi với giới từ thừa; D dùng sai từ 安静[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_13](start_span)[span_13](end_span).", pause: 200 },
              { lang: "zh-CN", text: "对你来说非常合适", pause: 400 },
              { lang: "vi-VN", text: "Tính từ thích hợp không nhận tân ngữ trực tiếp, phải dùng giới từ đối với ai đưa lên trước[span_14](start_span)[span_14](end_span).", pause: 300 }
            ]
          },

          // B. Vị trí, kết hợp & bẫy ngữ pháp (Câu 3, 4, 5, 6)
          {
            id: "g3-ex-3",
            type: "Phân biệt 安静 và 干净",
            prompt: "Chọn từ thích hợp điền vào chỗ trống: 图书馆是一个需要保持____的地方，请不要在这里大声说话。",
            options: [
              "A. 干净",
              "B. 安静",
              "C. 合适",
              "D. 努力"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu ba: Chọn từ thích hợp điền vào chỗ trống về quy định trật tự ở thư viện:", pause: 300 },
              { lang: "zh-CN", text: "图书馆是一个需要保持的地方，请不要在这里大声说话。", pause: 600 }
            ],
            reasonRight: "Vế sau yêu cầu không được nói lớn tiếng (不要大声说话), nghĩa là liên quan đến trật tự âm thanh, dùng 安静[span_15](start_span)[span_15](end_span)[span_16](start_span)[span_16](end_span).",
            reasonWrong: "干净 liên quan đến vệ sinh rác bẩn, không liên quan đến tiếng ồn[span_17](start_span)[span_17](end_span); 合适 là thích hợp[span_18](start_span)[span_18](end_span)[span_19](start_span)[span_19](end_span); 努力 là nỗ lực[span_20](start_span)[span_20](end_span)[span_21](start_span)[span_21](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_22](start_span)[span_22](end_span).", pause: 200 },
              { lang: "zh-CN", text: "保持安静", pause: 400 },
              { lang: "vi-VN", text: "Không nói to tiếng nơi công cộng là giữ yên tĩnh, trật tự âm thanh[span_23](start_span)[span_23](end_span).", pause: 300 }
            ]
          },
          {
            id: "g3-ex-4",
            type: "Vị trí của từ chỉ thời gian trong câu",
            prompt: "Câu nào dưới đây sắp xếp trật tự từ đúng ngữ pháp tiếng Trung?",
            options: [
              "A. 你的汉语学习成绩提高得很快最近。",
              "B. 最近你的汉语学习成绩提高得很快。",
              "C. 你的汉语学习成绩提高得最近很快。",
              "D. 你的汉语学习成绩最近提高得很安静。"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu bốn: Chọn câu sắp xếp đúng vị trí của từ chỉ thời gian dạo này[span_24](start_span)[span_24](end_span).", pause: 400 }
            ],
            reasonRight: "Trạng ngữ chỉ thời gian 最近 phải đứng ở đầu câu hoặc đứng trước cụm vị ngữ/động từ chính[span_25](start_span)[span_25](end_span).",
            reasonWrong: "A sai vì vứt từ thời gian ra cuối câu theo tiếng Việt[span_26](start_span)[span_26](end_span); C sai vì chèn thời gian vào giữa bổ ngữ trạng thái; D dùng sai từ 安静[span_27](start_span)[span_27](end_span)[span_28](start_span)[span_28](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_29](start_span)[span_29](end_span).", pause: 200 },
              { lang: "zh-CN", text: "最近你的汉语学习成绩提高得很快。", pause: 500 },
              { lang: "vi-VN", text: "Từ chỉ thời gian luôn đứng ở đầu câu hoặc trước vị ngữ, tuyệt đối không đặt ở đuôi câu[span_30](start_span)[span_30](end_span).", pause: 300 }
            ]
          },
          {
            id: "g3-ex-5",
            type: "Phân biệt bổ ngữ kết quả 完 và 好",
            prompt: "Chọn câu phù hợp nhất trong tình huống người mẹ đã nấu nướng xong các món ăn hoàn thiện, dọn lên bàn và gọi cả nhà ra ăn:",
            options: [
              "A. 晚饭做完了，大家快来吃吧！",
              "B. 晚饭做好了，大家快来吃吧！",
              "C. 晚饭做掉了，大家快来吃吧！",
              "D. 晚饭做刚了，大家快来吃吧！"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu năm: Chọn câu diễn đạt bữa cơm đã hoàn thiện sẵn sàng mời mọi người[span_31](start_span)[span_31](end_span).", pause: 400 }
            ],
            reasonRight: "做好 biểu thị món ăn đã hoàn thiện trọn vẹn, sẵn sàng dọn ra thưởng thức[span_32](start_span)[span_32](end_span).",
            reasonWrong: "做完 chỉ nhấn mạnh động tác nấu đã kết thúc thời gian[span_33](start_span)[span_33](end_span); 做掉 mang sắc thái tiêu biến, loại bỏ[span_34](start_span)[span_34](end_span); D sai ngữ pháp nghiêm trọng vì 刚 là phó từ không làm bổ ngữ kết quả[span_35](start_span)[span_35](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_36](start_span)[span_36](end_span).", pause: 200 },
              { lang: "zh-CN", text: "晚饭做好了", pause: 400 },
              { lang: "vi-VN", text: "Chữ hảo biểu thị trạng thái đã hoàn tất chu đáo, sẵn sàng thưởng thức[span_37](start_span)[span_37](end_span).", pause: 300 }
            ]
          },
          {
            id: "g3-ex-6",
            type: "Bổ ngữ kết quả 掉 biểu thị tiêu biến / loại bỏ",
            prompt: "Chọn từ điền vào chỗ trống mang ý nghĩa loại bỏ triệt để: 桌子上的旧杂志已经没用了，你把它们扔____吧。",
            options: [
              "A. 完",
              "B. 掉",
              "C. 刚",
              "D. 近"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu sáu: Điền bổ ngữ kết quả mang ý nghĩa vứt bỏ đồ cũ đi[span_38](start_span)[span_38](end_span):", pause: 300 },
              { lang: "zh-CN", text: "桌子上的旧杂志已经没用了，你把它们扔吧。", pause: 600 }
            ],
            reasonRight: "扔掉 là cụm bổ ngữ kết quả quen thuộc, biểu thị vứt bỏ đi cho tiêu biến, sạch chỗ[span_39](start_span)[span_39](end_span).",
            reasonWrong: "扔完 mang nghĩa ném xong hết lượt đồ; 刚 và 近 không phải là bổ ngữ kết quả đi sau động từ vứt[span_40](start_span)[span_40](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_41](start_span)[span_41](end_span).", pause: 200 },
              { lang: "zh-CN", text: "扔掉", pause: 400 },
              { lang: "vi-VN", text: "Bổ ngữ điệu biểu thị hành động loại bỏ, vứt bỏ sạch sẽ một vật[span_42](start_span)[span_42](end_span).", pause: 300 }
            ]
          },

          // C. Luyện nghe hiểu (Câu 7, 8)
          {
            id: "g3-ex-7",
            type: "Nghe hiểu bắt diễn biến thời gian & kết quả",
            isListening: true,
            prompt: "Nghe đoạn ghi âm và trả lời câu hỏi: Người nói vừa mới hoàn thành việc gì?",
            options: [
              "A. Vừa mới làm xong bài tập về nhà",
              "B. Vừa mới dọn dẹp sạch sẽ phòng ngủ",
              "C. Vừa mới đi siêu thị mua đôi giày vừa vặn",
              "D. Vừa mới thi xong kỳ thi tiếng Trung"
            ],
            correct: 0,
            transcript: "我刚做完老师留的作业，现在觉得很累，想去外面散散步。",
            questionAudio: [
              { lang: "vi-VN", text: "Câu bảy: Hãy lắng nghe đoạn ghi âm sau đây[span_43](start_span)[span_43](end_span):", pause: 300 },
              { lang: "zh-CN", text: "我刚做完老师留的作业，现在觉得很累，想去外面散散步。", pause: 800 },
              { lang: "vi-VN", text: "Câu hỏi: Người nói vừa mới hoàn thành việc gì[span_44](start_span)[span_44](end_span)?", pause: 400 }
            ],
            reasonRight: "Trong bài nghe có câu rõ ràng: 我刚做完老师留的作业 (tôi vừa mới làm xong bài tập cô giáo giao)[span_45](start_span)[span_45](end_span).",
            reasonWrong: "Các phương án B, C, D không được đề cập trong nội dung nghe[span_46](start_span)[span_46](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là A[span_47](start_span)[span_47](end_span). Người nói nói rất rõ:", pause: 200 },
              { lang: "zh-CN", text: "刚做完老师留的作业", pause: 400 },
              { lang: "vi-VN", text: "tức là vừa mới làm xong bài tập về nhà[span_48](start_span)[span_48](end_span).", pause: 300 }
            ]
          },
          {
            id: "g3-ex-8",
            type: "Nghe hiểu mua sắm & đánh giá tính chất",
            isListening: true,
            prompt: "Nghe đoạn hội thoại và chọn nhận định chính xác về đôi giày được nhắc tới:",
            options: [
              "A. Kích cỡ quá lớn, đi vào không thoải mái",
              "B. Đôi giày vừa vặn kích cỡ và đi rất êm",
              "C. Đôi giày bị rơi trên đường không tìm thấy",
              "D. Giá đôi giày quá đắt nên không mua"
            ],
            correct: 1,
            transcript: "这双黑色的鞋子大小非常合适，穿着也很舒服，我就买这双吧。",
            questionAudio: [
              { lang: "vi-VN", text: "Câu tám: Lắng nghe đoạn đối thoại thử giày mua sắm[span_49](start_span)[span_49](end_span):", pause: 300 },
              { lang: "zh-CN", text: "这双黑色的鞋子大小非常合适，穿着也很舒服，我就买这双吧。", pause: 800 },
              { lang: "vi-VN", text: "Câu hỏi: Nhận định nào sau đây là chính xác về đôi giày[span_50](start_span)[span_50](end_span)?", pause: 400 }
            ],
            reasonRight: "Lời thoại khẳng định: 大小非常合适，穿着也很舒服 (kích cỡ rất vừa vặn, đi vào cũng rất êm ái)[span_51](start_span)[span_51](end_span).",
            reasonWrong: "Các phương án A, C, D trái ngược hoặc sai lệch hoàn toàn so với nội dung nghe[span_52](start_span)[span_52](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_53](start_span)[span_53](end_span). Câu khẳng định rõ:", pause: 200 },
              { lang: "zh-CN", text: "大小非常合适", pause: 400 },
              { lang: "vi-VN", text: "kích cỡ đôi giày vô cùng vừa vặn[span_54](start_span)[span_54](end_span).", pause: 300 }
            ]
          }
        ],

        // ============================================================
        // TỰ DÙNG TỪ & PHẢN HỒI (2 TÌNH HUỐNG 3 TẦNG)
        // ============================================================
        selfUse: {
          id: "g3-self-1",
          situation: "Bạn đang ở trong phòng tự học của thư viện. Hãy nhắc nhở một người bạn vừa bước vào cần phải giữ trật tự im lặng, và dặn họ cẩn thận kẻo làm rơi chiếc điện thoại đang để hớ hênh trên mép bàn[span_55](start_span)[span_55](end_span).",
          hint1: "Vận dụng tính từ/động từ yêu cầu trật tự, phó từ vừa mới và động từ rơi rớt đồ vật xuống đất[span_56](start_span)[span_56](end_span)[span_57](start_span)[span_57](end_span)[span_58](start_span)[span_58](end_span).",
          hint2: "Khung câu gợi ý: 请大家保持安静... / 你的手机差点儿掉在地上...[span_59](start_span)[span_59](end_span)",
          modelAnswer: "图书馆里需要安静，请你说话小声一点儿。还有，小心你的手机掉在地上。",
          modelExplain: "Câu này kết hợp hoàn hảo từ 安静 trong ngữ cảnh nhắc nhở trật tự thư viện, và động từ 掉 kết hợp giới từ chỉ nơi chốn 在地上 miêu tả sự rơi rớt vật lý[span_60](start_span)[span_60](end_span)[span_61](start_span)[span_61](end_span)[span_62](start_span)[span_62](end_span).",
          modelAudio: [
            { lang: "vi-VN", text: "Tình huống một: Nhắc trật tự và cẩn thận rơi điện thoại. Lắng nghe câu mẫu[span_63](start_span)[span_63](end_span):", pause: 300 },
            { lang: "zh-CN", text: "图书馆里需要安静，请你说话小声一点儿。还有，小心你的手机掉在地上。", pause: 1800 }
          ]
        },
        additionalSelfUse: {
          id: "g3-self-2",
          situation: "Gặp lại người bạn cũ sau một thời gian, hãy chào hỏi thăm tình hình dạo này, sau đó khoe chiếc áo bạn vừa mới mua rất thích hợp để mặc đi làm[span_64](start_span)[span_64](end_span).",
          hint1: "Dùng từ dạo này ở đầu câu hỏi han, phó từ vừa mới đứng trước động từ mua, và kết cấu thích hợp cho công việc[span_65](start_span)[span_65](end_span).",
          hint2: "Khung câu gợi ý: 你最近怎么样？ / 我刚买了一件新衣服... / 这件衣服很合适...[span_66](start_span)[span_66](end_span)",
          modelAnswer: "你最近好吗？我刚买了一件新衣服，大家都说这件衣服对我工作很合适。",
          modelExplain: "Câu này vận dụng chính xác 最近 làm trạng ngữ thời gian, 刚 đứng sau chủ ngữ trước động từ 买, và tính từ 合适 dùng cùng giới từ 对 chỉ đối tượng phù hợp[span_67](start_span)[span_67](end_span)[span_68](start_span)[span_68](end_span)[span_69](start_span)[span_69](end_span).",
          modelAudio: [
            { lang: "vi-VN", text: "Tình huống hai: Chào hỏi thăm dạo này và khoe áo mới. Lắng nghe câu mẫu[span_70](start_span)[span_70](end_span):", pause: 300 },
            { lang: "zh-CN", text: "你最近好吗？我刚买了一件新衣服，大家都说这件衣服对我工作很合适。", pause: 2000 }
          ]
        },

        // ============================================================
        // ÔN TẬP CÁCH QUÃNG NGÀY 1, 3, 7 (TOÀN BỘ 6 TỪ NHÓM 3)
        // ============================================================
        reviews: [
          // Ngày 1: Nhớ nghĩa cốt lõi & Cấu trúc cơ bản
          {
            day: 1,
            type: "Nhớ nghĩa & Tạo câu cơ bản",
            q: "Hãy nói câu sau sang tiếng Trung: 'Tôi vừa mới về đến nhà thì trời đổ mưa lớn[span_71](start_span)'[span_71](end_span).",
            answer: "我刚到家就下大雨了。",
            explain: "Dùng cấu trúc 刚...就... biểu thị hai sự việc diễn ra liên tiếp sát nút[span_72](start_span)[span_72](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày một: Vừa mới thì đã. Đáp án chuẩn[span_73](start_span)[span_73](end_span):", pause: 300 },
              { lang: "zh-CN", text: "我刚到家就下大雨了。", pause: 1200 }
            ]
          },
          {
            day: 1,
            type: "Nhớ nghĩa & Tạo câu cơ bản",
            q: "Hãy dùng từ 最近 để hỏi thăm sức khỏe của bạn bè trong thời gian dạo này[span_74](start_span)[span_74](end_span)[span_75](start_span)[span_75](end_span).",
            answer: "你最近身体怎么样？ / 最近你的身体好吗？",
            explain: "最近 đứng trước chủ ngữ hoặc trước vị ngữ, không để ở cuối câu[span_76](start_span)[span_76](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày một: Hỏi thăm sức khỏe dạo này. Đáp án chuẩn[span_77](start_span)[span_77](end_span):", pause: 300 },
              { lang: "zh-CN", text: "你最近身体怎么样？", pause: 1200 }
            ]
          },

          // Ngày 3: Bẫy ngữ pháp & Vị trí kết hợp
          {
            day: 3,
            type: "Bẫy kết hợp & Vị trí",
            q: "Sửa lỗi sai ngữ pháp trong câu sau: 这双鞋子真漂亮，非常合适你[span_78](start_span)[span_78](end_span)。",
            answer: "这双鞋子真漂亮，非常适合你。 / 这双鞋子真漂亮，对你非常合适。",
            explain: "合适 là tính từ không mang tân ngữ người trực tiếp; phải đổi sang động từ 适合 mang tân ngữ, hoặc dùng cấu trúc giới từ 对你合适[span_79](start_span)[span_79](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày ba: Bẫy tính từ thích hợp mang tân ngữ. Câu sửa chuẩn là[span_80](start_span)[span_80](end_span):", pause: 300 },
              { lang: "zh-CN", text: "这双鞋子真漂亮，非常适合你。", pause: 1200 }
            ]
          },
          {
            day: 3,
            type: "Bẫy kết hợp & Vị trí",
            q: "Tại sao nói '房间打扫得很安静' lại là một câu sai nghĩa nghiêm trọng[span_81](start_span)[span_81](end_span)?",
            answer: "Vì 安静 là yên tĩnh, không tiếng ồn; còn quét dọn phòng sạch sẽ, không bụi bẩn phải dùng từ 干净[span_82](start_span)[span_82](end_span)[span_83](start_span)[span_83](end_span).",
            explain: "Phân biệt trạng thái âm thanh (安静) và trạng thái vệ sinh (干净)[span_84](start_span)[span_84](end_span)[span_85](start_span)[span_85](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày ba: Phân biệt yên tĩnh âm thanh và sạch sẽ vệ sinh[span_86](start_span)[span_86](end_span). Không được dùng nhầm[span_87](start_span)[span_87](end_span).", pause: 400 }
            ]
          },

          // Ngày 7: Phản xạ giao tiếp & Ứng dụng nâng cao
          {
            day: 7,
            type: "Vận dụng giao tiếp & Phản xạ",
            q: "Khi muốn bảo ai đó vứt một món đồ cũ rách nát không dùng được nữa vào thùng rác, ta dùng bổ ngữ kết quả nào với động từ 扔[span_88](start_span)[span_88](end_span)?",
            answer: "Dùng bổ ngữ 掉 (扔掉: vứt bỏ đi)[span_89](start_span)[span_89](end_span).",
            explain: "Bổ ngữ 掉 biểu thị hành động tiêu biến, loại bỏ dứt điểm[span_90](start_span)[span_90](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày bảy: Bổ ngữ tiêu biến loại bỏ. Cụm từ là[span_91](start_span)[span_91](end_span):", pause: 300 },
              { lang: "zh-CN", text: "扔掉", pause: 800 }
            ]
          },
          {
            day: 7,
            type: "Nghe hiểu & Ứng dụng tổng hợp",
            listenAudio: [
              { lang: "zh-CN", text: "等大家安静下来，做完手头的事情，我们再商量这个计划合适不合适。", pause: 1000 }
            ],
            q: "Nghe câu tiếng Trung và cho biết: Khi nào thì mọi người mới bắt đầu bàn bạc kế hoạch[span_92](start_span)[span_92](end_span)?",
            answer: "Đợi mọi người yên tĩnh trở lại (安静下来) và làm xong việc trước mắt (做完手头的事情) thì mới bàn bạc xem kế hoạch có phù hợp hay không[span_93](start_span)[span_93](end_span).",
            explain: "Câu vận dụng linh hoạt 安静, 做完 và 合适 trong văn cảnh điều hành cuộc họp[span_94](start_span)[span_94](end_span)[span_95](start_span)[span_95](end_span)[span_96](start_span)[span_96](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày bảy: Lời giải câu nghe hiểu tổng hợp[span_97](start_span)[span_97](end_span). Đợi yên tĩnh và làm xong việc mới cùng thảo luận[span_98](start_span)[span_98](end_span).", pause: 400 }
            ]
          }
        ]
      }, // Kết thúc group-3 (Nhóm 3)
      // ==============================================================
      // NHÓM 4: HÀNH ĐỘNG, SỐ LẦN & NGỮ KHÍ
      // ==============================================================
      {
        id: "group-4",
        title: "Nhóm 4: Hành động, Số lần & Ngữ khí",
        desc: "Các động từ chỉ tư thế, hoạt động xã hội, động lượng từ chỉ số lần và trợ từ ngữ khí thông dụng[span_0](start_span)[span_0](end_span)[span_1](start_span)[span_1](end_span)[span_2](start_span)[span_2](end_span).",
        words: [
          // ------------------------------------------------------------
          // TỪ SỐ 19: 参加 [參加] (cānjiā)
          // ------------------------------------------------------------
          {
            id: "word-19-canjia",
            index: 19,
            sourceIndex: 16,
            hanzi: "参加",
            pinyin: "cānjiā",
            coreMeaning: "tham gia, dự, gia nhập[span_3](start_span)[span_3](end_span)",
            pos: "Động từ",
            topic: "Hành động & Hoạt động xã hội",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười chín:", pause: 200 },
              { lang: "zh-CN", text: "参加", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: tham gia, dự, gia nhập[span_4](start_span)[span_4](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn trực tiếp góp mặt vào một sự kiện tập thể, tham gia một kỳ thi, hội nghị, cuộc thi đấu, hôn lễ hoặc gia nhập một tổ chức[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span).",
              detail: "Đây là ngoại động từ chỉ hành động gia nhập hoặc có mặt trong các hoạt động có tổ chức[span_7](start_span)[span_7](end_span)[span_8](start_span)[span_8](end_span). Tân ngữ thường là danh từ chỉ hoạt động, sự kiện, cuộc thi hoặc tổ chức xã hội[span_9](start_span)[span_9](end_span).",
              keyPoint: "Nhấn mạnh vào tư cách người trực tiếp tham gia trải nghiệm hoặc thi đấu, khác với việc chỉ đến xem đơn thuần với tư cách khán giả[span_10](start_span)[span_10](end_span).",
              audio: [
                { lang: "vi-VN", text: "Động từ ", pause: 150 },
                { lang: "zh-CN", text: "参加", pause: 400 },
                { lang: "vi-VN", text: "chỉ việc trực tiếp góp mặt vào một hoạt động, kỳ thi hoặc hội nghị[span_11](start_span)[span_11](end_span)[span_12](start_span)[span_12](end_span). Tân ngữ đứng liền ngay sau động từ[span_13](start_span)[span_13](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Tham gia sự kiện / hoạt động / kỳ thi",
                pattern: "参加 + Hoạt động / Cuộc thi / Hội nghị",
                note: "Kết hợp trực tiếp với danh từ sự kiện mà không cần giới từ nối[span_14](start_span)[span_14](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Tham gia sự kiện hoặc kỳ thi[span_15](start_span)[span_15](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "参加考试", pause: 600 },
                  { lang: "vi-VN", text: "dự thi, đi thi[span_16](start_span)[span_16](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "参加会议", pause: 600 },
                  { lang: "vi-VN", text: "dự họp[span_17](start_span)[span_17](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "参加比赛", pause: 600 },
                  { lang: "vi-VN", text: "tham gia cuộc thi[span_18](start_span)[span_18](end_span).", pause: 300 }
                ]
              },
              {
                title: "Bắt đầu đi làm / gia nhập công việc xã hội",
                pattern: "参加 + 工作",
                note: "Cụm từ cố định chỉ mốc thời điểm chính thức bước vào đời đi làm kiếm sống[span_19](start_span)[span_19](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Bắt đầu đi làm[span_20](start_span)[span_20](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "参加工作", pause: 700 },
                  { lang: "vi-VN", text: "Ví dụ: Sau khi tốt nghiệp đại học, anh ấy đã bắt đầu đi làm[span_21](start_span)[span_21](end_span).", pause: 300 }
                ]
              },
              {
                title: "Lời mời tham gia hoạt động",
                pattern: "欢迎 + (大家) + 参加",
                note: "Dùng trong các thông báo, lời mời trang trọng hoặc khẩu ngữ nhiệt tình[span_22](start_span)[span_22](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Lời mời nhiệt tình tham gia[span_23](start_span)[span_23](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "欢迎大家参加今天的活动。", pause: 900 },
                  { lang: "vi-VN", text: "Hoan nghênh mọi người tham gia hoạt động hôm nay[span_24](start_span)[span_24](end_span).", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "下个星期学校有一个汉语比赛，你打算参加吗？",
                vi: "Tuần sau trường học có một cuộc thi tiếng Trung, bạn có dự định tham gia không[span_25](start_span)[span_25](end_span)?",
                pause: 1500
              },
              {
                zh: "张老师今天下午要去参加一个非常重要的会议。",
                vi: "Thầy Trương chiều nay phải đi dự một cuộc họp vô cùng quan trọng[span_26](start_span)[span_26](end_span).",
                pause: 1500
              },
              {
                zh: "这是我第一次参加这种大型的文化交流活动。",
                vi: "Đây là lần đầu tiên tôi tham gia hoạt động giao lưu văn hóa quy mô lớn như thế này[span_27](start_span)[span_27](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt 参加 (trực tiếp tham gia hoạt động) và 去看 (đến xem với tư cách khán giả)",
              situation: "Người học tiếng Việt thường nói 'đi tham gia đại nhạc hội / trận bóng đá' nhưng thực chất chỉ đến ngồi xem[span_28](start_span)[span_28](end_span).",
              explanation: "参加 nhấn mạnh vào việc bạn LÀ THÀNH VIÊN, LÀ NGƯỜI ĐUA TÀI hoặc người dự chính thức (ví dụ: 参加比赛 là đích thân xuống sân thi đấu)[span_29](start_span)[span_29](end_span). Nếu bạn chỉ mua vé vào sân vận động để ngồi cổ vũ, thưởng thức thì phải nói là 去看 (去看球赛, 去看演唱会), không nói là 参加[span_30](start_span)[span_30](end_span).",
              wrong: "周末我想买票去参加周杰伦的演唱会。",
              right: "周末我想买票去听周杰伦的演唱会。 / 周末我想买票去看周杰伦的演唱会。",
              tip: "Đích thân thi cử, họp hành, biểu diễn -> dùng 参加[span_31](start_span)[span_31](end_span). Mua vé đi xem, làm khán giả ngồi nghe -> dùng 看 / 听[span_32](start_span)[span_32](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa trực tiếp tham gia và làm khán giả đi xem[span_33](start_span)[span_33](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu dùng từ chưa tự nhiên khi đi xem hòa nhạc[span_34](start_span)[span_34](end_span):", pause: 200 },
                { lang: "zh-CN", text: "周末我想买票去参加演唱会。", pause: 600 },
                { lang: "vi-VN", text: "Khi đi nghe hát với tư cách khán giả, ta dùng động từ nghe hoặc xem chứ không dùng từ tham gia biểu diễn[span_35](start_span)[span_35](end_span). Câu chuẩn là:", pause: 300 },
                { lang: "zh-CN", text: "周末我想买票去听演唱会。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Chữ 参 (cān) bắt đầu bằng phụ âm c (bật hơi mạnh từ đầu lưỡi trước), đọc thanh một kéo dài[span_36](start_span)[span_36](end_span). Chữ 加 (jiā) đọc thanh một bằng phẳng[span_37](start_span)[span_37](end_span). Tránh đọc cān thành zān không bật hơi[span_38](start_span)[span_38](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm bật hơi ở chữ đầu, cả hai chữ đều giữ thanh một ngang bằng[span_39](start_span)[span_39](end_span). Nghe và đọc theo:", pause: 300 },
                { lang: "zh-CN", text: "参加", pause: 1500 },
                { lang: "zh-CN", text: "参加考试", pause: 1500 },
                { lang: "zh-CN", text: "参加工作", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 参 gồm chữ Tư (厶) ở trên, nét ngang bao bọc ở giữa và bộ Sam ba nét phẩy (彡) ở dưới cùng[span_40](start_span)[span_40](end_span). Chữ 加 gồm bộ Lực (力 - sức lực) bên trái và bộ Khẩu (口 - miệng) bên phải, ngụ ý vừa dùng sức vừa hô hào chung sức[span_41](start_span)[span_41](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Chữ Tham có ba nét phẩy ở đáy[span_42](start_span)[span_42](end_span). Chữ Gia gồm bộ lực và bộ khẩu ghép lại mang ý nghĩa góp sức[span_43](start_span)[span_43](end_span).", pause: 400 }
              ]
            },
            summary: "参加: động từ tham gia, dự (参加考试, 参加会议, 参加比赛)[span_44](start_span)[span_44](end_span)[span_45](start_span)[span_45](end_span). Phân biệt với việc chỉ làm khán giả đến xem (去看, 去听)[span_46](start_span)[span_46](end_span)."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 20: 站 (zhàn)
          // ------------------------------------------------------------
          {
            id: "word-20-zhan",
            index: 20,
            sourceIndex: 18,
            hanzi: "站",
            pinyin: "zhàn",
            coreMeaning: "đứng; trạm, bến, nhà ga[span_47](start_span)[span_47](end_span)",
            pos: "Động từ / Danh từ / Lượng từ",
            topic: "Tư thế cơ thể & Giao thông",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi:", pause: 200 },
              { lang: "zh-CN", text: "站", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: đứng; trạm, bến, nhà ga[span_48](start_span)[span_48](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi miêu tả tư thế đứng thẳng chân trên mặt đất (ngược với ngồi), hoặc khi nói về bến xe bus, ga tàu điện ngầm, hoặc đếm số trạm xe đi qua[span_49](start_span)[span_49](end_span)[span_50](start_span)[span_50](end_span).",
              detail: "Khi làm động từ, 站 chỉ tư thế đứng thẳng[span_51](start_span)[span_51](end_span)[span_52](start_span)[span_52](end_span). Khi làm danh từ, nó chỉ trạm đón trả khách của phương tiện giao thông (车站, 地铁站, 火车站)[span_53](start_span)[span_53](end_span)[span_54](start_span)[span_54](end_span). Khi làm lượng từ, nó đếm số chặng/trạm dừng xe (坐三站 - đi ba trạm)[span_55](start_span)[span_55](end_span).",
              keyPoint: "Động từ biểu thị trạng thái duy trì: 站着 (đang đứng); động tác đứng dậy: 站起来[span_56](start_span)[span_56](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "站", pause: 400 },
                { lang: "vi-VN", text: "rất đa năng: vừa là động từ đứng, vừa là danh từ nhà ga, bến xe, vừa làm lượng từ đếm số trạm dừng[span_57](start_span)[span_57](end_span)[span_58](start_span)[span_58](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Đứng dậy / Đứng ở địa điểm nào",
                pattern: "站起来 / 站在 + Nơi chốn",
                note: "起来 là bổ ngữ xu hướng chỉ hướng lên; 在 dẫn nơi chốn đứng chân[span_59](start_span)[span_59](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Đứng dậy hoặc đứng ở đâu[span_60](start_span)[span_60](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "请站起来", pause: 600 },
                  { lang: "vi-VN", text: "xin hãy đứng dậy[span_61](start_span)[span_61](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "站在门口", pause: 600 },
                  { lang: "vi-VN", text: "đứng ở cửa[span_62](start_span)[span_62](end_span).", pause: 300 }
                ]
              },
              {
                title: "Nhà ga / Trạm dừng phương tiện giao thông (Dùng làm danh từ)",
                pattern: "Phương tiện + 站",
                note: "Chỉ bến bãi, địa điểm dừng đón trả khách[span_63](start_span)[span_63](end_span)[span_64](start_span)[span_64](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Nhà ga, bến xe[span_65](start_span)[span_65](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "火车站", pause: 600 },
                  { lang: "vi-VN", text: "ga tàu hỏa[span_66](start_span)[span_66](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "地铁站", pause: 600 },
                  { lang: "vi-VN", text: "ga tàu điện ngầm[span_67](start_span)[span_67](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "车站", pause: 600 },
                  { lang: "vi-VN", text: "bến xe[span_68](start_span)[span_68](end_span)[span_69](start_span)[span_69](end_span).", pause: 300 }
                ]
              },
              {
                title: "Đi mấy trạm dừng (Dùng làm lượng từ)",
                pattern: "坐 + (Số từ) + 站",
                note: "Dùng để chỉ cự ly quãng đường bằng số lượng trạm xe buýt hoặc ga tàu[span_70](start_span)[span_70](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Đếm số trạm xe[span_71](start_span)[span_71](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "坐两站", pause: 600 },
                  { lang: "vi-VN", text: "đi hai trạm dừng[span_72](start_span)[span_72](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "车上没有空座位了，我们只能一路站着回去。",
                vi: "Trên xe không còn ghế trống nữa rồi, chúng tôi đành phải đứng suốt dọc đường về[span_73](start_span)[span_73](end_span).",
                pause: 1500
              },
              {
                zh: "请问从这里到火车站还要坐几站公共汽车？",
                vi: "Xin hỏi từ đây đến ga tàu hỏa còn phải đi mấy trạm xe buýt nữa[span_74](start_span)[span_74](end_span)?",
                pause: 1500
              },
              {
                zh: "老师一走进教室，所有的学生都马上站了起来。",
                vi: "Thầy giáo vừa bước vào lớp học, tất cả học sinh đều lập tức đứng dậy[span_75](start_span)[span_75](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn vị trí giới từ nơi chốn khi nói 'đứng ở đâu'",
              situation: "Người học tiếng Việt hay nói 'đứng ở cửa' nên ghép thẳng thành *站门口 hoặc dịch sai vị trí[span_76](start_span)[span_76](end_span).",
              explanation: "Trong tiếng Trung, động từ đứng cần bổ ngữ kết quả chỉ điểm tiếp đất là 在 (站在 + Nơi chốn: 站在门口)[span_77](start_span)[span_77](end_span), hoặc đưa toàn bộ cụm giới từ lên trước động từ làm trạng ngữ chỉ trạng thái duy trì (在门口站着)[span_78](start_span)[span_78](end_span). Không được bỏ rơi giới từ 在 mà nói cộc lốc *站门口[span_79](start_span)[span_79](end_span).",
              wrong: "他一个人站门口等了半天。",
              right: "他一个人站在门口等了半天。 / 他一个人在门口站着等了半天。",
              tip: "Đứng ở đâu -> nhớ cấu trúc 站在 + Nơi chốn hoặc 在 + Nơi chốn + 站着[span_80](start_span)[span_80](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy vị trí giới từ khi nói đứng ở đâu[span_81](start_span)[span_81](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu thiếu giới từ tiếp xúc nơi chốn[span_82](start_span)[span_82](end_span):", pause: 200 },
                { lang: "zh-CN", text: "他一个人站门口等了半天。", pause: 600 },
                { lang: "vi-VN", text: "Cần bổ sung giới từ tại để chỉ điểm đứng[span_83](start_span)[span_83](end_span). Câu sửa chuẩn là:", pause: 300 },
                { lang: "zh-CN", text: "他一个人站在门口等了半天。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu zh (uốn cong đầu lưỡi lên ngạc cứng), kết hợp vận mẫu an, rơi thanh bốn dứt khoát từ trên xuống (zhàn)[span_84](start_span)[span_84](end_span). Tránh đọc nhầm thành zàn không uốn lưỡi[span_85](start_span)[span_85](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm uốn lưỡi âm đầu và đọc thanh bốn dứt khoát[span_86](start_span)[span_86](end_span). Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "站", pause: 1500 },
                { lang: "zh-CN", text: "车站", pause: 1500 },
                { lang: "zh-CN", text: "站起来", pause: 1800 }
              ]
            },
            write: {
              desc: "Bên trái là bộ Lập (立 - người đứng thẳng vững vàng trên mặt đất) biểu ý; bên phải là chữ Chiêm (占) đóng vai trò biểu âm[span_87](start_span)[span_87](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Bên trái là bộ lập chỉ tư thế đứng thẳng của con người, bên phải là chữ chiêm[span_88](start_span)[span_88](end_span).", pause: 400 }
              ]
            },
            summary: "站: động từ đứng (站起来, 站在); danh từ nhà ga, bến xe (车站, 地铁站); lượng từ số trạm dừng xe (坐两站)[span_89](start_span)[span_89](end_span)[span_90](start_span)[span_90](end_span)."
          },
          // ------------------------------------------------------------
          // TỪ SỐ 21: 回 [-/迴] (huí)
          // ------------------------------------------------------------
          {
            id: "word-21-hui",
            index: 21,
            sourceIndex: 14,
            hanzi: "回",
            pinyin: "huí",
            coreMeaning: "quay về, trở về; lần, hồi (động lượng từ)[span_0](start_span)[span_0](end_span)",
            pos: "Động từ / Động lượng từ",
            topic: "Di chuyển & Tần suất",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi mốt:", pause: 200 },
              { lang: "zh-CN", text: "回", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: quay về, trở về; hoặc làm lượng từ: lần, hồi[span_1](start_span)[span_1](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn di chuyển ngược về địa điểm xuất phát hoặc nơi thuộc về mình (về nhà, về nước, về trường), hoặc dùng làm lượng từ đếm số lần của sự việc[span_2](start_span)[span_2](end_span)[span_3](start_span)[span_3](end_span).",
              detail: "Khi làm động từ, 回 mang tân ngữ nơi chốn trực tiếp ngay phía sau mà không cần giới từ (回家, 回国)[span_4](start_span)[span_4](end_span). Khi làm động lượng từ, nó tương đương với 次 (lần), nhưng thường dùng trong khẩu ngữ để chỉ cả một lượt diễn biến trọn vẹn của sự việc (一回事, 这一回)[span_5](start_span)[span_5](end_span).",
              keyPoint: "Hồi quy về nơi xuất phát thì dùng 回 + Nơi chốn; không chèn giới từ 到 vào giữa nếu không có bổ ngữ kết quả[span_6](start_span)[span_6](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "回", pause: 400 },
                { lang: "vi-VN", text: "vừa là động từ quay về nơi chốn quen thuộc, vừa là lượng từ đếm số lần hoặc sự tình trong khẩu ngữ[span_7](start_span)[span_7](end_span)[span_8](start_span)[span_8](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Quay trở về nơi chốn",
                pattern: "回 + Nơi chốn quen thuộc / Bản xứ",
                note: "Tân ngữ nơi chốn đứng liền sau động từ: 家 (nhà), 国 (nước), 学校 (trường)[span_9](start_span)[span_9](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Quay về địa điểm quen thuộc[span_10](start_span)[span_10](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "回家", pause: 600 },
                  { lang: "vi-VN", text: "về nhà[span_11](start_span)[span_11](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "回国", pause: 600 },
                  { lang: "vi-VN", text: "về nước[span_12](start_span)[span_12](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "回学校", pause: 600 },
                  { lang: "vi-VN", text: "về trường học[span_13](start_span)[span_13](end_span).", pause: 300 }
                ]
              },
              {
                title: "Quay trở về đây / Quay trở về đó (Bổ ngữ xu hướng)",
                pattern: "回来 / 回去",
                note: "Dùng 来 khi hành động hướng về phía người nói; dùng 去 khi hành động rời xa người nói[span_14](start_span)[span_14](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Kết hợp bổ ngữ xu hướng lại đây hoặc đi ra kia[span_15](start_span)[span_15](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "回来", pause: 600 },
                  { lang: "vi-VN", text: "về đây[span_16](start_span)[span_16](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "回去", pause: 600 },
                  { lang: "vi-VN", text: "về đó, về bên kia[span_17](start_span)[span_17](end_span).", pause: 300 }
                ]
              },
              {
                title: "Làm lượng từ cho sự việc / số lần",
                pattern: "一 + 回 + 事 / (Số từ) + 回",
                note: "一回事 biểu thị một chuyện; 两回 mang nghĩa hai lần[span_18](start_span)[span_18](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Làm lượng từ cho sự việc hoặc lượt làm[span_19](start_span)[span_19](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "一回事", pause: 600 },
                  { lang: "vi-VN", text: "cùng một chuyện[span_20](start_span)[span_20](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "去过两回", pause: 700 },
                  { lang: "vi-VN", text: "đã từng đi hai lần[span_21](start_span)[span_21](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "时间不早了，今天我们就先回家吧。",
                vi: "Thời gian không còn sớm nữa, hôm nay chúng ta về nhà trước đi thôi[span_22](start_span)[span_22](end_span).",
                pause: 1500
              },
              {
                zh: "他打算今年夏天放假的时候回国看望父母。",
                vi: "Anh ấy dự định lúc nghỉ hè năm nay sẽ về nước thăm bố mẹ[span_23](start_span)[span_23](end_span).",
                pause: 1500
              },
              {
                zh: "这两个问题根本不是一回事，你不要混在一起。",
                vi: "Hai vấn đề này căn bản không phải là cùng một chuyện, bạn đừng gộp chung lại[span_24](start_span)[span_24](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Phân biệt 回 (quay về nơi thuộc về mình) và 去 (đi đến một nơi chốn bất kỳ)",
              situation: "Người học tiếng Việt hay nói 'đi về nhà' nên dễ ghép thành *去回家 hoặc dùng 去 thay cho 回[span_25](start_span)[span_25](end_span).",
              explanation: "回 mang ý nghĩa hồi quy, trở về một nơi là gốc rễ, thuộc về mình hoặc nơi mình vừa rời khỏi (về nhà, về nước, về phòng)[span_26](start_span)[span_26](end_span). Còn 去 là rời khỏi vị trí hiện tại để đến một địa điểm bất kỳ (đi siêu thị, đi công viên)[span_27](start_span)[span_27](end_span). Khi nói 'về nhà', chỉ nói 回家 hoặc 回去, tuyệt đối không được nói *去家 hoặc *去回家[span_28](start_span)[span_28](end_span).",
              wrong: "下课以后我想去家做饭。",
              right: "下课以后我想回家做饭。",
              tip: "Đi đến nhà của mình -> bắt buộc dùng 回家, không bao giờ dùng 去家[span_29](start_span)[span_29](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa quay về nơi quen thuộc và đi đến điểm đến thông thường[span_30](start_span)[span_30](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai ngữ pháp rất phổ biến do dịch từng chữ từ tiếng Việt[span_31](start_span)[span_31](end_span):", pause: 200 },
                { lang: "zh-CN", text: "下课以后我想去家做饭。", pause: 600 },
                { lang: "vi-VN", text: "Nói về việc trở về ngôi nhà của mình phải dùng động từ hồi quy, không dùng động từ đi. Câu sửa đúng là:", pause: 300 },
                { lang: "zh-CN", text: "下课以后我想回家做饭。", pause: 1000 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu h (âm xát họng nhẹ), kết hợp vận mẫu ui (thực chất là uei), đọc thanh hai (huí) vuốt giọng từ dưới lên cao[span_32](start_span)[span_32](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm thanh hai vuốt cao tự nhiên[span_33](start_span)[span_33](end_span). Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "回", pause: 1500 },
                { lang: "zh-CN", text: "回家", pause: 1500 },
                { lang: "zh-CN", text: "回来", pause: 1800 }
              ]
            },
            write: {
              desc: "Chữ 回 mang hình dáng tượng hình rõ nét: một ô vuông lớn bao bọc một ô vuông nhỏ bên trong (bộ Vi 囗 bên ngoài và bộ Khẩu 口 bên trong), ngụ ý vòng quay trở lại tâm điểm ban đầu[span_34](start_span)[span_34](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Khung vuông lớn bao bọc khung vuông nhỏ bên trong, tượng trưng cho sự quay về khép kín trọn vẹn[span_35](start_span)[span_35](end_span).", pause: 400 }
              ]
            },
            summary: "回: động từ quay về (回家, 回国, 回来)[span_36](start_span)[span_36](end_span)[span_37](start_span)[span_37](end_span); lượng từ lần/chuyện (一回事, 去过两回)[span_38](start_span)[span_38](end_span). Tuyệt đối không dùng *去家 để nói về nhà[span_39](start_span)[span_39](end_span)."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 22: 数 [數] (shǔ / shù)
          // ------------------------------------------------------------
          {
            id: "word-22-shu",
            index: 22,
            sourceIndex: 5,
            hanzi: "数",
            pinyin: "shǔ",
            coreMeaning: "đếm (động từ); con số, số từ (danh từ)[span_40](start_span)[span_40](end_span)",
            pos: "Động từ / Danh từ",
            topic: "Toán học & Thao tác đếm",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi hai:", pause: 200 },
              { lang: "zh-CN", text: "数", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: đếm khi là động từ; hoặc con số khi là danh từ[span_41](start_span)[span_41](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng khi bạn lần lượt kiểm đếm số người, số lượng đồ vật, đếm tiền mặt; hoặc khi nhắc đến môn toán, con số thống kê[span_42](start_span)[span_42](end_span)[span_43](start_span)[span_43](end_span).",
              detail: "Đây là một chữ ĐA ÂM ĐA NGHĨA đặc sắc[span_44](start_span)[span_44](end_span): Khi đọc thanh ba shǔ, nó là ĐỘNG TỪ mang nghĩa đếm (数数 - đếm số, 数钱 - đếm tiền)[span_45](start_span)[span_45](end_span)[span_46](start_span)[span_46](end_span). Khi đọc thanh bốn shù, nó là DANH TỪ mang nghĩa con số, số lượng (数字 - chữ số, 数学 - toán học)[span_47](start_span)[span_47](end_span).",
              keyPoint: "Bắt buộc phân biệt âm đọc: Động từ đếm đọc là shǔ (thanh ba)[span_48](start_span)[span_48](end_span)[span_49](start_span)[span_49](end_span); danh từ con số đọc là shù (thanh bốn)[span_50](start_span)[span_50](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "数", pause: 400 },
                { lang: "vi-VN", text: "là chữ đa âm[span_51](start_span)[span_51](end_span). Khi là động từ đếm, đọc thanh ba[span_52](start_span)[span_52](end_span)[span_53](start_span)[span_53](end_span). Khi là danh từ con số hay toán học, đọc thanh bốn dứt khoát[span_54](start_span)[span_54](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Đếm số lượng / Đếm đồ vật (Đọc là shǔ)",
                pattern: "数 + (一) + 数 / 数 + Danh từ",
                note: "Lặp lại động từ 数一数 để biểu thị đếm thử một chút[span_55](start_span)[span_55](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Động từ đếm đồ vật, đọc thanh ba[span_56](start_span)[span_56](end_span)[span_57](start_span)[span_57](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "数数", pause: 600 },
                  { lang: "vi-VN", text: "tập đếm số[span_58](start_span)[span_58](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "数钱", pause: 600 },
                  { lang: "vi-VN", text: "đếm tiền[span_59](start_span)[span_59](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "数一数", pause: 600 },
                  { lang: "vi-VN", text: "đếm một chút xem sao[span_60](start_span)[span_60](end_span).", pause: 300 }
                ]
              },
              {
                title: "Con số / Môn toán (Dùng làm danh từ, đọc là shù)",
                pattern: "数字 / 数学",
                note: "Ghép thành danh từ chỉ khái niệm toán học, chữ số[span_61](start_span)[span_61](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Danh từ con số và toán học, đọc thanh bốn[span_62](start_span)[span_62](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "数字", pause: 600 },
                  { lang: "vi-VN", text: "chữ số[span_63](start_span)[span_63](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "数学", pause: 600 },
                  { lang: "vi-VN", text: "môn toán[span_64](start_span)[span_64](end_span).", pause: 300 }
                ]
              },
              {
                title: "Nổi tiếng nhất / Đứng hàng đầu (Nghĩa mở rộng)",
                pattern: "数 + Ai / Cái gì + 最 / 第一",
                note: "Biểu thị khi tính đếm, xếp hạng thì đối tượng này là nổi bật nhất[span_65](start_span)[span_65](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Đứng hàng đầu khi tính đếm[span_66](start_span)[span_66](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "全班数他最努力。", pause: 900 },
                  { lang: "vi-VN", text: "Cả lớp tính ra cậu ấy là chăm chỉ nhất[span_67](start_span)[span_67](end_span).", pause: 400 }
                ]
              }
            ],
            examples: [
              {
                zh: "请你数一数这里一共有多少本汉语书。",
                vi: "Xin bạn hãy đếm thử xem ở đây có tất cả bao nhiêu cuốn sách tiếng Trung[span_68](start_span)[span_68](end_span).",
                pause: 1500
              },
              {
                zh: "小孩子正在跟妈妈学习从一数到十。",
                vi: "Đứa bé đang cùng mẹ học đếm từ một đến mười[span_69](start_span)[span_69](end_span).",
                pause: 1500
              },
              {
                zh: "我对数学非常感兴趣，觉得那些数字很有意思。",
                vi: "Tôi vô cùng có hứng thú với môn toán, cảm thấy những con số đó rất thú vị[span_70](start_span)[span_70](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn cách phát âm giữa động từ 数 (shǔ: đếm) và danh từ 数 (shù: số)",
              situation: "Người học tiếng Trung hay đọc thanh bốn cho cả hai trường hợp hoặc đọc ngọng thanh điệu[span_71](start_span)[span_71](end_span).",
              explanation: "Bắt buộc ghi nhớ theo từ loại: Hành động dùng tay/mắt kiểm đếm từng cái một -> ĐỌC THANH BA (shǔ)[span_72](start_span)[span_72](end_span)[span_73](start_span)[span_73](end_span). Tên gọi của các con số 1, 2, 3 hoặc môn toán -> ĐỌC THANH BỐN (shù)[span_74](start_span)[span_74](end_span). Đọc *shù qián là sai phát âm, phải đọc là shǔ qián[span_75](start_span)[span_75](end_span).",
              wrong: "他在桌子旁边认真地数（shù）钱。",
              right: "他在桌子旁边认真地数（shǔ）钱。",
              tip: "Hành động đếm -> thanh ba shǔ[span_76](start_span)[span_76](end_span)[span_77](start_span)[span_77](end_span). Con số, môn toán -> thanh bốn shù[span_78](start_span)[span_78](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy chữ đa âm giữa hành động đếm và con số toán học[span_79](start_span)[span_79](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Khi làm động từ đếm tiền, chữ này bắt buộc đọc thanh ba[span_80](start_span)[span_80](end_span)[span_81](start_span)[span_81](end_span):", pause: 200 },
                { lang: "zh-CN", text: "数钱", pause: 600 },
                { lang: "vi-VN", text: "Không được đọc thành thanh bốn của danh từ con số[span_82](start_span)[span_82](end_span). Cặp đối chiếu chuẩn là:", pause: 300 },
                { lang: "zh-CN", text: "数数字", pause: 800 },
                { lang: "vi-VN", text: "nghĩa là đếm các con số[span_83](start_span)[span_83](end_span).", pause: 300 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu sh uốn cong đầu lưỡi lên ngạc cứng[span_84](start_span)[span_84](end_span). Động từ đếm đọc thanh ba trầm (shǔ)[span_85](start_span)[span_85](end_span)[span_86](start_span)[span_86](end_span); danh từ con số đọc thanh bốn dứt khoát (shù)[span_87](start_span)[span_87](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phân biệt hai âm đọc của chữ[span_88](start_span)[span_88](end_span). Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "数", pause: 1200 },
                { lang: "zh-CN", text: "数一数", pause: 1500 },
                { lang: "zh-CN", text: "数学", pause: 1800 }
              ]
            },
            write: {
              desc: "Bên trái là chữ Lâu (娄) gồm bộ Mễ (米) ở trên và bộ Nữ (女) ở dưới; bên phải là bộ Phác (攵 - gõ khẽ, đánh nhịp đếm)[span_89](start_span)[span_89](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Bên trái có gạo và người phụ nữ, bên phải là bộ phác chỉ hành động gõ nhịp kiểm đếm[span_90](start_span)[span_90](end_span).", pause: 400 }
              ]
            },
            summary: "数: động từ đếm (shǔ: 数数, 数钱)[span_91](start_span)[span_91](end_span)[span_92](start_span)[span_92](end_span); danh từ con số, môn toán (shù: 数字, 数学)[span_93](start_span)[span_93](end_span). Chú ý chuẩn xác thanh điệu theo từ loại[span_94](start_span)[span_94](end_span)."
          },
          // ------------------------------------------------------------
          // TỪ SỐ 23: 下 (xià)
          // ------------------------------------------------------------
          {
            id: "word-23-xia",
            index: 23,
            sourceIndex: 23,
            hanzi: "下",
            pinyin: "xià",
            coreMeaning: "cái, lần, một chút (động lượng từ); xuống, dưới[span_0](start_span)[span_0](end_span)",
            pos: "Động lượng từ / Động từ / Danh từ phương vị",
            topic: "Động lượng, Thời lượng & Phương vị",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi ba:", pause: 200 },
              { lang: "zh-CN", text: "下", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: cái, lần, một chút khi làm động lượng từ; hoặc xuống, dưới khi chỉ vị trí và hành động[span_1](start_span)[span_1](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng sau động từ để biểu thị hành động diễn ra trong thời gian rất ngắn, làm thử một chút, hoặc làm mềm ngữ khí câu cầu khiến; ngoài ra còn dùng đếm số lần tác động (gõ vài cái) hoặc chỉ hướng đi xuống[span_2](start_span)[span_2](end_span)[span_3](start_span)[span_3](end_span).",
              detail: "Khi làm động lượng từ, từ này thường đi với số từ 一 thành 一下 đứng ngay sau động từ (等一下, 看一下), mang sắc thái thư thái, nhanh chóng[span_4](start_span)[span_4](end_span). Khi làm động từ, nó chỉ sự di chuyển từ trên xuống dưới hoặc bước xuống khỏi xe cộ (下车, 下楼)[span_5](start_span)[span_5](end_span). Khi làm danh từ phương vị, nó chỉ vị trí ở phía dưới (底下, 桌子下)[span_6](start_span)[span_6](end_span).",
              keyPoint: "Là động lượng từ: đứng SAU động từ để bổ nghĩa cho hành động; tuyệt đối không đứng trước danh từ để chỉ lượng đồ vật[span_7](start_span)[span_7](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "下", pause: 400 },
                { lang: "vi-VN", text: "khi làm động lượng từ đứng ngay sau động từ, mang nghĩa làm một chút, thử làm hoặc làm dịu ngữ khí câu nói[span_8](start_span)[span_8](end_span)[span_9](start_span)[span_9](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Làm một chút / Thử làm (Làm động lượng từ)",
                pattern: "Động từ + (一)下",
                note: "Đứng sau động từ để làm câu nói trở nên nhẹ nhàng, lịch sự hơn rất nhiều[span_10](start_span)[span_10](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Đứng sau động từ biểu thị làm một chút[span_11](start_span)[span_11](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "等一下", pause: 600 },
                  { lang: "vi-VN", text: "đợi một chút[span_12](start_span)[span_12](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "看一下", pause: 600 },
                  { lang: "vi-VN", text: "xem qua một chút[span_13](start_span)[span_13](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "介绍一下", pause: 700 },
                  { lang: "vi-VN", text: "giới thiệu đôi chút[span_14](start_span)[span_14](end_span).", pause: 300 }
                ]
              },
              {
                title: "Đếm số lần tác động cụ thể",
                pattern: "Động từ + (Số từ) + 下",
                note: "Đếm số lần gõ cửa, đập bóng, vỗ vai[span_15](start_span)[span_15](end_span)[span_16](start_span)[span_16](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Đếm số cái, số lần gõ[span_17](start_span)[span_17](end_span)[span_18](start_span)[span_18](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "敲了三下门", pause: 800 },
                  { lang: "vi-VN", text: "gõ cửa ba tiếng[span_19](start_span)[span_19](end_span)[span_20](start_span)[span_20](end_span).", pause: 300 }
                ]
              },
              {
                title: "Bước xuống / Rơi xuống (Dùng làm động từ)",
                pattern: "下 + Xe / Lầu / Mưa / Tuyết",
                note: "Chỉ chuyển động từ trên cao xuống thấp hoặc thời tiết rơi hạt[span_21](start_span)[span_21](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Động từ chuyển động đi xuống[span_22](start_span)[span_22](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "下车", pause: 600 },
                  { lang: "vi-VN", text: "xuống xe[span_23](start_span)[span_23](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "下雨", pause: 600 },
                  { lang: "vi-VN", text: "trời mưa[span_24](start_span)[span_24](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "请大家在门外稍微等一下，会议马上就开始。",
                vi: "Xin mọi người đứng đợi ở ngoài cửa một lát, cuộc họp sẽ bắt đầu ngay bây giờ[span_25](start_span)[span_25](end_span).",
                pause: 1500
              },
              {
                zh: "这本词典很实用，你可以翻开看一下。",
                vi: "Cuốn từ điển này rất hữu ích, bạn có thể giở ra xem qua một chút[span_26](start_span)[span_26](end_span).",
                pause: 1500
              },
              {
                zh: "刚才有人在外面敲了几下门，你去看看是谁吧。",
                vi: "Vừa nãy có ai đó ở bên ngoài gõ cửa mấy tiếng, bạn ra xem là ai đi[span_27](start_span)[span_27](end_span)[span_28](start_span)[span_28](end_span).",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa động lượng từ 一下 (bổ nghĩa cho động từ) và danh lượng từ 一点儿 (bổ nghĩa cho danh từ)",
              situation: "Người học tiếng Việt hay dùng chữ 'một chút / một tí' cho cả hai trường hợp nên đặt sai vị trí nghiêm trọng[span_29](start_span)[span_29](end_span).",
              explanation: "一下 là ĐỘNG LƯỢNG TỪ: chuyên đứng sau động từ để chỉ thời gian ngắn, làm thử hành động (等一下, 听一下), tuyệt đối không đứng trước danh từ[span_30](start_span)[span_30](end_span). 一点儿 là BỔ NGỮ/LƯỢNG TỪ SỐ LƯỢNG: đứng trước danh từ để chỉ số lượng ít (吃一点儿米饭, 喝一点儿水), hoặc đứng sau tính từ (大一点儿 - to hơn một chút)[span_31](start_span)[span_31](end_span). Nói *看一点儿词典 hoặc *吃一下饭 đều là câu sai ngữ pháp[span_32](start_span)[span_32](end_span).",
              wrong: "你等我一点儿，我马上就来。",
              right: "你等我一下，我马上就来。",
              tip: "Bổ nghĩa cho động tác làm một lát -> dùng 一下 đặt sau động từ[span_33](start_span)[span_33](end_span). Bổ nghĩa cho số lượng đồ ăn, nước uống ít ỏi -> dùng 一点儿 đặt trước danh từ[span_34](start_span)[span_34](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy phân biệt giữa làm một chút thời gian và số lượng một chút đồ vật[span_35](start_span)[span_35](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Đây là câu sai vị trí ngữ pháp rất hay gặp[span_36](start_span)[span_36](end_span):", pause: 200 },
                { lang: "zh-CN", text: "你等我一点儿。", pause: 600 },
                { lang: "vi-VN", text: "Khi yêu cầu đợi một lát thời gian, ta phải dùng động lượng từ đặt sau động từ[span_37](start_span)[span_37](end_span). Câu sửa chuẩn là:", pause: 300 },
                { lang: "zh-CN", text: "你等我一下。", pause: 800 },
                { lang: "vi-VN", text: "Còn từ biểu thị số lượng ít chỉ dùng trước danh từ như ăn một chút cơm mà thôi[span_38](start_span)[span_38](end_span).", pause: 300 }
              ]
            },
            pron: {
              guide: "Phát âm âm đầu x (mặt lưỡi nâng sát ngạc cứng), kết hợp vận mẫu ia, đọc thanh bốn dứt khoát từ trên xuống (xià)[span_39](start_span)[span_39](end_span). Khi nằm trong cụm 一下, chữ 一 biến điệu đọc thanh hai (yíxià)[span_40](start_span)[span_40](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm dứt khoát thanh bốn và chú ý biến điệu khi ghép từ[span_41](start_span)[span_41](end_span). Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "下", pause: 1500 },
                { lang: "zh-CN", text: "一下", pause: 1500 },
                { lang: "zh-CN", text: "等一下", pause: 1800 }
              ]
            },
            write: {
              desc: "Gồm một nét ngang dài biểu thị mặt đất, một nét sổ ngắn chỉ hướng đi xuống và một nét chấm/phẩy nằm phía dưới nét ngang[span_42](start_span)[span_42](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Nét ngang tượng trưng cho mặt đất, nét sổ và nét chấm định vị ở bên dưới mặt đất[span_43](start_span)[span_43](end_span).", pause: 400 }
              ]
            },
            summary: "下: động lượng từ cái, tiếng, lần, làm một chút (等一下, 敲两下)[span_44](start_span)[span_44](end_span)[span_45](start_span)[span_45](end_span); động từ đi xuống (下车, 下雨)[span_46](start_span)[span_46](end_span). Phân biệt với 一点儿 ở chỗ 一下 bổ nghĩa cho động tác chứ không đứng trước danh từ[span_47](start_span)[span_47](end_span)."
          },

          // ------------------------------------------------------------
          // TỪ SỐ 24: 啊 (a)
          // ------------------------------------------------------------
          {
            id: "word-24-a",
            index: 24,
            sourceIndex: 20,
            hanzi: "啊",
            pinyin: "a",
            coreMeaning: "à, a, nhé, hả (trợ từ ngữ khí cuối câu)[span_48](start_span)[span_48](end_span)",
            pos: "Trợ từ ngữ khí / Thán từ",
            topic: "Ngữ khí giao tiếp & Cảm thán",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi tư:", pause: 200 },
              { lang: "zh-CN", text: "啊", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: à, a, nhé, hả, dùng làm trợ từ ngữ khí cuối câu hoặc thán từ cảm thán[span_49](start_span)[span_49](end_span).", pause: 400 }
            ],
            meaning: {
              situation: "Dùng ở cuối câu để tăng cường cảm xúc cảm thán, làm dịu lời dặn dò khuyên nhủ, giục giã thân mật, hoặc dùng ở đầu câu để thốt lên sự kinh ngạc, vỡ lẽ[span_50](start_span)[span_50](end_span)[span_51](start_span)[span_51](end_span).",
              detail: "Khi đứng ở cuối câu, 啊 là trợ từ ngữ khí đọc thanh nhẹ, giúp câu nói mang sắc thái tình cảm ấm áp, tự nhiên, không bị cứng nhắc[span_52](start_span)[span_52](end_span)[span_53](start_span)[span_53](end_span). Tùy vào ngữ điệu của người nói mà nó có thể biểu đạt sự khen ngợi, lời nhắc nhở nhẹ nhàng hoặc sự đồng ý khẳng định[span_54](start_span)[span_54](end_span).",
              keyPoint: "Trong khẩu ngữ thực tế, 啊 đứng sau các nguyên âm khác nhau sẽ bị đồng hóa biến âm nhẹ (như biến thành ya, wa, na) nhưng chữ Hán vẫn có thể giữ nguyên 啊[span_55](start_span)[span_55](end_span).",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "啊", pause: 400 },
                { lang: "vi-VN", text: "là trợ từ ngữ khí cực kỳ giàu cảm xúc[span_56](start_span)[span_56](end_span)[span_57](start_span)[span_57](end_span). Đặt ở cuối câu giúp câu cảm thán thêm sinh động và lời dặn dò trở nên thân thiết, mềm mại[span_58](start_span)[span_58](end_span).", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Cảm thán khen ngợi cuối câu",
                pattern: "Tính từ / 太 + Tính từ + 了 + 啊！",
                note: "Bộc lộ cảm xúc khen ngợi tha thiết, trầm trồ[span_59](start_span)[span_59](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc một: Cảm thán khen ngợi cuối câu[span_60](start_span)[span_60](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "这里的风景真美啊！", pause: 900 },
                  { lang: "vi-VN", text: "Phong cảnh nơi đây đẹp thật đấy à[span_61](start_span)[span_61](end_span)!", pause: 400 }
                ]
              },
              {
                title: "Dặn dò, nhắc nhở thân mật / Giục giã",
                pattern: "Động từ + (Tân ngữ) + 啊！",
                note: "Làm mềm câu mệnh lệnh, thể hiện sự quan tâm thân thiết[span_62](start_span)[span_62](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc hai: Dặn dò thân mật hoặc khuyên nhủ[span_63](start_span)[span_63](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "你要认真写作业啊！", pause: 800 },
                  { lang: "vi-VN", text: "Con phải chăm chỉ làm bài tập đấy nhé[span_64](start_span)[span_64](end_span)!", pause: 300 }
                ]
              },
              {
                title: "Đồng ý, khẳng định chắc chắn",
                pattern: "是啊 / 对啊 / 好啊",
                note: "Cách đồng tình rất tự nhiên trong hội thoại hàng ngày[span_65](start_span)[span_65](end_span).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc ba: Khẳng định đồng tình[span_66](start_span)[span_66](end_span):", pause: 250 },
                  { lang: "zh-CN", text: "是啊", pause: 600 },
                  { lang: "vi-VN", text: "đúng thế đấy[span_67](start_span)[span_67](end_span);", pause: 200 },
                  { lang: "zh-CN", text: "好啊", pause: 600 },
                  { lang: "vi-VN", text: "được thôi, nhất trí[span_68](start_span)[span_68](end_span).", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "今天的天气真舒服啊，我们一起出去走走吧！",
                vi: "Thời tiết hôm nay thật là dễ chịu quá đi, chúng mình cùng nhau ra ngoài đi dạo đi[span_69](start_span)[span_69](end_span)!",
                pause: 1500
              },
              {
                zh: "路上车多，你一个人骑自行车要多小心啊！",
                vi: "Trên đường xe cộ đông đúc, bạn một mình đi xe đạp phải hết sức cẩn thận đấy nhé[span_70](start_span)[span_70](end_span)!",
                pause: 1500
              },
              {
                zh: "A: 我们明天一起去图书馆借书好吗？ B: 好啊，没问题！",
                vi: "A: Ngày mai chúng mình cùng đến thư viện mượn sách được không? B: Được chứ, không thành vấn đề[span_71](start_span)[span_71](end_span)!",
                pause: 1500
              }
            ],
            trap: {
              name: "Nhầm lẫn giữa trợ từ ngữ khí 啊 ở cuối câu và thán từ 啊 ở đầu câu; biến âm khẩu ngữ",
              situation: "Người học tiếng Trung hay đọc 啊 ở đuôi câu rất to và giật cục như đang hét, khiến câu nói nghe thô lỗ thay vì thân thiện[span_72](start_span)[span_72](end_span).",
              explanation: "Khi đứng ở CUỐI CÂU, 啊 là trợ từ ngữ khí đọc THANH NHẸ (ngắn, khẽ, lướt theo âm đuôi của từ phía trước)[span_73](start_span)[span_73](end_span). Chỉ khi đứng ở ĐẦU CÂU làm thán từ độc lập (À! Hóa ra là bạn!), nó mới đọc có thanh điệu rõ ràng để biểu lộ ngạc nhiên hay vỡ lẽ[span_74](start_span)[span_74](end_span).",
              wrong: "你快点儿来啊（Đọc giật thanh bốn như quát tháo）！",
              right: "你快点儿来啊（Đọc thanh nhẹ lướt êm ái, kéo dài nhẹ giọng giục giã thân mật）。",
              tip: "Đứng cuối câu -> đọc lướt thanh nhẹ, ngữ điệu tình cảm, làm mềm lời nói[span_75](start_span)[span_75](end_span).",
              audio: [
                { lang: "vi-VN", text: "Bẫy ngữ khí và cách đọc trợ từ cuối câu[span_76](start_span)[span_76](end_span):", pause: 200 },
                { lang: "vi-VN", text: "Trợ từ này ở cuối câu phải đọc nhẹ nhàng để thể hiện tình cảm thân thiện[span_77](start_span)[span_77](end_span):", pause: 200 },
                { lang: "zh-CN", text: "好啊！", pause: 600 },
                { lang: "vi-VN", text: "Không được đọc nhấn mạnh gắt gỏng làm biến dạng ngữ khí giao tiếp[span_78](start_span)[span_78](end_span).", pause: 300 }
              ]
            },
            pron: {
              guide: "Khi làm trợ từ ngữ khí ở cuối câu, đọc thanh nhẹ (a), hạ giọng êm và lướt tự nhiên theo âm tiết đứng trước[span_79](start_span)[span_79](end_span).",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm thanh nhẹ êm ái cuối câu[span_80](start_span)[span_80](end_span). Nghe và nhắc lại:", pause: 300 },
                { lang: "zh-CN", text: "啊", pause: 1200 },
                { lang: "zh-CN", text: "好啊", pause: 1500 },
                { lang: "zh-CN", text: "真好啊", pause: 1800 }
              ]
            },
            write: {
              desc: "Bên trái là bộ Khẩu (口) biểu thị âm thanh phát ra; bên phải là chữ A (阿) gồm bộ Phụ (阝) và chữ Khả (可) tạo âm đọc[span_81](start_span)[span_81](end_span).",
              audio: [
                { lang: "vi-VN", text: "Quan sát mặt chữ: Bên trái có bộ khẩu mở ra phát ra ngữ khí, bên phải là chữ a[span_82](start_span)[span_82](end_span).", pause: 400 }
              ]
            },
            summary: "啊: trợ từ ngữ khí cuối câu (đọc thanh nhẹ a) dùng cảm thán (真美啊), khuyên nhủ dặn dò (小心啊), đồng tình (好啊, 是啊)[span_83](start_span)[span_83](end_span)[span_84](start_span)[span_84](end_span)."
          }
        ], // Kết thúc mảng words của Nhóm 4
        // ============================================================
        // BÀI TẬP NHÓM 4: BA LOẠI TOÀN DIỆN (8 CÂU)
        // ============================================================
        exercises: [
          // A. Nhớ chủ động & dùng từ đích danh (Câu 1, 2)
          {
            id: "g4-ex-1",
            type: "Phân biệt từ loại & âm đọc của chữ đa âm 数",
            prompt: "Chọn âm đọc Pinyin và từ loại chuẩn xác nhất của chữ 数 trong câu sau: 请大家认真____一下桌子上有多少本词典。",
            options: [
              "A. shǔ (Động từ: đếm)",
              "B. shù (Danh từ: con số)",
              "C. shù (Động từ: đếm)",
              "D. shǔ (Danh từ: con số)"
            ],
            correct: 0,
            questionAudio: [
              { lang: "vi-VN", text: "Câu một: Chọn âm đọc và từ loại đúng của chữ trong câu sau:", pause: 300 },
              { lang: "zh-CN", text: "请大家认真一下桌子上有多少本词典。", pause: 600 }
            ],
            reasonRight: "Khi là động từ mang nghĩa kiểm đếm số lượng cụ thể, chữ này bắt buộc đọc thanh ba: shǔ (数一数: đếm thử)[span_0](start_span)[span_0](end_span)[span_1](start_span)[span_1](end_span).",
            reasonWrong: "shù (thanh bốn) là danh từ chỉ con số (数字) hoặc toán học (数学), không làm vị ngữ đếm đồ vật[span_2](start_span)[span_2](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là A[span_3](start_span)[span_3](end_span).", pause: 200 },
              { lang: "zh-CN", text: "数一下", pause: 400 },
              { lang: "vi-VN", text: "Hành động đếm đồ vật đọc thanh ba, từ loại là động từ[span_4](start_span)[span_4](end_span)[span_5](start_span)[span_5](end_span).", pause: 300 }
            ]
          },
          {
            id: "g4-ex-2",
            type: "Phân biệt động lượng từ 一下 và danh lượng từ 一点儿",
            prompt: "Điền từ thích hợp vào chỗ trống: 请你在门外稍等____，老师马上就出来。",
            options: [
              "A. 一点儿",
              "B. 一下",
              "C. 一站",
              "D. 一回"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu hai: Điền từ thích hợp vào câu sau:", pause: 300 },
              { lang: "zh-CN", text: "请你在门外稍等，老师马上就出来。", pause: 600 }
            ],
            reasonRight: "一下 là động lượng từ, đứng sau động từ (等一下) biểu thị thời gian ngắn, làm nhẹ ngữ khí câu cầu khiến[span_6](start_span)[span_6](end_span)[span_7](start_span)[span_7](end_span).",
            reasonWrong: "一点儿 đứng trước danh từ chỉ số lượng ít (喝一点儿水) hoặc sau tính từ, không đứng sau động từ mang nghĩa chờ một lát[span_8](start_span)[span_8](end_span); 一站 đếm trạm xe; 一回 là lượng từ đếm lượt sự việc[span_9](start_span)[span_9](end_span)[span_10](start_span)[span_10](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_11](start_span)[span_11](end_span).", pause: 200 },
              { lang: "zh-CN", text: "等一下", pause: 400 },
              { lang: "vi-VN", text: "Động lượng từ đứng sau động từ để biểu thị làm một chút thời gian[span_12](start_span)[span_12](end_span).", pause: 300 }
            ]
          },

          // B. Vị trí, kết hợp & bẫy ngữ pháp (Câu 3, 4, 5, 6)
          {
            id: "g4-ex-3",
            type: "Phân biệt 参加 (tham gia thi đấu) và 去看/去听 (khán giả đi xem)",
            prompt: "Câu nào dưới đây diễn đạt tự nhiên nhất ý: 'Cuối tuần tôi mua vé đi xem buổi hòa nhạc của ca sĩ yêu thích'?",
            options: [
              "A. 周末我买票去参加音乐会。",
              "B. 周末我买票去听音乐会。",
              "C. 周末我买票去数音乐会。",
              "D. 周末我买票去站音乐会。"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu ba: Chọn câu diễn đạt tự nhiên khi đi thưởng thức âm nhạc với tư cách khán giả[span_13](start_span)[span_13](end_span).", pause: 400 }
            ],
            reasonRight: "Với buổi hòa nhạc hoặc trận đấu thể thao mà mình chỉ là khán giả thưởng thức, dùng 去听 (đi nghe) hoặc 去看 (đi xem)[span_14](start_span)[span_14](end_span).",
            reasonWrong: "参加 nhấn mạnh vào việc đích thân là nghệ sĩ biểu diễn hoặc vận động viên trực tiếp thi đấu[span_15](start_span)[span_15](end_span)[span_16](start_span)[span_16](end_span); 数 là đếm; 站 là đứng[span_17](start_span)[span_17](end_span)[span_18](start_span)[span_18](end_span)[span_19](start_span)[span_19](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_20](start_span)[span_20](end_span).", pause: 200 },
              { lang: "zh-CN", text: "去听音乐会", pause: 400 },
              { lang: "vi-VN", text: "Khán giả mua vé đến thưởng thức dùng động từ nghe hoặc xem, không dùng từ tham gia[span_21](start_span)[span_21](end_span).", pause: 300 }
            ]
          },
          {
            id: "g4-ex-4",
            type: "Bẫy 回家 vs 去家",
            prompt: "Chọn câu có cấu trúc ngữ pháp chuẩn xác nhất khi nói về việc trở về nhà:",
            options: [
              "A. 下课以后我想去家做饭。",
              "B. 下课以后我想去回家做饭。",
              "C. 下课以后我想回家做饭。",
              "D. 下课以后我想回在家做饭。"
            ],
            correct: 2,
            questionAudio: [
              { lang: "vi-VN", text: "Câu bốn: Chọn câu đúng ngữ pháp diễn đạt việc trở về nhà sau giờ tan học[span_22](start_span)[span_22](end_span).", pause: 400 }
            ],
            reasonRight: "Trở về nơi chốn thân thuộc thuộc về mình dùng động từ hồi quy: 回 + Nơi chốn (回家)[span_23](start_span)[span_23](end_span)[span_24](start_span)[span_24](end_span).",
            reasonWrong: "Không bao giờ dùng 去家 hoặc 去回家 do dịch máy móc từng chữ từ tiếng Việt[span_25](start_span)[span_25](end_span); D sai vì thừa giới từ 在[span_26](start_span)[span_26](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là C[span_27](start_span)[span_27](end_span).", pause: 200 },
              { lang: "zh-CN", text: "回家做饭", pause: 400 },
              { lang: "vi-VN", text: "Về nhà luôn dùng động từ hồi gia, tuyệt đối không dùng động từ khứ gia[span_28](start_span)[span_28](end_span).", pause: 300 }
            ]
          },
          {
            id: "g4-ex-5",
            type: "Vị trí giới từ chỉ nơi chốn với động từ 站",
            prompt: "Chọn câu đúng ngữ pháp khi nói 'Anh ấy đứng ở cổng trường đợi bạn':",
            options: [
              "A. 他一个人站学校门口等朋友。",
              "B. 他一个人站在学校门口等朋友。",
              "C. 他一个人到学校门口站等朋友。",
              "D. 他一个人给学校门口站着等朋友。"
            ],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu năm: Chọn câu đúng ngữ pháp về điểm tiếp đất khi đứng đợi người khác[span_29](start_span)[span_29](end_span).", pause: 400 }
            ],
            reasonRight: "Động từ 站 khi mang điểm tiếp xúc nơi chốn bắt buộc có bổ ngữ chỉ vị trí: 站在 + Nơi chốn[span_30](start_span)[span_30](end_span).",
            reasonWrong: "A sai vì bỏ rơi giới từ 在; C và D dùng sai giới từ 到 và 给 trong kết cấu vị ngữ[span_31](start_span)[span_31](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_32](start_span)[span_32](end_span).", pause: 200 },
              { lang: "zh-CN", text: "站在学校门口", pause: 400 },
              { lang: "vi-VN", text: "Đứng ở đâu phải có kết cấu trạm tại đi liền với nơi chốn[span_33](start_span)[span_33](end_span).", pause: 300 }
            ]
          },
          {
            id: "g4-ex-6",
            type: "Ngữ khí trợ từ 啊 cuối câu",
            prompt: "Chọn câu sử dụng trợ từ ngữ khí cuối câu tự nhiên và phù hợp nhất để dặn dò thân mật:",
            options: [
              "A. 路上车很多，你骑自行车一定要小心啊！",
              "B. 路上车很多，你骑自行车一定要小心回！",
              "C. 路上车很多，你骑自行车一定要小心下！",
              "D. 路上车很多，你骑自行车一定要小心站！"
            ],
            correct: 0,
            questionAudio: [
              { lang: "vi-VN", text: "Câu sáu: Chọn trợ từ ngữ khí tự nhiên dùng để dặn dò khuyên nhủ cuối câu[span_34](start_span)[span_34](end_span).", pause: 400 }
            ],
            reasonRight: "Trợ từ ngữ khí 啊 đứng cuối câu dặn dò (小心啊: cẩn thận đấy nhé!) tạo sắc thái tình cảm thân mật, ấm áp[span_35](start_span)[span_35](end_span)[span_36](start_span)[span_36](end_span).",
            reasonWrong: "回, 下, 站 không phải là trợ từ ngữ khí đặt ở cuối câu để dặn dò[span_37](start_span)[span_37](end_span)[span_38](start_span)[span_38](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là A[span_39](start_span)[span_39](end_span).", pause: 200 },
              { lang: "zh-CN", text: "小心啊", pause: 400 },
              { lang: "vi-VN", text: "Trợ từ ngữ khí a đọc thanh nhẹ làm dịu câu nói và thể hiện sự quan tâm[span_40](start_span)[span_40](end_span).", pause: 300 }
            ]
          },

          // C. Luyện nghe hiểu (Câu 7, 8)
          {
            id: "g4-ex-7",
            type: "Nghe hiểu bắt địa điểm & hoạt động",
            isListening: true,
            prompt: "Nghe đoạn ghi âm và trả lời câu hỏi: Mọi người hẹn tập trung ở đâu vào sáng mai?",
            options: [
              "A. Trước cổng trường đại học",
              "B. Trước cửa nhà ga xe lửa",
              "C. Ở trạm dừng xe buýt",
              "D. Ở phòng thi đấu thể thao"
            ],
            correct: 1,
            transcript: "明天早上八点我们在火车站门口集合，一起坐车去参加汉语比赛，大家千万别迟到啊！",
            questionAudio: [
              { lang: "vi-VN", text: "Câu bảy: Hãy lắng nghe đoạn thông báo sau[span_41](start_span)[span_41](end_span):", pause: 300 },
              { lang: "zh-CN", text: "明天早上八点我们在火车站门口集合，一起坐车去参加汉语比赛，大家千万别迟到啊！", pause: 800 },
              { lang: "vi-VN", text: "Câu hỏi: Mọi người hẹn nhau tập trung ở địa điểm nào vào sáng mai[span_42](start_span)[span_42](end_span)?", pause: 400 }
            ],
            reasonRight: "Trong bài nghe nêu rõ: 在火车站门口集合 (tập trung ở cổng ga tàu lửa)[span_43](start_span)[span_43](end_span).",
            reasonWrong: "Các địa điểm A, C, D không khớp với câu nói trong đoạn ghi âm[span_44](start_span)[span_44](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B[span_45](start_span)[span_45](end_span). Đoạn ghi âm nêu rõ:", pause: 200 },
              { lang: "zh-CN", text: "在火车站门口集合", pause: 400 },
              { lang: "vi-VN", text: "tức là tập hợp ở cổng ga tàu hỏa[span_46](start_span)[span_46](end_span).", pause: 300 }
            ]
          },
          {
            id: "g4-ex-8",
            type: "Nghe hiểu đếm số trạm xe & động lượng từ",
            isListening: true,
            prompt: "Nghe đoạn hội thoại và cho biết người nói đã phải đứng suốt bao nhiêu trạm xe?",
            options: [
              "A. Hai trạm",
              "B. Ba trạm",
              "C. Bốn trạm",
              "D. Năm trạm"
            ],
            correct: 2,
            transcript: "车上没有空座位了，我已经站着坐了四站。你快坐下休息一下吧。",
            questionAudio: [
              { lang: "vi-VN", text: "Câu tám: Lắng nghe đoạn đối thoại trên xe công cộng[span_47](start_span)[span_47](end_span):", pause: 300 },
              { lang: "zh-CN", text: "车上没有空座位了，我已经站着坐了四站。你快坐下休息一下吧。", pause: 800 },
              { lang: "vi-VN", text: "Câu hỏi: Người nói đã phải đứng suốt mấy trạm xe[span_48](start_span)[span_48](end_span)?", pause: 400 }
            ],
            reasonRight: "Nội dung nghe khẳng định rõ: 我已经站着坐了四站 (tôi đã phải đứng suốt bốn trạm xe rồi)[span_49](start_span)[span_49](end_span).",
            reasonWrong: "A, B, D sai lệch về con số được nghe trong bài[span_50](start_span)[span_50](end_span).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là C[span_51](start_span)[span_51](end_span). Số trạm dừng được nhắc tới là:", pause: 200 },
              { lang: "zh-CN", text: "四站", pause: 400 },
              { lang: "vi-VN", text: "nghĩa là đã phải đứng suốt bốn trạm xe[span_52](start_span)[span_52](end_span).", pause: 300 }
            ]
          }
        ],

        // ============================================================
        // TỰ DÙNG TỪ & PHẢN HỒI (2 TÌNH HUỐNG 3 TẦNG)
        // ============================================================
        selfUse: {
          id: "g4-self-1",
          situation: "Bạn muốn rủ một người bạn cuối tuần cùng đi tham gia một cuộc thi tiếng Trung ở trường. Hãy dặn bạn ấy nhớ chuẩn bị chu đáo và đừng đến muộn nhé[span_53](start_span)[span_53](end_span)!",
          hint1: "Vận dụng động từ tham gia cuộc thi, động từ quay về chuẩn bị và trợ từ ngữ khí nhé/à ở cuối câu[span_54](start_span)[span_54](end_span)[span_55](start_span)[span_55](end_span).",
          hint2: "Khung câu gợi ý: 这个周末学校有... / 你想参加吗？ / 回家准备... / 别迟到啊[span_56](start_span)[span_56](end_span)[span_57](start_span)[span_57](end_span)！",
          modelAnswer: "这个周末学校有一个汉语比赛，你想跟我一起参加吗？回去要好好准备，千万别迟到啊！",
          modelExplain: "Câu này kết hợp hoàn hảo động từ 参加比赛, bổ ngữ xu hướng 回去 và trợ từ ngữ khí 啊 làm dịu lời dặn dò thân mật[span_58](start_span)[span_58](end_span)[span_59](start_span)[span_59](end_span).",
          modelAudio: [
            { lang: "vi-VN", text: "Tình huống một: Rủ bạn đi dự thi và dặn dò thân mật. Lắng nghe câu mẫu[span_60](start_span)[span_60](end_span):", pause: 300 },
            { lang: "zh-CN", text: "这个周末学校有一个汉语比赛，你想跟我一起参加吗？回去要好好准备，千万别迟到啊！", pause: 2000 }
          ]
        },
        additionalSelfUse: {
          id: "g4-self-2",
          situation: "Bạn và đồng nghiệp cùng đi xe buýt nhưng trên xe hết chỗ ngồi. Hãy bảo bạn mình cùng đứng đợi một lát, chỉ cần đi thêm ba trạm nữa là tới ga tàu hỏa rồi[span_61](start_span)[span_61](end_span).",
          hint1: "Vận dụng động từ đứng ở tư thế duy trì, động lượng từ làm một lát (đợi một chút), lượng từ đếm trạm xe và danh từ ga tàu hỏa[span_62](start_span)[span_62](end_span)[span_63](start_span)[span_63](end_span).",
          hint2: "Khung câu gợi ý: 车上没有座位了... / 站着等一下... / 再坐三站就到火车站了[span_64](start_span)[span_64](end_span)[span_65](start_span)[span_65](end_span)...",
          modelAnswer: "车上没有空座位了，我们先站着等一下吧。再坐三站就到火车站了。",
          modelExplain: "Câu này vận dụng cực kỳ tự nhiên 站着 biểu thị trạng thái đứng, 等一下 dùng động lượng từ chỉ thời gian ngắn, 坐三站 dùng 站 làm lượng từ đếm trạm, và danh từ 火车站[span_66](start_span)[span_66](end_span)[span_67](start_span)[span_67](end_span).",
          modelAudio: [
            { lang: "vi-VN", text: "Tình huống hai: Nói chuyện trên xe buýt khi hết chỗ. Lắng nghe câu mẫu[span_68](start_span)[span_68](end_span):", pause: 300 },
            { lang: "zh-CN", text: "车上没有空座位了，我们先站着等一下吧。再坐三站就到火车站了。", pause: 2000 }
          ]
        },

        // ============================================================
        // ÔN TẬP CÁCH QUÃNG NGÀY 1, 3, 7 (TOÀN BỘ 6 TỪ NHÓM 4)
        // ============================================================
        reviews: [
          // Ngày 1: Nhớ nghĩa cốt lõi & Cấu trúc cơ bản
          {
            day: 1,
            type: "Nhớ nghĩa & Tạo câu cơ bản",
            q: "Hãy nói câu sau sang tiếng Trung: 'Mời mọi người đứng dậy, chúng ta cùng nhau đếm từ một đến mười[span_69](start_span)'[span_69](end_span).",
            answer: "请大家站起来，我们一起从一数到十。",
            explain: "站起来 là bổ ngữ xu hướng đứng dậy; 数 ở đây là động từ đếm (đọc là shǔ)[span_70](start_span)[span_70](end_span)[span_71](start_span)[span_71](end_span)[span_72](start_span)[span_72](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày một: Đứng dậy và tập đếm. Đáp án chuẩn[span_73](start_span)[span_73](end_span):", pause: 300 },
              { lang: "zh-CN", text: "请大家站起来，我们一起从一数到十。", pause: 1400 }
            ]
          },
          {
            day: 1,
            type: "Nhớ nghĩa & Tạo câu cơ bản",
            q: "Dịch câu sau: 'Thời gian không còn sớm nữa, chúng mình mau về nhà thôi[span_74](start_span)'[span_74](end_span)!",
            answer: "时间不早了，我们快回家吧！",
            explain: "Về nhà bắt buộc dùng 回家, không bao giờ dùng 去家[span_75](start_span)[span_75](end_span)[span_76](start_span)[span_76](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày một: Mau về nhà thôi. Đáp án chuẩn[span_77](start_span)[span_77](end_span):", pause: 300 },
              { lang: "zh-CN", text: "时间不早了，我们快回家吧！", pause: 1200 }
            ]
          },

          // Ngày 3: Bẫy ngữ pháp & Vị trí kết hợp
          {
            day: 3,
            type: "Bẫy kết hợp & Vị trí",
            q: "Sửa lỗi sai ngữ pháp trong câu sau: 我在门外敲门了三下儿[span_78](start_span)[span_78](end_span)。",
            answer: "我在门外敲了三下门。",
            explain: "Động lượng từ 三下 phải đứng ngay sau động từ 敲 rồi mới đến tân ngữ danh từ 门 (Động từ + Động lượng từ + Tân ngữ)[span_79](start_span)[span_79](end_span)[span_80](start_span)[span_80](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày ba: Bẫy vị trí của động lượng từ. Câu sửa đúng là[span_81](start_span)[span_81](end_span):", pause: 300 },
              { lang: "zh-CN", text: "我在门外敲了三下门。", pause: 1200 }
            ]
          },
          {
            day: 3,
            type: "Bẫy kết hợp & Vị trí",
            q: "Chữ 数 trong 数学 (toán học) và trong 数钱 (đếm tiền) đọc thanh điệu khác nhau như thế nào[span_82](start_span)[span_82](end_span)[span_83](start_span)[span_83](end_span)?",
            answer: "Trong 数学 đọc thanh bốn (shù - danh từ), còn trong 数钱 đọc thanh ba (shǔ - động từ)[span_84](start_span)[span_84](end_span)[span_85](start_span)[span_85](end_span).",
            explain: "Bắt buộc phân biệt thanh điệu chuẩn theo từ loại của chữ đa âm này[span_86](start_span)[span_86](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày ba: Phân biệt thanh điệu chữ đa âm. Đếm tiền đọc thanh ba[span_87](start_span)[span_87](end_span)[span_88](start_span)[span_88](end_span):", pause: 300 },
              { lang: "zh-CN", text: "数钱", pause: 600 },
              { lang: "vi-VN", text: "Môn toán đọc thanh bốn dứt khoát[span_89](start_span)[span_89](end_span):", pause: 200 },
              { lang: "zh-CN", text: "数学", pause: 800 }
            ]
          },

          // Ngày 7: Phản xạ giao tiếp & Ứng dụng nâng cao
          {
            day: 7,
            type: "Vận dụng giao tiếp & Phản xạ",
            q: "Khi bạn đồng ý vui vẻ với lời đề nghị của bạn bè, câu cửa miệng ngắn gọn có dùng trợ từ 啊 là gì[span_90](start_span)[span_90](end_span)[span_91](start_span)[span_91](end_span)?",
            answer: "好啊！ / 对啊！ / 是啊！",
            explain: "Đặt 啊 ở cuối câu đồng tình tạo ngữ khí vui vẻ, nhiệt tình, đọc lướt thanh nhẹ[span_92](start_span)[span_92](end_span)[span_93](start_span)[span_93](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày bảy: Đồng ý vui vẻ. Đọc lướt thanh nhẹ[span_94](start_span)[span_94](end_span):", pause: 300 },
              { lang: "zh-CN", text: "好啊！", pause: 800 }
            ]
          },
          {
            day: 7,
            type: "Nghe hiểu & Ứng dụng tổng hợp",
            listenAudio: [
              { lang: "zh-CN", text: "等考试考完了，我们就一起坐车回国，去参加好朋友的婚礼啊！", pause: 1000 }
            ],
            q: "Nghe câu tiếng Trung và cho biết: Sau khi thi xong, họ dự định sẽ làm gì[span_95](start_span)[span_95](end_span)?",
            answer: "Cùng nhau đón xe về nước để tham dự hôn lễ của người bạn thân (回国，去参加好朋友的婚礼)[span_96](start_span)[span_96](end_span)[span_97](start_span)[span_97](end_span).",
            explain: "Câu vận dụng tổng hợp 完, 回国, 参加 và trợ từ ngữ khí 啊[span_98](start_span)[span_98](end_span)[span_99](start_span)[span_99](end_span).",
            audio: [
              { lang: "vi-VN", text: "Ôn tập ngày bảy: Lời giải nghe hiểu. Họ dự định cùng về nước dự đám cưới bạn[span_100](start_span)[span_100](end_span).", pause: 400 }
            ]
          }
        ]
      } // Kết thúc group-4 (Nhóm 4)
    ] // Kết thúc mảng groups
  }
]; // Kết thúc biến const ALL_LESSONS
