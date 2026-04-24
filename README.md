# React + Redux User Management Project

# Tech Stack
Frontend: React (Vite)
State Management: Redux
Middleware: Redux Thunk (สำหรับ Asynchronous Actions)
Styling: Tailwind CSS
HTTP Client: Axios

# Redux Actions Structure
โปรเจกต์นี้ใช้ Action Creators ในการจัดการ Logic การติดต่อกับ API โดยแบ่งออกเป็น 5 ส่วนหลัก ดังนี้:
1. Action Types
ประกอบด้วยคำสั่งพื้นฐานที่ใช้ในการสื่อสารกับ Reducer:
FETCH_USERS: เรียกดูข้อมูลผู้ใช้ทั้งหมด
FETCH_USER: เรียกดูข้อมูลผู้ใช้รายบุคคล
CREATE_USER: สร้างผู้ใช้ใหม่
EDIT_USER: แก้ไขข้อมูลผู้ใช้
DELETE_USER: ลบข้อมูลผู้ใช้

2. Action Creators Functions
fetchUsers(): ดึงข้อมูลผู้ใช้ทั้งหมดจาก API และส่ง (dispatch) ข้อมูลไปยัง Reducer
fetchUser(id): ดึงข้อมูลผู้ใช้ตาม userId ที่ระบุ เพื่อนำมาใช้ในหน้าแก้ไขหรือดูรายละเอียด
createUser(userData): รับข้อมูลผู้ใช้ใหม่และส่งไปยัง API หากสำเร็จจะอัปเดตข้อมูลผู้ใช้ใหม่เข้าสู่ระบบ
editUser(id, userData): ส่งข้อมูลที่แก้ไขแล้วไปยัง API เพื่ออัปเดตข้อมูลผู้ใช้เดิม
deleteUser(id): ลบผู้ใช้ออกจากระบบผ่าน API โดยจะส่งเพียง userId กลับไปที่ Reducer เพื่อยืนยันการลบ

# Getting Started
1. ติดตั้ง dependencies:
bash
npm install

2. รันโปรเจกต์:
bash
npm run dev

3. ตรวจสอบสไตล์ (Tailwind):
ตรวจสอบให้แน่ใจว่าไฟล์ index.css ได้ทำการนำเข้า Tailwind Directives 