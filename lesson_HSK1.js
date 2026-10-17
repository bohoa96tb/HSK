/**
 * HỆ THỐNG HỌC LIỆU ÂM THANH TIẾNG TRUNG HSK1 - CHUẨN DUAL TTS & EDTECH
 * Tên tệp dữ liệu: lesson_HSK1.js
 * Tương thích hoàn toàn với: index.html (DataNormalizer & AppStore Engine)
 */

// =============================================================================
// I. CẤU HÌNH BÀI HỌC TOÀN CỤC (Thay đổi số bài đồng bộ tại đây)
// =============================================================================
const LESSON_NUMBER = 16;
const LESSON_LEVEL = "HSK1";
const LESSON_ID = `bai-${LESSON_NUMBER}`;
const LESSON_TITLE = `Bài ${LESSON_NUMBER}: Giao Tiếp Cơ Bản & Định Hướng Không Gian`;

// Khai báo biến top-level tương thích với window.ALL_LESSONS của ứng dụng
const ALL_LESSONS = [
  {
    id: LESSON_ID,
    title: LESSON_TITLE,
    level: LESSON_LEVEL,
    groups: [
      // =======================================================================
      // NHÓM 1: PHƯƠNG HƯỚNG, HOẠT ĐỘNG & ĐẠI TỪ (TỪ 01 - 06)
      // =======================================================================
      {
        id: `${LESSON_ID}-g1`,
        title: "Nhóm 1: Phương Hướng, Động Tác & Đại Từ Nhân Xưng",
        desc: "Làm chủ cách xác định vị trí bên phải, hướng bắc, động từ ly hợp lái xe, phân biệt đạt được với nhận được, và cách dùng danh từ động tác.",
        words: [
          // -------------------------------------------------------------------
          // TỪ 01: 右 (yòu)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g1-w1`,
            index: 1,
            hanzi: "右",
            pinyin: "yòu", // Nơi DUY NHẤT lưu trữ Pinyin có dấu theo hợp đồng
            coreMeaning: "Bên phải, phía bên phải",
            introAudio: [
              { lang: "zh-CN", text: "右", pause: 400 },
              { lang: "vi-VN", text: "Thanh bốn. Nghĩa là bên phải hoặc phía bên phải.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi chỉ đường, xác định vị trí đồ vật, người hoặc chuyển hướng di chuyển trong không gian thực tế.",
              detail: "Thuộc nhóm từ chỉ phương vị. Khi đứng độc lập trong khẩu ngữ hiện đại, từ này thường kết hợp thêm hậu tố chỉ phương hướng để tạo thành danh từ phương vị hoàn chỉnh.",
              keyPoint: "Quy tắc mốc chuẩn: Trong tiếng Trung, mốc vị trí luôn đứng trước từ chỉ phương vị.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "右", pause: 300 },
                { lang: "vi-VN", text: " mang nghĩa là bên phải. Trong khẩu ngữ giao tiếp thực tế, người Trung Quốc hiếm khi dùng một chữ đơn độc mà thường nói là ", pause: 200 },
                { lang: "zh-CN", text: "右边", pause: 300 },
                { lang: "vi-VN", text: " để tạo thành cụm danh từ chỉ phương hướng rõ ràng.", pause: 350 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Xác định vị trí dựa trên vật mốc",
                pattern: "Vật mốc + 右边 / 右面",
                note: "Vật làm mốc bắt buộc phải đứng trước, sau đó mới tới phía bên phải.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu xác định vị trí: Đặt địa điểm mốc ở phía trước, sau đó thêm ", pause: 150 },
                  { lang: "zh-CN", text: "右边", pause: 300 },
                  { lang: "vi-VN", text: ". Ví dụ bên phải trường học sẽ là trường học rồi đến bên phải.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Di chuyển hoặc chuyển hướng sang phải",
                pattern: "往 / 向 + 右 + 拐 / 转 / 看",
                note: "Giới từ chỉ hướng đứng trước từ chỉ phương vị, động từ di chuyển đứng sau cùng.",
                audio: [
                  { lang: "vi-VN", text: "Khi muốn bảo ai đó rẽ phải hoặc nhìn sang phải, dùng cấu trúc: Giới từ ", pause: 150 },
                  { lang: "zh-CN", text: "往", pause: 200 },
                  { lang: "vi-VN", text: " kết hợp với ", pause: 150 },
                  { lang: "zh-CN", text: "右", pause: 200 },
                  { lang: "vi-VN", text: " rồi thêm động từ hành động ở cuối câu.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "学校的右边有一个商店。",
                vi: "Phía bên phải trường học có một cửa hàng.",
                situation: "Mô tả vị trí cửa hàng khi chỉ đường cho bạn bè.",
                analysis: "Trường học là mốc chuẩn đứng trước, phương vị từ đứng sau liên kết bằng trợ từ sở hữu.",
                explainAudio: [
                  { lang: "zh-CN", text: "学校的右边有一个商店。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Phía bên phải trường học có một cửa hàng. Chú ý mốc trường học được đặt ở đầu câu.", pause: 400 }
                ]
              },
              {
                zh: "到路口请往右拐。",
                vi: "Đến ngã rẽ xin vui lòng rẽ sang phải.",
                situation: "Bác tài xế hoặc người chỉ đường hướng dẫn hướng rẽ tại nút giao.",
                analysis: "Sử dụng giới từ chỉ phương hướng đứng trước phương vị từ và động từ rẽ đứng cuối.",
                explainAudio: [
                  { lang: "zh-CN", text: "到路口请往右拐。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Đến ngã rẽ hãy rẽ phải. Động từ rẽ đứng sau cụm chỉ phương hướng.", pause: 400 }
                ]
              },
              {
                zh: "我的右手有点儿疼。",
                vi: "Tay phải của tôi hơi đau một chút.",
                situation: "Nói với bác sĩ hoặc người thân về tình trạng đau tay.",
                analysis: "Từ này kết hợp trực tiếp với danh từ bộ phận cơ thể để làm định ngữ mà không cần thêm trợ từ.",
                explainAudio: [
                  { lang: "zh-CN", text: "我的右手有点儿疼。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Tay phải của tôi hơi đau. Ở đây từ đóng vai trò bổ nghĩa trực tiếp cho bàn tay.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy đảo trật tự mốc vị trí theo thói quen tiếng Việt",
                situation: "Người Việt muốn nói: 'Bên phải khách sạn có quán cà phê'.",
                explanation: "Tiếng Việt nói 'bên phải' trước rồi mới tới 'khách sạn'. Tiếng Trung bắt buộc đặt mốc không gian trước rồi mới tới phương vị từ.",
                wrong: "右边饭店有一个咖啡馆。",
                right: "饭店右边有一个咖啡馆。",
                tip: "Luôn tìm điểm tựa không gian trước: Mốc ở đâu thì đặt ra trước, phương vị theo sau.",
                boundary: "Chỉ khi từ này làm định ngữ bổ nghĩa cho danh từ độc lập thì mới đứng trước danh từ, ví dụ người bên phải.",
                comparisons: [
                  { zh: "老师的右边", vi: "Bên phải của thầy giáo (Chuẩn ngữ pháp tiếng Trung)" },
                  { zh: "右边的老师", vi: "Người thầy giáo đứng ở phía bên phải (Định ngữ làm rõ đối tượng)" }
                ],
                checkQuestion: {
                  q: "Chọn câu diễn đạt đúng: 'Bên phải tôi là bạn cùng bàn.'",
                  options: ["我的右边是同桌。", "右边我是同桌。"],
                  correct: 0,
                  explain: "Mốc chuẩn 'tôi' phải đứng trước phương vị từ 'bên phải'."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân tích bẫy vị trí: Người Việt rất hay nói ngược theo thói quen tiếng mẹ đẻ. Trong tiếng Trung, tuyệt đối không đặt ", pause: 150 },
                  { lang: "zh-CN", text: "右边", pause: 200 },
                  { lang: "vi-VN", text: " trước địa điểm mốc. Hãy nhớ quy tắc: Mốc chuẩn đứng trước, phương vị đứng sau.", pause: 350 }
                ]
              },
              {
                name: "Bẫy nhầm lẫn mặt chữ Hán giữa bên phải và bên trái",
                situation: "Người mới học nhìn mặt chữ thường nhầm giữa chữ chỉ bên phải và chữ chỉ bên trái.",
                explanation: "Cả hai chữ đều có nét phẩy và nét ngang gập bên trên, nhưng phần chân bên dưới hoàn toàn khác nhau.",
                wrong: "左 (Đây là chữ TẢ nghĩa là bên trái, chứa chữ CÔNG)",
                right: "右 (Đây là chữ HỮU nghĩa là bên phải, chứa chữ KHẨU)",
                tip: "Mẹo nhớ: Tay phải cầm đũa đưa cơm vào miệng, nên phía dưới có bộ Khẩu là hình vuông.",
                boundary: "Hai chữ này là cặp phản nghĩa trực tiếp, cần ghi nhớ theo cặp đối sánh.",
                checkQuestion: {
                  q: "Chữ Hán nào mang nghĩa là 'Bên phải'?",
                  options: ["右", "左"],
                  correct: 0,
                  explain: "Chữ có bộ Khẩu bên dưới là chữ chỉ bên phải."
                },
                audio: [
                  { lang: "vi-VN", text: "Mẹo phân biệt mặt chữ: Chữ chỉ bên phải có bộ khẩu ở dưới, tượng trưng cho tay phải cầm thìa đưa vào miệng. Còn chữ chỉ bên trái có chữ công ở phía dưới.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Phát âm thanh bốn. Bắt đầu từ cao độ cao nhất và rơi thật dứt khoát xuống đáy giọng. Không đọc kéo dài như dấu nặng tiếng Việt.",
              audio: [
                { lang: "vi-VN", text: "Hướng dẫn phát âm: Hãy nghe và đọc dứt khoát thanh bốn theo mẫu:", pause: 200 },
                { lang: "zh-CN", text: "右", pause: 800 },
                { lang: "zh-CN", text: "右边", pause: 1000 },
                { lang: "vi-VN", text: "Rất tốt. Chú ý dứt khoát âm lượng.", pause: 300 }
              ]
            },
            write: {
              desc: "Gồm năm nét: Nét ngang dài ở trên, tiếp theo là nét phẩy nghiêng sang trái, phía dưới là bộ Khẩu gồm sổ, ngang gập và ngang đóng.",
              audio: [
                { lang: "vi-VN", text: "Hướng dẫn nhớ nét: Viết nét ngang trước, nét phẩy kéo dài sang trái, sau đó viết trọn vẹn bộ khẩu hình vuông ở góc dưới bên phải.", pause: 300 }
              ]
            },
            summary: "Từ chỉ bên phải. Luôn ghi nhớ đặt mốc chuẩn đứng trước phương vị từ trong câu miêu tả vị trí.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Đặt vật mốc phía trước, thêm ", pause: 150 },
              { lang: "zh-CN", text: "右边", pause: 250 },
              { lang: "vi-VN", text: " phía sau để xác định vị trí bên phải chuẩn xác.", pause: 300 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 02: 得到 (dédào)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g1-w2`,
            index: 2,
            hanzi: "得到",
            pinyin: "dédào",
            coreMeaning: "Được, đạt được, nhận được (kết quả, sự giúp đỡ, giải thưởng)",
            introAudio: [
              { lang: "zh-CN", text: "得到", pause: 400 },
              { lang: "vi-VN", text: "Nghĩa là đạt được, nhận được thành quả hoặc sự giúp đỡ.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi người nói muốn diễn đạt việc bản thân hoặc ai đó nhận được một giá trị tích cực, sự chấp thuận, giúp đỡ hoặc phần thưởng sau một quá trình.",
              detail: "Động từ này nhấn mạnh vào kết quả đạt được, đối tượng tiếp nhận thường là danh từ trừu tượng hoặc kết quả của nỗ lực.",
              keyPoint: "Thường đi kèm với những từ chỉ sự giúp đỡ, khen ngợi, đồng ý, hoặc điểm số, phần thưởng.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "得到", pause: 300 },
                { lang: "vi-VN", text: " mang nghĩa là đạt được hoặc nhận được. Từ này thường dùng cho những điều trừu tượng hoặc thành quả sau nỗ lực.", pause: 350 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Đạt được kết quả hoặc sự trợ giúp",
                pattern: "Chủ ngữ + 得到 + Tân ngữ trừu tượng (帮助 / 机会 / 赞成)",
                note: "Tân ngữ phía sau thường không phải là vật thể gửi qua bưu điện mà là sự ủng hộ, cơ hội hoặc điểm số.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu cơ bản: Chủ ngữ kết hợp trực tiếp với ", pause: 150 },
                  { lang: "zh-CN", text: "得到", pause: 200 },
                  { lang: "vi-VN", text: " và danh từ chỉ sự trợ giúp hoặc cơ hội ở phía sau.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Phủ định chưa đạt được",
                pattern: "Chủ ngữ + 没有 + 得到 + Tân ngữ",
                note: "Dùng phó từ phủ định quá khứ để chỉ việc chưa nhận được kết quả mong đợi.",
                audio: [
                  { lang: "vi-VN", text: "Khi muốn nói chưa nhận được hoặc không nhận được, đặt ", pause: 150 },
                  { lang: "zh-CN", text: "没有", pause: 200 },
                  { lang: "vi-VN", text: " ngay trước động từ.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "在汉语课上，我得到了老师的帮助。",
                vi: "Trong tiết học tiếng Trung, tôi đã nhận được sự giúp đỡ của giáo viên.",
                situation: "Bày tỏ lòng biết ơn về việc giáo viên đã hỗ trợ mình học bài.",
                analysis: "Sự giúp đỡ là danh từ trừu tượng tiếp nhận được, kết hợp hoàn hảo với động từ này.",
                explainAudio: [
                  { lang: "zh-CN", text: "在汉语课上，我得到了老师的帮助。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Tôi đã nhận được sự giúp đỡ của thầy cô. Sự giúp đỡ là một giá trị trừu tượng quý giá.", pause: 400 }
                ]
              },
              {
                zh: "他努力学习，得到了第一名。",
                vi: "Anh ấy nỗ lực học tập và đã đạt được vị trí thứ nhất.",
                situation: "Khen ngợi kết quả thi đua xuất sắc của bạn bè.",
                analysis: "Vị trí quán quân là thành quả trực tiếp từ quá trình nỗ lực.",
                explainAudio: [
                  { lang: "zh-CN", text: "他努力学习，得到了第一名。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Anh ấy nỗ lực học và đã giành được vị trí số một.", pause: 400 }
                ]
              },
              {
                zh: "这个计划得到了大家的同意。",
                vi: "Kế hoạch này đã nhận được sự đồng thuận của mọi người.",
                situation: "Thông báo kết quả cuộc họp bàn kế hoạch làm việc nhóm.",
                analysis: "Sự đồng ý của tập thể là tân ngữ biểu thị kết quả đạt được.",
                explainAudio: [
                  { lang: "zh-CN", text: "这个计划得到了大家的同意。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Kế hoạch này đã được mọi người đồng ý thông qua.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy nhầm lẫn giữa đạt được thành quả và nhận bưu phẩm cụ thể",
                situation: "Người học nhận được một bức thư hoặc gói quà từ bạn bè và muốn diễn đạt bằng tiếng Trung.",
                explanation: "Tiếng Việt đều dịch chung là 'nhận được'. Tuy nhiên, với thư từ, tin nhắn, quà cáp cụ thể do người khác gửi tới tận tay, tiếng Trung phải dùng động từ thu nhận.",
                wrong: "今天我得到了朋友送我的礼物。(Không tự nhiên khi nói về quà cụ thể)",
                right: "今天我收到了朋友送我的礼物。",
                tip: "Quy tắc quyết định: Đồ vật cầm nắm được, do người khác gửi tới thì dùng động từ THU; kết quả, cơ hội, sự giúp đỡ qua nỗ lực thì dùng từ ĐẠT ĐƯỢC.",
                boundary: "Nếu món quà đó là phần thưởng của một cuộc thi lớn, người ta vẫn có thể dùng từ này với nghĩa đoạt giải.",
                comparisons: [
                  { zh: "收到信", vi: "Nhận được thư (Bưu phẩm cụ thể do bưu tá giao)" },
                  { zh: "得到机会", vi: "Đạt được cơ hội (Cơ hội trừu tượng mở ra)" }
                ],
                checkQuestion: {
                  q: "Điền từ thích hợp: '我昨天 (___) 了一封信。'",
                  options: ["收到", "得到"],
                  correct: 0,
                  explain: "Thư từ là vật thể hữu hình do người khác gửi tới, chuẩn xác phải dùng động từ thu nhận."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt trọng tâm: Đừng nhầm lẫn giữa ", pause: 150 },
                  { lang: "zh-CN", text: "得到", pause: 200 },
                  { lang: "vi-VN", text: " và ", pause: 150 },
                  { lang: "zh-CN", text: "收到", pause: 200 },
                  { lang: "vi-VN", text: ". Nếu là thư từ, tiền bạc, bưu phẩm cầm trên tay, hãy dùng động từ thu nhận. Còn thành tích, sự trợ giúp hoặc cơ hội, hãy dùng từ đạt được.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu đọc thanh hai, đưa giọng từ trung bình vút lên cao. Chữ sau đọc thanh bốn, nhấn dứt khoát.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm theo nhịp thanh hai đi với thanh bốn:", pause: 200 },
                { lang: "zh-CN", text: "得到", pause: 800 },
                { lang: "zh-CN", text: "得到帮助", pause: 1000 },
                { lang: "vi-VN", text: "Tốt lắm. Hãy giữ chuẩn cao độ của thanh hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu có bộ xích hai bước chân ở bên trái, bên phải là chữ đán và thốn. Chữ sau gồm bộ chí ở trên và bộ đao ở dưới.",
              audio: [
                { lang: "vi-VN", text: "Mẹo nhớ mặt chữ: Chữ đầu biểu thị từng bước đi tới để nắm lấy. Chữ sau có nghĩa là đi tới nơi và đạt tới đích.", pause: 300 }
              ]
            },
            summary: "Động từ chỉ việc đạt được thành quả, cơ hội hoặc sự giúp đỡ. Phân biệt rõ với việc nhận bưu phẩm vật lý.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi nói về việc gặt hái kết quả tốt, nhận sự hỗ trợ hoặc được mọi người đồng thuận.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 03: 开车 (kāichē)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g1-w3`,
            index: 3,
            hanzi: "开车",
            pinyin: "kāichē",
            coreMeaning: "Lái xe, chạy xe (người trực tiếp điều khiển vô lăng)",
            introAudio: [
              { lang: "zh-CN", text: "开车", pause: 400 },
              { lang: "vi-VN", text: "Thanh một đi với thanh một. Nghĩa là lái xe, cầm lái điều khiển phương tiện.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi nói về năng lực lái xe, hành vi đang cầm lái, hoặc lựa chọn tự lái phương tiện đi làm, đi chơi.",
              detail: "Bản chất là kết cấu động tân ly hợp gồm động từ lái và tân ngữ xe. Chính vì vậy, bản thân cụm từ này đã mang sẵn đối tượng là xe.",
              keyPoint: "Chỉ người trực tiếp điều khiển phương tiện. Nếu là hành khách ngồi trên xe, không dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "开车", pause: 300 },
                { lang: "vi-VN", text: " có nghĩa là lái xe. Đây là cụm động từ ly hợp chỉ người trực tiếp cầm lái.", pause: 350 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Di chuyển tới đâu bằng cách tự lái xe",
                pattern: "Chủ ngữ + 开车 + 去 / 到 + Địa điểm",
                note: "Đóng vai trò là phương thức hành động đứng trước động từ di chuyển chính.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu diễn đạt đi đâu bằng ô tô: Đặt cụm tự lái xe ở trước, động từ đi và địa điểm ở phía sau.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Diễn đạt kỹ năng hoặc khả năng lái xe",
                pattern: "Chủ ngữ + 会 / 能 + 开车",
                note: "Dùng năng nguyện từ biểu thị kỹ năng đã học được qua rèn luyện.",
                audio: [
                  { lang: "vi-VN", text: "Muốn nói ai đó biết lái xe, thêm năng nguyện từ chỉ kỹ năng vào ngay trước cụm từ.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "我爸爸每天开车去上班。",
                vi: "Bố tôi mỗi ngày đều lái xe đi làm.",
                situation: "Kể về thói quen đi lại hằng ngày của người thân trong gia đình.",
                analysis: "Lái xe là phương thức di chuyển, đứng trước hành vi đi làm.",
                explainAudio: [
                  { lang: "zh-CN", text: "我爸爸每天开车去上班。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bố tôi ngày nào cũng lái xe đi làm. Cụm lái xe làm trạng ngữ phương thức.", pause: 400 }
                ]
              },
              {
                zh: "你会开车吗？",
                vi: "Bạn có biết lái xe không?",
                situation: "Hỏi bạn bè về kỹ năng lái xe khi chuẩn bị thuê xe đi du lịch.",
                analysis: "Câu hỏi kỹ năng dùng trợ từ nghi vấn đặt ở cuối câu khẳng định.",
                explainAudio: [
                  { lang: "zh-CN", text: "你会开车吗？", pause: 800 },
                  { lang: "vi-VN", text: "Câu này dùng để hỏi thăm: Bạn có biết lái xe không?", pause: 400 }
                ]
              },
              {
                zh: "路上车很多，请慢点儿开。",
                vi: "Trên đường xe cộ rất đông, xin hãy lái chậm một chút.",
                situation: "Nhắc nhở người cầm lái chú ý an toàn giao thông.",
                analysis: "Tách động từ lái ra độc lập khi kết hợp với trạng ngữ miêu tả tốc độ.",
                explainAudio: [
                  { lang: "zh-CN", text: "路上车很多，请慢点儿开。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này khuyên nhủ: Đường đông xe lắm, hãy lái chậm lại một chút nhé.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy nhét thêm tân ngữ loại xe vào sau kết cấu ly hợp",
                situation: "Người học muốn nói: 'Tôi lái xe taxi' hoặc 'Tôi lái xe của anh ấy'.",
                explanation: "Vì chữ thứ hai đã là danh từ xe, nên không thể gắn thêm một danh từ xe khác ngay phía sau. Phải thay thế chữ xe bằng loại xe cụ thể, hoặc dùng kết cấu bổ ngữ.",
                wrong: "我开车出租车去学校。(Lỗi ngữ pháp nặng do thừa tân ngữ)",
                right: "我开出租车去学校。 hoặc 我坐出租车去学校。",
                tip: "Mẹo nhớ: Đã có xe cụ thể (như taxi, xe con) thì bỏ chữ xe chung đi, chỉ giữ lại động từ lái đứng trước loại xe đó.",
                boundary: "Nếu muốn nói lái xe rất giỏi, dùng kết cấu lặp động từ: 开车开得很好.",
                checkQuestion: {
                  q: "Câu nào dưới đây diễn đạt đúng ngữ pháp?",
                  options: ["他每天开出租车。", "他每天开车出租车。"],
                  correct: 0,
                  explain: "Chỉ giữ lại động từ lái đứng trực tiếp trước loại xe cụ thể."
                },
                audio: [
                  { lang: "vi-VN", text: "Cảnh báo bẫy ngữ pháp: Tuyệt đối không ghép thêm danh từ loại xe vào sau cụm từ này. Nếu là xe cụ thể như taxi, chỉ cần nói động từ lái đi với taxi, không lặp lại chữ xe.", pause: 400 }
                ]
              },
              {
                name: "Bẫy nhầm lẫn giữa người cầm lái và hành khách ngồi trên xe",
                situation: "Người học đi xe buýt hoặc ngồi sau xe người khác chở nhưng lại nói mình lái xe.",
                explanation: "Từ này chỉ dùng cho người đang cầm vô lăng. Người ngồi trên xe phải dùng động từ ngồi.",
                wrong: "我今天开车公共汽车去学校。(Khi bản thân chỉ là học sinh đi xe buýt)",
                right: "我今天坐公共汽车去学校。",
                tip: "Phân biệt: Tay cầm vô lăng dùng động từ KHAI; mông ngồi trên ghế xe dùng động từ TỌA.",
                checkQuestion: {
                  q: "Bạn là hành khách đi làm bằng tàu điện, bạn sẽ nói thế nào?",
                  options: ["我坐地铁去上班。", "我开地铁去上班。"],
                  correct: 0,
                  explain: "Hành khách đi tàu điện phải dùng động từ ngồi, không dùng động từ lái."
                },
                audio: [
                  { lang: "vi-VN", text: "Lưu ý thực tế: Bạn chỉ dùng từ này khi bản thân là tài xế cầm lái. Nếu đi xe buýt, tàu điện hay người khác chở, hãy dùng động từ ngồi xe.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Cả hai chữ đều mang thanh một. Giữ cao độ giọng cao và phẳng đều từ đầu đến cuối âm tiết, không hạ giọng xuống.",
              audio: [
                { lang: "vi-VN", text: "Nghe và luyện đọc chuẩn hai âm thanh một liên tiếp:", pause: 200 },
                { lang: "zh-CN", text: "开车", pause: 800 },
                { lang: "zh-CN", text: "学开车", pause: 1000 },
                { lang: "vi-VN", text: "Giữ hơi đều và cao độ ổn định.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm hai nét ngang, một nét phẩy và một nét sổ đứng thẳng. Chữ sau gồm nét ngang, nét phẩy gập, nét ngang dài và một nét sổ chính giữa xuyên qua.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ sau là hình tượng chiếc xe nhìn từ trên cao với trục bánh xe thẳng đứng ở giữa.", pause: 300 }
              ]
            },
            summary: "Động từ ly hợp chỉ hành vi điều khiển xe. Tuyệt đối không gắn thêm tân ngữ xe khác vào phía sau.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Cụm từ mang nghĩa tự lái xe. Nếu có tên loại xe cụ thể, chỉ giữ lại động từ lái đứng trước loại xe đó.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 04: 北 (běi)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g1-w4`,
            index: 4,
            hanzi: "北",
            pinyin: "běi",
            coreMeaning: "Bắc, hướng bắc, phía bắc",
            introAudio: [
              { lang: "zh-CN", text: "北", pause: 400 },
              { lang: "vi-VN", text: "Thanh ba. Nghĩa là hướng bắc hoặc phía bắc.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng để xác định phương vị địa lý, vị trí các tòa nhà, thành phố hoặc vùng miền trên bản đồ.",
              detail: "Là từ chỉ phương hướng cơ bản trong bốn phương đông tây nam bắc. Trong khẩu ngữ, từ này thường kết hợp với hậu tố để tạo thành danh từ phương vị hoàn chỉnh.",
              keyPoint: "Thường đi kèm với từ chỉ biên giới hoặc bề mặt để nói rõ phía bắc.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "北", pause: 300 },
                { lang: "vi-VN", text: " mang nghĩa là hướng bắc. Trong khẩu ngữ hàng ngày, người bản xứ thường dùng dạng hai âm tiết là ", pause: 200 },
                { lang: "zh-CN", text: "北边", pause: 300 },
                { lang: "vi-VN", text: " để xác định không gian rõ ràng.", pause: 350 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Nằm ở phía bắc của một địa điểm",
                pattern: "Địa điểm mốc + 北边 / 北面",
                note: "Địa danh làm mốc đứng trước, phương vị từ đứng sau.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu vị trí địa lý: Đặt tên địa phương làm mốc trước, sau đó thêm ", pause: 150 },
                  { lang: "zh-CN", text: "北边", pause: 250 },
                  { lang: "vi-VN", text: " ở phía sau.", pause: 300 }
                ]
              },
              {
                title: "Khung 2: Hướng di chuyển về phương bắc",
                pattern: "往 / 向 + 北 + Đi / Chạy / Bay",
                note: "Biểu thị phương hướng của chuyển động.",
                audio: [
                  { lang: "vi-VN", text: "Muốn diễn đạt đi về hướng bắc, dùng giới từ chỉ hướng kết hợp với từ chỉ phương bắc và động từ di chuyển.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "北京在中国北方。",
                vi: "Bắc Kinh nằm ở miền bắc Trung Quốc.",
                situation: "Giới thiệu vị trí địa lý của thủ đô Trung Quốc.",
                analysis: "Kết hợp với từ chỉ phương hướng để tạo thành danh từ chỉ vùng miền.",
                explainAudio: [
                  { lang: "zh-CN", text: "北京在中国北方。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bắc Kinh ở miền bắc Trung Quốc.", pause: 400 }
                ]
              },
              {
                zh: "我家在车站的北边。",
                vi: "Nhà tôi ở phía bắc của nhà ga.",
                situation: "Chỉ đường cho người quen đến thăm nhà.",
                analysis: "Nhà ga là vật mốc đứng trước, phương vị từ đứng sau liên kết bằng trợ từ sở hữu.",
                explainAudio: [
                  { lang: "zh-CN", text: "我家在车站的北边。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Nhà tôi nằm ở phía bắc bến xe.", pause: 400 }
                ]
              },
              {
                zh: "从这里一直往北走，就是公园。",
                vi: "Từ đây cứ đi thẳng về hướng bắc là đến công viên.",
                situation: "Hướng dẫn đường đi bộ cho khách tham quan du lịch.",
                analysis: "Kết hợp với phó từ đi thẳng và giới từ chỉ hướng chuyển động.",
                explainAudio: [
                  { lang: "zh-CN", text: "从这里一直往北走，就是公园。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Từ đây cứ đi thẳng về phía bắc là tới công viên.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy dùng độc lập một chữ trong câu miêu tả vị trí",
                situation: "Người học nói: 'Nhà tôi ở bắc' và dịch từng chữ sang tiếng Trung.",
                explanation: "Tiếng Trung không dùng chữ đơn lẻ này làm bổ ngữ nơi chốn đứng độc lập sau động từ ở. Bắt buộc phải thêm hậu tố phương vị.",
                wrong: "我家在北。(Câu cụt và không tự nhiên trong giao tiếp)",
                right: "我家在北边。 hoặc 我家在北方。",
                tip: "Quy tắc: Khi nói vị trí ở đâu, luôn thêm hậu tố để tạo thành từ hai âm tiết rõ nghĩa.",
                checkQuestion: {
                  q: "Cách nói nào sau đây là tự nhiên nhất?",
                  options: ["学校在公园的北边。", "学校在公园的北。"],
                  correct: 0,
                  explain: "Bắt buộc dùng dạng phương vị từ hoàn chỉnh để làm rõ vị trí không gian."
                },
                audio: [
                  { lang: "vi-VN", text: "Cảnh báo bẫy ngữ pháp: Khi nói vị trí ở đâu đó, tuyệt đối không dùng trơ trọi một chữ. Hãy luôn nói là ", pause: 150 },
                  { lang: "zh-CN", text: "北边", pause: 250 },
                  { lang: "vi-VN", text: " để câu văn tự nhiên và chuẩn xác.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Phát âm thanh ba. Xuống giọng sâu ở cuống họng rồi đưa nhẹ lên. Không phát âm vội vàng thành dấu hỏi tiếng Việt.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh ba tròn vành rõ chữ:", pause: 200 },
                { lang: "zh-CN", text: "北", pause: 800 },
                { lang: "zh-CN", text: "北方", pause: 1000 },
                { lang: "vi-VN", text: "Rất tốt. Hãy chú ý độ trầm của âm tiết.", pause: 300 }
              ]
            },
            write: {
              desc: "Gồm năm nét: Nét sổ ngắn bên trái, nét hất lên, bên phải là nét phẩy nghiêng và nét cong móc sang phải.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ này mô phỏng hình ảnh hai người quay lưng vào nhau tránh gió lạnh từ phương bắc thổi tới.", pause: 350 }
              ]
            },
            summary: "Từ chỉ phương bắc. Luôn ưu tiên dùng dạng hai âm tiết trong giao tiếp miêu tả vị trí cụ thể.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Đặt sau địa danh mốc và thêm hậu tố biên để tạo thành cụm từ chỉ phía bắc hoàn chỉnh.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 05: 他们 (tāmen)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g1-w5`,
            index: 5,
            hanzi: "他们",
            pinyin: "tāmen",
            coreMeaning: "Họ, bọn họ, chúng nó (nhóm toàn nam hoặc cả nam lẫn nữ)",
            introAudio: [
              { lang: "zh-CN", text: "他们", pause: 400 },
              { lang: "vi-VN", text: "Đại từ nhân xưng số nhiều ngôi thứ ba. Nghĩa là họ hoặc bọn họ.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi nói về một nhóm người từ hai người trở lên mà người nói và người nghe đang cùng hướng tới bàn luận.",
              detail: "Bao gồm chữ chỉ người nam kết hợp với hậu tố số nhiều đọc thanh nhẹ. Nếu trong nhóm có cả nam và nữ cùng xuất hiện, bắt buộc phải dùng chữ này.",
              keyPoint: "Đại diện chung cho tập thể số nhiều khi có sự pha trộn giới tính.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "他们", pause: 300 },
                { lang: "vi-VN", text: " là đại từ số nhiều ngôi thứ ba. Dùng để chỉ một nhóm toàn nam giới, hoặc một nhóm tập thể gồm cả nam lẫn nữ.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Làm chủ ngữ trong câu trần thuật",
                pattern: "他们 + Động từ / Cụm vị ngữ",
                note: "Đứng đầu câu để nêu rõ chủ thể thực hiện hành động.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu chủ ngữ: Đặt đại từ này ở đầu câu rồi nối tiếp bằng hành động của cả nhóm.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Diễn đạt mối quan hệ sở hữu",
                pattern: "他们 (的) + Danh từ",
                note: "Khi đứng trước người thân hoặc danh từ chỉ cơ quan tập thể có thể lược bỏ trợ từ sở hữu.",
                audio: [
                  { lang: "vi-VN", text: "Khi biểu thị quyền sở hữu của họ, đặt đại từ trước danh từ, có thể có hoặc không có trợ từ liên kết.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "他们都是我的大学同学。",
                vi: "Họ đều là bạn học đại học của tôi.",
                situation: "Giới thiệu một nhóm bạn bè cũ với người thân.",
                analysis: "Đại từ làm chủ ngữ số nhiều kết hợp với phó từ đều để nhấn mạnh tính đồng nhất.",
                explainAudio: [
                  { lang: "zh-CN", text: "他们都是我的大学同学。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bọn họ đều là bạn học đại học của tôi.", pause: 400 }
                ]
              },
              {
                zh: "明天下午他们想去打球。",
                vi: "Chiều mai bọn họ muốn đi chơi bóng.",
                situation: "Thông báo kế hoạch vui chơi thể thao của nhóm bạn.",
                analysis: "Chủ ngữ số nhiều đi kèm trợ động từ muốn và cụm vị ngữ chỉ hoạt động.",
                explainAudio: [
                  { lang: "zh-CN", text: "明天下午他们想去打球。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Chiều mai họ muốn đi chơi bóng.", pause: 400 }
                ]
              },
              {
                zh: "这是他们的书。",
                vi: "Đây là sách của bọn họ.",
                situation: "Chỉ vào chồng sách để quên trên bàn học.",
                analysis: "Đại từ kết hợp với trợ từ sở hữu làm định ngữ cho danh từ sách.",
                explainAudio: [
                  { lang: "zh-CN", text: "这是他们的书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Đây là sách của họ.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy chọn chữ Hán theo giới tính khi nhóm có cả nam lẫn nữ",
                situation: "Trong một phòng học có cả bạn nam và bạn nữ, người học phân vân không biết chọn chữ họ nào.",
                explanation: "Tiếng Trung có chữ họ toàn nữ (chứa bộ Nữ) và chữ họ chung (chứa bộ Nhân đứng). Chữ chứa bộ Nữ CHỈ ĐƯỢC DÙNG khi 100% thành viên trong nhóm là nữ giới.",
                wrong: "她们都是学生。(Sai nếu trong nhóm học sinh đó có dù chỉ một bạn nam)",
                right: "他们都是学生。(Chuẩn xác tuyệt đối khi có cả nam lẫn nữ hoặc toàn nam)",
                tip: "Quy tắc đại từ chung: Cứ có nam lẫn nữ xuất hiện trong tập thể, tự động chọn chữ có bộ Nhân đứng.",
                checkQuestion: {
                  q: "Một nhóm gồm 3 bạn nữ và 1 bạn nam, bạn phải dùng đại từ nào?",
                  options: ["他们", "她们"],
                  correct: 0,
                  explain: "Chỉ cần có thành viên nam trong tập thể, bắt buộc dùng chữ có bộ Nhân đứng."
                },
                audio: [
                  { lang: "vi-VN", text: "Quy tắc phân biệt chữ viết: Chữ chứa bộ Nữ chỉ được dùng khi toàn bộ nhóm đều là phái nữ. Nếu nhóm có cả nam lẫn nữ, bắt buộc phải dùng chữ có bộ Nhân đứng.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu đọc thanh một cao và phẳng. Chữ sau đọc thanh nhẹ, phát âm thật ngắn, nhẹ và lướt qua nhanh.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm thanh một kết hợp thanh nhẹ:", pause: 200 },
                { lang: "zh-CN", text: "他们", pause: 800 },
                { lang: "zh-CN", text: "他们俩", pause: 1000 },
                { lang: "vi-VN", text: "Đọc âm đuôi thật nhẹ nhàng và gọn gàng.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm bộ Nhân đứng bên trái và chữ Dã bên phải. Chữ sau gồm bộ Nhân đứng và chữ Môn bên phải.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Cả hai chữ đều có bộ Nhân đứng ở bên trái, biểu thị rõ đối tượng đang nói tới là con người.", pause: 350 }
              ]
            },
            summary: "Đại từ ngôi thứ ba số nhiều đại diện cho nhóm toàn nam hoặc nhóm hỗn hợp nam nữ.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi nói về tập thể số nhiều. Luôn nhớ đọc chữ đuôi thật nhẹ.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 06: 动作 (dòngzuò)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g1-w6`,
            index: 6,
            hanzi: "动作",
            pinyin: "dòngzuò",
            coreMeaning: "Động tác, hành động, thao tác cụ thể",
            introAudio: [
              { lang: "zh-CN", text: "动作", pause: 400 },
              { lang: "vi-VN", text: "Thanh bốn đi với thanh bốn. Nghĩa là động tác hoặc thao tác cơ thể cụ thể.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng trong các ngữ cảnh tập thể dục, học múa, rèn luyện võ thuật, thao tác công việc hoặc nhận xét cử chỉ tay chân nhanh hay chậm.",
              detail: "Bản chất trong tiếng Trung là một danh từ chỉ cử động cụ thể của cơ thể hoặc thao tác kỹ thuật, có thể đếm được bằng lượng từ.",
              keyPoint: "Nhận xét đặc điểm cử động hoặc hướng dẫn làm theo một động tác mẫu.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "动作", pause: 300 },
                { lang: "vi-VN", text: " là danh từ mang nghĩa là động tác hoặc cử chỉ thao tác. Từ này thường xuất hiện khi tập luyện thể thao hoặc nhận xét tốc độ làm việc.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Nhận xét tốc độ hoặc sự chuẩn xác của cử động",
                pattern: "Chủ ngữ + 动作 + 很 + 快 / 慢 / 漂亮",
                note: "Danh từ này làm chủ ngữ nhỏ trong câu vị ngữ hình dung từ.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu nhận xét cử chỉ: Đặt chủ ngữ người lên trước, thêm danh từ động tác và tính từ miêu tả ở cuối.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Làm một động tác cụ thể",
                pattern: "做 + (这个 / 那个) + 动作",
                note: "Kết hợp với động từ làm để chỉ việc thực hiện một tư thế cử động.",
                audio: [
                  { lang: "vi-VN", text: "Khi muốn bảo ai đó thực hiện tư thế, dùng động từ làm kết hợp với danh từ động tác.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "他的动作很快，一分钟就做完了。",
                vi: "Thao tác của anh ấy rất nhanh, một phút đã làm xong rồi.",
                situation: "Khen ngợi tốc độ xử lý công việc đóng gói hoặc thao tác máy móc.",
                analysis: "Danh từ làm chủ ngữ kết hợp tính từ chỉ tốc độ.",
                explainAudio: [
                  { lang: "zh-CN", text: "他的动作很快，一分钟就做完了。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Động tác của anh ấy rất nhanh, chỉ một phút là xong ngay.", pause: 400 }
                ]
              },
              {
                zh: "请大家跟我做这个动作。",
                vi: "Xin mời mọi người cùng làm theo tôi động tác này.",
                situation: "Giáo viên thể dục hoặc huấn luyện viên hướng dẫn bài tập khởi động.",
                analysis: "Động tác được bổ nghĩa bởi đại từ chỉ thị và lượng từ cụ thể.",
                explainAudio: [
                  { lang: "zh-CN", text: "请大家跟我做这个动作。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Mời mọi người làm theo tôi động tác này.", pause: 400 }
                ]
              },
              {
                zh: "打篮球的时候，这个动作很重要。",
                vi: "Khi chơi bóng rổ, động tác này rất quan trọng.",
                situation: "Huấn luyện viên giải thích kỹ thuật ném bóng ghi điểm.",
                analysis: "Cụm danh từ làm chủ ngữ chính của phân câu thứ hai.",
                explainAudio: [
                  { lang: "zh-CN", text: "打篮球的时候，这个动作很重要。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Lúc chơi bóng rổ, động tác này đặc biệt quan trọng.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy dùng danh từ động tác làm động từ vị ngữ",
                situation: "Người Việt muốn giục: 'Mọi người hành động nhanh lên!' và dùng từ này làm vị ngữ trực tiếp.",
                explanation: "Trong tiếng Việt, 'hành động' vừa là danh từ vừa là động từ. Nhưng trong tiếng Trung, từ này chỉ thuần túy là danh từ chỉ cử chỉ, không thể đứng làm vị ngữ độc lập để ra lệnh hành động.",
                wrong: "我们要快点动作！(Sai nghiêm trọng do nhầm từ loại)",
                right: "我们要快点行动！ hoặc 我们的动作要快一点！",
                tip: "Quy tắc: Muốn giục hành động, dùng động từ hành động; muốn nói về cử chỉ tay chân tác phong, dùng danh từ động tác.",
                boundary: "Trong khẩu ngữ thân mật, khi nói về cử chỉ tay chân chậm chạp, người ta dùng cụm miêu tả tác phong chứ không biến nó thành ngoại động từ.",
                checkQuestion: {
                  q: "Câu nào dưới đây dùng đúng chuẩn ngữ pháp tiếng Trung?",
                  options: ["他的动作很标准。", "我们大家快点动作吧。"],
                  correct: 0,
                  explain: "Từ này là danh từ làm chủ ngữ tiếp nhận tính từ tiêu chuẩn bổ nghĩa."
                },
                audio: [
                  { lang: "vi-VN", text: "Cảnh báo từ loại: Từ này là danh từ chỉ tư thế cử chỉ, không phải động từ ra lệnh. Khi muốn nói tác phong nhanh hay chậm, hãy dùng tính từ bổ nghĩa cho danh từ này.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Cả hai chữ đều mang thanh bốn dứt khoát. Nhấn giọng mạnh mẽ và rơi dứt điểm từng âm tiết.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm hai thanh bốn liên tiếp dứt khoát:", pause: 200 },
                { lang: "zh-CN", text: "动作", pause: 800 },
                { lang: "zh-CN", text: "快动作", pause: 1000 },
                { lang: "vi-VN", text: "Rất tốt. Giữ chuẩn sức bật của thanh bốn.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm chữ Trọng bên trái và bộ Lực bên phải. Chữ sau gồm bộ Nhân đứng bên trái và chữ Tạ bên phải.",
              audio: [
                { lang: "vi-VN", text: "Mẹo nhớ mặt chữ: Chữ đầu có bộ Lực tượng trưng cho sức mạnh tạo nên chuyển động. Chữ sau có bộ Nhân đứng thể hiện con người đang tạo tác làm việc.", pause: 400 }
              ]
            },
            summary: "Danh từ chỉ động tác hoặc thao tác cử thể. Thường kết hợp với các tính từ miêu tả tính chất cử động.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Ghi nhớ từ này là danh từ chỉ cử động thao tác, thường đi cùng động từ làm hoặc tính từ nhanh chậm.", pause: 350 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // BÀI TẬP TRẮC NGHIỆM & NGHE HIỂU NHÓM 1
        // ---------------------------------------------------------------------
        exercises: [
          {
            id: `${LESSON_ID}-g1-ex1`,
            type: "Trắc nghiệm ngữ pháp vị trí",
            prompt: "Chọn câu diễn đạt đúng vị trí: 'Bên phải công ty có một quán cà phê.'",
            options: [
              "公司右边有一个咖啡馆。",
              "右边公司有一个咖啡馆。",
              "公司在右边有一个咖啡馆。",
              "有一个咖啡馆在公司右。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Vật mốc 'công ty' phải đứng trước phương vị từ 'bên phải'.",
            reasonWrong: "Chưa đúng. Hãy nhớ quy tắc: Mốc chuẩn đứng trước, phương vị từ đứng sau.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 1: Đâu là cách diễn đạt chuẩn xác câu: Bên phải công ty có một quán cà phê?", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 1: Trong tiếng Trung, địa điểm mốc luôn phải đứng trước phương vị từ. Do đó công ty phải đứng trước bên phải.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g1-ex2`,
            type: "Phân biệt từ vựng",
            prompt: "Điền từ thích hợp vào chỗ trống: '经过努力，他 (___) 了第一名。'",
            options: ["得到", "收到", "开车", "动作"],
            correct: 0,
            reasonRight: "Chính xác! Giành được thành tích hoặc vị trí thứ nhất sau nỗ lực phải dùng từ ĐẠT ĐƯỢC.",
            reasonWrong: "Chưa đúng. Vị trí thứ nhất là thành quả đạt được sau nỗ lực, không phải bưu phẩm nhận được qua bưu điện.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 2: Hãy chọn từ điền vào chỗ trống để hoàn thành câu diễn đạt việc đạt được thứ hạng đầu.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 2: Vị trí quán quân là thành tích gặt hái được sau quá trình phấn đấu, đáp án chuẩn xác là ", pause: 150 },
              { lang: "zh-CN", text: "得到", pause: 250 }
            ]
          },
          {
            id: `${LESSON_ID}-g1-ex3`,
            type: "Sửa lỗi kết cấu động tân",
            prompt: "Chọn câu diễn đạt tự nhiên và đúng ngữ pháp nhất:",
            options: [
              "他每天开出租车去机场。",
              "他每天开车出租车去机场。",
              "他每天开着车出租车去机场。",
              "他每天车开出租去机场。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Đã có loại xe cụ thể như taxi thì bỏ chữ xe chung, chỉ dùng động từ lái.",
            reasonWrong: "Chưa đúng. Tuyệt đối không nhét thêm danh từ loại xe vào sau kết cấu ly hợp lái xe.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 3: Tìm câu diễn đạt chuẩn xác hành động lái xe taxi đi sân bay.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 3: Cụm từ lái xe đã có sẵn tân ngữ xe. Khi có loại xe cụ thể, chỉ giữ lại động từ lái đứng trước loại xe đó.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g1-ex4`,
            type: "Trắc nghiệm đại từ số nhiều",
            prompt: "Trong một phòng học có 5 bạn nữ và 2 bạn nam. Khi muốn nói 'Bọn họ đều là học sinh', dùng chữ nào?",
            options: [
              "他们都是学生。",
              "她们都是学生。",
              "它们都是学生。",
              "他都是学生。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Khi nhóm tập thể có cả nam lẫn nữ, bắt buộc dùng chữ có bộ Nhân đứng.",
            reasonWrong: "Chưa đúng. Chữ có bộ Nữ chỉ được dùng khi toàn bộ 100% người trong nhóm là nữ giới.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 4: Một nhóm có cả nam lẫn nữ thì dùng đại từ nào để chỉ bọn họ?", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 4: Quy tắc ngữ pháp tiếng Trung quy định, chỉ cần có thành viên nam thì tập thể đó phải dùng chữ có bộ Nhân đứng.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g1-ex5`,
            type: "Nghe hiểu phản xạ",
            isListening: true,
            prompt: "Nghe đoạn ghi âm và chọn nhận xét đúng về người được nhắc tới:",
            options: [
              "Người này thao tác rất nhanh nhẹn.",
              "Người này lái xe rất chậm.",
              "Người này đang đi về hướng bắc.",
              "Người này nhận được thư của bạn bè."
            ],
            correct: 0,
            reasonRight: "Chính xác! Lời thoại khen ngợi thao tác của người này rất nhanh nhẹn.",
            reasonWrong: "Chưa đúng. Hãy chú ý nghe kỹ cụm từ chỉ động tác và tính từ nhanh trong đoạn băng.",
            transcript: "小张在工厂工作，他的动作很快，大家都很喜欢他。",
            questionAudio: [
              { lang: "zh-CN", text: "小张在工厂工作，他的动作很快，大家都很喜欢他。", pause: 800 },
              { lang: "vi-VN", text: "Hãy chọn nhận xét đúng về nhân vật Tiểu Trương.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Bản chép lời nói rằng: Tiểu Trương làm việc ở nhà máy, thao tác động tác của anh ấy rất nhanh, ai cũng quý mến anh ấy. Đáp án là người này thao tác rất nhanh nhẹn.", pause: 400 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // NHIỆM VỤ TỰ DÙNG TỪ THỰC TẾ (3 TẦNG TRỢ GIÚP) NHÓM 1
        // ---------------------------------------------------------------------
        selfUse: [
          {
            id: `${LESSON_ID}-g1-su1`,
            situation: "Tình huống: Bạn đang đứng trước cổng trường học cùng một người bạn ngoại quốc. Bạn muốn nói bằng tiếng Trung: 'Phía bên phải trường học có một hiệu sách lớn.'",
            hint1: "Xác định mốc trước: 'Trường học' đặt ở đầu, sau đó thêm từ chỉ 'phía bên phải', rồi dùng động từ tồn tại 'có'.",
            hint2: "Khung câu gợi ý: 学校 + 右边 + 有 + 一个 + 大书店。",
            modelAnswer: "学校的右边有一个大书店。",
            modelExplain: "Trường học làm mốc đứng đầu câu, liên kết với phương vị từ bên phải, tiếp theo là vị ngữ chỉ sự tồn tại.",
            questionAudio: [
              { lang: "vi-VN", text: "Nhiệm vụ 1: Hãy tự nói câu: Phía bên phải trường học có một hiệu sách lớn.", pause: 300 }
            ],
            hint1Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 1: Hãy đưa mốc trường học lên trước rồi gắn từ bên phải vào sau.", pause: 300 }
            ],
            hint2Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 2: Khung câu gồm trường học, bên phải, động từ có, và một hiệu sách lớn.", pause: 300 }
            ],
            modelAudio: [
              { lang: "zh-CN", text: "学校的右边有一个大书店。", pause: 800 },
              { lang: "vi-VN", text: "Câu mẫu hoàn chỉnh: Phía bên phải trường học có một hiệu sách lớn.", pause: 300 }
            ]
          },
          {
            id: `${LESSON_ID}-g1-su2`,
            situation: "Tình huống: Đồng nghiệp hỏi bạn hôm nay đi làm bằng phương tiện gì. Bạn muốn trả lời: 'Hôm nay bố tôi lái xe đưa tôi đi làm.'",
            hint1: "Chủ thể thực hiện hành vi lái xe là 'bố tôi'. Hành vi tự lái xe đứng trước mục đích 'đi làm'.",
            hint2: "Khung câu gợi ý: 今天我爸爸 + 开车 + 送我去上班。",
            modelAnswer: "今天我爸爸开车送我去上班。",
            modelExplain: "Cụm lái xe làm trạng ngữ chỉ phương thức thực hiện hành vi đưa đi làm.",
            questionAudio: [
              { lang: "vi-VN", text: "Nhiệm vụ 2: Hãy tự diễn đạt câu: Hôm nay bố tôi lái xe đưa tôi đi làm.", pause: 300 }
            ],
            hint1Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 1: Nêu rõ ai là người cầm lái và phương thức lái xe trước khi nhắc tới hành vi đi làm.", pause: 300 }
            ],
            hint2Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 2: Sử dụng cụm từ hôm nay bố tôi lái xe, sau đó thêm động từ đưa tôi đi làm.", pause: 300 }
            ],
            modelAudio: [
              { lang: "zh-CN", text: "今天我爸爸开车送我去上班。", pause: 800 },
              { lang: "vi-VN", text: "Câu mẫu hoàn chỉnh: Hôm nay bố tôi lái xe đưa tôi đi làm.", pause: 300 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // ÔN TẬP NGẮT QUÃNG 1 - 3 - 7 NGÀY NHÓM 1
        // ---------------------------------------------------------------------
        reviews: [
          {
            id: `${LESSON_ID}-g1-rev1`,
            day: 1,
            type: "Nhớ nghĩa & Trật tự từ",
            q: "Khi muốn nói 'Phía bắc của bệnh viện', bạn sắp xếp từ bệnh viện và từ phía bắc như thế nào?",
            answer: "医院的北边 (Mốc bệnh viện đứng trước, phương vị từ phía bắc đứng sau)",
            explain: "Tiếng Trung tuân thủ nghiêm ngặt nguyên tắc: Mốc chuẩn đứng trước, phương vị từ đứng sau.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 1: Hãy nhớ lại trật tự sắp xếp vị trí phía bắc của bệnh viện trong tiếng Trung.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Đáp án ngày 1 là bệnh viện đứng trước, phía bắc đứng sau:", pause: 150 },
              { lang: "zh-CN", text: "医院北边", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g1-rev2`,
            day: 3,
            type: "Phân biệt bẫy ngữ pháp",
            q: "Tại sao không được nói '我开车公共汽车去学汉语' khi bạn là hành khách đi xe buýt?",
            answer: "Vì cụm từ này chỉ dành cho người cầm vô lăng lái xe. Hành khách ngồi trên xe phải dùng động từ 坐 (ngồi xe).",
            explain: "Phân biệt rõ ràng vai trò: Người cầm lái dùng từ lái xe, hành khách dùng từ ngồi xe.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 3: Hãy giải thích vì sao người đi xe buýt không được dùng cụm từ lái xe.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Giải thích ngày 3: Cụm từ lái xe chỉ người trực tiếp điều khiển phương tiện. Là hành khách, bạn bắt buộc phải dùng động từ ngồi xe.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g1-rev3`,
            day: 7,
            type: "Vận dụng ngữ cảnh mới",
            q: "Dịch câu sau sang tiếng Trung: 'Thao tác của bọn họ đều rất chuẩn xác, đã nhận được lời khen của thầy giáo.'",
            answer: "他们的动作都很标准，得到了老师的表扬。",
            explain: "Kết hợp đại từ số nhiều, danh từ thao tác động tác và động từ gặt hái đạt được kết quả.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 7: Thử thách kết hợp cả ba từ đã học trong một câu giao tiếp phức hợp.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Câu hoàn chỉnh mốc 7 ngày là:", pause: 150 },
              { lang: "zh-CN", text: "他们的动作都很标准，得到了老师的表扬。", pause: 800 }
            ]
          }
        ]
      },
      // [Phần tiếp theo: Nhóm 2, Nhóm 3, Nhóm 4 sẽ được bổ sung lần lượt tại các lượt phản hồi kế tiếp]
      // =======================================================================
      // NHÓM 2: HÀNH ĐỘNG SONG SONG, ĐÁNH GIÁ & ĐỜI SỐNG HỌC ĐƯỜNG (TỪ 07 - 12)
      // =======================================================================
      {
        id: `${LESSON_ID}-g2`,
        title: "Nhóm 2: Hành Động Song Song, Đánh Giá & Đời Sống Học Đường",
        desc: "Làm chủ cấu trúc hai hành động đồng thời với 一边, phó từ xác thực 真的, động từ ly hợp 下课, tính từ vị ngữ 有名, danh từ 大学 và đại từ nơi chốn 这里.",
        words: [
          // -------------------------------------------------------------------
          // TỪ 07: 一边 (yìbiān)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g2-w7`,
            index: 7,
            hanzi: "一边",
            pinyin: "yìbiān",
            coreMeaning: "Một bên; vừa... vừa... (hai hành động diễn ra song song)",
            introAudio: [
              { lang: "zh-CN", text: "一边", pause: 400 },
              { lang: "vi-VN", text: "Nghĩa là một bên, hoặc dùng lặp lại để diễn đạt vừa làm việc này vừa làm việc kia.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi người nói thực hiện hoặc quan sát ai đó tiến hành cùng lúc hai hành vi trong cùng một khoảng thời gian.",
              detail: "Khi dùng độc lập, từ này là danh từ phương vị chỉ một phía, một bên. Khi dùng lặp lại trước hai động từ, từ này đóng vai trò liên từ chỉ quan hệ song hành.",
              keyPoint: "Hai hành động đi kèm phải có thể diễn ra đồng thời về mặt thực tế và do cùng một chủ thể thực hiện.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "一边", pause: 300 },
                { lang: "vi-VN", text: " có hai cách dùng quan trọng: Một là chỉ một phía, hai là dùng lặp lại thành cấu trúc vừa làm việc này vừa làm việc khác.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Diễn đạt hai hành động song song (Vừa... vừa...)",
                pattern: "Chủ ngữ + 一边 + Động từ 1 + 一边 + Động từ 2",
                note: "Từ này bắt buộc phải đứng trước từng động từ vị ngữ, không được đặt sau động từ.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu vừa làm việc này vừa làm việc kia: Đặt từ này trước động từ thứ nhất, sau đó lặp lại từ này trước động từ thứ hai.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Liệt kê hai phía đối lập trong không gian",
                pattern: "一边是 + Vật 1 + ，另一边是 + Vật 2",
                note: "Dùng để miêu tả cảnh quan không gian có hai sự vật ở hai bên tả hữu.",
                audio: [
                  { lang: "vi-VN", text: "Khi miêu tả không gian hai phía, dùng cấu trúc: Một bên là vật thứ nhất, bên kia là vật thứ hai.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "我喜欢一边听音乐一边写作业。",
                vi: "Tôi thích vừa nghe nhạc vừa làm bài tập.",
                situation: "Chia sẻ về thói quen học tập và thư giãn cá nhân.",
                analysis: "Hai hành vi nghe nhạc và làm bài tập diễn ra hoàn toàn đồng thời.",
                explainAudio: [
                  { lang: "zh-CN", text: "我喜欢一边听音乐一边写作业。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Tôi thích vừa nghe nhạc vừa làm bài tập.", pause: 400 }
                ]
              },
              {
                zh: "爸爸一边喝茶一边看书。",
                vi: "Bố vừa uống trà vừa đọc sách.",
                situation: "Kể về hoạt động thư thả của bố vào buổi sáng cuối tuần.",
                analysis: "Hai động từ uống trà và đọc sách được đặt ngay sau từ nối song hành.",
                explainAudio: [
                  { lang: "zh-CN", text: "爸爸一边喝茶一边看书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Bố vừa nhâm nhi trà vừa đọc sách báo.", pause: 400 }
                ]
              },
              {
                zh: "路的一边是大学，另一边是书店。",
                vi: "Một bên đường là trường đại học, bên kia là hiệu sách.",
                situation: "Miêu tả vị trí địa lý của con đường trước cổng trường.",
                analysis: "Sử dụng nghĩa gốc chỉ phương vị không gian hai bên đường.",
                explainAudio: [
                  { lang: "zh-CN", text: "路的一边是大学，另一边是书店。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này miêu tả: Một bên đường là trường đại học, phía bên kia là hiệu sách.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy đảo trật tự từ: Đặt động từ trước liên từ theo thói quen tiếng Việt",
                situation: "Người Việt muốn nói: 'Tôi ăn cơm vừa xem ti vi' và dịch chuyển từng từ sang tiếng Trung.",
                explanation: "Tiếng Việt có thể nói 'ăn cơm vừa xem phim' hoặc 'vừa ăn cơm vừa xem phim'. Tiếng Trung bắt buộc phải đặt liên từ này ở phía trước cả hai động từ.",
                wrong: "我吃饭一边看电视。(Sai nghiêm trọng về trật tự từ)",
                right: "我一边吃饭一边看电视。",
                tip: "Công thức vàng: Nhất định phải có hai từ đứng trước hai hành động: 一边 hành động A, 一边 hành động B.",
                boundary: "Trong khẩu ngữ vội, người ta có thể rút gọn chữ đầu chỉ còn một âm tiết, nhưng trật tự trước động từ không bao giờ thay đổi.",
                checkQuestion: {
                  q: "Câu nào dưới đây có trật tự từ chuẩn xác nhất?",
                  options: ["他一边喝咖啡一边看报纸。", "他喝咖啡一边看报纸。"],
                  correct: 0,
                  explain: "Liên từ phải đứng trước cả hai hành động để tạo thế song hành chuẩn ngữ pháp."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân tích bẫy trật tự từ: Trong tiếng Trung, tuyệt đối không được nói động từ trước rồi mới nói liên từ. Bắt buộc phải đặt ", pause: 150 },
                  { lang: "zh-CN", text: "一边", pause: 200 },
                  { lang: "vi-VN", text: " trước hành động thứ nhất, rồi lại thêm một lần nữa trước hành động thứ hai.", pause: 400 }
                ]
              },
              {
                name: "Bẫy ghép hai hành động mâu thuẫn không thể tiến hành đồng thời",
                situation: "Người học ghép hành động ngủ và học bài vào cùng một cấu trúc.",
                explanation: "Cấu trúc này đòi hỏi hai hành động phải có khả năng diễn ra cùng một thời điểm. Không thể vừa ngủ say vừa lái xe hoặc vừa đi bơi vừa chạy bộ.",
                wrong: "他一边睡觉一边去上学。(Vô lý về mặt thực tế)",
                right: "他一边走路一边背生词。(Vừa đi bộ vừa nhẩm từ mới - Hợp lý)",
                tip: "Trước khi đặt câu, hãy tự hỏi: Hai việc này một người có thể cùng làm trong một giây được không?",
                checkQuestion: {
                  q: "Cặp hành động nào sau đây kết hợp tự nhiên nhất?",
                  options: ["一边走路一边说话", "一边睡觉一边跑步"],
                  correct: 0,
                  explain: "Vừa đi bộ vừa nói chuyện là hai hành vi hoàn toàn có thể diễn ra đồng thời."
                },
                audio: [
                  { lang: "vi-VN", text: "Lưu ý logic ngữ nghĩa: Hai hành động đi cùng nhau phải thực tế và có thể tiến hành cùng lúc, như vừa nghe vừa viết, vừa đi vừa nói chuyện.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là biến điệu của số một: Khi đứng trước chữ mang thanh một, nó biến thành thanh bốn. Chữ sau đọc thanh một chuẩn.",
              audio: [
                { lang: "vi-VN", text: "Chú ý biến điệu thanh bốn đi với thanh một:", pause: 200 },
                { lang: "zh-CN", text: "一边", pause: 800 },
                { lang: "zh-CN", text: "一边吃一边看", pause: 1000 },
                { lang: "vi-VN", text: "Đọc dứt khoát âm đầu và ngân phẳng âm sau.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu là một nét ngang duy nhất. Chữ sau gồm bộ Lực bên trong và bộ Quai xước bao bọc phía dưới bên trái.",
              audio: [
                { lang: "vi-VN", text: "Mẹo nhớ mặt chữ: Viết một nét ngang thẳng ở chữ đầu. Chữ sau viết phần bên trong trước rồi mới viết bộ quai xước bao quanh sau cùng.", pause: 350 }
              ]
            },
            summary: "Cấu trúc song hành kinh điển. Luôn đặt từ này đứng trước từng động từ để miêu tả hai việc làm đồng thời.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Hãy nhớ công thức: ", pause: 150 },
              { lang: "zh-CN", text: "一边", pause: 200 },
              { lang: "vi-VN", text: " làm việc A, ", pause: 150 },
              { lang: "zh-CN", text: "一边", pause: 200 },
              { lang: "vi-VN", text: " làm việc B để diễn đạt hai hành động diễn ra song song.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 08: 真的 (zhēnde)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g2-w8`,
            index: 8,
            hanzi: "真的",
            pinyin: "zhēnde",
            coreMeaning: "Thật sự, thật đấy, quả thật (xác nhận tính chân thực)",
            introAudio: [
              { lang: "zh-CN", text: "真的", pause: 400 },
              { lang: "vi-VN", text: "Nghĩa là thật sự, thật đấy, dùng để xác nhận hoặc nhấn mạnh tính chân thật.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi bạn muốn khẳng định một sự việc là có thật 100%, không nói dối, hoặc khi hỏi lại đối phương để xác nhận tin tức bất ngờ.",
              detail: "Bao gồm chữ chân chỉ sự thật kết hợp với trợ từ kết cấu tạo thành phó từ hoặc cụm định vị. Có thể đứng độc lập làm câu hỏi ngắn trong khẩu ngữ.",
              keyPoint: "Nhấn mạnh tính xác thực của thông tin hoặc cảm xúc chân thực của người nói.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "真的", pause: 300 },
                { lang: "vi-VN", text: " dùng để khẳng định một điều gì đó là sự thật, hoặc dùng làm câu cảm thán hỏi lại: Thật thế á?", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Nhấn mạnh mức độ hoặc tính xác thực trước vị ngữ",
                pattern: "Chủ ngữ + 真的 + Tính từ / Động từ cảm xúc",
                note: "Đóng vai trò làm trạng ngữ tăng cường độ tin cậy và cảm xúc trong câu.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu khẳng định cảm xúc: Đặt từ này ngay trước tính từ hoặc động từ tâm lý để nhấn mạnh mức độ chân thật.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Câu hỏi xác nhận thông tin bất ngờ",
                pattern: "真的吗？ / 是真的吗？",
                note: "Dùng để hỏi lại khi nghe được một tin tức khiến bản thân kinh ngạc hoặc hoài nghi.",
                audio: [
                  { lang: "vi-VN", text: "Khi bạn nghe tin bất ngờ và muốn hỏi lại: Thật sao? Hãy nói câu hỏi ngắn với trợ từ nghi vấn ở cuối.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "这个汉语老师真的很好。",
                vi: "Thầy giáo tiếng Trung này thật sự rất tốt.",
                situation: "Khen ngợi và giới thiệu người thầy tận tâm với bạn học.",
                analysis: "Từ này đứng trước tính từ tốt để gia tăng sức nặng của lời khen chân thực.",
                explainAudio: [
                  { lang: "zh-CN", text: "这个汉语老师真的很好。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Giáo viên tiếng Trung này thực sự rất tốt.", pause: 400 }
                ]
              },
              {
                zh: "是真的吗？我不太相信。",
                vi: "Có thật không vậy? Tôi không tin lắm.",
                situation: "Phản ứng trước một tin đồn giật gân chưa được kiểm chứng.",
                analysis: "Câu nghi vấn xác nhận sự thật đứng độc lập ở phân câu đầu.",
                explainAudio: [
                  { lang: "zh-CN", text: "是真的吗？我不太相信。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt sự hoài nghi: Có thật vậy không? Tôi không tin lắm đâu.", pause: 400 }
                ]
              },
              {
                zh: "我真的很想去中国旅游。",
                vi: "Tôi thực sự rất muốn đi du lịch Trung Quốc.",
                situation: "Bộc bạch ước mơ và nguyện vọng tha thiết của bản thân.",
                analysis: "Đứng trước động từ năng nguyện muốn để biểu đạt cảm xúc chân thành.",
                explainAudio: [
                  { lang: "zh-CN", text: "我真的很想去中国旅游。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Tôi thực sự rất muốn đi Trung Quốc du lịch.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy nhầm lẫn giữa chữ đơn 真 làm phó từ cảm thán và 真的",
                situation: "Người học phân vân khi nào dùng một chữ đơn và khi nào dùng cả cụm hai chữ.",
                explanation: "Chữ đơn đứng trước tính từ thường mang giọng điệu cảm thán trực tiếp trong khẩu ngữ (ví dụ: ngon thật đấy!). Còn dạng hai chữ vừa có thể làm trạng ngữ xác thực, vừa có thể đứng độc lập làm câu hỏi hoặc làm vị ngữ sau động từ là.",
                wrong: "真吗？(Trong khẩu ngữ chuẩn không nói câu hỏi cộc lốc này)",
                right: "是真的吗？ hoặc 真的吗？",
                tip: "Mẹo nhớ: Muốn hỏi 'Thật không?' hoặc trả lời 'Thật đấy!', bắt buộc phải có chữ đuôi.",
                checkQuestion: {
                  q: "Khi nghe tin bạn mình đỗ đại học, bạn muốn hỏi 'Thật á?', bạn sẽ nói:",
                  options: ["真的吗？", "真吗？"],
                  correct: 0,
                  explain: "Câu hỏi xác nhận bắt buộc phải dùng dạng hai chữ có trợ từ đuôi."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt khẩu ngữ: Khi muốn hỏi lại đối phương xem sự việc có thật hay không, bắt buộc phải dùng ", pause: 150 },
                  { lang: "zh-CN", text: "真的吗", pause: 250 },
                  { lang: "vi-VN", text: ", không được bỏ bớt chữ đuôi để nói cộc lốc.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu phát âm thanh một, đưa đầu lưỡi thẳng chạm chân răng trên rồi nhả ra. Chữ sau đọc thanh nhẹ lướt nhanh.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm thanh một đi cùng thanh nhẹ:", pause: 200 },
                { lang: "zh-CN", text: "真的", pause: 800 },
                { lang: "zh-CN", text: "真的吗", pause: 1000 },
                { lang: "vi-VN", text: "Phát âm chữ đầu thật chuẩn xác và nhẹ nhàng ở âm đuôi.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm nét thập ở trên, phía dưới là khung mắt với ba nét ngang bên trong, dưới cùng là nét ngang dài và hai chấm đỡ. Chữ sau gồm bộ Bạch bên trái và chữ Thược bên phải.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ đầu có hình con mắt nhìn thẳng vào sự thật. Chữ sau là trợ từ sở hữu quen thuộc.", pause: 350 }
              ]
            },
            summary: "Từ dùng để nhấn mạnh tính chân thật của sự việc hoặc đặt câu hỏi xác nhận thông tin.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này trước tính từ để khẳng định sự thật hoặc dùng trong câu hỏi xác nhận điều bất ngờ.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 09: 下课 (xiàkè)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g2-w9`,
            index: 9,
            hanzi: "下课",
            pinyin: "xiàkè",
            coreMeaning: "Tan học, hết giờ học, kết thúc buổi học",
            introAudio: [
              { lang: "zh-CN", text: "下课", pause: 400 },
              { lang: "vi-VN", text: "Thanh bốn đi với thanh bốn. Nghĩa là tan học, hết giờ học.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi chuông báo hết tiết vang lên, giáo viên cho học sinh nghỉ, hoặc khi hẹn bạn bè làm gì đó sau giờ tan trường.",
              detail: "Bản chất là kết cấu động tân ly hợp gồm động từ hạ (xuống/dừng) và tân ngữ khóa (tiết học). Do đó từ này KHÔNG ĐƯỢC nhận thêm tân ngữ môn học hay trường học phía sau.",
              keyPoint: "Chỉ thời điểm kết thúc một tiết học hoặc cả buổi học.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "下课", pause: 300 },
                { lang: "vi-VN", text: " có nghĩa là tan học. Đây là động từ ly hợp chỉ hành động hết giờ học của lớp.", pause: 350 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Thông báo hết giờ học",
                pattern: "(老师 / 时间) + 下课 + 了",
                note: "Thêm trợ từ ngữ khí ở cuối câu để báo hiệu sự chuyển biến trạng thái kết thúc tiết học.",
                audio: [
                  { lang: "vi-VN", text: "Khi giáo viên nói hết giờ rồi, thường dùng câu quen thuộc gồm động từ tan học đi cùng trợ từ chuyển biến ở cuối.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Làm gì sau khi tan học",
                pattern: "下课 + 以后 / 后 + Chủ ngữ + Hành động",
                note: "Cụm thời gian đứng ở đầu câu hoặc ngay sau chủ ngữ để xác định mốc thời gian.",
                audio: [
                  { lang: "vi-VN", text: "Muốn hẹn hò sau giờ học, đặt từ tan học kết hợp với từ chỉ sau khi, rồi nối tiếp bằng hành động dự định.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "老师说：“同学们，下课了！”",
                vi: "Thầy giáo nói: “Các em học sinh, tan học rồi!”",
                situation: "Lời tuyên bố của giáo viên khi hết tiết học trên lớp.",
                analysis: "Động từ ly hợp kết hợp với trợ từ ngữ khí biểu thị kết thúc tiết học.",
                explainAudio: [
                  { lang: "zh-CN", text: "老师说：“同学们，下课了！”", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Giáo viên nói: Các em, hết giờ tan học rồi!", pause: 400 }
                ]
              },
              {
                zh: "下课以后，我们去书店买书吧。",
                vi: "Sau khi tan học, chúng ta đi hiệu sách mua sách nhé.",
                situation: "Rủ bạn cùng lớp đi mua tài liệu sau giờ giảng.",
                analysis: "Cụm từ tan học làm mốc thời gian đứng ở đầu câu.",
                explainAudio: [
                  { lang: "zh-CN", text: "下课以后，我们去书店买书吧。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt lời rủ rê: Tan học xong chúng mình cùng đi hiệu sách nhé.", pause: 400 }
                ]
              },
              {
                zh: "我们下午四点半下课。",
                vi: "Bọn tôi tan học lúc bốn rưỡi chiều.",
                situation: "Trả lời người nhà về thời gian kết thúc buổi học để bố mẹ tới đón.",
                analysis: "Thời gian cụ thể đứng trước động từ vị ngữ chỉ thời điểm hoàn thành.",
                explainAudio: [
                  { lang: "zh-CN", text: "我们下午四点半下课。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bọn con tan học lúc bốn giờ rưỡi chiều.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy gắn thêm tân ngữ môn học hoặc địa điểm vào sau động từ ly hợp",
                situation: "Người học muốn nói: 'Tan học môn tiếng Trung' hoặc 'Tan học trường học' và ghép trực tiếp danh từ vào sau.",
                explanation: "Vì chữ thứ hai đã là danh từ tiết học, nên tuyệt đối không được nói '下课汉语' hay '下课学校'. Nếu muốn nói môn học, môn học phải làm định ngữ bổ nghĩa cho tiết học hoặc dùng cấu trúc khác.",
                wrong: "我们下课汉语以后去吃饭。(Lỗi ngữ pháp ghép thừa tân ngữ)",
                right: "上完汉语课以后，我们去吃饭。 hoặc 汉语课下课以后，我们去吃饭。",
                tip: "Quy tắc thép: Động từ ly hợp tan học đứng một mình hoặc đi cùng từ chỉ mốc thời gian sau khi, tuyệt đối không cõng thêm môn học phía sau.",
                boundary: "Nếu muốn nói học xong môn gì, dùng động từ học kết hợp bổ ngữ kết quả: 学完 / 上完.",
                checkQuestion: {
                  q: "Cách diễn đạt nào sau đây là chính xác?",
                  options: ["下课以后", "下课汉语课以后"],
                  correct: 0,
                  explain: "Động từ ly hợp không được gắn trực tiếp môn học phía sau."
                },
                audio: [
                  { lang: "vi-VN", text: "Cảnh báo bẫy ngữ pháp: Tuyệt đối không gắn tên môn học như tiếng Trung hay tiếng Anh vào sau từ tan học. Hãy chỉ nói đơn giản là ", pause: 150 },
                  { lang: "zh-CN", text: "下课以后", pause: 200 },
                  { lang: "vi-VN", text: " mà thôi.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Cả hai chữ đều mang thanh bốn dứt khoát. Chữ thứ hai chú ý bật hơi mạnh ở phụ âm đầu.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm hai thanh bốn dứt khoát và bật hơi chuẩn xác:", pause: 200 },
                { lang: "zh-CN", text: "下课", pause: 800 },
                { lang: "zh-CN", text: "下课了", pause: 1000 },
                { lang: "vi-VN", text: "Rất tốt. Hãy nhớ bật hơi mạnh ở chữ thứ hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm nét ngang dài ở trên, nét sổ ngắn và nét chấm ở dưới chỉ hướng đi xuống. Chữ sau gồm bộ Ngôn bên trái và chữ Quả bên phải.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ đầu chỉ hướng đi xuống, kết thúc. Chữ sau có bộ Ngôn vì tiết học là nơi thầy trò dùng lời nói để truyền đạt kiến thức.", pause: 400 }
              ]
            },
            summary: "Động từ ly hợp chỉ việc tan học. Luôn nhớ không mang theo tân ngữ môn học phía sau.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng để báo hiệu hết giờ học hoặc làm mốc thời gian trong cấu trúc tan học xong làm việc gì.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 10: 有名 (yǒumíng)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g2-w10`,
            index: 10,
            hanzi: "有名",
            pinyin: "yǒumíng",
            coreMeaning: "Có tiếng, nổi tiếng (được nhiều người biết đến)",
            introAudio: [
              { lang: "zh-CN", text: "有名", pause: 400 },
              { lang: "vi-VN", text: "Thanh ba đi với thanh hai. Nghĩa là có tiếng hoặc nổi tiếng.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng để miêu tả danh lam thắng cảnh, món ăn ngon, trường đại học lớn hoặc nhân vật được công chúng biết đến rộng rãi.",
              detail: "Bản chất ngữ pháp là một tính từ (hình dung từ). Do đó nó tuân thủ toàn bộ quy tắc của câu vị ngữ hình dung từ trong tiếng Trung.",
              keyPoint: "Vì là tính từ, khi làm vị ngữ trực tiếp phải có phó từ chỉ mức độ đi kèm, KHÔNG dùng động từ 'là'.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "有名", pause: 300 },
                { lang: "vi-VN", text: " là tính từ mang nghĩa nổi tiếng. Vì là tính từ nên khi nói cái gì đó nổi tiếng, ta dùng phó từ chỉ mức độ chứ không dùng động từ là.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Ai / Cái gì rất nổi tiếng",
                pattern: "Chủ ngữ + (很 / 非常) + 有名",
                note: "Dùng phó từ chỉ mức độ đứng trước tính từ, không chèn động từ 'là'.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu miêu tả: Đặt chủ ngữ lên trước, thêm phó từ rất rồi nối trực tiếp với tính từ nổi tiếng.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Người hoặc địa điểm nổi tiếng (Làm định ngữ)",
                pattern: "有名的 + Danh từ (人 / 大学 / 地方 / 饭馆)",
                note: "Đứng trước danh từ để bổ nghĩa, kết nối bằng trợ từ kết cấu.",
                audio: [
                  { lang: "vi-VN", text: "Khi muốn nói một trường học nổi tiếng hay một quán ăn nổi tiếng, đặt từ này trước trợ từ sở hữu và danh từ trung tâm.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "这个大学在中国很有名。",
                vi: "Trường đại học này rất nổi tiếng ở Trung Quốc.",
                situation: "Giới thiệu về vị thế danh tiếng của một trường đại học danh giá.",
                analysis: "Tính từ làm vị ngữ chính tiếp nhận phó từ mức độ và cụm giới từ chỉ phạm vi.",
                explainAudio: [
                  { lang: "zh-CN", text: "这个大学在中国很有名。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Ngôi trường đại học này rất nổi tiếng ở đất nước Trung Quốc.", pause: 400 }
                ]
              },
              {
                zh: "北京烤鸭是一道很有名的中国菜。",
                vi: "Vịt quay Bắc Kinh là một món ăn Trung Quốc rất nổi tiếng.",
                situation: "Giới thiệu tinh hoa ẩm thực cho khách du lịch lần đầu đến Bắc Kinh.",
                analysis: "Cụm tính từ làm định ngữ bổ nghĩa cho món ăn Trung Quốc.",
                explainAudio: [
                  { lang: "zh-CN", text: "北京烤鸭是一道很有名的中国菜。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Vịt quay Bắc Kinh là một món ăn Trung Hoa vô cùng nổi tiếng.", pause: 400 }
                ]
              },
              {
                zh: "他是一个非常有名的医生。",
                vi: "Ông ấy là một bác sĩ hết sức nổi tiếng.",
                situation: "Khen ngợi tay nghề và danh tiếng của vị bác sĩ trưởng khoa.",
                analysis: "Làm định ngữ bổ nghĩa cho danh từ chỉ nghề nghiệp.",
                explainAudio: [
                  { lang: "zh-CN", text: "他是一个非常有名的医生。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bác ấy là một vị bác sĩ cực kỳ có tiếng tăm.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy dùng động từ 'là' đứng trước tính từ theo lối tư duy tiếng Việt",
                situation: "Người Việt muốn nói: 'Trường học này là nổi tiếng' và viết thành '这个学校是有名'.",
                explanation: "Tiếng Trung không dùng động từ 'là' đứng trước tính từ đơn thuần để miêu tả đặc điểm. Phải dùng phó từ chỉ mức độ như 'rất'. Chỉ dùng 'là' khi phía sau có danh từ trung tâm.",
                wrong: "这个地方是很有名。(Thừa động từ là khi không có danh từ phía sau)",
                right: "这个地方很有名。 hoặc 这是个很有名的地方。",
                tip: "Quy tắc phân biệt: Nếu câu kết thúc bằng chữ 'nổi tiếng', dùng '很 + 有名'; nếu phía sau còn danh từ như 'nơi nổi tiếng', mới được dùng '是 + 有名的 + Nơi'.",
                boundary: "Dạng câu nhấn mạnh '是...的' có thể dùng nhưng mang sắc thái khẳng định mạnh mẽ một sự thật đã biết.",
                checkQuestion: {
                  q: "Câu nào dưới đây đúng chuẩn ngữ pháp miêu tả tính chất?",
                  options: ["这家饭馆很有名。", "这家饭馆是有名。"],
                  correct: 0,
                  explain: "Tính từ làm vị ngữ phải đi cùng phó từ chỉ mức độ, không dùng động từ là đứng trơ trọi."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân tích bẫy vị ngữ tính từ: Người Việt rất hay chèn chữ 'là' vào trước tính từ. Hãy nhớ rằng trong tiếng Trung, ta nói trực tiếp là ", pause: 150 },
                  { lang: "zh-CN", text: "很有名", pause: 200 },
                  { lang: "vi-VN", text: ", tuyệt đối không nói '是有名'.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh ba, chữ sau là thanh hai. Xuống giọng sâu ở chữ đầu rồi vuốt cao giọng ở chữ sau.",
              audio: [
                { lang: "vi-VN", text: "Nghe và luyện theo nhịp thanh ba đi cùng thanh hai:", pause: 200 },
                { lang: "zh-CN", text: "有名", pause: 800 },
                { lang: "zh-CN", text: "很有名", pause: 1000 },
                { lang: "vi-VN", text: "Chú ý chuyển tiếp cao độ mượt mà giữa hai thanh.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm nét ngang, nét phẩy và bộ Nguyệt ở dưới. Chữ sau gồm bộ Tịch ở trên và bộ Khẩu ở dưới.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ đầu có nghĩa là có. Chữ sau gồm vầng trăng buổi tối và cái miệng xướng tên gọi nhau, ghép lại là có tên tuổi danh tiếng.", pause: 400 }
              ]
            },
            summary: "Tính từ chỉ sự nổi tiếng. Nhớ quy tắc không dùng động từ là khi nó đứng làm vị ngữ miêu tả.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Luôn nói ", pause: 150 },
              { lang: "zh-CN", text: "很有名", pause: 200 },
              { lang: "vi-VN", text: " khi miêu tả danh lam thắng cảnh, quán ăn ngon hoặc người có tên tuổi.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 11: 大学 (dàxué)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g2-w11`,
            index: 11,
            hanzi: "大学",
            pinyin: "dàxué",
            coreMeaning: "Đại học, trường đại học (bậc giáo dục đại học)",
            introAudio: [
              { lang: "zh-CN", text: "大学", pause: 400 },
              { lang: "vi-VN", text: "Thanh bốn đi với thanh hai. Nghĩa là trường đại học hoặc bậc học đại học.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi nói về cơ sở đào tạo đại học, thời kỳ sinh viên hoặc kết hợp thành tên gọi các trường đại học cụ thể.",
              detail: "Là một danh từ chỉ địa điểm hoặc tổ chức giáo dục. Thường kết hợp với các động từ như học đại học, thi đại học, hoặc làm định ngữ cho danh từ sinh viên.",
              keyPoint: "Học đại học trong khẩu ngữ dùng động từ 'thượng' đứng trước, không dùng động từ 'học'.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "大学", pause: 300 },
                { lang: "vi-VN", text: " là danh từ chỉ trường đại học. Khi nói học đại học, người Trung Quốc dùng cụm từ đi học đại học với động từ thượng.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Học đại học (Hành vi đi học bậc đại học)",
                pattern: "Chủ ngữ + 上大学",
                note: "Dùng động từ đi học đứng trước danh từ đại học để biểu thị việc theo học.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu nói về việc học đại học: Đặt động từ ", pause: 150 },
                  { lang: "zh-CN", text: "上", pause: 200 },
                  { lang: "vi-VN", text: " trước danh từ đại học.", pause: 300 }
                ]
              },
              {
                title: "Khung 2: Tên trường đại học cụ thể",
                pattern: "Tên địa danh / Đặc trưng + 大学",
                note: "Tên riêng đứng trước, danh từ trường đại học đứng sau cùng.",
                audio: [
                  { lang: "vi-VN", text: "Khi gọi tên một trường đại học, đặt tên địa danh ở trước rồi thêm danh từ đại học ở phía sau.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "我哥哥在北京的一所大学读书。",
                vi: "Anh trai tôi đang học tại một trường đại học ở Bắc Kinh.",
                situation: "Kể về việc học tập của anh trai nơi phương xa.",
                analysis: "Sử dụng lượng từ chuẩn của trường học kết hợp với cụm động từ đi học.",
                explainAudio: [
                  { lang: "zh-CN", text: "我哥哥在北京的一所大学读书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Anh trai tôi đang theo học tại một trường đại học ở Bắc Kinh.", pause: 400 }
                ]
              },
              {
                zh: "你打算去哪个大学上学？",
                vi: "Bạn dự định sẽ đi học ở trường đại học nào?",
                situation: "Hỏi thăm định hướng chọn trường của bạn học cấp ba.",
                analysis: "Đại từ nghi vấn nào kết hợp lượng từ đứng trước danh từ đại học.",
                explainAudio: [
                  { lang: "zh-CN", text: "你打算去哪个大学上学？", pause: 800 },
                  { lang: "vi-VN", text: "Câu này dùng để hỏi thăm bạn bè: Bạn dự tính sẽ vào trường đại học nào?", pause: 400 }
                ]
              },
              {
                zh: "大学里有很多外国留学生。",
                vi: "Trong trường đại học có rất nhiều du học sinh nước ngoài.",
                situation: "Miêu tả môi trường học tập đa văn hóa tại khuôn viên trường.",
                analysis: "Thêm từ chỉ phương vị bên trong vào sau danh từ để biến thành từ chỉ nơi chốn.",
                explainAudio: [
                  { lang: "zh-CN", text: "大学里有很多外国留学生。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Trong khuôn viên trường đại học có rất nhiều lưu học sinh ngoại quốc.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy dịch từng chữ 'học đại học' thành '学大学'",
                situation: "Người Việt muốn nói: 'Tôi đang học đại học' và ghép động từ học với danh từ đại học.",
                explanation: "Động từ 'học' trong tiếng Trung dùng cho môn học cụ thể như học tiếng Trung, học toán. Khi nói về việc đi học ở một bậc học như tiểu học, trung học, đại học, bắt buộc phải dùng động từ 'thượng' hoặc cụm động từ 'đọc sách'.",
                wrong: "我学大学。(Sai ngữ pháp hoàn toàn)",
                right: "我上大学。 hoặc 我在大学读书。",
                tip: "Khắc cốt ghi tâm: Cứ đến trường theo học một cấp bậc nào đó thì dùng '上' (ví dụ: 上学, 上大学).",
                boundary: "Chỉ khi nghiên cứu về một cuốn sách kinh điển mang tên Đại Học trong Nho gia thì mới dùng động từ đọc nghiên cứu.",
                checkQuestion: {
                  q: "Cách nói chuẩn xác câu 'Em gái tôi đang học đại học' là:",
                  options: ["我妹妹在上大学。", "我妹妹在学大学。"],
                  correct: 0,
                  explain: "Bậc học đại học bắt buộc kết hợp với động từ 上 để chỉ việc theo học."
                },
                audio: [
                  { lang: "vi-VN", text: "Cảnh báo lỗi dịch máy móc: Người Việt rất hay nói nhầm là học đại học bằng động từ học. Trong tiếng Trung, bắt buộc phải nói là ", pause: 150 },
                  { lang: "zh-CN", text: "上大学", pause: 250 },
                  { lang: "vi-VN", text: ", tuyệt đối không ghép từ học với từ đại học.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh bốn dứt khoát. Chữ sau là thanh hai vuốt lên cao. Chú ý vận mẫu kết thúc tròn vành.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh bốn kết hợp thanh hai:", pause: 200 },
                { lang: "zh-CN", text: "大学", pause: 800 },
                { lang: "zh-CN", text: "大学生", pause: 1000 },
                { lang: "vi-VN", text: "Giữ chuẩn sức rơi của âm đầu và độ vuốt cao của âm sau.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu là nét ngang, nét phẩy và nét mác bung rộng. Chữ sau gồm ba nét chấm phẩy ở trên, nét bao bên dưới và chữ Tử ở trong cùng.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ đầu hình tượng người giang rộng hai tay hai chân là lớn. Chữ sau là chữ học quen thuộc trong học tập.", pause: 400 }
              ]
            },
            summary: "Danh từ chỉ trường đại học hoặc bậc học. Ghi nhớ cụm từ đi học đại học luôn đi cùng động từ thượng.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Luôn nhớ cụm từ ", pause: 150 },
              { lang: "zh-CN", text: "上大学", pause: 200 },
              { lang: "vi-VN", text: " để diễn đạt việc đang theo học tại trường đại học.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 12: 这里 (zhèlǐ)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g2-w12`,
            index: 12,
            hanzi: "这里",
            pinyin: "zhèlǐ",
            coreMeaning: "Ở đây, nơi này, chỗ này (khoảng cách gần người nói)",
            introAudio: [
              { lang: "zh-CN", text: "这里", pause: 400 },
              { lang: "vi-VN", text: "Thanh bốn đi với thanh ba. Nghĩa là ở đây, nơi này, chỗ này.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng để chỉ vị trí, địa điểm hoặc không gian mà người nói đang có mặt hoặc ở khoảng cách rất gần.",
              detail: "Là đại từ chỉ định nơi chốn. Khác với đại từ chỉ thị đơn thuần chỉ đồ vật, từ này bản thân nó đã là một danh từ chỉ địa điểm hoàn chỉnh.",
              keyPoint: "Bản thân từ này đã chứa nghĩa nơi chốn, có thể đứng sau giới từ ở để tạo thành trạng ngữ địa điểm.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "这里", pause: 300 },
                { lang: "vi-VN", text: " là đại từ chỉ nơi chốn mang nghĩa là ở đây, chỗ này. Dùng khi địa điểm ở ngay sát cạnh người nói.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Làm gì tại nơi này",
                pattern: "在 + 这里 + Động từ + Tân ngữ",
                note: "Cụm giới từ chỉ địa điểm đứng trước động từ chỉ hành động.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu làm gì ở đây: Đặt giới từ ở kết hợp với từ này ở trước, sau đó mới tới hành động chính.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Nơi này có sự vật gì (Câu tồn hiện)",
                pattern: "这里 + 有 / 没有 + Danh từ",
                note: "Đại từ nơi chốn làm chủ ngữ biểu thị sự tồn tại hoặc sở hữu của không gian.",
                audio: [
                  { lang: "vi-VN", text: "Muốn nói ở đây có hoặc không có cái gì, đặt từ này ở đầu câu rồi nối với động từ có.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "我们在这里学汉语。",
                vi: "Chúng tôi học tiếng Trung ở đây.",
                situation: "Nói với người lạ về địa điểm học tập của cả nhóm.",
                analysis: "Cụm trạng ngữ chỉ địa điểm đứng trước động từ học tiếng Trung.",
                explainAudio: [
                  { lang: "zh-CN", text: "我们在这里学汉语。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bọn tôi học tiếng Hán ở tại nơi này.", pause: 400 }
                ]
              },
              {
                zh: "这里的天气非常好。",
                vi: "Thời tiết ở đây rất đẹp.",
                situation: "Khen ngợi khí hậu khi vừa đặt chân đến thành phố du lịch.",
                analysis: "Đại từ nơi chốn làm định ngữ bổ nghĩa cho danh từ thời tiết.",
                explainAudio: [
                  { lang: "zh-CN", text: "这里的天气非常好。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này khen ngợi: Thời tiết ở chốn này vô cùng dễ chịu và đẹp đẽ.", pause: 400 }
                ]
              },
              {
                zh: "请问，这里有人吗？",
                vi: "Xin hỏi, chỗ này đã có ai ngồi chưa?",
                situation: "Lịch sự hỏi người bên cạnh trước khi ngồi vào chiếc ghế trống trong thư viện.",
                analysis: "Câu hỏi tồn hiện lịch sự dùng từ xin hỏi ở đầu câu.",
                explainAudio: [
                  { lang: "zh-CN", text: "请问，这里有人吗？", pause: 800 },
                  { lang: "vi-VN", text: "Câu này dùng để hỏi thăm lịch thiệp: Xin hỏi, chỗ này có người ngồi chưa ạ?", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy nhầm lẫn giữa đại từ chỉ thị đồ vật 这 và đại từ nơi chốn 这里",
                situation: "Người học muốn nói: 'Tôi ở đây đợi bạn' nhưng lại nói thành '我在这等你' mà không biết đó là khẩu ngữ uốn lưỡi, hoặc nhầm lẫn viết thiếu chữ chỉ nơi chốn.",
                explanation: "Chữ đầu đơn độc là đại từ chỉ thị 'này', thường đi trước lượng từ (ví dụ: người này, sách này). Muốn chỉ địa điểm 'ở đây', bắt buộc phải dùng dạng hai chữ hoặc thêm âm uốn lưỡi phương bắc. Không thể dùng chữ đơn độc làm trạng ngữ nơi chốn trong văn viết chuẩn mực.",
                wrong: "我在这等你。(Nếu không phát âm uốn lưỡi thì câu bị thiếu yếu tố nơi chốn)",
                right: "我在这里等你。 hoặc 我在这儿等你。",
                tip: "Quy tắc an toàn: Cứ nói về địa điểm nơi chốn, hãy dùng trọn vẹn hai chữ để đảm bảo chuẩn xác ở mọi miền Trung Quốc.",
                boundary: "Dạng uốn lưỡi phổ biến ở Bắc Kinh, trong khi dạng hai chữ này phổ biến và chuẩn mực trên toàn quốc và văn bản.",
                checkQuestion: {
                  q: "Điền từ thích hợp: '请在 (___) 写你的名字。'",
                  options: ["这里", "这"],
                  correct: 0,
                  explain: "Sau giới từ chỉ địa điểm bắt buộc phải là một danh từ nơi chốn hoàn chỉnh."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt đại từ nơi chốn: Hãy phân biệt rõ chữ chỉ thị 'này' và từ chỉ địa điểm 'ở đây'. Khi nói về địa điểm, hãy luôn dùng trọn vẹn dạng hai chữ ", pause: 150 },
                  { lang: "zh-CN", text: "这里", pause: 200 },
                  { lang: "vi-VN", text: " để câu văn luôn rõ ràng và chuẩn mực nhất.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh bốn dứt khoát. Chữ sau là thanh ba trầm và sâu. Không đọc lướt quá nhanh làm mất thanh điệu.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh bốn kết hợp thanh ba:", pause: 200 },
                { lang: "zh-CN", text: "这里", pause: 800 },
                { lang: "zh-CN", text: "来这里", pause: 1000 },
                { lang: "vi-VN", text: "Rất tốt. Chú ý độ trầm của âm thứ hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm chữ Văn ở trong và bộ Quai xước ở ngoài. Chữ sau gồm bộ Điền ở trên và bộ Thổ ở dưới.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ sau là chữ lý, phía trên là ruộng đất, phía dưới là đất đai, biểu thị rõ địa điểm nơi chốn.", pause: 400 }
              ]
            },
            summary: "Đại từ chỉ nơi chốn ở cự ly gần người nói. Thường kết hợp với giới từ ở làm trạng ngữ địa điểm.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi muốn nói 'ở đây' hoặc 'chỗ này'. Luôn đặt trạng ngữ nơi chốn trước hành động chính.", pause: 350 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // BÀI TẬP TRẮC NGHIỆM & NGHE HIỂU NHÓM 2
        // ---------------------------------------------------------------------
        exercises: [
          {
            id: `${LESSON_ID}-g2-ex1`,
            type: "Trắc nghiệm cấu trúc song hành",
            prompt: "Chọn câu có trật tự từ đúng nhất để diễn đạt: 'Anh ấy vừa nghe nhạc vừa đọc sách.'",
            options: [
              "他一边听音乐一边看书。",
              "他听音乐一边看书一边。",
              "他一边听音乐看书一边。",
              "他一边听音乐看书。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Cấu trúc bắt buộc là 一边 + Hành động 1 + 一边 + Hành động 2.",
            reasonWrong: "Chưa đúng. Liên từ chỉ sự song hành phải đứng trước cả hai động từ.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 1: Đâu là trật tự từ chuẩn xác của câu diễn đạt vừa nghe nhạc vừa đọc sách?", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 1: Trong tiếng Trung, cấu trúc song hành chuẩn bắt buộc phải lặp lại liên từ trước từng hành động cụ thể.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g2-ex2`,
            type: "Sửa lỗi động từ ly hợp",
            prompt: "Tìm câu diễn đạt chuẩn xác và tự nhiên nhất về việc tan học:",
            options: [
              "下午四点下课以后，我们去踢足球。",
              "下午四点下课汉语以后，我们去踢足球。",
              "下午四点下课学校以后，我们去踢足球。",
              "下午四点在下课以后，我们去踢足球。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Động từ ly hợp 下课 đứng độc lập, không ghép thêm môn học hoặc trường học.",
            reasonWrong: "Chưa đúng. Tuyệt đối không nhét thêm danh từ môn học hoặc trường học vào sau động từ ly hợp này.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 2: Chọn câu dùng đúng động từ ly hợp tan học.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 2: Động từ ly hợp này đã mang sẵn yếu tố tiết học bên trong, chỉ cần kết hợp với từ chỉ sau khi làm mốc thời gian.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g2-ex3`,
            type: "Phân biệt vị ngữ tính từ",
            prompt: "Chọn câu diễn đạt đúng: 'Trường đại học này rất nổi tiếng.'",
            options: [
              "这个大学很有名。",
              "这个大学是有名。",
              "这个大学是非常有名大学。",
              "这个大学是有名的。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Tính từ làm vị ngữ trực tiếp phải đi cùng phó từ mức độ, không dùng động từ 'là'.",
            reasonWrong: "Chưa đúng. Tiếng Trung không dùng động từ 'là' đứng trơ trọi trước tính từ miêu tả đặc điểm.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 3: Cách nói nào chuẩn xác khi khen một trường đại học rất nổi tiếng?", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 3: Trong câu vị ngữ tính từ, ta dùng phó từ chỉ mức độ kết hợp trực tiếp với tính từ, không thêm động từ là.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g2-ex4`,
            type: "Phân biệt đại từ chỉ thị và nơi chốn",
            prompt: "Điền từ thích hợp vào chỗ trống: '王老师在 (___) 工作，他是大学老师。'",
            options: ["这里", "这", "哪", "什么"],
            correct: 0,
            reasonRight: "Chính xác! Sau giới từ 在 bắt buộc phải là một đại từ nơi chốn hoàn chỉnh.",
            reasonWrong: "Chưa đúng. Chữ thứ hai chỉ là đại từ chỉ thị, không thể đứng độc lập làm nơi chốn sau giới từ.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 4: Điền từ thích hợp vào chỗ trống sau giới từ chỉ địa điểm.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 4: Sau giới từ chỉ địa điểm, bắt buộc phải dùng đại từ chỉ nơi chốn hoàn chỉnh là ", pause: 150 },
              { lang: "zh-CN", text: "这里", pause: 250 }
            ]
          },
          {
            id: `${LESSON_ID}-g2-ex5`,
            type: "Nghe hiểu phản xạ",
            isListening: true,
            prompt: "Nghe đoạn ghi âm và chọn thông tin đúng nhất về kế hoạch sau giờ học:",
            options: [
              "Họ sẽ đến một quán ăn rất nổi tiếng ở gần trường.",
              "Họ sẽ ở lại trường đại học để học bài.",
              "Họ sẽ đi mua xe ô tô mới.",
              "Họ sẽ về nhà ngay lập tức."
            ],
            correct: 0,
            reasonRight: "Chính xác! Đoạn hội thoại hẹn nhau sau khi tan học sẽ tới quán ăn nổi tiếng ăn cơm.",
            reasonWrong: "Chưa đúng. Hãy chú ý nghe kỹ cụm từ tan học xong và địa điểm quán ăn nổi tiếng.",
            transcript: "同学们，下课以后，我们去学校旁边的一家饭馆吃饭吧，那里的中国菜真的很有名！",
            questionAudio: [
              { lang: "zh-CN", text: "同学们，下课以后，我们去学校旁边的一家饭馆吃饭吧，那里的中国菜真的很有名！", pause: 800 },
              { lang: "vi-VN", text: "Hãy chọn thông tin đúng nhất về kế hoạch sau khi tan học.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Bản chép lời có đoạn: Tan học xong chúng mình đến quán ăn cạnh trường ăn cơm nhé, món Trung Quốc ở đó thực sự rất nổi tiếng! Đáp án chuẩn xác là họ sẽ tới quán ăn nổi tiếng gần trường.", pause: 450 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // NHIỆM VỤ TỰ DÙNG TỪ THỰC TẾ (3 TẦNG TRỢ GIÚP) NHÓM 2
        // ---------------------------------------------------------------------
        selfUse: [
          {
            id: `${LESSON_ID}-g2-su1`,
            situation: "Tình huống: Bạn muốn chia sẻ thói quen học tập của mình với bạn cùng lớp: 'Sau khi tan học, tôi thích vừa uống trà vừa nói chuyện với bạn bè ở đây.'",
            hint1: "Xác định thời gian ở đầu câu: 'Sau khi tan học', sau đó dùng cụm 'ở đây' trước cấu trúc song hành 'vừa... vừa...'.",
            hint2: "Khung câu gợi ý: 下课以后，我喜欢在这里 + 一边喝茶 + 一边和朋友聊天。",
            modelAnswer: "下课以后，我喜欢在这里一边喝茶一边跟朋友聊天。",
            modelExplain: "Kết hợp mốc thời gian tan học ở đầu câu, trạng ngữ nơi chốn 'ở đây', và cấu trúc song hành hai hành động uống trà và trò chuyện.",
            questionAudio: [
              { lang: "vi-VN", text: "Nhiệm vụ 1: Hãy tự nói câu: Sau khi tan học, tôi thích vừa uống trà vừa trò chuyện cùng bạn bè ở đây.", pause: 300 }
            ],
            hint1Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 1: Đặt cụm từ tan học xong lên trước, nêu rõ địa điểm ở đây rồi mới tới hai hành động song song.", pause: 300 }
            ],
            hint2Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 2: Khung câu gồm tan học sau đó, tôi thích ở nơi này, vừa uống trà vừa cùng bạn bè nói chuyện.", pause: 300 }
            ],
            modelAudio: [
              { lang: "zh-CN", text: "下课以后，我喜欢在这里一边喝茶一边跟朋友聊天。", pause: 800 },
              { lang: "vi-VN", text: "Câu mẫu hoàn chỉnh: Sau khi tan học, tôi thích ở đây vừa uống trà vừa trò chuyện cùng bạn bè.", pause: 300 }
            ]
          },
          {
            id: `${LESSON_ID}-g2-su2`,
            situation: "Tình huống: Bạn gặp một người quen và muốn giới thiệu đầy tự hào: 'Trường đại học của tôi thực sự rất nổi tiếng ở thành phố này.'",
            hint1: "Chủ ngữ là 'trường đại học của tôi'. Dùng phó từ 'thực sự' kết hợp với tính từ 'rất nổi tiếng' và cụm giới từ chỉ phạm vi.",
            hint2: "Khung câu gợi ý: 我的大学 + 在这个城市 + 真的很有名。",
            modelAnswer: "我的大学在这个城市真的很有名。",
            modelExplain: "Chủ ngữ danh từ đại học đi cùng cụm giới từ phạm vi và vị ngữ tính từ được tăng cường bởi phó từ xác thực.",
            questionAudio: [
              { lang: "vi-VN", text: "Nhiệm vụ 2: Hãy tự diễn đạt câu: Trường đại học của tôi thực sự rất nổi tiếng ở thành phố này.", pause: 300 }
            ],
            hint1Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 1: Nêu trường đại học lên làm chủ ngữ, sau đó dùng từ thật sự đứng trước từ rất nổi tiếng.", pause: 300 }
            ],
            hint2Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 2: Khung câu gồm trường đại học của tôi, ở thành phố này, thật sự rất nổi tiếng.", pause: 300 }
            ],
            modelAudio: [
              { lang: "zh-CN", text: "我的大学在这个城市真的很有名。", pause: 800 },
              { lang: "vi-VN", text: "Câu mẫu hoàn chỉnh: Trường đại học của tôi ở thành phố này thực sự rất có tiếng tăm.", pause: 300 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // ÔN TẬP NGẮT QUÃNG 1 - 3 - 7 NGÀY NHÓM 2
        // ---------------------------------------------------------------------
        reviews: [
          {
            id: `${LESSON_ID}-g2-rev1`,
            day: 1,
            type: "Nhớ cấu trúc song hành",
            q: "Để diễn đạt hai hành động vừa làm việc này vừa làm việc kia diễn ra cùng lúc, bạn dùng cấu trúc ngữ pháp nào?",
            answer: "Cấu trúc: 一边 + Động từ 1 + 一边 + Động từ 2 (Ví dụ: 一边听一边写)",
            explain: "Luôn ghi nhớ liên từ phải đứng trước từng động từ để tạo nên thế song hành cân đối.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 1: Hãy nhắc lại cấu trúc vừa làm việc này vừa làm việc kia trong tiếng Trung.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Cấu trúc ngày 1 là liên từ đứng trước từng hành vi:", pause: 150 },
              { lang: "zh-CN", text: "一边听音乐，一边看书", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g2-rev2`,
            day: 3,
            type: "Khắc phục bẫy ngữ pháp",
            q: "Tại sao nói '我在学大学' là sai ngữ pháp? Cách nói đúng chuẩn mực là gì?",
            answer: "Vì bậc học đại học không kết hợp với động từ 'học'. Phải dùng động từ 'thượng' thành cụm: 上大学 hoặc 在大学读书.",
            explain: "Động từ 'học' dùng cho môn học cụ thể; theo học ở một bậc học bắt buộc dùng động từ 上.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 3: Hãy giải thích lỗi sai của câu học đại học và nêu cách sửa chuẩn mực.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Giải thích ngày 3: Theo học ở bậc đại học bắt buộc phải dùng động từ thượng:", pause: 150 },
              { lang: "zh-CN", text: "上大学", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g2-rev3`,
            day: 7,
            type: "Vận dụng ngữ cảnh giao tiếp",
            q: "Dịch câu sau sang tiếng Trung: 'Thầy giáo nói sau khi tan học có thể đến đây tìm thầy, trường đại học này thật sự rất lớn.'",
            answer: "老师说下课以后可以来这里找他，这个大学真的很大。",
            explain: "Kết hợp nhuần nhuyễn động từ ly hợp tan học, đại từ nơi chốn ở đây, phó từ xác thực và danh từ đại học.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 7: Thử thách dịch câu tổng hợp kết nối các từ vựng của nhóm 2.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Câu hoàn chỉnh mốc 7 ngày là:", pause: 150 },
              { lang: "zh-CN", text: "老师说下课以后可以来这里找他，这个大学真的很大。", pause: 800 }
            ]
          }
        ]
      },
      // [Phần tiếp theo: Nhóm 3 (Từ 13 đến 18) và Nhóm 4 (Từ 19 đến 24) sẽ được bổ sung ở lượt tiếp theo]
      // =======================================================================
      // NHÓM 3: THỜI GIAN, XÃ HỘI, THẨM MỸ & GIA ĐÌNH (TỪ 13 - 18)
      // =======================================================================
      {
        id: `${LESSON_ID}-g3`,
        title: "Nhóm 3: Thời Gian, Xã Hội, Thẩm Mỹ & Gia Đình",
        desc: "Làm chủ từ chỉ tần suất 有时候, mốc thời gian 后天, danh từ 国家, địa điểm 书店, tính từ đa ngữ cảnh 好看 và danh từ xưng hô 爸.",
        words: [
          // -------------------------------------------------------------------
          // TỪ 13: 有时候 (yǒushíhou)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g3-w13`,
            index: 13,
            hanzi: "有时候",
            pinyin: "yǒushíhou",
            coreMeaning: "Có lúc, có khi, thỉnh thoảng (tần suất không cố định)",
            introAudio: [
              { lang: "zh-CN", text: "有时候", pause: 400 },
              { lang: "vi-VN", text: "Nghĩa là có lúc, có khi hoặc thỉnh thoảng, biểu thị tần suất hành động.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi bạn muốn miêu tả một thói quen hoặc sự việc thỉnh thoảng mới diễn ra, không xảy ra liên tục mỗi ngày.",
              detail: "Bản chất là một cụm từ chỉ thời gian hoặc phó từ chỉ tần suất. Có thể đứng ở đầu câu làm trạng ngữ hoặc đứng ngay sau chủ ngữ trước động từ vị ngữ.",
              keyPoint: "Thường dùng lặp lại hai vế để miêu tả hai trạng thái hoặc hai hành vi xen kẽ: có lúc thế này, có lúc thế kia.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "有时候", pause: 300 },
                { lang: "vi-VN", text: " có nghĩa là có lúc hoặc thỉnh thoảng. Từ này giúp bạn kể về những việc không diễn ra đều đặn hàng ngày.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Thỉnh thoảng làm một việc gì đó",
                pattern: "Chủ ngữ + 有时候 + Động từ + Tân ngữ",
                note: "Đứng trước động từ vị ngữ để bổ nghĩa cho tần suất thực hiện hành vi.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu kể thói quen: Đặt chủ ngữ lên đầu, tiếp theo là từ chỉ thỉnh thoảng, rồi nối liền với hành động vị ngữ.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Xen kẽ hai trạng thái (Có lúc... có lúc...)",
                pattern: "有时候 + Trạng thái 1 + ，有时候 + Trạng thái 2",
                note: "Dùng để biểu đạt sự thay đổi luân phiên của thời tiết, tâm trạng hoặc hoạt động.",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc có lúc này có lúc khác: Lặp lại từ này ở hai phân câu để biểu thị hai trạng thái đan xen.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "周末我有时候去书店买书。",
                vi: "Cuối tuần tôi thỉnh thoảng đi hiệu sách mua sách.",
                situation: "Kể về hoạt động giải trí không cố định vào ngày nghỉ cuối tuần.",
                analysis: "Từ chỉ tần suất đứng giữa chủ ngữ tôi và cụm động từ đi hiệu sách.",
                explainAudio: [
                  { lang: "zh-CN", text: "周末我有时候去书店买书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Vào dịp cuối tuần, tôi thỉnh thoảng đến hiệu sách mua sách.", pause: 400 }
                ]
              },
              {
                zh: "这里的春天，有时候冷，有时候热。",
                vi: "Mùa xuân ở đây, có lúc lạnh, có lúc nóng.",
                situation: "Miêu tả sự thất thường của thời tiết giao mùa cho bạn bè chuẩn bị áo ấm.",
                analysis: "Sử dụng cấu trúc hai vế song hành miêu tả hai trạng thái thời tiết đối lập.",
                explainAudio: [
                  { lang: "zh-CN", text: "这里的春天，有时候冷，有时候热。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Tiết trời mùa xuân ở đây có lúc thì lạnh, có lúc lại nóng.", pause: 400 }
                ]
              },
              {
                zh: "爸爸工作很忙，有时候不回家吃晚饭。",
                vi: "Bố làm việc rất bận rộn, có khi không về nhà ăn cơm tối.",
                situation: "Kể về lịch trình công việc vất vả và thất thường của người cha.",
                analysis: "Từ chỉ tần suất đứng trước cụm vị ngữ phủ định.",
                explainAudio: [
                  { lang: "zh-CN", text: "爸爸工作很忙，有时候不回家吃晚饭。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bố công việc bận lắm, thỉnh thoảng không về ăn cơm tối cùng gia đình.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy nhầm lẫn giữa 有时候 (thỉnh thoảng) và 的时候 (khi, lúc đang làm gì)",
                situation: "Người học muốn nói: 'Lúc tôi ăn cơm thì không xem điện thoại' nhưng lại dùng từ 'có lúc'.",
                explanation: "Cụm '有时候' mang nghĩa là thỉnh thoảng, có khi (chỉ tần suất). Còn '...的时候' là định ngữ thời gian mang nghĩa 'khi / vào lúc đang diễn ra một việc cụ thể'.",
                wrong: "我有时候吃饭不看手机。(Sai nghĩa: biến thành 'Tôi thỉnh thoảng ăn cơm mà không xem điện thoại')",
                right: "我吃饭的时候不看手机。(Đúng nghĩa: Lúc tôi ăn cơm thì tôi không xem điện thoại)",
                tip: "Mẹo phân biệt: Đứng trước động từ là 'thỉnh thoảng' (有时候); đứng sau động từ tạo thành mệnh đề là 'khi/lúc' (...的时候).",
                boundary: "Cả hai từ đều có thể dùng trong cùng một câu nếu đúng logic: 我吃饭的时候，有时候喝茶 (Lúc ăn cơm, có lúc tôi uống trà).",
                comparisons: [
                  { zh: "有时候学习", vi: "Thỉnh thoảng học bài (Chỉ tần suất học)" },
                  { zh: "学习的时候", vi: "Khi đang học bài (Chỉ thời điểm diễn ra hành động học)" }
                ],
                checkQuestion: {
                  q: "Điền vào chỗ trống để nói 'Khi học tiếng Trung, tôi rất chăm chỉ': '我学汉语 (___) 很努力。'",
                  options: ["的时候", "有时候"],
                  correct: 0,
                  explain: "Đứng sau cụm động từ học tiếng Trung để chỉ thời điểm thì bắt buộc dùng cấu trúc 的时候."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt bẫy ngữ pháp then chốt: Đừng nhầm lẫn giữa ", pause: 150 },
                  { lang: "zh-CN", text: "有时候", pause: 200 },
                  { lang: "vi-VN", text: " và ", pause: 150 },
                  { lang: "zh-CN", text: "的时候", pause: 200 },
                  { lang: "vi-VN", text: ". Từ đứng trước động từ chỉ tần suất thỉnh thoảng, còn cấu trúc đứng sau hành động dùng để chỉ thời điểm khi đang làm việc gì.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu đọc thanh ba. Chữ giữa đọc thanh hai vuốt lên. Chữ cuối đọc thanh nhẹ lướt thật êm.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn ba âm tiết với thanh nhẹ ở đuôi:", pause: 200 },
                { lang: "zh-CN", text: "有时候", pause: 800 },
                { lang: "zh-CN", text: "有时候去", pause: 1000 },
                { lang: "vi-VN", text: "Đọc âm đuôi thật gọn gàng và nhẹ nhàng.", pause: 300 }
              ]
            },
            write: {
              desc: "Gồm ba chữ: Chữ đầu có bộ Nguyệt ở dưới; chữ giữa có bộ Nhật chỉ mặt trời và chữ Thốn chỉ khoảng cách; chữ cuối gồm bộ Nhân đứng và chữ Hậu.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ ở giữa có hình mặt trời chỉ thời gian, kết hợp với chữ đầu là có, chữ cuối là khí hậu thời khắc, tạo thành ý nghĩa có lúc có khi.", pause: 400 }
              ]
            },
            summary: "Cụm từ chỉ tần suất thỉnh thoảng. Nhớ phân biệt vị trí trước động từ so với mệnh đề thời gian sau động từ.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Đặt trước hành động để nói thỉnh thoảng làm gì, hoặc dùng lặp hai lần để miêu tả hai trạng thái có lúc thế này có lúc thế khác.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 14: 后天 (hòutiān)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g3-w14`,
            index: 14,
            hanzi: "后天",
            pinyin: "hòutiān",
            coreMeaning: "Ngày mốt, ngày kia (ngày sau ngày mai)",
            introAudio: [
              { lang: "zh-CN", text: "后天", pause: 400 },
              { lang: "vi-VN", text: "Thanh bốn đi với thanh một. Nghĩa là ngày mốt hoặc ngày kia.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng để ấn định lịch hẹn, thời hạn nộp bài, hoặc kế hoạch di chuyển trong tương lai gần cách ngày hôm nay hai ngày.",
              detail: "Bản chất là danh từ chỉ mốc thời gian tuyệt đối so với ngày nói hiện tại. Tuân thủ trật tự trạng ngữ chỉ thời gian trong câu tiếng Trung.",
              keyPoint: "Chỉ dùng cho mốc ngày mốt tính từ hôm nay. Không dùng để kể về ngày kế tiếp trong quá khứ.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "后天", pause: 300 },
                { lang: "vi-VN", text: " mang nghĩa là ngày kia hoặc ngày mốt. Đây là từ chỉ thời gian rất hay gặp khi lên lịch hẹn giao tiếp.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Trạng ngữ thời gian ở đầu câu",
                pattern: "后天 + (Buổi trong ngày) + Chủ ngữ + Động từ + Tân ngữ",
                note: "Đặt mốc thời gian ở đầu câu để nhấn mạnh thời điểm dự kiến xảy ra sự việc.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu thời gian đầu câu: Đặt từ ngày mốt kết hợp với buổi sáng hoặc chiều lên đầu, rồi nối liền với chủ ngữ và hành động.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Trạng ngữ thời gian sau chủ ngữ",
                pattern: "Chủ ngữ + 后天 + (Năng nguyện từ) + Động từ + Tân ngữ",
                note: "Trạng ngữ thời gian đứng ngay giữa chủ ngữ và vị ngữ chính.",
                audio: [
                  { lang: "vi-VN", text: "Bạn cũng có thể đặt từ ngày mốt ngay sau chủ ngữ, trước động từ hành động.", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "后天下午我们要去大学考试。",
                vi: "Chiều ngày kia chúng tôi phải đến trường đại học để thi.",
                situation: "Thông báo lịch thi học kỳ cho nhóm bạn cùng lớp.",
                analysis: "Mốc ngày kết hợp buổi chiều làm trạng ngữ thời gian đứng ở đầu câu.",
                explainAudio: [
                  { lang: "zh-CN", text: "后天下午我们要去大学考试。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Chiều ngày kia bọn tôi phải tới trường đại học dự thi.", pause: 400 }
                ]
              },
              {
                zh: "我后天想去书店买几本汉字书。",
                vi: "Ngày mốt tôi muốn đi hiệu sách mua mấy cuốn sách chữ Hán.",
                situation: "Bàn kế hoạch rủ bạn đi mua tài liệu học chữ Hán.",
                analysis: "Trạng ngữ thời gian đứng ngay sau chủ ngữ tôi.",
                explainAudio: [
                  { lang: "zh-CN", text: "我后天想去书店买几本汉字书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Ngày mốt tôi muốn ghé hiệu sách mua mấy quyển sách tập viết chữ Hán.", pause: 400 }
                ]
              },
              {
                zh: "后天是星期天，大家都不用上班。",
                vi: "Ngày kia là chủ nhật, mọi người đều không phải đi làm.",
                situation: "Nhắc nhở đồng nghiệp về ngày nghỉ cuối tuần sắp tới.",
                analysis: "Danh từ thời gian làm chủ ngữ chính trong câu phán đoán ngày trong tuần.",
                explainAudio: [
                  { lang: "zh-CN", text: "后天是星期天，大家都不用上班。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Ngày kia là chủ nhật, cả nhà đều không phải đi làm.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy dịch từ 'ngày hôm sau' trong câu chuyện quá khứ thành 后天",
                situation: "Người học kể chuyện quá khứ: 'Hôm qua anh ấy đến nhà tôi, ngày hôm sau anh ấy về nước' và dùng nhầm từ này.",
                explanation: "Tiếng Việt hay gọi 'ngày hôm sau' hoặc 'hôm sau'. Nhưng trong tiếng Trung, từ đang học CHỈ TÍNH TỪ HÔM NAY trở đi (ngày mốt). Nếu kể về ngày kế tiếp trong quá khứ hoặc một mốc quá khứ, bắt buộc phải dùng cụm 'ngày thứ hai' (第二天).",
                wrong: "他星期一到北京，后天就回国了。(Sai nghiêm trọng nếu muốn kể việc đã xảy ra tuần trước)",
                right: "他星期一到北京，第二天就回国了。",
                tip: "Quy tắc mốc quy chiếu: So với hôm nay thì dùng 'hôm qua, hôm nay, ngày mai, ngày mốt'; kể chuyện quá khứ liên tiếp thì dùng 'ngày hôm sau' (第二天).",
                checkQuestion: {
                  q: "Hôm nay là thứ Sáu, bạn muốn hẹn bạn gặp nhau vào Chủ Nhật, bạn nói:",
                  options: ["我们后天见！", "我们第二天见！"],
                  correct: 0,
                  explain: "Chủ Nhật cách thứ Sáu hai ngày tính từ hôm nay, dùng từ ngày mốt là chuẩn xác nhất."
                },
                audio: [
                  { lang: "vi-VN", text: "Cảnh báo bẫy thời gian: Từ này chỉ dùng để chỉ ngày mốt tính từ thời điểm hiện tại của người nói. Khi kể câu chuyện quá khứ về ngày kế tiếp, bắt buộc phải dùng cụm từ ngày thứ hai, không dùng từ ngày mốt.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh bốn rơi dứt khoát. Chữ sau là thanh một ngân cao và phẳng.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm dứt khoát thanh bốn và thanh một ngân dài:", pause: 200 },
                { lang: "zh-CN", text: "后天", pause: 800 },
                { lang: "zh-CN", text: "后天见", pause: 1000 },
                { lang: "vi-VN", text: "Rất tốt. Chú ý dứt điểm hơi thở ở âm đầu.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu viết nét phẩy ngắn ở trên, nét phẩy dài bên dưới, nét ngang và bộ Khẩu dưới cùng. Chữ sau gồm hai nét ngang và hai nét phẩy mác đối xứng.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ đầu có nghĩa là phía sau. Chữ sau là chữ thiên mang nghĩa là ngày, ghép lại là ngày ở phía sau ngày mai.", pause: 350 }
              ]
            },
            summary: "Danh từ chỉ mốc thời gian ngày mốt so với ngày hôm nay. Luôn đứng trước động từ vị ngữ.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Đặt từ này ở đầu câu hoặc ngay sau chủ ngữ để biểu đạt các kế hoạch dự định cho ngày kia.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 15: 国家 (guójiā)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g3-w15`,
            index: 15,
            hanzi: "国家",
            pinyin: "guójiā",
            coreMeaning: "Quốc gia, đất nước, nhà nước",
            introAudio: [
              { lang: "zh-CN", text: "国家", pause: 400 },
              { lang: "vi-VN", text: "Thanh hai đi với thanh một. Nghĩa là quốc gia, đất nước hoặc nhà nước.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi nói về lãnh thổ các nước trên thế giới, quê hương xứ sở, hoặc thể chế chính trị của một quốc gia.",
              detail: "Bản chất là một danh từ chung chỉ đất nước. Lượng từ thông dụng nhất đi kèm là lượng từ 个 (gè).",
              keyPoint: "Dùng để chỉ khái niệm đất nước nói chung. Không dùng làm hậu tố cho tên riêng của các nước quen thuộc.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "国家", pause: 300 },
                { lang: "vi-VN", text: " là danh từ mang nghĩa là đất nước hoặc quốc gia. Lượng từ đi cùng từ này thường là lượng từ cái quen thuộc.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Đếm số lượng đất nước",
                pattern: "Số từ + 个 + 国家",
                note: "Bắt buộc phải có lượng từ đứng giữa số từ và danh từ quốc gia.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu đếm số lượng: Đặt số đếm lên trước, tiếp theo là lượng từ cái, rồi mới tới danh từ đất nước.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Hỏi về quốc gia nào",
                pattern: "哪个国家 + (的人 / 的文化)",
                note: "Dùng đại từ nghi vấn nào kết hợp lượng từ để hỏi về nguồn gốc xuất xứ quốc gia.",
                audio: [
                  { lang: "vi-VN", text: "Khi muốn hỏi người nước nào hay văn hóa nước nào, dùng cấu trúc: Nước nào kết hợp với danh từ trung tâm.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "你去过哪些国家？",
                vi: "Bạn đã từng đi qua những quốc gia nào rồi?",
                situation: "Hỏi thăm kinh nghiệm đi du lịch hoặc công tác quốc tế của bạn bè.",
                analysis: "Đại từ nghi vấn số nhiều kết hợp trực tiếp với danh từ quốc gia.",
                explainAudio: [
                  { lang: "zh-CN", text: "你去过哪些国家？", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bạn đã từng đặt chân tới những đất nước nào rồi?", pause: 400 }
                ]
              },
              {
                zh: "很多国家的人都喜欢喝茶。",
                vi: "Người của rất nhiều quốc gia đều thích uống trà.",
                situation: "Bàn về văn hóa ẩm thực trà phổ biến trên toàn cầu.",
                analysis: "Cụm danh từ số lượng làm định ngữ bổ nghĩa cho con người.",
                explainAudio: [
                  { lang: "zh-CN", text: "很多国家的人都喜欢喝茶。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Người dân ở rất nhiều quốc gia đều có thói quen thưởng trà.", pause: 400 }
                ]
              },
              {
                zh: "中国是一个很大、很有名的国家。",
                vi: "Trung Quốc là một quốc gia rất lớn và rất nổi tiếng.",
                situation: "Giới thiệu tổng quan về quy mô và danh tiếng của đất nước Trung Hoa.",
                analysis: "Danh từ quốc gia làm trung tâm ngữ tiếp nhận các tính từ bổ nghĩa.",
                explainAudio: [
                  { lang: "zh-CN", text: "中国是一个很大、很有名的国家。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Trung Quốc là một đất nước vô cùng rộng lớn và nổi tiếng.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy gắn thêm chữ 国家 vào sau tên riêng của các nước quen thuộc",
                situation: "Người Việt dịch từ 'Nước Trung Quốc' hoặc 'Nước Việt Nam' và ghép thành '中国国家' hay '越南国家'.",
                explanation: "Tên riêng của các quốc gia trong tiếng Trung vốn đã đại diện hoàn chỉnh cho đất nước đó (như 中国, 越南, 美国, 英国). Trừ văn kiện ngoại giao trang trọng, trong khẩu ngữ thông thường tuyệt đối không gắn thêm danh từ chung vào sau tên riêng.",
                wrong: "我来自越南国家。(Rườm rà và không tự nhiên trong giao tiếp)",
                right: "我来自越南。",
                tip: "Mẹo nhớ: Tên nước đứng một mình đã đủ nghĩa; chỉ dùng từ chung này khi nói 'các nước, quốc gia này, một quốc gia lớn'.",
                checkQuestion: {
                  q: "Cách nói tự nhiên nhất khi tự giới thiệu xuất thân là:",
                  options: ["我来自中国。", "我来自中国国家。"],
                  correct: 0,
                  explain: "Chỉ cần dùng tên riêng của đất nước, không ghép thêm danh từ chung phía sau."
                },
                audio: [
                  { lang: "vi-VN", text: "Cảnh báo thói quen dịch thừa chữ: Khi giới thiệu tên nước như Việt Nam hay Trung Quốc, chỉ cần nói thẳng tên nước đó. Tuyệt đối không ghép thêm từ đất nước vào sau tên riêng trong giao tiếp thông thường.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh hai vuốt giọng từ thấp lên cao. Chữ sau là thanh một ngân cao, thẳng và đều đặn.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh hai vuốt cao và thanh một ngân dài:", pause: 200 },
                { lang: "zh-CN", text: "国家", pause: 800 },
                { lang: "zh-CN", text: "这个国家", pause: 1000 },
                { lang: "vi-VN", text: "Giữ âm họng tròn vành rõ chữ.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm bộ Vi bao quanh bốn phía, bên trong là chữ Ngọc có dấu chấm. Chữ sau gồm bộ Miên mái nhà ở trên và chữ Thỉ con lợn ở dưới.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Đất nước là viên ngọc quý được biên giới bao bọc xung quanh. Chữ sau là mái nhà che chở, ghép lại thành quốc gia non sông.", pause: 400 }
              ]
            },
            summary: "Danh từ chỉ đất nước hoặc quốc gia. Luôn nhớ dùng lượng từ 个 khi đếm số lượng.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi nói về đất nước nói chung. Không ghép tùy tiện vào sau tên riêng các quốc gia cụ thể.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 16: 书店 (shūdiàn)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g3-w16`,
            index: 16,
            hanzi: "书店",
            pinyin: "shūdiàn",
            coreMeaning: "Hiệu sách, nhà sách, cửa hàng bán sách",
            introAudio: [
              { lang: "zh-CN", text: "书店", pause: 400 },
              { lang: "vi-VN", text: "Thanh một đi với thanh bốn. Nghĩa là hiệu sách, nhà sách.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi bạn muốn đi mua sách giáo trình, tìm truyện tranh, mua từ điển hoặc hẹn bạn bè tại cửa hàng sách.",
              detail: "Bản chất là danh từ chỉ địa điểm thương mại kinh doanh sách báo. Lượng từ chuẩn xác và tự nhiên nhất dùng cho cửa hàng là 家 (jiā).",
              keyPoint: "Nơi bán sách để mua. Phân biệt với nơi mượn sách công cộng để đọc.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "书店", pause: 300 },
                { lang: "vi-VN", text: " có nghĩa là hiệu sách hoặc nhà sách. Đây là địa điểm thương mại để mua bán các loại ấn phẩm sách vở.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Đi hiệu sách mua sách (Mục đích)",
                pattern: "去 + 书店 + 买 + Danh từ sách",
                note: "Cấu trúc liên động: Đi đến địa điểm để thực hiện mục đích mua đồ.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu đi hiệu sách mua sách: Động từ đi kết hợp với hiệu sách, rồi nối tiếp bằng động từ mua và cuốn sách bạn cần.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Đếm số lượng nhà sách với lượng từ",
                pattern: "一 + 家 + (大 / 小) + 书店",
                note: "Dùng lượng từ chỉ doanh nghiệp kinh doanh để bổ nghĩa cho hiệu sách.",
                audio: [
                  { lang: "vi-VN", text: "Khi đếm hiệu sách, hãy dùng lượng từ chỉ cửa hàng để câu nói tự nhiên nhất.", pause: 300 }
                ]
              }
            ],
            examples: [
              {
                zh: "大学对面有一家大书店。",
                vi: "Đối diện trường đại học có một hiệu sách lớn.",
                situation: "Chỉ đường cho tân sinh viên tìm chỗ mua tài liệu học tập.",
                analysis: "Sử dụng vị trí đối diện làm mốc, kết hợp lượng từ của cửa tiệm.",
                explainAudio: [
                  { lang: "zh-CN", text: "大学对面有一家大书店。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Phía đối diện trường đại học có một tiệm sách rất to.", pause: 400 }
                ]
              },
              {
                zh: "我打算后天去书店买一本汉语词典。",
                vi: "Tôi dự định ngày mốt sẽ đến hiệu sách mua một cuốn từ điển tiếng Trung.",
                situation: "Chia sẻ kế hoạch mua sắm tài liệu học ngoại ngữ.",
                analysis: "Kết hợp trạng ngữ thời gian ngày mốt và cấu trúc liên động mua từ điển.",
                explainAudio: [
                  { lang: "zh-CN", text: "我打算后天去书店买一本汉语词典。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Ngày kia tôi tính tới hiệu sách mua một quyển từ điển tiếng Hán.", pause: 400 }
                ]
              },
              {
                zh: "这家书店里有很多外国书。",
                vi: "Trong hiệu sách này có rất nhiều sách nước ngoài.",
                situation: "Giới thiệu điểm đặc biệt về nguồn sách phong phú của cửa hàng.",
                analysis: "Danh từ hiệu sách kết hợp phương vị từ bên trong làm chủ ngữ nơi chốn.",
                explainAudio: [
                  { lang: "zh-CN", text: "这家书店里有很多外国书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Trong nhà sách này bày bán rất nhiều sách ngoại văn.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy nhầm lẫn chức năng giữa 书店 (hiệu sách) và 图书馆 (thư viện)",
                situation: "Người học muốn nói: 'Tôi đến thư viện mượn sách' nhưng lại dùng từ hiệu sách.",
                explanation: "Hiệu sách (书店) là cửa hàng thương mại để mua bán bằng tiền; hành động đi kèm là 'mua' (买). Thư viện (图书馆) là cơ quan công cộng phục vụ đọc và tra cứu; hành động đi kèm là 'mượn' (借) hoặc 'đọc' (看).",
                wrong: "我去书店借了两本书。(Vô lý vì hiệu sách không cho mượn sách)",
                right: "我去图书馆借了两本书。 hoặc 我去书店买了两本书。",
                tip: "Phân biệt theo ví tiền: Phải trả tiền mua mang về nhà là hiệu sách; mượn đọc rồi trả lại là thư viện.",
                checkQuestion: {
                  q: "Điền từ thích hợp: '我想买一本新书，明天我们去 (___) 吧。'",
                  options: ["书店", "图书馆"],
                  correct: 0,
                  explain: "Mục đích là mua sách bằng tiền, địa điểm chuẩn xác bắt buộc phải là hiệu sách."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt địa điểm: Hãy nhớ rằng hiệu sách là nơi bỏ tiền ra mua sách. Nếu hành động của bạn là mượn sách miễn phí hoặc ngồi đọc yên tĩnh, hãy dùng từ thư viện.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu đọc thanh một cao và ngân phẳng. Chữ sau đọc thanh bốn dứt khoát.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh một kết hợp thanh bốn dứt khoát:", pause: 200 },
                { lang: "zh-CN", text: "书店", pause: 800 },
                { lang: "zh-CN", text: "去书店", pause: 1000 },
                { lang: "vi-VN", text: "Đọc thật dứt khoát âm tiết thứ hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm nét gập đứng, nét gập ngang và nét chấm ở trên. Chữ sau gồm bộ Nghiễm mái nhà bên ngoài, bên trong là chữ Chiêm.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ đầu là cuốn sách. Chữ sau có mái nhà che cửa tiệm buôn bán, ghép lại là nơi bán sách vở.", pause: 350 }
              ]
            },
            summary: "Danh từ chỉ hiệu sách. Nhớ kết hợp với lượng từ 家 và phân biệt rạch ròi với thư viện.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi nói về việc đến cửa hàng mua sách. Lượng từ chuẩn đi kèm là ", pause: 150 },
              { lang: "zh-CN", text: "一家书店", pause: 250 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 17: 好看 (hǎokàn)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g3-w17`,
            index: 17,
            hanzi: "好看",
            pinyin: "hǎokàn",
            coreMeaning: "Đẹp, ưa nhìn (ngoại hình); hay, cuốn hút (phim ảnh, sách truyện)",
            introAudio: [
              { lang: "zh-CN", text: "好看", pause: 400 },
              { lang: "vi-VN", text: "Thanh ba đi với thanh bốn. Nghĩa là đẹp mắt, ưa nhìn hoặc dùng khen phim, truyện rất hay.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng để khen ngợi diện mạo của người, màu sắc quần áo, phong cảnh (đẹp mắt) HOẶC khen ngợi nội dung phim, kịch, tiểu thuyết (hấp dẫn, cuốn hút).",
              detail: "Bản chất là tính từ ghép bởi chữ tốt và động từ nhìn, nghĩa đen là 'dễ nhìn, thích mắt'. Phủ sóng rộng rãi trong khẩu ngữ thường nhật.",
              keyPoint: "Là từ duy nhất dùng để khen phim ảnh, video, sách báo có nội dung hay, cuốn hút người xem.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "好看", pause: 300 },
                { lang: "vi-VN", text: " là tính từ đa năng. Vừa dùng để khen người hoặc đồ vật trông đẹp mắt, vừa dùng để khen một bộ phim hay cuốn sách có nội dung rất hay.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Khen phim, video hoặc sách có nội dung hay",
                pattern: "Phim / Video / Sách + (很 / 非常 / 真的) + 好看",
                note: "Nhận xét tính chất cuốn hút, hấp dẫn của nội dung tác phẩm nghe nhìn.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu khen phim hay sách hay: Đặt tên tác phẩm lên đầu, thêm phó từ chỉ mức độ rồi nối với tính từ này.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Khen người hoặc trang phục đẹp mắt, ưa nhìn",
                pattern: "Người / Quần áo + (穿起来) + 很 + 好看",
                note: "Miêu tả vẻ ngoài ưa nhìn, vừa mắt khi diện trang phục.",
                audio: [
                  { lang: "vi-VN", text: "Khi khen ai đó mặc đồ đẹp mắt, đặt chủ ngữ và trang phục trước cụm tính từ rất ưa nhìn.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "昨晚我看了一部非常有名的电影，真的很好看！",
                vi: "Tối qua tôi đã xem một bộ phim rất nổi tiếng, thực sự rất hay!",
                situation: "Hào hứng review bộ phim điện ảnh kinh điển vừa xem xong cho bạn bè.",
                analysis: "Dùng tính từ để nhận xét nội dung cuốn hút của tác phẩm điện ảnh.",
                explainAudio: [
                  { lang: "zh-CN", text: "昨晚我看了一部非常有名的电影，真的很好看！", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Tối hôm qua tôi xem một bộ phim cực kỳ nổi tiếng, nội dung quả thực vô cùng hay!", pause: 400 }
                ]
              },
              {
                zh: "你穿这件红色的衣服真好看。",
                vi: "Bạn mặc chiếc áo màu đỏ này trông thật đẹp.",
                situation: "Khen ngợi gu ăn mặc và diện mạo ưa nhìn của bạn gái khi đi dự tiệc.",
                analysis: "Tính từ miêu tả vẻ đẹp ngoại hình kết hợp phó từ xác thực chân thành.",
                explainAudio: [
                  { lang: "zh-CN", text: "你穿这件红色的衣服真好看。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này khen ngợi: Bạn mặc bộ đồ màu đỏ này trông xinh xắn và hợp mắt lắm.", pause: 400 }
                ]
              },
              {
                zh: "你在书店买的那本书好看吗？",
                vi: "Cuốn sách bạn mua ở hiệu sách có hay không?",
                situation: "Hỏi thăm cảm nhận của bạn sau khi đọc cuốn sách mới mua.",
                analysis: "Câu nghi vấn hỏi về chất lượng nội dung của cuốn sách.",
                explainAudio: [
                  { lang: "zh-CN", text: "你在书店买的那本书好看吗？", pause: 800 },
                  { lang: "vi-VN", text: "Câu này hỏi thăm: Quyển sách bạn mua ở tiệm hôm nọ đọc có hay không?", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy hiểu nhầm ranh giới giữa 好看 và 漂亮 (Nội dung cuốn hút vs Thẩm mỹ hình thức)",
                situation: "Người học khen phim hay lại nói '电影很漂亮', hoặc nghe người khác nói '这本书很漂亮' thì vội vàng bắt bẻ là sai ngữ pháp.",
                explanation: "Bản chất phân biệt: Khi khen nội dung phim ảnh, truyện sách có cốt truyện hấp dẫn, bắt buộc dùng 好看. Nhưng nếu muốn khen cuốn sách có bìa in đẹp đẽ, tranh minh họa lộng lẫy, câu '这本书很漂亮' hoàn toàn ĐÚNG VÀ TỰ NHIÊN về mặt thẩm mỹ hình thức. Không được vội kết luận câu đó sai ngữ pháp chỉ vì nó không mang nghĩa 'nội dung hay'.",
                wrong: "这部电影的内容很漂亮。(Sai cách dùng: Khen nội dung phim cuốn hút không dùng từ xinh đẹp)",
                right: "这部电影很有意思，很好看。(Chuẩn xác khi khen phim hay)",
                tip: "Mẹo chọn: Khen cốt truyện, diễn xuất, nội dung sách báo phim ảnh -> chọn 好看. Khen nhan sắc, bìa sách, hoa lá, cách trang trí -> chọn 漂亮.",
                boundary: "Cả hai từ đều có thể dùng để khen nhan sắc con người ưa nhìn, xinh xắn.",
                comparisons: [
                  { zh: "这本书很好看", vi: "Cuốn sách này rất hay (Khen ngợi cốt truyện, nội dung giá trị)" },
                  { zh: "这本书很漂亮", vi: "Cuốn sách này rất đẹp (Khen ngợi bìa sách, màu sắc, hình thức in ấn)" }
                ],
                checkQuestion: {
                  q: "Bạn vừa xem xong một bộ phim điện ảnh có cốt truyện vô cùng kịch tính, bạn sẽ khen thế nào?",
                  options: ["这部电影真的很好看！", "这部电影真的好漂亮！"],
                  correct: 0,
                  explain: "Khen ngợi nội dung phim ảnh hấp dẫn, bắt buộc phải dùng tính từ 好看."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt bẫy thẩm mỹ quan trọng: Khi khen một bộ phim hay hoặc cuốn sách có nội dung hấp dẫn, bạn phải dùng ", pause: 150 },
                  { lang: "zh-CN", text: "好看", pause: 200 },
                  { lang: "vi-VN", text: ". Còn từ xinh đẹp chỉ dùng khi khen vẻ đẹp hình thức bên ngoài như nhan sắc, quần áo hay bìa sách trang trí đẹp mắt.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh ba, phát âm sâu ở đáy họng. Chữ sau là thanh bốn, bật dứt khoát.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh ba đi với thanh bốn dứt khoát:", pause: 200 },
                { lang: "zh-CN", text: "好看", pause: 800 },
                { lang: "zh-CN", text: "很好看", pause: 1000 },
                { lang: "vi-VN", text: "Chú ý sức rơi dứt khoát của chữ thứ hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm bộ Nữ bên trái và chữ Tử bên phải. Chữ sau gồm bộ Thủ hình bàn tay che mắt ở trên và bộ Mục hình con mắt ở dưới.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ sau mô phỏng hình ảnh bàn tay đặt lên phía trên đôi mắt để ngắm nhìn ra xa, ghép với chữ tốt ở trước tạo thành nhìn thấy thích mắt.", pause: 400 }
              ]
            },
            summary: "Tính từ khen ngoại hình ưa nhìn hoặc nội dung phim ảnh, sách báo hấp dẫn, cuốn hút.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Hãy dùng từ này bất cứ khi nào bạn muốn khen một bộ phim hay, một cuốn sách cuốn hút hoặc người mặc đồ ưa nhìn.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 18: 爸 (bà)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g3-w18`,
            index: 18,
            hanzi: "爸",
            pinyin: "bà",
            coreMeaning: "Bố, ba, cha (xưng hô thân mật trong gia đình)",
            introAudio: [
              { lang: "zh-CN", text: "爸", pause: 400 },
              { lang: "vi-VN", text: "Thanh bốn. Nghĩa là bố, ba hoặc cha trong xưng hô gia đình.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng để gọi trực tiếp người cha, hoặc kết hợp thành danh từ xưng hô khi giới thiệu người thân với người khác.",
              detail: "Bản chất là danh từ thân tộc. Trong khẩu ngữ có thể gọi trực tiếp một chữ hoặc lặp lại thành từ hai âm tiết với âm sau đọc thanh nhẹ.",
              keyPoint: "Khi nói 'bố tôi' trong khẩu ngữ thân mật, người Trung Quốc thường nói tắt rất tự nhiên mà không cần thêm trợ từ sở hữu.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "爸", pause: 300 },
                { lang: "vi-VN", text: " là danh từ xưng hô chỉ người bố. Bạn có thể gọi trực tiếp hoặc dùng dạng từ lặp lại trong giao tiếp hàng ngày.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Gọi trực tiếp người bố trong nhà",
                pattern: "爸 / 爸爸 + ，+ Câu giao tiếp",
                note: "Đứng đầu câu làm từ hô ngữ trực tiếp.",
                audio: [
                  { lang: "vi-VN", text: "Khi cất tiếng gọi bố để nhờ vả hay trò chuyện, đặt từ này ở đầu câu rồi nối tiếp lời muốn nói.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Khẩu ngữ thân mật chỉ 'Bố tôi'",
                pattern: "我爸 + Vị ngữ",
                note: "Lược bỏ trợ từ sở hữu và lược bớt âm tiết lặp để câu nói nhanh gọn, thân mật.",
                audio: [
                  { lang: "vi-VN", text: "Trong khẩu ngữ hàng ngày, người bản xứ rất hay nói tắt là bố tôi để thể hiện sự gần gũi thân quen.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "我爸每天早上都喜欢喝茶、看报纸。",
                vi: "Bố tôi mỗi sáng đều thích uống trà, đọc báo.",
                situation: "Kể về sở thích sinh hoạt tao nhã của người bố trong gia đình.",
                analysis: "Dùng cụm xưng hô thân mật làm chủ ngữ chính của câu.",
                explainAudio: [
                  { lang: "zh-CN", text: "我爸每天早上都喜欢喝茶、看报纸。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bố tôi sáng nào cũng thích nhâm nhi chén trà và đọc báo.", pause: 400 }
                ]
              },
              {
                zh: "爸，后天我们去那家有名的书店吧！",
                vi: "Bố ơi, ngày mốt bố con mình đến hiệu sách nổi tiếng kia đi!",
                situation: "Rủ bố đưa mình đi mua sách vào ngày nghỉ sắp tới.",
                analysis: "Dùng làm từ xưng hô đầu câu kết hợp trạng ngữ thời gian ngày mốt.",
                explainAudio: [
                  { lang: "zh-CN", text: "爸，后天我们去那家有名的书店吧！", pause: 800 },
                  { lang: "vi-VN", text: "Câu này rủ rê thân mật: Bố ơi, ngày kia bố đưa con tới tiệm sách nổi tiếng đằng kia nhé!", pause: 400 }
                ]
              },
              {
                zh: "他爸爸是一名大学老师。",
                vi: "Bố của anh ấy là một giảng viên đại học.",
                situation: "Giới thiệu nghề nghiệp đáng kính của phụ huynh bạn học.",
                analysis: "Dạng hai âm tiết chuẩn mực làm chủ ngữ kết hợp danh từ nghề nghiệp.",
                explainAudio: [
                  { lang: "zh-CN", text: "他爸爸是一名大学老师。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bác trai là giảng viên đang công tác tại trường đại học.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy máy móc bắt buộc luôn phải dùng cụm dài 我的爸爸",
                situation: "Người học nghĩ rằng nói '我爸' là cộc lốc hoặc sai ngữ pháp, lúc nào cũng phải nói đầy đủ bốn chữ.",
                explanation: "Trong tiếng Trung chuẩn mực, với những mối quan hệ gia đình ruột thịt thân cận nhất (như bố, mẹ, anh, chị), việc lược bỏ trợ từ sở hữu và rút gọn thành '我爸' là cách nói cực kỳ tự nhiên, thể hiện sự gắn bó thân thương trong khẩu ngữ thực tế.",
                wrong: "我的爸爸的爸爸。(Rườm rà không tự nhiên khi nói về ông nội)",
                right: "我爷爷。 hoặc 我爸的爸爸。",
                tip: "Khẩu ngữ tự nhiên: Trong hội thoại hàng ngày, hãy tự tin nói 我爸 (bố tôi), 我妈 (mẹ tôi) thay vì lặp đi lặp lại chữ sở hữu dài dòng.",
                boundary: "Trong văn bản trang trọng hoặc bài tập viết câu cơ bản ban đầu, dạng đầy đủ vẫn hoàn toàn đúng ngữ pháp.",
                checkQuestion: {
                  q: "Câu nào dưới đây là cách nói khẩu ngữ thân mật tự nhiên của người bản xứ?",
                  options: ["我爸今天开车去上班。", "我的爸爸今天开车去上班。"],
                  correct: 0,
                  explain: "Cả hai câu đều đúng ngữ pháp, nhưng cách nói rút gọn thân mật phổ biến và tự nhiên hơn trong khẩu ngữ hàng ngày."
                },
                audio: [
                  { lang: "vi-VN", text: "Mẹo khẩu ngữ tự nhiên: Khi nói về bố mẹ trong giao tiếp thân mật, bạn hoàn toàn có thể nói tắt là ", pause: 150 },
                  { lang: "zh-CN", text: "我爸", pause: 200 },
                  { lang: "vi-VN", text: " thay vì lúc nào cũng phải đọc dài dòng là bố của tôi.", pause: 350 }
                ]
              }
            ],
            pron: {
              guide: "Phát âm thanh bốn dứt khoát. Nếu dùng dạng lặp hai chữ, chữ sau phải đọc thật nhẹ thành thanh nhẹ.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm dứt khoát thanh bốn và thanh nhẹ lướt êm:", pause: 200 },
                { lang: "zh-CN", text: "爸", pause: 800 },
                { lang: "zh-CN", text: "爸爸", pause: 1000 },
                { lang: "vi-VN", text: "Rất tốt. Hãy chú ý thả lỏng ở chữ thứ hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Gồm bộ Phụ ở trên tượng trưng cho người cha và chữ Ba ở dưới biểu thị âm đọc.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Phía trên là bộ Phụ mang nghĩa người cha cầm chiếc rìu lao động, phía dưới là chữ Ba làm phần thanh âm.", pause: 350 }
              ]
            },
            summary: "Danh từ xưng hô người bố trong gia đình. Tự tin dùng dạng rút gọn thân mật trong khẩu ngữ.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng để xưng hô hoặc gọi trực tiếp người bố thân yêu trong các tình huống sinh hoạt gia đình.", pause: 350 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // BÀI TẬP TRẮC NGHIỆM & NGHE HIỂU NHÓM 3
        // ---------------------------------------------------------------------
        exercises: [
          {
            id: `${LESSON_ID}-g3-ex1`,
            type: "Phân biệt tần suất và mệnh đề thời gian",
            prompt: "Chọn từ thích hợp điền vào câu: '我 (___) 去图书馆借书，并不是每天都去。'",
            options: ["有时候", "的时候", "后天", "国家"],
            correct: 0,
            reasonRight: "Chính xác! Diễn đạt tần suất thỉnh thoảng (không phải ngày nào cũng đi) phải dùng 有时候.",
            reasonWrong: "Chưa đúng. Vị trí trước động từ chỉ tần suất không liên tục bắt buộc dùng từ có lúc, có khi.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 1: Hãy chọn từ điền vào chỗ trống để chỉ hành động thỉnh thoảng mới diễn ra.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 1: Câu có vế sau nói rõ không phải ngày nào cũng đi, biểu thị tần suất thỉnh thoảng, đáp án chuẩn xác là ", pause: 150 },
              { lang: "zh-CN", text: "有时候", pause: 250 }
            ]
          },
          {
            id: `${LESSON_ID}-g3-ex2`,
            type: "Phân biệt địa điểm thương mại và công cộng",
            prompt: "Chọn câu diễn đạt hợp lý nhất về mặt thực tế giao tiếp:",
            options: [
              "我想买一本汉语词典，我们去书店吧。",
              "我想借一本汉语词典，我们去书店吧。",
              "我想买两本外国书，我们去图书馆吧。",
              "书店里借书的人非常多。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Muốn 'mua' sách bằng tiền thì bắt buộc phải đến 'hiệu sách' (书店).",
            reasonWrong: "Chưa đúng. Hiệu sách là nơi mua bán bằng tiền, thư viện mới là nơi mượn sách công cộng.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 2: Tìm câu có sự kết hợp logic chuẩn xác giữa hành vi mua hoặc mượn và địa điểm.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 2: Hành động mua sách bằng tiền gắn liền với hiệu sách, còn mượn sách gắn liền với thư viện. Đáp án câu đầu tiên là chuẩn xác nhất.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g3-ex3`,
            type: "Trắc nghiệm ngữ nghĩa thẩm mỹ",
            prompt: "Khi khen ngợi một bộ phim điện ảnh có cốt truyện kịch tính và diễn xuất xuất sắc, bạn nói thế nào?",
            options: [
              "这部电影真的很好看！",
              "这部电影真的很有名书店！",
              "这部电影真的非常漂亮！",
              "这部电影真的一边看！"
            ],
            correct: 0,
            reasonRight: "Chính xác! Khen ngợi nội dung phim ảnh hoặc sách báo hay, lôi cuốn bắt buộc dùng 好看.",
            reasonWrong: "Chưa đúng. Khen nội dung phim hay không dùng tính từ xinh đẹp, mà phải dùng từ 好看.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 3: Đâu là cách khen ngợi chuẩn xác nội dung một bộ phim điện ảnh xuất sắc?", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 3: Khen phim hay hoặc sách có cốt truyện hấp dẫn, tiếng Trung chuẩn mực dùng tính từ ", pause: 150 },
              { lang: "zh-CN", text: "好看", pause: 250 }
            ]
          },
          {
            id: `${LESSON_ID}-g3-ex4`,
            type: "Sửa lỗi trạng ngữ thời gian",
            prompt: "Hôm nay là thứ Năm, bạn muốn nói 'Ngày kia chúng tôi đi mua xe', câu nào đúng ngữ pháp?",
            options: [
              "后天我们去买车。",
              "我们去买车后天。",
              "第二天我们去买车后天。",
              "后天是买车我们去。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Trạng ngữ thời gian phải đứng trước động từ vị ngữ, không được để cuối câu như tiếng Việt.",
            reasonWrong: "Chưa đúng. Tiếng Trung tuyệt đối không đặt mốc thời gian ở cuối câu theo thói quen tiếng Việt.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 4: Chọn câu có vị trí trạng ngữ thời gian ngày kia chuẩn xác.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 4: Trạng ngữ thời gian bắt buộc phải đứng trước hành vi, có thể ở đầu câu hoặc ngay sau chủ ngữ.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g3-ex5`,
            type: "Nghe hiểu phản xạ",
            isListening: true,
            prompt: "Nghe đoạn ghi âm và chọn thông tin đúng nhất về kế hoạch của nhân vật:",
            options: [
              "Người này sẽ cùng bố đến hiệu sách mua sách vào ngày mốt.",
              "Người này sẽ đi du lịch nước ngoài vào ngày mai.",
              "Bố của người này đang ở thư viện mượn sách.",
              "Người này muốn ở nhà xem phim cả ngày kia."
            ],
            correct: 0,
            reasonRight: "Chính xác! Đoạn hội thoại nêu rõ kế hoạch ngày mốt sẽ cùng bố ghé hiệu sách mua cuốn sách hay.",
            reasonWrong: "Chưa đúng. Hãy chú ý nghe kỹ mốc thời gian ngày mốt, nhân vật người bố và địa điểm hiệu sách.",
            transcript: "后天是星期六，我爸不用上班，我想跟他一起去大学对面的书店买一本好看的书。",
            questionAudio: [
              { lang: "zh-CN", text: "后天是星期六，我爸不用上班，我想跟他一起去大学对面的书店买一本好看的书。", pause: 800 },
              { lang: "vi-VN", text: "Hãy chọn thông tin chuẩn xác nhất về kế hoạch được nhắc tới trong đoạn ghi âm.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Bản chép lời nói rằng: Ngày kia là thứ Bảy, bố tôi không phải đi làm, tôi muốn cùng bố tới hiệu sách đối diện trường đại học mua một cuốn sách hay. Đáp án chuẩn xác là người này sẽ cùng bố đi hiệu sách mua sách vào ngày mốt.", pause: 450 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // NHIỆM VỤ TỰ DÙNG TỪ THỰC TẾ (3 TẦNG TRỢ GIÚP) NHÓM 3
        // ---------------------------------------------------------------------
        selfUse: [
          {
            id: `${LESSON_ID}-g3-su1`,
            situation: "Tình huống: Bạn muốn rủ bạn học: 'Ngày mốt bạn có rảnh không? Chúng mình cùng đến hiệu sách kia mua một cuốn sách hay nhé.'",
            hint1: "Đặt mốc thời gian 'ngày mốt' lên đầu câu hỏi rảnh không, sau đó dùng động từ rủ rê 'cùng đi hiệu sách mua sách hay'.",
            hint2: "Khung câu gợi ý: 后天你有空吗？我们一起去那个书店 + 买一本好看的书吧。",
            modelAnswer: "后天你有时间吗？我们一起去那家书店买一本好看的书吧。",
            modelExplain: "Kết hợp mốc thời gian ngày kia, lượng từ của hiệu sách, và tính từ khen ngợi sách hay làm định ngữ.",
            questionAudio: [
              { lang: "vi-VN", text: "Nhiệm vụ 1: Hãy tự nói câu: Ngày mốt bạn có thời gian không? Chúng mình cùng đến hiệu sách kia mua một cuốn sách hay nhé.", pause: 300 }
            ],
            hint1Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 1: Nêu mốc thời gian ngày mốt ở đầu, tiếp theo là lời mời cùng đi hiệu sách mua sách hay.", pause: 300 }
            ],
            hint2Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 2: Khung câu gồm ngày mốt bạn có thời gian không, chúng ta cùng đi tiệm sách đó mua một cuốn sách hay nhé.", pause: 300 }
            ],
            modelAudio: [
              { lang: "zh-CN", text: "后天你有时间吗？我们一起去那家书店买一本好看的书吧。", pause: 800 },
              { lang: "vi-VN", text: "Câu mẫu hoàn chỉnh: Ngày kia bạn có rảnh không? Tụi mình cùng tới hiệu sách đằng kia mua một quyển sách hay đi.", pause: 300 }
            ]
          },
          {
            id: `${LESSON_ID}-g3-su2`,
            situation: "Tình huống: Bạn kể về thói quen gia đình với đồng nghiệp: 'Bố tôi công việc rất bận, nhưng cuối tuần thỉnh thoảng vẫn lái xe đưa chúng tôi đi chơi.'",
            hint1: "Vế đầu nêu công việc của bố bận. Vế sau dùng từ tần suất 'thỉnh thoảng' đứng trước hành động 'lái xe đưa chúng tôi đi chơi'.",
            hint2: "Khung câu gợi ý: 我爸工作很忙，但是周末 + 有时候 + 开车带我们去玩儿。",
            modelAnswer: "我爸工作很忙，但是周末有时候会开车带我们去玩儿。",
            modelExplain: "Dùng đại từ thân mật bố tôi, từ chỉ tần suất có lúc đứng trước phương thức lái xe và mục đích đi chơi.",
            questionAudio: [
              { lang: "vi-VN", text: "Nhiệm vụ 2: Hãy tự diễn đạt câu: Bố tôi công việc rất bận, nhưng cuối tuần thỉnh thoảng vẫn lái xe đưa chúng tôi đi chơi.", pause: 300 }
            ],
            hint1Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 1: Sử dụng cụm từ thân mật bố tôi, vế sau đặt từ thỉnh thoảng trước cụm từ lái xe đưa đi chơi.", pause: 300 }
            ],
            hint2Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 2: Khung câu gồm bố tôi công việc rất bận, nhưng cuối tuần có lúc lái xe đưa chúng tôi đi chơi.", pause: 300 }
            ],
            modelAudio: [
              { lang: "zh-CN", text: "我爸工作很忙，但是周末有时候会开车带我们去玩儿。", pause: 800 },
              { lang: "vi-VN", text: "Câu mẫu hoàn chỉnh: Bố tôi công việc bận rộn lắm, cơ mà cuối tuần thỉnh thoảng vẫn lái xe đưa cả nhà đi chơi.", pause: 300 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // ÔN TẬP NGẮT QUÃNG 1 - 3 - 7 NGÀY NHÓM 3
        // ---------------------------------------------------------------------
        reviews: [
          {
            id: `${LESSON_ID}-g3-rev1`,
            day: 1,
            type: "Nhớ nghĩa & Phân biệt vị trí",
            q: "Để nói 'Lúc tôi đọc sách thì không thích nói chuyện', bạn dùng '有时候' hay '的时候'?",
            answer: "Bắt buộc dùng '的时候' đặt sau hành động: 我看书的时候不喜欢说话.",
            explain: "Đứng sau động từ tạo thành mệnh đề thời gian khi đang làm gì thì bắt buộc dùng 的时候.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 1: Hãy chọn từ chuẩn xác để diễn đạt: Lúc tôi đang đọc sách.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Đáp án mốc ngày 1 là dùng cấu trúc thời điểm đứng sau động từ:", pause: 150 },
              { lang: "zh-CN", text: "看书的时候", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g3-rev2`,
            day: 3,
            type: "Phân biệt bẫy thẩm mỹ",
            q: "Câu '这本书很漂亮' có bị coi là sai ngữ pháp không? Tại sao?",
            answer: "Không hề sai ngữ pháp! Câu này hoàn toàn đúng và tự nhiên khi người nói muốn khen hình thức của cuốn sách (bìa sách đẹp, tranh vẽ lộng lẫy). Chỉ khi khen nội dung truyện hay mới bắt buộc dùng 好看.",
            explain: "Tuyệt đối không gắn nhãn sai ngữ pháp cho một câu vốn chuẩn xác ở góc độ thẩm mỹ hình thức bên ngoài.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 3: Hãy giải thích tính đúng đắn của câu khen cuốn sách có hình thức đẹp mắt.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Giải thích mốc ngày 3: Câu khen cuốn sách xinh đẹp hoàn toàn đúng ngữ pháp khi khen về bìa sách và tranh vẽ in ấn đẹp mắt.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g3-rev3`,
            day: 7,
            type: "Vận dụng ngữ cảnh tổng hợp",
            q: "Dịch câu sau sang tiếng Trung: 'Bố tôi bảo ngày mốt sẽ cùng tôi đến hiệu sách nổi tiếng đó mua một cuốn sách chữ Hán rất hay.'",
            answer: "我爸说后天要跟我一起去那家有名的书店买一本好看的汉字书。",
            explain: "Kết hợp nhuần nhuyễn danh từ xưng hô thân mật, mốc thời gian ngày kia, lượng từ hiệu sách và tính từ sách hay.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 7: Thử thách dịch câu phức hợp kết nối toàn bộ từ vựng trọng tâm của Nhóm 3.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Câu hoàn chỉnh mốc 7 ngày là:", pause: 150 },
              { lang: "zh-CN", text: "我爸说后天要跟我一起去那家有名的书店买一本好看的汉字书。", pause: 800 }
            ]
          }
        ]
      },
      // [Phần tiếp theo: Nhóm 4 (Từ 19 đến 24: 打球, 路口, 读书, 姐, 车站, 打开) sẽ được bổ sung ở lượt tiếp theo để đóng hoàn chỉnh file]
      // =======================================================================
      // NHÓM 4: THỂ THAO, GIAO THÔNG, HỌC TẬP & HÀNH ĐỘNG CỤ THỂ (TỪ 19 - 24)
      // =======================================================================
      {
        id: `${LESSON_ID}-g4`,
        title: "Nhóm 4: Thể Thao, Giao Thông, Học Tập & Hành Động Cụ Thể",
        desc: "Làm chủ kết cấu động tân 打球, danh từ giao thông 路口, phân biệt sâu sắc 读书 và 看书, xưng hô thân tộc 姐, địa điểm 车站 và động từ bổ ngữ kết quả 打开.",
        words: [
          // -------------------------------------------------------------------
          // TỪ 19: 打球 (dǎqiú)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g4-w19`,
            index: 19,
            hanzi: "打球",
            pinyin: "dǎqiú",
            coreMeaning: "Chơi bóng, đánh bóng (các môn thể thao dùng tay/vợt)",
            introAudio: [
              { lang: "zh-CN", text: "打球", pause: 400 },
              { lang: "vi-VN", text: "Thanh ba đi với thanh hai. Nghĩa là chơi bóng hoặc đánh bóng.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi nói về hoạt động thể dục thể thao, rủ bạn bè đi chơi các môn bóng như bóng rổ, bóng bàn, cầu lông, bóng chuyền.",
              detail: "Bản chất là kết cấu động tân ly hợp gồm động từ đánh và danh từ bóng. Từ này đại diện chung cho các môn thể thao dùng tay hoặc vợt đập bóng.",
              keyPoint: "Bản thân từ này đã chứa danh từ bóng. Khi nói môn bóng cụ thể, môn bóng đó phải thay thế chữ bóng chung hoặc chèn vào giữa.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "打球", pause: 300 },
                { lang: "vi-VN", text: " là cụm động từ ly hợp mang nghĩa chơi bóng. Thường dùng cho các môn bóng dùng tay hoặc vợt để chơi.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Rủ ai đi chơi bóng",
                pattern: "跟 + Người + 一起去 + 打球",
                note: "Kết hợp giới từ cùng với ai đi làm một hoạt động thể thao ngoài trời.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu rủ chơi bóng: Đặt giới từ cùng với ai lên trước, tiếp theo là cụm từ cùng nhau đi chơi bóng.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Khen ai đó chơi bóng rất cừ (Lặp động từ ly hợp)",
                pattern: "Chủ ngữ + 打球 + 打得 + 很 + (好 / 棒)",
                note: "Vì là động từ ly hợp, khi thêm bổ ngữ trạng thái bắt buộc phải lặp lại động từ đánh.",
                audio: [
                  { lang: "vi-VN", text: "Khi khen ai chơi bóng giỏi, bạn phải lặp lại động từ: Chơi bóng chơi rất cừ.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "下午下课以后，我们去打球吧。",
                vi: "Chiều nay sau khi tan học, chúng mình đi chơi bóng đi.",
                situation: "Rủ bạn cùng lớp vận động thể thao giải tỏa căng thẳng sau giờ học.",
                analysis: "Kết hợp mốc thời gian sau khi tan học và cụm động từ chơi bóng.",
                explainAudio: [
                  { lang: "zh-CN", text: "下午下课以后，我们去打球吧。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này rủ rê thân mật: Buổi chiều tan học xong, bọn mình cùng đi chơi bóng nhé.", pause: 400 }
                ]
              },
              {
                zh: "我哥哥打球打得非常好。",
                vi: "Anh trai tôi chơi bóng rất giỏi.",
                situation: "Tự hào khoe với bạn bè về năng khiếu thể thao của người anh.",
                analysis: "Lặp lại động từ đánh kết hợp bổ ngữ trình độ đánh rất cừ.",
                explainAudio: [
                  { lang: "zh-CN", text: "我哥哥打球打得非常好。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này khen ngợi: Anh trai tôi chơi thể thao đánh bóng cực kỳ xuất sắc.", pause: 400 }
                ]
              },
              {
                zh: "周末你喜欢在家看书还是去外面打球？",
                vi: "Cuối tuần bạn thích ở nhà đọc sách hay là ra ngoài chơi bóng?",
                situation: "Hỏi thăm sở thích rèn luyện thể chất hay nghỉ ngơi tĩnh lặng của bạn.",
                analysis: "Câu hỏi lựa chọn giữa hai hoạt động đọc sách và chơi bóng ngoài trời.",
                explainAudio: [
                  { lang: "zh-CN", text: "周末你喜欢在家看书还是去外面打球？", pause: 800 },
                  { lang: "vi-VN", text: "Câu này dùng để hỏi thăm: Cuối tuần bạn thích ở nhà xem sách hay ra ngoài đánh bóng?", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy ghép thừa danh từ loại bóng vào sau cụm động tân",
                situation: "Người học muốn nói: 'Tôi chơi bóng rổ' và dịch ghép thành '我打球篮球'.",
                explanation: "Vì chữ thứ hai đã là danh từ bóng nói chung, nên không thể ghép thêm một danh từ bóng khác vào đuôi. Phải dùng động từ đánh trực tiếp với tên môn bóng (như 打篮球, 打网球), hoặc thay bằng động từ đá đối với môn bóng đá.",
                wrong: "我下午去打球篮球。(Lỗi ngữ pháp ghép thừa hai danh từ bóng)",
                right: "我下午去打篮球。 hoặc 我下午去打球。",
                tip: "Công thức nhớ: Có tên bóng cụ thể thì bỏ chữ bóng chung; nói chung chung không rõ môn gì mới dùng cụm từ này.",
                boundary: "Với môn bóng đá dùng chân đá, bắt buộc phải dùng động từ đá bóng: 踢足球, tuyệt đối không dùng động từ đánh này.",
                comparisons: [
                  { zh: "打篮球", vi: "Chơi bóng rổ (Môn bóng cụ thể thay thế hoàn toàn chữ bóng chung)" },
                  { zh: "踢足球", vi: "Đá bóng (Dùng chân đá, bắt buộc đổi động từ sang hành vi đá)" }
                ],
                checkQuestion: {
                  q: "Cách nói nào sau đây chuẩn xác khi muốn nói chơi bóng rổ?",
                  options: ["去打篮球", "去打球篮球"],
                  correct: 0,
                  explain: "Đã có tên môn bóng cụ thể thì bỏ chữ bóng chung, ghép thẳng với động từ đánh."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt bẫy động tân: Khi bạn chơi một môn bóng cụ thể như bóng rổ, hãy nói thẳng động từ đánh đi với bóng rổ. Tuyệt đối không ghép thêm danh từ bóng vào sau cụm từ này.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh ba, chữ sau là thanh hai. Xuống giọng sâu ở chữ đầu rồi vuốt cao giọng ở chữ sau.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh ba kết hợp thanh hai vuốt cao:", pause: 200 },
                { lang: "zh-CN", text: "打球", pause: 800 },
                { lang: "zh-CN", text: "去打球", pause: 1000 },
                { lang: "vi-VN", text: "Giữ chuẩn độ vuốt cao của âm thứ hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm bộ Thủ tay gảy bên trái và chữ Đinh bên phải. Chữ sau gồm bộ Vương ngọc bích bên trái và chữ Cầu bên phải.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ đầu có bộ tay gảy thể hiện bàn tay đang phát lực đánh. Chữ sau có hình viên ngọc tròn lăn như quả bóng.", pause: 400 }
              ]
            },
            summary: "Động từ ly hợp chỉ việc chơi các môn bóng bằng tay. Khi có tên môn bóng cụ thể, bỏ chữ bóng chung.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi nói về việc chơi bóng chung chung. Nếu đá bóng dùng chân, hãy nhớ đổi sang động từ đá.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 20: 路口 (lùkǒu)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g4-w20`,
            index: 20,
            hanzi: "路口",
            pinyin: "lùkǒu",
            coreMeaning: "Ngã rẽ, nút giao, đầu đường, ngã tư, giao lộ",
            introAudio: [
              { lang: "zh-CN", text: "路口", pause: 400 },
              { lang: "vi-VN", text: "Thanh bốn đi với thanh ba. Nghĩa là ngã rẽ, nút giao đường hoặc ngã tư ngã ba.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi chỉ đường, đi taxi, hẹn địa điểm đón xe hoặc quan sát đèn tín hiệu giao thông.",
              detail: "Bản chất là danh từ chỉ vị trí địa lý nơi các con đường giao cắt nhau hoặc lối mở ra vào của một con đường.",
              keyPoint: "Là điểm mốc giao thông quan trọng. Thường kết hợp với các động từ di chuyển như đến ngã rẽ, rẽ trái, rẽ phải.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "路口", pause: 300 },
                { lang: "vi-VN", text: " là danh từ chỉ giao lộ hoặc nút giao ngã tư. Từ này đặc biệt quan trọng khi bạn đi taxi hoặc hỏi đường ở Trung Quốc.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Đến ngã rẽ thì chuyển hướng (Chỉ đường)",
                pattern: "到 + (下一个) + 路口 + 往 + Hướng + 拐 / 转",
                note: "Đến điểm mốc giao lộ rồi mới thực hiện hành động chuyển hướng rẽ.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu chỉ đường cơ bản: Đến ngã rẽ, sau đó dùng giới từ hướng về bên phải hoặc bên trái rồi rẽ.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Hẹn gặp hoặc chờ đón tại ngã rẽ",
                pattern: "在 + 路口 + 等 + Người",
                note: "Làm trạng ngữ chỉ vị trí điểm hẹn cụ thể trên đường phố.",
                audio: [
                  { lang: "vi-VN", text: "Khi hẹn bạn ở đầu đường ngã rẽ, đặt giới từ ở trước từ này rồi thêm hành động chờ đợi.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "往前走到路口，请往右拐。",
                vi: "Đi thẳng về phía trước đến ngã rẽ, xin vui lòng rẽ sang phải.",
                situation: "Bác bảo vệ chỉ đường cho khách tìm đến bến xe buýt.",
                analysis: "Kết hợp hành vi đi thẳng tới nút giao và chuyển hướng rẽ phải.",
                explainAudio: [
                  { lang: "zh-CN", text: "往前走到路口，请往右拐。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Cứ đi thẳng đến nút giao ngã rẽ thì rẽ phải nhé.", pause: 400 }
                ]
              },
              {
                zh: "我就在学校前面的路口等你。",
                vi: "Tôi đứng đợi bạn ngay ở ngã rẽ phía trước trường học.",
                situation: "Gọi điện thoại báo điểm đón xe cụ thể cho bạn bè dễ nhận diện.",
                analysis: "Trường học làm mốc kết hợp phương vị từ trước mặt bổ nghĩa cho ngã rẽ.",
                explainAudio: [
                  { lang: "zh-CN", text: "我就在学校前面的路口等你。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Tôi đang đứng chờ bạn ngay tại nút giao trước cổng trường học này.", pause: 400 }
                ]
              },
              {
                zh: "下一个路口有一家很大的书店。",
                vi: "Ở ngã rẽ tiếp theo có một hiệu sách rất to.",
                situation: "Chỉ vị trí địa điểm mua sắm nằm ngay góc nút giao kế tiếp.",
                analysis: "Sử dụng từ chỉ thứ tự tiếp theo bổ nghĩa cho danh từ ngã rẽ.",
                explainAudio: [
                  { lang: "zh-CN", text: "下一个路口有一家很大的书店。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Tới nút giao tiếp theo có một tiệm sách lớn lắm.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy nhầm lẫn giữa 路口 (nút giao/ngã rẽ) và 路上 (trên đường đi)",
                situation: "Người học đang kẹt xe trên đường nhưng lại nói 'Tôi đang ở ngã rẽ' khiến bạn đứng chờ ở ngã rẽ tìm không thấy.",
                explanation: "Cụm '路上' chỉ trạng thái đang di chuyển dọc đường hoặc trên hành trình. Còn '路口' là một điểm cố định cụ thể nơi các nhánh đường giao cắt nhau (ngã ba, ngã tư).",
                wrong: "我还在路口，路上车很多。(Mâu thuẫn ngữ nghĩa nếu bản thân chưa tới ngã rẽ đó)",
                right: "我还在路上，等一下就到路口了。",
                tip: "Phân biệt: Đang đi trên đường dùng '路上'; chỉ điểm giao cắt cụ thể để rẽ hoặc đứng đợi dùng '路口'.",
                checkQuestion: {
                  q: "Tài xế hỏi bạn muốn xuống xe ở đâu, bạn muốn bảo 'Cho tôi xuống ở ngã tư phía trước':",
                  options: ["在前边的路口下车。", "在前边的路上下车。"],
                  correct: 0,
                  explain: "Điểm dừng xe cố định tại nút giao cắt phải dùng từ 路口."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt điểm giao cắt và trên đường: Đừng nhầm giữa việc đang đi trên đường và điểm nút giao ngã rẽ. Khi cần rẽ hướng hoặc chọn điểm dừng xe, bắt buộc phải dùng từ ", pause: 150 },
                  { lang: "zh-CN", text: "路口", pause: 200 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh bốn rơi dứt khoát. Chữ sau là thanh ba trầm và sâu.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh bốn dứt khoát kết hợp thanh ba:", pause: 200 },
                { lang: "zh-CN", text: "路口", pause: 800 },
                { lang: "zh-CN", text: "十字路口", pause: 1000 },
                { lang: "vi-VN", text: "Chú ý dứt khoát âm đầu và hạ trầm âm sau.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm bộ Túc hình bàn chân bên trái và chữ Các bên phải. Chữ sau là bộ Khẩu hình vuông mở lối.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Bàn chân bước đi trên con đường dẫn tới cái miệng ngã rẽ mở rộng ra các hướng.", pause: 350 }
              ]
            },
            summary: "Danh từ chỉ nút giao thông, ngã rẽ, đầu đường. Điểm mốc quen thuộc khi chỉ đường và chuyển hướng.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Kết hợp với các động từ đi tới ngã rẽ và rẽ trái rẽ phải để chỉ dẫn lộ trình giao thông.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 21: 读书 (dúshū)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g4-w21`,
            index: 21,
            hanzi: "读书",
            pinyin: "dúshū",
            coreMeaning: "Đọc sách (đọc to/ngâm cứu); đi học, theo học (tại trường lớp)",
            introAudio: [
              { lang: "zh-CN", text: "读书", pause: 400 },
              { lang: "vi-VN", text: "Thanh hai đi với thanh một. Nghĩa là đọc sách hoặc đi học, theo học tại trường lớp.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi nói về việc học tập ở trường đại học, thói quen đọc sách bồi dưỡng kiến thức, hoặc rèn luyện đọc thành tiếng.",
              detail: "Bản chất là kết cấu động tân. Có hai tầng nghĩa cốt lõi: Nghĩa đen là đọc sách bằng mắt hoặc phát âm thành tiếng; nghĩa mở rộng cực kỳ thông dụng là đi học, theo học một cấp bậc giáo dục.",
              keyPoint: "Khẩu ngữ thường dùng với nghĩa đi học, học tập tại một ngôi trường hoặc bậc học cụ thể.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "读书", pause: 300 },
                { lang: "vi-VN", text: " có hai tầng nghĩa quan trọng: Một là chăm chú đọc sách, hai là đi học, theo học tại một trường đại học nào đó.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Theo học tại một trường học (Đi học)",
                pattern: "在 + Trường học / Nơi chốn + 读书",
                note: "Đồng nghĩa với việc đi học, làm học sinh sinh viên tại cơ sở giáo dục đó.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu theo học tại trường: Đặt giới từ ở cùng tên trường lên trước, nối với từ này ở sau.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Thói quen chăm chỉ đọc sách bồi dưỡng",
                pattern: "Chủ ngữ + 很喜欢 + 读书 / 认真读书",
                note: "Biểu thị sở thích hoặc tinh thần nỗ lực dùi mài kinh sử.",
                audio: [
                  { lang: "vi-VN", text: "Khi nói về tinh thần chăm học hoặc thói quen đọc sách, dùng từ này đi cùng phó từ chăm chỉ hoặc thích thú.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "我姐姐在一所很有名的大学读书。",
                vi: "Chị gái tôi đang theo học tại một trường đại học rất nổi tiếng.",
                situation: "Tự hào chia sẻ về con đường học vấn của chị gái với người quen.",
                analysis: "Sử dụng nghĩa mở rộng chỉ việc đi học, làm sinh viên của trường đại học.",
                explainAudio: [
                  { lang: "zh-CN", text: "我姐姐在一所很有名的大学读书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Chị gái tôi hiện đang theo học tại một ngôi trường đại học rất có tiếng tăm.", pause: 400 }
                ]
              },
              {
                zh: "他在房间里认真读书呢。",
                vi: "Cậu ấy đang chăm chú đọc sách trong phòng đấy.",
                situation: "Nói khẽ nhắc nhở người khác không làm phiền bạn đang tập trung học.",
                analysis: "Sử dụng trạng ngữ chăm chỉ bổ nghĩa cho hành vi đọc sách.",
                explainAudio: [
                  { lang: "zh-CN", text: "他在房间里认真读书呢。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Bạn ấy đang ở trong phòng chăm chỉ dùi mài đọc sách đó.", pause: 400 }
                ]
              },
              {
                zh: "从小到大，他都非常喜欢读书。",
                vi: "Từ nhỏ đến lớn, anh ấy đều vô cùng yêu thích việc đọc sách.",
                situation: "Khen ngợi tinh thần hiếu học và thói quen đọc rộng hiểu nhiều của một người bạn.",
                analysis: "Cụm thời gian từ nhỏ đến lớn đứng đầu câu làm nền tảng cho thói quen.",
                explainAudio: [
                  { lang: "zh-CN", text: "从小到大，他都非常喜欢读书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Từ bé tới lớn, bạn ấy lúc nào cũng mê mẩn đọc sách.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy máy móc phân chia tuyệt đối giữa 读书 (học tập) và 看书 (đọc giải trí)",
                situation: "Người học nghe ai đó nói '我在看书' thì vội vàng bảo 'đọc sách học tập thì phải nói 读书 chứ!'.",
                explanation: "Không được máy móc phân đôi cực đoan! Cả hai từ đều có thể dùng để chỉ hành động đọc sách. Sự khác biệt tinh tế nằm ở ngữ cảnh: 看书 nhấn mạnh vào thị giác nhìn chữ, lật trang đọc (có thể là tiểu thuyết, báo chí, sách chuyên ngành); còn 读书 có thể mang nghĩa đọc phát ra thành tiếng (như đọc to bài khóa) VÀ có thêm một nghĩa rộng độc quyền là 'đi học, theo học bậc học sinh viên tại trường' (ví dụ: 在北京读书). Đừng gắn nhãn câu của người khác là sai khi họ dùng 看书 để học bài.",
                wrong: "他在大学看书。(Kém tự nhiên nếu ý định là nói anh ấy đang theo học đại học ở đó)",
                right: "他在大学读书。 hoặc 他在大学上学。(Chuẩn xác khi nói về việc đi học đại học)",
                tip: "Mẹo phân biệt nhanh: Muốn nói 'đi học tại trường' -> bắt buộc dùng 读书; muốn nói cầm quyển sách cụ thể đọc trên tay -> cả 看书 và 读书 đều đúng và tự nhiên.",
                boundary: "Khi đọc to bài tập đọc trong lớp cho cả lớp nghe, giáo viên thường dùng động từ đọc thành tiếng: 读课文.",
                comparisons: [
                  { zh: "你在哪个大学读书？", vi: "Bạn đang theo học ở trường đại học nào? (Chỉ con đường học vấn)" },
                  { zh: "他在看一本好看的小说", vi: "Anh ấy đang đọc một cuốn tiểu thuyết rất hay (Hành vi thị giác đọc cụ thể)" }
                ],
                checkQuestion: {
                  q: "Khi muốn hỏi 'Bạn đang theo học ở trường đại học nào?', cách diễn đạt tự nhiên nhất là:",
                  options: ["你在哪个大学读书？", "你在哪个大学看书？"],
                  correct: 0,
                  explain: "Chỉ con đường học vấn, làm sinh viên theo học tại trường bắt buộc dùng 读书."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt ngữ nghĩa sâu sắc: Đừng hiểu máy móc rằng một từ chỉ đọc chơi và một từ chỉ đọc học. Hãy nhớ rằng từ ", pause: 150 },
                  { lang: "zh-CN", text: "读书", pause: 200 },
                  { lang: "vi-VN", text: " có một nghĩa độc quyền rất quan trọng là đi học, theo học tại một trường đại học. Còn khi cầm quyển sách đọc trên tay, bạn dùng cả hai từ đều đúng.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh hai, vuốt giọng từ âm vực trung bình lên cao. Chữ sau là thanh một ngân phẳng.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh hai vuốt cao và thanh một ngân dài:", pause: 200 },
                { lang: "zh-CN", text: "读书", pause: 800 },
                { lang: "zh-CN", text: "喜欢读书", pause: 1000 },
                { lang: "vi-VN", text: "Giữ chuẩn độ vuốt của âm thứ nhất.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu gồm bộ Ngôn bên trái thể hiện lời đọc thành tiếng và chữ Mại bên phải. Chữ sau là chữ Thư với nét gập đứng và dấu chấm ở trên.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Đọc sách cần dùng lời nói phát âm nên có bộ Ngôn. Chữ sau là cuốn sách tri thức.", pause: 350 }
              ]
            },
            summary: "Động từ mang hai nghĩa: Đọc sách và theo học tại trường lớp. Luôn nhớ dùng trong ngữ cảnh đi học đại học.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi nói về thói quen đọc sách hoặc diễn đạt việc đang theo học tại một ngôi trường nào đó.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 22: 姐 (jiě)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g4-w22`,
            index: 22,
            hanzi: "姐",
            pinyin: "jiě",
            coreMeaning: "Chị, chị gái (xưng hô thân tộc hoặc giao tiếp thân mật)",
            introAudio: [
              { lang: "zh-CN", text: "姐", pause: 400 },
              { lang: "vi-VN", text: "Thanh ba. Nghĩa là chị hoặc chị gái.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng để gọi trực tiếp người chị gái trong gia đình, hoặc kết hợp với họ để xưng hô lịch thiệp với phụ nữ lớn tuổi hơn mình ở chỗ làm.",
              detail: "Bản chất là danh từ thân tộc. Trong khẩu ngữ có thể gọi một chữ hoặc lặp lại thành từ hai âm tiết với âm sau đọc thanh nhẹ.",
              keyPoint: "Trong khẩu ngữ xưng hô hàng ngày, việc nói tắt chỉ chị gái tôi rất phổ biến và gần gũi.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "姐", pause: 300 },
                { lang: "vi-VN", text: " là danh từ chỉ người chị gái. Bạn có thể gọi chị ơi hoặc dùng để xưng hô thân mật nơi công sở.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Gọi chị gái thân mật (Khẩu ngữ)",
                pattern: "我姐 + Vị ngữ",
                note: "Lược bỏ trợ từ sở hữu để thể hiện sự ruột thịt, gần gũi tự nhiên.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu xưng hô thân mật: Nói tắt đại từ tôi và từ chị gái để tạo sự thân thương.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Xưng hô với đàn chị nơi công sở",
                pattern: "Họ người + 姐",
                note: "Đặt họ của đồng nghiệp nữ lớn tuổi hơn phía trước để gọi một cách tôn trọng và gần gũi.",
                audio: [
                  { lang: "vi-VN", text: "Nơi công sở, bạn có thể ghép họ của đồng nghiệp nữ trước từ này để xưng hô thân thiện, ví dụ chị Vương, chị Trương.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "我姐在北京的一所大学读书。",
                vi: "Chị gái tôi đang theo học tại một trường đại học ở Bắc Kinh.",
                situation: "Kể về chị gái với bạn bè cùng lớp.",
                analysis: "Dùng cụm xưng hô thân mật làm chủ ngữ của câu.",
                explainAudio: [
                  { lang: "zh-CN", text: "我姐在北京的一所大学读书。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Chị gái tôi đang học đại học ở Bắc Kinh.", pause: 400 }
                ]
              },
              {
                zh: "姐，今天晚上我们一起去吃中国菜吧！",
                vi: "Chị ơi, tối nay hai chị em mình cùng đi ăn món Trung Quốc đi!",
                situation: "Rủ chị ruột đi ăn nhà hàng sau giờ làm việc vất vả.",
                analysis: "Dùng làm từ hô ngữ đứng ở đầu câu giao tiếp trực tiếp.",
                explainAudio: [
                  { lang: "zh-CN", text: "姐，今天晚上我们一起去吃中国菜吧！", pause: 800 },
                  { lang: "vi-VN", text: "Câu này rủ rê thân mật: Chị ơi, tối nay chị em mình đi ăn món Trung Hoa nhé!", pause: 400 }
                ]
              },
              {
                zh: "王姐工作很认真，大家都很喜欢她。",
                vi: "Chị Vương làm việc rất chăm chỉ, ai cũng đều quý mến chị ấy.",
                situation: "Khen ngợi tác phong của một người chị đồng nghiệp chung phòng ban.",
                analysis: "Ghép họ của người chị với danh xưng để gọi nơi làm việc.",
                explainAudio: [
                  { lang: "zh-CN", text: "王姐工作很认真，大家都很喜欢她。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Chị Vương làm việc cực kỳ có trách nhiệm, mọi người ai nấy đều yêu quý chị.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy lạm dụng từ Tiểu Thư (小姐) khi xưng hô với phụ nữ trẻ",
                situation: "Người học nghĩ rằng cứ ghép chữ tiểu với chữ này sẽ thành cách gọi lịch sự với mọi cô gái trẻ ở mọi miền.",
                explanation: "Ở một số thành phố và ngữ cảnh giải trí tại Trung Quốc đại lục, từ ghép Tiểu Thư từng có thời gian bị biến tướng nghĩa nhạy cảm. Để xưng hô lịch thiệp và an toàn tuyệt đối với phụ nữ trẻ trong giao tiếp phục vụ, người bản xứ hiện đại ưu tiên dùng từ 'Cô gái' (美女) hoặc 'Bạn nữ này' (女士), hoặc ghép họ với từ này đối với đồng nghiệp quen biết.",
                wrong: "小姐，请问车站在哪儿？(Ở một số vùng phía bắc nghe có thể hơi xa cách hoặc thiếu tự nhiên)",
                right: "您好，请问车站在哪儿？ hoặc 请问姑娘，车站在哪儿？",
                tip: "Mẹo giao tiếp hiện đại: Khi hỏi đường phụ nữ ngoài phố, chỉ cần dùng 'Xin chào, xin hỏi' (您好，请问); trong công sở gọi đàn chị cứ dùng 'Họ + 姐'.",
                checkQuestion: {
                  q: "Cách xưng hô gần gũi, tôn trọng với đồng nghiệp nữ họ Lý lớn tuổi hơn là:",
                  options: ["李姐", "李小姐"],
                  correct: 0,
                  explain: "Nơi công sở, cách gọi thân thiện và được ưa chuộng nhất là ghép Họ với từ 姐."
                },
                audio: [
                  { lang: "vi-VN", text: "Lưu ý văn hóa xưng hô: Trong môi trường công sở, cách xưng hô chuẩn mực và thân thiện nhất với các đàn chị lớn tuổi hơn là ghép họ của họ với từ này, ví dụ như chị Lý, chị Trương.", pause: 400 }
                ]
              }
            ],
            pron: {
              guide: "Phát âm thanh ba sâu ở đáy họng. Nếu dùng dạng lặp hai chữ, chữ sau phải đọc lướt thành thanh nhẹ.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh ba tròn vành rõ chữ:", pause: 200 },
                { lang: "zh-CN", text: "姐", pause: 800 },
                { lang: "zh-CN", text: "姐姐", pause: 1000 },
                { lang: "vi-VN", text: "Nhẹ nhàng ở âm thứ hai nếu đọc từ lặp.", pause: 300 }
              ]
            },
            write: {
              desc: "Gồm bộ Nữ bên trái thể hiện phái nữ và chữ Thả bên phải.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Bên trái là bộ Nữ tượng trưng cho phụ nữ con gái, bên phải là chữ Thả mang tính chất sắp đặt tôn ti trong nhà.", pause: 350 }
              ]
            },
            summary: "Danh từ chỉ chị gái. Có thể dùng dạng gọi tắt thân mật hoặc ghép họ nơi công sở.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng để xưng hô người chị ruột hoặc gọi tôn kính, thân thiện các đồng nghiệp nữ lớn tuổi hơn mình.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 23: 车站 (chēzhàn)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g4-w23`,
            index: 23,
            hanzi: "车站",
            pinyin: "chēzhàn",
            coreMeaning: "Ga xe, bến xe, trạm xe (nơi đón trả khách)",
            introAudio: [
              { lang: "zh-CN", text: "车站", pause: 400 },
              { lang: "vi-VN", text: "Thanh một đi với thanh bốn. Nghĩa là trạm xe, bến xe hoặc nhà ga.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi bạn cần bắt xe buýt, đón tàu hỏa, tiễn người thân đi xa hoặc hẹn nhau ở điểm trung chuyển giao thông công cộng.",
              detail: "Bản chất là danh từ chỉ cơ sở hạ tầng giao thông đón trả khách. Có thể dùng làm từ chung cho bến xe buýt, bến xe khách hoặc nhà ga đường sắt.",
              keyPoint: "Danh từ địa điểm trung chuyển. Thường đi cùng các động từ đi tới bến xe, đón người ở ga xe, hoặc xuống trạm.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "车站", pause: 300 },
                { lang: "vi-VN", text: " là danh từ mang nghĩa trạm xe, bến xe hoặc nhà ga. Đây là địa điểm giao thông công cộng cốt lõi.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Đi bến xe để đón hoặc tiễn ai",
                pattern: "去 + 车站 + 接 / 送 + Người",
                note: "Cấu trúc liên động: Di chuyển tới nhà ga với mục đích đón hoặc tiễn người thân.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu đi bến xe đón người: Đặt động từ đi cùng từ bến xe trước, rồi tiếp nối bằng động từ đón hoặc tiễn.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Khoảng cách từ đâu tới bến xe",
                pattern: "Địa điểm + 离 + 车站 + 很近 / 很远",
                note: "Cấu trúc so sánh cự ly khoảng cách với giới từ ly.",
                audio: [
                  { lang: "vi-VN", text: "Khi nói nhà hay trường học cách bến xe gần hay xa, dùng cấu trúc: Mốc ban đầu, giới từ ly, bến xe rồi thêm tính từ xa gần.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "我后天要去车站接我姐姐。",
                vi: "Ngày mốt tôi phải ra bến xe đón chị gái tôi.",
                situation: "Giải thích lý do bận việc gia đình vào ngày kia với bạn bè.",
                analysis: "Kết hợp trạng ngữ thời gian ngày kia và mục đích đi bến xe đón chị gái.",
                explainAudio: [
                  { lang: "zh-CN", text: "我后天要去车站接我姐姐。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Ngày kia tôi phải ra nhà ga đón chị gái tôi về.", pause: 400 }
                ]
              },
              {
                zh: "我们大学的右边就是一个公共汽车站。",
                vi: "Phía bên phải trường đại học chúng tôi chính là một trạm xe buýt.",
                situation: "Chỉ vị trí trạm xe công cộng tiện lợi ngay sát cạnh khuôn viên trường.",
                analysis: "Kết hợp mốc phương vị bên phải trường học và danh từ trạm xe buýt.",
                explainAudio: [
                  { lang: "zh-CN", text: "我们大学的右边就是一个公共汽车站。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Ngay bên phải trường đại học của bọn mình là một bến xe buýt.", pause: 400 }
                ]
              },
              {
                zh: "这家饭馆离火车站非常近。",
                vi: "Quán ăn này cách ga tàu hỏa vô cùng gần.",
                situation: "Gợi ý địa điểm ăn uống tiện lợi cho khách sắp lên tàu khởi hành.",
                analysis: "Dùng cấu trúc khoảng cách kết hợp từ ga tàu hỏa cụ thể.",
                explainAudio: [
                  { lang: "zh-CN", text: "这家饭馆离火车站非常近。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Tiệm ăn này nằm rất gần ga tàu hỏa.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy thiếu lượng từ khi bổ nghĩa cho danh từ địa điểm",
                situation: "Người học muốn nói: 'Có một bến xe' nhưng lại nói thiếu lượng từ thành '有一个车站'.",
                explanation: "Mặc dù '一个车站' hoàn toàn đúng ngữ pháp, nhưng khi muốn nói 'trạm xe này' hoặc 'trạm xe buýt đó', người học hay quên mất lượng từ '个' đứng giữa đại từ chỉ thị và danh từ.",
                wrong: "这车站离我家很近。(Trong ngữ pháp chuẩn mực phải có lượng từ)",
                right: "这个车站离我家很近。",
                tip: "Công thức vàng: Cứ có chữ 'này' hoặc 'kia' đứng trước bến xe, bắt buộc phải kẹp lượng từ vào giữa: 这个车站 / 那个车站.",
                checkQuestion: {
                  q: "Điền từ chuẩn xác: '请问，(___) 离这里远不远？'",
                  options: ["这个车站", "这车站"],
                  correct: 0,
                  explain: "Đại từ chỉ thị kết hợp với danh từ phải có lượng từ cái đứng ở giữa."
                },
                audio: [
                  { lang: "vi-VN", text: "Lưu ý lượng từ: Khi muốn nói bến xe này hay trạm xe kia, bạn phải luôn nhớ chèn lượng từ vào giữa, nói đầy đủ là ", pause: 150 },
                  { lang: "zh-CN", text: "这个车站", pause: 200 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh một ngân cao và phẳng. Chữ sau là thanh bốn rơi dứt khoát.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh một kết hợp thanh bốn dứt khoát:", pause: 200 },
                { lang: "zh-CN", text: "车站", pause: 800 },
                { lang: "zh-CN", text: "去车站", pause: 1000 },
                { lang: "vi-VN", text: "Dứt khoát ở âm tiết thứ hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu là hình tượng cỗ xe. Chữ sau gồm bộ Lập đứng ở bên trái và chữ Chiêm bên phải.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Chữ sau là chữ trạm có nghĩa là đứng lại, ghép với xe là nơi các cỗ xe dừng bánh đón trả hành khách.", pause: 400 }
              ]
            },
            summary: "Danh từ chỉ bến xe, ga tàu. Luôn nhớ kèm lượng từ khi kết hợp với đại từ chỉ thị.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi nói về bến xe hoặc ga tàu. Kết hợp với các động từ đi tới bến xe đón hoặc tiễn người thân.", pause: 350 }
            ]
          },

          // -------------------------------------------------------------------
          // TỪ 24: 打开 (dǎkāi)
          // -------------------------------------------------------------------
          {
            id: `${LESSON_ID}-g4-w24`,
            index: 24,
            hanzi: "打开",
            pinyin: "dǎkāi",
            coreMeaning: "Mở, mở ra, bật (sách vở, cửa nẻo, hộp quà, thiết bị điện)",
            introAudio: [
              { lang: "zh-CN", text: "打开", pause: 400 },
              { lang: "vi-VN", text: "Thanh ba đi với thanh một. Nghĩa là mở ra hoặc bật lên.", pause: 300 }
            ],
            meaning: {
              situation: "Dùng khi giáo viên yêu cầu lật mở sách giáo trình, bảo ai đó mở cửa sổ cho thoáng, mở hộp bưu kiện hoặc bật máy tính, ti vi.",
              detail: "Bản chất là kết cấu động bổ kết quả gồm động từ đánh và bổ ngữ khai (mở toang ra). Nhấn mạnh hành động tác động khiến sự vật đạt được trạng thái mở ra hoàn toàn.",
              keyPoint: "Hành động mở có kết quả mở toang. Tân ngữ theo sau có thể là sách, cửa, hộp, hoặc thiết bị điện khẩu ngữ.",
              audio: [
                { lang: "vi-VN", text: "Từ ", pause: 150 },
                { lang: "zh-CN", text: "打开", pause: 300 },
                { lang: "vi-VN", text: " là động từ mang bổ ngữ kết quả, có nghĩa là mở toang ra hoặc bật lên. Thường dùng khi mở sách, mở cửa hoặc mở đồ hộp.", pause: 400 }
              ]
            },
            structures: [
              {
                title: "Khung 1: Mở sách đến trang bao nhiêu (Lời giáo viên)",
                pattern: "请大家 + 打开书 + ，翻到第 + Số trang + 页",
                note: "Câu khẩu lệnh quen thuộc bậc nhất trên giảng đường tiếng Trung.",
                audio: [
                  { lang: "vi-VN", text: "Khung câu mở sách học bài: Xin mời mọi người mở sách ra, lật tới trang số bao nhiêu.", pause: 350 }
                ]
              },
              {
                title: "Khung 2: Tác động mở vật thể (Cửa, hộp, quà)",
                pattern: "Chủ ngữ + 打开 + (门 / 窗户 / 盒子)",
                note: "Động tác khiến sự vật chuyển từ trạng thái đóng kín sang mở toang.",
                audio: [
                  { lang: "vi-VN", text: "Khi muốn bảo ai đó mở cửa hay mở hộp quà, đặt từ này trước danh từ vật thể cần mở.", pause: 350 }
                ]
              }
            ],
            examples: [
              {
                zh: "同学们，请打开书，看第二十页。",
                vi: "Các em học sinh, xin mời mở sách ra, xem trang số hai mươi.",
                situation: "Giáo viên bắt đầu bài giảng mới trên lớp học.",
                analysis: "Động từ mang bổ ngữ kết quả kết hợp tân ngữ cuốn sách.",
                explainAudio: [
                  { lang: "zh-CN", text: "同学们，请打开书，看第二十页。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Các em, xin mời mở sách giáo trình ra và nhìn vào trang hai mươi.", pause: 400 }
                ]
              },
              {
                zh: "屋里有点儿热，请把窗户打开吧。",
                vi: "Trong phòng hơi nóng một chút, xin hãy mở cửa sổ ra nhé.",
                situation: "Nhờ người ngồi cạnh mở cửa đón gió mát vào phòng.",
                analysis: "Sử dụng câu chữ bả nhấn mạnh xử lý sự vật dịch chuyển trạng thái mở.",
                explainAudio: [
                  { lang: "zh-CN", text: "屋里有点儿热，请把窗户打开吧。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này diễn đạt: Trong phòng hơi ngột ngạt nóng nực, bạn mở giúp cái cửa sổ ra nhé.", pause: 400 }
                ]
              },
              {
                zh: "他打开电脑，开始写作业。",
                vi: "Cậu ấy bật máy vi tính lên và bắt đầu làm bài tập.",
                situation: "Miêu tả chuỗi thao tác bắt đầu buổi tự học tại bàn của học sinh.",
                analysis: "Dùng với nghĩa bật khởi động thiết bị máy móc vi tính trong khẩu ngữ.",
                explainAudio: [
                  { lang: "zh-CN", text: "他打开电脑，开始写作业。", pause: 800 },
                  { lang: "vi-VN", text: "Câu này nghĩa là: Bạn ấy khởi động bật máy tính lên rồi bắt đầu cặm cụi làm bài tập.", pause: 400 }
                ]
              }
            ],
            traps: [
              {
                name: "Bẫy dùng nhầm từ 打开 để nói về hành vi 'lái xe' hoặc 'mở tiệm buôn bán'",
                situation: "Người học nghĩ rằng chữ 'mở' nào trong tiếng Việt cũng dịch thành '打开', nên ghép thành '打开车' (lái xe) hoặc '打开店' (mở cửa hàng).",
                explanation: "Từ này mang bổ ngữ kết quả, CHỈ DÙNG cho hành động tác động vật lý làm bung toang một đồ vật (như mở nắp, mở trang sách, mở toang cửa). Với hành động lái xe, bắt buộc dùng chữ đơn: 开车; với việc khai trương mở cửa hàng buôn bán, dùng: 开店. Tuyệt đối không nhét chữ thứ hai vào các trường hợp này.",
                wrong: "我爸爸每天打开车去上班。(Lỗi nặng: Biến thành hành vi cạy tung chiếc xe)",
                right: "我爸爸每天开车去上班。(Chuẩn xác khi nói tự lái xe)",
                tip: "Phân biệt dứt khoát: Lái xe là 开车; mở tiệm là 开店; mở toang đồ vật hữu hình (sách, cửa sổ, hộp quà) mới dùng 打开.",
                boundary: "Với thiết bị điện (đèn, quạt, máy tính), khẩu ngữ có thể dùng cả 开 lẫn 打开.",
                checkQuestion: {
                  q: "Câu nào dưới đây dùng đúng ngữ pháp?",
                  options: ["请大家打开书。", "请大家打开车。"],
                  correct: 0,
                  explain: "Mở sách giáo trình lật trang ra bắt buộc dùng cụm từ 打开书."
                },
                audio: [
                  { lang: "vi-VN", text: "Phân biệt bẫy động từ mở: Tuyệt đối không dùng cụm từ mở này để nói về việc lái xe. Lái xe là ", pause: 150 },
                  { lang: "zh-CN", text: "开车", pause: 200 },
                  { lang: "vi-VN", text: ", chỉ khi bạn lật mở trang sách hoặc mở toang cánh cửa, mới được dùng ", pause: 150 },
                  { lang: "zh-CN", text: "打开", pause: 200 }
                ]
              }
            ],
            pron: {
              guide: "Chữ đầu là thanh ba trầm xuống đáy họng. Chữ sau là thanh một ngân cao và phẳng.",
              audio: [
                { lang: "vi-VN", text: "Luyện phát âm chuẩn thanh ba kết hợp thanh một ngân cao:", pause: 200 },
                { lang: "zh-CN", text: "打开", pause: 800 },
                { lang: "zh-CN", text: "打开书", pause: 1000 },
                { lang: "vi-VN", text: "Rất tốt. Chú ý độ ngân của âm thứ hai.", pause: 300 }
              ]
            },
            write: {
              desc: "Chữ đầu có bộ Thủ tay gảy bên trái. Chữ sau gồm hai nét ngang, một nét phẩy và một nét sổ thẳng đứng.",
              audio: [
                { lang: "vi-VN", text: "Cách nhớ mặt chữ: Dùng bàn tay tác động mở toang hai cánh cửa then cài ra phía ngoài.", pause: 350 }
              ]
            },
            summary: "Động từ mang bổ ngữ kết quả chỉ hành vi mở bung vật thể hoặc bật thiết bị. Phân biệt với lái xe.",
            summaryAudio: [
              { lang: "vi-VN", text: "Chốt cách dùng: Dùng từ này khi yêu cầu mở sách vở, mở cửa sổ hoặc bật máy móc. Không dùng cho việc lái xe ô tô.", pause: 350 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // BÀI TẬP TRẮC NGHIỆM & NGHE HIỂU NHÓM 4
        // ---------------------------------------------------------------------
        exercises: [
          {
            id: `${LESSON_ID}-g4-ex1`,
            type: "Phân biệt động từ thể thao",
            prompt: "Chọn câu diễn đạt chuẩn xác nhất khi muốn nói: 'Chiều nay chúng tôi đi chơi bóng rổ.'",
            options: [
              "下午我们去打篮球。",
              "下午我们去打球篮球。",
              "下午我们去踢篮球。",
              "下午我们去打球的篮球。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Đã có tên môn bóng cụ thể là bóng rổ thì bỏ chữ bóng chung, ghép thẳng với động từ đánh.",
            reasonWrong: "Chưa đúng. Tuyệt đối không ghép thêm danh từ loại bóng vào sau kết cấu ly hợp chơi bóng.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 1: Đâu là cách diễn đạt chuẩn xác hành động đi chơi bóng rổ?", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 1: Tên môn bóng cụ thể sẽ thay thế trực tiếp chữ bóng chung trong kết cấu động tân. Do đó đáp án là ", pause: 150 },
              { lang: "zh-CN", text: "打篮球", pause: 250 }
            ]
          },
          {
            id: `${LESSON_ID}-g4-ex2`,
            type: "Phân biệt ngữ nghĩa học vấn",
            prompt: "Điền từ thích hợp vào chỗ trống để nói về việc theo học đại học: '我姐姐在北京大学 (___)。'",
            options: ["读书", "看书", "打球", "打开"],
            correct: 0,
            reasonRight: "Chính xác! Diễn đạt con đường học vấn, làm sinh viên theo học tại trường đại học bắt buộc dùng 读书.",
            reasonWrong: "Chưa đúng. Theo học tại một trường đại học với tư cách sinh viên thì từ chuẩn mực là 读书.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 2: Hãy chọn từ điền vào chỗ trống để biểu đạt việc theo học tại trường đại học Bắc Kinh.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 2: Từ có nghĩa độc quyền chỉ việc theo học tại trường lớp là ", pause: 150 },
              { lang: "zh-CN", text: "读书", pause: 250 }
            ]
          },
          {
            id: `${LESSON_ID}-g4-ex3`,
            type: "Sửa lỗi động từ mở",
            prompt: "Chọn câu dùng đúng từ '打开' trong các câu sau:",
            options: [
              "老师来了，请大家打开书。",
              "我爸爸每天打开车去工作。",
              "王老师在大学打开课。",
              "他今天打开出租车去机场。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Mở trang sách giáo trình bắt buộc dùng 打开书.",
            reasonWrong: "Chưa đúng. Lái xe ô tô dùng 开车, không được dùng động từ mở bung vật thể.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 3: Tìm câu sử dụng chuẩn xác động từ mở bung kết quả.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 3: Động từ này dùng cho sách vở, cửa sổ hoặc đồ hộp. Lái xe tuyệt đối không dùng từ này.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g4-ex4`,
            type: "Trắc nghiệm chỉ đường giao thông",
            prompt: "Câu nào dưới đây là câu chỉ đường chuẩn xác tại nút giao ngã rẽ?",
            options: [
              "走到前面的路口，请往右拐。",
              "走到前面的路上，请往右拐。",
              "在前面的车站路，请往右拐。",
              "走到前面的路口，请右边拐。"
            ],
            correct: 0,
            reasonRight: "Chính xác! Nút giao để rẽ là 路口, kết hợp với giới từ chỉ hướng 往右拐.",
            reasonWrong: "Chưa đúng. Điểm giao cắt để rẽ phải là nút giao的路口, không dùng 路上.",
            questionAudio: [
              { lang: "vi-VN", text: "Câu hỏi 4: Đâu là câu chỉ dẫn chuyển hướng tại nút giao chuẩn ngữ pháp?", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Giải thích câu 4: Đến điểm giao cắt ngã rẽ và dùng giới từ hướng về bên phải để rẽ, câu đầu tiên là chuẩn mực nhất.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g4-ex5`,
            type: "Nghe hiểu phản xạ",
            isListening: true,
            prompt: "Nghe đoạn ghi âm và chọn thông tin đúng nhất về việc đón người thân:",
            options: [
              "Người này sẽ đến trạm xe buýt trước trường đại học để đón chị gái.",
              "Chị gái của người này đang ở hiệu sách mua sách.",
              "Bố của người này đang lái xe đi chơi bóng.",
              "Người này đang ở nhà mở máy tính học bài."
            ],
            correct: 0,
            reasonRight: "Chính xác! Lời thoại thông báo sẽ ra trạm xe buýt phía trước trường đại học đón chị gái vừa tan học về.",
            reasonWrong: "Chưa đúng. Hãy chú ý lắng nghe kỹ địa điểm bến xe và đối tượng được đón là người chị.",
            transcript: "我姐在大学读书，今天下午四点半下课，我现在要去学校前面的公共汽车站接她。",
            questionAudio: [
              { lang: "zh-CN", text: "我姐在大学读书，今天下午四点半下课，我现在要去学校前面的公共汽车站接她。", pause: 800 },
              { lang: "vi-VN", text: "Hãy chọn thông tin chuẩn xác nhất từ đoạn hội thoại vừa nghe.", pause: 300 }
            ],
            explainAudio: [
              { lang: "vi-VN", text: "Bản chép lời nói rằng: Chị tôi học ở trường đại học, bốn rưỡi chiều nay tan học, bây giờ tôi phải ra trạm xe buýt trước trường đón chị ấy. Đáp án là ra trạm xe buýt trước trường đón chị.", pause: 450 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // NHIỆM VỤ TỰ DÙNG TỪ THỰC TẾ (3 TẦNG TRỢ GIÚP) NHÓM 4
        // ---------------------------------------------------------------------
        selfUse: [
          {
            id: `${LESSON_ID}-g4-su1`,
            situation: "Tình huống: Bạn chỉ đường cho một người bạn đến thăm nhà: 'Đi thẳng đến ngã rẽ phía trước, rẽ sang bên phải là nhìn thấy một bến xe buýt lớn.'",
            hint1: "Đi thẳng đến mốc 'ngã rẽ phía trước', dùng giới từ chỉ hướng 'rẽ sang phải' rồi nêu sự tồn tại của bến xe buýt.",
            hint2: "Khung câu gợi ý: 往前走到前边的路口 + 往右拐 + 就能看到一个大车站。",
            modelAnswer: "一直往前走到前面的路口，往右拐，就是一个大车站。",
            modelExplain: "Kết hợp chỉ đường đi thẳng tới giao lộ, giới từ hướng rẽ phải và phó từ phán đoán nêu sự hiện diện của trạm xe.",
            questionAudio: [
              { lang: "vi-VN", text: "Nhiệm vụ 1: Hãy tự nói câu: Đi thẳng đến ngã rẽ phía trước, rẽ phải là thấy một bến xe lớn.", pause: 300 }
            ],
            hint1Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 1: Nêu rõ hành động đi thẳng tới ngã rẽ, sau đó mới tới hướng rẽ phải và bến xe.", pause: 300 }
            ],
            hint2Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 2: Khung câu gồm đi thẳng tới ngã rẽ phía trước, hướng về bên phải rẽ, chính là một trạm xe lớn.", pause: 300 }
            ],
            modelAudio: [
              { lang: "zh-CN", text: "一直往前走到前面的路口，往右拐，就是一个大车站。", pause: 800 },
              { lang: "vi-VN", text: "Câu mẫu hoàn chỉnh: Cứ đi thẳng tới ngã rẽ phía trước rồi quẹo phải là tới ngay một bến xe lớn.", pause: 300 }
            ]
          },
          {
            id: `${LESSON_ID}-g4-su2`,
            situation: "Tình huống: Bạn khoe với bạn bè về gia đình: 'Chị gái tôi học đại học ở Bắc Kinh, chị ấy vừa thích đọc sách vừa thích chơi bóng rổ.'",
            hint1: "Vế đầu dùng cụm 'học đại học'. Vế sau dùng cấu trúc song hành 'vừa... vừa...' với sở thích đọc sách và chơi bóng rổ.",
            hint2: "Khung câu gợi ý: 我姐在北京上大学，她 + 一边喜欢读书 + 一边喜欢打篮球。",
            modelAnswer: "我姐在北京读大学，她很喜欢读书，周末也经常去打球。",
            modelExplain: "Sử dụng từ xưng hô thân mật chị tôi, động từ học đại học, danh từ đọc sách và động từ chơi bóng.",
            questionAudio: [
              { lang: "vi-VN", text: "Nhiệm vụ 2: Hãy tự diễn đạt câu: Chị gái tôi học đại học ở Bắc Kinh, chị ấy rất thích đọc sách và thường đi chơi bóng.", pause: 300 }
            ],
            hint1Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 1: Nêu địa điểm học đại học của người chị trước, sau đó nối tiếp hai sở thích đọc sách và đánh bóng.", pause: 300 }
            ],
            hint2Audio: [
              { lang: "vi-VN", text: "Gợi ý tầng 2: Khung câu gồm chị tôi học đại học ở Bắc Kinh, rất thích đọc sách, cuối tuần cũng hay đi đánh bóng.", pause: 300 }
            ],
            modelAudio: [
              { lang: "zh-CN", text: "我姐在北京读大学，她很喜欢读书，周末也经常去打球。", pause: 800 },
              { lang: "vi-VN", text: "Câu mẫu hoàn chỉnh: Chị tôi học đại học ở Bắc Kinh, chị ấy rất mê đọc sách và cuối tuần cũng hay đi chơi bóng.", pause: 300 }
            ]
          }
        ],

        // ---------------------------------------------------------------------
        // ÔN TẬP NGẮT QUÃNG 1 - 3 - 7 NGÀY NHÓM 4
        // ---------------------------------------------------------------------
        reviews: [
          {
            id: `${LESSON_ID}-g4-rev1`,
            day: 1,
            type: "Nhớ nghĩa & Bổ ngữ kết quả",
            q: "Để yêu cầu học sinh 'mở sách giáo trình ra', thầy cô giáo dùng cụm từ nào?",
            answer: "打开书 (Dùng động từ tác động mang bổ ngữ kết quả mở toang vật thể)",
            explain: "Hành vi lật mở trang sách ra bắt buộc dùng 打开书, không dùng 开书 đơn độc.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 1: Hãy nhắc lại khẩu lệnh mở sách giáo trình trong tiếng Trung.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Khẩu lệnh mở sách mốc ngày 1 là:", pause: 150 },
              { lang: "zh-CN", text: "请大家打开书", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g4-rev2`,
            day: 3,
            type: "Phân biệt bẫy động từ",
            q: "Tại sao không được nói '我爸爸每天打开车去工作'?",
            answer: "Vì 打开 mang nghĩa mở toang vật thể (như mở cửa sổ, mở hộp). Lái xe ô tô bắt buộc phải dùng cụm từ 开车.",
            explain: "Phân biệt rõ ràng giữa động từ ly hợp lái xe và động từ mang bổ ngữ kết quả mở đồ vật.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 3: Hãy giải thích vì sao không dùng từ mở sách để nói về hành động lái xe.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Giải thích mốc ngày 3: Lái xe ô tô bắt buộc dùng cụm từ lái xe, tuyệt đối không dùng động từ mở bung đồ hộp hay mở sách.", pause: 400 }
            ]
          },
          {
            id: `${LESSON_ID}-g4-rev3`,
            day: 7,
            type: "Vận dụng ngữ cảnh tổng hợp toàn khóa",
            q: "Dịch câu sau sang tiếng Trung: 'Chị tôi bảo sau khi tan học hãy đến ngã rẽ gần bến xe buýt đợi chị, chị ấy sẽ lái xe đưa tôi đi mua sách.'",
            answer: "我姐说下课以后在车站旁边的路口等她，她会开车送我去买书。",
            explain: "Kết nối trọn vẹn danh từ thân tộc, động từ ly hợp tan học, địa điểm bến xe, nút giao ngã rẽ, động từ ly hợp lái xe và mục đích mua sách.",
            listenAudio: [
              { lang: "vi-VN", text: "Ôn tập ngày 7: Thử thách dịch câu tổng hợp kết nối kiến thức của cả bốn nhóm bài học.", pause: 300 }
            ],
            audio: [
              { lang: "vi-VN", text: "Câu hoàn chỉnh mốc 7 ngày là:", pause: 150 },
              { lang: "zh-CN", text: "我姐说下课以后在车站旁边的路口等她，她会开车送我去买书。", pause: 800 }
            ]
          }
        ]
      }
    ]
  }
];
