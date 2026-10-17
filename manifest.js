/**
 * DANH MỤC BÀI HỌC (MANIFEST)
 * Mỗi bài 1 dòng. Thêm bài mới = thêm 1 dòng vào đây + đăng tệp bài vào thư mục data/.
 *
 *  id     : duy nhất, dạng "hsk1-bai-17". PHẢI trùng LESSON_ID trong tệp bài.
 *  level  : "HSK1" ... "HSK6" (tự tạo thẻ cấp độ mới khi bạn thêm).
 *  number : số bài, dùng để sắp xếp.
 *  title  : tên hiển thị trong Thư viện.
 *  words  : số từ của bài (để hiện tiến độ trước khi tải bài).
 *  file   : đường dẫn tệp bài, tính từ index.html.
 *  v      : (tuỳ chọn) tăng số này khi sửa nội dung bài để trình duyệt tải bản mới.
 */
window.HSK_MANIFEST = [
  { id: "hsk1-bai-16", level: "HSK1", number: 16, title: "Bài 16: Giao Tiếp Cơ Bản & Định Hướng Không Gian", words: 24, file: "data/hsk1/bai-16.js", v: 1 },

  // { id: "hsk1-bai-17", level: "HSK1", number: 17, title: "Bài 17: ...", words: 24, file: "data/hsk1/bai-17.js", v: 1 },
  // { id: "hsk2-bai-1",  level: "HSK2", number: 1,  title: "Bài 1: ...",  words: 24, file: "data/hsk2/bai-1.js",  v: 1 },
];
