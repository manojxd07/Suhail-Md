const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "917005439105" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_43_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2LFxuICAgICAgICA2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZWNTRHRXp4VHIzQktuYmxIVFVENDRMWlR6N1pFUGFOS1RYZUZLNFNyQnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3MDA1NDM5MTA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNkRDRTlGNUM4MzY5OEQwQjgyQzcwQkZENDg5QTk4M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxOTQxOTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSkktcUdnLVVUQ3F0dHlSb3JDY29Vd1wiLFxuICBcInBob25lSWRcIjogXCJkNDA2ODFmMC05ZDIyLTQ2MmYtYWM1My01ZmMxYTk5YzQ0YTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTM2LFxuICAgICAgMTQzLFxuICAgICAgMTEzLFxuICAgICAgMTYzLFxuICAgICAgNSxcbiAgICAgIDczLFxuICAgICAgMTQ2LFxuICAgICAgMzgsXG4gICAgICAyMTAsXG4gICAgICAzNCxcbiAgICAgIDEyOSxcbiAgICAgIDgsXG4gICAgICAyMjcsXG4gICAgICAxMzIsXG4gICAgICAxNDIsXG4gICAgICAyMDAsXG4gICAgICAxNzAsXG4gICAgICAyMTMsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTMzLFxuICAgICAgMTk1LFxuICAgICAgNTEsXG4gICAgICAyOCxcbiAgICAgIDE2MyxcbiAgICAgIDYyLFxuICAgICAgMTExLFxuICAgICAgMTcwLFxuICAgICAgODcsXG4gICAgICAxMjMsXG4gICAgICAxOTcsXG4gICAgICAxMjIsXG4gICAgICAxNzYsXG4gICAgICAxNDgsXG4gICAgICAzNixcbiAgICAgIDExOCxcbiAgICAgIDIwLFxuICAgICAgMjQxLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWk1RNUdMOTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzAwNTQzOTEwNToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc0NDE0NjYyNTEyNzk2OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovVm9LSUJFSVNwb0xRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYi9KRDQrVlRRR0NlYmVBNjZESlNSUnFuZk1LNXNKN0wvbU0ySE5WT1ZqST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWaE5HaGx5TkxYeG5CYmdibWtnQkFyQXM5RUVYaVhhSDVpVS9neklCTlYrNWh2b3lsNEpodDdQRitwbTdZQjF5UGhDZmlQdG1teXRLa3FxcE96UGlBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUcHNLMm1sM2xDUGF3Wjc2SW1qZ0ZhcmtaOEhQeEwxYnRqQ01heFZMNjRGYXBUNmk2Ni94ZGRwZFdJTjFWbEh3RUZKTDZYV3FrcFZIODNadWFPaUtEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTcwMDU0MzkxMDU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxOTQxODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMWkdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxaRy5qc29uIjogIntcImtleURhdGFcIjpcInNiK1hVZGR6UmREWXd6MzNMcjRDVWhKbDVmOGg1RjRJQlcxTURxekpkTTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQwMjczODIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀɴᴏᴊ-xᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴍᴀɴᴏᴊ-xᴅ",
  ownername:process.env.OWNER_NAME|| "ᴍᴀɴᴏᴊ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
