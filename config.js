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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_08_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRM1JWeFZJQVZVMjZqM1lJblZ2TVEzTnVXUklieXBNcHNtQVZReG1laDVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKRVZJZFpmUVNJQ3k5SFQ3QmpSS2R3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1NGRhZTBmLTE0MzctNDE3OS1iOGJmLWIzNTI4NGE5NjJiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDI0MyxcbiAgICAgIDE4OCxcbiAgICAgIDI4LFxuICAgICAgMTk3LFxuICAgICAgMTk4LFxuICAgICAgMTg5LFxuICAgICAgMTUsXG4gICAgICAyNTUsXG4gICAgICAyMTgsXG4gICAgICA3NixcbiAgICAgIDE3NSxcbiAgICAgIDczLFxuICAgICAgOSxcbiAgICAgIDI0MCxcbiAgICAgIDg0LFxuICAgICAgMjU1LFxuICAgICAgMjIyLFxuICAgICAgMjM3LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAyMTgsXG4gICAgICAxMjgsXG4gICAgICAxMTEsXG4gICAgICAyNTAsXG4gICAgICAxODYsXG4gICAgICAxMDEsXG4gICAgICAyNDgsXG4gICAgICAxNDUsXG4gICAgICAxMTIsXG4gICAgICAxMDAsXG4gICAgICA3NixcbiAgICAgIDEwOCxcbiAgICAgIDYxLFxuICAgICAgMjA1LFxuICAgICAgMCxcbiAgICAgIDIxMixcbiAgICAgIDEwNyxcbiAgICAgIDE5NCxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXUitmNEZFTjNiZ0xvR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL0lzSk1FaXRCNndBYXhxMlZ1QUpjTENNckVSblN5RjA4bS9hbTNVM2xWRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrUDRyQWtLK3pTYnljZ3Q1TTU4MmRWbGRKT3g1eVVTODRmcUZNa24zdWljMG5ERnJzTE9PYzh4SjZsSitsalliOEVybkgxQjY2Zy9jV3dWdlVlRDVCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSYnpWWkhoVjBaVVJHd1V6dWxKdE5VRWR6U08wd3E4T0RZNUxQUjlBQnVSNk1HaWxOSzRCWktZUnBTYWVqUlVvNnppb1dsbWE3YWI1ZUgxMlpQRXNDZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU0MDAxMTc5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjA0ODA3NzE4NTEzMTozQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTQwMDExNzk6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyNTkyOTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdi9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd2X18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxR0NRNzFjRVgwdkhremp1OXI0ZXFPRm8rRk42enROVVlDRG5GTTJXWm5nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDg0MDMxMDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDYzOTkxNTMzN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "DAVIN bot",
  packname: process.env.PACK_NAME || "Inesh Davin",
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
