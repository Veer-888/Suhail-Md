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


global.devs = "923184474176" // Developer Contact
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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_30_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWFM2OTNqNi90a1A0TmxxZCtwTEJjbGMrak9KOU1ucTZpelp1TXhHUTlJWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk0NjIyNDgwOTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgyRjM4MUI1NjdFMEExNTIzQURBNDBEOTYxNEUzMDc3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDIwMDYzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5aW4yMUtiS1RzUzI5SXc3UkhsNzhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5MTk2YzY1LTE0NTQtNDhiMC04ZGM1LTIyOGQ3MWIyMTU2MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyNTUsXG4gICAgICAyMTYsXG4gICAgICA5MCxcbiAgICAgIDAsXG4gICAgICA5NCxcbiAgICAgIDIwNixcbiAgICAgIDE0MixcbiAgICAgIDc0LFxuICAgICAgMjMzLFxuICAgICAgMTY0LFxuICAgICAgMjA2LFxuICAgICAgNTEsXG4gICAgICAyMDgsXG4gICAgICAxNjksXG4gICAgICAxODYsXG4gICAgICAyNixcbiAgICAgIDExMCxcbiAgICAgIDEwMCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAyMTAsXG4gICAgICA4OSxcbiAgICAgIDEzMCxcbiAgICAgIDE1MCxcbiAgICAgIDE0MyxcbiAgICAgIDkwLFxuICAgICAgMCxcbiAgICAgIDExMixcbiAgICAgIDU1LFxuICAgICAgOTUsXG4gICAgICAxODAsXG4gICAgICAxMDUsXG4gICAgICAxMzUsXG4gICAgICAxNTYsXG4gICAgICAyMTcsXG4gICAgICA3NCxcbiAgICAgIDgwLFxuICAgICAgMTc0LFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktKOVNYQUU3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk0NjIyNDgwOTQ6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNDkyMjI3OTIxNTIxOTozM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLijq/qr63MvfCdhITwnYSA8J2EhPCfh7nig5/wnZeb4b6wxpnwnZiCyoDwnYa86q+tzZPimpjwn5SlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzc1bWJvR0VMUGJvTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwMGYyTUV6THRXclB5NFUvY1ZNc3lObUtHeUpNZHpSMThJSndQVmNiQ1FJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjYrSC8ybU5kVlQ2UmMzekNqclJaM2xYRWN5NHNwNWE4T2hNZnR5UkJYNUQ1N2tXdXREbFgyT0F3L3h1dmJETWk4VnFONS9tYndDT0ozM1RIQzM4ZUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFSN3orTmZKR2VJL3dqMWtreTNtTTNZRnppUWhuT1JDdDAzSUN4cU1IRUQyOTRIT0VNNVZmTzJxUG9ScGJwTCtLb2oybEg0WTMzOURmUDlJMEMyWEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTQ2MjI0ODA5NDozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMDA2MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHZFRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdkVC5qc29uIjogIntcImtleURhdGFcIjpcIldKYk1TdGFqZzMyWCs0NjBCK0lob3BmNUw4cXI2NVF0WTZkd2xWNnhXblU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTczMjY3Mjc0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDIwMDYwMzA4OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
