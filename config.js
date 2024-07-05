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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_05_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICA5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDksXG4gICAgICAgIDgyLFxuICAgICAgICA3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxVEx0eU1CcUhXcFpSeThhWjQxREhKWW5Fcm5DaXJMZGNmNTEwTkFabEIwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzAwNTQzOTEwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjY0MjI4NjE5M0JEQzQ4RUVENUVDMEFFRTEyQkJDREZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTUyMjk1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3MDA1NDM5MTA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRTdFN0RFRjJDQUMzNjVCNjg1NDc5M0Y4ODYzMUFDNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxNTIyOTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTcwMDU0MzkxMDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI2MDYxQURCQjk1REZGODdGNkM3OEUxMTA3RUJGNkQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE1MjI5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzAwNTQzOTEwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjNBOUIwNkRDQzg5QTU0RkI4MEJFNDc4QzM1MzFGRTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTUyMjk4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNfS3dscXNuVFpxdFljekdGc1hLTndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjc1YmNiOTYtMWQ1Yi00OWZlLWIxYmMtMjRhN2ZhZmYxOGVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgODYsXG4gICAgICAxNDAsXG4gICAgICAxNDMsXG4gICAgICAxMDcsXG4gICAgICAxNzQsXG4gICAgICAyNDEsXG4gICAgICA1NyxcbiAgICAgIDIyNCxcbiAgICAgIDE4MixcbiAgICAgIDIwOCxcbiAgICAgIDExOSxcbiAgICAgIDI3LFxuICAgICAgMjUsXG4gICAgICAxNzksXG4gICAgICAxOTYsXG4gICAgICAyMzYsXG4gICAgICAxOCxcbiAgICAgIDAsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMTUxLFxuICAgICAgMSxcbiAgICAgIDE2OCxcbiAgICAgIDYzLFxuICAgICAgMjMzLFxuICAgICAgMjUsXG4gICAgICAyMzEsXG4gICAgICAxMzEsXG4gICAgICA0OSxcbiAgICAgIDE5NCxcbiAgICAgIDEsXG4gICAgICAxNSxcbiAgICAgIDE3OCxcbiAgICAgIDEzNyxcbiAgICAgIDM3LFxuICAgICAgMTU1LFxuICAgICAgMTM2LFxuICAgICAgMTYyLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRXTjY4NERWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTcwMDU0MzkxMDU6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NDQxNDY2MjUxMjc5NjoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLhtI3htIDJtOG0j+G0ii144bSFXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2laMXIwR0VPSGhuYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJScGNFVGhNVVh5OURYOFl1c3NDWG1FcTF5N0tLNC9hQThkemljVGMxSEQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRiUzgvTWhhVnRIVEprTHBiU2JyNW1uT3BkcHFpdjlVczYyOUxhT1Z2MDhhQUZiZDUrei9XaHczbkc0SEJjeHpVWTlNWVBnK0E4bzBYZE1mMWx6TkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlwRXpiY0p3aXdSRTFuRVFDQlk3Vk5aYmQ1R2JmSHVDaUpGV1R0OGFwek9IMG9oMlNQZ0lvSSsrUXF3MTlvMExOU25XcXBLNk9YYWl3bS9iYU5Hd2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzAwNTQzOTEwNToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTUyMjkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEhHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJINWxuNER5eXJsczB5WDQ3Y0tEbHE0c25CM0JsRXpXRHFuaFp0WFJ5UDRvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3Mzk5NTEyNzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE1MjI5NDg5MFwifSIKfQ=="  // PUT your SESSION_ID 


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
