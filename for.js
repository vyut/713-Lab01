const names = ["วีรยุทธ", "เฉลิมศักดิ์", "พัชราพร", "กำชัย", "วิษณู"];

names.forEach((name) => {
  if (name.length > 6) {
    console.log(`สวัสดีคุณ ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
});
