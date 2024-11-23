const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_33_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyLFxuICAgICAgICA4OSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImhGWXFHdkpCMHJ0SFlsUnNsZFVURTA3R3hNVXpwOVpVcUpRTjlObEh1LzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTQwMDExNzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3NzQwQkJGMDY1RUVDNTAyNkRCMTUzRTFDNDZDNzc2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjM4MzIyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU0MDAxMTc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RUQ2NzczNUE0NjZENzY5MTBGOUI4ODE5MDVBQzM1MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzODMyMjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidFR5NElEQmNSX0NGQWotZldZTUlxd1wiLFxuICBcInBob25lSWRcIjogXCI3YjlkZjFjMC02OWMzLTQ0ODEtYWEyMy1kZWE5ZTcyMTAxMjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTQ0LFxuICAgICAgMTUzLFxuICAgICAgMjI3LFxuICAgICAgNjUsXG4gICAgICAyMDAsXG4gICAgICA5MixcbiAgICAgIDEyMyxcbiAgICAgIDI1LFxuICAgICAgOTAsXG4gICAgICA0MCxcbiAgICAgIDMsXG4gICAgICAxNjEsXG4gICAgICAzMixcbiAgICAgIDEyMixcbiAgICAgIDIwMyxcbiAgICAgIDI1MSxcbiAgICAgIDk1LFxuICAgICAgMTcwLFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMixcbiAgICAgIDI0LFxuICAgICAgMTYsXG4gICAgICAyNyxcbiAgICAgIDc4LFxuICAgICAgMTI0LFxuICAgICAgMTQ4LFxuICAgICAgMixcbiAgICAgIDU3LFxuICAgICAgMTM3LFxuICAgICAgMTUwLFxuICAgICAgMjMxLFxuICAgICAgNTksXG4gICAgICA5NyxcbiAgICAgIDExNyxcbiAgICAgIDc0LFxuICAgICAgMjA2LFxuICAgICAgMjEwLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjdaUlFGV01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU0MDAxMTc5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjA0ODA3NzE4NTEzMTo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlITwnZSY8J2UjlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXUitmNEZFUFdqaUxvR0dBb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL0lzSk1FaXRCNndBYXhxMlZ1QUpjTENNckVSblN5RjA4bS9hbTNVM2xWRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1OW1YM1IraU5hRHcrZDhKeDN6eE5uR0k1RkRaQW9xVkhVMHJYeDVZNTRSeDMrNFNFMHRVRUZud2dPd2djN0pJN1dOcEVIU2hvYnJvL1JBUW5lditDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtdlVnQ2IxMHA1NEgwaXAxVmV4NnJxaklBZEhabDRsdkZJSDNTUG1HNkdZdmVpcWw2YWZGNWRzVzVlMjVMeG1OVmpMYTc3QjdFby9FYmhHcGhXNTREQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NDAwMTE3OTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM4MzIyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd3RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3dELmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmZMWldTS1NQdmNZbUoyMXh2eWo3VDNUMUZQUDdyYjl1OFNsZ3FtbUx4Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjA4NDAzMTA5LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsOF19LFwidGltZXN0YW1wXCI6XCIxNzMyMzgzMTc2NjE5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
