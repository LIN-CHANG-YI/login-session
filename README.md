# Account Login(session)
使用session實現保持客戶端狀態的登入功能，此專案設定保持 30 秒後自動清除session
# 基本功能
+ 輸入正確帳號密碼組合即可登入
+ 輸入錯誤帳號密碼組合無法登入，提示錯誤訊息
+ 登入後就不需再次登入，直到過期時間到(30秒)自動登出帳號，重新整理頁面會顯示User has logged out
+ 可以手動登出帳號
# 專案畫面
![](https://upload.cc/i1/2020/07/29/JEFODt.png)
___
![](https://upload.cc/i1/2020/07/30/lo1LmD.png)
___
![](https://upload.cc/i1/2020/07/30/4Xkc2T.png)
# 安裝方式
1.打開 terminal 將專案 clone 到本地電腦
```
git clone https://github.com/LIN-CHANG-YI/login-session.git
```
2.進入專案資料夾
```
cd login-session
```
3.安裝npm
```
npm install
```
4.安裝nodemon
```
npm install nodemon
```
5.匯入種子資料
```
npm run seed
```
6.啟動程式
```
npm run start
或
npm run dev
```
6.成功執行
```
在 terminal 可以看到 Express is listen on port 3000.
```
7.開啟瀏覽器
```
網址列輸入localhost:3000
```
# 測試帳號密碼
| Email | Password |
| ------ | ----------- |
| tony@stark.com | iamironman |
| captain@hotmail.com | icandothisallday |
| peter@parker.com | enajyram |
| natasha@gamil.com | *parol#@$! |
| nick@shield.com | password |
# 開發環境
+ Node.js: v10.15.0
+ Express: v4.17.1
+ Express-Handlebars: v5.1.0
# 專案開發人員
[LIN-CHANG-YI](https://github.com/LIN-CHANG-YI)
