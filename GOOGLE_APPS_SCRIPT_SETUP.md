# Google Apps Script Setup Guide for Investor Form

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Investor Form Data" or similar
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the content from `investor-form-apps-script.js`
4. Save the project with a name like "Investor Form Handler"

## Step 3: Deploy the Script
1. Click "Deploy" → "New Deployment"
2. Choose "Web app" as the type
3. Set the following:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the Web App URL (you'll need this for your React form)

## Step 4: Update Your React Form
1. Open `src/components/investor/InvestorHero.jsx`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your actual Web App URL
3. The URL should look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

## Step 5: Test the Setup
1. Run the `setupSheet()` function in Apps Script to format your sheet
2. Test the form submission
3. Check your Google Sheet for the data

## Features Included:
- ✅ **Automatic Timestamps**: Each submission includes date and time
- ✅ **Arabic Headers**: Sheet headers in Arabic
- ✅ **Auto-formatting**: Headers are styled with your brand colors
- ✅ **Auto-resize**: Columns automatically adjust to content
- ✅ **Error Handling**: Proper error messages in Arabic
- ✅ **Success Confirmation**: Users get confirmation when data is saved

## Data Structure:
The sheet will have these columns:
1. **التاريخ والوقت** (Date and Time)
2. **الإسم و اللقب** (Full Name)
3. **رقم الواتساب** (WhatsApp Number)
4. **أسباب الاهتمام بالاستثمار** (Investment Reasons)

## Security Notes:
- The script is set to "Anyone" access for form submissions
- Only you can view the Google Sheet data
- Consider adding data validation in the Apps Script if needed

## Troubleshooting:
- If you get CORS errors, make sure the Apps Script is deployed as a web app
- If data isn't appearing, check the Apps Script execution logs
- Make sure the Web App URL is correct in your React form
