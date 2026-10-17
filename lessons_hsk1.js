// =========================================================================
// KHO DỮ LIỆU BÀI HỌC HSK 1 - HSK 2 (LESSONS.JS)
// =========================================================================
const ALL_LESSONS = [
  {
    id: "bai-1",
    title: "Bài 1: 24 Từ Vựng HSK 1–2 (Cơ bản)",
    groups: [
      // =====================================================================
      // NHÓM 1: VỊ TRÍ & DI CHUYỂN (Từ số 1 -> Từ số 5)
      // =====================================================================
      {
        id: "g1",
        title: "Nhóm 1: Vị trí & Di chuyển",
        desc: "Gồm các từ chỉ phương hướng, địa điểm và giao thông đô thị.",
        words: [
          {
            id: "G01-W01", index: 1, hanzi: "右", pinyin: "yòu (thanh 4)", coreMeaning: "bên phải, phía bên phải",
            introAudio: [
              { lang: "vi-VN", text: "Chúng ta bắt đầu với từ đầu tiên. Chữ Hán này đọc là" },
              { lang: "zh-CN", text: "右", pause: 400 },
              { lang: "vi-VN", text: "thanh bốn. Nghĩa trọng tâm của nó là bên phải, hoặc phía bên phải." }
            ],
            meaning: {
              situation: "Bạn đang đi trên đường và muốn hỏi xem ngân hàng nằm ở đâu, hoặc chỉ cho tài xế rẽ sang hướng nào.",
              detail: "Dùng để chỉ phương hướng (bên phải), trái ngược với bên trái. Trong đàm thoại thực tế, nó rất hiếm khi đứng một mình mà phải đi kèm với các từ chỉ phương hướng khác để tạo thành cụm hoàn chỉnh.",
              keyPoint: "Khi muốn nói về vị trí bên tay phải hoặc hướng rẽ phải, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Hãy hình dung bạn đang tìm đường hoặc chỉ đường cho tài xế. Từ này diễn đạt vị trí bên phải. Tuy nhiên, trong tiếng Trung, nó hiếm khi đứng trơ trọi một mình mà cần ghép với các thành phần khác. Khi muốn nói về vị trí bên tay phải, chúng ta dùng từ này." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Chỉ vị trí của một vật/địa điểm",
                pattern: "Địa điểm A + 在 + Địa điểm B + 右边",
                note: "Từ mục tiêu nằm ở cuối cụm từ, luôn phải ghép với chữ 边 hoặc 面 để tạo thành danh từ chỉ vị trí hoàn chỉnh. Ví dụ: 银行在右边 (Ngân hàng ở bên phải). Nếu nói rõ bên phải của cái gì, đặt cái đó trước cụm chỉ bên phải: 学校右边 (Bên phải trường học).",
                audio: [
                  { lang: "vi-VN", text: "Cách dùng đầu tiên là chỉ vị trí. Bạn dùng khung câu: Địa điểm A, cộng chữ Tại, cộng Địa điểm B, cộng cụm từ chỉ bên phải. Lưu ý, bạn phải ghép từ này với chữ Biên hoặc Diện ở phía sau. Chúng ta có ví dụ:" },
                  { lang: "zh-CN", text: "银行在右边。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là ngân hàng ở bên phải. Bạn hoàn toàn có thể tự đổi chủ thể, ví dụ muốn nói điện thoại ở bên phải thì thay từ ngân hàng bằng từ điện thoại là xong." }
                ]
              },
              {
                title: "Cách 2: Chỉ hướng di chuyển",
                pattern: "往 / 向 + 右 + Động từ di chuyển (走, 拐)",
                note: "Đứng sau giới từ chỉ hướng (往 hoặc 向) và đứng trước hành động. Trong trường hợp này, nó có thể đứng một mình không cần chữ 边. Ví dụ: 前面路口往右拐 (Ngã tư phía trước rẽ phải).",
                audio: [
                  { lang: "vi-VN", text: "Cách dùng thứ hai là chỉ hướng di chuyển. Bạn dùng chữ Vãng hoặc Hướng, cộng với chữ Phải, rồi cộng hành động di chuyển. Ví dụ:" },
                  { lang: "zh-CN", text: "前面路口往右拐。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là, ngã tư phía trước rẽ phải." }
                ]
              }
            ],
            examples: [
              { zh: "银行在右边。", vi: "Ngân hàng ở bên phải. (Câu cơ bản nói về vị trí).", pause: 2000 },
              { zh: "我右边是学校。", vi: "Bên phải tôi là trường học. (Chú ý: tiếng Trung nói 'Tôi bên phải', ngược với tiếng Việt).", pause: 2500 },
              { zh: "你往前走，然后向右拐。", vi: "Bạn đi về phía trước, sau đó rẽ phải. (Dùng chỉ đường kết hợp nhiều hướng).", pause: 3000 }
            ],
            trap: {
              name: "Thiếu chữ 边 khi làm danh từ vị trí",
              situation: "Bạn muốn nói 'Cửa hàng ở bên phải'. Do tiếng Việt chữ 'bên' có thể ẩn/hiện, người học hay dịch thẳng 'ở phải'.",
              explanation: "Trong tiếng Trung, khi làm danh từ chỉ vị trí đứng sau chữ 在, bắt buộc phải có chữ 边 hoặc 面 đi kèm.",
              wrong: "商店在右。",
              right: "商店在右边。 (Cửa hàng ở bên phải).",
              tip: "Nếu đằng trước là chữ 在 (ở), bắt buộc phải có 边. Nếu đằng trước là chữ 往 (hướng về), có thể không cần 边.",
              audio: [
                { lang: "vi-VN", text: "Bẫy phổ biến nhất là thiếu chữ Biên. Tình huống là bạn muốn nói Cửa hàng ở bên phải. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "商店在右。", pause: 500 },
                { lang: "vi-VN", text: "Trong tiếng Trung, khi đứng sau chữ Tại để chỉ nơi chốn, từ này không được đứng một mình. Câu sửa đúng phải là:" },
                { lang: "zh-CN", text: "商店在右边。", pause: 500 },
                { lang: "vi-VN", text: "Mẹo nhỏ cho bạn: Nếu phía trước có chữ Tại, bắt buộc thêm chữ Biên. Nếu phía trước là chữ Vãng để chỉ hướng đi, thì không cần thêm." }
              ],
              checkQuestion: {
                q: "Thử kiểm tra: Câu nào sau đây tự nhiên và đúng ngữ pháp nhất khi miêu tả vị trí căn phòng?",
                options: ["A. 房间在右。", "B. 房间在右边。"],
                correct: 1,
                explain: "Đáp án B đúng vì sau động từ chỉ vị trí 在 bắt buộc phải có phương vị từ 边 đi kèm."
              }
            },
            pron: {
              guide: "Từ này đọc thanh bốn, bạn cần hạ giọng dứt khoát. Hãy nghe và nhắc lại:",
              audio: [
                { lang: "vi-VN", text: "Từ này đọc thanh bốn, bạn cần hạ giọng dứt khoát. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "右", pause: 1500 },
                { lang: "zh-CN", text: "右边", pause: 1500 },
                { lang: "zh-CN", text: "银行在右边。", pause: 2000 }
              ]
            },
            write: {
              desc: "Gồm một nét phẩy, một nét ngang ở trên và bộ Khẩu (口 - cái miệng) ở dưới. Mẹo tưởng tượng: Bàn tay phải đang cầm đồ ăn đưa vào miệng.",
              audio: [
                { lang: "vi-VN", text: "Để nhớ chữ này, bạn hãy nhìn lên màn hình. Nó có bộ Khẩu ở dưới. Mẹo tưởng tượng vui là: dùng tay phải cầm đồ đưa vào miệng. Hãy nhìn kỹ chữ, nhắm mắt lại hình dung, và thử dùng tay viết ra không khí một lần nhé." }
              ]
            },
            summary: "Dùng chỉ vị trí bên tay phải hoặc hướng rẽ phải. Khung nhớ: 在 + Danh từ + 右边. Ghép ngược tiếng Việt: 'Tôi + Bên phải' (我右边)."
          },
          {
            id: "G01-W02", index: 2, hanzi: "北", pinyin: "běi (thanh 3)", coreMeaning: "phía bắc, hướng bắc",
            introAudio: [
              { lang: "vi-VN", text: "Từ tiếp theo, chữ Hán này đọc là" },
              { lang: "zh-CN", text: "北", pause: 400 },
              { lang: "vi-VN", text: "thanh ba. Nghĩa trọng tâm là phía bắc, hướng bắc." }
            ],
            meaning: {
              situation: "Giới thiệu quê quán của bạn nằm ở đâu tại Việt Nam, hoặc miêu tả vị trí địa lý một tòa nhà.",
              detail: "Chỉ hướng Bắc trên bản đồ địa lý. Tương tự như từ bên phải, khi đóng vai trò là danh từ chỉ vị trí, nó cần đi chung với 边 (phía/bên) hoặc 方 (phương).",
              keyPoint: "Khi muốn nói vị trí địa lý ở hướng Bắc, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Hãy tưởng tượng bạn đang giới thiệu miền Bắc Việt Nam cho bạn bè quốc tế. Từ này có nghĩa là hướng bắc. Khi chỉ vị trí địa lý, nó sẽ kết hợp với các đuôi chỉ phương hướng." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Nằm ở phía Bắc của một nơi nào đó",
                pattern: "Địa điểm nhỏ + 在 + Địa điểm lớn + (的) + 北边 / 北方",
                note: "Từ mục tiêu đứng cuối câu để chốt lại vị trí. Chữ 的 có thể có hoặc lược bỏ. Ví dụ: 河内在越南的北边 (Hà Nội ở phía Bắc của Việt Nam).",
                audio: [
                  { lang: "vi-VN", text: "Cách dùng phổ biến nhất là nói nơi nào nằm ở phía Bắc của nơi nào. Khung câu là: Địa điểm nhỏ, cộng chữ Tại, cộng Địa điểm lớn, cộng chữ Đích có hoặc không đều được, và kết thúc bằng cụm từ phía bắc. Ví dụ:" },
                  { lang: "zh-CN", text: "河内在越南的北边。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là Hà Nội ở phía Bắc Việt Nam. Bạn hãy thử dùng khung này để nói về quê của mình nhé." }
                ]
              },
              {
                title: "Cách 2: Ghép trực tiếp sau danh từ chỉ nơi chốn",
                pattern: "Danh từ nơi chốn + 北边",
                note: "Lược bỏ chữ 的 khi nói ngắn gọn trong giao tiếp hằng ngày. Ví dụ: 大学北边 (Phía bắc trường đại học).",
                audio: [
                  { lang: "vi-VN", text: "Cách thứ hai ngắn gọn hơn, bạn ghép trực tiếp tên địa điểm với cụm phía bắc. Ví dụ:" },
                  { lang: "zh-CN", text: "大学北边", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là phía bắc trường đại học." }
                ]
              }
            ],
            examples: [
              { zh: "北京在中国的北方。", vi: "Bắc Kinh ở phía Bắc của Trung Quốc.", pause: 2000 },
              { zh: "超市在小区的北边。", vi: "Siêu thị ở phía bắc của khu dân cư.", pause: 2500 },
              { zh: "河内在越南的北边。", vi: "Hà Nội ở phía Bắc của Việt Nam.", pause: 2500 }
            ],
            trap: {
              name: "Đứng một mình sau động từ 在 mà thiếu 边 hoặc 方",
              situation: "Bạn muốn nói 'Nhà tôi ở phía Bắc'.",
              explanation: "Giống như chữ 右, chữ 北 không tự đứng một mình làm tân ngữ chỉ vị trí sau chữ 在 mà phải ghép thành 北边 (phía bắc) hoặc 北方 (miền bắc).",
              wrong: "我家在北。",
              right: "我家在北边。 (Nhà tôi ở phía Bắc).",
              tip: "Luôn dùng 北边 (vị trí cụ thể) hoặc 北方 (vùng miền địa lý rộng lớn).",
              audio: [
                { lang: "vi-VN", text: "Lưu ý bẫy ngữ pháp: Cũng giống như từ bên phải, bạn đừng nói trống không sau chữ Tại. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我家在北。", pause: 500 },
                { lang: "vi-VN", text: "Hãy luôn thêm chữ Biên hoặc chữ Phương vào sau. Câu đúng là:" },
                { lang: "zh-CN", text: "我家在北边。", pause: 500 }
              ]
            },
            pron: {
              guide: "Thanh ba, bạn đọc trầm xuống và hơi kéo dài một chút:",
              audio: [
                { lang: "vi-VN", text: "Thanh ba, bạn đọc trầm xuống và hơi kéo dài một chút:" },
                { lang: "zh-CN", text: "北", pause: 1500 },
                { lang: "zh-CN", text: "北边", pause: 1500 },
                { lang: "zh-CN", text: "越南北边", pause: 2000 }
              ]
            },
            write: {
              desc: "Hình ảnh hai người quay lưng lại với nhau. Nghĩa gốc cổ đại là 'quay lưng', sau này mượn làm hướng Bắc. Cấu trúc trái phải cân xứng.",
              audio: [
                { lang: "vi-VN", text: "Chữ này nhìn giống như hai người đang quay lưng lại với nhau. Cấu trúc trái phải cân xứng, rất dễ nhận diện." }
              ]
            },
            summary: "Dùng để nói về vị trí địa lý hướng Bắc. Khung nên nhớ: 在 + Nơi chốn + 北边 / 北方."
          },
          {
            id: "G01-W03", index: 3, hanzi: "这里", pinyin: "zhè lǐ (thanh 4 - thanh 3)", coreMeaning: "ở đây, nơi này",
            introAudio: [
              { lang: "vi-VN", text: "Từ số ba đọc là" },
              { lang: "zh-CN", text: "这里", pause: 400 },
              { lang: "vi-VN", text: "nghĩa trọng tâm là: ở đây, nơi này." }
            ],
            meaning: {
              situation: "Bạn rủ bạn bè đến chỗ mình, hoặc giới thiệu về khu vực mình đang đứng.",
              detail: "Đại từ chỉ địa điểm gần người nói. Phạm vi nghĩa tương đương với 这儿 (của giọng Bắc Kinh).",
              keyPoint: "Khi muốn nói 'chỗ này', 'nơi này', bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Từ này dùng để chỉ địa điểm mà người nói đang có mặt ở đó. Nó hoàn toàn giống với một từ khác bạn có thể đã nghe là zhèr." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Làm trạng ngữ chỉ nơi chốn xảy ra hành động",
                pattern: "Chủ ngữ + 在 + 这里 + Hành động",
                note: "Nguyên tắc vàng của tiếng Trung: Nơi chốn luôn đứng TRƯỚC hành động. Tiếng Việt nói 'ăn cơm ở đây', tiếng Trung lật ngược lại: 'ở đây (在这里) rồi mới ăn cơm (吃饭)'.",
                audio: [
                  { lang: "vi-VN", text: "Đây là một điểm ngữ pháp cực kỳ quan trọng. Khi nói làm gì ở đâu, trạng ngữ chỉ địa điểm phải đứng trước động từ. Khung câu là Chủ ngữ, cộng chữ Tại, cộng Ở Đây, rồi mới đến hành động. Ví dụ:" },
                  { lang: "zh-CN", text: "我们在这里吃饭吧。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là chúng ta ăn cơm ở đây nhé. Trật tự bị ngược so với tiếng Việt, bạn hãy đặc biệt lưu ý nhé." }
                ]
              },
              {
                title: "Cách 2: Làm chủ ngữ hoặc ghép sau đại từ chỉ người",
                pattern: "这里 + Rất + Tính từ  |  Đại từ (我/你) + 这里",
                note: "Khi làm chủ ngữ ở đầu câu không cần chữ 在: 这里很漂亮 (Nơi này rất đẹp). Khi ghép sau đại từ nhân xưng: 我这里 (Chỗ của tôi).",
                audio: [
                  { lang: "vi-VN", text: "Ngoài ra, từ này có thể đứng đầu câu làm chủ ngữ, hoặc ghép ngay sau đại từ chỉ người để biến người đó thành địa điểm. Ví dụ:" },
                  { lang: "zh-CN", text: "请来我这里。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là xin hãy đến chỗ của tôi." }
                ]
              }
            ],
            examples: [
              { zh: "我在这里工作。", vi: "Tôi làm việc ở đây. (Nơi chốn đứng trước hành động).", pause: 2000 },
              { zh: "这里很漂亮。", vi: "Nơi này rất đẹp. (Từ mục tiêu làm chủ ngữ trực tiếp trong câu).", pause: 2000 },
              { zh: "请来我这里。", vi: "Xin hãy đến chỗ tôi. (Kết hợp 我 + 这里 để chỉ 'chỗ của tôi').", pause: 2500 }
            ],
            trap: {
              name: "Để địa điểm ra sau hành động như tiếng Việt",
              situation: "Muốn nói 'Tôi đợi bạn ở đây'. Người học dịch từng chữ: Tôi (我) đợi (等) bạn (你) ở đây (这里).",
              explanation: "Trong tiếng Trung, phải dựng sân khấu (địa điểm) trước rồi diễn viên mới lên diễn (hành động).",
              wrong: "我等你在这里。",
              right: "我在这里等你。 (Tôi ở đây đợi bạn).",
              tip: "Cứ thấy tiếng Việt có chữ 'làm gì Ở ĐÂU', phải đổi thành 'Ở ĐÂU làm gì' khi nói tiếng Trung.",
              audio: [
                { lang: "vi-VN", text: "Bẫy dễ mắc nhất là dịch word-by-word từ tiếng Việt. Tình huống là bạn nói Tôi đợi bạn ở đây. Đây là câu sai ngữ pháp để phân tích:" },
                { lang: "zh-CN", text: "我等你在这里。", pause: 500 },
                { lang: "vi-VN", text: "Bạn để nơi chốn ra sau hành động. Câu sửa đúng phải là:" },
                { lang: "zh-CN", text: "我在这里等你。", pause: 500 },
                { lang: "vi-VN", text: "Mẹo quyết định: Trong tiếng Trung, phải xây sân khấu trước rồi diễn viên mới lên diễn. Bạn phải đặt địa điểm Ở ĐÂU lên trước, rồi mới nói làm hành động gì." }
              ]
            },
            pron: {
              guide: "Chữ thứ nhất thanh bốn, chữ thứ hai thanh ba. Đọc dứt khoát:",
              audio: [
                { lang: "vi-VN", text: "Chữ thứ nhất thanh bốn, chữ thứ hai thanh ba. Đọc dứt khoát:" },
                { lang: "zh-CN", text: "这里", pause: 1500 },
                { lang: "zh-CN", text: "在这里", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 这 có bộ Sước (辶 - bước đi) bao quanh chữ Văn (文). Chữ 里 gồm bộ Điền (田 - ruộng) ở trên và bộ Thổ (土 - đất) ở dưới.",
              audio: [
                { lang: "vi-VN", text: "Để nhớ mặt chữ: Chữ Giá có bộ Sước chỉ bước chân đi lại, chữ Lý gồm ruộng đất ghép lại chỉ làng xóm, nơi chốn." }
              ]
            },
            summary: "Khung nên nhớ: 在 + 这里 + Động từ. Điểm phân biệt nhất: Không bao giờ để 'ở đây' ở cuối câu nếu câu có hành động."
          },
          {
            id: "G01-W04", index: 4, hanzi: "路口", pinyin: "lù kǒu (thanh 4 - thanh 3)", coreMeaning: "ngã tư, nút giao, đầu đường",
            introAudio: [
              { lang: "vi-VN", text: "Từ số bốn đọc là" },
              { lang: "zh-CN", text: "路口", pause: 400 },
              { lang: "vi-VN", text: "nghĩa trọng tâm là: ngã tư, nút giao, đầu đường." }
            ],
            meaning: {
              situation: "Báo cho tài xế taxi biết chỗ cần dừng xe hoặc rẽ.",
              detail: "Điểm giao cắt của các con đường. Chữ 路 là đường, chữ 口 là cái miệng (miệng đường chính là giao lộ/đầu đường).",
              keyPoint: "Khi muốn nói về một nút giao thông, ngã ba, ngã tư, dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Lộ là đường, chữ Khẩu là cái miệng. Miệng đường chính là đầu đường hoặc ngã tư. Bạn dùng nó rất nhiều khi đi taxi." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Khung câu đi taxi & Cụm kết hợp phổ biến",
                pattern: "在 + 前面路口 / 下一个路口 + 停车",
                note: "Lượng từ dùng chữ 个 (这个路口 - ngã tư này). Cụm cần thuộc: 下一个路口 (Ngã tư tiếp theo), 十字路口 (Ngã tư hình chữ thập).",
                audio: [
                  { lang: "vi-VN", text: "Từ này là một danh từ rất dễ dùng. Lượng từ của nó là chữ Cá. Cụm từ bạn nên học thuộc lòng ngay là Ngã tư tiếp theo:" },
                  { lang: "zh-CN", text: "下一个路口", pause: 500 },
                  { lang: "vi-VN", text: "Khi đi xe, muốn tài xế dừng lại, bạn nói:" },
                  { lang: "zh-CN", text: "在前面路口停车。", pause: 500 },
                  { lang: "vi-VN", text: "Có nghĩa là dừng xe ở ngã tư phía trước." }
                ]
              }
            ],
            examples: [
              { zh: "前面路口往右拐。", vi: "Ngã tư phía trước rẽ phải. (Kết hợp từ số 1 và từ số 4).", pause: 2500 },
              { zh: "我在十字路口等你。", vi: "Tôi đợi bạn ở ngã tư. (Dùng 十字 để nhấn mạnh ngã 4).", pause: 2500 }
            ],
            trap: {
              name: "Quên lượng từ 个 hoặc đặt nơi chốn dừng xe ra sau động từ",
              situation: "Muốn nói 'Dừng xe ở ngã tư tiếp theo'.",
              explanation: "Khi dùng với 'tiếp theo' (下一), bắt buộc có lượng từ 个: 下一个路口. Đồng thời cụm địa điểm phải đặt trước động từ 停车 (dừng xe).",
              wrong: "停车在下一路口。",
              right: "在下一个路口停车。 (Dừng xe ở ngã tư tiếp theo).",
              tip: "Luôn nói 在 + [Ngã tư] + 停车 / 拐.",
              audio: [
                { lang: "vi-VN", text: "Bẫy cần tránh khi gọi tài xế dừng xe: Đừng đặt địa điểm ra sau động từ dừng xe và đừng quên lượng từ. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "停车在下一路口。", pause: 500 },
                { lang: "vi-VN", text: "Câu sửa đúng tự nhiên phải là:" },
                { lang: "zh-CN", text: "在下一个路口停车。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ thứ nhất thanh bốn dứt khoát, chữ thứ hai thanh ba trầm xuống:",
              audio: [
                { lang: "vi-VN", text: "Chữ thứ nhất thanh bốn, chữ thứ hai thanh ba. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "路口", pause: 1500 },
                { lang: "zh-CN", text: "下一个路口", pause: 1500 },
                { lang: "zh-CN", text: "十字路口", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 路 có bộ Túc (足 - cái chân) bên trái, chữ Các (各) bên phải. Chữ 口 là hình vuông tượng trưng cái miệng/lối ra vào.",
              audio: [
                { lang: "vi-VN", text: "Chữ Lộ có bộ Túc chỉ bàn chân đi trên đường, ghép với chữ Khẩu hình vuông như nút giao cắt giữa các con phố." }
              ]
            },
            summary: "Khung nên nhớ: 下一个路口 (ngã tư tiếp theo), 在前面路口停车 (dừng xe ở ngã tư phía trước)."
          },
          {
            id: "G01-W05", index: 5, hanzi: "车站", pinyin: "chē zhàn (thanh 1 - thanh 4)", coreMeaning: "bến xe, trạm xe, nhà ga",
            introAudio: [
              { lang: "vi-VN", text: "Từ số năm đọc là" },
              { lang: "zh-CN", text: "车站", pause: 400 },
              { lang: "vi-VN", text: "nghĩa trọng tâm là: bến xe, trạm xe, nhà ga." }
            ],
            meaning: {
              situation: "Nói về điểm dừng để bắt các phương tiện giao thông công cộng.",
              detail: "Điểm dừng xe. Có thể là trạm xe buýt hoặc ga tàu hỏa tùy ngữ cảnh.",
              keyPoint: "Khi muốn chỉ bến xe, trạm xe buýt hoặc nhà ga nói chung, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Từ này chỉ điểm dừng đỗ để hành khách lên xuống các phương tiện giao thông công cộng như xe buýt hoặc tàu hỏa." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Ghép tên phương tiện phía trước & Khung câu di chuyển",
                pattern: "Loại xe + 车站  |  去 + 车站 + Làm gì đó",
                note: "Các loại bến xe ghép sẵn: 火车站 (Ga tàu hỏa), 公交车站 (Trạm xe buýt). Ví dụ: 我去车站买票 (Tôi đi bến xe mua vé).",
                audio: [
                  { lang: "vi-VN", text: "Chữ Xa là xe, chữ Trạm là bến. Ghép lại là bến xe. Nếu muốn nói rõ loại xe, bạn đặt tên phương tiện lên trước. Tàu hỏa là Hỏa Xa, vậy ga tàu hỏa là:" },
                  { lang: "zh-CN", text: "火车站", pause: 500 },
                  { lang: "vi-VN", text: "Xe buýt là Công Giao Xa, vậy trạm xe buýt là:" },
                  { lang: "zh-CN", text: "公交车站", pause: 500 }
                ]
              }
            ],
            examples: [
              { zh: "车站离这里远吗？", vi: "Bến xe cách đây xa không? (Dùng trong tình huống hỏi đường).", pause: 2500 },
              { zh: "我现在去火车站。", vi: "Bây giờ tôi đi ga tàu hỏa.", pause: 2000 },
              { zh: "我去车站买票。", vi: "Tôi đi bến xe mua vé.", pause: 2000 }
            ],
            trap: {
              name: "Ghép ngược trật tự 'Bến + Loại xe' theo kiểu tiếng Việt",
              situation: "Muốn nói 'Ga tàu hỏa' hoặc 'Trạm xe buýt'.",
              explanation: "Tiếng Việt nói 'Bến / Ga' trước rồi mới đến phương tiện. Tiếng Trung đặt loại phương tiện lên trước làm định ngữ, chữ 站 ở cuối.",
              wrong: "站火车。",
              right: "火车站。 (Ga tàu hỏa).",
              tip: "Tên loại phương tiện luôn đứng trước, chữ 站 (trạm/ga) luôn chốt ở cuối.",
              audio: [
                { lang: "vi-VN", text: "Bẫy dịch ngược từ tiếng Việt: Khi nói ga tàu hỏa, đừng đặt chữ Trạm lên trước. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "站火车", pause: 500 },
                { lang: "vi-VN", text: "Trong tiếng Trung, loại xe phải đứng trước, chữ Trạm đứng cuối. Câu đúng là:" },
                { lang: "zh-CN", text: "火车站", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh một ngân ngang cao, chữ sau thanh bốn dập xuống rõ ràng:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh một, chữ sau thanh bốn. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "车站", pause: 1500 },
                { lang: "zh-CN", text: "火车站", pause: 1500 },
                { lang: "zh-CN", text: "公交车站", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 车 là hình chiếc xe nhìn từ trên xuống. Chữ 站 có bộ Lập (立 - đứng thẳng) bên trái và chữ Chiêm (占 - chiếm giữ) bên phải: đứng đợi xe tại một điểm cố định.",
              audio: [
                { lang: "vi-VN", text: "Chữ Trạm có bộ Lập bên trái nghĩa là đứng. Hình ảnh hành khách đứng chờ xe tại một điểm cố định chính là bến xe." }
              ]
            },
            summary: "Khung nên nhớ: 在车站等 (Đợi ở bến xe), 火车站 (Ga tàu hỏa), 公交车站 (Trạm xe buýt)."
          }
        ],
        exercises: [
          {
            id: "G01-EXER01", type: "Nhớ nghĩa và dùng từ",
            prompt: "Hoàn thành câu sau: 'Ngân hàng ở ___ trường học.' -> 学校的 ___ 是银行。",
            options: ["A. 右边", "B. 右"],
            correct: 0,
            questionAudio: [
              { lang: "vi-VN", text: "Hãy chọn từ thích hợp điền vào chỗ trống. Ngân hàng ở bên phải trường học. Bạn sẽ chọn đáp án nào?" }
            ],
            reasonRight: "Đáp án A (右边) chính xác! Khi làm danh từ chỉ vị trí bắt buộc phải có chữ 边 đi kèm.",
            reasonWrong: "Cần sửa: Bạn đang dùng tiếng Trung như tiếng Việt, thiếu phương vị từ 边 rồi.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là A:" },
              { lang: "zh-CN", text: "学校的右边是银行。", pause: 500 },
              { lang: "vi-VN", text: "Vì khi đóng vai trò danh từ chỉ vị trí, chữ Phải không được đứng một mình mà bắt buộc phải thêm chữ Biên." }
            ]
          },
          {
            id: "G01-EXER02", type: "Vị trí, kết hợp và bẫy",
            prompt: "Câu nào miêu tả đúng ý: 'Tôi mua sách ở đây'?",
            options: ["A. 我买书在这里。", "B. 我在这里买书。"],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Đâu là cách nói đúng của câu Tôi mua sách ở đây? Bạn hãy nhớ lại quy tắc vị trí của trạng ngữ nơi chốn nhé." }
            ],
            reasonRight: "Đáp án B chính xác! Cụm chỉ địa điểm 在这里 phải đứng trước động từ 买书.",
            reasonWrong: "Cần sửa: Bạn mắc bẫy dịch từng chữ từ tiếng Việt, đặt địa điểm ra sau hành động.",
            explainAudio: [
              { lang: "vi-VN", text: "Đây là câu sai để phân tích:" },
              { lang: "zh-CN", text: "我买书在这里。", pause: 500 },
              { lang: "vi-VN", text: "Đáp án đúng phải là B:" },
              { lang: "zh-CN", text: "我在这里买书。", pause: 500 },
              { lang: "vi-VN", text: "Vì cụm Tại Đây bắt buộc phải đứng trước động từ Mua." }
            ]
          },
          {
            id: "G01-EXER03", type: "Nghe hiểu (Ẩn bản chép lời)",
            isListening: true,
            prompt: "Nghe câu sau và chọn địa điểm người nói muốn dừng lại:",
            options: ["A. Trạm xe buýt.", "B. Ngã tư."],
            correct: 1,
            transcript: "师傅，请在下一个路口停车。 (Bác tài, xin dừng xe ở ngã tư tiếp theo).",
            questionAudio: [
              { lang: "vi-VN", text: "Mời bạn nghe câu sau:" },
              { lang: "zh-CN", text: "师傅，请在下一个路口停车。", pause: 800 },
              { lang: "vi-VN", text: "Người nói muốn dừng ở đâu?" }
            ],
            reasonRight: "Đáp án B (Ngã tư) chính xác! Trong câu có cụm 下一个路口 (ngã tư tiếp theo).",
            reasonWrong: "Cần sửa: Người nói dùng từ 路口 (ngã tư), không phải 车站 (trạm xe).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B, Ngã tư. Bản chép lời câu vừa nghe là:" },
              { lang: "zh-CN", text: "师傅，请在下一个路口停车。", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: Bác tài, xin dừng xe ở ngã tư tiếp theo." }
            ]
          }
        ],
        selfUse: {
          id: "G01-SELF01",
          situation: "Tình huống 1: Bạn ngồi trên taxi, bạn muốn dặn bác tài xế là: 'Hãy rẽ phải ở ngã tư phía trước.' Bạn sẽ nói thế nào bằng tiếng Trung?",
          hint1: "Cần dùng cụm 'ngã tư phía trước' đặt lên trước, sau đó dùng cụm 'hướng về bên phải rẽ'.",
          hint2: "Khung câu: 前面 + [ngã tư] + 往 + [bên phải] + 拐。",
          modelAnswer: "前面路口往右拐。",
          modelExplain: "'Ngã tư phía trước' là 前面路口. 'Rẽ phải' không dùng cấu trúc động từ + phải như tiếng Việt, mà dùng giới từ chỉ hướng 往 + 右 + động từ rẽ 拐.",
          modelAudio: [
            { lang: "vi-VN", text: "Câu trả lời mẫu là:" },
            { lang: "zh-CN", text: "前面路口往右拐。", pause: 500 },
            { lang: "vi-VN", text: "Vì hành động chỉ hướng di chuyển nên ta dùng cụm Vãng Hữu trước động từ Quải." }
          ]
        },
        reviews: [
          { day: 1, type: "Nhớ nghĩa cơ bản", q: "Dịch cụm từ 'Bến xe' sang tiếng Trung.", answer: "车站", explain: "车 (xe) + 站 (bến/trạm) = 车站.", audio: [{ lang: "vi-VN", text: "Đáp án là:" }, { lang: "zh-CN", text: "车站" }] },
          { day: 3, type: "Vị trí & Bẫy", q: "Tại sao câu '我在这里吃饭' đúng, còn '我吃饭在这里' là sai ngữ pháp?", answer: "Vì địa điểm (在这里) bắt buộc phải đứng trước động từ (吃饭).", explain: "Nguyên tắc vàng: Bối cảnh địa điểm luôn đứng trước hành động.", audio: [{ lang: "vi-VN", text: "Trong tiếng Trung, địa điểm diễn ra hành động bắt buộc phải đứng trước động từ. Câu đúng là:" }, { lang: "zh-CN", text: "我在这里吃饭。" }] },
          { day: 7, type: "Nghe hiểu phản xạ", q: "Bấm nghe âm thanh và cho biết câu này nghĩa là gì?", listenAudio: [{ lang: "zh-CN", text: "火车站在大学北边。" }], answer: "Ga tàu hỏa ở phía bắc trường đại học.", explain: "Bản chép lời: 火车站在大学北边。 (Kết hợp 3 từ vựng: 火车站, 大学, 北边).", audio: [{ lang: "zh-CN", text: "火车站在大学北边。", pause: 500 }, { lang: "vi-VN", text: "Nghĩa là: Ga tàu hỏa ở phía bắc trường đại học." }] }
        ]
      },

      // =====================================================================
      // NHÓM 2: HÀNH ĐỘNG & SINH HOẠT (Từ số 6 -> Từ số 11)
      // =====================================================================
      {
        id: "g2",
        title: "Nhóm 2: Hành động & Sinh hoạt",
        desc: "Gồm 6 từ vựng về hoạt động di chuyển, học tập, thể thao và thao tác hằng ngày.",
        words: [
          {
            id: "G02-W06", index: 6, hanzi: "开车", pinyin: "kāi chē (hai thanh 1)", coreMeaning: "lái xe, chạy xe ô tô",
            introAudio: [
              { lang: "vi-VN", text: "Chúng ta bắt đầu nhóm thứ hai với từ chỉ hành động. Chữ này đọc là" },
              { lang: "zh-CN", text: "开车", pause: 400 },
              { lang: "vi-VN", text: "hai thanh một. Nghĩa trọng tâm là: lái xe, chạy xe ô tô." }
            ],
            meaning: {
              situation: "Bạn nói về việc mình tự điều khiển phương tiện đi làm hoặc đi chơi.",
              detail: "Hành động lái xe có động cơ, đặc biệt là xe 4 bánh trở lên (ô tô, xe buýt, taxi). Tiếng Việt nói chung là 'lái xe', nhưng từ này trong tiếng Trung KHÔNG dùng cho xe đạp hay xe máy.",
              keyPoint: "Khi muốn nói đến việc lái xe ô tô, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Hãy hình dung bạn ngồi vào ghế lái và điều khiển vô lăng. Từ này có nghĩa là lái xe. Tuy nhiên, nó chỉ dùng cho xe ô tô hoặc các loại xe bốn bánh. Khi muốn nói tôi biết lái xe hơi, hay tôi tự lái xe đi làm, bạn dùng từ này." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Nói về phương tiện đi lại (Lái xe đi đâu đó)",
                pattern: "开车 + 去 + Địa điểm",
                note: "Đóng vai trò là phương thức di chuyển, đặt ngay trước động từ 'đi'. Ví dụ: 我每天开车去上班 (Tôi mỗi ngày lái xe đi làm). Hoặc: 开车回家 (Lái xe về nhà).",
                audio: [
                  { lang: "vi-VN", text: "Cách dùng phổ biến nhất là diễn tả bạn đi đâu bằng cách tự lái xe. Khung câu là: Lái xe, cộng chữ Khứ, cộng địa điểm. Ví dụ:" },
                  { lang: "zh-CN", text: "我每天开车去上班。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là tôi mỗi ngày lái xe đi làm. Nếu bạn lái xe về nhà, chỉ cần đổi đuôi thành:" },
                  { lang: "zh-CN", text: "开车回家。", pause: 500 }
                ]
              }
            ],
            examples: [
              { zh: "你会开车吗？", vi: "Bạn biết lái xe (ô tô) không? (Dùng 会 để hỏi về kỹ năng học được).", pause: 2000 },
              { zh: "我不开车，我坐出租车。", vi: "Tôi không lái xe, tôi ngồi taxi.", pause: 2500 },
              { zh: "我每天开车去上班。", vi: "Tôi mỗi ngày lái xe đi làm.", pause: 2500 }
            ],
            trap: {
              name: "Bẫy 1: Dùng sai cho xe 2 bánh | Bẫy 2: Động từ ly hợp (开...车)",
              situation: "Bạn muốn nói 'Tôi đi xe máy' hoặc 'Lái xe của tôi'.",
              explanation: "1) Xe có vô lăng dùng 开车; xe đạp/xe máy ngồi lên yên phải dùng 骑 (cưỡi). 2) 开车 là cụm động - tân, muốn nói 'lái xe của tôi' phải tách ra nhét vào giữa hoặc bỏ chữ 车 thừa: 开我的车.",
              wrong: "我开车摩托车。 / 开车我的。",
              right: "我骑摩托车。 (Tôi đi xe máy) / 开我的车。 (Lái xe của tôi).",
              tip: "Xe có vô lăng -> 开车. Xe dang hai chân ngồi -> 骑. Nói lái xe của ai -> 开 + [ai] 的 + 车.",
              audio: [
                { lang: "vi-VN", text: "Một bẫy rất lớn là dịch máy móc từ tiếng Việt. Tình huống là bạn nói Tôi đi xe máy. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我开车摩托车。", pause: 500 },
                { lang: "vi-VN", text: "Câu này sai động từ. Xe máy không dùng vô lăng, mà bạn phải cưỡi lên yên xe. Câu sửa đúng phải là:" },
                { lang: "zh-CN", text: "我骑摩托车。", pause: 500 },
                { lang: "vi-VN", text: "Ngoài ra, khi muốn nói lái chiếc xe của tôi, bạn phải tách từ và nói là:" },
                { lang: "zh-CN", text: "开我的车。", pause: 500 }
              ]
            },
            pron: {
              guide: "Hai âm này đều là thanh một, bạn đọc đều, không lên không xuống, hơi kéo dài:",
              audio: [
                { lang: "vi-VN", text: "Hai âm này đều là thanh một, bạn đọc đều, không lên không xuống, hơi kéo dài:" },
                { lang: "zh-CN", text: "开车", pause: 1500 },
                { lang: "zh-CN", text: "开车去上班", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 开 giống hình hai cánh cửa hoặc thanh chắn được mở ra. Chữ 车 là hình vẽ chiếc xe có bánh và trục.",
              audio: [
                { lang: "vi-VN", text: "Chữ Khai nghĩa là mở hoặc khởi động máy, ghép với chữ Xa là chiếc xe." }
              ]
            },
            summary: "Dùng nói hành động lái ô tô. Khung nhớ: 开车去. Không dùng cho xe máy/xe đạp; nói 'lái xe của ai' phải nhét vào giữa (开谁的车)."
          },
          {
            id: "G02-W07", index: 7, hanzi: "下课", pinyin: "xià kè (hai thanh 4)", coreMeaning: "tan học, kết thúc giờ học",
            introAudio: [
              { lang: "vi-VN", text: "Từ số bảy đọc là" },
              { lang: "zh-CN", text: "下课", pause: 400 },
              { lang: "vi-VN", text: "hai thanh bốn. Nghĩa là: tan học, kết thúc giờ học." }
            ],
            meaning: {
              situation: "Bạn đang trong lớp học và chờ đến giờ về, hoặc hỏi bạn bè khi nào học xong.",
              detail: "Thời điểm bài giảng hoặc tiết học kết thúc. Trái nghĩa với 上课 (vào học).",
              keyPoint: "Khi muốn nói đến việc hết giờ học, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Hạ ngoài nghĩa là đi xuống, còn có nghĩa là kết thúc. Chữ Khóa là bài học. Vậy từ này có nghĩa là kết thúc giờ học." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Làm mốc thời gian",
                pattern: "下课 + 以后 / 后，Chủ ngữ + Hành động",
                note: "Thường đặt ở đầu câu hoặc ngay sau chủ ngữ để thiết lập thời gian diễn ra hành động tiếp theo. Ví dụ: 下课后，我们去吃饭吧 (Sau khi tan học, chúng ta đi ăn cơm nhé).",
                audio: [
                  { lang: "vi-VN", text: "Cách dùng rất phổ biến là dùng nó làm mốc thời gian. Bạn thêm chữ Hậu hoặc Dĩ Hậu vào phía sau để tạo thành cụm Sau khi tan học. Ví dụ:" },
                  { lang: "zh-CN", text: "下课后，我们去吃饭吧。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là sau khi tan học, chúng ta đi ăn cơm nhé." }
                ]
              }
            ],
            examples: [
              { zh: "老师，什么时候下课？", vi: "Thưa cô, khi nào tan học ạ? (Hỏi về thời gian).", pause: 2000 },
              { zh: "我下午三点下课。", vi: "Ba giờ chiều tôi tan học. (Thời gian cụ thể đặt trước hành động).", pause: 2000 },
              { zh: "下课后，我们去吃饭吧。", vi: "Sau khi tan học, chúng ta đi ăn cơm nhé.", pause: 2500 }
            ],
            trap: {
              name: "Nhầm giữa 'tan một tiết học' (下课) và 'tan trường' (放学)",
              situation: "Tiếng Việt 'tan học' có thể hiểu là hết một môn, hoặc hết cả một ngày học ở trường.",
              explanation: "下课 tập trung vào việc tiết học/ca học kết thúc (giữa các tiết học hoặc sinh viên học xong ca). Còn học sinh cấp 1, 2, 3 hết cả ngày học xách cặp về nhà thường dùng 放学 (tan trường).",
              wrong: "Đặt thời gian ra sau: 我下课下午三点。",
              right: "我下午三点下课。 (Ba giờ chiều tôi tan học).",
              tip: "Với người lớn, sinh viên, học viên ngoại ngữ: dùng 下课 là tự nhiên nhất, và nhớ đặt giờ giấc trước chữ 下课.",
              audio: [
                { lang: "vi-VN", text: "Cần lưu ý một khác biệt văn hóa nhỏ. Từ này thường dùng để chỉ việc kết thúc một tiết học, hoặc bài giảng kết thúc. Với người lớn hoặc sinh viên đại học như chúng ta, bạn cứ dùng từ này là hoàn toàn tự nhiên. Đồng thời nhớ đặt giờ giấc lên trước động từ nhé." }
              ]
            },
            pron: {
              guide: "Hai thanh bốn đi liền nhau, hãy đọc dứt khoát, dập mạnh giọng xuống:",
              audio: [
                { lang: "vi-VN", text: "Hai thanh bốn đi liền nhau, hãy đọc dứt khoát, dập mạnh giọng xuống:" },
                { lang: "zh-CN", text: "下课", pause: 1500 },
                { lang: "zh-CN", text: "下课后", pause: 1500 }
              ]
            },
            write: {
              desc: "Chữ 下 có nét ngang làm mốc và nét sổ chỉ xuống dưới. Chữ 课 có bộ Ngôn (讠- lời nói của thầy cô) bên trái và chữ Quả (果 - kết quả) bên phải.",
              audio: [
                { lang: "vi-VN", text: "Chữ Khóa có bộ Ngôn bên trái chỉ lời giảng, ghép với chữ Quả bên phải nghĩa là kết quả học tập." }
              ]
            },
            summary: "Khung nên nhớ: 下课后 + hành động (Sau khi tan học làm gì)."
          },
          {
            id: "G02-W08", index: 8, hanzi: "打球", pinyin: "dǎ qiú (thanh 3 - thanh 2)", coreMeaning: "chơi bóng, đánh bóng",
            introAudio: [
              { lang: "vi-VN", text: "Từ số tám đọc là" },
              { lang: "zh-CN", text: "打球", pause: 400 },
              { lang: "vi-VN", text: "thanh ba và thanh hai. Nghĩa trọng tâm là: chơi bóng, đánh bóng." }
            ],
            meaning: {
              situation: "Kể về sở thích thể thao hoặc rủ bạn bè đi tập thể thao.",
              detail: "Chơi các môn thể thao có quả bóng, nhưng phải dùng TAY (như bóng rổ, bóng bàn, cầu lông, tennis, bóng chuyền).",
              keyPoint: "Khi rủ người khác đi chơi một môn bóng bằng tay, dùng cụm từ này.",
              audio: [
                { lang: "vi-VN", text: "Từ này dùng để chỉ việc chơi các môn thể thao có bóng mà dùng tay tác động như bóng rổ, cầu lông, bóng bàn." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Động từ ly hợp & Thay thế tên môn bóng cụ thể",
                pattern: "喜欢去打球  |  打 + [Tên môn bóng bằng tay]",
                note: "Đây là động từ ly hợp: 打 (đánh - động từ), 球 (quả bóng - danh từ). Muốn nói môn cụ thể, thay chữ 球 bằng tên bóng đó: 打篮球 (đánh bóng rổ), 打网球 (đánh tennis).",
                audio: [
                  { lang: "vi-VN", text: "Chữ Đả nghĩa là dùng tay đánh, đập. Chữ Cầu là quả bóng. Ghép lại là đánh bóng. Vì nó là cụm động từ kèm tân ngữ, nên nếu muốn nói chơi môn gì cụ thể, bạn chỉ việc gỡ bỏ chữ Cầu chung chung đi, và thay bằng tên môn bóng đó." }
                ]
              }
            ],
            examples: [
              { zh: "周末我经常去打球。", vi: "Cuối tuần tôi thường đi đánh bóng.", pause: 2000 },
              { zh: "我跟朋友一起打球。", vi: "Tôi chơi bóng cùng bạn bè. (Cấu trúc: 跟 + người + 一起 + hành động).", pause: 2500 }
            ],
            trap: {
              name: "Dùng 打球 để chỉ môn Bóng Đá",
              situation: "Bạn muốn rủ bạn đi đá bóng.",
              explanation: "Bóng đá dùng CHÂN để tác động. Không thể dùng chữ 打 (hành động của bàn tay). Phải dùng động từ 踢 (Đá).",
              wrong: "我们去打足球。 (Sai vì dùng tay đánh bóng đá).",
              right: "我们去踢足球。 (Chúng ta đi đá bóng).",
              tip: "Cứ dùng tay thì 打 (Đả), dùng chân thì 踢 (Thích).",
              audio: [
                { lang: "vi-VN", text: "Bẫy phổ biến nhất là bạn dùng từ này để rủ đi đá bóng. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我们去打足球。", pause: 500 },
                { lang: "vi-VN", text: "Câu này sai về mặt logic hình thể. Chữ Đả có bộ thủ là bàn tay, dùng cho hành động đánh, đập. Bóng đá dùng chân, nên bạn bắt buộc phải dùng động từ Đá, đọc là Thích. Câu sửa đúng phải là:" },
                { lang: "zh-CN", text: "我们去踢足球。", pause: 500 },
                { lang: "vi-VN", text: "Mẹo nhớ: Dùng tay thì Đả, dùng chân thì Thích." }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh ba trầm xuống, chữ sau thanh hai vút lên:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh ba, chữ sau thanh hai. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "打球", pause: 1500 },
                { lang: "zh-CN", text: "去打球", pause: 1500 },
                { lang: "zh-CN", text: "周末我经常去打球。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 打 có bộ Tài gảy (扌- bàn tay) bên trái, chữ Đinh (丁) bên phải. Chữ 球 có bộ Vương/Ngọc (王) bên trái và chữ Cầu (求) bên phải.",
              audio: [
                { lang: "vi-VN", text: "Nhìn vào chữ Đả, bạn sẽ thấy ngay bộ Tài Gảy ở bên trái tượng trưng cho bàn tay. Nhờ đó bạn sẽ không bao giờ dùng nhầm cho môn bóng đá nữa." }
              ]
            },
            summary: "Khung nên nhớ: 去打球 (Đi chơi bóng). Điểm phân biệt nhất: Tuyệt đối không dùng cho môn bóng đá."
          },
          {
            id: "G02-W09", index: 9, hanzi: "读书", pinyin: "dú shū (thanh 2 - thanh 1)", coreMeaning: "đọc sách, hoặc đi học nói chung",
            introAudio: [
              { lang: "vi-VN", text: "Từ số chín đọc là" },
              { lang: "zh-CN", text: "读书", pause: 400 },
              { lang: "vi-VN", text: "thanh hai và thanh một. Nghĩa trọng tâm là: đọc sách, hoặc đi học nói chung." }
            ],
            meaning: {
              situation: "Nói về việc cầm cuốn sách lên đọc, hoặc giới thiệu ai đó vẫn đang đi học (chưa đi làm).",
              detail: "Nghĩa 1: Cầm cuốn sách lên và đọc (đặc biệt là đọc thành tiếng hoặc học bài). Nghĩa 2 (Rất quan trọng): Đi học, theo đuổi con đường học vấn (cắp sách đến trường).",
              keyPoint: "Tùy ngữ cảnh, từ này chỉ hành động đọc sách, hoặc trạng thái đang là học sinh/sinh viên.",
              audio: [
                { lang: "vi-VN", text: "Từ này rất thú vị. Chữ Độc là đọc, chữ Thư là sách. Nghĩa đen của nó đương nhiên là đọc sách. Nhưng trong giao tiếp thực tế, người ta hay dùng nó để nói về việc đi học, nghĩa là đang còn cắp sách đến trường." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Khung câu chỉ việc học vấn / du học",
                pattern: "在 + Nơi chốn + 读书",
                note: "Ví dụ: 我以前在中国读书 (Trước đây tôi từng học ở Trung Quốc - không dịch là đọc sách ở Trung Quốc).",
                audio: [
                  { lang: "vi-VN", text: "Chúng ta tập trung vào nghĩa đi học nhé. Khung câu là: Tại, cộng quốc gia hoặc trường học, cộng Độc Thư. Ví dụ:" },
                  { lang: "zh-CN", text: "我以前在中国读书。", pause: 500 },
                  { lang: "vi-VN", text: "Trong câu này bạn đừng dịch là tôi đọc sách ở Trung Quốc nhé. Nó có nghĩa là Trước đây tôi từng du học ở Trung Quốc." }
                ]
              }
            ],
            examples: [
              { zh: "他儿子还在读书。", vi: "Con trai anh ấy vẫn còn đang đi học. (Nghĩa là chưa đi làm).", pause: 2500 },
              { zh: "我喜欢一个人在房间读书。", vi: "Tôi thích một mình ở trong phòng đọc sách. (Nghĩa gốc là đọc sách).", pause: 3000 },
              { zh: "我以前在中国读书。", vi: "Trước đây tôi từng học ở Trung Quốc.", pause: 2500 }
            ],
            trap: {
              name: "Phân biệt 看书 (Xem sách giải trí) và 读书 (Đọc sách/Đi học)",
              situation: "Không biết khi nào dùng 看书, khi nào dùng 读书 vì tiếng Việt đều gọi là 'đọc sách'.",
              explanation: "看书 (Khán thư): Dùng mắt nhìn, thiên về giải trí thư giãn (đọc truyện, tạp chí). 读书 (Độc thư): Thiên về học tập nghiêm túc, đọc thành tiếng, hoặc mang nghĩa 'đi học ở trường'.",
              wrong: "Dùng 看书 để nói 'đang học đại học': 他在大学看书 (Anh ấy xem sách ở trường đại học - sai ý đang là sinh viên).",
              right: "他在大学读书。 (Anh ấy đang học đại học).",
              tip: "Học hành nghiêm túc / đi học ở trường -> 读书. Đọc truyện thư giãn lúc rảnh -> 看书.",
              audio: [
                { lang: "vi-VN", text: "Bẫy ở đây là nhầm lẫn giữa chữ Khán Thư và Độc Thư. Chữ Khán là dùng mắt xem để giải trí. Nếu bạn cầm một cuốn tiểu thuyết hoặc truyện tranh đọc cho vui lúc rảnh rỗi, hãy dùng Khán Thư. Còn từ Độc Thư mang tính chất nghiêm túc hơn, đọc để học bài, đọc thành tiếng, hoặc mang nghĩa bao hàm cả việc đi học." }
              ]
            },
            pron: {
              guide: "Chữ thứ nhất thanh hai lên giọng, chữ thứ hai thanh một giữ đều cao:",
              audio: [
                { lang: "vi-VN", text: "Chữ thứ nhất thanh hai, chữ thứ hai thanh một. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "读书", pause: 1500 },
                { lang: "zh-CN", text: "还在读书", pause: 1500 },
                { lang: "zh-CN", text: "他儿子还在读书。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 读 có bộ Ngôn (讠- phát ra tiếng nói) bên trái và chữ Mại (卖) bên phải. Chữ 书 là hình quyển sách xếp tầng.",
              audio: [
                { lang: "vi-VN", text: "Chữ Độc có bộ Ngôn bên trái, nghĩa là dùng miệng đọc thành tiếng để học bài, ghép với chữ Thư là cuốn sách." }
              ]
            },
            summary: "Khung nên nhớ: 还在读书 (Vẫn còn đang đi học). Điểm phân biệt nhất: Có nghĩa là 'đi học', trang trọng và nghiêm túc hơn chữ 看书."
          },
          {
            id: "G02-W10", index: 10, hanzi: "打开", pinyin: "dǎ kāi (thanh 3 - thanh 1)", coreMeaning: "mở ra, giở ra, bật lên",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười đọc là" },
              { lang: "zh-CN", text: "打开", pause: 400 },
              { lang: "vi-VN", text: "thanh ba và thanh một. Nghĩa trọng tâm là: mở ra, giở ra." }
            ],
            meaning: {
              situation: "Yêu cầu ai đó mở sách, mở cửa, hoặc tự mình bật một thiết bị điện tử lên.",
              detail: "Hành động làm cho một vật đang đóng chuyển sang trạng thái mở hoặc hoạt động. Dùng được cho cả đồ vật vật lý (cửa, hộp, sách) lẫn thiết bị điện tử (máy tính, phần mềm).",
              keyPoint: "Khi muốn nói mở đồ vật hoặc bật máy tính/ứng dụng, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Khai vốn đã có nghĩa là mở. Khi thêm chữ Đả phía trước, nó trở thành một động từ cụ thể mô tả rõ quá trình dùng tay tác động để giở ra, bóc ra hoặc bật lên. Bạn dùng nó khi yêu cầu người khác mở sách, mở cửa hoặc bật máy tính." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Động từ + Tân ngữ trực tiếp",
                pattern: "打开 + Đồ vật (书 / 门 / 电脑)",
                note: "Cách dùng giống hệt tiếng Việt: 打开书 (Giở sách ra), 打开门 (Mở cửa ra), 打开电脑 (Bật máy tính).",
                audio: [
                  { lang: "vi-VN", text: "Cách dùng cực kỳ đơn giản, giống hệt tiếng Việt. Động từ cộng thẳng đồ vật:" },
                  { lang: "zh-CN", text: "打开书", pause: 400 },
                  { lang: "vi-VN", text: "là mở sách." },
                  { lang: "zh-CN", text: "打开电脑", pause: 400 },
                  { lang: "vi-VN", text: "là bật máy tính." }
                ]
              }
            ],
            examples: [
              { zh: "请打开书。", vi: "Mời mở sách ra. (Câu lệnh thường nghe trong lớp học).", pause: 2000 },
              { zh: "回家后，他打开了电脑。", vi: "Sau khi về nhà, anh ấy đã bật máy tính lên.", pause: 2500 }
            ],
            trap: {
              name: "Lưu ý khi phủ định trạng thái 'Không mở ra được'",
              situation: "Cửa bị kẹt hoặc sai mật khẩu, muốn nói 'Không mở ra được'.",
              explanation: "Khác với động từ thường, để nói 'mở nhưng không ra', người bản xứ không nói 不打开 mà dùng bổ ngữ khả năng: 打不开 (Không thể mở ra).",
              wrong: "这个门不打开。 (Khi nói cửa bị kẹt không mở nổi).",
              right: "这个门打不开。 (Cánh cửa này không mở ra được).",
              tip: "Mở sách/máy tính -> 打开 + Vật. Không thể mở nổi -> 打不开.",
              audio: [
                { lang: "vi-VN", text: "Lưu ý nhỏ khi phủ định: Để nói cửa bị kẹt không mở ra được, người bản xứ không nói Bất Đả Khai, mà chèn chữ Bất vào giữa thành:" },
                { lang: "zh-CN", text: "打不开", pause: 500 },
                { lang: "vi-VN", text: "Ở cấp độ này bạn chỉ cần nghe qua để biết thêm phản xạ tự nhiên nhé." }
              ]
            },
            pron: {
              guide: "Chữ thứ nhất thanh ba trầm xuống, chữ thứ hai thanh một ngân cao:",
              audio: [
                { lang: "vi-VN", text: "Chữ thứ nhất thanh ba, chữ thứ hai thanh một. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "打开", pause: 1500 },
                { lang: "zh-CN", text: "请打开书。", pause: 1500 },
                { lang: "zh-CN", text: "打开电脑", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 打 (dùng tay tác động) ghép với chữ 开 (mở tung hai cánh cửa).",
              audio: [
                { lang: "vi-VN", text: "Chữ Đả dùng tay tác động, ghép với chữ Khai là mở ra. Nhìn mặt chữ rất dễ nhớ." }
              ]
            },
            summary: "Khung nên nhớ: 打开书 (Mở sách ra), 打开电脑 (Bật máy tính)."
          },
          {
            id: "G02-W11", index: 11, hanzi: "动作", pinyin: "dòng zuò (hai thanh 4)", coreMeaning: "động tác, cử động",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười một đọc là" },
              { lang: "zh-CN", text: "动作", pause: 400 },
              { lang: "vi-VN", text: "hai thanh bốn. Nghĩa là: động tác, cử động." }
            ],
            meaning: {
              situation: "Khen ngợi ai đó di chuyển nhanh nhẹn, hoặc nhận xét về bài tập thể dục, múa, võ thuật.",
              detail: "Sự cử động cơ học của tay chân, cơ thể. Từ loại: Danh từ (khác với động từ 'hành động').",
              keyPoint: "Khi muốn nhận xét về cử động cơ thể, thao tác tay chân nhanh/chậm/đẹp/khó, bạn dùng danh từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Động trong chuyển động, chữ Tác trong thao tác. Từ này là một danh từ, chỉ các cử động của cơ thể. Bạn dùng nó khi học khiêu vũ, võ thuật, hoặc nhận xét tốc độ thao tác của một người." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Khung câu miêu tả & Lượng từ",
                pattern: "动作 + 很 + Tính từ  |  一个动作",
                note: "Vì là danh từ, nó thường làm chủ ngữ để được nhận xét. Lượng từ đi kèm là 个 (一个动作 - một động tác). Ví dụ: 他的动作很快 (Động tác của anh ấy rất nhanh).",
                audio: [
                  { lang: "vi-VN", text: "Vì là danh từ, nó thường làm chủ ngữ để được nhận xét. Khung câu: Động tác, cộng phó từ chỉ mức độ Rất, cộng Tính từ. Ví dụ:" },
                  { lang: "zh-CN", text: "他的动作很快。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là cử động hay thao tác của anh ấy rất nhanh nhẹn." }
                ]
              }
            ],
            examples: [
              { zh: "这个动作很难。", vi: "Động tác này rất khó. (Chỉ một thao tác cụ thể trong bài tập).", pause: 2000 },
              { zh: "她的动作真好看。", vi: "Động tác của cô ấy thật đẹp. (Khen ngợi múa hoặc dáng điệu).", pause: 2500 },
              { zh: "他的动作很快。", vi: "Động tác của anh ấy rất nhanh.", pause: 2000 }
            ],
            trap: {
              name: "Nhầm với 'hành động' mang ý nghĩa trừu tượng/kế hoạch",
              situation: "Tiếng Việt nói 'Hành động bảo vệ môi trường' hoặc 'Anh ta có hành động mờ ám'.",
              explanation: "Những lúc đó KHÔNG dùng 动作 vì không phải là cử động cơ bắp vật lý. Lúc đó phải dùng 行动 (Hành động).",
              wrong: "Dùng 动作 cho chiến dịch/kế hoạch trừu tượng.",
              right: "这个动作很难。 (Chỉ dùng cho cử động tay chân, cơ thể).",
              tip: "Cứ dính tới khua tay múa chân, nhanh chậm cơ thể -> dùng 动作. Tính chất kế hoạch, quyết định -> không dùng.",
              audio: [
                { lang: "vi-VN", text: "Hãy cẩn thận không dùng từ này thay cho chữ Hành Động mang nghĩa trừu tượng nhé. Từ này thuần túy là việc cử động tay chân cơ bắp thôi. Hành động mang tính kế hoạch thì tiếng Trung có từ khác." }
              ]
            },
            pron: {
              guide: "Hai thanh bốn liên tiếp, đọc mạnh và dứt khoát cả hai âm:",
              audio: [
                { lang: "vi-VN", text: "Hai thanh bốn liên tiếp, đọc mạnh và dứt khoát:" },
                { lang: "zh-CN", text: "动作", pause: 1500 },
                { lang: "zh-CN", text: "这个动作很难。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 动 có chữ Vân (云 - đám mây) bên trái và bộ Lực (力 - sức mạnh) bên phải. Chữ 作 có bộ Nhân đứng (亻- con người) bên trái và chữ Tạ (乍) bên phải.",
              audio: [
                { lang: "vi-VN", text: "Chữ Động có bộ Lực chỉ sức mạnh cơ bắp, chữ Tác có bộ Nhân đứng chỉ con người đang thực hiện thao tác." }
              ]
            },
            summary: "Khung nên nhớ: 动作很快 (Động tác rất nhanh), 这个动作很难 (Động tác này rất khó)."
          }
        ],
        exercises: [
          {
            id: "G02-EXER01", type: "Nhớ nghĩa và dùng từ",
            prompt: "Hoàn thành câu: 'Cuối tuần tôi thường rủ bạn bè đi ___.' (Môn bóng rổ).",
            options: ["A. 打球", "B. 看书"],
            correct: 0,
            questionAudio: [
              { lang: "vi-VN", text: "Hãy chọn từ thích hợp điền vào chỗ trống. Cuối tuần tôi thường rủ bạn bè đi chơi bóng. Đáp án là A hay B?" }
            ],
            reasonRight: "Đáp án A (打球) chính xác! Môn bóng rổ chơi bằng tay nên dùng chữ Đả Cầu.",
            reasonWrong: "Cần sửa: 看书 là xem sách, còn chơi bóng rổ bằng tay phải chọn 打球.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là A:" },
              { lang: "zh-CN", text: "打球", pause: 400 },
              { lang: "vi-VN", text: "Vì môn bóng rổ chơi bằng tay nên dùng chữ Đả Cầu." }
            ]
          },
          {
            id: "G02-EXER02", type: "Vị trí, kết hợp và bẫy",
            prompt: "Câu nào diễn đạt đúng ý: 'Tôi lái chiếc xe mới của tôi'?",
            options: ["A. 我开车我的新车。", "B. 我开我的新车。"],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Đâu là cách nói đúng để diễn đạt Tôi lái chiếc xe mới của tôi? Hãy nhớ lại bẫy về cụm từ ly hợp mà chúng ta vừa phân tích nhé." }
            ],
            reasonRight: "Đáp án B chính xác! 开车 là cụm động - tân, khi có tân ngữ cụ thể (我的新车) phải bỏ chữ 车 thừa đi.",
            reasonWrong: "Cần sửa: Bạn lặp lại hai lần chữ 'xe' (车) rồi kìa!",
            explainAudio: [
              { lang: "vi-VN", text: "Đây là câu sai để phân tích:" },
              { lang: "zh-CN", text: "我开车我的新车。", pause: 500 },
              { lang: "vi-VN", text: "Đáp án đúng là B:" },
              { lang: "zh-CN", text: "我开我的新车。", pause: 500 },
              { lang: "vi-VN", text: "Khi đã có tân ngữ cụ thể là chiếc xe mới của tôi, bạn không được lặp lại chữ Xa ở sau động từ Khai nữa." }
            ]
          },
          {
            id: "G02-EXER03", type: "Nghe hiểu (Ẩn bản chép lời)",
            isListening: true,
            prompt: "Nghe và cho biết em trai của người nói hiện tại đang làm gì?",
            options: [
              "A. Đang ở thư viện tìm đọc một cuốn tiểu thuyết giải trí.",
              "B. Đang đi học đại học/du học."
            ],
            correct: 1,
            transcript: "我弟弟还在北京读书。 (Em trai tôi vẫn còn đang đi học ở Bắc Kinh).",
            questionAudio: [
              { lang: "vi-VN", text: "Mời bạn nghe câu sau:" },
              { lang: "zh-CN", text: "我弟弟还在北京读书。", pause: 800 },
              { lang: "vi-VN", text: "Theo bạn, em trai của người nói đang làm gì?" }
            ],
            reasonRight: "Đáp án B chính xác! Dùng 读书 trong ngữ cảnh 在北京读书 mang nghĩa là đang đi học/du học.",
            reasonWrong: "Cần sửa: Trong ngữ cảnh 'vẫn còn ở Bắc Kinh 读书', từ này mang nghĩa là đang đi học chứ không phải đọc tiểu thuyết giải trí.",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B. Bản chép lời câu vừa nghe là:" },
              { lang: "zh-CN", text: "我弟弟还在北京读书。", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: Em trai tôi vẫn còn đang đi học ở Bắc Kinh." }
            ]
          }
        ],
        selfUse: {
          id: "G02-SELF01",
          situation: "Tình huống 1: Một người bạn gọi điện rủ bạn đi ăn, nhưng bạn đang trong lớp. Bạn muốn hẹn bạn ấy là: 'Sau khi tan học, chúng ta đi ăn cơm nhé.' Bạn sẽ nói thế nào?",
          hint1: "Dùng từ 'tan học' kết hợp với 'sau khi' để làm mốc thời gian ở đầu câu. Sau đó rủ đi ăn cơm.",
          hint2: "Khung câu: [Tan học] + 后，我们 + [đi ăn cơm] + 吧。",
          modelAnswer: "下课后，我们去吃饭吧。",
          modelExplain: "'Sau khi tan học' là 下课后 (nhớ đặt chữ 后 ở cuối cụm từ). Trợ từ 吧 ở cuối câu mang tính chất rủ rê, đề nghị (nhé/đi).",
          modelAudio: [
            { lang: "vi-VN", text: "Câu trả lời mẫu là:" },
            { lang: "zh-CN", text: "下课后，我们去吃饭吧。", pause: 500 },
            { lang: "vi-VN", text: "Bạn đã dùng đúng mốc thời gian Hạ Khóa Hậu đặt ở đầu câu chưa?" }
          ]
        },
        reviews: [
          { day: 1, type: "Nhớ nghĩa cơ bản", q: "Dịch cụm từ 'Bật máy tính' sang tiếng Trung.", answer: "打开电脑", explain: "Dùng động từ mục tiêu 打开 + 电脑.", audio: [{ lang: "vi-VN", text: "Đáp án là:" }, { lang: "zh-CN", text: "打开电脑" }] },
          { day: 3, type: "Vị trí & Bẫy", q: "Dịch câu 'Tôi đi xe máy đi làm'. Nếu bạn dùng 开车, lỗi sai là gì?", answer: "我骑摩托车去上班。", explain: "Lỗi sai: 开车 chỉ dùng cho ô tô/xe có vô lăng. Xe máy phải dùng 骑 (kỵ/cưỡi).", audio: [{ lang: "vi-VN", text: "Xe máy phải dùng chữ Kỵ. Câu đúng là:" }, { lang: "zh-CN", text: "我骑摩托车去上班。" }] },
          { day: 7, type: "Nghe hiểu phản xạ", q: "Bấm nghe âm thanh và cho biết câu này khen hay phàn nàn điều gì?", listenAudio: [{ lang: "zh-CN", text: "你的动作太快了，我看不清。" }], answer: "Động tác của bạn quá nhanh, tôi nhìn không rõ.", explain: "Bản chép lời: 你的动作太快了，我看不清。 (Dùng 动作 để chỉ sự cử động tay chân nhanh chóng).", audio: [{ lang: "zh-CN", text: "你的动作太快了，我看不清。", pause: 500 }, { lang: "vi-VN", text: "Nghĩa là: Động tác của bạn quá nhanh, tôi nhìn không rõ." }] }
        ]
      },
      // === DÁN TIẾP PHẦN 3 NGAY DƯỚI DÒNG NÀY ===
      // =====================================================================
      // NHÓM 3: THỜI GIAN & ĐẠI TỪ GIA ĐÌNH (Từ số 12 -> Từ số 16)
      // =====================================================================
      {
        id: "g3",
        title: "Nhóm 3: Thời gian & Đại từ Gia đình",
        desc: "Gồm 5 từ vựng về mốc thời gian, tần suất, đại từ số nhiều và cách xưng hô người thân ruột thịt.",
        words: [
          {
            id: "G03-W12", index: 12, hanzi: "后天", pinyin: "hòu tiān (thanh 4 - thanh 1)", coreMeaning: "ngày mốt, ngày kia (hai ngày nữa)",
            introAudio: [
              { lang: "vi-VN", text: "Chúng ta bước sang nhóm từ thứ ba với một từ chỉ thời gian. Chữ Hán này đọc là" },
              { lang: "zh-CN", text: "后天", pause: 400 },
              { lang: "vi-VN", text: "thanh bốn và thanh một. Nghĩa trọng tâm là: ngày mốt, ngày kia, tức là ngày sau ngày mai." }
            ],
            meaning: {
              situation: "Kể về một kế hoạch sẽ diễn ra vào hai ngày nữa tính từ hôm nay.",
              detail: "Chữ 后 mang nghĩa là phía sau, chữ 天 là ngày. Ghép lại dùng để chỉ ngày phía sau của ngày mai (ngày mốt/ngày kia).",
              keyPoint: "Khi muốn hẹn hoặc báo lịch trình vào ngày mốt, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Hậu mang nghĩa là phía sau, hoặc sau này. Chữ Thiên là ngày. Ghép lại, từ này dùng để chỉ ngày phía sau của ngày mai, chính là ngày mốt theo cách nói miền Nam, hoặc ngày kia theo cách nói miền Bắc." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Làm trạng ngữ chỉ thời gian trong câu",
                pattern: "后天 + Chủ ngữ + Hành động  |  Chủ ngữ + 后天 + Hành động",
                note: "Từ chỉ thời gian trong tiếng Trung cực kỳ linh hoạt: đứng ĐẦU câu hoặc ngay SAU chủ ngữ, nhưng tuyệt đối phải đứng TRƯỚC hành động. Ví dụ: 后天我去北京 hoặc 我后天去北京 (Ngày mốt tôi đi Bắc Kinh).",
                audio: [
                  { lang: "vi-VN", text: "Từ chỉ thời gian trong tiếng Trung có quy tắc vị trí rất rõ ràng: Một là đứng ở đầu câu, hai là đứng ngay sau chủ thể, nhưng bắt buộc phải đứng trước động từ. Ví dụ, bạn có thể nói:" },
                  { lang: "zh-CN", text: "后天我去北京。", pause: 500 },
                  { lang: "vi-VN", text: "Hoặc:" },
                  { lang: "zh-CN", text: "我后天去北京。", pause: 500 },
                  { lang: "vi-VN", text: "Cả hai câu này đều có nghĩa là ngày mốt tôi đi Bắc Kinh, chỉ khác nhau một chút về nhịp điệu." }
                ]
              }
            ],
            examples: [
              { zh: "他后天休息。", vi: "Ngày mốt anh ấy nghỉ ngơi.", pause: 2000 },
              { zh: "今天星期一，后天星期三。", vi: "Hôm nay thứ Hai, ngày mốt thứ Tư. (Dùng để xác định thứ/ngày).", pause: 2500 },
              { zh: "后天我去北京。", vi: "Ngày mốt tôi đi Bắc Kinh.", pause: 2000 }
            ],
            trap: {
              name: "Đặt thời gian ở cuối câu theo thói quen tiếng Việt",
              situation: "Bạn muốn nói 'Tôi đi làm vào ngày mốt'. Người học hay dịch từng chữ từ tiếng Việt và đưa 'ngày mốt' xuống cuối câu.",
              explanation: "Giống như quy tắc Nơi chốn ở Nhóm 1, Thời gian cũng phải được nói TRƯỚC khi hành động diễn ra. Bối cảnh (Thời gian, Địa điểm) luôn tạo sân khấu trước cho Động từ.",
              wrong: "我去上班后天。",
              right: "我后天去上班。 (Tôi ngày mốt đi làm).",
              tip: "Thời gian và Địa điểm luôn đi trước Hành động. Phải dựng sân khấu xong rồi mới diễn.",
              audio: [
                { lang: "vi-VN", text: "Bẫy rất lớn ở đây là bạn bê nguyên trật tự của tiếng Việt sang. Tình huống là Tôi đi làm vào ngày mốt. Đây là câu sai ngữ pháp để phân tích:" },
                { lang: "zh-CN", text: "我去上班后天。", pause: 500 },
                { lang: "vi-VN", text: "Thời gian bị đặt ở cuối câu. Câu sửa đúng phải kéo thời gian lên trước:" },
                { lang: "zh-CN", text: "我后天去上班。", pause: 500 },
                { lang: "vi-VN", text: "Mẹo nhớ cốt lõi của tiếng Trung: Thời gian và Địa điểm luôn đi trước Hành động. Phải dựng sân khấu xong rồi mới diễn." }
              ]
            },
            pron: {
              guide: "Chữ thứ nhất thanh bốn, dập mạnh. Chữ thứ hai thanh một, kéo dài nhẹ:",
              audio: [
                { lang: "vi-VN", text: "Chữ thứ nhất thanh bốn, dập mạnh. Chữ thứ hai thanh một, kéo dài nhẹ:" },
                { lang: "zh-CN", text: "后天", pause: 1500 },
                { lang: "zh-CN", text: "我后天去。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 后 có nét phẩy, nét sổ và bộ Khẩu (口) ở dưới. Chữ 天 gồm hai nét ngang (bầu trời trên đầu) và chữ Đại (大 - con người).",
              audio: [
                { lang: "vi-VN", text: "Chữ Hậu chỉ phía sau, ghép với chữ Thiên là bầu trời và ngày tháng. Hãy nhìn kỹ mặt chữ để ghi nhớ nhé." }
              ]
            },
            summary: "Khung nên nhớ: 我后天 + Làm gì đó. Điểm phân biệt nhất: Không bao giờ vứt từ chỉ thời gian xuống cuối câu."
          },
          {
            id: "G03-W13", index: 13, hanzi: "有时候", pinyin: "yǒu shí hou (thanh 3 - thanh 2 - thanh nhẹ)", coreMeaning: "có lúc, thỉnh thoảng",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười ba đọc là" },
              { lang: "zh-CN", text: "有时候", pause: 400 },
              { lang: "vi-VN", text: "nghĩa trọng tâm là: có lúc, thỉnh thoảng." }
            ],
            meaning: {
              situation: "Miêu tả một thói quen hoặc hành động không diễn ra liên tục, chỉ thỉnh thoảng mới làm.",
              detail: "Chữ 有 là có, 时候 là lúc, thời gian. Cụm này diễn tả tần suất: có những lúc, thỉnh thoảng.",
              keyPoint: "Khi muốn nói 'thỉnh thoảng tôi làm việc này', bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Hữu là có, Thời Hậu là lúc, thời gian. Cụm này có nghĩa là Có những lúc, diễn tả thói quen thỉnh thoảng mới xảy ra." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Cấu trúc lặp liệt kê các thói quen",
                pattern: "Chủ ngữ + 有时候 + Hành động 1，有时候 + Hành động 2",
                note: "Đứng trước hành động (hoặc tính từ), dùng lặp lại trong câu để kể về các lựa chọn khác nhau. Ví dụ: 星期天我有时候看书，有时候打球 (Chủ nhật, có lúc tôi đọc sách, có lúc tôi đi đánh bóng).",
                audio: [
                  { lang: "vi-VN", text: "Từ này rất hay được dùng lặp lại trong một câu để kể về các lựa chọn khác nhau. Khung câu là: Có lúc làm việc A, có lúc làm việc B. Ví dụ:" },
                  { lang: "zh-CN", text: "星期天我有时候看书，有时候打球。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là Chủ nhật, có lúc tôi đọc sách, có lúc tôi đi đánh bóng. Bạn có thể tự ghép các thói quen của mình vào khung này." }
                ]
              }
            ],
            examples: [
              { zh: "他有时候很忙。", vi: "Có lúc anh ấy rất bận. (Từ này cũng có thể đứng trước tính từ).", pause: 2000 },
              { zh: "有时候我在家吃饭，有时候去外面吃。", vi: "Có lúc tôi ăn cơm ở nhà, có lúc ra ngoài ăn.", pause: 2500 },
              { zh: "星期天我有时候看书，有时候打球。", vi: "Chủ nhật, có lúc tôi đọc sách, có lúc tôi đi đánh bóng.", pause: 2500 }
            ],
            trap: {
              name: "Nhầm lẫn giữa 有时候 (Có lúc/Tần suất) và 有时间 (Có thời gian rảnh)",
              situation: "Bạn muốn nói 'Tôi có thời gian đi siêu thị với bạn'. Tiếng Việt 'có lúc' và 'có thời gian' nghe na ná nên hay dùng nhầm.",
              explanation: "有时候 chỉ tần suất thỉnh thoảng. Còn muốn nói mình đang rảnh rỗi, có quỹ thời gian thì phải dùng 有时间.",
              wrong: "我有时候跟你去超市。 (Sai ý 'đang rảnh', câu này biến thành: Thỉnh thoảng tôi đi siêu thị với bạn).",
              right: "我有时间跟你去超市。 (Tôi có thời gian để đi siêu thị với bạn).",
              tip: "Nói tần suất thỉnh thoảng -> dùng 有时候. Nói đang rảnh rỗi, có quỹ thời gian -> dùng 有时间.",
              audio: [
                { lang: "vi-VN", text: "Hãy cẩn thận phân biệt giữa Hữu Thời Hậu và Hữu Thời Gian. Nếu bạn muốn nói Hôm nay tôi có thời gian đi chơi với bạn, bạn phải dùng chữ Hữu Thời Gian. Đây là câu sai ngữ cảnh để phân tích:" },
                { lang: "zh-CN", text: "我有时候跟你去超市。", pause: 500 },
                { lang: "vi-VN", text: "Nếu dùng Hữu Thời Hậu, câu đó biến thành Thỉnh thoảng tôi đi siêu thị với bạn. Câu đúng khi nói đang rảnh là:" },
                { lang: "zh-CN", text: "我有时间跟你去超市。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh ba, chữ thứ hai thanh hai, chữ cuối đọc thanh nhẹ lướt nhanh:",
              audio: [
                { lang: "vi-VN", text: "Chữ cuối đọc thanh nhẹ lướt nhanh. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "有时候", pause: 1500 },
                { lang: "zh-CN", text: "他有时候很忙。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 有 có bộ Nguyệt (月) bên dưới. Chữ 时 có bộ Nhật (日 - mặt trời/thời gian) bên trái. Chữ 候 có bộ Nhân đứng (亻) bên trái.",
              audio: [
                { lang: "vi-VN", text: "Chữ Thời có bộ Nhật chỉ mặt trời và thời gian, kết hợp thành cụm Hữu Thời Hậu nghĩa là có những lúc." }
              ]
            },
            summary: "Khung nên nhớ: 有时候...，有时候... (Có lúc..., có lúc...). Phân biệt rõ với 有时间 (có thời gian rảnh)."
          },
          {
            id: "G03-W14", index: 14, hanzi: "他们", pinyin: "tā men (thanh 1 - thanh nhẹ)", coreMeaning: "họ, bọn họ",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười bốn đọc là" },
              { lang: "zh-CN", text: "他们", pause: 400 },
              { lang: "vi-VN", text: "thanh một và thanh nhẹ. Nghĩa trọng tâm là: họ, bọn họ." }
            ],
            meaning: {
              situation: "Nhắc đến một nhóm người từ 2 người trở lên trong cuộc trò chuyện.",
              detail: "Đại từ nhân xưng ngôi thứ ba số nhiều. Dùng cho nhóm toàn nam, hoặc nhóm có cả nam lẫn nữ (có bộ Nhân đứng 亻).",
              keyPoint: "Khi muốn nhắc đến 'những người đó', 'bọn họ', bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Tha nghĩa là anh ấy. Thêm chữ Môn vào sau để tạo số nhiều, chúng ta có chữ Họ, Bọn Họ. Lưu ý chữ viết của từ này có bộ Nhân đứng, dùng cho nhóm toàn nam, hoặc nhóm nam nữ lẫn lộn." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Làm chủ ngữ hoặc tân ngữ trong câu",
                pattern: "他们 + Động từ  |  Chủ ngữ + Động từ + 他们",
                note: "Linh hoạt làm chủ ngữ (đầu câu) hoặc tân ngữ (cuối câu). Ví dụ: 他们是我的朋友 (Họ là bạn của tôi) | 我认识他们 (Tôi quen biết họ).",
                audio: [
                  { lang: "vi-VN", text: "Cách dùng của từ này giống hệt đại từ trong tiếng Việt. Nó có thể làm chủ ngữ, ví dụ:" },
                  { lang: "zh-CN", text: "他们是我的朋友。", pause: 500 },
                  { lang: "vi-VN", text: "Họ là bạn tôi. Hoặc làm đối tượng chịu tác động ở cuối câu, ví dụ:" },
                  { lang: "zh-CN", text: "我认识他们。", pause: 500 },
                  { lang: "vi-VN", text: "Tôi quen biết họ." }
                ]
              }
            ],
            examples: [
              { zh: "他们在开会。", vi: "Bọn họ đang họp.", pause: 2000 },
              { zh: "他们是我的朋友。", vi: "Họ là bạn của tôi.", pause: 2000 },
              { zh: "我认识他们。", vi: "Tôi quen biết họ.", pause: 2000 }
            ],
            trap: {
              name: "Gắn 们 vào sau đồ vật để tạo số nhiều",
              situation: "Muốn nói 'Những cuốn sách của tôi'. Người học thấy 们 là dấu hiệu số nhiều nên tự động gắn vào sau mọi danh từ.",
              explanation: "Trong tiếng Trung, chữ 们 CHỈ dùng cho người (đại từ nhân xưng hoặc danh từ chỉ người). Không dùng cho đồ vật hay con vật vô tri.",
              wrong: "我的书们。",
              right: "我的那些书。 (Những cuốn sách kia của tôi).",
              tip: "Chỉ gắn 们 sau đại từ (我们, 你们, 他们) hoặc danh từ chỉ người (老师们, 朋友们). Đồ vật thì dùng 些.",
              audio: [
                { lang: "vi-VN", text: "Một bẫy ngữ pháp cực kỳ phổ biến: lạm dụng chữ Môn. Tình huống là bạn muốn nói Những cuốn sách này. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我的书们。", pause: 500 },
                { lang: "vi-VN", text: "Trong tiếng Trung, chữ Môn chỉ dùng để tạo số nhiều cho con người. Đồ vật thì tuyệt đối không được thêm chữ Môn vào phía sau. Câu đúng là:" },
                { lang: "zh-CN", text: "我的那些书。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ thứ hai là thanh nhẹ, bạn đọc lướt, ngắn và trầm xuống so với chữ đầu:",
              audio: [
                { lang: "vi-VN", text: "Chữ thứ hai là thanh nhẹ, bạn đọc lướt, ngắn và trầm xuống so với chữ đầu:" },
                { lang: "zh-CN", text: "他们", pause: 1500 },
                { lang: "zh-CN", text: "他们在开会。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 他 có bộ Nhân đứng (亻- con người) bên trái và chữ Dã (也) bên phải. Chữ 们 có bộ Nhân đứng (亻) và bộ Môn (门 - cánh cửa).",
              audio: [
                { lang: "vi-VN", text: "Cả hai chữ đều có bộ Nhân đứng ở bên trái, nhắc bạn nhớ rằng từ này chỉ dùng cho con người." }
              ]
            },
            summary: "Điểm phân biệt nhất: Không bao giờ dùng 们 để tạo số nhiều cho đồ vật."
          },
          {
            id: "G03-W15", index: 15, hanzi: "爸", pinyin: "bà (thanh 4)", coreMeaning: "bố, ba",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười lăm đọc là" },
              { lang: "zh-CN", text: "爸", pause: 400 },
              { lang: "vi-VN", text: "thanh bốn. Nghĩa là: bố, ba." }
            ],
            meaning: {
              situation: "Gọi trực tiếp bố của mình, hoặc nhắc đến bố trong câu chuyện thân mật.",
              detail: "Chỉ người cha ruột. Dạng đầy đủ thường gặp là 爸爸, còn 爸 là cách gọi ngắn gọn, thân mật.",
              keyPoint: "Khi gọi bố hoặc giới thiệu bố mình một cách tự nhiên, gần gũi, dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Từ này chỉ người cha ruột của mình, là cách gọi ngắn gọn và thân mật của từ Ba Ba." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Khung câu sở hữu thân mật (Lược bỏ 的)",
                pattern: "我 + 爸 (Bố tôi)  |  你 + 爸 (Bố bạn)",
                note: "Khi nói 'Bố của tôi', chỉ cần ghép thẳng đại từ và chữ 爸, không cần dùng chữ 的 ở giữa. Ví dụ: 我爸是老师 (Bố tôi là giáo viên).",
                audio: [
                  { lang: "vi-VN", text: "Điểm quan trọng nhất khi dùng từ này nằm ở cách thể hiện sự sở hữu. Khi nói Bố của tôi, bạn chỉ cần ghép chữ Ngã và chữ Ba. Ví dụ:" },
                  { lang: "zh-CN", text: "我爸是老师。", pause: 500 },
                  { lang: "vi-VN", text: "Nghĩa là Bố tôi là giáo viên. Không cần dùng chữ Đích ở giữa." }
                ]
              }
            ],
            examples: [
              { zh: "爸，你去哪儿？", vi: "Bố, bố đi đâu đấy? (Dùng để xưng hô trực tiếp).", pause: 2000 },
              { zh: "我爸是老师。", vi: "Bố tôi là giáo viên.", pause: 2000 },
              { zh: "这是我爸。", vi: "Đây là bố tôi.", pause: 2000 }
            ],
            trap: {
              name: "Thừa chữ 的 (của) khi nói về người thân ruột thịt",
              situation: "Muốn giới thiệu 'Đây là bố của tôi'. Theo thói quen sở hữu, người học hay nói 我的爸 hoặc 我的爸爸.",
              explanation: "Đối với người thân ruột thịt trong gia đình (bố, mẹ, anh, chị, em), người bản xứ lược bỏ chữ 的 để thể hiện sự gần gũi.",
              wrong: "这是我的爸。 (Hơi rườm rà, thiếu tự nhiên).",
              right: "这是我爸。 (Đây là bố tôi).",
              tip: "Cứ là người nhà ruột thịt, hãy bỏ chữ 的 đi (我爸, 我妈, 我姐).",
              audio: [
                { lang: "vi-VN", text: "Một lưu ý để bạn nói tiếng Trung tự nhiên như người bản xứ. Khi giới thiệu người thân ruột thịt, đừng dùng chữ Đích. Đây là câu thiếu tự nhiên để phân tích:" },
                { lang: "zh-CN", text: "这是我的爸。", pause: 500 },
                { lang: "vi-VN", text: "Bạn chỉ cần nói ngắn gọn là:" },
                { lang: "zh-CN", text: "这是我爸。", pause: 500 },
                { lang: "vi-VN", text: "Bỏ chữ Đích đi sẽ thể hiện được sự gần gũi và gắn bó của gia đình." }
              ]
            },
            pron: {
              guide: "Thanh bốn đọc dứt khoát, hạ giọng mạnh:",
              audio: [
                { lang: "vi-VN", text: "Thanh bốn đọc dứt khoát:" },
                { lang: "zh-CN", text: "爸", pause: 1500 },
                { lang: "zh-CN", text: "我爸", pause: 1500 },
                { lang: "zh-CN", text: "我爸是老师。", pause: 2000 }
              ]
            },
            write: {
              desc: "Phần trên là bộ Phụ (父 - nghĩa gốc là người cha), phần dưới là chữ Ba (巴 - gợi âm đọc).",
              audio: [
                { lang: "vi-VN", text: "Chữ này là chữ hình thanh điển hình: ở trên là bộ Phụ chỉ người cha, ở dưới là chữ Ba chỉ âm đọc." }
              ]
            },
            summary: "Khung nên nhớ: 我爸 (Bố tôi - không dùng 的)."
          },
          {
            id: "G03-W16", index: 16, hanzi: "姐", pinyin: "jiě (thanh 3)", coreMeaning: "chị, chị gái",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười sáu đọc là" },
              { lang: "zh-CN", text: "姐", pause: 400 },
              { lang: "vi-VN", text: "thanh ba. Nghĩa là: chị, chị gái." }
            ],
            meaning: {
              situation: "Gọi hoặc giới thiệu về người chị ruột (hoặc chị họ) trong gia đình.",
              detail: "Dạng đầy đủ là 姐姐. Lưu ý văn hóa: Ở mức độ xã giao bình thường, người Trung Quốc ít gọi người lạ ngoài đường là 姐 trừ khi thân thiết; người mới học hãy dùng từ này để chỉ chị ruột trong nhà.",
              keyPoint: "Khi nói về chị gái trong gia đình, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Tương tự như từ Bố, từ này có dạng đầy đủ là Tỷ Tỷ. Ở trình độ sơ cấp, bạn hãy dùng từ này để chỉ người chị ruột hoặc chị họ trong gia đình nhé." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Khung kết hợp số lượng & Lược bỏ 的",
                pattern: "Số đếm + 个 + 姐姐  |  我姐 + Hành động",
                note: "Khi đếm số lượng người nhà, bắt buộc phải có lượng từ 个. Ví dụ: 我有两个姐姐 (Tôi có hai người chị gái). Khi nói 'chị tôi', lược bỏ 的: 我姐 (Chị tôi).",
                audio: [
                  { lang: "vi-VN", text: "Khi bạn muốn giới thiệu nhà mình có mấy chị gái, bạn phải dùng lượng từ. Khung câu là: Số đếm, cộng lượng từ Cá, cộng Tỷ Tỷ. Ví dụ:" },
                  { lang: "zh-CN", text: "我有两个姐姐。", pause: 500 },
                  { lang: "vi-VN", text: "Tôi có hai người chị. Nhớ đừng bao giờ nói trực tiếp là hai chị mà bỏ quên lượng từ nhé." }
                ]
              }
            ],
            examples: [
              { zh: "我姐在大学读书。", vi: "Chị tôi đang học đại học. (Lược bỏ 的 giống quy tắc của từ 爸).", pause: 2500 },
              { zh: "我有两个姐姐。", vi: "Tôi có hai người chị gái.", pause: 2000 }
            ],
            trap: {
              name: "Quên lượng từ 个 khi đếm số người chị, hoặc thừa chữ 的",
              situation: "Muốn nói 'Tôi có một người chị' hoặc 'Chị của tôi'.",
              explanation: "Giữa số đếm và danh từ bắt buộc phải có lượng từ 个. Đồng thời nói 'chị tôi' thì gọi gọn là 我姐.",
              wrong: "我有一姐。 / 我的姐。",
              right: "我有一个姐。 / 我姐。 (Tôi có một người chị / Chị tôi).",
              tip: "Đếm số người -> Số + 个 + Người. Xưng hô sở hữu người thân -> Bỏ 的.",
              audio: [
                { lang: "vi-VN", text: "Bẫy cần tránh: Khi đếm số lượng anh chị em, tuyệt đối không được bỏ quên lượng từ Cá. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我有一姐。", pause: 500 },
                { lang: "vi-VN", text: "Câu sửa đúng phải có lượng từ Cá ở giữa:" },
                { lang: "zh-CN", text: "我有一个姐。", pause: 500 }
              ]
            },
            pron: {
              guide: "Thanh ba đọc trầm xuống rồi hơi ngân lên:",
              audio: [
                { lang: "vi-VN", text: "Thanh ba đọc trầm xuống. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "姐", pause: 1500 },
                { lang: "zh-CN", text: "我姐", pause: 1500 },
                { lang: "zh-CN", text: "我姐在大学读书。", pause: 2000 }
              ]
            },
            write: {
              desc: "Bên trái là bộ Nữ (女 - người phụ nữ), bên phải là chữ Thả (且 - gợi âm đọc).",
              audio: [
                { lang: "vi-VN", text: "Chữ Tỷ có bộ Nữ ở bên trái vì chỉ chị gái là phái nữ, bên phải là chữ Thả." }
              ]
            },
            summary: "Khung nên nhớ: 我有两个姐姐 (Tôi có hai người chị gái - chú ý lượng từ), 我姐 (Chị tôi)."
          }
        ],
        exercises: [
          {
            id: "G03-EXER01", type: "Nhớ nghĩa và dùng từ",
            prompt: "Hoàn thành câu: '___ 我去北京。' (Ý nói: Ngày mốt tôi đi Bắc Kinh).",
            options: ["A. 明天", "B. 后天"],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Để nói Ngày mốt tôi đi Bắc Kinh, bạn chọn từ nào cho vị trí chỗ trống? Đáp án A là Minh Thiên, đáp án B là Hậu Thiên." }
            ],
            reasonRight: "Đáp án B (后天) chính xác! Ngày mốt (hai ngày nữa) là 后天.",
            reasonWrong: "Cần sửa: 明天 là ngày mai, còn ngày mốt phải là 后天 nhé!",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là B:" },
              { lang: "zh-CN", text: "后天我去北京。", pause: 500 },
              { lang: "vi-VN", text: "Vì ngày mốt là Hậu Thiên, còn Minh Thiên là ngày mai." }
            ]
          },
          {
            id: "G03-EXER02", type: "Vị trí, kết hợp và bẫy",
            prompt: "Câu nào sau đây dịch chuẩn và tự nhiên nhất câu: 'Chị tôi có lúc rất bận'?",
            options: ["A. 我的姐有时候很忙。", "B. 我姐有时候很忙。"],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Đâu là cách nói tự nhiên nhất của câu Chị tôi có lúc rất bận? Hãy nhớ lại quy tắc nói về người thân ruột thịt nhé." }
            ],
            reasonRight: "Đáp án B chính xác! Gọi người nhà ruột thịt thì bỏ chữ 的 đi sẽ tự nhiên hơn rất nhiều.",
            reasonWrong: "Cần sửa: Khi nói về người thân ruột thịt như bố, mẹ, chị gái, người bản xứ lược bỏ chữ 的.",
            explainAudio: [
              { lang: "vi-VN", text: "Đây là câu thiếu tự nhiên để phân tích:" },
              { lang: "zh-CN", text: "我的姐有时候很忙。", pause: 500 },
              { lang: "vi-VN", text: "Đáp án tự nhiên nhất là B:" },
              { lang: "zh-CN", text: "我姐有时候很忙。", pause: 500 },
              { lang: "vi-VN", text: "Gọi người nhà ruột thịt thì bỏ chữ Đích đi sẽ gần gũi và tự nhiên hơn." }
            ]
          },
          {
            id: "G03-EXER03", type: "Nghe hiểu (Ẩn bản chép lời)",
            isListening: true,
            prompt: "Nghe và cho biết người nói có mấy người chị?",
            options: ["A. Không có", "B. 1 người", "C. 2 người"],
            correct: 1,
            transcript: "我只有一个姐，没有哥哥。 (Tôi chỉ có một người chị, không có anh trai).",
            questionAudio: [
              { lang: "vi-VN", text: "Mời bạn nghe câu sau:" },
              { lang: "zh-CN", text: "我只有一个姐，没有哥哥。", pause: 800 },
              { lang: "vi-VN", text: "Người nói có mấy người chị?" }
            ],
            reasonRight: "Đáp án B (1 người) chính xác! Trong câu nói rõ: 我只有一个姐 (Tôi chỉ có 1 người chị).",
            reasonWrong: "Cần sửa: Hãy nghe kỹ cụm 只有一个姐 (chỉ có một người chị).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là 1 người. Bản chép lời câu vừa nghe là:" },
              { lang: "zh-CN", text: "我只有一个姐，没有哥哥。", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: Tôi chỉ có một người chị, không có anh trai." }
            ]
          }
        ],
        selfUse: {
          id: "G03-SELF01",
          situation: "Tình huống 1: Kể cho bạn bè nghe về thói quen của bố bạn: 'Bố tôi có lúc uống trà, có lúc uống cà phê.'",
          hint1: "Dùng từ '我爸' (không cần 的). Sau đó dùng cấu trúc lặp 'có lúc... có lúc...'. Trà là 茶, Cà phê là 咖啡.",
          hint2: "Khung câu: 我爸 + 有时候喝茶，有时候 + 喝咖啡。",
          modelAnswer: "我爸有时候喝茶，有时候喝咖啡。",
          modelExplain: "Kết hợp hoàn hảo quy tắc bỏ 的 khi nói người thân (我爸) và cấu trúc lặp liệt kê tần suất (有时候... 有时候...).",
          modelAudio: [
            { lang: "vi-VN", text: "Câu trả lời mẫu là:" },
            { lang: "zh-CN", text: "我爸有时候喝茶，有时候喝咖啡。", pause: 500 },
            { lang: "vi-VN", text: "Bạn có bỏ chữ Đích không? Nếu bạn nói Ngã Ba thì xin chúc mừng, bạn đã nắm rất vững ngữ pháp." }
          ]
        },
        reviews: [
          { day: 1, type: "Nhớ nghĩa cơ bản", q: "Chọn từ đúng: Tôi thích (有时候 / 时候) đi xem phim.", answer: "有时候", explain: "有时候 mang nghĩa là thỉnh thoảng, có lúc.", audio: [{ lang: "vi-VN", text: "Đáp án đúng là:" }, { lang: "zh-CN", text: "有时候" }] },
          { day: 3, type: "Vị trí & Bẫy", q: "Dịch câu 'Sách của bọn họ'. Gợi ý: dùng từ 他们.", answer: "他们的书", explain: "Tuyệt đối không dùng 书们 vì 们 chỉ dùng cho người.", audio: [{ lang: "vi-VN", text: "Đáp án đúng là:" }, { lang: "zh-CN", text: "他们的书" }] },
          { day: 7, type: "Nghe hiểu phản xạ", q: "Bấm nghe âm thanh và cho biết câu này nghĩa là gì?", listenAudio: [{ lang: "zh-CN", text: "后天我和他们去打球。" }], answer: "Ngày mốt tôi và bọn họ đi chơi bóng.", explain: "Bản chép lời: 后天我和他们去打球。 (Kết hợp từ thời gian 后天, đại từ 他们 và từ 打球 của Nhóm 2).", audio: [{ lang: "zh-CN", text: "后天我和他们去打球。", pause: 500 }, { lang: "vi-VN", text: "Nghĩa là: Ngày mốt tôi và bọn họ đi chơi bóng." }] }
        ]
      },

      // =====================================================================
      // NHÓM 4: ĐÁNH GIÁ & KHÁI NIỆM KHÁC (Từ số 17 -> Từ số 24)
      // =====================================================================
      {
        id: "g4",
        title: "Nhóm 4: Đánh giá & Khái niệm khác",
        desc: "Gồm 8 từ vựng về sự đạt được, hành động đồng thời, mức độ cảm xúc, danh tiếng và địa điểm văn hóa.",
        words: [
          {
            id: "G04-W17", index: 17, hanzi: "得到", pinyin: "dé dào (thanh 2 - thanh 4)", coreMeaning: "được, đạt được, nhận được",
            introAudio: [
              { lang: "vi-VN", text: "Chúng ta bắt đầu nhóm cuối cùng với từ số mười bảy, đọc là" },
              { lang: "zh-CN", text: "得到", pause: 400 },
              { lang: "vi-VN", text: "thanh hai và thanh bốn. Nghĩa trọng tâm là: được, đạt được, nhận được." }
            ],
            meaning: {
              situation: "Kể về việc bạn nỗ lực và gặt hái được một kết quả tốt, hoặc nhận được sự giúp đỡ từ người khác.",
              detail: "Đạt được một thứ gì đó. Thứ này thường mang tính trừu tượng, vô hình (cơ hội, sự giúp đỡ, tình yêu thương, kết quả, giải thưởng).",
              keyPoint: "Khi muốn nói đến việc giành được, đạt được điều gì có ý nghĩa trừu tượng, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Đắc nghĩa là đạt được, chữ Đáo là tới. Đắc Đáo nghĩa là thu nhận được một thành quả nào đó. Thường là những thứ vô hình, trừu tượng như cơ hội, sự giúp đỡ, hoặc tình yêu thương." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Động từ + Danh từ trừu tượng",
                pattern: "得到 + Danh từ trừu tượng (帮助 / 机会 / 第一名)",
                note: "Các cụm kết hợp phổ biến: 得到帮助 (Nhận được sự giúp đỡ), 得到机会 (Có được cơ hội). Ví dụ: 在这里，我得到了很多帮助 (Ở đây, tôi đã nhận được rất nhiều sự giúp đỡ).",
                audio: [
                  { lang: "vi-VN", text: "Cách dùng rất đơn giản, động từ Đắc Đáo cộng với đối tượng nhận được ở phía sau. Bạn nên học thuộc lòng cụm từ:" },
                  { lang: "zh-CN", text: "得到帮助", pause: 500 },
                  { lang: "vi-VN", text: "Có nghĩa là nhận được sự giúp đỡ. Ví dụ:" },
                  { lang: "zh-CN", text: "在这里，我得到了很多帮助。", pause: 500 },
                  { lang: "vi-VN", text: "Ở đây tôi đã nhận được rất nhiều sự giúp đỡ." }
                ]
              }
            ],
            examples: [
              { zh: "他得到了第一名。", vi: "Anh ấy đã đạt được giải nhất.", pause: 2000 },
              { zh: "在这里，我得到了很多帮助。", vi: "Ở đây, tôi đã nhận được rất nhiều sự giúp đỡ.", pause: 2500 }
            ],
            trap: {
              name: "Nhầm lẫn giữa 得到 (Đạt được thứ trừu tượng) và 收到 (Nhận được đồ vật cụ thể)",
              situation: "Tiếng Việt đều gọi là 'nhận được', nên người học dễ dùng 得到 để nói 'nhận được quà, nhận được thư'.",
              explanation: "得到 dùng cho thứ trừu tượng, kết quả của một quá trình (sự tôn trọng, tình yêu, sự giúp đỡ). 收到 dùng cho đồ vật cụ thể cầm nắm được gửi đến tay (quà tặng, bưu kiện, tin nhắn, tiền).",
              wrong: "昨天我得到了一个礼物。 (Sai vì món quà là vật cụ thể cầm nắm được).",
              right: "昨天我收到了一个礼物。 (Hôm qua tôi nhận được một món quà).",
              tip: "Cầm nắm được trên tay -> dùng 收到. Không cầm nắm được (cơ hội, sự quan tâm) -> dùng 得到.",
              audio: [
                { lang: "vi-VN", text: "Một bẫy rất dễ mắc phải là nhầm từ này với chữ Thu Đáo. Cả hai đều dịch là nhận được. Nhưng Đắc Đáo dùng cho những thứ vô hình, trừu tượng như cơ hội, sự giúp đỡ. Còn Thu Đáo dùng cho vật chất cụ thể cầm nắm được như món quà, bức thư. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "昨天我得到了一个礼物。", pause: 500 },
                { lang: "vi-VN", text: "Câu này sai vì món quà cầm nắm được. Câu sửa đúng phải là:" },
                { lang: "zh-CN", text: "昨天我收到了一个礼物。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh hai vút lên, chữ sau thanh bốn dập xuống:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh hai, chữ sau thanh bốn. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "得到", pause: 1500 },
                { lang: "zh-CN", text: "得到帮助", pause: 1500 },
                { lang: "zh-CN", text: "他得到了第一名。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 得 có bộ Xích (彳- bước chân) bên trái. Chữ 到 có chữ Chí (至 - đi tới đích) bên trái và bộ Đao đứng (刂) bên phải.",
              audio: [
                { lang: "vi-VN", text: "Chữ Đắc có bộ Xích chỉ bước đi nỗ lực, chữ Đáo chỉ việc đi tới đích để gặt hái thành quả." }
              ]
            },
            summary: "Khung nên nhớ: 得到帮助 (Nhận được sự giúp đỡ). Phân biệt với 收到 (nhận quà/bưu kiện)."
          },
          {
            id: "G04-W18", index: 18, hanzi: "一边", pinyin: "yì biān (thanh 4 biến điệu - thanh 1)", coreMeaning: "vừa... vừa... (hai hành động cùng lúc)",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười tám đọc là" },
              { lang: "zh-CN", text: "一边", pause: 400 },
              { lang: "vi-VN", text: "thanh bốn và thanh một. Nghĩa trọng tâm là: vừa... vừa..., biểu thị hai hành động diễn ra cùng lúc." }
            ],
            meaning: {
              situation: "Kể về thói quen làm hai việc cùng một lúc (như vừa ăn cơm vừa xem tivi).",
              detail: "Biểu thị hai hành động xảy ra đồng thời song song nhau.",
              keyPoint: "Khi muốn nói 'vừa làm việc A, vừa làm việc B', dùng cặp từ này.",
              audio: [
                { lang: "vi-VN", text: "Khi bạn muốn kể về việc làm hai hành động song song cùng một lúc, như vừa ăn cơm vừa xem tivi, bạn dùng cấu trúc này." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Cấu trúc sóng đôi hai hành động đồng thời",
                pattern: "Chủ ngữ + 一边 + Hành động 1，一边 + Hành động 2",
                note: "Hành động 1 thường là hành động chính hoặc bắt đầu trước. Ví dụ: 我喜欢一边吃饭，一边看电视 (Tôi thích vừa ăn cơm, vừa xem tivi).",
                audio: [
                  { lang: "vi-VN", text: "Cấu trúc này rất thông dụng. Chủ ngữ cộng Nhất Biên thứ nhất, cộng hành động một. Sau đó là Nhất Biên thứ hai, cộng hành động hai. Ví dụ:" },
                  { lang: "zh-CN", text: "我喜欢一边吃饭，一边看电视。", pause: 500 },
                  { lang: "vi-VN", text: "Tôi thích vừa ăn cơm vừa xem tivi." }
                ]
              }
            ],
            examples: [
              { zh: "他一边走一边说。", vi: "Anh ấy vừa đi vừa nói.", pause: 2000 },
              { zh: "我喜欢一边吃饭，一边看电视。", vi: "Tôi thích vừa ăn cơm, vừa xem tivi.", pause: 2500 },
              { zh: "一边听一边写。", vi: "Vừa nghe vừa viết.", pause: 2000 }
            ],
            trap: {
              name: "Ghép thiếu một vế 一边",
              situation: "Muốn nói 'Tôi vừa ăn vừa uống', người học lười nên chỉ dùng một chữ 一边 ở đầu rồi ghép liền hai động từ.",
              explanation: "Cấu trúc sóng đôi 一边... 一边... bắt buộc phải đi thành cặp cho hai hành động, không được cắt bớt một nửa.",
              wrong: "我一边吃喝。",
              right: "我一边吃，一边喝。 (Tôi vừa ăn vừa uống).",
              tip: "Luôn đi thành cặp đủ 2 chữ 一边 cho 2 động từ.",
              audio: [
                { lang: "vi-VN", text: "Bẫy nhỏ ở đây là bạn cắt xén bớt cấu trúc. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我一边吃喝。", pause: 500 },
                { lang: "vi-VN", text: "Bạn bắt buộc phải dùng đủ một cặp cho hai hành động:" },
                { lang: "zh-CN", text: "我一边吃，一边喝。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ 一 khi đứng trước thanh một (边) sẽ biến điệu đọc thành thanh bốn (yì biān):",
              audio: [
                { lang: "vi-VN", text: "Hãy nghe và nhắc lại cụm từ này:" },
                { lang: "zh-CN", text: "一边", pause: 1500 },
                { lang: "zh-CN", text: "一边听一边写", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 一 là một nét ngang. Chữ 边 gồm chữ Lực (力) và bộ Sước (辶 - bước đi).",
              audio: [
                { lang: "vi-VN", text: "Chữ Nhất là một nét ngang, ghép với chữ Biên chúng ta đã học ở từ số một." }
              ]
            },
            summary: "Khung nên nhớ: 一边听一边写 (Vừa nghe vừa viết). Luôn dùng đủ 1 cặp."
          },
          {
            id: "G04-W19", index: 19, hanzi: "真的", pinyin: "zhēn de (thanh 1 - thanh nhẹ)", coreMeaning: "thật, thật sự",
            introAudio: [
              { lang: "vi-VN", text: "Từ số mười chín đọc là" },
              { lang: "zh-CN", text: "真的", pause: 400 },
              { lang: "vi-VN", text: "thanh một và thanh nhẹ. Nghĩa là: thật, thật sự." }
            ],
            meaning: {
              situation: "Nhấn mạnh một cảm xúc mãnh liệt hoặc khẳng định điều mình nói là sự thật, không nói dối.",
              detail: "Đóng vai trò phó từ nhấn mạnh mức độ hoặc dùng để xác nhận sự thật.",
              keyPoint: "Dùng để tăng mức độ biểu cảm (thật sự rất ngon, thật sự rất đẹp, thật sự không biết).",
              audio: [
                { lang: "vi-VN", text: "Từ này dùng để nhấn mạnh cảm xúc mãnh liệt hoặc khẳng định điều bạn đang nói hoàn toàn là sự thật." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Phó từ nhấn mạnh trước Tính từ hoặc Động từ tâm lý",
                pattern: "真的 + (很) + Tính từ  |  真的 + 不知道",
                note: "Nhấn mạnh cảm xúc của người nói. Chữ 很 có thể có hoặc không. Ví dụ: 这个菜真的很好吃 (Món này thật sự rất ngon).",
                audio: [
                  { lang: "vi-VN", text: "Chữ Chân Đích đóng vai trò như một phó từ chỉ mức độ cực kỳ mạnh mẽ. Khung câu là Chân Đích cộng tính từ. Ví dụ:" },
                  { lang: "zh-CN", text: "这个菜真的很好吃。", pause: 500 },
                  { lang: "vi-VN", text: "Món này thật sự rất ngon." }
                ]
              }
            ],
            examples: [
              { zh: "我真的不知道。", vi: "Tôi thật sự không biết. (Khẳng định sự thật, thanh minh).", pause: 2500 },
              { zh: "这是真的吗？", vi: "Đây là thật á? (Dùng làm câu hỏi nghi vấn, tỏ vẻ ngạc nhiên).", pause: 2500 },
              { zh: "这个菜真的很好吃。", vi: "Món này thật sự rất ngon.", pause: 2500 }
            ],
            trap: {
              name: "Đặt 真的 ra sau tính từ hoặc động từ theo kiểu tiếng Việt ('ngon thật sự')",
              situation: "Tiếng Việt hay nói 'Món này ngon thật sự!' hoặc 'Tôi không biết thật mà!'.",
              explanation: "Trong tiếng Trung, khi làm phó từ nhấn mạnh, 真的 bắt buộc phải đứng TRƯỚC tính từ hoặc động từ.",
              wrong: "这个菜好吃真的。",
              right: "这个菜真的很好吃。 (Món này thật sự rất ngon).",
              tip: "Luôn đặt 真的 ở phía trước tính từ/động từ cần nhấn mạnh.",
              audio: [
                { lang: "vi-VN", text: "Bẫy trật tự từ: Tiếng Việt hay cảm thán là Ngon thật sự, nhưng tiếng Trung phải đặt chữ Chân Đích lên trước tính từ. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "这个菜好吃真的。", pause: 500 },
                { lang: "vi-VN", text: "Câu sửa đúng phải là:" },
                { lang: "zh-CN", text: "这个菜真的很好吃。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh một ngân cao, chữ sau thanh nhẹ lướt nhanh:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh một, chữ sau thanh nhẹ. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "真的", pause: 1500 },
                { lang: "zh-CN", text: "我真的不知道。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 真 có bộ Thập (十) ở trên, bộ Mục (目 - con mắt nhìn thẳng sự thật) ở giữa và hai chân đỡ ở dưới.",
              audio: [
                { lang: "vi-VN", text: "Chữ Chân có bộ Mục ở giữa nghĩa là tận mắt nhìn thấy sự thật, ghép với trợ từ Đích." }
              ]
            },
            summary: "Khung nên nhớ: 真的很好吃 (Thật sự rất ngon), 我真的不知道 (Tôi thật sự không biết)."
          },
          {
            id: "G04-W20", index: 20, hanzi: "有名", pinyin: "yǒu míng (thanh 3 - thanh 2)", coreMeaning: "có tiếng, nổi tiếng",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi đọc là" },
              { lang: "zh-CN", text: "有名", pause: 400 },
              { lang: "vi-VN", text: "thanh ba và thanh hai. Nghĩa là: có tiếng, nổi tiếng." }
            ],
            meaning: {
              situation: "Giới thiệu đặc sản quê hương, một địa danh hoặc một người nổi tiếng.",
              detail: "Chữ 有 là có, chữ 名 là tên tuổi. Từ loại: Tính từ.",
              keyPoint: "Khi muốn nói ai đó hoặc nơi nào đó được nhiều người biết đến, dùng tính từ này.",
              audio: [
                { lang: "vi-VN", text: "Chữ Hữu là có, chữ Danh là tên tuổi. Từ này là một tính từ, dùng khi giới thiệu món ăn, địa điểm hoặc người nổi tiếng." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Chủ ngữ + Phó từ mức độ + 有名",
                pattern: "Chủ ngữ + 很 / 非常 / 真的 + 有名",
                note: "Vì là tính từ nên trong câu trần thuật thường đi kèm 很 ở phía trước. Ví dụ: 这家饭馆很有名 (Quán ăn này rất nổi tiếng).",
                audio: [
                  { lang: "vi-VN", text: "Từ này là một tính từ. Khi nói, bạn đừng quên thêm chữ Khẩn ở phía trước nhé:" },
                  { lang: "zh-CN", text: "很有名", pause: 500 },
                  { lang: "vi-VN", text: "nghĩa là rất nổi tiếng." }
                ]
              }
            ],
            examples: [
              { zh: "这家饭馆很有名。", vi: "Quán ăn này rất nổi tiếng.", pause: 2500 },
              { zh: "他的名字很有名。", vi: "Tên của anh ấy rất nổi tiếng.", pause: 2000 }
            ],
            trap: {
              name: "Dùng 是 (là) thay cho 很 (rất) trước tính từ 有名",
              situation: "Người học dịch theo kiểu tiếng Việt/tiếng Anh: 'Quán này là nổi tiếng'.",
              explanation: "Trong tiếng Trung, tính từ làm vị ngữ KHÔNG nối với chủ ngữ bằng động từ 是, mà bắt buộc dùng phó từ chỉ mức độ (很 / 非常).",
              wrong: "这家饭馆是有名。",
              right: "这家饭馆很有名。 (Quán ăn này rất nổi tiếng).",
              tip: "Với tính từ: Bỏ 是, thêm 很.",
              audio: [
                { lang: "vi-VN", text: "Đừng mắc bẫy khi nói là Quán này LÀ nổi tiếng. Trong tiếng Trung, tính từ không đi trực tiếp với chữ Là. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "这家饭馆是有名。", pause: 500 },
                { lang: "vi-VN", text: "Chữ Thị ở đây là sai ngữ pháp. Câu đúng phải dùng chữ Khẩn:" },
                { lang: "zh-CN", text: "这家饭馆很有名。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh ba trầm xuống, chữ sau thanh hai vút lên:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh ba, chữ sau thanh hai. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "有名", pause: 1500 },
                { lang: "zh-CN", text: "很有名", pause: 1500 },
                { lang: "zh-CN", text: "这家饭馆很有名。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 有 (có) ghép với chữ 名 (gồm bộ Tịch 夕 - buổi tối và bộ Khẩu 口 - cái miệng gọi tên nhau trong đêm tối).",
              audio: [
                { lang: "vi-VN", text: "Chữ Danh gồm bộ Tịch là buổi tối và bộ Khẩu là cái miệng: trời tối không nhìn thấy mặt nên phải dùng miệng gọi tên. Có tên tuổi chính là nổi tiếng." }
              ]
            },
            summary: "Khung nên nhớ: 很有名 (Rất nổi tiếng). Tuyệt đối không nói 是有名."
          },
          {
            id: "G04-W21", index: 21, hanzi: "大学", pinyin: "dà xué (thanh 4 - thanh 2)", coreMeaning: "đại học, trường đại học",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi mốt đọc là" },
              { lang: "zh-CN", text: "大学", pause: 400 },
              { lang: "vi-VN", text: "thanh bốn và thanh hai. Nghĩa là: đại học." }
            ],
            meaning: {
              situation: "Nói về cấp học đại học, ngôi trường đại học hoặc sinh viên đại học.",
              detail: "Danh từ chỉ trường đại học hoặc bậc giáo dục đại học.",
              keyPoint: "Khi nhắc đến trường đại học hoặc việc học đại học, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Từ này âm Hán Việt là Đại Học, dùng để chỉ ngôi trường đại học hoặc bậc học đại học." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Các cụm từ cố định cần thuộc lòng",
                pattern: "上大学 (Học đại học)  |  大学生 (Sinh viên)  |  在大学读书",
                note: "Để nói hành động đi học đại học, dùng động từ 上: 上大学. Hoặc kết hợp với từ 读书: 姐姐在大学读书 (Chị gái đang học đại học).",
                audio: [
                  { lang: "vi-VN", text: "Đại Học. Cách dùng rất giống tiếng Việt. Nhưng để nói hành động đi học đại học, người Trung Quốc dùng chữ Thượng:" },
                  { lang: "zh-CN", text: "上大学", pause: 500 },
                  { lang: "vi-VN", text: "Hoặc dùng từ Độc Thư chúng ta học ở bài trước:" },
                  { lang: "zh-CN", text: "在大学读书", pause: 500 }
                ]
              }
            ],
            examples: [
              { zh: "他是一名大学生。", vi: "Anh ấy là một sinh viên đại học.", pause: 2000 },
              { zh: "姐姐在大学读书。", vi: "Chị gái đang học đại học.", pause: 2000 }
            ],
            trap: {
              name: "Nói 'học đại học' bằng 学大学",
              situation: "Muốn nói 'Tôi học đại học', người học thấy chữ 'học' là 学 nên ghép thành 学大学.",
              explanation: "学 + Môn học/Kỹ năng (như 学汉语 - học tiếng Trung). Còn 'đi học ở bậc đại học' phải dùng 上大学 hoặc 在大学读书.",
              wrong: "我学大学。",
              right: "我上大学。 / 我在大学读书。 (Tôi học đại học).",
              tip: "Học môn gì -> 学 + Môn đó. Đi học cấp trường nào -> 上 + Trường đó (上大学).",
              audio: [
                { lang: "vi-VN", text: "Bẫy ghép từ kiểu Việt Nam: Khi nói Tôi học đại học, đừng ghép hai chữ Học với nhau. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我学大学。", pause: 500 },
                { lang: "vi-VN", text: "Để nói đi học ở bậc đại học, bạn phải dùng chữ Thượng hoặc cụm Độc Thư. Câu đúng là:" },
                { lang: "zh-CN", text: "我上大学。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh bốn dập mạnh, chữ sau thanh hai vút lên:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh bốn, chữ sau thanh hai. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "大学", pause: 1500 },
                { lang: "zh-CN", text: "上大学", pause: 1500 },
                { lang: "zh-CN", text: "大学生", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 大 là hình người dang rộng hai tay hai chân (to lớn). Chữ 学 có ba chấm nhỏ ở trên, mái nhà và bộ Tử (子 - đứa trẻ đang học dưới mái trường).",
              audio: [
                { lang: "vi-VN", text: "Chữ Đại là to lớn, chữ Học có hình đứa trẻ ở dưới mái trường. Ghép lại là trường Đại Học." }
              ]
            },
            summary: "Khung nên nhớ: 上大学 (Học đại học), 大学生 (Sinh viên đại học), 在大学读书."
          },
          {
            id: "G04-W22", index: 22, hanzi: "国家", pinyin: "guó jiā (thanh 2 - thanh 1)", coreMeaning: "quốc gia, đất nước",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi hai đọc là" },
              { lang: "zh-CN", text: "国家", pause: 400 },
              { lang: "vi-VN", text: "thanh hai và thanh một. Nghĩa là: quốc gia, đất nước." }
            ],
            meaning: {
              situation: "Trò chuyện về các đất nước trên thế giới, du lịch quốc tế hoặc giới thiệu tổ quốc.",
              detail: "Chữ 国 là nước, chữ 家 là nhà. Ghép lại là đất nước, quốc gia.",
              keyPoint: "Khi muốn nói 'một đất nước', 'nhiều quốc gia', bạn dùng danh từ này.",
              audio: [
                { lang: "vi-VN", text: "Quốc Gia. Chữ Quốc là nước, chữ Gia là nhà. Trong tiếng Trung cũng như tiếng Việt, nước và nhà ghép lại thành đất nước, quốc gia." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Kết hợp với lượng từ 个 và cụm động từ du lịch",
                pattern: "一个国家  |  很多国家  |  哪个国家",
                note: "Lượng từ đi kèm là 个: 一个国家 (một quốc gia). Ví dụ: 去过很多国家 (Đã từng đi qua rất nhiều quốc gia).",
                audio: [
                  { lang: "vi-VN", text: "Lượng từ của nó là chữ Cá. Một quốc gia là Nhất Cá Quốc Gia:" },
                  { lang: "zh-CN", text: "一个国家", pause: 500 },
                  { lang: "vi-VN", text: "Đã đi qua rất nhiều quốc gia là:" },
                  { lang: "zh-CN", text: "去过很多国家", pause: 500 }
                ]
              }
            ],
            examples: [
              { zh: "你想去哪个国家旅游？", vi: "Bạn muốn đi đất nước nào du lịch?", pause: 2500 },
              { zh: "我去过很多国家。", vi: "Tôi đã từng đi qua rất nhiều quốc gia.", pause: 2000 }
            ],
            trap: {
              name: "Chỉ dùng chữ 国 đứng một mình khi làm danh từ chung",
              situation: "Muốn nói 'Tôi thích đất nước này'.",
              explanation: "Chữ 国 chỉ đứng một mình khi ghép tên riêng (中国, 越南, 美国) hoặc cụm cố định (出国 - xuất ngoại, 回国 - về nước). Còn khi nói danh từ chung 'đất nước này / quốc gia nào', bắt buộc phải dùng đủ 2 chữ 国家.",
              wrong: "我喜欢这个国。",
              right: "我喜欢这个国家。 (Tôi thích đất nước này).",
              tip: "Đi sau 这个 / 哪个 / 很多 -> Bắt buộc dùng đủ 2 chữ 国家.",
              audio: [
                { lang: "vi-VN", text: "Lưu ý bẫy dùng từ đơn: Khi đi sau lượng từ như Đất nước này hay Đất nước nào, bạn không được nói cụt lủn một chữ Quốc. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我喜欢这个国。", pause: 500 },
                { lang: "vi-VN", text: "Bạn bắt buộc phải dùng từ đôi đầy đủ là Quốc Gia:" },
                { lang: "zh-CN", text: "我喜欢这个国家。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh hai vút lên, chữ sau thanh một giữ cao đều:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh hai, chữ sau thanh một. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "国家", pause: 1500 },
                { lang: "zh-CN", text: "一个国家", pause: 1500 },
                { lang: "zh-CN", text: "你想去哪个国家旅游？", pause: 2500 }
              ]
            },
            write: {
              desc: "Chữ 国 có bộ Vi (囗 - đường biên giới bao quanh) và chữ Ngọc (玉 - quốc bảo bên trong). Chữ 家 có bộ Miên (宀 - mái nhà) ở trên.",
              audio: [
                { lang: "vi-VN", text: "Chữ Quốc là viên ngọc quý nằm trong đường biên giới bảo vệ, ghép với chữ Gia là mái nhà." }
              ]
            },
            summary: "Khung nên nhớ: 一个国家 (Một quốc gia), 哪个国家 (Quốc gia nào)."
          },
          {
            id: "G04-W23", index: 23, hanzi: "书店", pinyin: "shū diàn (thanh 1 - thanh 4)", coreMeaning: "hiệu sách, nhà sách",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi ba đọc là" },
              { lang: "zh-CN", text: "书店", pause: 400 },
              { lang: "vi-VN", text: "thanh một và thanh bốn. Nghĩa là: hiệu sách, nhà sách." }
            ],
            meaning: {
              situation: "Nói về địa điểm đi mua sách vở, tài liệu học tập.",
              detail: "Chữ 书 là sách, chữ 店 là cửa tiệm. Ghép lại là cửa tiệm bán sách (hiệu sách / nhà sách). Phân biệt với 图书馆 (thư viện - nơi mượn và đọc sách).",
              keyPoint: "Khi muốn nói đi hiệu sách mua sách, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Thư Điếm. Chữ Điếm nghĩa là cửa tiệm. Cửa tiệm bán sách chính là hiệu sách hay nhà sách." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Khung câu di chuyển & Vị trí",
                pattern: "去书店买书  |  书店在 + Địa điểm",
                note: "Ví dụ: 去书店买书 (Đi hiệu sách mua sách), 书店在大学北边 (Hiệu sách ở phía bắc trường đại học).",
                audio: [
                  { lang: "vi-VN", text: "Bạn hãy nhớ ngay cụm từ rất thuận miệng là Đi hiệu sách mua sách:" },
                  { lang: "zh-CN", text: "去书店买书", pause: 500 },
                  { lang: "vi-VN", text: "Hoặc miêu tả vị trí: Hiệu sách ở phía bắc trường đại học:" },
                  { lang: "zh-CN", text: "书店在大学北边。", pause: 500 }
                ]
              }
            ],
            examples: [
              { zh: "书店在大学北边。", vi: "Hiệu sách ở phía bắc trường đại học. (Kết hợp từ 北边 và 大学).", pause: 2500 },
              { zh: "我去书店买书。", vi: "Tôi đi hiệu sách mua sách.", pause: 2000 }
            ],
            trap: {
              name: "Ghép ngược trật tự 'Tiệm + Sách' (店书) theo tiếng Việt",
              situation: "Tiếng Việt nói 'Hiệu sách / Tiệm sách', người học dễ đặt chữ 店 lên trước chữ 书.",
              explanation: "Trong tiếng Trung, mặt hàng kinh doanh (书 - sách) phải đứng trước làm định ngữ, còn chữ 店 (cửa tiệm) luôn đứng cuối.",
              wrong: "我去店书。",
              right: "我去书店。 (Tôi đi hiệu sách).",
              tip: "Bán cái gì thì đặt cái đó lên trước chữ 店: 书店 (tiệm sách), 饭店 (tiệm cơm).",
              audio: [
                { lang: "vi-VN", text: "Bẫy dịch ngược trật tự: Tiếng Việt nói Tiệm Sách, nhưng tiếng Trung phải nói Sách trước, Tiệm sau. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "我去店书。", pause: 500 },
                { lang: "vi-VN", text: "Câu sửa đúng phải là:" },
                { lang: "zh-CN", text: "我去书店。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh một ngân ngang, chữ sau thanh bốn dứt khoát:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh một, chữ sau thanh bốn. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "书店", pause: 1500 },
                { lang: "zh-CN", text: "去书店买书", pause: 1500 },
                { lang: "zh-CN", text: "书店在大学北边。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 书 (quyển sách) ghép với chữ 店 (có bộ Nghiễm 广 - mái hiên cửa hàng bao phía trên chữ Chiêm 占).",
              audio: [
                { lang: "vi-VN", text: "Chữ Điếm có bộ Nghiễm giống như mái hiên rộng của cửa hàng, bên trong bày bán những cuốn sách." }
              ]
            },
            summary: "Khung nên nhớ: 去书店买书 (Đi hiệu sách mua sách), 书店在大学北边."
          },
          {
            id: "G04-W24", index: 24, hanzi: "好看", pinyin: "hǎo kàn (thanh 3 - thanh 4)", coreMeaning: "đẹp (nhìn đẹp), hoặc hay (với sách, phim)",
            introAudio: [
              { lang: "vi-VN", text: "Từ số hai mươi bốn, từ cuối cùng, đọc là" },
              { lang: "zh-CN", text: "好看", pause: 400 },
              { lang: "vi-VN", text: "thanh ba và thanh bốn. Nghĩa là: đẹp khi nhìn, hoặc hay đối với sách, phim." }
            ],
            meaning: {
              situation: "Khen một bộ quần áo đẹp, một người ưa nhìn, hoặc khen một bộ phim/cuốn sách rất hay.",
              detail: "Có hai nghĩa chính tùy đối tượng: 1) Với người/đồ vật/cảnh vật -> Nhìn thuận mắt, đẹp. 2) Với sách/phim/tiết mục biểu diễn -> Xem rất hay, hấp dẫn, lôi cuốn.",
              keyPoint: "Khi muốn khen cái gì nhìn đẹp mắt HOẶC khen phim hay, sách hay, bạn dùng từ này.",
              audio: [
                { lang: "vi-VN", text: "Hảo Khán có nghĩa đen là Dễ nhìn. Dùng cho người hay quần áo thì là đẹp, dùng cho phim ảnh hay sách truyện thì có nghĩa là rất hay, rất cuốn hút." }
              ]
            },
            structures: [
              {
                title: "Cách 1: Khen sách/phim hay hoặc quần áo/dáng điệu đẹp",
                pattern: "这本书很好看 (Sách rất hay)  |  衣服很好看 (Quần áo rất đẹp)",
                note: "Đi kèm phó từ chỉ mức độ 很 hoặc 真的很好看.",
                audio: [
                  { lang: "vi-VN", text: "Chúng ta có hai ví dụ tiêu biểu cho hai nét nghĩa:" },
                  { lang: "zh-CN", text: "这本书很好看。", pause: 500 },
                  { lang: "vi-VN", text: "nghĩa là cuốn sách này rất hay. Và:" },
                  { lang: "zh-CN", text: "衣服很好看。", pause: 500 },
                  { lang: "vi-VN", text: "nghĩa là quần áo rất đẹp." }
                ]
              }
            ],
            examples: [
              { zh: "这个电影真的很好看。", vi: "Bộ phim này thật sự rất hay. (Kết hợp từ 真的).", pause: 2500 },
              { zh: "这本书很好看。", vi: "Cuốn sách này rất hay.", pause: 2000 },
              { zh: "衣服很好看。", vi: "Quần áo rất đẹp.", pause: 2000 }
            ],
            trap: {
              name: "Nhầm lẫn 好看 và 漂亮 khi khen sách hoặc phim",
              situation: "Bạn muốn khen một bộ phim hay hoặc cuốn sách có nội dung hấp dẫn.",
              explanation: "漂亮 (piào liang) CHỈ dùng để khen cái ĐẸP BỀ NGOÀI (cô gái đẹp, quần áo đẹp), tuyệt đối không dùng cho nội dung sách/phim. Còn 好看 dùng được cho cả bề ngoài (đẹp) VÀ nội dung (hay).",
              wrong: "这个电影很漂亮。 / 这本书很漂亮。 (Sai ý nội dung hay).",
              right: "这个电影很好看。 / 这本书很好看。 (Bộ phim/cuốn sách này rất hay).",
              tip: "Khen phim hay, sách hay -> Chỉ được dùng 好看, cấm dùng 漂亮.",
              audio: [
                { lang: "vi-VN", text: "Một bẫy rất dễ mắc là bạn khen phim hay, sách hay nhưng lại dùng chữ Phiêu Lượng. Đây là câu sai để phân tích:" },
                { lang: "zh-CN", text: "这本书很漂亮。", pause: 500 },
                { lang: "vi-VN", text: "Chữ Phiêu Lượng chỉ dùng cho vẻ đẹp ngoại hình. Muốn khen nội dung phim hay, sách hay, bạn chỉ được phép dùng Hảo Khán. Câu đúng là:" },
                { lang: "zh-CN", text: "这本书很好看。", pause: 500 }
              ]
            },
            pron: {
              guide: "Chữ đầu thanh ba trầm xuống, chữ sau thanh bốn dập mạnh:",
              audio: [
                { lang: "vi-VN", text: "Chữ đầu thanh ba, chữ sau thanh bốn. Hãy nghe và nhắc lại:" },
                { lang: "zh-CN", text: "好看", pause: 1500 },
                { lang: "zh-CN", text: "很好看", pause: 1500 },
                { lang: "zh-CN", text: "这个电影真的很好看。", pause: 2000 }
              ]
            },
            write: {
              desc: "Chữ 好 (tốt/đẹp) ghép với chữ 看 (trên là bộ Thủ 手 - bàn tay che lên trên bộ Mục 目 - con mắt để nhìn).",
              audio: [
                { lang: "vi-VN", text: "Chữ Hảo là tốt, chữ Khán là đưa bàn tay lên che mắt để nhìn ngắm. Nhìn thấy thích mắt chính là đẹp và hay." }
              ]
            },
            summary: "Khung nên nhớ: 电影很好看 (Phim rất hay), 这本书很好看 (Cuốn sách này rất hay)."
          }
        ],
        exercises: [
          {
            id: "G04-EXER01", type: "Nhớ nghĩa và dùng từ",
            prompt: "Chọn từ đúng điền vào câu: '昨天我 ___ 了一个礼物。' (Hôm qua tôi nhận được một món quà).",
            options: ["A. 收到", "B. 得到"],
            correct: 0,
            questionAudio: [
              { lang: "vi-VN", text: "Để nói hôm qua tôi nhận được một món quà, bạn dùng Thu Đáo hay Đắc Đáo? Món quà là đồ vật cầm nắm được nhé." }
            ],
            reasonRight: "Đáp án A (收到) chính xác! Nhận món quà vật chất cụ thể cầm nắm được phải dùng 收到.",
            reasonWrong: "Cần sửa: 得到 dùng cho thứ trừu tượng (sự giúp đỡ, cơ hội). Quà tặng cụ thể phải dùng 收到.",
            explainAudio: [
              { lang: "vi-VN", text: "Đây là câu sai để phân tích:" },
              { lang: "zh-CN", text: "昨天我得到了一个礼物。", pause: 500 },
              { lang: "vi-VN", text: "Đáp án đúng phải là A, dùng chữ Thu Đáo cho món quà cụ thể:" },
              { lang: "zh-CN", text: "昨天我收到了一个礼物。", pause: 500 }
            ]
          },
          {
            id: "G04-EXER02", type: "Vị trí, kết hợp và bẫy",
            prompt: "Trong hai câu dưới đây, câu nào SAI ngữ pháp / sai cách dùng từ?",
            options: ["A. 这本书很好看。", "B. 这个电影很漂亮。"],
            correct: 1,
            questionAudio: [
              { lang: "vi-VN", text: "Câu nào dùng sai tính từ? A: Cuốn sách này rất Hảo Khán. B: Bộ phim này rất Phiêu Lượng." }
            ],
            reasonRight: "Đáp án B chính xác là câu sai! Phim ảnh không dùng 漂亮, chỉ dùng 好看 để khen phim hay.",
            reasonWrong: "Cần sửa: Câu A đúng ngữ pháp, còn câu B mới là câu sai vì bộ phim không thể dùng 漂亮.",
            explainAudio: [
              { lang: "vi-VN", text: "Câu sai cần tìm chính là đáp án B. Đây là câu sai để phân tích:" },
              { lang: "zh-CN", text: "这个电影很漂亮。", pause: 500 },
              { lang: "vi-VN", text: "Vì khen bộ phim hay bắt buộc phải dùng Hảo Khán:" },
              { lang: "zh-CN", text: "这个电影很好看。", pause: 500 }
            ]
          },
          {
            id: "G04-EXER03", type: "Nghe hiểu (Ẩn bản chép lời)",
            isListening: true,
            prompt: "Nghe và cho biết người em trai đang làm hai việc gì cùng lúc?",
            options: ["A. Nghe nhạc và đọc sách.", "B. Ăn cơm và xem tivi."],
            correct: 0,
            transcript: "我弟弟一边听音乐，一边看书。 (Em trai tôi vừa nghe nhạc, vừa đọc sách).",
            questionAudio: [
              { lang: "vi-VN", text: "Mời bạn nghe câu sau:" },
              { lang: "zh-CN", text: "我弟弟一边听音乐，一边看书。", pause: 800 },
              { lang: "vi-VN", text: "Người em trai đang làm hai việc gì?" }
            ],
            reasonRight: "Đáp án A chính xác! 一边听音乐，一边看书 nghĩa là vừa nghe nhạc, vừa đọc sách.",
            reasonWrong: "Cần sửa: Trong câu có từ 听音乐 (nghe nhạc) và 看书 (đọc sách).",
            explainAudio: [
              { lang: "vi-VN", text: "Đáp án đúng là A. Bản chép lời câu vừa nghe là:" },
              { lang: "zh-CN", text: "我弟弟一边听音乐，一边看书。", pause: 500 },
              { lang: "vi-VN", text: "Nghĩa là: Em trai tôi vừa nghe nhạc, vừa đọc sách." }
            ]
          }
        ],
        selfUse: {
          id: "G04-SELF01",
          situation: "Tình huống 1: Giới thiệu với bạn bè: 'Hiệu sách của trường đại học rất nổi tiếng.' Bạn sẽ nói thế nào bằng tiếng Trung?",
          hint1: "'Hiệu sách của trường đại học' là chủ ngữ (Đại học + 的 + Hiệu sách). Sau đó thêm 'rất nổi tiếng'.",
          hint2: "Khung câu: [Đại học] + 的 + [Hiệu sách] + 很 + [Nổi tiếng]。",
          modelAnswer: "大学的书店很有名。",
          modelExplain: "Kết hợp 3 từ mục tiêu của Nhóm 4: 大学 (đại học), 书店 (hiệu sách) và 很有名 (rất nổi tiếng - nhớ dùng 很 chứ không dùng 是).",
          modelAudio: [
            { lang: "vi-VN", text: "Câu trả lời mẫu là:" },
            { lang: "zh-CN", text: "大学的书店很有名。", pause: 500 },
            { lang: "vi-VN", text: "Bạn có nhớ dùng chữ Khẩn trước tính từ Hữu Danh không?" }
          ]
        },
        reviews: [
          { day: 1, type: "Nhớ nghĩa cơ bản", q: "Dịch cụm 'Vừa ăn vừa nói' sang tiếng Trung.", answer: "一边吃一边说", explain: "Dùng cặp cấu trúc sóng đôi 一边... 一边...", audio: [{ lang: "vi-VN", text: "Đáp án là:" }, { lang: "zh-CN", text: "一边吃一边说" }] },
          { day: 3, type: "Vị trí & Bẫy", q: "Khác biệt khi dùng 好看 và 漂亮 cho một cuốn sách là gì?", answer: "漂亮 là bìa sách đẹp bề ngoài; 好看 là nội dung sách đọc hay.", explain: "Khen sách hay, phim hay bắt buộc dùng 好看.", audio: [{ lang: "vi-VN", text: "Phiêu Lượng chỉ khen bìa sách đẹp bề ngoài, còn Hảo Khán khen nội dung cuốn sách đọc rất hay." }] },
          { day: 7, type: "Nghe hiểu phản xạ", q: "Bấm nghe âm thanh và cho biết câu này nghĩa là gì?", listenAudio: [{ lang: "zh-CN", text: "这家书店真的很有名。" }], answer: "Hiệu sách này thật sự rất nổi tiếng.", explain: "Bản chép lời: 这家书店真的很有名。 (Kết hợp 书店, 真的 và 有名).", audio: [{ lang: "zh-CN", text: "这家书店真的很有名。", pause: 500 }, { lang: "vi-VN", text: "Nghĩa là: Hiệu sách này thật sự rất nổi tiếng." }] }
        ]
      }
    ]
  }
  // === SAU NÀY CÓ BÀI 2, BẠN CHỈ CẦN THÊM DẤU PHẨY (,) VÀ DÁN BÀI 2 VÀO NGAY DƯỚI DÒNG NÀY ===
];
